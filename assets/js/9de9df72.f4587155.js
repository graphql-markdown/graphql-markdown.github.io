"use strict";(self.webpackChunkgraphql_markdown_website=self.webpackChunkgraphql_markdown_website||[]).push([[4058],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={pagination_prev:null,pagination_next:null},i="Docs multi-instance",c={unversionedId:"advanced/docs-multi-instance",id:"advanced/docs-multi-instance",title:"Docs multi-instance",description:"In this use case, you have multiple sets of documentation (a.k.a. Docs Multi-instance), then you need to add a reference to sidebar-schema.js into the dedicated instance of @docusaurus/plugin-content-docs:",source:"@site/docs/advanced/docs-multi-instance.md",sourceDirName:"advanced",slug:"/advanced/docs-multi-instance",permalink:"/docs/advanced/docs-multi-instance",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null},sidebar:"defaultSidebar"},s={},u=[],l={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docs-multi-instance"},"Docs multi-instance"),(0,a.kt)("p",null,"In this use case, you have multiple sets of documentation (a.k.a. ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/docs-multi-instance"},"Docs Multi-instance"),"), then you need to add a reference to ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebar-schema.js")," into the dedicated instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"@docusaurus/plugin-content-docs"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'plugins: [\n  [\n    "@docusaurus/plugin-content-docs",\n    {\n      id: "api",\n      path: "api",\n      routeBasePath: "api",\n      sidebarPath: require.resolve("./api/sidebar-schema.js"),\n      // ... other options\n    },\n  ],\n],\n')))}p.isMDXComponent=!0}}]);