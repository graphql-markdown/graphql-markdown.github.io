"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[4947],{1959:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>l,Details:()=>g,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>i,toc:()=>h});var a=t(5893),s=t(1151),r=t(7294);const d={id:"update-gpa",title:"UpdateGPA",hide_table_of_contents:!1},c=void 0,i={id:"grade/mutations/update-gpa",title:"UpdateGPA",description:"No description",source:"@site/examples/group-by/grade/mutations/update-gpa.mdx",sourceDirName:"grade/mutations",slug:"/grade/mutations/update-gpa",permalink:"/examples/group-by/grade/mutations/update-gpa",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"update-gpa",title:"UpdateGPA",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Mutations",permalink:"/examples/group-by/category/mutations-1"},next:{title:"UpdateGrade",permalink:"/examples/group-by/grade/mutations/update-grade"}},o={},l=()=>{const e={span:"span",...(0,s.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,s.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,s.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},h=[{value:"Directives",id:"directives",level:3},{value:"<code>auth</code>",id:"auth",level:4},{value:"Arguments",id:"arguments",level:3},{value:'<code>input</code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inputint--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Int</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"int--",level:4}],g=({dataOpen:e,dataClose:n,children:t,startOpen:d=!1})=>{const c={details:"details",summary:"summary",...(0,s.a)()},[i,o]=(0,r.useState)(d);return(0,a.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(c.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&t]})};function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p,{class:"badge badge--secondary",text:"@auth"}),"\n",(0,a.jsx)(n.p,{children:"No description"}),"\n",(0,a.jsxs)(n.p,{children:["This requires the current user to be in ",(0,a.jsx)(n.code,{children:"ADMIN"})," role."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"UpdateGPA(\n  input: Int\n): Int\n"})}),"\n",(0,a.jsx)(n.h3,{id:"directives",children:"Directives"}),"\n",(0,a.jsx)(n.h4,{id:"auth",children:(0,a.jsx)(n.a,{href:"/examples/group-by/common/directives/auth",children:(0,a.jsx)(n.code,{children:"auth"})})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["This requires the current user to be in ",(0,a.jsx)(n.code,{children:"ADMIN"})," role."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(n.h4,{id:"inputint--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsx)(n.code,{children:"input"})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/examples/group-by/common/scalars/int",children:(0,a.jsx)(n.code,{children:"Int"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,a.jsxs)(n.h4,{id:"int--",children:[(0,a.jsx)(n.a,{href:"/examples/group-by/common/scalars/int",children:(0,a.jsx)(n.code,{children:"Int"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"Int"})," scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1."]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>d});var a=t(7294);const s={},r=a.createContext(s);function d(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);