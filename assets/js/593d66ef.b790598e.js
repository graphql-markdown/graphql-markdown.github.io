"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[6932],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=l(n),u=a,f=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return n?i.createElement(f,r(r({ref:t},p),{},{components:n})):i.createElement(f,r({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=s;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,r[1]=d;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},478:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return m}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],d={id:"related-media-addition-notification",title:"RelatedMediaAdditionNotification"},c=void 0,l={unversionedId:"schema/objects/related-media-addition-notification",id:"schema/objects/related-media-addition-notification",title:"RelatedMediaAdditionNotification",description:"Notification for when new media is added to the site",source:"@site/docs/schema/objects/related-media-addition-notification.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/related-media-addition-notification",permalink:"/schema/objects/related-media-addition-notification",tags:[],version:"current",frontMatter:{id:"related-media-addition-notification",title:"RelatedMediaAdditionNotification"},sidebar:"basic",previous:{title:"Recommendation",permalink:"/schema/objects/recommendation"},next:{title:"Report",permalink:"/schema/objects/report"}},p={},m=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>type</code> (<code>NotificationType</code>)",id:"type-notificationtype",level:4},{value:"<code>mediaId</code> (<code>Int</code>)",id:"mediaid-int",level:4},{value:"<code>context</code> (<code>String</code>)",id:"context-string",level:4},{value:"<code>createdAt</code> (<code>Int</code>)",id:"createdat-int",level:4},{value:"<code>media</code> (<code>Media</code>)",id:"media-media",level:4}],s={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Notification for when new media is added to the site"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type RelatedMediaAdditionNotification {\n  id: Int!\n  type: NotificationType\n  mediaId: Int!\n  context: String\n  createdAt: Int\n  media: Media\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"id-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The id of the Notification"),(0,o.kt)("h4",{id:"type-notificationtype"},(0,o.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,o.kt)("inlineCode",{parentName:"a"},"NotificationType")),")"),(0,o.kt)("p",null,"The type of notification"),(0,o.kt)("h4",{id:"mediaid-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"mediaId")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The id of the new media"),(0,o.kt)("h4",{id:"context-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"context")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"The notification context text"),(0,o.kt)("h4",{id:"createdat-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The time the notification was created at"),(0,o.kt)("h4",{id:"media-media"},(0,o.kt)("inlineCode",{parentName:"h4"},"media")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,o.kt)("inlineCode",{parentName:"a"},"Media")),")"),(0,o.kt)("p",null,"The associated media of the airing schedule"))}u.isMDXComponent=!0}}]);