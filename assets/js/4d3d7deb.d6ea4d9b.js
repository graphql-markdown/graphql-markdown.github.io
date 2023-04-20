"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3644],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7878:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={id:"schema",slug:"/schema",title:"Schema Documentation",sidebar_position:1,hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,sidebar_class_name:"navbar__toggle"},i=void 0,l={unversionedId:"schema",id:"schema",title:"Schema Documentation",description:"This documentation has been automatically generated using AniList APIv2 endpoint with following plugin configuration:",source:"@site/examples/schema/anilist.md",sourceDirName:".",slug:"/schema",permalink:"/schema/schema",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"schema",slug:"/schema",title:"Schema Documentation",sidebar_position:1,hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,sidebar_class_name:"navbar__toggle"},sidebar:"schemaSidebar"},c={},s=[],p={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This documentation has been automatically generated using ",(0,a.kt)("a",{parentName:"p",href:"https://anilist.gitbook.io/anilist-apiv2-docs/"},"AniList APIv2")," endpoint with following plugin configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": "https://graphql.anilist.co/",\n  "rootPath": "./docs",\n  "linkRoot": "/schema",\n  "baseURL": ".",\n  "homepage": "data/anilist.md",\n  "loaders": {\n    "UrlLoader": {\n      "module": "@graphql-tools/url-loader",\n      "options": { "method": "POST" }\n    }\n  },\n  "printTypeOptions": {\n    "deprecated": "group"\n  },\n  "docOptions": {\n    "pagination": false,\n    "toc": false\n  }\n}\n')),(0,a.kt)("small",null,(0,a.kt)("i",null,"Generated on 4/19/2023, 7:18:54 PM.")))}u.isMDXComponent=!0}}]);