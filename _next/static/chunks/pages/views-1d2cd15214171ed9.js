(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{91622:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/views",function(){return i(79233)}])},30287:function(n,e,i){"use strict";i.d(e,{KB:function(){return Relations},Kf:function(){return C},gU:function(){return T},vk:function(){return w},vP:function(){return v},sW:function(){return _}});var r=i(85893),t=i(47741),l=i(66479),c=i(39653),o=i(50471),s=i(40639),a=i(36696),d=i(63679),u=i(9008),h=i.n(u),m=i(41664),x=i.n(m),j=i(67294),p=i(44527);function extractColumnInfo(n){var e,i,r,t;return"columnDesc"in n?"".concat(null===(e=n.columnDesc)||void 0===e?void 0:e.name," (").concat(null===(r=n.columnDesc)||void 0===r?void 0:null===(i=r.columnType)||void 0===i?void 0:i.typeName,")"):"".concat(n.name," (").concat(null===(t=n.dataType)||void 0===t?void 0:t.typeName,")")}let f=(0,d.ZP)(()=>i.e(171).then(i.t.bind(i,55171,23))),w={name:"Depends",width:1,content:n=>(0,r.jsx)(x(),{href:"/streaming_graph/?id=".concat(n.id),children:(0,r.jsx)(t.zx,{size:"sm","aria-label":"view dependents",colorScheme:"blue",variant:"link",children:"D"})})},v={name:"Primary Key",width:1,content:n=>n.pk.map(n=>n.columnIndex).map(e=>n.columns[e]).map(n=>extractColumnInfo(n)).join(", ")},T={name:"Connector",width:3,content:n=>{var e;return null!==(e=n.withProperties.connector)&&void 0!==e?e:"unknown"}},C={name:"Connector",width:3,content:n=>{var e;return null!==(e=n.properties.connector)&&void 0!==e?e:"unknown"}},_=[w,{name:"Fragments",width:1,content:n=>(0,r.jsx)(x(),{href:"/streaming_plan/?id=".concat(n.id),children:(0,r.jsx)(t.zx,{size:"sm","aria-label":"view fragments",colorScheme:"blue",variant:"link",children:"F"})})}];function Relations(n,e,i){let d=(0,l.pm)(),[u,m]=(0,j.useState)([]);(0,j.useEffect)(()=>((async function(){try{m(await e())}catch(n){d({title:"Error Occurred",description:n.toString(),status:"error",duration:5e3,isClosable:!0}),console.error(n)}})(),()=>{}),[d,e]);let{isOpen:x,onOpen:w,onClose:v}=(0,c.qY)(),[T,C]=(0,j.useState)(),openRelationCatalog=n=>{n&&(C(n),w())},_=(0,r.jsxs)(o.u_,{isOpen:x,onClose:v,size:"3xl",children:[(0,r.jsx)(o.ZA,{}),(0,r.jsxs)(o.hz,{children:[(0,r.jsxs)(o.xB,{children:["Catalog of ",null==T?void 0:T.id," - ",null==T?void 0:T.name]}),(0,r.jsx)(o.ol,{}),(0,r.jsx)(o.fe,{children:x&&T&&(0,r.jsx)(f,{src:T,collapsed:1,name:null,displayDataTypes:!1})}),(0,r.jsx)(o.mz,{children:(0,r.jsx)(t.zx,{colorScheme:"blue",mr:3,onClick:v,children:"Close"})})]})]}),k=(0,r.jsxs)(s.xu,{p:3,children:[(0,r.jsx)(p.Z,{children:n}),(0,r.jsx)(a.xJ,{children:(0,r.jsxs)(a.iA,{variant:"simple",size:"sm",maxWidth:"full",children:[(0,r.jsx)(a.hr,{children:(0,r.jsxs)(a.Tr,{children:[(0,r.jsx)(a.Th,{width:3,children:"Id"}),(0,r.jsx)(a.Th,{width:5,children:"Name"}),(0,r.jsx)(a.Th,{width:3,children:"Owner"}),i.map(n=>(0,r.jsx)(a.Th,{width:n.width,children:n.name},n.name)),(0,r.jsx)(a.Th,{children:"Visible Columns"})]})}),(0,r.jsx)(a.p3,{children:u.map(n=>(0,r.jsxs)(a.Tr,{children:[(0,r.jsx)(a.Td,{children:(0,r.jsx)(t.zx,{size:"sm","aria-label":"view catalog",colorScheme:"blue",variant:"link",onClick:()=>openRelationCatalog(n),children:n.id})}),(0,r.jsx)(a.Td,{children:n.name}),(0,r.jsx)(a.Td,{children:n.owner}),i.map(e=>(0,r.jsx)(a.Td,{children:e.content(n)},e.name)),(0,r.jsx)(a.Td,{overflowWrap:"normal",children:n.columns.filter(n=>!("isHidden"in n)||!n.isHidden).map(n=>extractColumnInfo(n)).join(", ")})]},n.id))})]})})]});return(0,r.jsxs)(j.Fragment,{children:[(0,r.jsx)(h(),{children:(0,r.jsx)("title",{children:n})}),_,k]})}},79233:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return Views}});var r=i(30287),t=i(35413);function Views(){return(0,r.KB)("Views",t.Ru,[])}}},function(n){n.O(0,[662,184,476,155,383,413,774,888,179],function(){return n(n.s=91622)}),_N_E=n.O()}]);