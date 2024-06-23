"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7345],{5052:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>h,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>l,default:()=>j,frontMatter:()=>d,metadata:()=>r,toc:()=>x});var s=n(74848),a=n(28453),i=n(96540);const d={pagination_next:null,pagination_prev:null,id:"media-status",title:"MediaStatus"},l=void 0,r={id:"types/enums/media-status",title:"MediaStatus",description:"The current releasing status of the media",source:"@site/examples/default/types/enums/media-status.mdx",sourceDirName:"types/enums",slug:"/types/enums/media-status",permalink:"/examples/default/types/enums/media-status",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"media-status",title:"MediaStatus"},sidebar:"schemaSidebar"},o={},c=()=>{const e={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,a.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:t,children:n,startOpen:d=!1})=>{const l={details:"details",summary:"summary",...(0,a.R)()},[r,o]=(0,i.useState)(d);return(0,s.jsxs)(l.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(l.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&n]})},x=[{value:"Values",id:"values",level:3},{value:"<code>MediaStatus.<b>FINISHED</b></code>",id:"mediastatusfinished",level:4},{value:"<code>MediaStatus.<b>RELEASING</b></code>",id:"mediastatusreleasing",level:4},{value:"<code>MediaStatus.<b>NOT_YET_RELEASED</b></code>",id:"mediastatusnot_yet_released",level:4},{value:"<code>MediaStatus.<b>CANCELLED</b></code>",id:"mediastatuscancelled",level:4},{value:"<code>MediaStatus.<b>HIATUS</b></code>",id:"mediastatushiatus",level:4},{value:"Member Of",id:"member-of",level:3}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n,{children:[(0,s.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,s.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,s.jsx)(t.p,{children:"The current releasing status of the media"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"enum MediaStatus {\n  FINISHED\n  RELEASING\n  NOT_YET_RELEASED\n  CANCELLED\n  HIATUS\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,s.jsx)(t.h4,{id:"mediastatusfinished",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaStatus.",(0,s.jsx)("b",{children:"FINISHED"})]})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Has completed and is no longer being released"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"mediastatusreleasing",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaStatus.",(0,s.jsx)("b",{children:"RELEASING"})]})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Currently releasing"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"mediastatusnot_yet_released",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaStatus.",(0,s.jsx)("b",{children:"NOT_YET_RELEASED"})]})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"To be released at a later date"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"mediastatuscancelled",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaStatus.",(0,s.jsx)("b",{children:"CANCELLED"})]})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Ended before the work could be finished"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"mediastatushiatus",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaStatus.",(0,s.jsx)("b",{children:"HIATUS"})]})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Version 2 only. Is currently paused from releasing and will resume at a later date"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/examples/default/api/queries/media",children:(0,s.jsx)(t.code,{children:"Media"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"query"}),(0,s.jsx)(c,{}),(0,s.jsx)(t.a,{href:"/examples/default/types/objects/media",children:(0,s.jsx)(t.code,{children:"Media"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>l});var s=n(96540);const a={},i=s.createContext(a);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);