"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),f=o,h=c["".concat(p,".").concat(f)]||c[f]||d[f]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={position:9,pagination_prev:null,pagination_next:null},i="Troubleshooting",l={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:'Duplicate "graphql" modules cannot be used at the same time',source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",draft:!1,editUrl:"https://github.com/graphql-markdown/graphql-markdown/tree/main/docs/troubleshooting.md",tags:[],version:"current",frontMatter:{position:9,pagination_prev:null,pagination_next:null},sidebar:"defaultSidebar"},p={},s=[{value:"Duplicate &quot;graphql&quot; modules cannot be used at the same time",id:"duplicate-graphql-modules-cannot-be-used-at-the-same-time",level:2},{value:"Unable to find any GraphQL type definitions",id:"unable-to-find-any-graphql-type-definitions",level:2},{value:"Unable to find any GraphQL type definitions for the following pointers",id:"unable-to-find-any-graphql-type-definitions-for-the-following-pointers",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h2",{id:"duplicate-graphql-modules-cannot-be-used-at-the-same-time"},'Duplicate "graphql" modules cannot be used at the same time'),(0,o.kt)("p",null,"Add a resolutions entry to your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"resolutions": {\n  "graphql": "15.5.2"\n}\n')),(0,o.kt)("h2",{id:"unable-to-find-any-graphql-type-definitions"},"Unable to find any GraphQL type definitions"),(0,o.kt)("p",null,"Try changing the temporary folder for the plugin by setting ",(0,o.kt)("inlineCode",{parentName:"p"},'tmpDir: "./.docusaurus"')," (see ",(0,o.kt)("a",{parentName:"p",href:"/docs/settings"},"settings")," for more details)."),(0,o.kt)("p",null,"You can also disable the schema diff feature with ",(0,o.kt)("inlineCode",{parentName:"p"},'diffMethod: "NONE"'),"."),(0,o.kt)("h2",{id:"unable-to-find-any-graphql-type-definitions-for-the-following-pointers"},"Unable to find any GraphQL type definitions for the following pointers"),(0,o.kt)("p",null,"Install and declare the missing GraphQL document loader package, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/schema-loading"},"schema loading"),"."),(0,o.kt)("p",null,"If the error persists, check that you have the correct class name in the configuration declaration."))}c.isMDXComponent=!0}}]);