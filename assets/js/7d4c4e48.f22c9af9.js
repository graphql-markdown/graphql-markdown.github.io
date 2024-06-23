"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3568],{74160:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>h,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var n=s(74848),a=s(28453),i=s(96540);const r={pagination_next:null,pagination_prev:null,id:"status-distribution",title:"StatusDistribution"},o=void 0,d={id:"types/objects/status-distribution",title:"StatusDistribution",description:"The distribution of the watching/reading status of media or a user's list",source:"@site/examples/default/types/objects/status-distribution.mdx",sourceDirName:"types/objects",slug:"/types/objects/status-distribution",permalink:"/examples/default/types/objects/status-distribution",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"status-distribution",title:"StatusDistribution"},sidebar:"schemaSidebar"},l={},c=()=>{const e={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,a.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:t,children:s,startOpen:r=!1})=>{const o={details:"details",summary:"summary",...(0,a.R)()},[d,l]=(0,i.useState)(r);return(0,n.jsxs)(o.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(o.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:t}),d&&s]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>StatusDistribution.<b>status</b></code><Bullet></Bullet><code>MediaListStatus</code> <Badge class="badge badge--secondary"></Badge>',id:"statusdistributionstatusmedialiststatus-",level:4},{value:'<code>StatusDistribution.<b>amount</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"statusdistributionamountint-",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s,{children:[(0,n.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,n.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,n.jsx)(t.p,{children:"The distribution of the watching/reading status of media or a user's list"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type StatusDistribution {\n  status: MediaListStatus\n  amount: Int\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"statusdistributionstatusmedialiststatus-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["StatusDistribution.",(0,n.jsx)("b",{children:"status"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/enums/media-list-status",children:(0,n.jsx)(t.code,{children:"MediaListStatus"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The day the activity took place (Unix timestamp)"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"statusdistributionamountint-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["StatusDistribution.",(0,n.jsx)("b",{children:"amount"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(t.code,{children:"Int"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The amount of entries with this status"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/examples/default/types/objects/media-stats",children:(0,n.jsx)(t.code,{children:"MediaStats"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/objects/user-stats",children:(0,n.jsx)(t.code,{children:"UserStats"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var n=s(96540);const a={},i=n.createContext(a);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);