"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["9339"],{59638:function(e,t,i){i.r(t),i.d(t,{Bullet:()=>o,SpecifiedBy:()=>y,Badge:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>n,Details:()=>h,assets:()=>d,toc:()=>x,contentTitle:()=>r});var n=JSON.parse('{"id":"types/enums/activity-type","title":"ActivityType","description":"Activity type enum.","source":"@site/examples/default/types/enums/activity-type.mdx","sourceDirName":"types/enums","slug":"/types/enums/activity-type","permalink":"/examples/default/types/enums/activity-type","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"activity-type","title":"ActivityType"},"sidebar":"defaultSidebar","previous":{"title":"ActivitySort","permalink":"/examples/default/types/enums/activity-sort"},"next":{"title":"AiringSort","permalink":"/examples/default/types/enums/airing-sort"}}'),s=i("85893"),a=i("50065"),c=i("67294");let l={id:"activity-type",title:"ActivityType"},r=void 0,d={},o=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25CF\xa0"})}),y=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:t,children:i,startOpen:n=!1})=>{let[a,l]=(0,c.useState)(n);return(0,s.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),l(e=>!e)},style:{listStyle:"none"},children:a?e:t}),a&&i]})},x=[{value:"Values",id:"values",level:3},{value:"<code>ActivityType.<b>TEXT</b></code>",id:"activitytypetext",level:4},{value:"<code>ActivityType.<b>ANIME_LIST</b></code>",id:"activitytypeanime_list",level:4},{value:"<code>ActivityType.<b>MANGA_LIST</b></code>",id:"activitytypemanga_list",level:4},{value:"<code>ActivityType.<b>MESSAGE</b></code>",id:"activitytypemessage",level:4},{value:"<code>ActivityType.<b>MEDIA_LIST</b></code>",id:"activitytypemedia_list",level:4},{value:"Member Of",id:"member-of",level:3}];function u(e){let t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Head:i}=t;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i,{children:[(0,s.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,s.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,s.jsx)(t.p,{children:"Activity type enum."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"enum ActivityType {\n  TEXT\n  ANIME_LIST\n  MANGA_LIST\n  MESSAGE\n  MEDIA_LIST\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,s.jsx)(t.h4,{id:"activitytypetext",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityType.",(0,s.jsx)("b",{children:"TEXT"})]})})}),"\n",(0,s.jsx)(t.p,{children:"A text activity"}),"\n",(0,s.jsx)(t.h4,{id:"activitytypeanime_list",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityType.",(0,s.jsx)("b",{children:"ANIME_LIST"})]})})}),"\n",(0,s.jsx)(t.p,{children:"A anime list update activity"}),"\n",(0,s.jsx)(t.h4,{id:"activitytypemanga_list",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityType.",(0,s.jsx)("b",{children:"MANGA_LIST"})]})})}),"\n",(0,s.jsx)(t.p,{children:"A manga list update activity"}),"\n",(0,s.jsx)(t.h4,{id:"activitytypemessage",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityType.",(0,s.jsx)("b",{children:"MESSAGE"})]})})}),"\n",(0,s.jsx)(t.p,{children:"A text message activity sent to another user"}),"\n",(0,s.jsx)(t.h4,{id:"activitytypemedia_list",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityType.",(0,s.jsx)("b",{children:"MEDIA_LIST"})]})})}),"\n",(0,s.jsx)(t.p,{children:"Anime & Manga list update, only used in query arguments"}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/examples/default/operations/queries/activity",children:(0,s.jsx)(t.code,{children:"Activity"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"query"}),(0,s.jsx)(o,{}),(0,s.jsx)(t.a,{href:"/examples/default/types/objects/list-activity",children:(0,s.jsx)(t.code,{children:"ListActivity"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(t.a,{href:"/examples/default/types/objects/message-activity",children:(0,s.jsx)(t.code,{children:"MessageActivity"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(t.a,{href:"/examples/default/types/objects/text-activity",children:(0,s.jsx)(t.code,{children:"TextActivity"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function m(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return l},a:function(){return c}});var n=i(67294);let s={},a=n.createContext(s);function c(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);