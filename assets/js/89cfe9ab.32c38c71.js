"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9558],{59592:(e,t,i)=>{i.r(t),i.d(t,{Badge:()=>f,Bullet:()=>r,Details:()=>x,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=i(74848),a=i(28453),d=i(96540);const o={pagination_next:null,pagination_prev:null,id:"media-deletion-notification",title:"MediaDeletionNotification"},s=void 0,l={id:"types/objects/media-deletion-notification",title:"MediaDeletionNotification",description:"Notification for when a media tracked in a user's list is deleted from the site",source:"@site/examples/default/types/objects/media-deletion-notification.mdx",sourceDirName:"types/objects",slug:"/types/objects/media-deletion-notification",permalink:"/examples/default/types/objects/media-deletion-notification",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"media-deletion-notification",title:"MediaDeletionNotification"},sidebar:"schemaSidebar"},c={},r=()=>{const e={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const t={a:"a",...(0,a.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const t={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:t,children:i,startOpen:o=!1})=>{const s={details:"details",summary:"summary",...(0,a.R)()},[l,c]=(0,d.useState)(o);return(0,n.jsxs)(s.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(s.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&i]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>MediaDeletionNotification.<b>id</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"mediadeletionnotificationidint--",level:4},{value:'<code>MediaDeletionNotification.<b>type</b></code><Bullet></Bullet><code>NotificationType</code> <Badge class="badge badge--secondary"></Badge>',id:"mediadeletionnotificationtypenotificationtype-",level:4},{value:'<code>MediaDeletionNotification.<b>deletedMediaTitle</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"mediadeletionnotificationdeletedmediatitlestring-",level:4},{value:'<code>MediaDeletionNotification.<b>context</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"mediadeletionnotificationcontextstring-",level:4},{value:'<code>MediaDeletionNotification.<b>reason</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"mediadeletionnotificationreasonstring-",level:4},{value:'<code>MediaDeletionNotification.<b>createdAt</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"mediadeletionnotificationcreatedatint-",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function g(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i,{children:[(0,n.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,n.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,n.jsx)(t.p,{children:"Notification for when a media tracked in a user's list is deleted from the site"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type MediaDeletionNotification {\n  id: Int!\n  type: NotificationType\n  deletedMediaTitle: String\n  context: String\n  reason: String\n  createdAt: Int\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"mediadeletionnotificationidint--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaDeletionNotification.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(t.code,{children:"Int!"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"The id of the Notification"}),"\n",(0,n.jsxs)(t.h4,{id:"mediadeletionnotificationtypenotificationtype-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaDeletionNotification.",(0,n.jsx)("b",{children:"type"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/enums/notification-type",children:(0,n.jsx)(t.code,{children:"NotificationType"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(t.p,{children:"The type of notification"}),"\n",(0,n.jsxs)(t.h4,{id:"mediadeletionnotificationdeletedmediatitlestring-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaDeletionNotification.",(0,n.jsx)("b",{children:"deletedMediaTitle"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"The title of the deleted media"}),"\n",(0,n.jsxs)(t.h4,{id:"mediadeletionnotificationcontextstring-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaDeletionNotification.",(0,n.jsx)("b",{children:"context"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"The reason for the media deletion"}),"\n",(0,n.jsxs)(t.h4,{id:"mediadeletionnotificationreasonstring-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaDeletionNotification.",(0,n.jsx)("b",{children:"reason"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"The reason for the media deletion"}),"\n",(0,n.jsxs)(t.h4,{id:"mediadeletionnotificationcreatedatint-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaDeletionNotification.",(0,n.jsx)("b",{children:"createdAt"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(t.code,{children:"Int"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"The time the notification was created at"}),"\n",(0,n.jsx)(t.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/examples/default/types/unions/notification-union",children:(0,n.jsx)(t.code,{children:"NotificationUnion"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"union"})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>s});var n=i(96540);const a={},d=n.createContext(a);function o(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);