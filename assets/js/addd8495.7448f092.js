"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[9805],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,h=p["".concat(l,".").concat(f)]||p[f]||s[f]||o;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5939:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={id:"following-notification",title:"FollowingNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,u={unversionedId:"schema/objects/following-notification",id:"schema/objects/following-notification",title:"FollowingNotification",description:"Notification for when the authenticated user is followed by another user",source:"@site/docs/schema/objects/following-notification.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/following-notification",permalink:"/schema/objects/following-notification",draft:!1,tags:[],version:"current",frontMatter:{id:"following-notification",title:"FollowingNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},d={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int!</code>)",id:"id-int",level:4},{value:"<code>userId</code> (<code>Int!</code>)",id:"userid-int",level:4},{value:"<code>type</code> (<code>NotificationType</code>)",id:"type-notificationtype",level:4},{value:"<code>context</code> (<code>String</code>)",id:"context-string",level:4},{value:"<code>createdAt</code> (<code>Int</code>)",id:"createdat-int",level:4},{value:"<code>user</code> (<code>User</code>)",id:"user-user",level:4}],p={toc:s};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Notification for when the authenticated user is followed by another user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type FollowingNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  context: String\n  createdAt: Int\n  user: User\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"id-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,o.kt)("p",null,"The id of the Notification"),(0,o.kt)("h4",{id:"userid-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"userId"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,o.kt)("p",null,"The id of the user who followed the authenticated user"),(0,o.kt)("h4",{id:"type-notificationtype"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"type"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,o.kt)("inlineCode",{parentName:"a"},"NotificationType")),")"),(0,o.kt)("p",null,"The type of notification"),(0,o.kt)("h4",{id:"context-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"context"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"The notification context text"),(0,o.kt)("h4",{id:"createdat-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"createdAt"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The time the notification was created at"),(0,o.kt)("h4",{id:"user-user"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"user"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,o.kt)("p",null,"The liked activity"))}f.isMDXComponent=!0}}]);