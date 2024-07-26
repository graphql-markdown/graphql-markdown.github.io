"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[176],{86698:(e,i,t)=>{t.r(i),t.d(i,{Badge:()=>b,Bullet:()=>r,Details:()=>u,SpecifiedBy:()=>y,assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var n=t(74848),c=t(28453),s=t(96540);const a={pagination_next:null,pagination_prev:null,id:"activity-reply-subscribed-notification",title:"ActivityReplySubscribedNotification"},d=void 0,o={id:"types/objects/activity-reply-subscribed-notification",title:"ActivityReplySubscribedNotification",description:"Notification for when a user replies to activity the authenticated user has replied to",source:"@site/examples/default/types/objects/activity-reply-subscribed-notification.mdx",sourceDirName:"types/objects",slug:"/types/objects/activity-reply-subscribed-notification",permalink:"/examples/default/types/objects/activity-reply-subscribed-notification",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"activity-reply-subscribed-notification",title:"ActivityReplySubscribedNotification"},sidebar:"defaultSidebar"},l={},r=()=>{const e={span:"span",...(0,c.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},y=e=>{const i={a:"a",...(0,c.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(i.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const i={span:"span",...(0,c.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:i,children:t,startOpen:a=!1})=>{const d={details:"details",summary:"summary",...(0,c.R)()},[o,l]=(0,s.useState)(a);return(0,n.jsxs)(d.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:i}),o&&t]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>ActivityReplySubscribedNotification.<b>id</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activityreplysubscribednotificationidint--",level:4},{value:'<code>ActivityReplySubscribedNotification.<b>userId</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activityreplysubscribednotificationuseridint--",level:4},{value:'<code>ActivityReplySubscribedNotification.<b>type</b></code><Bullet></Bullet><code>NotificationType</code> <Badge class="badge badge--secondary"></Badge>',id:"activityreplysubscribednotificationtypenotificationtype-",level:4},{value:'<code>ActivityReplySubscribedNotification.<b>activityId</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activityreplysubscribednotificationactivityidint--",level:4},{value:'<code>ActivityReplySubscribedNotification.<b>context</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"activityreplysubscribednotificationcontextstring-",level:4},{value:'<code>ActivityReplySubscribedNotification.<b>createdAt</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"activityreplysubscribednotificationcreatedatint-",level:4},{value:'<code>ActivityReplySubscribedNotification.<b>activity</b></code><Bullet></Bullet><code>ActivityUnion</code> <Badge class="badge badge--secondary"></Badge>',id:"activityreplysubscribednotificationactivityactivityunion-",level:4},{value:'<code>ActivityReplySubscribedNotification.<b>user</b></code><Bullet></Bullet><code>User</code> <Badge class="badge badge--secondary"></Badge>',id:"activityreplysubscribednotificationuseruser-",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function p(e){const i={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components},{Head:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t,{children:[(0,n.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,n.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,n.jsx)(i.p,{children:"Notification for when a user replies to activity the authenticated user has replied to"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-graphql",children:"type ActivityReplySubscribedNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  activityId: Int!\n  context: String\n  createdAt: Int\n  activity: ActivityUnion\n  user: User\n}\n"})}),"\n",(0,n.jsx)(i.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(i.h4,{id:"activityreplysubscribednotificationidint--",children:[(0,n.jsx)(i.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplySubscribedNotification.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(i.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(i.code,{children:"Int!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(i.p,{children:"The id of the Notification"}),"\n",(0,n.jsxs)(i.h4,{id:"activityreplysubscribednotificationuseridint--",children:[(0,n.jsx)(i.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplySubscribedNotification.",(0,n.jsx)("b",{children:"userId"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(i.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(i.code,{children:"Int!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(i.p,{children:"The id of the user who replied to the activity"}),"\n",(0,n.jsxs)(i.h4,{id:"activityreplysubscribednotificationtypenotificationtype-",children:[(0,n.jsx)(i.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplySubscribedNotification.",(0,n.jsx)("b",{children:"type"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(i.a,{href:"/examples/default/types/enums/notification-type",children:(0,n.jsx)(i.code,{children:"NotificationType"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(i.p,{children:"The type of notification"}),"\n",(0,n.jsxs)(i.h4,{id:"activityreplysubscribednotificationactivityidint--",children:[(0,n.jsx)(i.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplySubscribedNotification.",(0,n.jsx)("b",{children:"activityId"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(i.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(i.code,{children:"Int!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(i.p,{children:"The id of the activity which was replied too"}),"\n",(0,n.jsxs)(i.h4,{id:"activityreplysubscribednotificationcontextstring-",children:[(0,n.jsx)(i.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplySubscribedNotification.",(0,n.jsx)("b",{children:"context"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(i.a,{href:"/examples/default/types/scalars/string",children:(0,n.jsx)(i.code,{children:"String"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(i.p,{children:"The notification context text"}),"\n",(0,n.jsxs)(i.h4,{id:"activityreplysubscribednotificationcreatedatint-",children:[(0,n.jsx)(i.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplySubscribedNotification.",(0,n.jsx)("b",{children:"createdAt"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(i.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(i.code,{children:"Int"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(i.p,{children:"The time the notification was created at"}),"\n",(0,n.jsxs)(i.h4,{id:"activityreplysubscribednotificationactivityactivityunion-",children:[(0,n.jsx)(i.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplySubscribedNotification.",(0,n.jsx)("b",{children:"activity"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(i.a,{href:"/examples/default/types/unions/activity-union",children:(0,n.jsx)(i.code,{children:"ActivityUnion"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"union"})]}),"\n",(0,n.jsx)(i.p,{children:"The liked activity"}),"\n",(0,n.jsxs)(i.h4,{id:"activityreplysubscribednotificationuseruser-",children:[(0,n.jsx)(i.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplySubscribedNotification.",(0,n.jsx)("b",{children:"user"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(i.a,{href:"/examples/default/types/objects/user",children:(0,n.jsx)(i.code,{children:"User"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(i.p,{children:"The user who replied to the activity"}),"\n",(0,n.jsx)(i.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"/examples/default/types/unions/notification-union",children:(0,n.jsx)(i.code,{children:"NotificationUnion"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"union"})]})]})}function x(e={}){const{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>d});var n=t(96540);const c={},s=n.createContext(c);function a(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);