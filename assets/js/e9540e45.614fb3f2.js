"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[1219],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=m(a),c=r,h=s["".concat(o,".").concat(c)]||s[c]||k[c]||l;return a?n.createElement(h,p(p({ref:t},d),{},{components:a})):n.createElement(h,p({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[s]="string"==typeof e?e:r,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4462:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(7462),r=(a(7294),a(4137));const l={title:"relation",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},p=void 0,i={unversionedId:"graphql/relation",id:"graphql/relation",title:"relation",description:"Library supporting relatedTypeSection for displaying relations between GraphQL schema entities.",source:"@site/api/graphql/relation.md",sourceDirName:"graphql",slug:"/graphql/relation",permalink:"/api/graphql/relation",draft:!1,tags:[],version:"current",frontMatter:{title:"relation",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},o={},m=[{value:"See",id:"see",level:2},{value:"getRelationOfField",id:"getrelationoffield",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Source",id:"source",level:3},{value:"See",id:"see-1",level:3},{value:"getRelationOfImplementation",id:"getrelationofimplementation",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Source",id:"source-1",level:3},{value:"See",id:"see-2",level:3},{value:"getRelationOfInterface",id:"getrelationofinterface",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Returns",id:"returns-2",level:3},{value:"Source",id:"source-2",level:3},{value:"See",id:"see-3",level:3},{value:"getRelationOfReturn",id:"getrelationofreturn",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Returns",id:"returns-3",level:3},{value:"Source",id:"source-3",level:3},{value:"See",id:"see-4",level:3},{value:"getRelationOfUnion",id:"getrelationofunion",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"Returns",id:"returns-4",level:3},{value:"Source",id:"source-4",level:3},{value:"See",id:"see-5",level:3}],d={toc:m};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Library supporting ",(0,r.kt)("inlineCode",{parentName:"p"},"relatedTypeSection")," for displaying relations between GraphQL schema entities."),(0,r.kt)("h2",{id:"see"},"See"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://graphql-markdown.github.io/docs/settings#printtypeoptions"},"Option ",(0,r.kt)("inlineCode",{parentName:"a"},"relatedTypeSection"))),(0,r.kt)("h2",{id:"getrelationoffield"},"getRelationOfField"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getRelationOfField(type, schemaMap): Partial< Record< SchemaEntity, RelationOfField[] > >\n")),(0,r.kt)("p",null,"Returns a map of fields and arguments where the GraphQL schema type matches the type."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the GraphQL schema type being processed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"schemaMap")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Maybe"),"\\< ",(0,r.kt)("inlineCode",{parentName:"td"},"SchemaMap")," ",">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"a GraphQL schema map (see ",(0,r.kt)("a",{parentName:"td",href:"/api/graphql/introspection#getschemamap"},"introspection!getSchemaMap"),").")))),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Partial"),"\\< ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"\\< ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaEntity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RelationOfField"),"[] ",">"," ",">"),(0,r.kt)("p",null,"a record map of fields and arguments relations."),(0,r.kt)("h3",{id:"source"},"Source"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/61a214b/packages/types/src/graphql.d.ts#L73"},"packages/types/src/graphql.d.ts:73")),(0,r.kt)("h3",{id:"see-1"},"See"),(0,r.kt)("p",null,"mapRelationOf"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"getrelationofimplementation"},"getRelationOfImplementation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getRelationOfImplementation(type, schemaMap): Partial< Record< SchemaEntity, RelationOfImplementation[] > >\n")),(0,r.kt)("p",null,"Returns a map of types (unions or interfaces) where the GraphQL schema type is implemented."),(0,r.kt)("h3",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the GraphQL schema type being processed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"schemaMap")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Maybe"),"\\< ",(0,r.kt)("inlineCode",{parentName:"td"},"SchemaMap")," ",">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"a GraphQL schema map (see ",(0,r.kt)("a",{parentName:"td",href:"/api/graphql/introspection#getschemamap"},"introspection!getSchemaMap"),").")))),(0,r.kt)("h3",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Partial"),"\\< ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"\\< ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaEntity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RelationOfImplementation"),"[] ",">"," ",">"),(0,r.kt)("p",null,"a record map of unions or interfaces relations."),(0,r.kt)("h3",{id:"source-1"},"Source"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/61a214b/packages/types/src/graphql.d.ts#L73"},"packages/types/src/graphql.d.ts:73")),(0,r.kt)("h3",{id:"see-2"},"See"),(0,r.kt)("p",null,"mapRelationOf"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"getrelationofinterface"},"getRelationOfInterface"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getRelationOfInterface(type, schemaMap): Partial< Record< SchemaEntity, RelationOfInterface[] > >\n")),(0,r.kt)("p",null,"Returns a map of interfaces where the GraphQL schema type is extended."),(0,r.kt)("h3",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the GraphQL schema type being processed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"schemaMap")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Maybe"),"\\< ",(0,r.kt)("inlineCode",{parentName:"td"},"SchemaMap")," ",">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"a GraphQL schema map (see ",(0,r.kt)("a",{parentName:"td",href:"/api/graphql/introspection#getschemamap"},"introspection!getSchemaMap"),").")))),(0,r.kt)("h3",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Partial"),"\\< ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"\\< ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaEntity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RelationOfInterface"),"[] ",">"," ",">"),(0,r.kt)("p",null,"a record map of interfaces relations."),(0,r.kt)("h3",{id:"source-2"},"Source"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/61a214b/packages/types/src/graphql.d.ts#L73"},"packages/types/src/graphql.d.ts:73")),(0,r.kt)("h3",{id:"see-3"},"See"),(0,r.kt)("p",null,"mapRelationOf"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"getrelationofreturn"},"getRelationOfReturn"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getRelationOfReturn(type, schemaMap): Partial< Record< SchemaEntity, GraphQLOperationType[] > >\n")),(0,r.kt)("p",null,"Returns a map of operations (queries, mutations, subscriptions) where the GraphQL schema type is the return type."),(0,r.kt)("h3",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the GraphQL schema type being processed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"schemaMap")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Maybe"),"\\< ",(0,r.kt)("inlineCode",{parentName:"td"},"SchemaMap")," ",">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"a GraphQL schema map (see ",(0,r.kt)("a",{parentName:"td",href:"/api/graphql/introspection#getschemamap"},"introspection!getSchemaMap"),").")))),(0,r.kt)("h3",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Partial"),"\\< ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"\\< ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaEntity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLOperationType"),"[] ",">"," ",">"),(0,r.kt)("p",null,"a record map of operations relations."),(0,r.kt)("h3",{id:"source-3"},"Source"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/61a214b/packages/types/src/graphql.d.ts#L73"},"packages/types/src/graphql.d.ts:73")),(0,r.kt)("h3",{id:"see-4"},"See"),(0,r.kt)("p",null,"mapRelationOf"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"getrelationofunion"},"getRelationOfUnion"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getRelationOfUnion(type, schemaMap): Partial< Record< SchemaEntity, GraphQLUnionType[] > >\n")),(0,r.kt)("p",null,"Returns a map of unions where the GraphQL schema type is part of it."),(0,r.kt)("h3",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the GraphQL schema type being processed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"schemaMap")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Maybe"),"\\< ",(0,r.kt)("inlineCode",{parentName:"td"},"SchemaMap")," ",">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"a GraphQL schema map (see ",(0,r.kt)("a",{parentName:"td",href:"/api/graphql/introspection#getschemamap"},"introspection!getSchemaMap"),").")))),(0,r.kt)("h3",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Partial"),"\\< ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"\\< ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaEntity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLUnionType"),"[] ",">"," ",">"),(0,r.kt)("p",null,"a record map of unions relations."),(0,r.kt)("h3",{id:"source-4"},"Source"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/61a214b/packages/types/src/graphql.d.ts#L73"},"packages/types/src/graphql.d.ts:73")),(0,r.kt)("h3",{id:"see-5"},"See"),(0,r.kt)("p",null,"mapRelationOf"))}s.isMDXComponent=!0}}]);