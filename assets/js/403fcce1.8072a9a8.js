"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[2499],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"media-list-status",title:"MediaListStatus",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},u=void 0,c={unversionedId:"schema/enums/media-list-status",id:"schema/enums/media-list-status",title:"MediaListStatus",description:"Media list watching/reading status enum.",source:"@site/docs/schema/enums/media-list-status.mdx",sourceDirName:"schema/enums",slug:"/schema/enums/media-list-status",permalink:"/schema/enums/media-list-status",draft:!1,tags:[],version:"current",frontMatter:{id:"media-list-status",title:"MediaListStatus",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},s={},p=[{value:"Values",id:"values",level:3},{value:"<code>CURRENT</code>",id:"current",level:4},{value:"<code>PLANNING</code>",id:"planning",level:4},{value:"<code>COMPLETED</code>",id:"completed",level:4},{value:"<code>DROPPED</code>",id:"dropped",level:4},{value:"<code>PAUSED</code>",id:"paused",level:4},{value:"<code>REPEATING</code>",id:"repeating",level:4}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Media list watching/reading status enum."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum MediaListStatus {\n  CURRENT\n  PLANNING\n  COMPLETED\n  DROPPED\n  PAUSED\n  REPEATING\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"current"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"CURRENT"))),(0,i.kt)("p",null,"Currently watching/reading"),(0,i.kt)("h4",{id:"planning"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"PLANNING"))),(0,i.kt)("p",null,"Planning to watch/read"),(0,i.kt)("h4",{id:"completed"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"COMPLETED"))),(0,i.kt)("p",null,"Finished watching/reading"),(0,i.kt)("h4",{id:"dropped"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"DROPPED"))),(0,i.kt)("p",null,"Stopped watching/reading before completing"),(0,i.kt)("h4",{id:"paused"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"PAUSED"))),(0,i.kt)("p",null,"Paused watching/reading"),(0,i.kt)("h4",{id:"repeating"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"REPEATING"))),(0,i.kt)("p",null,"Re-watching/reading"))}m.isMDXComponent=!0}}]);