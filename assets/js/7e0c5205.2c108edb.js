"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[1591],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},736:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={id:"thread-category",title:"ThreadCategory",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},c=void 0,i={unversionedId:"schema/objects/thread-category",id:"schema/objects/thread-category",title:"ThreadCategory",description:"A forum thread category",source:"@site/docs/schema/objects/thread-category.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/thread-category",permalink:"/schema/objects/thread-category",draft:!1,tags:[],version:"current",frontMatter:{id:"thread-category",title:"ThreadCategory",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},l={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int!</code>)",id:"id-int",level:4},{value:"<code>name</code> (<code>String!</code>)",id:"name-string",level:4}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A forum thread category"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type ThreadCategory {\n  id: Int!\n  name: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("p",null,"The id of the category"),(0,a.kt)("h4",{id:"name-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,a.kt)("p",null,"The name of the category"))}d.isMDXComponent=!0}}]);