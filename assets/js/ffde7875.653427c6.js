"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[5667],{6275:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>p,Bullet:()=>o,Details:()=>u,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var a=s(4848),t=s(8453),d=s(6540);const r={id:"weighted-gpa",title:"WeightedGPA"},c=void 0,i={id:"grade/queries/weighted-gpa",title:"WeightedGPA",description:"No description",source:"@site/examples/group-by/grade/queries/weighted-gpa.mdx",sourceDirName:"grade/queries",slug:"/grade/queries/weighted-gpa",permalink:"/examples/group-by/grade/queries/weighted-gpa",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"weighted-gpa",title:"WeightedGPA"},sidebar:"schemaSidebar",previous:{title:"UnWeightedGPA",permalink:"/examples/group-by/grade/queries/un-weighted-gpa"},next:{title:"Schema Documentation",permalink:"/examples/group-by/"}},l={},o=()=>{const e={span:"span",...(0,t.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,t.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,t.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},h=[{value:"Directives",id:"directives",level:3},{value:"<code>complexity</code>",id:"complexity",level:4},{value:"Arguments",id:"arguments",level:3},{value:'<code>input</code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inputstring--",level:4},{value:'<code>skip</code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"skipint---",level:4},{value:"Type",id:"type",level:3},{value:'<code>Int</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"int--",level:4}],u=({dataOpen:e,dataClose:n,children:s,startOpen:r=!1})=>{const c={details:"details",summary:"summary",...(0,t.R)()},[i,l]=(0,d.useState)(r);return(0,a.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&s]})};function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p,{class:"badge badge--secondary",text:"@complexity"}),"\n",(0,a.jsx)(n.p,{children:"No description"}),"\n",(0,a.jsxs)(n.p,{children:["This has an additional cost of ",(0,a.jsx)(n.code,{children:"3"})," points."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"WeightedGPA(\n  input: String\n  skip: Int!\n): Int\n"})}),"\n",(0,a.jsx)(n.h3,{id:"directives",children:"Directives"}),"\n",(0,a.jsx)(n.h4,{id:"complexity",children:(0,a.jsx)(n.a,{href:"/examples/group-by/common/directives/complexity",children:(0,a.jsx)(n.code,{children:"complexity"})})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["This has an additional cost of ",(0,a.jsx)(n.code,{children:"3"})," points."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(n.h4,{id:"inputstring--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsx)(n.code,{children:"input"})}),(0,a.jsx)(o,{}),(0,a.jsx)(n.a,{href:"/examples/group-by/common/scalars/string",children:(0,a.jsx)(n.code,{children:"String"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(n.h4,{id:"skipint---",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsx)(n.code,{children:"skip"})}),(0,a.jsx)(o,{}),(0,a.jsx)(n.a,{href:"/examples/group-by/common/scalars/int",children:(0,a.jsx)(n.code,{children:"Int!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,a.jsxs)(n.h4,{id:"int--",children:[(0,a.jsx)(n.a,{href:"/examples/group-by/common/scalars/int",children:(0,a.jsx)(n.code,{children:"Int"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"Int"})," scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1."]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var a=s(6540);const t={},d=a.createContext(t);function r(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);