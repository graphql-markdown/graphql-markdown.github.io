"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[8116],{4137:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(a),c=n,k=s["".concat(p,".").concat(c)]||s[c]||u[c]||l;return a?r.createElement(k,i(i({ref:t},m),{},{components:a})):r.createElement(k,i({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3994:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=a(7462),n=(a(7294),a(4137));const l={title:"array",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},i=void 0,o={unversionedId:"utils/array",id:"utils/array",title:"array",description:"Internal library of helpers for converting array \\``  list.",source:"@site/api/utils/array.md",sourceDirName:"utils",slug:"/utils/array",permalink:"/api/utils/array",draft:!1,tags:[],version:"current",frontMatter:{title:"array",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},p={},d=[{value:"convertArrayToMapObject",id:"convertarraytomapobject",level:2},{value:"Type parameters",id:"type-parameters",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"Defined In",id:"defined-in",level:3},{value:"toArray",id:"toarray",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"Defined In",id:"defined-in-1",level:3}],m={toc:d};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Internal library of helpers for converting array ","`","<-",">","`  list."),(0,n.kt)("h2",{id:"convertarraytomapobject"},"convertArrayToMapObject"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"convertArrayToMapObject<T>(list): Maybe< Record< string, T > >\n")),(0,n.kt)("p",null,"Returns a k/v object from an array of objects with a ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," property."),(0,n.kt)("h3",{id:"type-parameters"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"T")),(0,n.kt)("td",{parentName:"tr",align:"left"},"the type of objects the list contains.")))),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"list")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Maybe"),"\\< ",(0,n.kt)("inlineCode",{parentName:"td"},"T"),"[] ",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the list of objects of type ",(0,n.kt)("inlineCode",{parentName:"td"},"{ name: any }")," to be converted.")))),(0,n.kt)("h3",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Maybe"),"\\< ",(0,n.kt)("inlineCode",{parentName:"p"},"Record"),"\\< ",(0,n.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"T")," ",">"," ",">"),(0,n.kt)("p",null,"an array of object values with ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," as key, or ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if ",(0,n.kt)("inlineCode",{parentName:"p"},"list")," is not a valid array."),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { convertArrayToMapObject } from \'@graphql-markdown/utils/array\';\n\nconvertArrayToMapObject([\n    { name: true },\n    { name: "test" },\n    { name: 123 },\n    { name2: 1234 },\n  ]);\n\n// Expected result: {\n//   true: { name: true },\n//   test: { name: "test" },\n//   "123": { name: 123 },\n// }\n')),(0,n.kt)("h3",{id:"defined-in"},"Defined In"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/4b6fd2a/packages/utils/src/array.ts#L74"},"array.ts:74")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"toarray"},"toArray"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"toArray(recordMap): Maybe< unknown[] >\n")),(0,n.kt)("p",null,"Returns an array of values from a k/v object."),(0,n.kt)("h3",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"recordMap")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Maybe"),"\\< ",(0,n.kt)("inlineCode",{parentName:"td"},"Record"),"\\< ",(0,n.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"unknown")," ",">"," ",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the key/value record object to be converted.")))),(0,n.kt)("h3",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Maybe"),"\\< ",(0,n.kt)("inlineCode",{parentName:"p"},"unknown"),"[] ",">"),(0,n.kt)("p",null,"an array of object values, or ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if ",(0,n.kt)("inlineCode",{parentName:"p"},"recordMap")," is not a valid object."),(0,n.kt)("h3",{id:"example-1"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { toArray } from \'@graphql-markdown/utils/array\';\n\ntoArray({\n    bool: true,\n    string: "test",\n    number: 123,\n    array: ["one", "two"],\n    child: { key: "value" },\n  });\n\n// Expected result: [true, "test", 123, ["one", "two"], { key: "value" }]\n')),(0,n.kt)("h3",{id:"defined-in-1"},"Defined In"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/4b6fd2a/packages/utils/src/array.ts#L34"},"array.ts:34")))}s.isMDXComponent=!0}}]);