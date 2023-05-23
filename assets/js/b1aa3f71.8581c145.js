"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={id:"schema",slug:"/",title:"Schema Documentation",sidebar_position:1,hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,sidebar_class_name:"navbar__toggle"},a=void 0,c={unversionedId:"schema",id:"schema",title:"Schema Documentation",description:"This is an example of documentation grouping with GraphQL directive using the groupByDirective option (see documentation):",source:"@site/examples/group-by/groups.md",sourceDirName:".",slug:"/",permalink:"/examples/group-by/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"schema",slug:"/",title:"Schema Documentation",sidebar_position:1,hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,sidebar_class_name:"navbar__toggle"},sidebar:"schemaSidebar"},p={},l=[],s={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is an example of documentation grouping with GraphQL directive using the ",(0,i.kt)("inlineCode",{parentName:"p"},"groupByDirective")," option (see ",(0,i.kt)("a",{parentName:"p",href:"/docs/advanced/group-by-directive"},"documentation"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  schema: "data/schema_with_grouping.graphql",\n  baseURL: ".",\n  linkRoot: "/examples/group-by",\n  homepage: "data/groups.md",\n  groupByDirective: {\n    directive: "doc",\n    field: "category",\n    fallback: "Common"\n  },\n  docOptions: {\n    index: true\n  },\n  printTypeOptions: {\n    parentTypePrefix: false,\n    relatedTypeSection: false,\n    typeBadges: true,\n    deprecated: "group"\n  },\n  skipDocDirective: ["@noDoc"],\n  customDirective: {\n    auth: {\n      descriptor: (directive, type) =>\n        directiveDescriptor(\n          directive,\n          type,\n          "This requires the current user to be in `${requires}` role.",\n        ),\n    },\n    complexity: {\n      descriptor: (directive, type) => {\n        const { value, multipliers } = getTypeDirectiveValues(directive, type);\n        const multiplierDescription = multipliers\n          ? ` per ${multipliers.map((v) => `\\`${v}\\``).join(", ")}`\n          : "";\n        return `This has an additional cost of \\`${value}\\` points${multiplierDescription}.`;\n      },\n    },\n  },\n}\n')),(0,i.kt)("small",null,(0,i.kt)("i",null,"Generated on 5/23/2023, 11:20:20 AM.")))}u.isMDXComponent=!0}}]);