"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[1064],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),h=l(n),u=a,s=h["".concat(d,".").concat(u)]||h[u]||p[u]||o;return n?r.createElement(s,i(i({ref:t},m),{},{components:n})):r.createElement(s,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},208:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={id:"thread-comment-reply-notification",title:"ThreadCommentReplyNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,l={unversionedId:"schema/objects/thread-comment-reply-notification",id:"schema/objects/thread-comment-reply-notification",title:"ThreadCommentReplyNotification",description:"Notification for when a user replies to your forum thread comment",source:"@site/docs/schema/objects/thread-comment-reply-notification.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/thread-comment-reply-notification",permalink:"/schema/objects/thread-comment-reply-notification",draft:!1,tags:[],version:"current",frontMatter:{id:"thread-comment-reply-notification",title:"ThreadCommentReplyNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},m={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int!</code>)",id:"id-int",level:4},{value:"<code>userId</code> (<code>Int!</code>)",id:"userid-int",level:4},{value:"<code>type</code> (<code>NotificationType</code>)",id:"type-notificationtype",level:4},{value:"<code>commentId</code> (<code>Int!</code>)",id:"commentid-int",level:4},{value:"<code>context</code> (<code>String</code>)",id:"context-string",level:4},{value:"<code>createdAt</code> (<code>Int</code>)",id:"createdat-int",level:4},{value:"<code>thread</code> (<code>Thread</code>)",id:"thread-thread",level:4},{value:"<code>comment</code> (<code>ThreadComment</code>)",id:"comment-threadcomment",level:4},{value:"<code>user</code> (<code>User</code>)",id:"user-user",level:4}],h={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Notification for when a user replies to your forum thread comment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type ThreadCommentReplyNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  commentId: Int!\n  context: String\n  createdAt: Int\n  thread: Thread\n  comment: ThreadComment\n  user: User\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"id-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,o.kt)("p",null,"The id of the Notification"),(0,o.kt)("h4",{id:"userid-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"userId"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,o.kt)("p",null,"The id of the user who create the comment reply"),(0,o.kt)("h4",{id:"type-notificationtype"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"type"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,o.kt)("inlineCode",{parentName:"a"},"NotificationType")),")"),(0,o.kt)("p",null,"The type of notification"),(0,o.kt)("h4",{id:"commentid-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"commentId"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,o.kt)("p",null,"The id of the reply comment"),(0,o.kt)("h4",{id:"context-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"context"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"The notification context text"),(0,o.kt)("h4",{id:"createdat-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"createdAt"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The time the notification was created at"),(0,o.kt)("h4",{id:"thread-thread"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"thread"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/thread"},(0,o.kt)("inlineCode",{parentName:"a"},"Thread")),")"),(0,o.kt)("p",null,"The thread that the relevant comment belongs to"),(0,o.kt)("h4",{id:"comment-threadcomment"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"comment"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/thread-comment"},(0,o.kt)("inlineCode",{parentName:"a"},"ThreadComment")),")"),(0,o.kt)("p",null,"The reply thread comment"),(0,o.kt)("h4",{id:"user-user"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"user"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,o.kt)("p",null,"The user who replied to the activity"))}u.isMDXComponent=!0}}]);