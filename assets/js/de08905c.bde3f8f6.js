"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3073],{26109:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>g,assets:()=>d,contentTitle:()=>s,default:()=>x,frontMatter:()=>i,metadata:()=>r,toc:()=>m});var l=n(74848),a=n(28453),o=n(96540);const i={id:"toggle-like-v2",title:"ToggleLikeV2"},s=void 0,r={id:"operations/mutations/toggle-like-v2",title:"ToggleLikeV2",description:"Add or remove a like from a likeable type.",source:"@site/examples/default/operations/mutations/toggle-like-v2.mdx",sourceDirName:"operations/mutations",slug:"/operations/mutations/toggle-like-v2",permalink:"/examples/default/operations/mutations/toggle-like-v2",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"toggle-like-v2",title:"ToggleLikeV2"},sidebar:"defaultSidebar",previous:{title:"ToggleFollow",permalink:"/examples/default/operations/mutations/toggle-follow"},next:{title:"ToggleLike",permalink:"/examples/default/operations/mutations/toggle-like"}},d={},c=()=>{const e={span:"span",...(0,a.R)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const t={a:"a",...(0,a.R)()};return(0,l.jsxs)(l.Fragment,{children:["Specification",(0,l.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,a.R)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(t.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const s={details:"details",summary:"summary",...(0,a.R)()},[r,d]=(0,o.useState)(i);return(0,l.jsxs)(s.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,l.jsx)(s.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&n]})},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code>ToggleLikeV2.<b>id</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"togglelikev2idint-",level:4},{value:'<code>ToggleLikeV2.<b>type</b></code><Bullet></Bullet><code>LikeableType</code> <Badge class="badge badge--secondary"></Badge>',id:"togglelikev2typelikeabletype-",level:4},{value:"Type",id:"type",level:3},{value:'<code>LikeableUnion</code> <Badge class="badge badge--secondary"></Badge>',id:"likeableunion-",level:4}];function h(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n,{children:[(0,l.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,l.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,l.jsx)(t.p,{children:"Add or remove a like from a likeable type."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-graphql",children:"ToggleLikeV2(\n  id: Int\n  type: LikeableType\n): LikeableUnion\n"})}),"\n",(0,l.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,l.jsxs)(t.h4,{id:"togglelikev2idint-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["ToggleLikeV2.",(0,l.jsx)("b",{children:"id"})]})}),(0,l.jsx)(c,{}),(0,l.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,l.jsx)(t.code,{children:"Int"})})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsx)(t.p,{children:"The id of the likeable type"}),"\n",(0,l.jsxs)(t.h4,{id:"togglelikev2typelikeabletype-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["ToggleLikeV2.",(0,l.jsx)("b",{children:"type"})]})}),(0,l.jsx)(c,{}),(0,l.jsx)(t.a,{href:"/examples/default/types/enums/likeable-type",children:(0,l.jsx)(t.code,{children:"LikeableType"})})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,l.jsx)(t.p,{children:"The type of model to be un/liked"}),"\n",(0,l.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,l.jsxs)(t.h4,{id:"likeableunion-",children:[(0,l.jsx)(t.a,{href:"/examples/default/types/unions/likeable-union",children:(0,l.jsx)(t.code,{children:"LikeableUnion"})})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"union"})]}),"\n",(0,l.jsx)(t.p,{children:"Likeable union type"})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var l=n(96540);const a={},o=l.createContext(a);function i(e){const t=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),l.createElement(o.Provider,{value:t},e.children)}}}]);