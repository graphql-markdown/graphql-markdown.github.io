"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2386],{4137:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,y=c["".concat(i,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(y,p(p({ref:t},l),{},{components:r})):n.createElement(y,p({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:o,p[1]=s;for(var u=2;u<a;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8905:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(4137));const a={pagination_prev:null,pagination_next:null},p="Custom root types",s={unversionedId:"advanced/custom-root-types",id:"advanced/custom-root-types",title:"Custom root types",description:"For custom operation root types (queries not of type Query, or root type name used for other purpose), use the loader option rootTypes:",source:"@site/docs/advanced/custom-root-types.md",sourceDirName:"advanced",slug:"/advanced/custom-root-types",permalink:"/docs/advanced/custom-root-types",draft:!1,editUrl:"https://github.com/graphql-markdown/graphql-markdown/tree/main/docs/advanced/custom-root-types.md",tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null},sidebar:"defaultSidebar"},i={},u=[],l={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-root-types"},"Custom root types"),(0,o.kt)("p",null,"For custom operation root types (queries not of type ",(0,o.kt)("inlineCode",{parentName:"p"},"Query"),", or root type name used for other purpose), use the loader option ",(0,o.kt)("inlineCode",{parentName:"p"},"rootTypes"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type rootTypes = { query?: string, mutation?: string, subscription?: string };\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"use a custom type name to override standard type"),(0,o.kt)("li",{parentName:"ul"},"use a empty string to disable the GraphQL standard type"),(0,o.kt)("li",{parentName:"ul"},"unset root types will use the GraphQL standard type")),(0,o.kt)("p",null,"Add the option ",(0,o.kt)("inlineCode",{parentName:"p"},"rootTypes")," to the loader options under ",(0,o.kt)("inlineCode",{parentName:"p"},"@graphql-markdown/docusaurus")," configuration (see also ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/schema-loading"},"schema loading"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'plugins: [\n  [\n    "@graphql-markdown/docusaurus",\n    {\n      // ... other options\n      loaders: {\n      GraphQLFileLoader: {\n        module: "@graphql-tools/graphql-file-loader",\n        options: { \n          rootTypes: { \n            query: "Root", // use custom root type Root for queries, instead of Query\n            subscription: "" // disable Subscription type\n          },\n        }\n      }\n    },\n  ],\n],\n')))}c.isMDXComponent=!0}}]);