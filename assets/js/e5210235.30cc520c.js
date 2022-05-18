"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[9302],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(u,".").concat(m)]||p[m]||s[m]||o;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var d={};for(var u in t)hasOwnProperty.call(t,u)&&(d[u]=t[u]);d.originalType=e,d.mdxType="string"==typeof e?e:i,a[1]=d;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7417:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return s}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],d={id:"studio",title:"Studio",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},u=void 0,c={unversionedId:"schema/queries/studio",id:"schema/queries/studio",title:"Studio",description:"Studio query",source:"@site/docs/schema/queries/studio.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/studio",permalink:"/schema/queries/studio",draft:!1,tags:[],version:"current",frontMatter:{id:"studio",title:"Studio",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},l={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>search</code> (<code>String</code>)",id:"search-string",level:4},{value:"<code>id_not</code> (<code>Int</code>)",id:"id_not-int",level:4},{value:"<code>id_in</code> (<code>Int</code>)",id:"id_in-int",level:4},{value:"<code>id_not_in</code> (<code>Int</code>)",id:"id_not_in-int",level:4},{value:"<code>sort</code> (<code>StudioSort</code>)",id:"sort-studiosort",level:4},{value:"Type",id:"type",level:3},{value:"<code>Studio</code>",id:"studio",level:4}],p={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Studio query"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"Studio(\n  id: Int\n  search: String\n  id_not: Int\n  id_in: [Int]\n  id_not_in: [Int]\n  sort: [StudioSort]\n): Studio\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"id-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"Filter by the studio id"),(0,o.kt)("h4",{id:"search-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"search")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"Filter by search query"),(0,o.kt)("h4",{id:"id_not-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"id_not")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"Filter by the studio id"),(0,o.kt)("h4",{id:"id_in-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"id_in")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"Filter by the studio id"),(0,o.kt)("h4",{id:"id_not_in-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"id_not_in")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"Filter by the studio id"),(0,o.kt)("h4",{id:"sort-studiosort"},(0,o.kt)("inlineCode",{parentName:"h4"},"sort")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/studio-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"StudioSort")),")"),(0,o.kt)("p",null,"The order the results will be returned in"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"studio"},(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/studio"},(0,o.kt)("inlineCode",{parentName:"a"},"Studio"))),(0,o.kt)("p",null,"Animation or production company"))}m.isMDXComponent=!0}}]);