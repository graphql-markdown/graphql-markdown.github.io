"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["2538"],{96991:function(e,i,t){t.r(i),t.d(i,{Bullet:()=>r,SpecifiedBy:()=>y,Badge:()=>h,default:()=>b,frontMatter:()=>s,metadata:()=>n,Details:()=>f,assets:()=>d,toc:()=>x,contentTitle:()=>o});var n=JSON.parse('{"id":"types/objects/activity-reply-like-notification","title":"ActivityReplyLikeNotification","description":"Notification for when a activity reply is liked","source":"@site/examples/default/types/objects/activity-reply-like-notification.mdx","sourceDirName":"types/objects","slug":"/types/objects/activity-reply-like-notification","permalink":"/examples/default/types/objects/activity-reply-like-notification","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"activity-reply-like-notification","title":"ActivityReplyLikeNotification"},"sidebar":"defaultSidebar","previous":{"title":"ActivityMessageNotification","permalink":"/examples/default/types/objects/activity-message-notification"},"next":{"title":"ActivityReplyNotification","permalink":"/examples/default/types/objects/activity-reply-notification"}}'),a=t("85893"),l=t("50065"),c=t("67294");let s={id:"activity-reply-like-notification",title:"ActivityReplyLikeNotification"},o=void 0,d={},r=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25CF\xa0"})}),y=e=>(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:e.class,children:e.text})}),f=({dataOpen:e,dataClose:i,children:t,startOpen:n=!1})=>{let[l,s]=(0,c.useState)(n);return(0,a.jsxs)("details",{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)("summary",{onClick:e=>{e.preventDefault(),s(e=>!e)},style:{listStyle:"none"},children:l?e:i}),l&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>ActivityReplyLikeNotification.<b>id</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary badge--non_null"></Badge> <Badge class="badge badge--secondary "></Badge>',id:"activityreplylikenotificationidint--",level:4},{value:'<code>ActivityReplyLikeNotification.<b>userId</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary badge--non_null"></Badge> <Badge class="badge badge--secondary "></Badge>',id:"activityreplylikenotificationuseridint--",level:4},{value:'<code>ActivityReplyLikeNotification.<b>type</b></code><Bullet></Bullet><code><b>NotificationType</b></code> <Badge class="badge badge--secondary "></Badge>',id:"activityreplylikenotificationtypenotificationtype-",level:4},{value:'<code>ActivityReplyLikeNotification.<b>activityId</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary badge--non_null"></Badge> <Badge class="badge badge--secondary "></Badge>',id:"activityreplylikenotificationactivityidint--",level:4},{value:'<code>ActivityReplyLikeNotification.<b>context</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary "></Badge>',id:"activityreplylikenotificationcontextstring-",level:4},{value:'<code>ActivityReplyLikeNotification.<b>createdAt</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary "></Badge>',id:"activityreplylikenotificationcreatedatint-",level:4},{value:'<code>ActivityReplyLikeNotification.<b>activity</b></code><Bullet></Bullet><code><b>ActivityUnion</b></code> <Badge class="badge badge--secondary "></Badge>',id:"activityreplylikenotificationactivityactivityunion-",level:4},{value:'<code>ActivityReplyLikeNotification.<b>user</b></code><Bullet></Bullet><code><b>User</b></code> <Badge class="badge badge--secondary "></Badge>',id:"activityreplylikenotificationuseruser-",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function p(e){let i={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...e.components},{Head:t}=i;return t||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t,{children:[(0,a.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,a.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,a.jsx)(i.p,{children:"Notification for when a activity reply is liked"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-graphql",children:"type ActivityReplyLikeNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  activityId: Int!\n  context: String\n  createdAt: Int\n  activity: ActivityUnion\n  user: User\n}\n"})}),"\n",(0,a.jsx)(i.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(i.h4,{id:"activityreplylikenotificationidint--",children:[(0,a.jsx)(i.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplyLikeNotification.",(0,a.jsx)("b",{children:"id"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(i.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"Int!"})})})," ",(0,a.jsx)(h,{class:"badge badge--secondary badge--non_null",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,a.jsx)(i.p,{children:"The id of the Notification"}),"\n",(0,a.jsxs)(i.h4,{id:"activityreplylikenotificationuseridint--",children:[(0,a.jsx)(i.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplyLikeNotification.",(0,a.jsx)("b",{children:"userId"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(i.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"Int!"})})})," ",(0,a.jsx)(h,{class:"badge badge--secondary badge--non_null",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,a.jsx)(i.p,{children:"The id of the user who liked to the activity reply"}),"\n",(0,a.jsxs)(i.h4,{id:"activityreplylikenotificationtypenotificationtype-",children:[(0,a.jsx)(i.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplyLikeNotification.",(0,a.jsx)("b",{children:"type"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(i.a,{href:"/examples/default/types/enums/notification-type",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"NotificationType"})})})," ",(0,a.jsx)(h,{class:"badge badge--secondary ",text:"enum"})]}),"\n",(0,a.jsx)(i.p,{children:"The type of notification"}),"\n",(0,a.jsxs)(i.h4,{id:"activityreplylikenotificationactivityidint--",children:[(0,a.jsx)(i.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplyLikeNotification.",(0,a.jsx)("b",{children:"activityId"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(i.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"Int!"})})})," ",(0,a.jsx)(h,{class:"badge badge--secondary badge--non_null",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,a.jsx)(i.p,{children:"The id of the activity where the reply which was liked"}),"\n",(0,a.jsxs)(i.h4,{id:"activityreplylikenotificationcontextstring-",children:[(0,a.jsx)(i.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplyLikeNotification.",(0,a.jsx)("b",{children:"context"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(i.a,{href:"/examples/default/types/scalars/string",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"String"})})})," ",(0,a.jsx)(h,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,a.jsx)(i.p,{children:"The notification context text"}),"\n",(0,a.jsxs)(i.h4,{id:"activityreplylikenotificationcreatedatint-",children:[(0,a.jsx)(i.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplyLikeNotification.",(0,a.jsx)("b",{children:"createdAt"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(i.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"Int"})})})," ",(0,a.jsx)(h,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,a.jsx)(i.p,{children:"The time the notification was created at"}),"\n",(0,a.jsxs)(i.h4,{id:"activityreplylikenotificationactivityactivityunion-",children:[(0,a.jsx)(i.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplyLikeNotification.",(0,a.jsx)("b",{children:"activity"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(i.a,{href:"/examples/default/types/unions/activity-union",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"ActivityUnion"})})})," ",(0,a.jsx)(h,{class:"badge badge--secondary ",text:"union"})]}),"\n",(0,a.jsx)(i.p,{children:"The liked activity"}),"\n",(0,a.jsxs)(i.h4,{id:"activityreplylikenotificationuseruser-",children:[(0,a.jsx)(i.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReplyLikeNotification.",(0,a.jsx)("b",{children:"user"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(i.a,{href:"/examples/default/types/objects/user",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"User"})})})," ",(0,a.jsx)(h,{class:"badge badge--secondary ",text:"object"})]}),"\n",(0,a.jsx)(i.p,{children:"The user who liked the activity reply"}),"\n",(0,a.jsx)(i.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.a,{href:"/examples/default/types/unions/notification-union",children:(0,a.jsx)(i.code,{children:"NotificationUnion"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary badge--relation",text:"union"})]})]})}function b(e={}){let{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return s},a:function(){return c}});var n=t(67294);let a={},l=n.createContext(a);function c(e){let i=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(l.Provider,{value:i},e.children)}}}]);