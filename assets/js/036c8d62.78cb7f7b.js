"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[852],{2554:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>g});var n=a(5893),r=a(1151),s=a(7294);const d={id:"update-grade",title:"UpdateGrade",hide_table_of_contents:!1},i=void 0,c={id:"grade/mutations/update-grade",title:"UpdateGrade",description:"No description",source:"@site/examples/group-by/grade/mutations/update-grade.mdx",sourceDirName:"grade/mutations",slug:"/grade/mutations/update-grade",permalink:"/examples/group-by/grade/mutations/update-grade",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"update-grade",title:"UpdateGrade",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UpdateGPA",permalink:"/examples/group-by/grade/mutations/update-gpa"},next:{title:"Queries",permalink:"/examples/group-by/category/queries-2"}},o={},l=()=>{const e={span:"span",...(0,r.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,r.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,r.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},g=[{value:"Directives",id:"directives",level:3},{value:"<code>auth</code>",id:"auth",level:4},{value:"Arguments",id:"arguments",level:3},{value:'<code>input</code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inputstring--",level:4},{value:"Type",id:"type",level:3},{value:'<code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"string--",level:4}],h=({dataOpen:e,dataClose:t,children:a,startOpen:d=!1})=>{const i={details:"details",summary:"summary",...(0,r.a)()},[c,o]=(0,s.useState)(d);return(0,n.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(i.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&a]})};function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,{class:"badge badge--secondary",text:"@auth"}),"\n",(0,n.jsx)(t.p,{children:"No description"}),"\n",(0,n.jsxs)(t.p,{children:["This requires the current user to be in ",(0,n.jsx)(t.code,{children:"ADMIN"})," role."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"UpdateGrade(\n  input: String\n): String\n"})}),"\n",(0,n.jsx)(t.h3,{id:"directives",children:"Directives"}),"\n",(0,n.jsx)(t.h4,{id:"auth",children:(0,n.jsx)(t.a,{href:"/examples/group-by/common/directives/auth",children:(0,n.jsx)(t.code,{children:"auth"})})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["This requires the current user to be in ",(0,n.jsx)(t.code,{children:"ADMIN"})," role."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(t.h4,{id:"inputstring--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsx)(t.code,{children:"input"})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/examples/group-by/common/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(t.h4,{id:"string--",children:[(0,n.jsx)(t.a,{href:"/examples/group-by/common/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"String"})," scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text."]}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>d});var n=a(7294);const r={},s=n.createContext(r);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);