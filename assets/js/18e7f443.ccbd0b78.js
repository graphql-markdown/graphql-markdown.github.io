"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[4573],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return y}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),y=r,v=m["".concat(u,".").concat(y)]||m[y]||p[y]||o;return n?i.createElement(v,a(a({ref:t},l),{},{components:n})):i.createElement(v,a({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6969:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],c={id:"toggle-activity-subscription",title:"ToggleActivitySubscription"},u=void 0,s={unversionedId:"schema/mutations/toggle-activity-subscription",id:"schema/mutations/toggle-activity-subscription",title:"ToggleActivitySubscription",description:"Toggle the subscription of an activity item",source:"@site/docs/schema/mutations/toggle-activity-subscription.mdx",sourceDirName:"schema/mutations",slug:"/schema/mutations/toggle-activity-subscription",permalink:"/schema/mutations/toggle-activity-subscription",draft:!1,tags:[],version:"current",frontMatter:{id:"toggle-activity-subscription",title:"ToggleActivitySubscription"},sidebar:"basic",previous:{title:"ToggleActivityPin",permalink:"/schema/mutations/toggle-activity-pin"},next:{title:"ToggleFavourite",permalink:"/schema/mutations/toggle-favourite"}},l={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>activityId</code> (<code>Int</code>)",id:"activityid-int",level:4},{value:"<code>subscribe</code> (<code>Boolean</code>)",id:"subscribe-boolean",level:4},{value:"Type",id:"type",level:3},{value:"<code>ActivityUnion</code>",id:"activityunion",level:4}],m={toc:p};function y(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Toggle the subscription of an activity item"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"ToggleActivitySubscription(\n  activityId: Int\n  subscribe: Boolean\n): ActivityUnion\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"activityid-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"activityId")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The id of the activity to un/subscribe"),(0,o.kt)("h4",{id:"subscribe-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"subscribe")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("p",null,"Whether to subscribe or unsubscribe from the activity"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"activityunion"},(0,o.kt)("a",{parentName:"h4",href:"/schema/unions/activity-union"},(0,o.kt)("inlineCode",{parentName:"a"},"ActivityUnion"))),(0,o.kt)("p",null,"Activity union type"))}y.isMDXComponent=!0}}]);