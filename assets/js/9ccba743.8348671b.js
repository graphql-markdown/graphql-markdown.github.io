"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[5533],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||c;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1738:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),c=(n(7294),n(3905)),i=["components"],o={id:"user-score-statistic",title:"UserScoreStatistic"},s=void 0,l={unversionedId:"schema/objects/user-score-statistic",id:"schema/objects/user-score-statistic",title:"UserScoreStatistic",description:"No description",source:"@site/docs/schema/objects/user-score-statistic.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/user-score-statistic",permalink:"/schema/objects/user-score-statistic",draft:!1,tags:[],version:"current",frontMatter:{id:"user-score-statistic",title:"UserScoreStatistic"},sidebar:"basic",previous:{title:"UserReleaseYearStatistic",permalink:"/schema/objects/user-release-year-statistic"},next:{title:"UserStaffStatistic",permalink:"/schema/objects/user-staff-statistic"}},d={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>count</code> (<code>Int</code>)",id:"count-int",level:4},{value:"<code>meanScore</code> (<code>Float</code>)",id:"meanscore-float",level:4},{value:"<code>minutesWatched</code> (<code>Int</code>)",id:"minuteswatched-int",level:4},{value:"<code>chaptersRead</code> (<code>Int</code>)",id:"chaptersread-int",level:4},{value:"<code>mediaIds</code> (<code>Int</code>)",id:"mediaids-int",level:4},{value:"<code>score</code> (<code>Int</code>)",id:"score-int",level:4}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserScoreStatistic {\n  count: Int!\n  meanScore: Float!\n  minutesWatched: Int!\n  chaptersRead: Int!\n  mediaIds: [Int]!\n  score: Int\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"count-int"},(0,c.kt)("inlineCode",{parentName:"h4"},"count")," (",(0,c.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,c.kt)("h4",{id:"meanscore-float"},(0,c.kt)("inlineCode",{parentName:"h4"},"meanScore")," (",(0,c.kt)("a",{parentName:"h4",href:"/schema/scalars/float"},(0,c.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,c.kt)("h4",{id:"minuteswatched-int"},(0,c.kt)("inlineCode",{parentName:"h4"},"minutesWatched")," (",(0,c.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,c.kt)("h4",{id:"chaptersread-int"},(0,c.kt)("inlineCode",{parentName:"h4"},"chaptersRead")," (",(0,c.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,c.kt)("h4",{id:"mediaids-int"},(0,c.kt)("inlineCode",{parentName:"h4"},"mediaIds")," (",(0,c.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,c.kt)("h4",{id:"score-int"},(0,c.kt)("inlineCode",{parentName:"h4"},"score")," (",(0,c.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"Int")),")"))}m.isMDXComponent=!0}}]);