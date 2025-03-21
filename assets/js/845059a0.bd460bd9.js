"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["2185"],{85378:function(e,t,n){n.r(t),n.d(t,{Bullet:()=>r,SpecifiedBy:()=>f,Badge:()=>h,default:()=>b,frontMatter:()=>s,metadata:()=>i,Details:()=>g,assets:()=>c,toc:()=>x,contentTitle:()=>d});var i=JSON.parse('{"id":"types/objects/following-notification","title":"FollowingNotification","description":"Notification for when the authenticated user is followed by another user","source":"@site/examples/default/types/objects/following-notification.mdx","sourceDirName":"types/objects","slug":"/types/objects/following-notification","permalink":"/examples/default/types/objects/following-notification","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"following-notification","title":"FollowingNotification"},"sidebar":"defaultSidebar","previous":{"title":"Favourites","permalink":"/examples/default/types/objects/favourites"},"next":{"title":"FormatStats","permalink":"/examples/default/types/objects/format-stats"}}'),o=n("85893"),l=n("50065"),a=n("67294");let s={id:"following-notification",title:"FollowingNotification"},d=void 0,c={},r=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25CF\xa0"})}),f=e=>(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("span",{className:e.class,children:e.text})}),g=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{let[l,s]=(0,a.useState)(i);return(0,o.jsxs)("details",{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)("summary",{onClick:e=>{e.preventDefault(),s(e=>!e)},style:{listStyle:"none"},children:l?e:t}),l&&n]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>FollowingNotification.<b>id</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary badge--non_null"></Badge> <Badge class="badge badge--secondary "></Badge>',id:"followingnotificationidint--",level:4},{value:'<code>FollowingNotification.<b>userId</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary badge--non_null"></Badge> <Badge class="badge badge--secondary "></Badge>',id:"followingnotificationuseridint--",level:4},{value:'<code>FollowingNotification.<b>type</b></code><Bullet></Bullet><code><b>NotificationType</b></code> <Badge class="badge badge--secondary "></Badge>',id:"followingnotificationtypenotificationtype-",level:4},{value:'<code>FollowingNotification.<b>context</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary "></Badge>',id:"followingnotificationcontextstring-",level:4},{value:'<code>FollowingNotification.<b>createdAt</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary "></Badge>',id:"followingnotificationcreatedatint-",level:4},{value:'<code>FollowingNotification.<b>user</b></code><Bullet></Bullet><code><b>User</b></code> <Badge class="badge badge--secondary "></Badge>',id:"followingnotificationuseruser-",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function u(e){let t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...e.components},{Head:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n,{children:[(0,o.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,o.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,o.jsx)(t.p,{children:"Notification for when the authenticated user is followed by another user"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-graphql",children:"type FollowingNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  context: String\n  createdAt: Int\n  user: User\n}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(t.h4,{id:"followingnotificationidint--",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["FollowingNotification.",(0,o.jsx)("b",{children:"id"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,o.jsx)("code",{style:{fontWeight:"normal"},children:(0,o.jsx)("b",{children:"Int!"})})})," ",(0,o.jsx)(h,{class:"badge badge--secondary badge--non_null",text:"non-null"})," ",(0,o.jsx)(h,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,o.jsx)(t.p,{children:"The id of the Notification"}),"\n",(0,o.jsxs)(t.h4,{id:"followingnotificationuseridint--",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["FollowingNotification.",(0,o.jsx)("b",{children:"userId"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,o.jsx)("code",{style:{fontWeight:"normal"},children:(0,o.jsx)("b",{children:"Int!"})})})," ",(0,o.jsx)(h,{class:"badge badge--secondary badge--non_null",text:"non-null"})," ",(0,o.jsx)(h,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,o.jsx)(t.p,{children:"The id of the user who followed the authenticated user"}),"\n",(0,o.jsxs)(t.h4,{id:"followingnotificationtypenotificationtype-",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["FollowingNotification.",(0,o.jsx)("b",{children:"type"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(t.a,{href:"/examples/default/types/enums/notification-type",children:(0,o.jsx)("code",{style:{fontWeight:"normal"},children:(0,o.jsx)("b",{children:"NotificationType"})})})," ",(0,o.jsx)(h,{class:"badge badge--secondary ",text:"enum"})]}),"\n",(0,o.jsx)(t.p,{children:"The type of notification"}),"\n",(0,o.jsxs)(t.h4,{id:"followingnotificationcontextstring-",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["FollowingNotification.",(0,o.jsx)("b",{children:"context"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(t.a,{href:"/examples/default/types/scalars/string",children:(0,o.jsx)("code",{style:{fontWeight:"normal"},children:(0,o.jsx)("b",{children:"String"})})})," ",(0,o.jsx)(h,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,o.jsx)(t.p,{children:"The notification context text"}),"\n",(0,o.jsxs)(t.h4,{id:"followingnotificationcreatedatint-",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["FollowingNotification.",(0,o.jsx)("b",{children:"createdAt"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,o.jsx)("code",{style:{fontWeight:"normal"},children:(0,o.jsx)("b",{children:"Int"})})})," ",(0,o.jsx)(h,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,o.jsx)(t.p,{children:"The time the notification was created at"}),"\n",(0,o.jsxs)(t.h4,{id:"followingnotificationuseruser-",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["FollowingNotification.",(0,o.jsx)("b",{children:"user"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(t.a,{href:"/examples/default/types/objects/user",children:(0,o.jsx)("code",{style:{fontWeight:"normal"},children:(0,o.jsx)("b",{children:"User"})})})," ",(0,o.jsx)(h,{class:"badge badge--secondary ",text:"object"})]}),"\n",(0,o.jsx)(t.p,{children:"The liked activity"}),"\n",(0,o.jsx)(t.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/examples/default/types/unions/notification-union",children:(0,o.jsx)(t.code,{children:"NotificationUnion"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary badge--relation",text:"union"})]})]})}function b(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return a}});var i=n(67294);let o={},l=i.createContext(o);function a(e){let t=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);