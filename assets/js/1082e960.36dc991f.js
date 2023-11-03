"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7481],{8999:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>h,Bullet:()=>l,Details:()=>g,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>p});var t=n(5893),r=n(1151),a=n(7294);const d={id:"add-course",title:"AddCourse",hide_table_of_contents:!1},o=void 0,c={id:"course/mutations/add-course",title:"AddCourse",description:"No description",source:"@site/examples/group-by/course/mutations/add-course.mdx",sourceDirName:"course/mutations",slug:"/course/mutations/add-course",permalink:"/examples/group-by/course/mutations/add-course",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"add-course",title:"AddCourse",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Mutations",permalink:"/examples/group-by/category/mutations"},next:{title:"DropCourse",permalink:"/examples/group-by/course/mutations/drop-course"}},i={},l=()=>{const e={span:"span",...(0,r.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const s={a:"a",...(0,r.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const s={span:"span",...(0,r.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.span,{className:e.class,children:e.text})})},p=[{value:"Directives",id:"directives",level:3},{value:"<code>auth</code>",id:"auth",level:4},{value:"Arguments",id:"arguments",level:3},{value:'<code>input</code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inputstring--",level:4},{value:"Type",id:"type",level:3},{value:'<code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"string--",level:4}],g=({dataOpen:e,dataClose:s,children:n,startOpen:d=!1})=>{const o={details:"details",summary:"summary",...(0,r.a)()},[c,i]=(0,a.useState)(d);return(0,t.jsxs)(o.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(o.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:c?e:s}),c&&n]})};function m(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h,{class:"badge badge--secondary",text:"@auth"}),"\n",(0,t.jsx)(s.p,{children:"No description"}),"\n",(0,t.jsxs)(s.p,{children:["This requires the current user to be in ",(0,t.jsx)(s.code,{children:"ADMIN"})," role."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"AddCourse(\n  input: String\n): String\n"})}),"\n",(0,t.jsx)(s.h3,{id:"directives",children:"Directives"}),"\n",(0,t.jsx)(s.h4,{id:"auth",children:(0,t.jsx)(s.a,{href:"/examples/group-by/common/directives/auth",children:(0,t.jsx)(s.code,{children:"auth"})})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["This requires the current user to be in ",(0,t.jsx)(s.code,{children:"ADMIN"})," role."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(s.h4,{id:"inputstring--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsx)(s.code,{children:"input"})}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/examples/group-by/common/scalars/string",children:(0,t.jsx)(s.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,t.jsxs)(s.h4,{id:"string--",children:[(0,t.jsx)(s.a,{href:"/examples/group-by/common/scalars/string",children:(0,t.jsx)(s.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"String"})," scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text."]}),"\n"]})]})}function x(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>d});var t=n(7294);const r={},a=t.createContext(r);function d(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);