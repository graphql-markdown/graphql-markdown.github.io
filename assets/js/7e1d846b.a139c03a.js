"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[9576],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>y});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(i),y=a,f=u["".concat(l,".").concat(y)]||u[y]||s[y]||r;return i?n.createElement(f,o(o({ref:t},p),{},{components:i})):n.createElement(f,o({ref:t},p))}));function y(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<r;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},8187:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=i(7462),a=(i(7294),i(3905));const r={id:"activity-reply-like-notification",title:"ActivityReplyLikeNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,c={unversionedId:"schema/objects/activity-reply-like-notification",id:"schema/objects/activity-reply-like-notification",title:"ActivityReplyLikeNotification",description:"Notification for when a activity reply is liked",source:"@site/docs/schema/objects/activity-reply-like-notification.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/activity-reply-like-notification",permalink:"/schema/objects/activity-reply-like-notification",draft:!1,tags:[],version:"current",frontMatter:{id:"activity-reply-like-notification",title:"ActivityReplyLikeNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},l={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int!</code>)",id:"id-int",level:4},{value:"<code>userId</code> (<code>Int!</code>)",id:"userid-int",level:4},{value:"<code>type</code> (<code>NotificationType</code>)",id:"type-notificationtype",level:4},{value:"<code>activityId</code> (<code>Int!</code>)",id:"activityid-int",level:4},{value:"<code>context</code> (<code>String</code>)",id:"context-string",level:4},{value:"<code>createdAt</code> (<code>Int</code>)",id:"createdat-int",level:4},{value:"<code>activity</code> (<code>ActivityUnion</code>)",id:"activity-activityunion",level:4},{value:"<code>user</code> (<code>User</code>)",id:"user-user",level:4}],p={toc:d};function s(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Notification for when a activity reply is liked"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type ActivityReplyLikeNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  activityId: Int!\n  context: String\n  createdAt: Int\n  activity: ActivityUnion\n  user: User\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("p",null,"The id of the Notification"),(0,a.kt)("h4",{id:"userid-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"userId"))," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("p",null,"The id of the user who liked to the activity reply"),(0,a.kt)("h4",{id:"type-notificationtype"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"type"))," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,a.kt)("inlineCode",{parentName:"a"},"NotificationType")),")"),(0,a.kt)("p",null,"The type of notification"),(0,a.kt)("h4",{id:"activityid-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"activityId"))," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("p",null,"The id of the activity where the reply which was liked"),(0,a.kt)("h4",{id:"context-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"context"))," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"The notification context text"),(0,a.kt)("h4",{id:"createdat-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"createdAt"))," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"The time the notification was created at"),(0,a.kt)("h4",{id:"activity-activityunion"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"activity"))," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/unions/activity-union"},(0,a.kt)("inlineCode",{parentName:"a"},"ActivityUnion")),")"),(0,a.kt)("p",null,"The liked activity"),(0,a.kt)("h4",{id:"user-user"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"user"))," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,a.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,a.kt)("p",null,"The user who liked the activity reply"))}s.isMDXComponent=!0}}]);