"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9687],{62894:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>r,default:()=>x,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var l=n(74848),a=n(28453),s=n(96540);const i={pagination_next:null,pagination_prev:null,id:"toggle-like",title:"ToggleLike"},r=void 0,o={id:"api/mutations/toggle-like",title:"ToggleLike",description:"Add or remove a like from a likeable type.",source:"@site/examples/default/api/mutations/toggle-like.mdx",sourceDirName:"api/mutations",slug:"/api/mutations/toggle-like",permalink:"/examples/default/api/mutations/toggle-like",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"toggle-like",title:"ToggleLike"},sidebar:"schemaSidebar"},d={},c=()=>{const e={span:"span",...(0,a.R)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,a.R)()};return(0,l.jsxs)(l.Fragment,{children:["Specification",(0,l.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const t={span:"span",...(0,a.R)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(t.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const r={details:"details",summary:"summary",...(0,a.R)()},[o,d]=(0,s.useState)(i);return(0,l.jsxs)(r.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,l.jsx)(r.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>ToggleLike.<b>id</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"togglelikeidint-",level:4},{value:'<code>ToggleLike.<b>type</b></code><Bullet></Bullet><code>LikeableType</code> <Badge class="badge badge--secondary"></Badge>',id:"toggleliketypelikeabletype-",level:4},{value:"Type",id:"type",level:3},{value:'<code>User</code> <Badge class="badge badge--secondary"></Badge>',id:"user-",level:4}];function m(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n,{children:[(0,l.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,l.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,l.jsx)(t.p,{children:"Add or remove a like from a likeable type.\nReturns all the users who liked the same model"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-graphql",children:"ToggleLike(\n  id: Int\n  type: LikeableType\n): [User]\n"})}),"\n",(0,l.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,l.jsxs)(t.h4,{id:"togglelikeidint-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["ToggleLike.",(0,l.jsx)("b",{children:"id"})]})}),(0,l.jsx)(c,{}),(0,l.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,l.jsx)(t.code,{children:"Int"})})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsx)(t.p,{children:"The id of the likeable type"}),"\n",(0,l.jsxs)(t.h4,{id:"toggleliketypelikeabletype-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["ToggleLike.",(0,l.jsx)("b",{children:"type"})]})}),(0,l.jsx)(c,{}),(0,l.jsx)(t.a,{href:"/examples/default/types/enums/likeable-type",children:(0,l.jsx)(t.code,{children:"LikeableType"})})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,l.jsx)(t.p,{children:"The type of model to be un/liked"}),"\n",(0,l.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,l.jsxs)(t.h4,{id:"user-",children:[(0,l.jsx)(t.a,{href:"/examples/default/types/objects/user",children:(0,l.jsx)(t.code,{children:"User"})})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,l.jsx)(t.p,{children:"A user"})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var l=n(96540);const a={},s=l.createContext(a);function i(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);