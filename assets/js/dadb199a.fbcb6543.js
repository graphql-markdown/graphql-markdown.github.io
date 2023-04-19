"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7268],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=d(n),f=a,u=s["".concat(l,".").concat(f)]||s[f]||h[f]||i;return n?o.createElement(u,r(r({ref:t},m),{},{components:n})):o.createElement(u,r({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,r[1]=c;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8657:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>h,Bullet:()=>m,Details:()=>u,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>r,metadata:()=>l,toc:()=>f});var o=n(7462),a=n(7294),i=n(3905);const r={id:"thread-comment-mention-notification",title:"ThreadCommentMentionNotification",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},c=void 0,l={unversionedId:"objects/thread-comment-mention-notification",id:"objects/thread-comment-mention-notification",title:"ThreadCommentMentionNotification",description:"Notification for when authenticated user is @ mentioned in a forum thread comment",source:"@site/examples/schema/objects/thread-comment-mention-notification.mdx",sourceDirName:"objects",slug:"/objects/thread-comment-mention-notification",permalink:"/schema/objects/thread-comment-mention-notification",draft:!1,tags:[],version:"current",frontMatter:{id:"thread-comment-mention-notification",title:"ThreadCommentMentionNotification",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},m=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentMentionNotification.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentmentionnotificationbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentMentionNotification.<b>userId</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentmentionnotificationbuseridbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentMentionNotification.<b>type</b></code><Bullet /><code>NotificationType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-threadcommentmentionnotificationbtypebcodenotificationtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentMentionNotification.<b>commentId</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentmentionnotificationbcommentidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentMentionNotification.<b>context</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentmentionnotificationbcontextbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentMentionNotification.<b>createdAt</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentmentionnotificationbcreatedatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentMentionNotification.<b>thread</b></code><Bullet /><code>Thread</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-threadcommentmentionnotificationbthreadbcodethread-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentMentionNotification.<b>comment</b></code><Bullet /><code>ThreadComment</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-threadcommentmentionnotificationbcommentbcodethreadcomment-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentMentionNotification.<b>user</b></code><Bullet /><code>User</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-threadcommentmentionnotificationbuserbcodeuser-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],u=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:c=!1}=e;const[l,d]=(0,a.useState)(c);return(0,i.kt)("details",(0,o.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&r)},p={Bullet:m,SpecifiedBy:s,Badge:h,toc:f,Details:u};function y(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Notification for when authenticated user is @ mentioned in a forum thread comment"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type ThreadCommentMentionNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  commentId: Int!\n  context: String\n  createdAt: Int\n  thread: Thread\n  comment: ThreadComment\n  user: User\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentmentionnotificationbidbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentMentionNotification.",(0,i.kt)("b",null,"id"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,i.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The id of the Notification")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentmentionnotificationbuseridbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentMentionNotification.",(0,i.kt)("b",null,"userId"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,i.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The id of the user who mentioned the authenticated user")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentmentionnotificationbtypebcodenotificationtype-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentMentionNotification.",(0,i.kt)("b",null,"type"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,i.kt)("inlineCode",{parentName:"a"},"NotificationType"))," ",(0,i.kt)(h,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The type of notification")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentmentionnotificationbcommentidbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentMentionNotification.",(0,i.kt)("b",null,"commentId"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,i.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The id of the comment where mentioned")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentmentionnotificationbcontextbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentMentionNotification.",(0,i.kt)("b",null,"context"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The notification context text")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentmentionnotificationbcreatedatbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentMentionNotification.",(0,i.kt)("b",null,"createdAt"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The time the notification was created at")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentmentionnotificationbthreadbcodethread-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentMentionNotification.",(0,i.kt)("b",null,"thread"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/thread"},(0,i.kt)("inlineCode",{parentName:"a"},"Thread"))," ",(0,i.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The thread that the relevant comment belongs to")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentmentionnotificationbcommentbcodethreadcomment-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentMentionNotification.",(0,i.kt)("b",null,"comment"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/thread-comment"},(0,i.kt)("inlineCode",{parentName:"a"},"ThreadComment"))," ",(0,i.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The thread comment that included the @ mention")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentmentionnotificationbuserbcodeuser-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentMentionNotification.",(0,i.kt)("b",null,"user"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,i.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,i.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The user who mentioned the authenticated user")),(0,i.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/schema/unions/notification-union"},(0,i.kt)("inlineCode",{parentName:"a"},"NotificationUnion"))," ",(0,i.kt)(h,{class:"secondary",text:"union",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);