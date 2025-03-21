"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["5114"],{40253:function(e,t,i){i.r(t),i.d(t,{Bullet:()=>r,SpecifiedBy:()=>b,Badge:()=>y,default:()=>f,frontMatter:()=>d,metadata:()=>n,Details:()=>h,assets:()=>o,toc:()=>u,contentTitle:()=>l});var n=JSON.parse('{"id":"types/objects/activity-reply-subscribed-notification","title":"ActivityReplySubscribedNotification","description":"Notification for when a user replies to activity the authenticated user has replied to","source":"@site/examples/default/types/objects/activity-reply-subscribed-notification.mdx","sourceDirName":"types/objects","slug":"/types/objects/activity-reply-subscribed-notification","permalink":"/examples/default/types/objects/activity-reply-subscribed-notification","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"activity-reply-subscribed-notification","title":"ActivityReplySubscribedNotification"},"sidebar":"defaultSidebar","previous":{"title":"ActivityReplyNotification","permalink":"/examples/default/types/objects/activity-reply-notification"},"next":{"title":"ActivityReply","permalink":"/examples/default/types/objects/activity-reply"}}'),c=i("85893"),s=i("50065"),a=i("67294");let d={id:"activity-reply-subscribed-notification",title:"ActivityReplySubscribedNotification"},l=void 0,o={},r=()=>(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25CF\xa0"})}),b=e=>(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),y=e=>(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:t,children:i,startOpen:n=!1})=>{let[s,d]=(0,a.useState)(n);return(0,c.jsxs)("details",{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)("summary",{onClick:e=>{e.preventDefault(),d(e=>!e)},style:{listStyle:"none"},children:s?e:t}),s&&i]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>ActivityReplySubscribedNotification.<b>id</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary badge--non_null"></Badge> <Badge class="badge badge--secondary "></Badge>',id:"activityreplysubscribednotificationidint--",level:4},{value:'<code>ActivityReplySubscribedNotification.<b>userId</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary badge--non_null"></Badge> <Badge class="badge badge--secondary "></Badge>',id:"activityreplysubscribednotificationuseridint--",level:4},{value:'<code>ActivityReplySubscribedNotification.<b>type</b></code><Bullet></Bullet><code><b>NotificationType</b></code> <Badge class="badge badge--secondary "></Badge>',id:"activityreplysubscribednotificationtypenotificationtype-",level:4},{value:'<code>ActivityReplySubscribedNotification.<b>activityId</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary badge--non_null"></Badge> <Badge class="badge badge--secondary "></Badge>',id:"activityreplysubscribednotificationactivityidint--",level:4},{value:'<code>ActivityReplySubscribedNotification.<b>context</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary "></Badge>',id:"activityreplysubscribednotificationcontextstring-",level:4},{value:'<code>ActivityReplySubscribedNotification.<b>createdAt</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary "></Badge>',id:"activityreplysubscribednotificationcreatedatint-",level:4},{value:'<code>ActivityReplySubscribedNotification.<b>activity</b></code><Bullet></Bullet><code><b>ActivityUnion</b></code> <Badge class="badge badge--secondary "></Badge>',id:"activityreplysubscribednotificationactivityactivityunion-",level:4},{value:'<code>ActivityReplySubscribedNotification.<b>user</b></code><Bullet></Bullet><code><b>User</b></code> <Badge class="badge badge--secondary "></Badge>',id:"activityreplysubscribednotificationuseruser-",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function p(e){let t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Head:i}=t;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(i,{children:[(0,c.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,c.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,c.jsx)(t.p,{children:"Notification for when a user replies to activity the authenticated user has replied to"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-graphql",children:"type ActivityReplySubscribedNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  activityId: Int!\n  context: String\n  createdAt: Int\n  activity: ActivityUnion\n  user: User\n}\n"})}),"\n",(0,c.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(t.h4,{id:"activityreplysubscribednotificationidint--",children:[(0,c.jsx)(t.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplySubscribedNotification.",(0,c.jsx)("b",{children:"id"})]})}),(0,c.jsx)(r,{}),(0,c.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,c.jsx)("code",{style:{fontWeight:"normal"},children:(0,c.jsx)("b",{children:"Int!"})})})," ",(0,c.jsx)(y,{class:"badge badge--secondary badge--non_null",text:"non-null"})," ",(0,c.jsx)(y,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,c.jsx)(t.p,{children:"The id of the Notification"}),"\n",(0,c.jsxs)(t.h4,{id:"activityreplysubscribednotificationuseridint--",children:[(0,c.jsx)(t.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplySubscribedNotification.",(0,c.jsx)("b",{children:"userId"})]})}),(0,c.jsx)(r,{}),(0,c.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,c.jsx)("code",{style:{fontWeight:"normal"},children:(0,c.jsx)("b",{children:"Int!"})})})," ",(0,c.jsx)(y,{class:"badge badge--secondary badge--non_null",text:"non-null"})," ",(0,c.jsx)(y,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,c.jsx)(t.p,{children:"The id of the user who replied to the activity"}),"\n",(0,c.jsxs)(t.h4,{id:"activityreplysubscribednotificationtypenotificationtype-",children:[(0,c.jsx)(t.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplySubscribedNotification.",(0,c.jsx)("b",{children:"type"})]})}),(0,c.jsx)(r,{}),(0,c.jsx)(t.a,{href:"/examples/default/types/enums/notification-type",children:(0,c.jsx)("code",{style:{fontWeight:"normal"},children:(0,c.jsx)("b",{children:"NotificationType"})})})," ",(0,c.jsx)(y,{class:"badge badge--secondary ",text:"enum"})]}),"\n",(0,c.jsx)(t.p,{children:"The type of notification"}),"\n",(0,c.jsxs)(t.h4,{id:"activityreplysubscribednotificationactivityidint--",children:[(0,c.jsx)(t.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplySubscribedNotification.",(0,c.jsx)("b",{children:"activityId"})]})}),(0,c.jsx)(r,{}),(0,c.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,c.jsx)("code",{style:{fontWeight:"normal"},children:(0,c.jsx)("b",{children:"Int!"})})})," ",(0,c.jsx)(y,{class:"badge badge--secondary badge--non_null",text:"non-null"})," ",(0,c.jsx)(y,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,c.jsx)(t.p,{children:"The id of the activity which was replied too"}),"\n",(0,c.jsxs)(t.h4,{id:"activityreplysubscribednotificationcontextstring-",children:[(0,c.jsx)(t.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplySubscribedNotification.",(0,c.jsx)("b",{children:"context"})]})}),(0,c.jsx)(r,{}),(0,c.jsx)(t.a,{href:"/examples/default/types/scalars/string",children:(0,c.jsx)("code",{style:{fontWeight:"normal"},children:(0,c.jsx)("b",{children:"String"})})})," ",(0,c.jsx)(y,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,c.jsx)(t.p,{children:"The notification context text"}),"\n",(0,c.jsxs)(t.h4,{id:"activityreplysubscribednotificationcreatedatint-",children:[(0,c.jsx)(t.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplySubscribedNotification.",(0,c.jsx)("b",{children:"createdAt"})]})}),(0,c.jsx)(r,{}),(0,c.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,c.jsx)("code",{style:{fontWeight:"normal"},children:(0,c.jsx)("b",{children:"Int"})})})," ",(0,c.jsx)(y,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,c.jsx)(t.p,{children:"The time the notification was created at"}),"\n",(0,c.jsxs)(t.h4,{id:"activityreplysubscribednotificationactivityactivityunion-",children:[(0,c.jsx)(t.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplySubscribedNotification.",(0,c.jsx)("b",{children:"activity"})]})}),(0,c.jsx)(r,{}),(0,c.jsx)(t.a,{href:"/examples/default/types/unions/activity-union",children:(0,c.jsx)("code",{style:{fontWeight:"normal"},children:(0,c.jsx)("b",{children:"ActivityUnion"})})})," ",(0,c.jsx)(y,{class:"badge badge--secondary ",text:"union"})]}),"\n",(0,c.jsx)(t.p,{children:"The liked activity"}),"\n",(0,c.jsxs)(t.h4,{id:"activityreplysubscribednotificationuseruser-",children:[(0,c.jsx)(t.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplySubscribedNotification.",(0,c.jsx)("b",{children:"user"})]})}),(0,c.jsx)(r,{}),(0,c.jsx)(t.a,{href:"/examples/default/types/objects/user",children:(0,c.jsx)("code",{style:{fontWeight:"normal"},children:(0,c.jsx)("b",{children:"User"})})})," ",(0,c.jsx)(y,{class:"badge badge--secondary ",text:"object"})]}),"\n",(0,c.jsx)(t.p,{children:"The user who replied to the activity"}),"\n",(0,c.jsx)(t.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.a,{href:"/examples/default/types/unions/notification-union",children:(0,c.jsx)(t.code,{children:"NotificationUnion"})})," ",(0,c.jsx)(y,{class:"badge badge--secondary badge--relation",text:"union"})]})]})}function f(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return d},a:function(){return a}});var n=i(67294);let c={},s=n.createContext(c);function a(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);