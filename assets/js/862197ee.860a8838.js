"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[2593],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=i,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3139:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={id:"media-stats",title:"MediaStats",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},c=void 0,u={unversionedId:"schema/objects/media-stats",id:"schema/objects/media-stats",title:"MediaStats",description:"A media's statistics",source:"@site/docs/schema/objects/media-stats.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/media-stats",permalink:"/schema/objects/media-stats",draft:!1,tags:[],version:"current",frontMatter:{id:"media-stats",title:"MediaStats",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},l={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>scoreDistribution</code> (<code>ScoreDistribution</code>)",id:"scoredistribution-scoredistribution",level:4},{value:"<code>statusDistribution</code> (<code>StatusDistribution</code>)",id:"statusdistribution-statusdistribution",level:4},{value:"<code>airingProgression</code> (<code>AiringProgression</code>)",id:"airingprogression-airingprogression",level:4}],p={toc:d};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A media's statistics"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaStats {\n  scoreDistribution: [ScoreDistribution]\n  statusDistribution: [StatusDistribution]\n  airingProgression: [AiringProgression]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"scoredistribution-scoredistribution"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"scoreDistribution"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/score-distribution"},(0,o.kt)("inlineCode",{parentName:"a"},"ScoreDistribution")),")"),(0,o.kt)("h4",{id:"statusdistribution-statusdistribution"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"statusDistribution"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/status-distribution"},(0,o.kt)("inlineCode",{parentName:"a"},"StatusDistribution")),")"),(0,o.kt)("h4",{id:"airingprogression-airingprogression"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"airingProgression"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/airing-progression"},(0,o.kt)("inlineCode",{parentName:"a"},"AiringProgression")),")"))}f.isMDXComponent=!0}}]);