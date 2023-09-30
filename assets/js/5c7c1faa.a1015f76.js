"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[952],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),k=a,d=c["".concat(i,".").concat(k)]||c[k]||m[k]||l;return n?r.createElement(d,p(p({ref:t},u),{},{components:n})):r.createElement(d,p({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:a,p[1]=o;for(var s=2;s<l;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(4137));const l={title:"utils/interpolate",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},p=void 0,o={unversionedId:"helpers/utils/interpolate",id:"helpers/utils/interpolate",title:"utils/interpolate",description:"Helpers utility functions library.",source:"@site/api/helpers/utils/interpolate.md",sourceDirName:"helpers/utils",slug:"/helpers/utils/interpolate",permalink:"/api/helpers/utils/interpolate",draft:!1,tags:[],version:"current",frontMatter:{title:"utils/interpolate",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},i={},s=[{value:"getObjPath()",id:"getobjpath",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"Source",id:"source",level:3},{value:"interpolate()",id:"interpolate",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"Source",id:"source-1",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Helpers utility functions library."),(0,a.kt)("h2",{id:"getobjpath"},"getObjPath()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"getObjPath(\n   path, \n   obj, \n   fallback): unknown\n")),(0,a.kt)("p",null,"Returns the value of the specified property or nested property of an object using a string path."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("strong",{parentName:"p"},"path"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Maybe"),"\\<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,a.kt)("p",null,"property path as string."),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("strong",{parentName:"p"},"obj"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown")),(0,a.kt)("p",null,"the key/value record object."),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("strong",{parentName:"p"},"fallback"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),"= ",(0,a.kt)("inlineCode",{parentName:"p"},'""')),(0,a.kt)("p",null,"optional fallback value to be returned if the path cannot be resolved."),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"the property value if the path is resolved, else returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"fallback")," value."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { getObjPath } from \'@graphql-markdown/utils/object\';\n\ngetObjPath("foo.bar", { foo: { bar: 42 } }); // Returns 42\n\ngetObjPath("foo.bak", { foo: { bar: 42 } }, "fallback"); // Returns "fallback"\n')),(0,a.kt)("h3",{id:"source"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/3ba4bcf/packages/helpers/src/utils/interpolate.ts#L31"},"utils/interpolate.ts:31")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"interpolate"},"interpolate()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interpolate(\n   template, \n   variables, \n   fallback?): string\n")),(0,a.kt)("p",null,"Interpolate a template literal-like string."),(0,a.kt)("h3",{id:"parameters-1"},"Parameters"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("strong",{parentName:"p"},"template"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"a string template literal-like."),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("strong",{parentName:"p"},"variables"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Maybe"),"\\<",(0,a.kt)("inlineCode",{parentName:"p"},"Record"),"\\<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),">"," & ",(0,a.kt)("inlineCode",{parentName:"p"},"object"),">"),(0,a.kt)("p",null,"a record map of values with variable's name as key and ",(0,a.kt)("inlineCode",{parentName:"p"},"description")," as directive's description."),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("strong",{parentName:"p"},"fallback?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"optional fallback value if a variable cannot be substituted."),(0,a.kt)("h3",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"an interpolated new string from the template."),(0,a.kt)("h3",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const values = { foo: 42, bar: { value: "test" } };\nconst template = "${foo} is not ${bar.notfound}";\n\ninterpolate(template, values, "fallback"); // Expected result: "42 is not fallback",\n')),(0,a.kt)("h3",{id:"source-1"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/3ba4bcf/packages/helpers/src/utils/interpolate.ts#L64"},"utils/interpolate.ts:64")))}c.isMDXComponent=!0}}]);