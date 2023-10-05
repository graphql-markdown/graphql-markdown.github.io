"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6752],{4137:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,v=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(v,l(l({ref:t},s),{},{components:r})):n.createElement(v,l({ref:t},s))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9720:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(4137));const i={title:"tag",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},l=void 0,o={unversionedId:"helpers/directives/tag",id:"helpers/directives/tag",title:"tag",description:"Custom directive tag helper.",source:"@site/api/helpers/directives/tag.md",sourceDirName:"helpers/directives",slug:"/helpers/directives/tag",permalink:"/api/helpers/directives/tag",draft:!1,tags:[],version:"current",frontMatter:{title:"tag",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},p={},c=[{value:"See",id:"see",level:2},{value:"directiveTag()",id:"directivetag",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"Source",id:"source",level:3}],s={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Custom directive ",(0,a.kt)("inlineCode",{parentName:"p"},"tag")," helper."),(0,a.kt)("h2",{id:"see"},"See"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://graphql-markdown.github.io/docs/advanced/custom-directive#tag"},"Option ",(0,a.kt)("inlineCode",{parentName:"a"},"customDirective.[directive].tag"))),(0,a.kt)("h2",{id:"directivetag"},"directiveTag()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"directiveTag(\n   directive, \n   type?, \n   classname?): Badge\n")),(0,a.kt)("p",null,"Helper for rendering custom description from schema directive on type.\nThis is an example on how to build a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"tag")," callback."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("strong",{parentName:"p"},"directive"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"GraphQLDirective")),(0,a.kt)("p",null,"the schema directive to parse."),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("strong",{parentName:"p"},"type?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown")),(0,a.kt)("p",null,"the type being processed."),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("strong",{parentName:"p"},"classname?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"= ",(0,a.kt)("inlineCode",{parentName:"p"},'"badge--secondary"')),(0,a.kt)("p",null,"optional CSS classname, ",(0,a.kt)("inlineCode",{parentName:"p"},'"badge--secondary"')," by default."),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"a custom description based on directive value."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { GraphQLDirective, GraphQLScalarType } from "graphql";\nimport { directiveTag } from "@graphql-markdown/helpers/directives/tag";\n\nconst directive = new GraphQLDirective({\n  name: "auth",\n  description: "Authentication required",\n  locations: [],\n});\n\nconst type = new GraphQLScalarType<string>({\n  name: "FooBar",\n  astNode: {\n    kind: Kind.SCALAR_TYPE_DEFINITION,\n    name: { kind: Kind.NAME, value: "FooBar" },\n    directives: [\n      {\n        kind: Kind.DIRECTIVE,\n        name: { kind: Kind.NAME, value: "auth" },\n      },\n    ],\n  },\n});\n\ndirectiveTag(directive, type);\n// Expected result: { text: "@auth", classname: "badge--secondary" }\n')),(0,a.kt)("h3",{id:"source"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/fdeba50/packages/helpers/src/directives/tag.ts#L51"},"directives/tag.ts:51")))}d.isMDXComponent=!0}}]);