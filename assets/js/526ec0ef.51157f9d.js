"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[5274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={id:"media-tag-collection",title:"MediaTagCollection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,l={unversionedId:"schema/queries/media-tag-collection",id:"schema/queries/media-tag-collection",title:"MediaTagCollection",description:"Collection of all the possible media tags",source:"@site/docs/schema/queries/media-tag-collection.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/media-tag-collection",permalink:"/schema/queries/media-tag-collection",draft:!1,tags:[],version:"current",frontMatter:{id:"media-tag-collection",title:"MediaTagCollection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},c={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>status</code> (<code>Int</code>)",id:"status-int",level:4},{value:"Type",id:"type",level:3},{value:"<code>MediaTag</code>",id:"mediatag",level:4}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Collection of all the possible media tags"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"MediaTagCollection(\n  status: Int\n): [MediaTag]\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"status-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"status"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Mod Only"),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"mediatag"},(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media-tag"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaTag"))),(0,r.kt)("p",null,"A tag that describes a theme or element of the media"))}p.isMDXComponent=!0}}]);