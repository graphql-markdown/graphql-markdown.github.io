"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6834],{6021:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>h,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var l=t(5893),a=t(1151),i=t(7294);const s={pagination_next:null,pagination_prev:null,id:"likeable-type",title:"LikeableType"},r=void 0,o={id:"types/enums/likeable-type",title:"LikeableType",description:"Types that can be liked",source:"@site/examples/default/types/enums/likeable-type.mdx",sourceDirName:"types/enums",slug:"/types/enums/likeable-type",permalink:"/examples/default/types/enums/likeable-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"likeable-type",title:"LikeableType"},sidebar:"schemaSidebar"},c={},d=()=>{const e={span:"span",...(0,a.a)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,a.a)()};return(0,l.jsxs)(l.Fragment,{children:["Specification",(0,l.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,a.a)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(n.span,{className:e.class,children:e.text})})},u=[{value:"Values",id:"values",level:3},{value:"<code>LikeableType.<b>THREAD</b></code>",id:"likeabletypethread",level:4},{value:"<code>LikeableType.<b>THREAD_COMMENT</b></code>",id:"likeabletypethread_comment",level:4},{value:"<code>LikeableType.<b>ACTIVITY</b></code>",id:"likeabletypeactivity",level:4},{value:"<code>LikeableType.<b>ACTIVITY_REPLY</b></code>",id:"likeabletypeactivity_reply",level:4},{value:"Member Of",id:"member-of",level:3}],b=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const r={details:"details",summary:"summary",...(0,a.a)()},[o,c]=(0,i.useState)(s);return(0,l.jsxs)(r.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,l.jsx)(r.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&t]})};function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t,{children:[(0,l.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,l.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,l.jsx)(n.p,{children:"Types that can be liked"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-graphql",children:"enum LikeableType {\n  THREAD\n  THREAD_COMMENT\n  ACTIVITY\n  ACTIVITY_REPLY\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,l.jsx)(n.h4,{id:"likeabletypethread",children:(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["LikeableType.",(0,l.jsx)("b",{children:"THREAD"})]})})}),"\n",(0,l.jsx)(n.blockquote,{children:"\n"}),"\n",(0,l.jsx)(n.h4,{id:"likeabletypethread_comment",children:(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["LikeableType.",(0,l.jsx)("b",{children:"THREAD_COMMENT"})]})})}),"\n",(0,l.jsx)(n.blockquote,{children:"\n"}),"\n",(0,l.jsx)(n.h4,{id:"likeabletypeactivity",children:(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["LikeableType.",(0,l.jsx)("b",{children:"ACTIVITY"})]})})}),"\n",(0,l.jsx)(n.blockquote,{children:"\n"}),"\n",(0,l.jsx)(n.h4,{id:"likeabletypeactivity_reply",children:(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["LikeableType.",(0,l.jsx)("b",{children:"ACTIVITY_REPLY"})]})})}),"\n",(0,l.jsx)(n.blockquote,{children:"\n"}),"\n",(0,l.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/examples/default/api/queries/like",children:(0,l.jsx)(n.code,{children:"Like"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"query"}),(0,l.jsx)(d,{}),(0,l.jsx)(n.a,{href:"/examples/default/api/mutations/toggle-like",children:(0,l.jsx)(n.code,{children:"ToggleLike"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"mutation"}),(0,l.jsx)(d,{}),(0,l.jsx)(n.a,{href:"/examples/default/api/mutations/toggle-like-v2",children:(0,l.jsx)(n.code,{children:"ToggleLikeV2"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"mutation"})]})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var l=t(7294);const a={},i=l.createContext(a);function s(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);