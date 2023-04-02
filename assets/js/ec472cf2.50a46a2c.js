"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),s=d(n),k=a,f=s["".concat(c,".").concat(k)]||s[k]||h[k]||i;return n?o.createElement(f,l(l({ref:t},m),{},{components:n})):o.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=k;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[s]="string"==typeof e?e:a,l[1]=r;for(var d=2;d<i;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8096:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>h,Bullet:()=>m,Details:()=>f,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>k});var o=n(7462),a=n(7294),i=n(3905);const l={id:"thread-comment-like-notification",title:"ThreadCommentLikeNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},r=void 0,c={unversionedId:"objects/thread-comment-like-notification",id:"objects/thread-comment-like-notification",title:"ThreadCommentLikeNotification",description:"Notification for when a thread comment is liked",source:"@site/examples/schema/objects/thread-comment-like-notification.mdx",sourceDirName:"objects",slug:"/objects/thread-comment-like-notification",permalink:"/schema/objects/thread-comment-like-notification",draft:!1,tags:[],version:"current",frontMatter:{id:"thread-comment-like-notification",title:"ThreadCommentLikeNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},m=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),k=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentLikeNotification.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentlikenotificationbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentLikeNotification.<b>userId</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentlikenotificationbuseridbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentLikeNotification.<b>type</b></code><Bullet /><code>NotificationType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-threadcommentlikenotificationbtypebcodenotificationtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentLikeNotification.<b>commentId</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentlikenotificationbcommentidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentLikeNotification.<b>context</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentlikenotificationbcontextbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentLikeNotification.<b>createdAt</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentlikenotificationbcreatedatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentLikeNotification.<b>thread</b></code><Bullet /><code>Thread</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-threadcommentlikenotificationbthreadbcodethread-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentLikeNotification.<b>comment</b></code><Bullet /><code>ThreadComment</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-threadcommentlikenotificationbcommentbcodethreadcomment-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentLikeNotification.<b>user</b></code><Bullet /><code>User</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-threadcommentlikenotificationbuserbcodeuser-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],f=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:r=!1}=e;const[c,d]=(0,a.useState)(r);return(0,i.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&l)},p={Bullet:m,SpecifiedBy:s,Badge:h,toc:k,Details:f};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Notification for when a thread comment is liked"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type ThreadCommentLikeNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  commentId: Int!\n  context: String\n  createdAt: Int\n  thread: Thread\n  comment: ThreadComment\n  user: User\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentlikenotificationbidbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentLikeNotification.",(0,i.kt)("b",null,"id"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,i.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The id of the Notification")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentlikenotificationbuseridbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentLikeNotification.",(0,i.kt)("b",null,"userId"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,i.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The id of the user who liked to the activity")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentlikenotificationbtypebcodenotificationtype-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentLikeNotification.",(0,i.kt)("b",null,"type"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,i.kt)("inlineCode",{parentName:"a"},"NotificationType"))," ",(0,i.kt)(h,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The type of notification")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentlikenotificationbcommentidbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentLikeNotification.",(0,i.kt)("b",null,"commentId"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,i.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The id of the activity which was liked")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentlikenotificationbcontextbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentLikeNotification.",(0,i.kt)("b",null,"context"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The notification context text")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentlikenotificationbcreatedatbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentLikeNotification.",(0,i.kt)("b",null,"createdAt"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The time the notification was created at")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentlikenotificationbthreadbcodethread-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentLikeNotification.",(0,i.kt)("b",null,"thread"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/thread"},(0,i.kt)("inlineCode",{parentName:"a"},"Thread"))," ",(0,i.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The thread that the relevant comment belongs to")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentlikenotificationbcommentbcodethreadcomment-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentLikeNotification.",(0,i.kt)("b",null,"comment"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/thread-comment"},(0,i.kt)("inlineCode",{parentName:"a"},"ThreadComment"))," ",(0,i.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The thread comment that was liked")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentlikenotificationbuserbcodeuser-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentLikeNotification.",(0,i.kt)("b",null,"user"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,i.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,i.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The user who liked the activity")),(0,i.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/schema/unions/notification-union"},(0,i.kt)("inlineCode",{parentName:"a"},"NotificationUnion"))," ",(0,i.kt)(h,{class:"secondary",text:"union",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);