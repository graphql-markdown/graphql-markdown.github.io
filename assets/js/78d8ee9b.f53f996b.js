"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6761],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4050:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=r(7294),o=r(3905);const i={id:"deprecated",title:"deprecated",hide_table_of_contents:!1},c=void 0,l={unversionedId:"common/directives/deprecated",id:"common/directives/deprecated",title:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",source:"@site/examples/group-by/common/directives/deprecated.mdx",sourceDirName:"common/directives",slug:"/common/directives/deprecated",permalink:"/group-by/common/directives/deprecated",draft:!1,tags:[],version:"current",frontMatter:{id:"deprecated",title:"deprecated",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Directives",permalink:"/group-by/category/directives"},next:{title:"doc",permalink:"/group-by/common/directives/doc"}},p={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>reason</code><Bullet /><code>String</code>",id:"reasonstring",level:4}],d=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:d,SpecifiedBy:u,Badge:m};function g(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Marks an element of a GraphQL schema as no longer supported."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'directive @deprecated(\n  reason: String = "No longer supported"\n) on \n  | FIELD_DEFINITION\n  | ARGUMENT_DEFINITION\n  | INPUT_FIELD_DEFINITION\n  | ENUM_VALUE\n')),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"reasonstring"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"reason")),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/group-by/common/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by ",(0,o.kt)("a",{parentName:"p",href:"https://commonmark.org/"},"CommonMark"),".")))}g.isMDXComponent=!0}}]);