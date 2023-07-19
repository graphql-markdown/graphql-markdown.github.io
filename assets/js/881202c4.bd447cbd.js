"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6727],{4137:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>g});var r=a(7294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var c=r.createContext({}),i=function(e){var n=r.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(a),m=t,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(g,l(l({ref:n},p),{},{components:a})):r.createElement(g,l({ref:n},p))}));function g(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:t,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6910:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=a(7462),t=(a(7294),a(4137));const o={pagination_prev:null,pagination_next:null},l="Schema loading",s={unversionedId:"advanced/schema-loading",id:"advanced/schema-loading",title:"Schema loading",description:"GraphQL-Markdown use external loaders for loading GraphQL schemas (see full list).",source:"@site/docs/advanced/schema-loading.md",sourceDirName:"advanced",slug:"/advanced/schema-loading",permalink:"/docs/advanced/schema-loading",draft:!1,editUrl:"https://github.com/graphql-markdown/graphql-markdown/tree/main/docs/advanced/schema-loading.md",tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null},sidebar:"defaultSidebar"},c={},i=[{value:"Local schema (file)",id:"local-schema-file",level:2},{value:"Remote schema (url)",id:"remote-schema-url",level:2}],p={toc:i};function u(e){let{components:n,...a}=e;return(0,t.kt)("wrapper",(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"schema-loading"},"Schema loading"),(0,t.kt)("p",null,"GraphQL-Markdown use external loaders for loading GraphQL schemas (see ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/tree/master/packages/loaders"},"full list"),")."),(0,t.kt)("p",null,"You can declare as many loaders as you need using the structure:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},'type className = string; // UrlLoader\n\ntype moduleName = string; // "@graphql-tools/url-loader"\ntype rootTypes = { query?: string, mutation?: string, subscription?: string };\ntype moduleOptions = { [option: string]: any, rootType?: rootTypes };\n\ntype module = { \n  module: moduleName, \n  options: moduleOptions | undefined \n}\n\ntype loaders = {\n  [className: className]: moduleName | module\n}\n')),(0,t.kt)("h2",{id:"local-schema-file"},"Local schema (file)"),(0,t.kt)("p",null,"Use ",(0,t.kt)("inlineCode",{parentName:"p"},"@graphql-tools/graphql-file-loader")," if you want to load a local schema:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @graphql-tools/graphql-file-loader\n")),(0,t.kt)("p",null,"Once done, you can declare the loader into ",(0,t.kt)("inlineCode",{parentName:"p"},"@graphql-markdown/docusaurus")," configuration:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'plugins: [\n  [\n    "@graphql-markdown/docusaurus",\n    {\n      // ... other options\n      loaders: {\n        GraphQLFileLoader: "@graphql-tools/graphql-file-loader"\n      }\n    },\n  ],\n],\n')),(0,t.kt)("h2",{id:"remote-schema-url"},"Remote schema (url)"),(0,t.kt)("p",null,"Use ",(0,t.kt)("inlineCode",{parentName:"p"},"@graphql-tools/url-loader"),", if you want to load a schema from a URL:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @graphql-tools/url-loader\n")),(0,t.kt)("p",null,"Once done, you can declare the loader into ",(0,t.kt)("inlineCode",{parentName:"p"},"docusaurus2-graphql-doc-generator")," configuration:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'plugins: [\n  [\n    "@graphql-markdown/docusaurus",\n    {\n      // ... other options\n      loaders: {\n        UrlLoader: "@graphql-tools/url-loader"\n      }\n    },\n  ],\n],\n')))}u.isMDXComponent=!0}}]);