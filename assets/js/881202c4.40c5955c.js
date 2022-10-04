"use strict";(self.webpackChunkgraphql_markdown_website=self.webpackChunkgraphql_markdown_website||[]).push([[6727],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(g,l(l({ref:n},s),{},{components:t})):r.createElement(g,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3515:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={pagination_prev:null,pagination_next:null},l="Schema loading",i={unversionedId:"advanced/schema-loading",id:"advanced/schema-loading",title:"Schema loading",description:"By default, the schema default loading expects a local GraphQL schema definition file (*.graphql).",source:"@site/docs/advanced/schema-loading.md",sourceDirName:"advanced",slug:"/advanced/schema-loading",permalink:"/docs/advanced/schema-loading",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null},sidebar:"defaultSidebar"},p={},c=[],s={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"schema-loading"},"Schema loading"),(0,a.kt)("p",null,"By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"schema")," default loading expects a local GraphQL schema definition file (",(0,a.kt)("inlineCode",{parentName:"p"},"*.graphql"),")."),(0,a.kt)("p",null,"Additional GraphQL document loaders can be used (see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/tree/master/packages/loaders"},"full list"),")."),(0,a.kt)("p",null,"For example, if you want to load a schema from a URL, you first need to add the package ",(0,a.kt)("inlineCode",{parentName:"p"},"@graphql-tools/url-loader")," to your Docusaurus project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @graphql-tools/url-loader\n")),(0,a.kt)("p",null,"Once done, you can declare the loader into ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus2-graphql-doc-generator")," configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'plugins: [\n  [\n    "@graphql-markdown/docusaurus",\n    {\n      // ... other options\n      loaders: {\n        UrlLoader: "@graphql-tools/url-loader"\n      }\n    },\n  ],\n],\n')),(0,a.kt)("p",null,"You can declare as many loaders as you need using the structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'type className = string; // UrlLoader\n\ntype moduleName = string; // "@graphql-tools/url-loader"\ntype rootTypes = { query?: string, mutation?: string, subscription?: string};\ntype moduleOptions = { [option: string]: any, rootType?: rootTypes };\n\ntype module = { \n  module: moduleName, \n  options: moduleOptions | undefined \n}\n\ntype loaders = {\n  [className: className]: moduleName | module\n}\n')))}u.isMDXComponent=!0}}]);