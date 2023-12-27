"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2882],{7950:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>x,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=s(5893),n=s(1151),r=s(7294);const l={id:"complexity",title:"complexity"},c=void 0,o={id:"common/directives/complexity",title:"complexity",description:"Example of custom directive for customDirective.",source:"@site/examples/group-by/common/directives/complexity.mdx",sourceDirName:"common/directives",slug:"/common/directives/complexity",permalink:"/examples/group-by/common/directives/complexity",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"complexity",title:"complexity"},sidebar:"schemaSidebar",previous:{title:"beta",permalink:"/examples/group-by/common/directives/beta"},next:{title:"deprecated",permalink:"/examples/group-by/common/directives/deprecated"}},i={},d=()=>{const e={span:"span",...(0,n.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const t={a:"a",...(0,n.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,n.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code>value</code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"valueint---",level:4},{value:'<code>multipliers</code><Bullet></Bullet><code>[String!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"multipliersstring---",level:4}],x=({dataOpen:e,dataClose:t,children:s,startOpen:l=!1})=>{const c={details:"details",summary:"summary",...(0,n.a)()},[o,i]=(0,r.useState)(l);return(0,a.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(c.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&s]})};function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Example of custom directive for ",(0,a.jsx)(t.code,{children:"customDirective"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["See ",(0,a.jsx)(t.a,{href:"https://graphql-markdown.github.io/docs/settings#customdirective",children:"documentation"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"directive @complexity(\n  value: Int!\n  multipliers: [String!]\n) on FIELD_DEFINITION\n"})}),"\n",(0,a.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(t.h4,{id:"valueint---",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsx)(t.code,{children:"value"})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/examples/group-by/common/scalars/int",children:(0,a.jsx)(t.code,{children:"Int!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The level of complexity to resolve the current field."}),"\n",(0,a.jsx)(t.p,{children:"If the field needs to call an expensive service to resolve itself, then the complexity should be at a high level but if the field is easy to resolve and not an expensive operation, the complexity should be at a low level."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"multipliersstring---",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsx)(t.code,{children:"multipliers"})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/examples/group-by/common/scalars/string",children:(0,a.jsx)(t.code,{children:"[String!]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"An array containing names of parameters present in the GraphQL field."}),"\n",(0,a.jsx)(t.p,{children:"Use parameters values to compute the field's cost dynamically. If the parameter is an array, its multiplier value will be the length of the array."}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>l});var a=s(7294);const n={},r=a.createContext(n);function l(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);