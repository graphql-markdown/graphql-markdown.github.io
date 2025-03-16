"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["578"],{89447:function(e,i,n){n.r(i),n.d(i,{Bullet:()=>r,SpecifiedBy:()=>g,Badge:()=>h,default:()=>j,frontMatter:()=>o,metadata:()=>t,Details:()=>f,assets:()=>l,toc:()=>x,contentTitle:()=>c});var t=JSON.parse('{"id":"types/objects/airing-notification","title":"AiringNotification","description":"Notification for when an episode of anime airs","source":"@site/examples/default/types/objects/airing-notification.mdx","sourceDirName":"types/objects","slug":"/types/objects/airing-notification","permalink":"/examples/default/types/objects/airing-notification","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"airing-notification","title":"AiringNotification"},"sidebar":"defaultSidebar","previous":{"title":"ActivityReply","permalink":"/examples/default/types/objects/activity-reply"},"next":{"title":"AiringProgression","permalink":"/examples/default/types/objects/airing-progression"}}'),a=n("85893"),s=n("50065"),d=n("67294");let o={id:"airing-notification",title:"AiringNotification"},c=void 0,l={},r=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25CF\xa0"})}),g=e=>(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:e.class,children:e.text})}),f=({dataOpen:e,dataClose:i,children:n,startOpen:t=!1})=>{let[s,o]=(0,d.useState)(t);return(0,a.jsxs)("details",{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)("summary",{onClick:e=>{e.preventDefault(),o(e=>!e)},style:{listStyle:"none"},children:s?e:i}),s&&n]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>AiringNotification.<b>id</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"airingnotificationidint--",level:4},{value:'<code>AiringNotification.<b>type</b></code><Bullet></Bullet><code><b>NotificationType</b></code> <Badge class="badge badge--secondary"></Badge>',id:"airingnotificationtypenotificationtype-",level:4},{value:'<code>AiringNotification.<b>animeId</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"airingnotificationanimeidint--",level:4},{value:'<code>AiringNotification.<b>episode</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"airingnotificationepisodeint--",level:4},{value:'<code>AiringNotification.<b>contexts</b></code><Bullet></Bullet><code><b>[String]</b></code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"airingnotificationcontextsstring--",level:4},{value:'<code>AiringNotification.<b>createdAt</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary"></Badge>',id:"airingnotificationcreatedatint-",level:4},{value:'<code>AiringNotification.<b>media</b></code><Bullet></Bullet><code><b>Media</b></code> <Badge class="badge badge--secondary"></Badge>',id:"airingnotificationmediamedia-",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function b(e){let i={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Head:n}=i;return n||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n,{children:[(0,a.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,a.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,a.jsx)(i.p,{children:"Notification for when an episode of anime airs"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-graphql",children:"type AiringNotification {\n  id: Int!\n  type: NotificationType\n  animeId: Int!\n  episode: Int!\n  contexts: [String]\n  createdAt: Int\n  media: Media\n}\n"})}),"\n",(0,a.jsx)(i.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(i.h4,{id:"airingnotificationidint--",children:[(0,a.jsx)(i.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AiringNotification.",(0,a.jsx)("b",{children:"id"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(i.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"Int!"})})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(i.p,{children:"The id of the Notification"}),"\n",(0,a.jsxs)(i.h4,{id:"airingnotificationtypenotificationtype-",children:[(0,a.jsx)(i.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AiringNotification.",(0,a.jsx)("b",{children:"type"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(i.a,{href:"/examples/default/types/enums/notification-type",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"NotificationType"})})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(i.p,{children:"The type of notification"}),"\n",(0,a.jsxs)(i.h4,{id:"airingnotificationanimeidint--",children:[(0,a.jsx)(i.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AiringNotification.",(0,a.jsx)("b",{children:"animeId"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(i.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"Int!"})})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(i.p,{children:"The id of the aired anime"}),"\n",(0,a.jsxs)(i.h4,{id:"airingnotificationepisodeint--",children:[(0,a.jsx)(i.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AiringNotification.",(0,a.jsx)("b",{children:"episode"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(i.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"Int!"})})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(i.p,{children:"The episode number that just aired"}),"\n",(0,a.jsxs)(i.h4,{id:"airingnotificationcontextsstring--",children:[(0,a.jsx)(i.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AiringNotification.",(0,a.jsx)("b",{children:"contexts"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(i.a,{href:"/examples/default/types/scalars/string",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"[String]"})})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(i.p,{children:"The notification context text"}),"\n",(0,a.jsxs)(i.h4,{id:"airingnotificationcreatedatint-",children:[(0,a.jsx)(i.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AiringNotification.",(0,a.jsx)("b",{children:"createdAt"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(i.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"Int"})})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(i.p,{children:"The time the notification was created at"}),"\n",(0,a.jsxs)(i.h4,{id:"airingnotificationmediamedia-",children:[(0,a.jsx)(i.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AiringNotification.",(0,a.jsx)("b",{children:"media"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(i.a,{href:"/examples/default/types/objects/media",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"Media"})})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(i.p,{children:"The associated media of the airing schedule"}),"\n",(0,a.jsx)(i.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.a,{href:"/examples/default/types/unions/notification-union",children:(0,a.jsx)(i.code,{children:"NotificationUnion"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"union"})]})]})}function j(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return o},a:function(){return d}});var t=n(67294);let a={},s=t.createContext(a);function d(e){let i=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);