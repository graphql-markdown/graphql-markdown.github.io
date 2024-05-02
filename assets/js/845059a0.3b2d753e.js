"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3069],{14760:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>h,Bullet:()=>r,Details:()=>g,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>x});var i=t(74848),o=t(28453),l=t(96540);const s={pagination_next:null,pagination_prev:null,id:"following-notification",title:"FollowingNotification"},a=void 0,c={id:"types/objects/following-notification",title:"FollowingNotification",description:"Notification for when the authenticated user is followed by another user",source:"@site/examples/default/types/objects/following-notification.mdx",sourceDirName:"types/objects",slug:"/types/objects/following-notification",permalink:"/examples/default/types/objects/following-notification",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"following-notification",title:"FollowingNotification"},sidebar:"schemaSidebar"},d={},r=()=>{const e={span:"span",...(0,o.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},f=e=>{const n={a:"a",...(0,o.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,o.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.span,{className:e.class,children:e.text})})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>FollowingNotification.<b>id</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"followingnotificationidint--",level:4},{value:'<code>FollowingNotification.<b>userId</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"followingnotificationuseridint--",level:4},{value:'<code>FollowingNotification.<b>type</b></code><Bullet></Bullet><code>NotificationType</code> <Badge class="badge badge--secondary"></Badge>',id:"followingnotificationtypenotificationtype-",level:4},{value:'<code>FollowingNotification.<b>context</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"followingnotificationcontextstring-",level:4},{value:'<code>FollowingNotification.<b>createdAt</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"followingnotificationcreatedatint-",level:4},{value:'<code>FollowingNotification.<b>user</b></code><Bullet></Bullet><code>User</code> <Badge class="badge badge--secondary"></Badge>',id:"followingnotificationuseruser-",level:4},{value:"Implemented By",id:"implemented-by",level:3}],g=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const a={details:"details",summary:"summary",...(0,o.R)()},[c,d]=(0,l.useState)(s);return(0,i.jsxs)(a.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(a.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&t]})};function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t,{children:[(0,i.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,i.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,i.jsx)(n.p,{children:"Notification for when the authenticated user is followed by another user"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"type FollowingNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  context: String\n  createdAt: Int\n  user: User\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(n.h4,{id:"followingnotificationidint--",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["FollowingNotification.",(0,i.jsx)("b",{children:"id"})]})}),(0,i.jsx)(r,{}),(0,i.jsx)(n.a,{href:"/examples/default/types/scalars/int",children:(0,i.jsx)(n.code,{children:"Int!"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The id of the Notification"}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"followingnotificationuseridint--",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["FollowingNotification.",(0,i.jsx)("b",{children:"userId"})]})}),(0,i.jsx)(r,{}),(0,i.jsx)(n.a,{href:"/examples/default/types/scalars/int",children:(0,i.jsx)(n.code,{children:"Int!"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The id of the user who followed the authenticated user"}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"followingnotificationtypenotificationtype-",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["FollowingNotification.",(0,i.jsx)("b",{children:"type"})]})}),(0,i.jsx)(r,{}),(0,i.jsx)(n.a,{href:"/examples/default/types/enums/notification-type",children:(0,i.jsx)(n.code,{children:"NotificationType"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The type of notification"}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"followingnotificationcontextstring-",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["FollowingNotification.",(0,i.jsx)("b",{children:"context"})]})}),(0,i.jsx)(r,{}),(0,i.jsx)(n.a,{href:"/examples/default/types/scalars/string",children:(0,i.jsx)(n.code,{children:"String"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The notification context text"}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"followingnotificationcreatedatint-",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["FollowingNotification.",(0,i.jsx)("b",{children:"createdAt"})]})}),(0,i.jsx)(r,{}),(0,i.jsx)(n.a,{href:"/examples/default/types/scalars/int",children:(0,i.jsx)(n.code,{children:"Int"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The time the notification was created at"}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"followingnotificationuseruser-",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["FollowingNotification.",(0,i.jsx)("b",{children:"user"})]})}),(0,i.jsx)(r,{}),(0,i.jsx)(n.a,{href:"/examples/default/types/objects/user",children:(0,i.jsx)(n.code,{children:"User"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The liked activity"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/examples/default/types/unions/notification-union",children:(0,i.jsx)(n.code,{children:"NotificationUnion"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"union"})]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const o={},l=i.createContext(o);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);