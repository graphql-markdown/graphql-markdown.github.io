"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[8116],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),m=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=m(r),c=n,k=s["".concat(p,".").concat(c)]||s[c]||d[c]||l;return r?a.createElement(k,o(o({ref:t},u),{},{components:r})):a.createElement(k,o({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:n,o[1]=i;for(var m=2;m<l;m++)o[m]=r[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3994:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=r(7462),n=(r(7294),r(4137));const l={title:"array",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},o=void 0,i={unversionedId:"utils/array",id:"utils/array",title:"array",description:"Internal library of helpers for converting array \\``  list.",source:"@site/api/utils/array.md",sourceDirName:"utils",slug:"/utils/array",permalink:"/api/utils/array",draft:!1,tags:[],version:"current",frontMatter:{title:"array",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},p={},m=[{value:"convertArrayToMapObject",id:"convertarraytomapobject",level:2},{value:"Type parameters",id:"type-parameters",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Source",id:"source",level:3},{value:"Example",id:"example",level:3},{value:"toArray",id:"toarray",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Source",id:"source-1",level:3},{value:"Example",id:"example-1",level:3}],u={toc:m};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Internal library of helpers for converting array ","`","<-",">","`  list."),(0,n.kt)("h2",{id:"convertarraytomapobject"},"convertArrayToMapObject"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"convertArrayToMapObject<T>(list): Maybe< Record< string, T > >\n")),(0,n.kt)("p",null,"Returns a k/v object from an array of objects with a ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," property."),(0,n.kt)("h3",{id:"type-parameters"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"T")),(0,n.kt)("td",{parentName:"tr",align:"left"},"the type of objects the list contains.")))),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"list")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Maybe"),"\\< ",(0,n.kt)("inlineCode",{parentName:"td"},"T"),"[] ",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the list of objects of type ",(0,n.kt)("inlineCode",{parentName:"td"},"{ name: any }")," to be converted.")))),(0,n.kt)("h3",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Maybe"),"\\< ",(0,n.kt)("inlineCode",{parentName:"p"},"Record"),"\\< ",(0,n.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"T")," ",">"," ",">"),(0,n.kt)("p",null,"an array of object values with ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," as key, or ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if ",(0,n.kt)("inlineCode",{parentName:"p"},"list")," is not a valid array."),(0,n.kt)("h3",{id:"source"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/61a214b/packages/utils/src/array.ts#L74"},"array.ts:74")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { convertArrayToMapObject } from \'@graphql-markdown/utils/array\';\n\nconvertArrayToMapObject([\n    { name: true },\n    { name: "test" },\n    { name: 123 },\n    { name2: 1234 },\n  ]);\n\n// Expected result: {\n//   true: { name: true },\n//   test: { name: "test" },\n//   "123": { name: 123 },\n// }\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"toarray"},"toArray"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"toArray(recordMap): Maybe< unknown[] >\n")),(0,n.kt)("p",null,"Returns an array of values from a k/v object."),(0,n.kt)("h3",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"recordMap")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Maybe"),"\\< ",(0,n.kt)("inlineCode",{parentName:"td"},"Record"),"\\< ",(0,n.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"unknown")," ",">"," ",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the key/value record object to be converted.")))),(0,n.kt)("h3",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Maybe"),"\\< ",(0,n.kt)("inlineCode",{parentName:"p"},"unknown"),"[] ",">"),(0,n.kt)("p",null,"an array of object values, or ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if ",(0,n.kt)("inlineCode",{parentName:"p"},"recordMap")," is not a valid object."),(0,n.kt)("h3",{id:"source-1"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/61a214b/packages/utils/src/array.ts#L34"},"array.ts:34")),(0,n.kt)("h3",{id:"example-1"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { toArray } from \'@graphql-markdown/utils/array\';\n\ntoArray({\n    bool: true,\n    string: "test",\n    number: 123,\n    array: ["one", "two"],\n    child: { key: "value" },\n  });\n\n// Expected result: [true, "test", 123, ["one", "two"], { key: "value" }]\n')))}s.isMDXComponent=!0}}]);