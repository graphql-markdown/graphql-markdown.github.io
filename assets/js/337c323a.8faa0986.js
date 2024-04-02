"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7792],{673:(e,t,i)=>{i.r(t),i.d(t,{Badge:()=>p,Bullet:()=>o,Details:()=>x,SpecifiedBy:()=>y,assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var n=i(4848),s=i(8453),c=i(6540);const a={pagination_next:null,pagination_prev:null,id:"activity-type",title:"ActivityType"},l=void 0,r={id:"types/enums/activity-type",title:"ActivityType",description:"Activity type enum.",source:"@site/examples/default/types/enums/activity-type.mdx",sourceDirName:"types/enums",slug:"/types/enums/activity-type",permalink:"/examples/default/types/enums/activity-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"activity-type",title:"ActivityType"},sidebar:"schemaSidebar"},d={},o=()=>{const e={span:"span",...(0,s.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},y=e=>{const t={a:"a",...(0,s.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,s.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},h=[{value:"Values",id:"values",level:3},{value:"<code>ActivityType.<b>TEXT</b></code>",id:"activitytypetext",level:4},{value:"<code>ActivityType.<b>ANIME_LIST</b></code>",id:"activitytypeanime_list",level:4},{value:"<code>ActivityType.<b>MANGA_LIST</b></code>",id:"activitytypemanga_list",level:4},{value:"<code>ActivityType.<b>MESSAGE</b></code>",id:"activitytypemessage",level:4},{value:"<code>ActivityType.<b>MEDIA_LIST</b></code>",id:"activitytypemedia_list",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:t,children:i,startOpen:a=!1})=>{const l={details:"details",summary:"summary",...(0,s.R)()},[r,d]=(0,c.useState)(a);return(0,n.jsxs)(l.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(l.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&i]})};function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i,{children:[(0,n.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,n.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,n.jsx)(t.p,{children:"Activity type enum."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"enum ActivityType {\n  TEXT\n  ANIME_LIST\n  MANGA_LIST\n  MESSAGE\n  MEDIA_LIST\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,n.jsx)(t.h4,{id:"activitytypetext",children:(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityType.",(0,n.jsx)("b",{children:"TEXT"})]})})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"A text activity"}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"activitytypeanime_list",children:(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityType.",(0,n.jsx)("b",{children:"ANIME_LIST"})]})})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"A anime list update activity"}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"activitytypemanga_list",children:(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityType.",(0,n.jsx)("b",{children:"MANGA_LIST"})]})})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"A manga list update activity"}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"activitytypemessage",children:(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityType.",(0,n.jsx)("b",{children:"MESSAGE"})]})})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"A text message activity sent to another user"}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"activitytypemedia_list",children:(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityType.",(0,n.jsx)("b",{children:"MEDIA_LIST"})]})})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Anime & Manga list update, only used in query arguments"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/examples/default/api/queries/activity",children:(0,n.jsx)(t.code,{children:"Activity"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"query"}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/objects/list-activity",children:(0,n.jsx)(t.code,{children:"ListActivity"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/objects/message-activity",children:(0,n.jsx)(t.code,{children:"MessageActivity"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/objects/text-activity",children:(0,n.jsx)(t.code,{children:"TextActivity"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>l});var n=i(6540);const s={},c=n.createContext(s);function a(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);