"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7307],{202:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>h,assets:()=>r,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>x});var a=n(4848),o=n(8453),d=n(6540);const i={pagination_next:null,pagination_prev:null,id:"thread-comment-reply-notification",title:"ThreadCommentReplyNotification"},c=void 0,s={id:"types/objects/thread-comment-reply-notification",title:"ThreadCommentReplyNotification",description:"Notification for when a user replies to your forum thread comment",source:"@site/examples/default/types/objects/thread-comment-reply-notification.mdx",sourceDirName:"types/objects",slug:"/types/objects/thread-comment-reply-notification",permalink:"/examples/default/types/objects/thread-comment-reply-notification",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"thread-comment-reply-notification",title:"ThreadCommentReplyNotification"},sidebar:"schemaSidebar"},r={},l=()=>{const e={span:"span",...(0,o.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const t={a:"a",...(0,o.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const t={span:"span",...(0,o.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>ThreadCommentReplyNotification.<b>id</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentreplynotificationidint--",level:4},{value:'<code>ThreadCommentReplyNotification.<b>userId</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentreplynotificationuseridint--",level:4},{value:'<code>ThreadCommentReplyNotification.<b>type</b></code><Bullet></Bullet><code>NotificationType</code> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentreplynotificationtypenotificationtype-",level:4},{value:'<code>ThreadCommentReplyNotification.<b>commentId</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentreplynotificationcommentidint--",level:4},{value:'<code>ThreadCommentReplyNotification.<b>context</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentreplynotificationcontextstring-",level:4},{value:'<code>ThreadCommentReplyNotification.<b>createdAt</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentreplynotificationcreatedatint-",level:4},{value:'<code>ThreadCommentReplyNotification.<b>thread</b></code><Bullet></Bullet><code>Thread</code> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentreplynotificationthreadthread-",level:4},{value:'<code>ThreadCommentReplyNotification.<b>comment</b></code><Bullet></Bullet><code>ThreadComment</code> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentreplynotificationcommentthreadcomment-",level:4},{value:'<code>ThreadCommentReplyNotification.<b>user</b></code><Bullet></Bullet><code>User</code> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentreplynotificationuseruser-",level:4},{value:"Implemented By",id:"implemented-by",level:3}],p=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const c={details:"details",summary:"summary",...(0,o.R)()},[s,r]=(0,d.useState)(i);return(0,a.jsxs)(c.details,{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(c.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:s?e:t}),s&&n]})};function f(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n,{children:[(0,a.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,a.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,a.jsx)(t.p,{children:"Notification for when a user replies to your forum thread comment"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type ThreadCommentReplyNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  commentId: Int!\n  context: String\n  createdAt: Int\n  thread: Thread\n  comment: ThreadComment\n  user: User\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"threadcommentreplynotificationidint--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentReplyNotification.",(0,a.jsx)("b",{children:"id"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(t.code,{children:"Int!"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The id of the Notification"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"threadcommentreplynotificationuseridint--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentReplyNotification.",(0,a.jsx)("b",{children:"userId"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(t.code,{children:"Int!"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The id of the user who create the comment reply"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"threadcommentreplynotificationtypenotificationtype-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentReplyNotification.",(0,a.jsx)("b",{children:"type"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/enums/notification-type",children:(0,a.jsx)(t.code,{children:"NotificationType"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The type of notification"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"threadcommentreplynotificationcommentidint--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentReplyNotification.",(0,a.jsx)("b",{children:"commentId"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(t.code,{children:"Int!"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The id of the reply comment"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"threadcommentreplynotificationcontextstring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentReplyNotification.",(0,a.jsx)("b",{children:"context"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The notification context text"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"threadcommentreplynotificationcreatedatint-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentReplyNotification.",(0,a.jsx)("b",{children:"createdAt"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(t.code,{children:"Int"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The time the notification was created at"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"threadcommentreplynotificationthreadthread-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentReplyNotification.",(0,a.jsx)("b",{children:"thread"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/objects/thread",children:(0,a.jsx)(t.code,{children:"Thread"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The thread that the relevant comment belongs to"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"threadcommentreplynotificationcommentthreadcomment-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentReplyNotification.",(0,a.jsx)("b",{children:"comment"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/objects/thread-comment",children:(0,a.jsx)(t.code,{children:"ThreadComment"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The reply thread comment"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"threadcommentreplynotificationuseruser-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentReplyNotification.",(0,a.jsx)("b",{children:"user"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/objects/user",children:(0,a.jsx)(t.code,{children:"User"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The user who replied to the activity"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/examples/default/types/unions/notification-union",children:(0,a.jsx)(t.code,{children:"NotificationUnion"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"union"})]})]})}function y(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var a=n(6540);const o={},d=a.createContext(o);function i(e){const t=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(d.Provider,{value:t},e.children)}}}]);