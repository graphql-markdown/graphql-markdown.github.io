"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7856],{6080:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>x});var n=s(74848),a=s(28453),r=s(96540);const l={id:"complexity",title:"complexity"},c=void 0,o={id:"common/directives/complexity",title:"complexity",description:"Example of custom directive for customDirective.",source:"@site/examples/group-by/common/directives/complexity.mdx",sourceDirName:"common/directives",slug:"/common/directives/complexity",permalink:"/examples/group-by/common/directives/complexity",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"complexity",title:"complexity"},sidebar:"schemaSidebar",previous:{title:"beta",permalink:"/examples/group-by/common/directives/beta"},next:{title:"deprecated",permalink:"/examples/group-by/common/directives/deprecated"}},i={},d=()=>{const e={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const t={a:"a",...(0,a.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:t,children:s,startOpen:l=!1})=>{const c={details:"details",summary:"summary",...(0,a.R)()},[o,i]=(0,r.useState)(l);return(0,n.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(c.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&s]})},x=[{value:"Arguments",id:"arguments",level:3},{value:'<code>value</code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"valueint---",level:4},{value:'<code>multipliers</code><Bullet></Bullet><code>[String!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"multipliersstring---",level:4}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Example of custom directive for ",(0,n.jsx)(t.code,{children:"customDirective"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"https://graphql-markdown.dev/docs/settings#customdirective",children:"documentation"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"directive @complexity(\n  value: Int!\n  multipliers: [String!]\n) on FIELD_DEFINITION\n"})}),"\n",(0,n.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(t.h4,{id:"valueint---",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsx)(t.code,{children:"value"})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/examples/group-by/common/scalars/int",children:(0,n.jsx)(t.code,{children:"Int!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The level of complexity to resolve the current field."}),"\n",(0,n.jsx)(t.p,{children:"If the field needs to call an expensive service to resolve itself, then the complexity should be at a high level but if the field is easy to resolve and not an expensive operation, the complexity should be at a low level."}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"multipliersstring---",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsx)(t.code,{children:"multipliers"})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/examples/group-by/common/scalars/string",children:(0,n.jsx)(t.code,{children:"[String!]"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"An array containing names of parameters present in the GraphQL field."}),"\n",(0,n.jsx)(t.p,{children:"Use parameters values to compute the field's cost dynamically. If the parameter is an array, its multiplier value will be the length of the array."}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>c});var n=s(96540);const a={},r=n.createContext(a);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);