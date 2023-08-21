"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3828],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),o=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=o(n),u=a,g=s["".concat(d,".").concat(u)]||s[u]||m[u]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[s]="string"==typeof e?e:a,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var r=n(7462),a=(n(7294),n(4137));const i={title:"directives/tag",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},l=void 0,p={unversionedId:"helpers/directives_tag",id:"helpers/directives_tag",title:"directives/tag",description:"Custom directive tag helper.",source:"@site/api/helpers/directives_tag.md",sourceDirName:"helpers",slug:"/helpers/directives_tag",permalink:"/api/helpers/directives_tag",draft:!1,tags:[],version:"current",frontMatter:{title:"directives/tag",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},d={},o=[{value:"See",id:"see",level:2},{value:"directiveTag",id:"directivetag",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"Defined In",id:"defined-in",level:3}],c={toc:o};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Custom directive ",(0,a.kt)("inlineCode",{parentName:"p"},"tag")," helper."),(0,a.kt)("h2",{id:"see"},"See"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://graphql-markdown.github.io/docs/advanced/custom-directive#tag"},"Option ",(0,a.kt)("inlineCode",{parentName:"a"},"customDirective.[directive].tag"))),(0,a.kt)("h2",{id:"directivetag"},"directiveTag"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'directiveTag(\n  directive,\n  type?,\n  classname? = "badge--secondary"): Badge\n')),(0,a.kt)("p",null,"Helper for rendering custom description from schema directive on type.\nThis is an example on how to build a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"tag")," callback."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"directive")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"GraphQLDirective")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:"left"},"the schema directive to parse.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"type"),"?"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"unknown")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:"left"},"the type being processed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"classname"),"?"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'"badge--secondary"')),(0,a.kt)("td",{parentName:"tr",align:"left"},"optional CSS classname, ",(0,a.kt)("inlineCode",{parentName:"td"},'"badge--secondary"')," by default.")))),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Badge")),(0,a.kt)("p",null,"a custom description based on directive value."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { GraphQLDirective, GraphQLScalarType } from "graphql";\nimport { directiveTag } from "@graphql-markdown/helpers/directives/tag";\n\nconst directive = new GraphQLDirective({\n  name: "auth",\n  description: "Authentication required",\n  locations: [],\n});\n\nconst type = new GraphQLScalarType<string>({\n  name: "FooBar",\n  astNode: {\n    kind: Kind.SCALAR_TYPE_DEFINITION,\n    name: { kind: Kind.NAME, value: "FooBar" },\n    directives: [\n      {\n        kind: Kind.DIRECTIVE,\n        name: { kind: Kind.NAME, value: "auth" },\n      },\n    ],\n  },\n});\n\ndirectiveTag(directive, type);\n// Expected result: { text: "@auth", classname: "badge--secondary" }\n')),(0,a.kt)("h3",{id:"defined-in"},"Defined In"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/d91cddc/packages/helpers/src/directives/tag.ts#L51"},"directives/tag.ts:51")))}s.isMDXComponent=!0}}]);