"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9866],{1692:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>u,Bullet:()=>i,Details:()=>p,SpecifiedBy:()=>h,assets:()=>d,contentTitle:()=>t,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>x});var r=n(5893),a=n(1151),c=n(7294);const o={id:"search-role",title:"searchRole",hide_table_of_contents:!1},t=void 0,l={id:"common/queries/search-role",title:"searchRole",description:"No description",source:"@site/examples/group-by/common/queries/search-role.mdx",sourceDirName:"common/queries",slug:"/common/queries/search-role",permalink:"/examples/group-by/common/queries/search-role",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"search-role",title:"searchRole",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Queries",permalink:"/examples/group-by/category/queries"},next:{title:"Scalars",permalink:"/examples/group-by/category/scalars"}},d={},i=()=>{const e={span:"span",...(0,a.a)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,a.a)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const s={span:"span",...(0,a.a)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s.span,{className:e.class,children:e.text})})},x=[{value:"Directives",id:"directives",level:3},{value:"<code>complexity</code>",id:"complexity",level:4},{value:"<code>auth</code>",id:"auth",level:4},{value:"Arguments",id:"arguments",level:3},{value:'<code>roles</code><Bullet></Bullet><code>[Roles!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rolesroles---",level:4},{value:"Type",id:"type",level:3},{value:'<code>Int</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"int--",level:4}],p=({dataOpen:e,dataClose:s,children:n,startOpen:o=!1})=>{const t={details:"details",summary:"summary",...(0,a.a)()},[l,d]=(0,c.useState)(o);return(0,r.jsxs)(t.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(t.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:l?e:s}),l&&n]})};function m(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{class:"badge badge--secondary",text:"@complexity"}),"\n",(0,r.jsx)(u,{class:"badge badge--secondary",text:"@auth"}),"\n",(0,r.jsx)(u,{class:"badge badge--danger",text:"BETA"}),"\n",(0,r.jsx)(s.p,{children:"No description"}),"\n",(0,r.jsxs)(s.p,{children:["This has an additional cost of ",(0,r.jsx)(s.code,{children:"2"})," points per ",(0,r.jsx)(s.code,{children:"roles"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["This requires the current user to be in ",(0,r.jsx)(s.code,{children:"ADMIN"})," role."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",children:"searchRole(\n  roles: [Roles!]! = ADMIN\n): Int!\n"})}),"\n",(0,r.jsx)(s.h3,{id:"directives",children:"Directives"}),"\n",(0,r.jsx)(s.h4,{id:"complexity",children:(0,r.jsx)(s.a,{href:"/examples/group-by/common/directives/complexity",children:(0,r.jsx)(s.code,{children:"complexity"})})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["This has an additional cost of ",(0,r.jsx)(s.code,{children:"2"})," points per ",(0,r.jsx)(s.code,{children:"roles"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"auth",children:(0,r.jsx)(s.a,{href:"/examples/group-by/common/directives/auth",children:(0,r.jsx)(s.code,{children:"auth"})})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["This requires the current user to be in ",(0,r.jsx)(s.code,{children:"ADMIN"})," role."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(s.h4,{id:"rolesroles---",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsx)(s.code,{children:"roles"})}),(0,r.jsx)(i,{}),(0,r.jsx)(s.a,{href:"/examples/group-by/common/enums/roles",children:(0,r.jsx)(s.code,{children:"[Roles!]!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"enum"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,r.jsx)(s.blockquote,{children:"\n"}),"\n",(0,r.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,r.jsxs)(s.h4,{id:"int--",children:[(0,r.jsx)(s.a,{href:"/examples/group-by/common/scalars/int",children:(0,r.jsx)(s.code,{children:"Int"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"Int"})," scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1."]}),"\n"]})]})}function g(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>t,a:()=>o});var r=n(7294);const a={},c=r.createContext(a);function o(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);