"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2517],{99991:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>u,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>g,assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>p});var a=t(74848),i=t(28453),n=t(96540);const d={pagination_next:null,pagination_prev:null,id:"media-stats",title:"MediaStats"},r=void 0,o={id:"types/objects/media-stats",title:"MediaStats",description:"A media's statistics",source:"@site/examples/default/types/objects/media-stats.mdx",sourceDirName:"types/objects",slug:"/types/objects/media-stats",permalink:"/examples/default/types/objects/media-stats",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"media-stats",title:"MediaStats"},sidebar:"defaultSidebar"},c={},l=()=>{const e={span:"span",...(0,i.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const s={a:"a",...(0,i.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const s={span:"span",...(0,i.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:s,children:t,startOpen:d=!1})=>{const r={details:"details",summary:"summary",...(0,i.R)()},[o,c]=(0,n.useState)(d);return(0,a.jsxs)(r.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(r.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:s}),o&&t]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>MediaStats.<b>scoreDistribution</b></code><Bullet></Bullet><code>[ScoreDistribution]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"mediastatsscoredistributionscoredistribution--",level:4},{value:'<code>MediaStats.<b>statusDistribution</b></code><Bullet></Bullet><code>[StatusDistribution]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"mediastatsstatusdistributionstatusdistribution--",level:4},{value:'<code>MediaStats.<b>airingProgression</b></code><Bullet></Bullet><code>[AiringProgression]</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"mediastatsairingprogressionairingprogression---",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",span:"span",...(0,i.R)(),...e.components},{Head:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t,{children:[(0,a.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,a.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,a.jsx)(s.p,{children:"A media's statistics"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"type MediaStats {\n  scoreDistribution: [ScoreDistribution]\n  statusDistribution: [StatusDistribution]\n  airingProgression: [AiringProgression] @deprecated\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"mediastatsscoredistributionscoredistribution--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaStats.",(0,a.jsx)("b",{children:"scoreDistribution"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/objects/score-distribution",children:(0,a.jsx)(s.code,{children:"[ScoreDistribution]"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.h4,{id:"mediastatsstatusdistributionstatusdistribution--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaStats.",(0,a.jsx)("b",{children:"statusDistribution"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/objects/status-distribution",children:(0,a.jsx)(s.code,{children:"[StatusDistribution]"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(b,{dataOpen:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:"deprecated",children:"Hide deprecated"})}),dataClose:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:"deprecated",children:"Show deprecated"})}),children:[(0,a.jsxs)(s.h4,{id:"mediastatsairingprogressionairingprogression---",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaStats.",(0,a.jsx)("b",{children:"airingProgression"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/objects/airing-progression",children:(0,a.jsx)(s.code,{children:"[AiringProgression]"})})," ",(0,a.jsx)(u,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),(0,a.jsx)(s.admonition,{title:"DEPRECATED",type:"warning",children:(0,a.jsx)(s.p,{children:"Replaced by MediaTrends"})})]}),"\n",(0,a.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/examples/default/types/objects/media",children:(0,a.jsx)(s.code,{children:"Media"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>r});var a=t(96540);const i={},n=a.createContext(i);function d(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);