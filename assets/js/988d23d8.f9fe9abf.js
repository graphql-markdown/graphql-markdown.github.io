"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[5023],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=m(n),g=r,s=u["".concat(l,".").concat(g)]||u[g]||d[g]||p;return n?a.createElement(s,i(i({ref:t},c),{},{components:n})):a.createElement(s,i({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<p;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>m});var a=n(7462),r=(n(7294),n(4137));const p={title:"group",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},i=void 0,o={unversionedId:"graphql/group",id:"graphql/group",title:"group",description:"Library supporting groupByDirective for grouping GraphQL schema entities.",source:"@site/api/graphql/group.md",sourceDirName:"graphql",slug:"/graphql/group",permalink:"/api/graphql/group",draft:!1,tags:[],version:"current",frontMatter:{title:"group",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},l={},m=[{value:"See",id:"see",level:2},{value:"getGroupName",id:"getgroupname",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"Defined In",id:"defined-in",level:3},{value:"getGroups",id:"getgroups",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"Defined In",id:"defined-in-1",level:3}],c={toc:m};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Library supporting ",(0,r.kt)("inlineCode",{parentName:"p"},"groupByDirective")," for grouping GraphQL schema entities."),(0,r.kt)("h2",{id:"see"},"See"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://graphql-markdown.github.io/docs/advanced/group-by-directive"},"Option ",(0,r.kt)("inlineCode",{parentName:"a"},"groupByDirective"))),(0,r.kt)("h2",{id:"getgroupname"},"getGroupName"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getGroupName(type, groupByDirective): Maybe< string >\n")),(0,r.kt)("p",null,"Gets the group name for a schema type based on the directive information."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown")),(0,r.kt)("td",{parentName:"tr",align:"left"},"a GraphQL schema named type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"groupByDirective")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Maybe"),"\\< ",(0,r.kt)("inlineCode",{parentName:"td"},"GroupByDirectiveOptions")," ",">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the ",(0,r.kt)("inlineCode",{parentName:"td"},"groupByDirective")," option.")))),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Maybe"),"\\< ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ",">"),(0,r.kt)("p",null,"the group name matching the type, or ",(0,r.kt)("inlineCode",{parentName:"p"},"groupByDirective.fallback")," if no match found."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { buildSchema } from "graphql";\nimport { getGroupName } from "@graphql-markdown/utils/groups";\n\nconst schema = buildSchema(`\n  directive @doc(\n    category: String\n  ) on OBJECT | INPUT_OBJECT | UNION | ENUM | INTERFACE | FIELD_DEFINITION | ARGUMENT_DEFINITION\n  type Unicorn {\n    name: String!\n  }\n  type Bird @doc(category: "animal") {\n    name: String!\n  }\n  type Fish {\n    name: String!\n  }\n  type Elf @doc(category: "fantasy") {\n    name: String!\n  }\n  type Query {\n    Fish: [Fish!]! @doc(category: "animal")\n  }\n`);\n\nconst groupOptions = {\n  fallback: "common",\n  directive: "doc",\n  field: "category",\n}\n\ngetGroupName(schema.getType("Bird"), groupOptions); // Expected result: "animal"\n\ngetGroupName(schema.getType("Unicorn"), groupOptions); // Expected result: "common"\n\n')),(0,r.kt)("h3",{id:"defined-in"},"Defined In"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/4b6fd2a/packages/graphql/src/group.ts#L158"},"packages/graphql/src/group.ts:158")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"getgroups"},"getGroups"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getGroups(schemaMap, groupByDirective): Maybe< SchemaEntitiesGroupMap >\n")),(0,r.kt)("p",null,"Parses a GraphQL schema to build a map of entities with matching ",(0,r.kt)("inlineCode",{parentName:"p"},"groupByDirective")," option."),(0,r.kt)("h3",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"schemaMap")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SchemaMap")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the GraphQL schema map returned by ",(0,r.kt)("a",{parentName:"td",href:"/api/graphql/introspection#getschemamap"},"getSchemaMap"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"groupByDirective")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Maybe"),"\\< ",(0,r.kt)("inlineCode",{parentName:"td"},"GroupByDirectiveOptions")," ",">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the ",(0,r.kt)("inlineCode",{parentName:"td"},"groupByDirective")," option.")))),(0,r.kt)("h3",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Maybe"),"\\< ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaEntitiesGroupMap")," ",">"),(0,r.kt)("p",null,"a map of entities with matching group name."),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { buildSchema } from "graphql";\nimport { getGroups } from "@graphql-markdown/utils/groups";\n\nconst schema = buildSchema(`\n  directive @doc(\n    category: String\n  ) on OBJECT | INPUT_OBJECT | UNION | ENUM | INTERFACE | FIELD_DEFINITION | ARGUMENT_DEFINITION\n  type Unicorn {\n    name: String!\n  }\n  type Bird @doc(category: "animal") {\n    name: String!\n  }\n  type Fish {\n    name: String!\n  }\n  type Elf @doc(category: "fantasy") {\n    name: String!\n  }\n  type Query {\n    Fish: [Fish!]! @doc(category: "animal")\n  }\n`);\n\nconst schemaMap = {\n  objects: schema.getTypeMap(),\n  queries: schema.getQueryType()?.getFields(),\n};\n\nconst groupOptions = {\n  fallback: "common",\n  directive: "doc",\n  field: "category",\n}\n\nconst groupsMap = getGroups(schemaMap, groupOptions);\n\n// Expected result: {\n//   "objects": {\n//     "Bird": "animal",\n//     "Boolean": "common",\n//     "Elf": "fantasy",\n//     "Fish": "common",\n//     "Query": "common",\n//     "String": "common",\n//     "Unicorn": "common",\n//   },\n//   "queries": {\n//     "Fish": "animal",\n//   },\n// }\n')),(0,r.kt)("h3",{id:"defined-in-1"},"Defined In"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/4b6fd2a/packages/graphql/src/group.ts#L84"},"packages/graphql/src/group.ts:84")))}u.isMDXComponent=!0}}]);