"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6570],{341:(e,r,n)=>{n.r(r),n.d(r,{Badge:()=>p,Bullet:()=>i,Details:()=>j,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>d,metadata:()=>l,toc:()=>x});var t=n(5893),s=n(1151),a=n(7294);const d={pagination_next:null,pagination_prev:null,id:"report",title:"Report"},o=void 0,l={id:"objects/report",title:"Report",description:"No description",source:"@site/examples/default/objects/report.mdx",sourceDirName:"objects",slug:"/objects/report",permalink:"/examples/default/objects/report",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"report",title:"Report"},sidebar:"schemaSidebar"},c={},i=()=>{const e={span:"span",...(0,s.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const r={a:"a",...(0,s.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const r={span:"span",...(0,s.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(r.span,{className:e.class,children:e.text})})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>Report.<b>id</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reportidint--",level:4},{value:'<code>Report.<b>reporter</b></code><Bullet></Bullet><code>User</code> <Badge class="badge badge--secondary"></Badge>',id:"reportreporteruser-",level:4},{value:'<code>Report.<b>reported</b></code><Bullet></Bullet><code>User</code> <Badge class="badge badge--secondary"></Badge>',id:"reportreporteduser-",level:4},{value:'<code>Report.<b>reason</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"reportreasonstring-",level:4},{value:'<code>Report.<b>createdAt</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"reportcreatedatint-",level:4},{value:'<code>Report.<b>cleared</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"reportclearedboolean-",level:4},{value:"Member Of",id:"member-of",level:3}],j=({dataOpen:e,dataClose:r,children:n,startOpen:d=!1})=>{const o={details:"details",summary:"summary",...(0,s.a)()},[l,c]=(0,a.useState)(d);return(0,t.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:r}),l&&n]})};function u(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Head:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n,{children:[(0,t.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,t.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,t.jsx)(r.p,{children:"No description"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",children:"type Report {\n  id: Int!\n  reporter: User\n  reported: User\n  reason: String\n  createdAt: Int\n  cleared: Boolean\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(r.h4,{id:"reportidint--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Report.",(0,t.jsx)("b",{children:"id"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(r.a,{href:"/examples/default/scalars/int",children:(0,t.jsx)(r.code,{children:"Int!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(r.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(r.h4,{id:"reportreporteruser-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Report.",(0,t.jsx)("b",{children:"reporter"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(r.a,{href:"/examples/default/objects/user",children:(0,t.jsx)(r.code,{children:"User"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(r.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(r.h4,{id:"reportreporteduser-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Report.",(0,t.jsx)("b",{children:"reported"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(r.a,{href:"/examples/default/objects/user",children:(0,t.jsx)(r.code,{children:"User"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(r.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(r.h4,{id:"reportreasonstring-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Report.",(0,t.jsx)("b",{children:"reason"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(r.a,{href:"/examples/default/scalars/string",children:(0,t.jsx)(r.code,{children:"String"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(r.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(r.h4,{id:"reportcreatedatint-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Report.",(0,t.jsx)("b",{children:"createdAt"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(r.a,{href:"/examples/default/scalars/int",children:(0,t.jsx)(r.code,{children:"Int"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"When the entry data was created"}),"\n"]}),"\n",(0,t.jsxs)(r.h4,{id:"reportclearedboolean-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Report.",(0,t.jsx)("b",{children:"cleared"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(r.a,{href:"/examples/default/scalars/boolean",children:(0,t.jsx)(r.code,{children:"Boolean"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(r.blockquote,{children:"\n"}),"\n",(0,t.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/examples/default/objects/internal-page",children:(0,t.jsx)(r.code,{children:"InternalPage"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>d});var t=n(7294);const s={},a=t.createContext(s);function d(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);