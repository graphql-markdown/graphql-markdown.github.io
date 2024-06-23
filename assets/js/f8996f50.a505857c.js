"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[200],{3842:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>m,Bullet:()=>l,Details:()=>x,SpecifiedBy:()=>h,assets:()=>r,contentTitle:()=>c,default:()=>j,frontMatter:()=>d,metadata:()=>s,toc:()=>f});var o=t(74848),i=t(28453),a=t(96540);const d={pagination_next:null,pagination_prev:null,id:"thread-comment-mention-notification",title:"ThreadCommentMentionNotification"},c=void 0,s={id:"types/objects/thread-comment-mention-notification",title:"ThreadCommentMentionNotification",description:"Notification for when authenticated user is @ mentioned in a forum thread comment",source:"@site/examples/default/types/objects/thread-comment-mention-notification.mdx",sourceDirName:"types/objects",slug:"/types/objects/thread-comment-mention-notification",permalink:"/examples/default/types/objects/thread-comment-mention-notification",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"thread-comment-mention-notification",title:"ThreadCommentMentionNotification"},sidebar:"schemaSidebar"},r={},l=()=>{const e={span:"span",...(0,i.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,i.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const n={span:"span",...(0,i.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:n,children:t,startOpen:d=!1})=>{const c={details:"details",summary:"summary",...(0,i.R)()},[s,r]=(0,a.useState)(d);return(0,o.jsxs)(c.details,{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(c.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:s?e:n}),s&&t]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>ThreadCommentMentionNotification.<b>id</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentmentionnotificationidint--",level:4},{value:'<code>ThreadCommentMentionNotification.<b>userId</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentmentionnotificationuseridint--",level:4},{value:'<code>ThreadCommentMentionNotification.<b>type</b></code><Bullet></Bullet><code>NotificationType</code> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentmentionnotificationtypenotificationtype-",level:4},{value:'<code>ThreadCommentMentionNotification.<b>commentId</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentmentionnotificationcommentidint--",level:4},{value:'<code>ThreadCommentMentionNotification.<b>context</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentmentionnotificationcontextstring-",level:4},{value:'<code>ThreadCommentMentionNotification.<b>createdAt</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentmentionnotificationcreatedatint-",level:4},{value:'<code>ThreadCommentMentionNotification.<b>thread</b></code><Bullet></Bullet><code>Thread</code> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentmentionnotificationthreadthread-",level:4},{value:'<code>ThreadCommentMentionNotification.<b>comment</b></code><Bullet></Bullet><code>ThreadComment</code> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentmentionnotificationcommentthreadcomment-",level:4},{value:'<code>ThreadCommentMentionNotification.<b>user</b></code><Bullet></Bullet><code>User</code> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentmentionnotificationuseruser-",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t,{children:[(0,o.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,o.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,o.jsx)(n.p,{children:"Notification for when authenticated user is @ mentioned in a forum thread comment"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"type ThreadCommentMentionNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  commentId: Int!\n  context: String\n  createdAt: Int\n  thread: Thread\n  comment: ThreadComment\n  user: User\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.h4,{id:"threadcommentmentionnotificationidint--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentMentionNotification.",(0,o.jsx)("b",{children:"id"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/examples/default/types/scalars/int",children:(0,o.jsx)(n.code,{children:"Int!"})})," ",(0,o.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The id of the Notification"}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"threadcommentmentionnotificationuseridint--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentMentionNotification.",(0,o.jsx)("b",{children:"userId"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/examples/default/types/scalars/int",children:(0,o.jsx)(n.code,{children:"Int!"})})," ",(0,o.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The id of the user who mentioned the authenticated user"}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"threadcommentmentionnotificationtypenotificationtype-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentMentionNotification.",(0,o.jsx)("b",{children:"type"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/examples/default/types/enums/notification-type",children:(0,o.jsx)(n.code,{children:"NotificationType"})})," ",(0,o.jsx)(m,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The type of notification"}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"threadcommentmentionnotificationcommentidint--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentMentionNotification.",(0,o.jsx)("b",{children:"commentId"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/examples/default/types/scalars/int",children:(0,o.jsx)(n.code,{children:"Int!"})})," ",(0,o.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The id of the comment where mentioned"}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"threadcommentmentionnotificationcontextstring-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentMentionNotification.",(0,o.jsx)("b",{children:"context"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/examples/default/types/scalars/string",children:(0,o.jsx)(n.code,{children:"String"})})," ",(0,o.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The notification context text"}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"threadcommentmentionnotificationcreatedatint-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentMentionNotification.",(0,o.jsx)("b",{children:"createdAt"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/examples/default/types/scalars/int",children:(0,o.jsx)(n.code,{children:"Int"})})," ",(0,o.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The time the notification was created at"}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"threadcommentmentionnotificationthreadthread-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentMentionNotification.",(0,o.jsx)("b",{children:"thread"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/examples/default/types/objects/thread",children:(0,o.jsx)(n.code,{children:"Thread"})})," ",(0,o.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The thread that the relevant comment belongs to"}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"threadcommentmentionnotificationcommentthreadcomment-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentMentionNotification.",(0,o.jsx)("b",{children:"comment"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/examples/default/types/objects/thread-comment",children:(0,o.jsx)(n.code,{children:"ThreadComment"})})," ",(0,o.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The thread comment that included the @ mention"}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"threadcommentmentionnotificationuseruser-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadCommentMentionNotification.",(0,o.jsx)("b",{children:"user"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/examples/default/types/objects/user",children:(0,o.jsx)(n.code,{children:"User"})})," ",(0,o.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The user who mentioned the authenticated user"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/examples/default/types/unions/notification-union",children:(0,o.jsx)(n.code,{children:"NotificationUnion"})})," ",(0,o.jsx)(m,{class:"badge badge--secondary",text:"union"})]})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var o=t(96540);const i={},a=o.createContext(i);function d(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);