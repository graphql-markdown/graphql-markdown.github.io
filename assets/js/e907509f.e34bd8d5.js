"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[4212],{49134:(e,s,r)=>{r.r(s),r.d(s,{Badge:()=>p,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>x});var n=r(74848),l=r(28453),t=r(96540);const o={pagination_next:null,pagination_prev:null,id:"follower",title:"Follower"},a=void 0,d={id:"api/queries/follower",title:"Follower",description:"Follow query",source:"@site/examples/default/api/queries/follower.mdx",sourceDirName:"api/queries",slug:"/api/queries/follower",permalink:"/examples/default/api/queries/follower",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"follower",title:"Follower"},sidebar:"schemaSidebar"},c={},i=()=>{const e={span:"span",...(0,l.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const s={a:"a",...(0,l.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const s={span:"span",...(0,l.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:s,children:r,startOpen:o=!1})=>{const a={details:"details",summary:"summary",...(0,l.R)()},[d,c]=(0,t.useState)(o);return(0,n.jsxs)(a.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(a.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:d?e:s}),d&&r]})},x=[{value:"Arguments",id:"arguments",level:3},{value:'<code>Follower.<b>userId</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"followeruseridint--",level:4},{value:'<code>Follower.<b>sort</b></code><Bullet></Bullet><code>[UserSort]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"followersortusersort--",level:4},{value:"Type",id:"type",level:3},{value:'<code>User</code> <Badge class="badge badge--secondary"></Badge>',id:"user-",level:4}];function g(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.R)(),...e.components},{Head:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r,{children:[(0,n.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,n.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,n.jsx)(s.p,{children:"Follow query"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"Follower(\n  userId: Int!\n  sort: [UserSort]\n): User\n"})}),"\n",(0,n.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(s.h4,{id:"followeruseridint--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Follower.",(0,n.jsx)("b",{children:"userId"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(s.code,{children:"Int!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.p,{children:"User id of the follower/followed"}),"\n",(0,n.jsxs)(s.h4,{id:"followersortusersort--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Follower.",(0,n.jsx)("b",{children:"sort"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/examples/default/types/enums/user-sort",children:(0,n.jsx)(s.code,{children:"[UserSort]"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(s.p,{children:"The order the results will be returned in"}),"\n",(0,n.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(s.h4,{id:"user-",children:[(0,n.jsx)(s.a,{href:"/examples/default/types/objects/user",children:(0,n.jsx)(s.code,{children:"User"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(s.p,{children:"A user"})]})}function f(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>a});var n=r(96540);const l={},t=n.createContext(l);function o(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);