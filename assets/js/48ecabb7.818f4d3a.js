"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[1900],{4496:(e,i,t)=>{t.r(i),t.d(i,{Badge:()=>h,Bullet:()=>l,Details:()=>m,SpecifiedBy:()=>g,assets:()=>r,contentTitle:()=>o,default:()=>j,frontMatter:()=>s,metadata:()=>c,toc:()=>x});var n=t(5893),a=t(1151),d=t(7294);const s={pagination_next:null,pagination_prev:null,id:"media-merge-notification",title:"MediaMergeNotification"},o=void 0,c={id:"types/objects/media-merge-notification",title:"MediaMergeNotification",description:"Notification for when a media entry is merged into another for a user who had it on their list",source:"@site/examples/default/types/objects/media-merge-notification.mdx",sourceDirName:"types/objects",slug:"/types/objects/media-merge-notification",permalink:"/examples/default/types/objects/media-merge-notification",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"media-merge-notification",title:"MediaMergeNotification"},sidebar:"schemaSidebar"},r={},l=()=>{const e={span:"span",...(0,a.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const i={a:"a",...(0,a.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(i.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const i={span:"span",...(0,a.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.span,{className:e.class,children:e.text})})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>MediaMergeNotification.<b>id</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"mediamergenotificationidint--",level:4},{value:'<code>MediaMergeNotification.<b>type</b></code><Bullet></Bullet><code>NotificationType</code> <Badge class="badge badge--secondary"></Badge>',id:"mediamergenotificationtypenotificationtype-",level:4},{value:'<code>MediaMergeNotification.<b>mediaId</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"mediamergenotificationmediaidint--",level:4},{value:'<code>MediaMergeNotification.<b>deletedMediaTitles</b></code><Bullet></Bullet><code>[String]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"mediamergenotificationdeletedmediatitlesstring--",level:4},{value:'<code>MediaMergeNotification.<b>context</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"mediamergenotificationcontextstring-",level:4},{value:'<code>MediaMergeNotification.<b>reason</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"mediamergenotificationreasonstring-",level:4},{value:'<code>MediaMergeNotification.<b>createdAt</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"mediamergenotificationcreatedatint-",level:4},{value:'<code>MediaMergeNotification.<b>media</b></code><Bullet></Bullet><code>Media</code> <Badge class="badge badge--secondary"></Badge>',id:"mediamergenotificationmediamedia-",level:4},{value:"Implemented By",id:"implemented-by",level:3}],m=({dataOpen:e,dataClose:i,children:t,startOpen:s=!1})=>{const o={details:"details",summary:"summary",...(0,a.a)()},[c,r]=(0,d.useState)(s);return(0,n.jsxs)(o.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(o.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:c?e:i}),c&&t]})};function f(e){const i={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Head:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t,{children:[(0,n.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,n.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,n.jsx)(i.p,{children:"Notification for when a media entry is merged into another for a user who had it on their list"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-graphql",children:"type MediaMergeNotification {\n  id: Int!\n  type: NotificationType\n  mediaId: Int!\n  deletedMediaTitles: [String]\n  context: String\n  reason: String\n  createdAt: Int\n  media: Media\n}\n"})}),"\n",(0,n.jsx)(i.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(i.h4,{id:"mediamergenotificationidint--",children:[(0,n.jsx)(i.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaMergeNotification.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(i.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(i.code,{children:"Int!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"The id of the Notification"}),"\n"]}),"\n",(0,n.jsxs)(i.h4,{id:"mediamergenotificationtypenotificationtype-",children:[(0,n.jsx)(i.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaMergeNotification.",(0,n.jsx)("b",{children:"type"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(i.a,{href:"/examples/default/types/enums/notification-type",children:(0,n.jsx)(i.code,{children:"NotificationType"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"The type of notification"}),"\n"]}),"\n",(0,n.jsxs)(i.h4,{id:"mediamergenotificationmediaidint--",children:[(0,n.jsx)(i.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaMergeNotification.",(0,n.jsx)("b",{children:"mediaId"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(i.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(i.code,{children:"Int!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"The id of the media that was merged into"}),"\n"]}),"\n",(0,n.jsxs)(i.h4,{id:"mediamergenotificationdeletedmediatitlesstring--",children:[(0,n.jsx)(i.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaMergeNotification.",(0,n.jsx)("b",{children:"deletedMediaTitles"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(i.a,{href:"/examples/default/types/scalars/string",children:(0,n.jsx)(i.code,{children:"[String]"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"The title of the deleted media"}),"\n"]}),"\n",(0,n.jsxs)(i.h4,{id:"mediamergenotificationcontextstring-",children:[(0,n.jsx)(i.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaMergeNotification.",(0,n.jsx)("b",{children:"context"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(i.a,{href:"/examples/default/types/scalars/string",children:(0,n.jsx)(i.code,{children:"String"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"The reason for the media data change"}),"\n"]}),"\n",(0,n.jsxs)(i.h4,{id:"mediamergenotificationreasonstring-",children:[(0,n.jsx)(i.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaMergeNotification.",(0,n.jsx)("b",{children:"reason"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(i.a,{href:"/examples/default/types/scalars/string",children:(0,n.jsx)(i.code,{children:"String"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"The reason for the media merge"}),"\n"]}),"\n",(0,n.jsxs)(i.h4,{id:"mediamergenotificationcreatedatint-",children:[(0,n.jsx)(i.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaMergeNotification.",(0,n.jsx)("b",{children:"createdAt"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(i.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(i.code,{children:"Int"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"The time the notification was created at"}),"\n"]}),"\n",(0,n.jsxs)(i.h4,{id:"mediamergenotificationmediamedia-",children:[(0,n.jsx)(i.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaMergeNotification.",(0,n.jsx)("b",{children:"media"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(i.a,{href:"/examples/default/types/objects/media",children:(0,n.jsx)(i.code,{children:"Media"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"The media that was merged into"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"/examples/default/types/unions/notification-union",children:(0,n.jsx)(i.code,{children:"NotificationUnion"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"union"})]})]})}function j(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},1151:(e,i,t)=>{t.d(i,{Z:()=>o,a:()=>s});var n=t(7294);const a={},d=n.createContext(a);function s(e){const i=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(d.Provider,{value:i},e.children)}}}]);