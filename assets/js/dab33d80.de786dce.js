"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["8482"],{67193:function(e,t,n){n.r(t),n.d(t,{Bullet:()=>c,SpecifiedBy:()=>h,Badge:()=>x,default:()=>g,frontMatter:()=>l,metadata:()=>i,Details:()=>f,assets:()=>r,toc:()=>b,contentTitle:()=>s});var i=JSON.parse('{"id":"types/objects/thread-like-notification","title":"ThreadLikeNotification","description":"Notification for when a thread is liked","source":"@site/examples/default/types/objects/thread-like-notification.mdx","sourceDirName":"types/objects","slug":"/types/objects/thread-like-notification","permalink":"/examples/default/types/objects/thread-like-notification","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"thread-like-notification","title":"ThreadLikeNotification"},"sidebar":"defaultSidebar","previous":{"title":"ThreadComment","permalink":"/examples/default/types/objects/thread-comment"},"next":{"title":"Thread","permalink":"/examples/default/types/objects/thread"}}'),a=n("85893"),d=n("50065"),o=n("67294");let l={id:"thread-like-notification",title:"ThreadLikeNotification"},s=void 0,r={},c=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25CF\xa0"})}),h=e=>(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),x=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:e.class,children:e.text})}),f=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{let[d,l]=(0,o.useState)(i);return(0,a.jsxs)("details",{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)("summary",{onClick:e=>{e.preventDefault(),l(e=>!e)},style:{listStyle:"none"},children:d?e:t}),d&&n]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>ThreadLikeNotification.<b>id</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary badge--non_null"></Badge> <Badge class="badge badge--secondary "></Badge>',id:"threadlikenotificationidint--",level:4},{value:'<code>ThreadLikeNotification.<b>userId</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary badge--non_null"></Badge> <Badge class="badge badge--secondary "></Badge>',id:"threadlikenotificationuseridint--",level:4},{value:'<code>ThreadLikeNotification.<b>type</b></code><Bullet></Bullet><code><b>NotificationType</b></code> <Badge class="badge badge--secondary "></Badge>',id:"threadlikenotificationtypenotificationtype-",level:4},{value:'<code>ThreadLikeNotification.<b>threadId</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary badge--non_null"></Badge> <Badge class="badge badge--secondary "></Badge>',id:"threadlikenotificationthreadidint--",level:4},{value:'<code>ThreadLikeNotification.<b>context</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary "></Badge>',id:"threadlikenotificationcontextstring-",level:4},{value:'<code>ThreadLikeNotification.<b>createdAt</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary "></Badge>',id:"threadlikenotificationcreatedatint-",level:4},{value:'<code>ThreadLikeNotification.<b>thread</b></code><Bullet></Bullet><code><b>Thread</b></code> <Badge class="badge badge--secondary "></Badge>',id:"threadlikenotificationthreadthread-",level:4},{value:'<code>ThreadLikeNotification.<b>comment</b></code><Bullet></Bullet><code><b>ThreadComment</b></code> <Badge class="badge badge--secondary "></Badge>',id:"threadlikenotificationcommentthreadcomment-",level:4},{value:'<code>ThreadLikeNotification.<b>user</b></code><Bullet></Bullet><code><b>User</b></code> <Badge class="badge badge--secondary "></Badge>',id:"threadlikenotificationuseruser-",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function j(e){let t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.a)(),...e.components},{Head:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n,{children:[(0,a.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,a.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,a.jsx)(t.p,{children:"Notification for when a thread is liked"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type ThreadLikeNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  threadId: Int!\n  context: String\n  createdAt: Int\n  thread: Thread\n  comment: ThreadComment\n  user: User\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"threadlikenotificationidint--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadLikeNotification.",(0,a.jsx)("b",{children:"id"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"Int!"})})})," ",(0,a.jsx)(x,{class:"badge badge--secondary badge--non_null",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"The id of the Notification"}),"\n",(0,a.jsxs)(t.h4,{id:"threadlikenotificationuseridint--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadLikeNotification.",(0,a.jsx)("b",{children:"userId"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"Int!"})})})," ",(0,a.jsx)(x,{class:"badge badge--secondary badge--non_null",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"The id of the user who liked to the activity"}),"\n",(0,a.jsxs)(t.h4,{id:"threadlikenotificationtypenotificationtype-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadLikeNotification.",(0,a.jsx)("b",{children:"type"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/enums/notification-type",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"NotificationType"})})})," ",(0,a.jsx)(x,{class:"badge badge--secondary ",text:"enum"})]}),"\n",(0,a.jsx)(t.p,{children:"The type of notification"}),"\n",(0,a.jsxs)(t.h4,{id:"threadlikenotificationthreadidint--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadLikeNotification.",(0,a.jsx)("b",{children:"threadId"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"Int!"})})})," ",(0,a.jsx)(x,{class:"badge badge--secondary badge--non_null",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"The id of the thread which was liked"}),"\n",(0,a.jsxs)(t.h4,{id:"threadlikenotificationcontextstring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadLikeNotification.",(0,a.jsx)("b",{children:"context"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/string",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"String"})})})," ",(0,a.jsx)(x,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"The notification context text"}),"\n",(0,a.jsxs)(t.h4,{id:"threadlikenotificationcreatedatint-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadLikeNotification.",(0,a.jsx)("b",{children:"createdAt"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"Int"})})})," ",(0,a.jsx)(x,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"The time the notification was created at"}),"\n",(0,a.jsxs)(t.h4,{id:"threadlikenotificationthreadthread-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadLikeNotification.",(0,a.jsx)("b",{children:"thread"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/objects/thread",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"Thread"})})})," ",(0,a.jsx)(x,{class:"badge badge--secondary ",text:"object"})]}),"\n",(0,a.jsx)(t.p,{children:"The thread that the relevant comment belongs to"}),"\n",(0,a.jsxs)(t.h4,{id:"threadlikenotificationcommentthreadcomment-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadLikeNotification.",(0,a.jsx)("b",{children:"comment"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/objects/thread-comment",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"ThreadComment"})})})," ",(0,a.jsx)(x,{class:"badge badge--secondary ",text:"object"})]}),"\n",(0,a.jsx)(t.p,{children:"The liked thread comment"}),"\n",(0,a.jsxs)(t.h4,{id:"threadlikenotificationuseruser-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadLikeNotification.",(0,a.jsx)("b",{children:"user"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/objects/user",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"User"})})})," ",(0,a.jsx)(x,{class:"badge badge--secondary ",text:"object"})]}),"\n",(0,a.jsx)(t.p,{children:"The user who liked the activity"}),"\n",(0,a.jsx)(t.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/examples/default/types/unions/notification-union",children:(0,a.jsx)(t.code,{children:"NotificationUnion"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary badge--relation",text:"union"})]})]})}function g(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return o}});var i=n(67294);let a={},d=i.createContext(a);function o(e){let t=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);