"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[1701],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),p=r,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8103:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],c={id:"tag-stats",title:"TagStats"},s=void 0,l={unversionedId:"schema/objects/tag-stats",id:"schema/objects/tag-stats",title:"TagStats",description:"User's tag statistics",source:"@site/docs/schema/objects/tag-stats.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/tag-stats",permalink:"/schema/objects/tag-stats",tags:[],version:"current",frontMatter:{id:"tag-stats",title:"TagStats"},sidebar:"basic",previous:{title:"Studio",permalink:"/schema/objects/studio"},next:{title:"TextActivity",permalink:"/schema/objects/text-activity"}},u={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>tag</code> (<code>MediaTag</code>)",id:"tag-mediatag",level:4},{value:"<code>amount</code> (<code>Int</code>)",id:"amount-int",level:4},{value:"<code>meanScore</code> (<code>Int</code>)",id:"meanscore-int",level:4},{value:"<code>timeWatched</code> (<code>Int</code>)",id:"timewatched-int",level:4}],m={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"User's tag statistics"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type TagStats {\n  tag: MediaTag\n  amount: Int\n  meanScore: Int\n  timeWatched: Int\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"tag-mediatag"},(0,o.kt)("inlineCode",{parentName:"h4"},"tag")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/media-tag"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaTag")),")"),(0,o.kt)("h4",{id:"amount-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"amount")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("h4",{id:"meanscore-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"meanScore")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("h4",{id:"timewatched-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"timeWatched")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The amount of time in minutes the tag has been watched by the user"))}p.isMDXComponent=!0}}]);