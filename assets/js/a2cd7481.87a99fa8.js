"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3867],{75874:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>r,Details:()=>u,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var i=n(74848),a=n(28453),o=n(96540);const s={pagination_next:null,pagination_prev:null,id:"toggle-activity-pin",title:"ToggleActivityPin"},l=void 0,c={id:"operations/mutations/toggle-activity-pin",title:"ToggleActivityPin",description:"Toggle activity to be pinned to the top of the user's activity feed",source:"@site/examples/default/operations/mutations/toggle-activity-pin.mdx",sourceDirName:"operations/mutations",slug:"/operations/mutations/toggle-activity-pin",permalink:"/examples/default/operations/mutations/toggle-activity-pin",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"toggle-activity-pin",title:"ToggleActivityPin"},sidebar:"defaultSidebar"},d={},r=()=>{const e={span:"span",...(0,a.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,a.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const t={span:"span",...(0,a.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:t,children:n,startOpen:s=!1})=>{const l={details:"details",summary:"summary",...(0,a.R)()},[c,d]=(0,o.useState)(s);return(0,i.jsxs)(l.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(l.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&n]})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>ToggleActivityPin.<b>id</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"toggleactivitypinidint-",level:4},{value:'<code>ToggleActivityPin.<b>pinned</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"toggleactivitypinpinnedboolean-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ActivityUnion</code> <Badge class="badge badge--secondary"></Badge>',id:"activityunion-",level:4}];function x(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n,{children:[(0,i.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,i.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,i.jsx)(t.p,{children:"Toggle activity to be pinned to the top of the user's activity feed"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"ToggleActivityPin(\n  id: Int\n  pinned: Boolean\n): ActivityUnion\n"})}),"\n",(0,i.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,i.jsxs)(t.h4,{id:"toggleactivitypinidint-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ToggleActivityPin.",(0,i.jsx)("b",{children:"id"})]})}),(0,i.jsx)(r,{}),(0,i.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,i.jsx)(t.code,{children:"Int"})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.p,{children:"Toggle activity id to be pinned"}),"\n",(0,i.jsxs)(t.h4,{id:"toggleactivitypinpinnedboolean-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ToggleActivityPin.",(0,i.jsx)("b",{children:"pinned"})]})}),(0,i.jsx)(r,{}),(0,i.jsx)(t.a,{href:"/examples/default/types/scalars/boolean",children:(0,i.jsx)(t.code,{children:"Boolean"})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.p,{children:"If the activity should be pinned or unpinned"}),"\n",(0,i.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,i.jsxs)(t.h4,{id:"activityunion-",children:[(0,i.jsx)(t.a,{href:"/examples/default/types/unions/activity-union",children:(0,i.jsx)(t.code,{children:"ActivityUnion"})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"union"})]}),"\n",(0,i.jsx)(t.p,{children:"Activity union type"})]})}function y(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var i=n(96540);const a={},o=i.createContext(a);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);