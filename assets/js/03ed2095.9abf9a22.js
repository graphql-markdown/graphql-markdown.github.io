"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[3235],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,h=u["".concat(l,".").concat(f)]||u[f]||s[f]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const r={id:"activity-reply-notification",title:"ActivityReplyNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,c={unversionedId:"schema/objects/activity-reply-notification",id:"schema/objects/activity-reply-notification",title:"ActivityReplyNotification",description:"Notification for when a user replies to the authenticated users activity",source:"@site/docs/schema/objects/activity-reply-notification.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/activity-reply-notification",permalink:"/schema/objects/activity-reply-notification",draft:!1,tags:[],version:"current",frontMatter:{id:"activity-reply-notification",title:"ActivityReplyNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},l={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int!</code>)",id:"id-int",level:4},{value:"<code>userId</code> (<code>Int!</code>)",id:"userid-int",level:4},{value:"<code>type</code> (<code>NotificationType</code>)",id:"type-notificationtype",level:4},{value:"<code>activityId</code> (<code>Int!</code>)",id:"activityid-int",level:4},{value:"<code>context</code> (<code>String</code>)",id:"context-string",level:4},{value:"<code>createdAt</code> (<code>Int</code>)",id:"createdat-int",level:4},{value:"<code>activity</code> (<code>ActivityUnion</code>)",id:"activity-activityunion",level:4},{value:"<code>user</code> (<code>User</code>)",id:"user-user",level:4}],p={toc:d};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Notification for when a user replies to the authenticated users activity"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type ActivityReplyNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  activityId: Int!\n  context: String\n  createdAt: Int\n  activity: ActivityUnion\n  user: User\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("p",null,"The id of the Notification"),(0,a.kt)("h4",{id:"userid-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"userId"))," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("p",null,"The id of the user who replied to the activity"),(0,a.kt)("h4",{id:"type-notificationtype"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"type"))," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,a.kt)("inlineCode",{parentName:"a"},"NotificationType")),")"),(0,a.kt)("p",null,"The type of notification"),(0,a.kt)("h4",{id:"activityid-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"activityId"))," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("p",null,"The id of the activity which was replied too"),(0,a.kt)("h4",{id:"context-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"context"))," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"The notification context text"),(0,a.kt)("h4",{id:"createdat-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"createdAt"))," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"The time the notification was created at"),(0,a.kt)("h4",{id:"activity-activityunion"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"activity"))," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/unions/activity-union"},(0,a.kt)("inlineCode",{parentName:"a"},"ActivityUnion")),")"),(0,a.kt)("p",null,"The liked activity"),(0,a.kt)("h4",{id:"user-user"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"user"))," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,a.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,a.kt)("p",null,"The user who replied to the activity"))}s.isMDXComponent=!0}}]);