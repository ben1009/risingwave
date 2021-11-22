use prost::Message;

use pb_convert::FromProtobuf;
use risingwave_common::array::DataChunk;
use risingwave_common::types::build_from_prost;
use risingwave_pb::plan::plan_node::PlanNodeType;
use risingwave_pb::plan::CreateTableNode;
use risingwave_pb::ToProto;

use crate::executor::{Executor, ExecutorBuilder};
use crate::storage::TableManagerRef;
use risingwave_common::catalog::TableId;
use risingwave_common::catalog::{Field, Schema};
use risingwave_common::error::ErrorCode::{InternalError, ProstError};
use risingwave_common::error::Result;

use super::{BoxedExecutor, BoxedExecutorBuilder};

pub(super) struct CreateTableExecutor {
    table_id: TableId,
    table_manager: TableManagerRef,
    schema: Schema,
}

impl BoxedExecutorBuilder for CreateTableExecutor {
    fn new_boxed_executor(source: &ExecutorBuilder) -> Result<BoxedExecutor> {
        ensure!(source.plan_node().get_node_type() == PlanNodeType::CreateTable);

        let node = CreateTableNode::decode(&(source.plan_node()).get_body().value[..])
            .map_err(ProstError)?;

        let table_id = TableId::from_protobuf(
            node.to_proto::<risingwave_proto::plan::CreateTableNode>()
                .get_table_ref_id(),
        )
        .map_err(|e| InternalError(format!("Failed to parse table id: {:?}", e)))?;

        let fields = node
            .get_column_descs()
            .iter()
            .map(|col| {
                Ok(Field {
                    data_type: build_from_prost(col.get_column_type())?,
                })
            })
            .collect::<Result<Vec<_>>>()?;

        Ok(Box::new(Self {
            table_id,
            table_manager: source.global_task_env().table_manager_ref(),
            schema: Schema { fields },
        }))
    }
}

#[async_trait::async_trait]
impl Executor for CreateTableExecutor {
    async fn open(&mut self) -> Result<()> {
        info!("create table executor initing!");
        Ok(())
    }

    async fn next(&mut self) -> Result<Option<DataChunk>> {
        self.table_manager
            .create_table(&self.table_id, &self.schema)
            .await
            .map(|_| None)
    }

    async fn close(&mut self) -> Result<()> {
        info!("create table executor cleaned!");
        Ok(())
    }

    fn schema(&self) -> &Schema {
        &self.schema
    }
}
