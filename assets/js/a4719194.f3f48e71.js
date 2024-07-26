"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9821],{38083:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>y,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var n=s(74848),i=s(28453),a=s(96540);const r={pagination_next:null,pagination_prev:null,id:"user-activity-history",title:"UserActivityHistory"},l=void 0,c={id:"types/objects/user-activity-history",title:"UserActivityHistory",description:"A user's activity history stats.",source:"@site/examples/default/types/objects/user-activity-history.mdx",sourceDirName:"types/objects",slug:"/types/objects/user-activity-history",permalink:"/examples/default/types/objects/user-activity-history",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"user-activity-history",title:"UserActivityHistory"},sidebar:"defaultSidebar"},o={},d=()=>{const e={span:"span",...(0,i.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const t={a:"a",...(0,i.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},y=e=>{const t={span:"span",...(0,i.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:t,children:s,startOpen:r=!1})=>{const l={details:"details",summary:"summary",...(0,i.R)()},[c,o]=(0,a.useState)(r);return(0,n.jsxs)(l.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(l.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&s]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>UserActivityHistory.<b>date</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"useractivityhistorydateint-",level:4},{value:'<code>UserActivityHistory.<b>amount</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"useractivityhistoryamountint-",level:4},{value:'<code>UserActivityHistory.<b>level</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"useractivityhistorylevelint-",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s,{children:[(0,n.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,n.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,n.jsx)(t.p,{children:"A user's activity history stats."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type UserActivityHistory {\n  date: Int\n  amount: Int\n  level: Int\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"useractivityhistorydateint-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["UserActivityHistory.",(0,n.jsx)("b",{children:"date"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(t.code,{children:"Int"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"The day the activity took place (Unix timestamp)"}),"\n",(0,n.jsxs)(t.h4,{id:"useractivityhistoryamountint-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["UserActivityHistory.",(0,n.jsx)("b",{children:"amount"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(t.code,{children:"Int"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"The amount of activity on the day"}),"\n",(0,n.jsxs)(t.h4,{id:"useractivityhistorylevelint-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["UserActivityHistory.",(0,n.jsx)("b",{children:"level"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(t.code,{children:"Int"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"The level of activity represented on a 1-10 scale"}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/examples/default/types/objects/user-stats",children:(0,n.jsx)(t.code,{children:"UserStats"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"object"})]})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>l});var n=s(96540);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);