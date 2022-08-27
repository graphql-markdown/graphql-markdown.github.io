"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[4941],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),h=d(n),k=a,f=h["".concat(l,".").concat(k)]||h[k]||s[k]||i;return n?o.createElement(f,c(c({ref:t},m),{},{components:n})):o.createElement(f,c({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,c[1]=r;for(var d=2;d<i;d++)c[d]=n[d];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3248:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>k,Bullet:()=>s,SpecifiedBy:()=>h,assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var o=n(7462),a=n(7294),i=n(3905);const c={id:"thread-comment-like-notification",title:"ThreadCommentLikeNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},r=void 0,l={unversionedId:"schema/objects/thread-comment-like-notification",id:"schema/objects/thread-comment-like-notification",title:"ThreadCommentLikeNotification",description:"Notification for when a thread comment is liked",source:"@site/docs/schema/objects/thread-comment-like-notification.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/thread-comment-like-notification",permalink:"/schema/objects/thread-comment-like-notification",draft:!1,tags:[],version:"current",frontMatter:{id:"thread-comment-like-notification",title:"ThreadCommentLikeNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},d={},m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentLikeNotification.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentlikenotificationbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentLikeNotification.<b>userId</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentlikenotificationbuseridbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentLikeNotification.<b>type</b></code><Bullet /><code>NotificationType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-threadcommentlikenotificationbtypebcodenotificationtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentLikeNotification.<b>commentId</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentlikenotificationbcommentidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentLikeNotification.<b>context</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentlikenotificationbcontextbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentLikeNotification.<b>createdAt</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentlikenotificationbcreatedatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentLikeNotification.<b>thread</b></code><Bullet /><code>Thread</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-threadcommentlikenotificationbthreadbcodethread-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentLikeNotification.<b>comment</b></code><Bullet /><code>ThreadComment</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-threadcommentlikenotificationbcommentbcodethreadcomment-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadCommentLikeNotification.<b>user</b></code><Bullet /><code>User</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-threadcommentlikenotificationbuserbcodeuser-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],s=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),h=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:m,Bullet:s,SpecifiedBy:h,Badge:k};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Notification for when a thread comment is liked"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type ThreadCommentLikeNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  commentId: Int!\n  context: String\n  createdAt: Int\n  thread: Thread\n  comment: ThreadComment\n  user: User\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentlikenotificationbidbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentLikeNotification.",(0,i.kt)("b",null,"id"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,i.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The id of the Notification")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentlikenotificationbuseridbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentLikeNotification.",(0,i.kt)("b",null,"userId"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,i.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The id of the user who liked to the activity")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentlikenotificationbtypebcodenotificationtype-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentLikeNotification.",(0,i.kt)("b",null,"type"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,i.kt)("inlineCode",{parentName:"a"},"NotificationType"))," ",(0,i.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The type of notification")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentlikenotificationbcommentidbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentLikeNotification.",(0,i.kt)("b",null,"commentId"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,i.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The id of the activity which was liked")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentlikenotificationbcontextbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentLikeNotification.",(0,i.kt)("b",null,"context"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The notification context text")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentlikenotificationbcreatedatbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentLikeNotification.",(0,i.kt)("b",null,"createdAt"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The time the notification was created at")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentlikenotificationbthreadbcodethread-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentLikeNotification.",(0,i.kt)("b",null,"thread"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/thread"},(0,i.kt)("inlineCode",{parentName:"a"},"Thread"))," ",(0,i.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The thread that the relevant comment belongs to")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentlikenotificationbcommentbcodethreadcomment-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentLikeNotification.",(0,i.kt)("b",null,"comment"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/thread-comment"},(0,i.kt)("inlineCode",{parentName:"a"},"ThreadComment"))," ",(0,i.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The thread comment that was liked")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-threadcommentlikenotificationbuserbcodeuser-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentLikeNotification.",(0,i.kt)("b",null,"user"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,i.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,i.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The user who liked the activity")),(0,i.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/schema/unions/notification-union"},(0,i.kt)("inlineCode",{parentName:"a"},"NotificationUnion"))," ",(0,i.kt)(k,{class:"secondary",text:"union",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);