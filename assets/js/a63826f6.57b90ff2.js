"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[8937],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),s=i,_=m["".concat(d,".").concat(s)]||m[s]||p[s]||r;return n?a.createElement(_,o(o({ref:t},u),{},{components:n})):a.createElement(_,o({ref:t},u))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7630:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return s},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"notification-type",title:"NotificationType",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,c={unversionedId:"schema/enums/notification-type",id:"schema/enums/notification-type",title:"NotificationType",description:"Notification type enum",source:"@site/docs/schema/enums/notification-type.mdx",sourceDirName:"schema/enums",slug:"/schema/enums/notification-type",permalink:"/schema/enums/notification-type",draft:!1,tags:[],version:"current",frontMatter:{id:"notification-type",title:"NotificationType",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},u={},p=[{value:"Values",id:"values",level:3},{value:"<code>ACTIVITY_MESSAGE</code>",id:"activity_message",level:4},{value:"<code>ACTIVITY_REPLY</code>",id:"activity_reply",level:4},{value:"<code>FOLLOWING</code>",id:"following",level:4},{value:"<code>ACTIVITY_MENTION</code>",id:"activity_mention",level:4},{value:"<code>THREAD_COMMENT_MENTION</code>",id:"thread_comment_mention",level:4},{value:"<code>THREAD_SUBSCRIBED</code>",id:"thread_subscribed",level:4},{value:"<code>THREAD_COMMENT_REPLY</code>",id:"thread_comment_reply",level:4},{value:"<code>AIRING</code>",id:"airing",level:4},{value:"<code>ACTIVITY_LIKE</code>",id:"activity_like",level:4},{value:"<code>ACTIVITY_REPLY_LIKE</code>",id:"activity_reply_like",level:4},{value:"<code>THREAD_LIKE</code>",id:"thread_like",level:4},{value:"<code>THREAD_COMMENT_LIKE</code>",id:"thread_comment_like",level:4},{value:"<code>ACTIVITY_REPLY_SUBSCRIBED</code>",id:"activity_reply_subscribed",level:4},{value:"<code>RELATED_MEDIA_ADDITION</code>",id:"related_media_addition",level:4},{value:"<code>MEDIA_DATA_CHANGE</code>",id:"media_data_change",level:4},{value:"<code>MEDIA_MERGE</code>",id:"media_merge",level:4},{value:"<code>MEDIA_DELETION</code>",id:"media_deletion",level:4}],m={toc:p};function s(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Notification type enum"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum NotificationType {\n  ACTIVITY_MESSAGE\n  ACTIVITY_REPLY\n  FOLLOWING\n  ACTIVITY_MENTION\n  THREAD_COMMENT_MENTION\n  THREAD_SUBSCRIBED\n  THREAD_COMMENT_REPLY\n  AIRING\n  ACTIVITY_LIKE\n  ACTIVITY_REPLY_LIKE\n  THREAD_LIKE\n  THREAD_COMMENT_LIKE\n  ACTIVITY_REPLY_SUBSCRIBED\n  RELATED_MEDIA_ADDITION\n  MEDIA_DATA_CHANGE\n  MEDIA_MERGE\n  MEDIA_DELETION\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"activity_message"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"ACTIVITY_MESSAGE"))),(0,r.kt)("p",null,"A user has sent you message"),(0,r.kt)("h4",{id:"activity_reply"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"ACTIVITY_REPLY"))),(0,r.kt)("p",null,"A user has replied to your activity"),(0,r.kt)("h4",{id:"following"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"FOLLOWING"))),(0,r.kt)("p",null,"A user has followed you"),(0,r.kt)("h4",{id:"activity_mention"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"ACTIVITY_MENTION"))),(0,r.kt)("p",null,"A user has mentioned you in their activity"),(0,r.kt)("h4",{id:"thread_comment_mention"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"THREAD_COMMENT_MENTION"))),(0,r.kt)("p",null,"A user has mentioned you in a forum comment"),(0,r.kt)("h4",{id:"thread_subscribed"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"THREAD_SUBSCRIBED"))),(0,r.kt)("p",null,"A user has commented in one of your subscribed forum threads"),(0,r.kt)("h4",{id:"thread_comment_reply"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"THREAD_COMMENT_REPLY"))),(0,r.kt)("p",null,"A user has replied to your forum comment"),(0,r.kt)("h4",{id:"airing"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"AIRING"))),(0,r.kt)("p",null,"An anime you are currently watching has aired"),(0,r.kt)("h4",{id:"activity_like"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"ACTIVITY_LIKE"))),(0,r.kt)("p",null,"A user has liked your activity"),(0,r.kt)("h4",{id:"activity_reply_like"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"ACTIVITY_REPLY_LIKE"))),(0,r.kt)("p",null,"A user has liked your activity reply"),(0,r.kt)("h4",{id:"thread_like"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"THREAD_LIKE"))),(0,r.kt)("p",null,"A user has liked your forum thread"),(0,r.kt)("h4",{id:"thread_comment_like"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"THREAD_COMMENT_LIKE"))),(0,r.kt)("p",null,"A user has liked your forum comment"),(0,r.kt)("h4",{id:"activity_reply_subscribed"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"ACTIVITY_REPLY_SUBSCRIBED"))),(0,r.kt)("p",null,"A user has replied to activity you have also replied to"),(0,r.kt)("h4",{id:"related_media_addition"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"RELATED_MEDIA_ADDITION"))),(0,r.kt)("p",null,"A new anime or manga has been added to the site where its related media is on the user's list"),(0,r.kt)("h4",{id:"media_data_change"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"MEDIA_DATA_CHANGE"))),(0,r.kt)("p",null,"An anime or manga has had a data change that affects how a user may track it in their lists"),(0,r.kt)("h4",{id:"media_merge"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"MEDIA_MERGE"))),(0,r.kt)("p",null,"Anime or manga entries on the user's list have been merged into a single entry"),(0,r.kt)("h4",{id:"media_deletion"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"MEDIA_DELETION"))),(0,r.kt)("p",null,"An anime or manga on the user's list has been deleted from the site"))}s.isMDXComponent=!0}}]);