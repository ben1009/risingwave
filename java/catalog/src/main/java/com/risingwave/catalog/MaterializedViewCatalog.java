package com.risingwave.catalog;

import com.google.common.collect.ImmutableMap;
import com.risingwave.proto.plan.RowFormatType;
import java.util.Collection;
import org.apache.calcite.rel.RelCollation;
import org.apache.calcite.schema.Schema;
import org.apache.calcite.util.ImmutableIntList;

/** Materialized View Catalog */
public class MaterializedViewCatalog extends TableCatalog {

  private final RelCollation collation;

  private boolean associated;

  public MaterializedViewCatalog(
      TableId id,
      TableName name,
      Collection<ColumnCatalog> columns,
      boolean stream,
      ImmutableIntList primaryKeyColumnIndices,
      DataDistributionType distributionType,
      ImmutableMap<String, String> properties,
      RowFormatType rowFormat,
      String rowSchemaLocation,
      RelCollation collation,
      boolean associated) {
    super(
        id,
        name,
        columns,
        stream,
        primaryKeyColumnIndices,
        distributionType,
        properties,
        rowFormat,
        rowSchemaLocation);
    this.collation = collation;
    this.associated = associated;
  }

  public RelCollation getCollation() {
    return collation;
  }

  @Override
  public boolean isMaterializedView() {
    return true;
  }

  @Override
  public boolean isAssociatedMaterializedView() {
    return associated;
  }

  @Override
  public Schema.TableType getJdbcTableType() {
    return Schema.TableType.MATERIALIZED_VIEW;
  }
}
