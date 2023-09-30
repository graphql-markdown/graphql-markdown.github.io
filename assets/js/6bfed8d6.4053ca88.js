"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6085],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),o=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=o(a),d=n,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||p;return a?r.createElement(k,l(l({ref:t},c),{},{components:a})):r.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,l=new Array(p);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var o=2;o<p;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1097:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>o});var r=a(7462),n=(a(7294),a(4137));const p={title:"introspection",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},l=void 0,i={unversionedId:"graphql/introspection",id:"graphql/introspection",title:"introspection",description:"Library for introspecting a GraphQL schema.",source:"@site/api/graphql/introspection.md",sourceDirName:"graphql",slug:"/graphql/introspection",permalink:"/api/graphql/introspection",draft:!1,tags:[],version:"current",frontMatter:{title:"introspection",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},s={},o=[{value:"_getFields()",id:"_getfields",level:2},{value:"Type parameters",id:"type-parameters",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Source",id:"source",level:3},{value:"getDirective()",id:"getdirective",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Source",id:"source-1",level:3},{value:"getDirectiveLocationForASTPath()",id:"getdirectivelocationforastpath",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Source",id:"source-2",level:3},{value:"getFields()",id:"getfields",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Returns",id:"returns-2",level:3},{value:"Source",id:"source-3",level:3},{value:"getOperation()",id:"getoperation",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"Returns",id:"returns-3",level:3},{value:"Source",id:"source-4",level:3},{value:"getSchemaMap()",id:"getschemamap",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"Returns",id:"returns-4",level:3},{value:"Example",id:"example",level:3},{value:"Source",id:"source-5",level:3},{value:"getTypeDirectiveArgValue()",id:"gettypedirectiveargvalue",level:2},{value:"Parameters",id:"parameters-6",level:3},{value:"Returns",id:"returns-5",level:3},{value:"Source",id:"source-6",level:3},{value:"getTypeDirectiveValues()",id:"gettypedirectivevalues",level:2},{value:"Parameters",id:"parameters-7",level:3},{value:"Returns",id:"returns-6",level:3},{value:"Source",id:"source-7",level:3},{value:"getTypeFromSchema()",id:"gettypefromschema",level:2},{value:"Type parameters",id:"type-parameters-1",level:3},{value:"Parameters",id:"parameters-8",level:3},{value:"Returns",id:"returns-7",level:3},{value:"See",id:"see",level:3},{value:"Source",id:"source-8",level:3},{value:"getTypeName()",id:"gettypename",level:2},{value:"Parameters",id:"parameters-9",level:3},{value:"Returns",id:"returns-8",level:3},{value:"Source",id:"source-9",level:3},{value:"hasAstNode()",id:"hasastnode",level:2},{value:"Type parameters",id:"type-parameters-2",level:3},{value:"Parameters",id:"parameters-10",level:3},{value:"Returns",id:"returns-9",level:3},{value:"Source",id:"source-10",level:3},{value:"hasDirective()",id:"hasdirective",level:2},{value:"Parameters",id:"parameters-11",level:3},{value:"Returns",id:"returns-10",level:3},{value:"Source",id:"source-11",level:3},{value:"isValidDirectiveLocation()",id:"isvaliddirectivelocation",level:2},{value:"Parameters",id:"parameters-12",level:3},{value:"Returns",id:"returns-11",level:3},{value:"Source",id:"source-12",level:3}],c={toc:o};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Library for introspecting a GraphQL schema.\nThe entry point method is ",(0,n.kt)("a",{parentName:"p",href:"/api/graphql/introspection#getschemamap"},"getSchemaMap"),"."),(0,n.kt)("h2",{id:"_getfields"},"_","getFields()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"_getFields<T, V>(\n   type, \n   processor?, \n   fallback?): GraphQLFieldMap<unknown, unknown> | GraphQLInputFieldMap | V\n")),(0,n.kt)("p",null,"Returns the fields from a GraphQL schema type."),(0,n.kt)("p",null,"see ",(0,n.kt)("a",{parentName:"p",href:"/api/graphql/introspection#getoperation"},"getOperation"),", ",(0,n.kt)("a",{parentName:"p",href:"/api/graphql/introspection#getfields-1"},"getFields")),(0,n.kt)("h3",{id:"type-parameters"},"Type parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"T")),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"V")),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"type"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"T")),(0,n.kt)("p",null,"the GraphQL schema type to parse."),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"processor?"),": (",(0,n.kt)("inlineCode",{parentName:"p"},"fieldMap"),") => ",(0,n.kt)("inlineCode",{parentName:"p"},"V")),(0,n.kt)("p",null,"optional callback function to parse the fields map."),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"fallback?"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"V")),(0,n.kt)("p",null,"optional fallback value, ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if not set."),(0,n.kt)("h3",{id:"returns"},"Returns"),(0,n.kt)("p",null,"a map of fields as k/v records, or ",(0,n.kt)("inlineCode",{parentName:"p"},"fallback")," value if no fields available."),(0,n.kt)("h3",{id:"source"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/579869c/packages/graphql/src/introspection.ts#L313"},"packages/graphql/src/introspection.ts:313")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"getdirective"},"getDirective()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"getDirective(entity, directives): GraphQLDirective[]\n")),(0,n.kt)("p",null,"Returns a schema entity's list of directives matching a defined set."),(0,n.kt)("h3",{id:"parameters-1"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"entity"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"unknown")),(0,n.kt)("p",null,"a GraphQL schema entity."),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"directives"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Maybe"),"\\<",(0,n.kt)("inlineCode",{parentName:"p"},"GraphQLDirective"),"[]",">"),(0,n.kt)("p",null,"a directive name or a list of directive names."),(0,n.kt)("h3",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,"a list of GraphQL directives matching the set, else ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,n.kt)("h3",{id:"source-1"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/579869c/packages/graphql/src/introspection.ts#L222"},"packages/graphql/src/introspection.ts:222")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"getdirectivelocationforastpath"},"getDirectiveLocationForASTPath()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"getDirectiveLocationForASTPath(appliedTo): DirectiveLocation\n")),(0,n.kt)("h3",{id:"parameters-2"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"appliedTo"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Maybe"),"\\<",(0,n.kt)("inlineCode",{parentName:"p"},"ASTNode"),">"),(0,n.kt)("h3",{id:"source-2"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/579869c/packages/graphql/src/introspection.ts#L111"},"packages/graphql/src/introspection.ts:111")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"getfields"},"getFields()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"getFields(type): unknown[]\n")),(0,n.kt)("p",null,"Returns fields map for a GraphQL schema type."),(0,n.kt)("p",null,"see ",(0,n.kt)("a",{parentName:"p",href:"/api/graphql/introspection#getschemamap"},"getSchemaMap")),(0,n.kt)("h3",{id:"parameters-3"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"type"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"unknown")),(0,n.kt)("p",null,"the GraphQL schema type to parse."),(0,n.kt)("h3",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,"a list of fields of type object."),(0,n.kt)("h3",{id:"source-3"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/579869c/packages/graphql/src/introspection.ts#L378"},"packages/graphql/src/introspection.ts:378")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"getoperation"},"getOperation()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"getOperation(operationType?): Record<string, GraphQLOperationType>\n")),(0,n.kt)("p",null,"Returns fields map for a GraphQL operation type (query, mutation, subscription...)."),(0,n.kt)("p",null,"see ",(0,n.kt)("a",{parentName:"p",href:"/api/graphql/introspection#getschemamap"},"getSchemaMap")),(0,n.kt)("h3",{id:"parameters-4"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"operationType?"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"unknown")),(0,n.kt)("p",null,"the operation type to parse."),(0,n.kt)("h3",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,"a map of fields as k/v records."),(0,n.kt)("h3",{id:"source-4"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/579869c/packages/graphql/src/introspection.ts#L354"},"packages/graphql/src/introspection.ts:354")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"getschemamap"},"getSchemaMap()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"getSchemaMap(schema): SchemaMap\n")),(0,n.kt)("p",null,"Returns an introspection map of the GraphQL schema.\nThis is the entry point for GraphQL-Markdown schema parsing features."),(0,n.kt)("h3",{id:"parameters-5"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"schema"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Maybe"),"\\<",(0,n.kt)("inlineCode",{parentName:"p"},"GraphQLSchema"),">"),(0,n.kt)("p",null,"a GraphQL schema."),(0,n.kt)("h3",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,"a schema map by GraphQL entities (see ","[SchemaEntity]","(","[object Object]","))."),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { buildSchema } from "graphql";\nimport { getSchemaMap } from "@graphql-markdown/utils/graphql";\n\nconst schema = buildSchema(`\n  interface Record {\n    id: String!\n  }\n  type StudyItem implements Record {\n    id: String!\n    subject: String!\n    duration: Int!\n  }\n  type Query {\n    getStudyItems(subject: String): [StudyItem!]\n    getStudyItem(id: String!): StudyItem\n  }\n  type Mutation {\n    addStudyItem(subject: String!, duration: Int!): StudyItem\n  }\n  type Subscription {\n    listStudyItems: [StudyItem!]\n  }\n`);\n\nconst schemaTypeMap = getSchemaMap(schema);\n\n// expected result: {\n//   queries: {\n//     getStudyItems: GraphQLField,\n//     getStudyItem: GraphQLField,\n//   },\n//   mutations: {\n//     addStudyItem: GraphQLField,\n//   },\n//   subscriptions: {\n//     listStudyItems: GraphQLField,\n//   }\n//   directives: {\n//     include: GraphQLDirective,\n//     skip: GraphQLDirective,\n//     deprecated: GraphQLDirective,\n//     specifiedBy: GraphQLDirective,\n//   objects: {\n//     StudyItem: GraphQLObjectType,\n//   unions: {},\n//   interfaces: {\n//     Record: GraphQLInterfaceType,\n//   enums: {},\n//   inputs: {},\n//   scalars: {\n//     String: GraphQLScalarType,\n//     Int: GraphQLScalarType,\n//     Boolean: GraphQLScalarType,\n//   }\n// }\n')),(0,n.kt)("h3",{id:"source-5"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/579869c/packages/graphql/src/introspection.ts#L488"},"packages/graphql/src/introspection.ts:488")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"gettypedirectiveargvalue"},"getTypeDirectiveArgValue()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"getTypeDirectiveArgValue(\n   directive, \n   node, \nargName): Maybe<Record<string, unknown>>\n")),(0,n.kt)("p",null,"Returns one directive's argument's value linked to a GraphQL schema type.\nIt calls ",(0,n.kt)("a",{parentName:"p",href:"/api/graphql/introspection#gettypedirectivevalues"},"getTypeDirectiveValues")," and returns a matching record."),(0,n.kt)("h3",{id:"parameters-6"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"directive"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"GraphQLDirective")),(0,n.kt)("p",null,"a GraphQL directive defined in the schema."),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"node"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"unknown")),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"argName"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"the name of the GraphQL directive argument to fetch the value from."),(0,n.kt)("h3",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,"a record k/v with ",(0,n.kt)("inlineCode",{parentName:"p"},"argName")," as key and the argument's value."),(0,n.kt)("h3",{id:"source-6"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/579869c/packages/graphql/src/introspection.ts#L285"},"packages/graphql/src/introspection.ts:285")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"gettypedirectivevalues"},"getTypeDirectiveValues()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"getTypeDirectiveValues(directive, type): Maybe<Record<string, unknown>>\n")),(0,n.kt)("p",null,"Returns all directive's arguments' values linked to a GraphQL schema type."),(0,n.kt)("h3",{id:"parameters-7"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"directive"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"GraphQLDirective")),(0,n.kt)("p",null,"a GraphQL directive defined in the schema."),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"type"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"unknown")),(0,n.kt)("p",null,"the GraphQL schema type to parse."),(0,n.kt)("h3",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,"a record k/v with arguments' name as keys and arguments' value."),(0,n.kt)("h3",{id:"source-7"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/579869c/packages/graphql/src/introspection.ts#L254"},"packages/graphql/src/introspection.ts:254")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"gettypefromschema"},"getTypeFromSchema()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"getTypeFromSchema<T>(schema, type): Maybe<Record<string, T>>\n")),(0,n.kt)("p",null,"Returns a map of GraphQL named types from a schema for a defined GraphQL type.\nWhen parsing the entities, internal GraphQL entities (starting with ",(0,n.kt)("inlineCode",{parentName:"p"},"__"),") are excluded."),(0,n.kt)("h3",{id:"type-parameters-1"},"Type parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"T")),(0,n.kt)("h3",{id:"parameters-8"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"schema"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Maybe"),"\\<",(0,n.kt)("inlineCode",{parentName:"p"},"GraphQLSchema"),">"),(0,n.kt)("p",null,"a GraphQL schema."),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"type"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"unknown")),(0,n.kt)("p",null,"a GraphQL type, eg ",(0,n.kt)("inlineCode",{parentName:"p"},"GraphQLObjectType"),"."),(0,n.kt)("h3",{id:"returns-7"},"Returns"),(0,n.kt)("p",null,"a map of GraphQL named types for the matching GraphQL type, or undefined if no match."),(0,n.kt)("h3",{id:"see"},"See"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/graphql/introspection#getschemamap"},"getSchemaMap")),(0,n.kt)("h3",{id:"source-8"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/579869c/packages/graphql/src/introspection.ts#L59"},"packages/graphql/src/introspection.ts:59")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"gettypename"},"getTypeName()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"getTypeName(type, defaultName): string\n")),(0,n.kt)("p",null,"Resolves the name of a GraphQL schema type."),(0,n.kt)("h3",{id:"parameters-9"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"type"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"unknown")),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"defaultName"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string"),"= ",(0,n.kt)("inlineCode",{parentName:"p"},'""')),(0,n.kt)("p",null,"optional fallback value if the name resolution fails."),(0,n.kt)("h3",{id:"returns-8"},"Returns"),(0,n.kt)("p",null,"the type's name, or ",(0,n.kt)("inlineCode",{parentName:"p"},"defaultName"),"."),(0,n.kt)("h3",{id:"source-9"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/579869c/packages/graphql/src/introspection.ts#L401"},"packages/graphql/src/introspection.ts:401")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"hasastnode"},"hasAstNode()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"hasAstNode<T>(node): node is AstNodeType<T>\n")),(0,n.kt)("p",null,"Type guard for type with an AST node property."),(0,n.kt)("h3",{id:"type-parameters-2"},"Type parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"T")),(0,n.kt)("h3",{id:"parameters-10"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"node"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"T")),(0,n.kt)("p",null,"a GraphQL schema named type."),(0,n.kt)("h3",{id:"returns-9"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"true")," if the entity has an AST node property, else ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,n.kt)("h3",{id:"source-10"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/579869c/packages/graphql/src/introspection.ts#L107"},"packages/graphql/src/introspection.ts:107")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"hasdirective"},"hasDirective()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"hasDirective(\n   entity, \n   directives, \n   fallback): boolean\n")),(0,n.kt)("p",null,"Checks if a schema entity as a directive belonging to a defined set."),(0,n.kt)("h3",{id:"parameters-11"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"entity"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"unknown")),(0,n.kt)("p",null,"a GraphQL schema entity."),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"directives"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Maybe"),"\\<",(0,n.kt)("inlineCode",{parentName:"p"},"GraphQLDirective"),"[]",">"),(0,n.kt)("p",null,"a directive name or a list of directive names."),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"fallback"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean"),"= ",(0,n.kt)("inlineCode",{parentName:"p"},"false")),(0,n.kt)("p",null,"default value if the entity type is not a valid location for directives."),(0,n.kt)("h3",{id:"returns-10"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"true")," if the entity has at least one directive matching, else ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,n.kt)("h3",{id:"source-11"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/579869c/packages/graphql/src/introspection.ts#L184"},"packages/graphql/src/introspection.ts:184")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"isvaliddirectivelocation"},"isValidDirectiveLocation()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"isValidDirectiveLocation(entity, directive): boolean\n")),(0,n.kt)("p",null,"Check if a directive can be applied to specific schema entity location."),(0,n.kt)("h3",{id:"parameters-12"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"entity"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"unknown")),(0,n.kt)("p",null,"a GraphQL schema entity."),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"directive"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"GraphQLDirective")),(0,n.kt)("p",null,"a directive name."),(0,n.kt)("h3",{id:"returns-11"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"true")," if the entity is a valid directive location, else ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,n.kt)("h3",{id:"source-12"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/579869c/packages/graphql/src/introspection.ts#L163"},"packages/graphql/src/introspection.ts:163")))}u.isMDXComponent=!0}}]);