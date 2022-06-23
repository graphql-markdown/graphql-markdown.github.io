"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[6837],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4301:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={id:"user-tag-statistic",title:"UserTagStatistic",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,c={unversionedId:"schema/objects/user-tag-statistic",id:"schema/objects/user-tag-statistic",title:"UserTagStatistic",description:"No description",source:"@site/docs/schema/objects/user-tag-statistic.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/user-tag-statistic",permalink:"/schema/objects/user-tag-statistic",draft:!1,tags:[],version:"current",frontMatter:{id:"user-tag-statistic",title:"UserTagStatistic",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},s={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>count</code> (<code>Int!</code>)",id:"count-int",level:4},{value:"<code>meanScore</code> (<code>Float!</code>)",id:"meanscore-float",level:4},{value:"<code>minutesWatched</code> (<code>Int!</code>)",id:"minuteswatched-int",level:4},{value:"<code>chaptersRead</code> (<code>Int!</code>)",id:"chaptersread-int",level:4},{value:"<code>mediaIds</code> (<code>[Int]!</code>)",id:"mediaids-int",level:4},{value:"<code>tag</code> (<code>MediaTag</code>)",id:"tag-mediatag",level:4}],d={toc:l};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserTagStatistic {\n  count: Int!\n  meanScore: Float!\n  minutesWatched: Int!\n  chaptersRead: Int!\n  mediaIds: [Int]!\n  tag: MediaTag\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"count-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,r.kt)("h4",{id:"meanscore-float"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"meanScore"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float!")),")"),(0,r.kt)("h4",{id:"minuteswatched-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"minutesWatched"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,r.kt)("h4",{id:"chaptersread-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"chaptersRead"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,r.kt)("h4",{id:"mediaids-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"mediaIds"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"[Int]!")),")"),(0,r.kt)("h4",{id:"tag-mediatag"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"tag"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media-tag"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaTag")),")"))}p.isMDXComponent=!0}}]);