"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3607],{1789:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>c,Details:()=>x,SpecifiedBy:()=>p,assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var s=t(5893),a=t(1151),l=t(7294);const i={pagination_next:null,pagination_prev:null,id:"like",title:"Like"},r=void 0,d={id:"api/queries/like",title:"Like",description:"Like query",source:"@site/examples/default/api/queries/like.mdx",sourceDirName:"api/queries",slug:"/api/queries/like",permalink:"/examples/default/api/queries/like",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"like",title:"Like"},sidebar:"schemaSidebar"},o={},c=()=>{const e={span:"span",...(0,a.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,a.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,a.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>Like.<b>likeableId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"likelikeableidint-",level:4},{value:'<code>Like.<b>type</b></code><Bullet></Bullet><code>LikeableType</code> <Badge class="badge badge--secondary"></Badge>',id:"liketypelikeabletype-",level:4},{value:"Type",id:"type",level:3},{value:'<code>User</code> <Badge class="badge badge--secondary"></Badge>',id:"user-",level:4}],x=({dataOpen:e,dataClose:n,children:t,startOpen:i=!1})=>{const r={details:"details",summary:"summary",...(0,a.a)()},[d,o]=(0,l.useState)(i);return(0,s.jsxs)(r.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(r.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&t]})};function b(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t,{children:[(0,s.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,s.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,s.jsx)(n.p,{children:"Like query"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"Like(\n  likeableId: Int\n  type: LikeableType\n): User\n"})}),"\n",(0,s.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(n.h4,{id:"likelikeableidint-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Like.",(0,s.jsx)("b",{children:"likeableId"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/examples/default/types/scalars/int",children:(0,s.jsx)(n.code,{children:"Int"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"The id of the likeable type"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"liketypelikeabletype-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Like.",(0,s.jsx)("b",{children:"type"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/examples/default/types/enums/likeable-type",children:(0,s.jsx)(n.code,{children:"LikeableType"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"The type of model the id applies to"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,s.jsxs)(n.h4,{id:"user-",children:[(0,s.jsx)(n.a,{href:"/examples/default/types/objects/user",children:(0,s.jsx)(n.code,{children:"User"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"A user"}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var s=t(7294);const a={},l=s.createContext(a);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);