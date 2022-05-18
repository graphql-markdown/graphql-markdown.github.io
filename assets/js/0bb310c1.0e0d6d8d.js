"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[8276],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6004:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"toggle-like",title:"ToggleLike",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},u=void 0,c={unversionedId:"schema/mutations/toggle-like",id:"schema/mutations/toggle-like",title:"ToggleLike",description:"Add or remove a like from a likeable type.",source:"@site/docs/schema/mutations/toggle-like.mdx",sourceDirName:"schema/mutations",slug:"/schema/mutations/toggle-like",permalink:"/schema/mutations/toggle-like",draft:!1,tags:[],version:"current",frontMatter:{id:"toggle-like",title:"ToggleLike",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},p={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>type</code> (<code>LikeableType</code>)",id:"type-likeabletype",level:4},{value:"Type",id:"type",level:3},{value:"<code>User</code>",id:"user",level:4}],d={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Add or remove a like from a likeable type.\nReturns all the users who liked the same model"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"ToggleLike(\n  id: Int\n  type: LikeableType\n): [User]\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"id-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"The id of the likeable type"),(0,a.kt)("h4",{id:"type-likeabletype"},(0,a.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/enums/likeable-type"},(0,a.kt)("inlineCode",{parentName:"a"},"LikeableType")),")"),(0,a.kt)("p",null,"The type of model to be un/liked"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"user"},(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,a.kt)("inlineCode",{parentName:"a"},"User"))),(0,a.kt)("p",null,"A user"))}m.isMDXComponent=!0}}]);