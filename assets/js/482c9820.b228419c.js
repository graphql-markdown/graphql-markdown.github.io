"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9687],{8424:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>g,Bullet:()=>c,Details:()=>h,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var l=t(4848),s=t(8453),a=t(6540);const i={pagination_next:null,pagination_prev:null,id:"toggle-like",title:"ToggleLike"},o=void 0,r={id:"api/mutations/toggle-like",title:"ToggleLike",description:"Add or remove a like from a likeable type.",source:"@site/examples/default/api/mutations/toggle-like.mdx",sourceDirName:"api/mutations",slug:"/api/mutations/toggle-like",permalink:"/examples/default/api/mutations/toggle-like",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"toggle-like",title:"ToggleLike"},sidebar:"schemaSidebar"},d={},c=()=>{const e={span:"span",...(0,s.R)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,s.R)()};return(0,l.jsxs)(l.Fragment,{children:["Specification",(0,l.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,s.R)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(n.span,{className:e.class,children:e.text})})},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code>ToggleLike.<b>id</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"togglelikeidint-",level:4},{value:'<code>ToggleLike.<b>type</b></code><Bullet></Bullet><code>LikeableType</code> <Badge class="badge badge--secondary"></Badge>',id:"toggleliketypelikeabletype-",level:4},{value:"Type",id:"type",level:3},{value:'<code>User</code> <Badge class="badge badge--secondary"></Badge>',id:"user-",level:4}],h=({dataOpen:e,dataClose:n,children:t,startOpen:i=!1})=>{const o={details:"details",summary:"summary",...(0,s.R)()},[r,d]=(0,a.useState)(i);return(0,l.jsxs)(o.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,l.jsx)(o.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&t]})};function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t,{children:[(0,l.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,l.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,l.jsx)(n.p,{children:"Add or remove a like from a likeable type.\nReturns all the users who liked the same model"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-graphql",children:"ToggleLike(\n  id: Int\n  type: LikeableType\n): [User]\n"})}),"\n",(0,l.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,l.jsxs)(n.h4,{id:"togglelikeidint-",children:[(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["ToggleLike.",(0,l.jsx)("b",{children:"id"})]})}),(0,l.jsx)(c,{}),(0,l.jsx)(n.a,{href:"/examples/default/types/scalars/int",children:(0,l.jsx)(n.code,{children:"Int"})})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"The id of the likeable type"}),"\n"]}),"\n",(0,l.jsxs)(n.h4,{id:"toggleliketypelikeabletype-",children:[(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["ToggleLike.",(0,l.jsx)("b",{children:"type"})]})}),(0,l.jsx)(c,{}),(0,l.jsx)(n.a,{href:"/examples/default/types/enums/likeable-type",children:(0,l.jsx)(n.code,{children:"LikeableType"})})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"The type of model to be un/liked"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,l.jsxs)(n.h4,{id:"user-",children:[(0,l.jsx)(n.a,{href:"/examples/default/types/objects/user",children:(0,l.jsx)(n.code,{children:"User"})})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"A user"}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var l=t(6540);const s={},a=l.createContext(s);function i(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);