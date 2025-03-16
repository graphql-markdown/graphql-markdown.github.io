"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["1150"],{77965:function(e,t,n){n.r(t),n.d(t,{Bullet:()=>l,SpecifiedBy:()=>h,Badge:()=>b,default:()=>x,frontMatter:()=>c,metadata:()=>d,Details:()=>m,assets:()=>r,toc:()=>u,contentTitle:()=>o});var d=JSON.parse('{"id":"types/objects/thread-comment-subscribed-notification","title":"ThreadCommentSubscribedNotification","description":"Notification for when a user replies to a subscribed forum thread","source":"@site/examples/default/types/objects/thread-comment-subscribed-notification.mdx","sourceDirName":"types/objects","slug":"/types/objects/thread-comment-subscribed-notification","permalink":"/examples/default/types/objects/thread-comment-subscribed-notification","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"thread-comment-subscribed-notification","title":"ThreadCommentSubscribedNotification"},"sidebar":"defaultSidebar","previous":{"title":"ThreadCommentReplyNotification","permalink":"/examples/default/types/objects/thread-comment-reply-notification"},"next":{"title":"ThreadComment","permalink":"/examples/default/types/objects/thread-comment"}}'),i=n("85893"),s=n("50065"),a=n("67294");let c={id:"thread-comment-subscribed-notification",title:"ThreadCommentSubscribedNotification"},o=void 0,r={},l=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25CF\xa0"})}),h=e=>(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),b=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:e.class,children:e.text})}),m=({dataOpen:e,dataClose:t,children:n,startOpen:d=!1})=>{let[s,c]=(0,a.useState)(d);return(0,i.jsxs)("details",{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)("summary",{onClick:e=>{e.preventDefault(),c(e=>!e)},style:{listStyle:"none"},children:s?e:t}),s&&n]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>ThreadCommentSubscribedNotification.<b>id</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentsubscribednotificationidint--",level:4},{value:'<code>ThreadCommentSubscribedNotification.<b>userId</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentsubscribednotificationuseridint--",level:4},{value:'<code>ThreadCommentSubscribedNotification.<b>type</b></code><Bullet></Bullet><code><b>NotificationType</b></code> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentsubscribednotificationtypenotificationtype-",level:4},{value:'<code>ThreadCommentSubscribedNotification.<b>commentId</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentsubscribednotificationcommentidint--",level:4},{value:'<code>ThreadCommentSubscribedNotification.<b>context</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentsubscribednotificationcontextstring-",level:4},{value:'<code>ThreadCommentSubscribedNotification.<b>createdAt</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentsubscribednotificationcreatedatint-",level:4},{value:'<code>ThreadCommentSubscribedNotification.<b>thread</b></code><Bullet></Bullet><code><b>Thread</b></code> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentsubscribednotificationthreadthread-",level:4},{value:'<code>ThreadCommentSubscribedNotification.<b>comment</b></code><Bullet></Bullet><code><b>ThreadComment</b></code> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentsubscribednotificationcommentthreadcomment-",level:4},{value:'<code>ThreadCommentSubscribedNotification.<b>user</b></code><Bullet></Bullet><code><b>User</b></code> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentsubscribednotificationuseruser-",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function f(e){let t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Head:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n,{children:[(0,i.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,i.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,i.jsx)(t.p,{children:"Notification for when a user replies to a subscribed forum thread"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"type ThreadCommentSubscribedNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  commentId: Int!\n  context: String\n  createdAt: Int\n  thread: Thread\n  comment: ThreadComment\n  user: User\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"threadcommentsubscribednotificationidint--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentSubscribedNotification.",(0,i.jsx)("b",{children:"id"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,i.jsx)("code",{style:{fontWeight:"normal"},children:(0,i.jsx)("b",{children:"Int!"})})})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.p,{children:"The id of the Notification"}),"\n",(0,i.jsxs)(t.h4,{id:"threadcommentsubscribednotificationuseridint--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentSubscribedNotification.",(0,i.jsx)("b",{children:"userId"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,i.jsx)("code",{style:{fontWeight:"normal"},children:(0,i.jsx)("b",{children:"Int!"})})})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.p,{children:"The id of the user who commented on the thread"}),"\n",(0,i.jsxs)(t.h4,{id:"threadcommentsubscribednotificationtypenotificationtype-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentSubscribedNotification.",(0,i.jsx)("b",{children:"type"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/examples/default/types/enums/notification-type",children:(0,i.jsx)("code",{style:{fontWeight:"normal"},children:(0,i.jsx)("b",{children:"NotificationType"})})})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,i.jsx)(t.p,{children:"The type of notification"}),"\n",(0,i.jsxs)(t.h4,{id:"threadcommentsubscribednotificationcommentidint--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentSubscribedNotification.",(0,i.jsx)("b",{children:"commentId"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,i.jsx)("code",{style:{fontWeight:"normal"},children:(0,i.jsx)("b",{children:"Int!"})})})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.p,{children:"The id of the new comment in the subscribed thread"}),"\n",(0,i.jsxs)(t.h4,{id:"threadcommentsubscribednotificationcontextstring-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentSubscribedNotification.",(0,i.jsx)("b",{children:"context"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/examples/default/types/scalars/string",children:(0,i.jsx)("code",{style:{fontWeight:"normal"},children:(0,i.jsx)("b",{children:"String"})})})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.p,{children:"The notification context text"}),"\n",(0,i.jsxs)(t.h4,{id:"threadcommentsubscribednotificationcreatedatint-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentSubscribedNotification.",(0,i.jsx)("b",{children:"createdAt"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,i.jsx)("code",{style:{fontWeight:"normal"},children:(0,i.jsx)("b",{children:"Int"})})})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.p,{children:"The time the notification was created at"}),"\n",(0,i.jsxs)(t.h4,{id:"threadcommentsubscribednotificationthreadthread-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentSubscribedNotification.",(0,i.jsx)("b",{children:"thread"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/examples/default/types/objects/thread",children:(0,i.jsx)("code",{style:{fontWeight:"normal"},children:(0,i.jsx)("b",{children:"Thread"})})})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsx)(t.p,{children:"The thread that the relevant comment belongs to"}),"\n",(0,i.jsxs)(t.h4,{id:"threadcommentsubscribednotificationcommentthreadcomment-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentSubscribedNotification.",(0,i.jsx)("b",{children:"comment"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/examples/default/types/objects/thread-comment",children:(0,i.jsx)("code",{style:{fontWeight:"normal"},children:(0,i.jsx)("b",{children:"ThreadComment"})})})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsx)(t.p,{children:"The reply thread comment"}),"\n",(0,i.jsxs)(t.h4,{id:"threadcommentsubscribednotificationuseruser-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentSubscribedNotification.",(0,i.jsx)("b",{children:"user"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/examples/default/types/objects/user",children:(0,i.jsx)("code",{style:{fontWeight:"normal"},children:(0,i.jsx)("b",{children:"User"})})})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsx)(t.p,{children:"The user who replied to the subscribed thread"}),"\n",(0,i.jsx)(t.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/examples/default/types/unions/notification-union",children:(0,i.jsx)(t.code,{children:"NotificationUnion"})})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"union"})]})]})}function x(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return a}});var d=n(67294);let i={},s=d.createContext(i);function a(e){let t=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),d.createElement(s.Provider,{value:t},e.children)}}}]);