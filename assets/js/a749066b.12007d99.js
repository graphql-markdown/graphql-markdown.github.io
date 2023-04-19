"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3460],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=d(n),h=a,y=s["".concat(c,".").concat(h)]||s[h]||p[h]||r;return n?o.createElement(y,l(l({ref:t},m),{},{components:n})):o.createElement(y,l({ref:t},m))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6042:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>m,Details:()=>y,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var o=n(7462),a=n(7294),r=n(3905);const l={id:"thread-comment-reply-notification",title:"ThreadCommentReplyNotification",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},i=void 0,c={unversionedId:"objects/thread-comment-reply-notification",id:"objects/thread-comment-reply-notification",title:"ThreadCommentReplyNotification",description:"Notification for when a user replies to your forum thread comment",source:"@site/examples/schema/objects/thread-comment-reply-notification.mdx",sourceDirName:"objects",slug:"/objects/thread-comment-reply-notification",permalink:"/schema/objects/thread-comment-reply-notification",draft:!1,tags:[],version:"current",frontMatter:{id:"thread-comment-reply-notification",title:"ThreadCommentReplyNotification",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},m=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),h=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentReplyNotification.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentreplynotificationbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentReplyNotification.<b>userId</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentreplynotificationbuseridbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentReplyNotification.<b>type</b></code><Bullet /><code>NotificationType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-threadcommentreplynotificationbtypebcodenotificationtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentReplyNotification.<b>commentId</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentreplynotificationbcommentidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentReplyNotification.<b>context</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentreplynotificationbcontextbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentReplyNotification.<b>createdAt</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentreplynotificationbcreatedatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentReplyNotification.<b>thread</b></code><Bullet /><code>Thread</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-threadcommentreplynotificationbthreadbcodethread-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentReplyNotification.<b>comment</b></code><Bullet /><code>ThreadComment</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-threadcommentreplynotificationbcommentbcodethreadcomment-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentReplyNotification.<b>user</b></code><Bullet /><code>User</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-threadcommentreplynotificationbuserbcodeuser-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:i=!1}=e;const[c,d]=(0,a.useState)(i);return(0,r.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&l)},f={Bullet:m,SpecifiedBy:s,Badge:p,toc:h,Details:y};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Notification for when a user replies to your forum thread comment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type ThreadCommentReplyNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  commentId: Int!\n  context: String\n  createdAt: Int\n  thread: Thread\n  comment: ThreadComment\n  user: User\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-threadcommentreplynotificationbidbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentReplyNotification.",(0,r.kt)("b",null,"id"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The id of the Notification")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-threadcommentreplynotificationbuseridbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentReplyNotification.",(0,r.kt)("b",null,"userId"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The id of the user who create the comment reply")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-threadcommentreplynotificationbtypebcodenotificationtype-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentReplyNotification.",(0,r.kt)("b",null,"type"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,r.kt)("inlineCode",{parentName:"a"},"NotificationType"))," ",(0,r.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The type of notification")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-threadcommentreplynotificationbcommentidbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentReplyNotification.",(0,r.kt)("b",null,"commentId"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The id of the reply comment")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-threadcommentreplynotificationbcontextbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentReplyNotification.",(0,r.kt)("b",null,"context"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The notification context text")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-threadcommentreplynotificationbcreatedatbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentReplyNotification.",(0,r.kt)("b",null,"createdAt"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The time the notification was created at")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-threadcommentreplynotificationbthreadbcodethread-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentReplyNotification.",(0,r.kt)("b",null,"thread"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/thread"},(0,r.kt)("inlineCode",{parentName:"a"},"Thread"))," ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The thread that the relevant comment belongs to")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-threadcommentreplynotificationbcommentbcodethreadcomment-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentReplyNotification.",(0,r.kt)("b",null,"comment"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/thread-comment"},(0,r.kt)("inlineCode",{parentName:"a"},"ThreadComment"))," ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The reply thread comment")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-threadcommentreplynotificationbuserbcodeuser-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentReplyNotification.",(0,r.kt)("b",null,"user"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,r.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The user who replied to the activity")),(0,r.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/schema/unions/notification-union"},(0,r.kt)("inlineCode",{parentName:"a"},"NotificationUnion"))," ",(0,r.kt)(p,{class:"secondary",text:"union",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);