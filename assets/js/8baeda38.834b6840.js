"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[5409],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),m=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=m(e.components);return a.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=m(n),p=r,s=u["".concat(d,".").concat(p)]||u[p]||h[p]||o;return n?a.createElement(s,i(i({ref:t},l),{},{components:n})):a.createElement(s,i({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7833:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return h}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],c={id:"thread-comment-mention-notification",title:"ThreadCommentMentionNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,m={unversionedId:"schema/objects/thread-comment-mention-notification",id:"schema/objects/thread-comment-mention-notification",title:"ThreadCommentMentionNotification",description:"Notification for when authenticated user is @ mentioned in a forum thread comment",source:"@site/docs/schema/objects/thread-comment-mention-notification.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/thread-comment-mention-notification",permalink:"/schema/objects/thread-comment-mention-notification",draft:!1,tags:[],version:"current",frontMatter:{id:"thread-comment-mention-notification",title:"ThreadCommentMentionNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},l={},h=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int!</code>)",id:"id-int",level:4},{value:"<code>userId</code> (<code>Int!</code>)",id:"userid-int",level:4},{value:"<code>type</code> (<code>NotificationType</code>)",id:"type-notificationtype",level:4},{value:"<code>commentId</code> (<code>Int!</code>)",id:"commentid-int",level:4},{value:"<code>context</code> (<code>String</code>)",id:"context-string",level:4},{value:"<code>createdAt</code> (<code>Int</code>)",id:"createdat-int",level:4},{value:"<code>thread</code> (<code>Thread</code>)",id:"thread-thread",level:4},{value:"<code>comment</code> (<code>ThreadComment</code>)",id:"comment-threadcomment",level:4},{value:"<code>user</code> (<code>User</code>)",id:"user-user",level:4}],u={toc:h};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Notification for when authenticated user is @ mentioned in a forum thread comment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type ThreadCommentMentionNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  commentId: Int!\n  context: String\n  createdAt: Int\n  thread: Thread\n  comment: ThreadComment\n  user: User\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"id-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,o.kt)("p",null,"The id of the Notification"),(0,o.kt)("h4",{id:"userid-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"userId"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,o.kt)("p",null,"The id of the user who mentioned the authenticated user"),(0,o.kt)("h4",{id:"type-notificationtype"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"type"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,o.kt)("inlineCode",{parentName:"a"},"NotificationType")),")"),(0,o.kt)("p",null,"The type of notification"),(0,o.kt)("h4",{id:"commentid-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"commentId"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,o.kt)("p",null,"The id of the comment where mentioned"),(0,o.kt)("h4",{id:"context-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"context"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"The notification context text"),(0,o.kt)("h4",{id:"createdat-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"createdAt"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The time the notification was created at"),(0,o.kt)("h4",{id:"thread-thread"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"thread"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/thread"},(0,o.kt)("inlineCode",{parentName:"a"},"Thread")),")"),(0,o.kt)("p",null,"The thread that the relevant comment belongs to"),(0,o.kt)("h4",{id:"comment-threadcomment"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"comment"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/thread-comment"},(0,o.kt)("inlineCode",{parentName:"a"},"ThreadComment")),")"),(0,o.kt)("p",null,"The thread comment that included the @ mention"),(0,o.kt)("h4",{id:"user-user"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"user"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,o.kt)("p",null,"The user who mentioned the authenticated user"))}p.isMDXComponent=!0}}]);