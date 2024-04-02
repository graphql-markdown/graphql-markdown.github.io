"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7045],{9547:(e,t,i)=>{i.r(t),i.d(t,{Badge:()=>h,Bullet:()=>r,Details:()=>x,SpecifiedBy:()=>y,assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=i(4848),a=i(8453),c=i(6540);const s={pagination_next:null,pagination_prev:null,id:"activity-reply-notification",title:"ActivityReplyNotification"},o=void 0,l={id:"types/objects/activity-reply-notification",title:"ActivityReplyNotification",description:"Notification for when a user replies to the authenticated users activity",source:"@site/examples/default/types/objects/activity-reply-notification.mdx",sourceDirName:"types/objects",slug:"/types/objects/activity-reply-notification",permalink:"/examples/default/types/objects/activity-reply-notification",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"activity-reply-notification",title:"ActivityReplyNotification"},sidebar:"schemaSidebar"},d={},r=()=>{const e={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},y=e=>{const t={a:"a",...(0,a.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>ActivityReplyNotification.<b>id</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activityreplynotificationidint--",level:4},{value:'<code>ActivityReplyNotification.<b>userId</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activityreplynotificationuseridint--",level:4},{value:'<code>ActivityReplyNotification.<b>type</b></code><Bullet></Bullet><code>NotificationType</code> <Badge class="badge badge--secondary"></Badge>',id:"activityreplynotificationtypenotificationtype-",level:4},{value:'<code>ActivityReplyNotification.<b>activityId</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activityreplynotificationactivityidint--",level:4},{value:'<code>ActivityReplyNotification.<b>context</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"activityreplynotificationcontextstring-",level:4},{value:'<code>ActivityReplyNotification.<b>createdAt</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"activityreplynotificationcreatedatint-",level:4},{value:'<code>ActivityReplyNotification.<b>activity</b></code><Bullet></Bullet><code>ActivityUnion</code> <Badge class="badge badge--secondary"></Badge>',id:"activityreplynotificationactivityactivityunion-",level:4},{value:'<code>ActivityReplyNotification.<b>user</b></code><Bullet></Bullet><code>User</code> <Badge class="badge badge--secondary"></Badge>',id:"activityreplynotificationuseruser-",level:4},{value:"Implemented By",id:"implemented-by",level:3}],x=({dataOpen:e,dataClose:t,children:i,startOpen:s=!1})=>{const o={details:"details",summary:"summary",...(0,a.R)()},[l,d]=(0,c.useState)(s);return(0,n.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(o.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&i]})};function f(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i,{children:[(0,n.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,n.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,n.jsx)(t.p,{children:"Notification for when a user replies to the authenticated users activity"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type ActivityReplyNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  activityId: Int!\n  context: String\n  createdAt: Int\n  activity: ActivityUnion\n  user: User\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"activityreplynotificationidint--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplyNotification.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(t.code,{children:"Int!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The id of the Notification"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"activityreplynotificationuseridint--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplyNotification.",(0,n.jsx)("b",{children:"userId"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(t.code,{children:"Int!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The id of the user who replied to the activity"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"activityreplynotificationtypenotificationtype-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplyNotification.",(0,n.jsx)("b",{children:"type"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/enums/notification-type",children:(0,n.jsx)(t.code,{children:"NotificationType"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The type of notification"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"activityreplynotificationactivityidint--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplyNotification.",(0,n.jsx)("b",{children:"activityId"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(t.code,{children:"Int!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The id of the activity which was replied too"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"activityreplynotificationcontextstring-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplyNotification.",(0,n.jsx)("b",{children:"context"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The notification context text"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"activityreplynotificationcreatedatint-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplyNotification.",(0,n.jsx)("b",{children:"createdAt"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(t.code,{children:"Int"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The time the notification was created at"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"activityreplynotificationactivityactivityunion-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplyNotification.",(0,n.jsx)("b",{children:"activity"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/unions/activity-union",children:(0,n.jsx)(t.code,{children:"ActivityUnion"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"union"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The liked activity"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"activityreplynotificationuseruser-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplyNotification.",(0,n.jsx)("b",{children:"user"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/objects/user",children:(0,n.jsx)(t.code,{children:"User"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The user who replied to the activity"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/examples/default/types/unions/notification-union",children:(0,n.jsx)(t.code,{children:"NotificationUnion"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"union"})]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>o});var n=i(6540);const a={},c=n.createContext(a);function s(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);