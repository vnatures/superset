"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9915],{11188:(e,t,r)=>{r.d(t,{A:()=>m});var a=r(96453),i=r(95579),s=r(78360),n=r(69633),l=r(8143),o=r(69172),c=r(10286),d=r(45738),u=r(16294),h=r(73135),g=r(2445);d.A.registerLanguage("sql",s.A),d.A.registerLanguage("markdown",l.A),d.A.registerLanguage("html",n.A),d.A.registerLanguage("json",o.A);const p=a.I4.div`
  margin-top: -24px;

  &:hover {
    svg {
      visibility: visible;
    }
  }

  svg {
    position: relative;
    top: 40px;
    left: 512px;
    visibility: hidden;
    margin: -4px;
    color: ${({theme:e})=>e.colors.grayscale.base};
  }
`;function m({addDangerToast:e,addSuccessToast:t,children:r,...a}){return(0,g.FD)(p,{children:[(0,g.Y)(u.A.CopyOutlined,{tabIndex:0,role:"button",onClick:a=>{var s;a.preventDefault(),a.currentTarget.blur(),s=r,(0,h.A)((()=>Promise.resolve(s))).then((()=>{t&&t((0,i.t)("SQL Copied!"))})).catch((()=>{e&&e((0,i.t)("Sorry, your browser does not support copying."))}))}}),(0,g.Y)(d.A,{style:c.A,...a,children:r})]})}},14318:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(96540);function i({queries:e,fetchData:t,currentQueryId:r}){const i=e.findIndex((e=>e.id===r)),[s,n]=(0,a.useState)(i),[l,o]=(0,a.useState)(!1),[c,d]=(0,a.useState)(!1);function u(){o(0===s),d(s===e.length-1)}function h(r){const a=s+(r?-1:1);a>=0&&a<e.length&&(t(e[a].id),n(a),u())}return(0,a.useEffect)((()=>{u()})),{handleKeyPress:function(t){s>=0&&s<e.length&&("ArrowDown"===t.key||"k"===t.key?(t.preventDefault(),h(!1)):"ArrowUp"!==t.key&&"j"!==t.key||(t.preventDefault(),h(!0)))},handleDataChange:h,disablePrevious:l,disableNext:c}}},52825:(e,t,r)=>{r.r(t),r.d(t,{default:()=>J});var a=r(96540),i=r(61574),s=r(71519),n=r(96453),l=r(95579),o=r(35742),c=r(69108),d=r(17437),u=r(30703),h=r(5261),g=r(50500),p=r(35768),m=r(51713),y=r(64535),b=r(93514),v=r(39854),f=r(19129),A=r(45738),S=r(78360),x=r(10286),q=r(27023),k=r(23193),w=r(16294),C=r(85861),Y=r(46942),D=r.n(Y),H=r(46920),$=r(11188),F=r(14318),T=r(2445);const z=n.I4.div`
  color: ${({theme:e})=>e.colors.secondary.light2};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  margin-bottom: 0;
`,I=n.I4.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  font-size: ${({theme:e})=>e.typography.sizes.m}px;
  padding: 4px 0 24px 0;
`,L=n.I4.div`
  margin: 0 0 ${({theme:e})=>6*e.gridUnit}px 0;
`,U=n.I4.div`
  display: inline;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  padding: ${({theme:e})=>2*e.gridUnit}px
    ${({theme:e})=>4*e.gridUnit}px;
  margin-right: ${({theme:e})=>4*e.gridUnit}px;
  color: ${({theme:e})=>e.colors.secondary.dark1};

  &.active,
  &:focus,
  &:hover {
    background: ${({theme:e})=>e.colors.secondary.light4};
    border-bottom: none;
    border-radius: ${({theme:e})=>e.borderRadius}px;
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  &:hover:not(.active) {
    background: ${({theme:e})=>e.colors.secondary.light5};
  }
`,Q=(0,n.I4)(C.Ay)`
  .antd5-modal-body {
    padding: ${({theme:e})=>6*e.gridUnit}px;
  }

  pre {
    font-size: ${({theme:e})=>e.typography.sizes.xs}px;
    font-weight: ${({theme:e})=>e.typography.weights.normal};
    line-height: ${({theme:e})=>e.typography.sizes.l}px;
    height: 375px;
    border: none;
  }
`,R=(0,h.Ay)((function({onHide:e,openInSqlLab:t,queries:r,query:i,fetchData:s,show:n,addDangerToast:o,addSuccessToast:c}){const{handleKeyPress:d,handleDataChange:u,disablePrevious:h,disableNext:g}=(0,F.A)({queries:r,currentQueryId:i.id,fetchData:s}),[p,m]=(0,a.useState)("user"),{id:y,sql:b,executed_sql:v}=i;return(0,T.Y)("div",{role:"none",onKeyUp:d,children:(0,T.FD)(Q,{onHide:e,show:n,title:(0,l.t)("Query preview"),footer:(0,T.FD)(T.FK,{children:[(0,T.Y)(H.A,{disabled:h,onClick:()=>u(!0),children:(0,l.t)("Previous")},"previous-query"),(0,T.Y)(H.A,{disabled:g,onClick:()=>u(!1),children:(0,l.t)("Next")},"next-query"),(0,T.Y)(H.A,{buttonStyle:"primary",onClick:()=>t(y),children:(0,l.t)("Open in SQL Lab")},"open-in-sql-lab")]}),children:[(0,T.Y)(z,{children:(0,l.t)("Tab name")}),(0,T.Y)(I,{children:i.tab_name}),(0,T.FD)(L,{children:[(0,T.Y)(U,{role:"button",className:D()({active:"user"===p}),onClick:()=>m("user"),children:(0,l.t)("User query")}),(0,T.Y)(U,{role:"button",className:D()({active:"executed"===p}),onClick:()=>m("executed"),children:(0,l.t)("Executed query")})]}),(0,T.Y)($.A,{addDangerToast:o,addSuccessToast:c,language:"sql",children:("user"===p?b:v)||""})]})})}));var _=r(95272),N=r(25106),O=r(7089);const Z=(0,n.I4)(v.A)`
  table .table-cell {
    vertical-align: top;
  }
`;A.A.registerLanguage("sql",S.A);const P=(0,n.I4)(A.A)`
  height: ${({theme:e})=>26*e.gridUnit}px;
  overflow: hidden !important; /* needed to override inline styles */
  text-overflow: ellipsis;
  white-space: nowrap;
`,K=n.I4.div`
  .count {
    margin-left: 5px;
    color: ${({theme:e})=>e.colors.primary.base};
    text-decoration: underline;
    cursor: pointer;
  }
`,B=n.I4.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
`,E=(0,n.I4)(p.Ay)`
  text-align: left;
  font-family: ${({theme:e})=>e.typography.families.monospace};
`,J=(0,h.Ay)((function({addDangerToast:e}){const{state:{loading:t,resourceCount:r,resourceCollection:h},fetchData:p}=(0,g.RU)("query",(0,l.t)("Query history"),e,!1),[A,S]=(0,a.useState)(),C=(0,n.DP)(),Y=(0,i.W6)(),D=(0,a.useCallback)((t=>{o.A.get({endpoint:`/api/v1/query/${t}`}).then((({json:e={}})=>{S({...e.result})}),(0,u.JF)((t=>e((0,l.t)("There was an issue previewing the selected query. %s",t)))))}),[e]),H={activeChild:"Query history",...b.F},$=[{id:k.H.StartTime,desc:!0}],F=(0,a.useMemo)((()=>[{Cell:({row:{original:{status:e}}})=>{const t={name:null,label:""};return e===c.kZ.Success?(t.name=(0,T.Y)(w.A.CheckOutlined,{iconSize:"m",iconColor:C.colors.success.base,css:d.AH`
                  vertical-align: -webkit-baseline-middle;
                `}),t.label=(0,l.t)("Success")):e===c.kZ.Failed||e===c.kZ.Stopped?(t.name=(0,T.Y)(w.A.CloseOutlined,{iconSize:"xs",iconColor:e===c.kZ.Failed?C.colors.error.base:C.colors.grayscale.base}),t.label=(0,l.t)("Failed")):e===c.kZ.Running?(t.name=(0,T.Y)(w.A.Running,{iconColor:C.colors.primary.base}),t.label=(0,l.t)("Running")):e===c.kZ.TimedOut?(t.name=(0,T.Y)(w.A.CircleSolid,{iconColor:C.colors.grayscale.light1}),t.label=(0,l.t)("Offline")):e!==c.kZ.Scheduled&&e!==c.kZ.Pending||(t.name=(0,T.Y)(w.A.Queued,{}),t.label=(0,l.t)("Scheduled")),(0,T.Y)(f.m_,{title:t.label,placement:"bottom",children:(0,T.Y)("span",{children:t.name})})},accessor:k.H.Status,size:"xs",disableSortBy:!0},{accessor:k.H.StartTime,Header:(0,l.t)("Time"),size:"xl",Cell:({row:{original:{start_time:e}}})=>{const t=O.XV.utc(e).local().format(q.QU).split(" ");return(0,T.FD)(T.FK,{children:[t[0]," ",(0,T.Y)("br",{}),t[1]]})}},{Header:(0,l.t)("Duration"),size:"xl",Cell:({row:{original:{status:e,start_time:t,end_time:r}}})=>{const a=e===c.kZ.Failed?"danger":e,i=r?(0,O.XV)(O.XV.utc(r-t)).format(q.os):"00:00:00.000";return(0,T.Y)(E,{type:a,role:"timer",children:i})}},{accessor:k.H.TabName,Header:(0,l.t)("Tab name"),size:"xl"},{accessor:k.H.DatabaseName,Header:(0,l.t)("Database"),size:"xl"},{accessor:k.H.Database,hidden:!0},{accessor:k.H.Schema,Header:(0,l.t)("Schema"),size:"xl"},{Cell:({row:{original:{sql_tables:e=[]}}})=>{const t=e.map((e=>e.table)),r=t.length>0?t.shift():"";return t.length?(0,T.FD)(K,{children:[(0,T.Y)("span",{children:r}),(0,T.Y)(y.A,{placement:"right",title:(0,l.t)("TABLES"),trigger:"click",content:(0,T.Y)(T.FK,{children:t.map((e=>(0,T.Y)(B,{children:e},e)))}),children:(0,T.FD)("span",{className:"count",children:["(+",t.length,")"]})})]}):r},accessor:k.H.SqlTables,Header:(0,l.t)("Tables"),size:"xl",disableSortBy:!0},{accessor:k.H.UserFirstName,Header:(0,l.t)("User"),size:"xl",Cell:({row:{original:{user:e}}})=>(0,N.A)(e)},{accessor:k.H.User,hidden:!0},{accessor:k.H.Rows,Header:(0,l.t)("Rows"),size:"md"},{accessor:k.H.Sql,Header:(0,l.t)("SQL"),Cell:({row:{original:e,id:t}})=>(0,T.Y)("div",{tabIndex:0,role:"button",onClick:()=>S(e),children:(0,T.Y)(P,{language:"sql",style:x.A,children:(0,u.s4)(e.sql,4)})})},{Header:(0,l.t)("Actions"),id:"actions",disableSortBy:!0,Cell:({row:{original:{id:e}}})=>(0,T.Y)(f.m_,{title:(0,l.t)("Open query in SQL Lab"),placement:"bottom",children:(0,T.Y)(s.N_,{to:`/sqllab?queryId=${e}`,children:(0,T.Y)(w.A.Full,{iconSize:"l"})})})}]),[]),z=(0,a.useMemo)((()=>[{Header:(0,l.t)("Database"),key:"database",id:"database",input:"select",operator:v.t.RelationOneMany,unfilteredLabel:(0,l.t)("All"),fetchSelects:(0,u.u1)("query","database",(0,u.JF)((t=>e((0,l.t)("An error occurred while fetching database values: %s",t))))),paginate:!0},{Header:(0,l.t)("State"),key:"state",id:"status",input:"select",operator:v.t.Equals,unfilteredLabel:"All",fetchSelects:(0,u.$C)("query","status",(0,u.JF)((t=>e((0,l.t)("An error occurred while fetching schema values: %s",t))))),paginate:!0},{Header:(0,l.t)("User"),key:"user",id:"user",input:"select",operator:v.t.RelationOneMany,unfilteredLabel:"All",fetchSelects:(0,u.u1)("query","user",(0,u.JF)((t=>e((0,l.t)("An error occurred while fetching user values: %s",t))))),paginate:!0},{Header:(0,l.t)("Time range"),key:"start_time",id:"start_time",input:"datetime_range",operator:v.t.Between},{Header:(0,l.t)("Search by query text"),key:"sql",id:"sql",input:"search",operator:v.t.Contains}]),[e]);return(0,T.FD)(T.FK,{children:[(0,T.Y)(m.A,{...H}),A&&(0,T.Y)(R,{onHide:()=>S(void 0),query:A,queries:h,fetchData:D,openInSqlLab:e=>Y.push(`/sqllab?queryId=${e}`),show:!0}),(0,T.Y)(Z,{className:"query-history-list-view",columns:F,count:r,data:h,fetchData:p,filters:z,initialSort:$,loading:t,pageSize:25,highlightRowId:null==A?void 0:A.id,refreshData:()=>{},addDangerToast:e,addSuccessToast:_.WR})]})}))},64535:(e,t,r)=>{r.d(t,{A:()=>s});var a=r(66265),i=r(2445);const s=e=>(0,i.Y)(a.A,{...e})},93514:(e,t,r)=>{r.d(t,{F:()=>i});var a=r(95579);const i={name:(0,a.t)("SQL"),tabs:[{name:"Saved queries",label:(0,a.t)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:(0,a.t)("Query history"),url:"/sqllab/history/",usesRouter:!0}]}}}]);