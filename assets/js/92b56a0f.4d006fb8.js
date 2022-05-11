"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[4501],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,y=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return n?i.createElement(y,a(a({ref:t},p),{},{components:n})):i.createElement(y,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},250:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],c={id:"toggle-activity-pin",title:"ToggleActivityPin"},l=void 0,u={unversionedId:"schema/mutations/toggle-activity-pin",id:"schema/mutations/toggle-activity-pin",title:"ToggleActivityPin",description:"Toggle activity to be pinned to the top of the user's activity feed",source:"@site/docs/schema/mutations/toggle-activity-pin.mdx",sourceDirName:"schema/mutations",slug:"/schema/mutations/toggle-activity-pin",permalink:"/schema/mutations/toggle-activity-pin",draft:!1,tags:[],version:"current",frontMatter:{id:"toggle-activity-pin",title:"ToggleActivityPin"},sidebar:"basic",previous:{title:"SaveThread",permalink:"/schema/mutations/save-thread"},next:{title:"ToggleActivitySubscription",permalink:"/schema/mutations/toggle-activity-subscription"}},p={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>pinned</code> (<code>Boolean</code>)",id:"pinned-boolean",level:4},{value:"Type",id:"type",level:3},{value:"<code>ActivityUnion</code>",id:"activityunion",level:4}],d={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Toggle activity to be pinned to the top of the user's activity feed"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"ToggleActivityPin(\n  id: Int\n  pinned: Boolean\n): ActivityUnion\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"id-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"Toggle activity id to be pinned"),(0,o.kt)("h4",{id:"pinned-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"pinned")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("p",null,"If the activity should be pinned or unpinned"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"activityunion"},(0,o.kt)("a",{parentName:"h4",href:"/schema/unions/activity-union"},(0,o.kt)("inlineCode",{parentName:"a"},"ActivityUnion"))),(0,o.kt)("p",null,"Activity union type"))}m.isMDXComponent=!0}}]);