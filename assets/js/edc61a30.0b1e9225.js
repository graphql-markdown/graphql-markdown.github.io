"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[7406],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1573:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={id:"mod-action",title:"ModAction"},d=void 0,s={unversionedId:"schema/objects/mod-action",id:"schema/objects/mod-action",title:"ModAction",description:"No description",source:"@site/docs/schema/objects/mod-action.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/mod-action",permalink:"/schema/objects/mod-action",tags:[],version:"current",frontMatter:{id:"mod-action",title:"ModAction"},sidebar:"basic",previous:{title:"MessageActivity",permalink:"/schema/objects/message-activity"},next:{title:"NotificationOption",permalink:"/schema/objects/notification-option"}},l={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>user</code> (<code>User</code>)",id:"user-user",level:4},{value:"<code>mod</code> (<code>User</code>)",id:"mod-user",level:4},{value:"<code>type</code> (<code>ModActionType</code>)",id:"type-modactiontype",level:4},{value:"<code>objectId</code> (<code>Int</code>)",id:"objectid-int",level:4},{value:"<code>objectType</code> (<code>String</code>)",id:"objecttype-string",level:4},{value:"<code>data</code> (<code>String</code>)",id:"data-string",level:4},{value:"<code>createdAt</code> (<code>Int</code>)",id:"createdat-int",level:4}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type ModAction {\n  id: Int!\n  user: User\n  mod: User\n  type: ModActionType\n  objectId: Int\n  objectType: String\n  data: String\n  createdAt: Int!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"The id of the action"),(0,a.kt)("h4",{id:"user-user"},(0,a.kt)("inlineCode",{parentName:"h4"},"user")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,a.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,a.kt)("h4",{id:"mod-user"},(0,a.kt)("inlineCode",{parentName:"h4"},"mod")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,a.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,a.kt)("h4",{id:"type-modactiontype"},(0,a.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/enums/mod-action-type"},(0,a.kt)("inlineCode",{parentName:"a"},"ModActionType")),")"),(0,a.kt)("h4",{id:"objectid-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"objectId")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"objecttype-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"objectType")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"data-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"data")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"createdat-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"))}m.isMDXComponent=!0}}]);