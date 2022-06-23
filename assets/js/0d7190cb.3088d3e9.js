"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[201],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),h=l(n),p=r,u=h["".concat(d,".").concat(p)]||h[p]||s[p]||o;return n?a.createElement(u,i(i({ref:t},m),{},{components:n})):a.createElement(u,i({ref:t},m))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={id:"thread-comment-subscribed-notification",title:"ThreadCommentSubscribedNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,c={unversionedId:"schema/objects/thread-comment-subscribed-notification",id:"schema/objects/thread-comment-subscribed-notification",title:"ThreadCommentSubscribedNotification",description:"Notification for when a user replies to a subscribed forum thread",source:"@site/docs/schema/objects/thread-comment-subscribed-notification.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/thread-comment-subscribed-notification",permalink:"/schema/objects/thread-comment-subscribed-notification",draft:!1,tags:[],version:"current",frontMatter:{id:"thread-comment-subscribed-notification",title:"ThreadCommentSubscribedNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},d={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int!</code>)",id:"id-int",level:4},{value:"<code>userId</code> (<code>Int!</code>)",id:"userid-int",level:4},{value:"<code>type</code> (<code>NotificationType</code>)",id:"type-notificationtype",level:4},{value:"<code>commentId</code> (<code>Int!</code>)",id:"commentid-int",level:4},{value:"<code>context</code> (<code>String</code>)",id:"context-string",level:4},{value:"<code>createdAt</code> (<code>Int</code>)",id:"createdat-int",level:4},{value:"<code>thread</code> (<code>Thread</code>)",id:"thread-thread",level:4},{value:"<code>comment</code> (<code>ThreadComment</code>)",id:"comment-threadcomment",level:4},{value:"<code>user</code> (<code>User</code>)",id:"user-user",level:4}],m={toc:l};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Notification for when a user replies to a subscribed forum thread"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type ThreadCommentSubscribedNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  commentId: Int!\n  context: String\n  createdAt: Int\n  thread: Thread\n  comment: ThreadComment\n  user: User\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"id-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,r.kt)("p",null,"The id of the Notification"),(0,r.kt)("h4",{id:"userid-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"userId"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,r.kt)("p",null,"The id of the user who commented on the thread"),(0,r.kt)("h4",{id:"type-notificationtype"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"type"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,r.kt)("inlineCode",{parentName:"a"},"NotificationType")),")"),(0,r.kt)("p",null,"The type of notification"),(0,r.kt)("h4",{id:"commentid-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"commentId"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,r.kt)("p",null,"The id of the new comment in the subscribed thread"),(0,r.kt)("h4",{id:"context-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"context"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"The notification context text"),(0,r.kt)("h4",{id:"createdat-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"createdAt"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The time the notification was created at"),(0,r.kt)("h4",{id:"thread-thread"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"thread"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/thread"},(0,r.kt)("inlineCode",{parentName:"a"},"Thread")),")"),(0,r.kt)("p",null,"The thread that the relevant comment belongs to"),(0,r.kt)("h4",{id:"comment-threadcomment"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"comment"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/thread-comment"},(0,r.kt)("inlineCode",{parentName:"a"},"ThreadComment")),")"),(0,r.kt)("p",null,"The reply thread comment"),(0,r.kt)("h4",{id:"user-user"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"user"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,r.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,r.kt)("p",null,"The user who replied to the subscribed thread"))}s.isMDXComponent=!0}}]);