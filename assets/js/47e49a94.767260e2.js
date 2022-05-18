"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[2117],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6843:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={id:"user-format-statistic",title:"UserFormatStatistic",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,l={unversionedId:"schema/objects/user-format-statistic",id:"schema/objects/user-format-statistic",title:"UserFormatStatistic",description:"No description",source:"@site/docs/schema/objects/user-format-statistic.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/user-format-statistic",permalink:"/schema/objects/user-format-statistic",draft:!1,tags:[],version:"current",frontMatter:{id:"user-format-statistic",title:"UserFormatStatistic",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},d={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>count</code> (<code>Int</code>)",id:"count-int",level:4},{value:"<code>meanScore</code> (<code>Float</code>)",id:"meanscore-float",level:4},{value:"<code>minutesWatched</code> (<code>Int</code>)",id:"minuteswatched-int",level:4},{value:"<code>chaptersRead</code> (<code>Int</code>)",id:"chaptersread-int",level:4},{value:"<code>mediaIds</code> (<code>Int</code>)",id:"mediaids-int",level:4},{value:"<code>format</code> (<code>MediaFormat</code>)",id:"format-mediaformat",level:4}],m={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserFormatStatistic {\n  count: Int!\n  meanScore: Float!\n  minutesWatched: Int!\n  chaptersRead: Int!\n  mediaIds: [Int]!\n  format: MediaFormat\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"count-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"count")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("h4",{id:"meanscore-float"},(0,o.kt)("inlineCode",{parentName:"h4"},"meanScore")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,o.kt)("h4",{id:"minuteswatched-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"minutesWatched")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("h4",{id:"chaptersread-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"chaptersRead")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("h4",{id:"mediaids-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"mediaIds")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("h4",{id:"format-mediaformat"},(0,o.kt)("inlineCode",{parentName:"h4"},"format")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/media-format"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaFormat")),")"))}p.isMDXComponent=!0}}]);