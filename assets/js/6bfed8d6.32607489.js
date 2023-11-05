"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6085],{8089:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=n(5893),i=n(1151);const a={title:"introspection",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},t=void 0,c={id:"graphql/introspection",title:"introspection",description:"Library for introspecting a GraphQL schema.",source:"@site/api/graphql/introspection.md",sourceDirName:"graphql",slug:"/graphql/introspection",permalink:"/api/graphql/introspection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"introspection",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},l={},d=[{value:"_getFields()",id:"_getfields",level:2},{value:"Type parameters",id:"type-parameters",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Source",id:"source",level:3},{value:"getDirective()",id:"getdirective",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Source",id:"source-1",level:3},{value:"getDirectiveLocationForASTPath()",id:"getdirectivelocationforastpath",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Returns",id:"returns-2",level:3},{value:"Source",id:"source-2",level:3},{value:"getFields()",id:"getfields",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Returns",id:"returns-3",level:3},{value:"Source",id:"source-3",level:3},{value:"getOperation()",id:"getoperation",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"Returns",id:"returns-4",level:3},{value:"Source",id:"source-4",level:3},{value:"getSchemaMap()",id:"getschemamap",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"Returns",id:"returns-5",level:3},{value:"Example",id:"example",level:3},{value:"Source",id:"source-5",level:3},{value:"getTypeDirectiveArgValue()",id:"gettypedirectiveargvalue",level:2},{value:"Parameters",id:"parameters-6",level:3},{value:"Returns",id:"returns-6",level:3},{value:"Source",id:"source-6",level:3},{value:"getTypeDirectiveValues()",id:"gettypedirectivevalues",level:2},{value:"Parameters",id:"parameters-7",level:3},{value:"Returns",id:"returns-7",level:3},{value:"Source",id:"source-7",level:3},{value:"getTypeFromSchema()",id:"gettypefromschema",level:2},{value:"Type parameters",id:"type-parameters-1",level:3},{value:"Parameters",id:"parameters-8",level:3},{value:"Returns",id:"returns-8",level:3},{value:"See",id:"see",level:3},{value:"Source",id:"source-8",level:3},{value:"getTypeName()",id:"gettypename",level:2},{value:"Parameters",id:"parameters-9",level:3},{value:"Returns",id:"returns-9",level:3},{value:"Source",id:"source-9",level:3},{value:"hasAstNode()",id:"hasastnode",level:2},{value:"Type parameters",id:"type-parameters-2",level:3},{value:"Parameters",id:"parameters-10",level:3},{value:"Returns",id:"returns-10",level:3},{value:"Source",id:"source-10",level:3},{value:"hasDirective()",id:"hasdirective",level:2},{value:"Parameters",id:"parameters-11",level:3},{value:"Returns",id:"returns-11",level:3},{value:"Source",id:"source-11",level:3},{value:"isValidDirectiveLocation()",id:"isvaliddirectivelocation",level:2},{value:"Parameters",id:"parameters-12",level:3},{value:"Returns",id:"returns-12",level:3},{value:"Source",id:"source-12",level:3}];function h(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["Library for introspecting a GraphQL schema.\nThe entry point method is ",(0,s.jsx)(r.a,{href:"/api/graphql/introspection#getschemamap",children:"getSchemaMap"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"_getfields",children:"_getFields()"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"_getFields<T, V>(\n   type, \n   processor?, \n   fallback?): GraphQLFieldMap<unknown, unknown> | GraphQLInputFieldMap | V\n"})}),"\n",(0,s.jsx)(r.p,{children:"Returns the fields from a GraphQL schema type."}),"\n",(0,s.jsxs)(r.p,{children:["see ",(0,s.jsx)(r.a,{href:"/api/graphql/introspection#getoperation",children:"getOperation"}),", ",(0,s.jsx)(r.a,{href:"/api/graphql/introspection#getfields-1",children:"getFields"})]}),"\n",(0,s.jsx)(r.h3,{id:"type-parameters",children:"Type parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"T"})]}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"V"})]}),"\n",(0,s.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"type"}),": ",(0,s.jsx)(r.code,{children:"T"})]}),"\n",(0,s.jsx)(r.p,{children:"the GraphQL schema type to parse."}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"processor?"}),": (",(0,s.jsx)(r.code,{children:"fieldMap"}),") => ",(0,s.jsx)(r.code,{children:"V"})]}),"\n",(0,s.jsx)(r.p,{children:"optional callback function to parse the fields map."}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"fallback?"}),": ",(0,s.jsx)(r.code,{children:"V"})]}),"\n",(0,s.jsxs)(r.p,{children:["optional fallback value, ",(0,s.jsx)(r.code,{children:"undefined"})," if not set."]}),"\n",(0,s.jsx)(r.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"GraphQLFieldMap"}),"<",(0,s.jsx)(r.code,{children:"unknown"}),", ",(0,s.jsx)(r.code,{children:"unknown"}),"> | ",(0,s.jsx)(r.code,{children:"GraphQLInputFieldMap"})," | ",(0,s.jsx)(r.code,{children:"V"})]}),"\n",(0,s.jsxs)(r.p,{children:["a map of fields as k/v records, or ",(0,s.jsx)(r.code,{children:"fallback"})," value if no fields available."]}),"\n",(0,s.jsx)(r.h3,{id:"source",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/53c5597/packages/graphql/src/introspection.ts#L313",children:"packages/graphql/src/introspection.ts:313"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"getdirective",children:"getDirective()"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"getDirective(entity, directives): GraphQLDirective[]\n"})}),"\n",(0,s.jsx)(r.p,{children:"Returns a schema entity's list of directives matching a defined set."}),"\n",(0,s.jsx)(r.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"entity"}),": ",(0,s.jsx)(r.code,{children:"unknown"})]}),"\n",(0,s.jsx)(r.p,{children:"a GraphQL schema entity."}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"directives"}),": ",(0,s.jsx)(r.code,{children:"Maybe"}),"<",(0,s.jsx)(r.code,{children:"GraphQLDirective"}),"[]>"]}),"\n",(0,s.jsx)(r.p,{children:"a directive name or a list of directive names."}),"\n",(0,s.jsx)(r.h3,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"GraphQLDirective"}),"[]"]}),"\n",(0,s.jsxs)(r.p,{children:["a list of GraphQL directives matching the set, else ",(0,s.jsx)(r.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"source-1",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/53c5597/packages/graphql/src/introspection.ts#L222",children:"packages/graphql/src/introspection.ts:222"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"getdirectivelocationforastpath",children:"getDirectiveLocationForASTPath()"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"getDirectiveLocationForASTPath(appliedTo): DirectiveLocation\n"})}),"\n",(0,s.jsx)(r.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"appliedTo"}),": ",(0,s.jsx)(r.code,{children:"Maybe"}),"<",(0,s.jsx)(r.code,{children:"ASTNode"}),">"]}),"\n",(0,s.jsx)(r.h3,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"DirectiveLocation"})}),"\n",(0,s.jsx)(r.h3,{id:"source-2",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/53c5597/packages/graphql/src/introspection.ts#L111",children:"packages/graphql/src/introspection.ts:111"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"getfields",children:"getFields()"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"getFields(type): unknown[]\n"})}),"\n",(0,s.jsx)(r.p,{children:"Returns fields map for a GraphQL schema type."}),"\n",(0,s.jsxs)(r.p,{children:["see ",(0,s.jsx)(r.a,{href:"/api/graphql/introspection#getschemamap",children:"getSchemaMap"})]}),"\n",(0,s.jsx)(r.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"type"}),": ",(0,s.jsx)(r.code,{children:"unknown"})]}),"\n",(0,s.jsx)(r.p,{children:"the GraphQL schema type to parse."}),"\n",(0,s.jsx)(r.h3,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"unknown"}),"[]"]}),"\n",(0,s.jsx)(r.p,{children:"a list of fields of type object."}),"\n",(0,s.jsx)(r.h3,{id:"source-3",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/53c5597/packages/graphql/src/introspection.ts#L378",children:"packages/graphql/src/introspection.ts:378"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"getoperation",children:"getOperation()"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"getOperation(operationType?): Record<string, GraphQLOperationType>\n"})}),"\n",(0,s.jsx)(r.p,{children:"Returns fields map for a GraphQL operation type (query, mutation, subscription...)."}),"\n",(0,s.jsxs)(r.p,{children:["see ",(0,s.jsx)(r.a,{href:"/api/graphql/introspection#getschemamap",children:"getSchemaMap"})]}),"\n",(0,s.jsx)(r.h3,{id:"parameters-4",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"operationType?"}),": ",(0,s.jsx)(r.code,{children:"unknown"})]}),"\n",(0,s.jsx)(r.p,{children:"the operation type to parse."}),"\n",(0,s.jsx)(r.h3,{id:"returns-4",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Record"}),"<",(0,s.jsx)(r.code,{children:"string"}),", ",(0,s.jsx)(r.code,{children:"GraphQLOperationType"}),">"]}),"\n",(0,s.jsx)(r.p,{children:"a map of fields as k/v records."}),"\n",(0,s.jsx)(r.h3,{id:"source-4",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/53c5597/packages/graphql/src/introspection.ts#L354",children:"packages/graphql/src/introspection.ts:354"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"getschemamap",children:"getSchemaMap()"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"getSchemaMap(schema): SchemaMap\n"})}),"\n",(0,s.jsx)(r.p,{children:"Returns an introspection map of the GraphQL schema.\nThis is the entry point for GraphQL-Markdown schema parsing features."}),"\n",(0,s.jsx)(r.h3,{id:"parameters-5",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"schema"}),": ",(0,s.jsx)(r.code,{children:"Maybe"}),"<",(0,s.jsx)(r.code,{children:"GraphQLSchema"}),">"]}),"\n",(0,s.jsx)(r.p,{children:"a GraphQL schema."}),"\n",(0,s.jsx)(r.h3,{id:"returns-5",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"SchemaMap"})}),"\n",(0,s.jsx)(r.p,{children:"a schema map by GraphQL entities (see [SchemaEntity]([object Object]))."}),"\n",(0,s.jsx)(r.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:'import { buildSchema } from "graphql";\nimport { getSchemaMap } from "@graphql-markdown/utils/graphql";\n\nconst schema = buildSchema(`\n  interface Record {\n    id: String!\n  }\n  type StudyItem implements Record {\n    id: String!\n    subject: String!\n    duration: Int!\n  }\n  type Query {\n    getStudyItems(subject: String): [StudyItem!]\n    getStudyItem(id: String!): StudyItem\n  }\n  type Mutation {\n    addStudyItem(subject: String!, duration: Int!): StudyItem\n  }\n  type Subscription {\n    listStudyItems: [StudyItem!]\n  }\n`);\n\nconst schemaTypeMap = getSchemaMap(schema);\n\n// expected result: {\n//   queries: {\n//     getStudyItems: GraphQLField,\n//     getStudyItem: GraphQLField,\n//   },\n//   mutations: {\n//     addStudyItem: GraphQLField,\n//   },\n//   subscriptions: {\n//     listStudyItems: GraphQLField,\n//   }\n//   directives: {\n//     include: GraphQLDirective,\n//     skip: GraphQLDirective,\n//     deprecated: GraphQLDirective,\n//     specifiedBy: GraphQLDirective,\n//   objects: {\n//     StudyItem: GraphQLObjectType,\n//   unions: {},\n//   interfaces: {\n//     Record: GraphQLInterfaceType,\n//   enums: {},\n//   inputs: {},\n//   scalars: {\n//     String: GraphQLScalarType,\n//     Int: GraphQLScalarType,\n//     Boolean: GraphQLScalarType,\n//   }\n// }\n'})}),"\n",(0,s.jsx)(r.h3,{id:"source-5",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/53c5597/packages/graphql/src/introspection.ts#L488",children:"packages/graphql/src/introspection.ts:488"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"gettypedirectiveargvalue",children:"getTypeDirectiveArgValue()"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"getTypeDirectiveArgValue(\n   directive, \n   node, \nargName): Maybe<Record<string, unknown>>\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Returns one directive's argument's value linked to a GraphQL schema type.\nIt calls ",(0,s.jsx)(r.a,{href:"/api/graphql/introspection#gettypedirectivevalues",children:"getTypeDirectiveValues"})," and returns a matching record."]}),"\n",(0,s.jsx)(r.h3,{id:"parameters-6",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"directive"}),": ",(0,s.jsx)(r.code,{children:"GraphQLDirective"})]}),"\n",(0,s.jsx)(r.p,{children:"a GraphQL directive defined in the schema."}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"node"}),": ",(0,s.jsx)(r.code,{children:"unknown"})]}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"argName"}),": ",(0,s.jsx)(r.code,{children:"string"})]}),"\n",(0,s.jsx)(r.p,{children:"the name of the GraphQL directive argument to fetch the value from."}),"\n",(0,s.jsx)(r.h3,{id:"returns-6",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Maybe"}),"<",(0,s.jsx)(r.code,{children:"Record"}),"<",(0,s.jsx)(r.code,{children:"string"}),", ",(0,s.jsx)(r.code,{children:"unknown"}),">>"]}),"\n",(0,s.jsxs)(r.p,{children:["a record k/v with ",(0,s.jsx)(r.code,{children:"argName"})," as key and the argument's value."]}),"\n",(0,s.jsx)(r.h3,{id:"source-6",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/53c5597/packages/graphql/src/introspection.ts#L285",children:"packages/graphql/src/introspection.ts:285"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"gettypedirectivevalues",children:"getTypeDirectiveValues()"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"getTypeDirectiveValues(directive, type): Maybe<Record<string, unknown>>\n"})}),"\n",(0,s.jsx)(r.p,{children:"Returns all directive's arguments' values linked to a GraphQL schema type."}),"\n",(0,s.jsx)(r.h3,{id:"parameters-7",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"directive"}),": ",(0,s.jsx)(r.code,{children:"GraphQLDirective"})]}),"\n",(0,s.jsx)(r.p,{children:"a GraphQL directive defined in the schema."}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"type"}),": ",(0,s.jsx)(r.code,{children:"unknown"})]}),"\n",(0,s.jsx)(r.p,{children:"the GraphQL schema type to parse."}),"\n",(0,s.jsx)(r.h3,{id:"returns-7",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Maybe"}),"<",(0,s.jsx)(r.code,{children:"Record"}),"<",(0,s.jsx)(r.code,{children:"string"}),", ",(0,s.jsx)(r.code,{children:"unknown"}),">>"]}),"\n",(0,s.jsx)(r.p,{children:"a record k/v with arguments' name as keys and arguments' value."}),"\n",(0,s.jsx)(r.h3,{id:"source-7",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/53c5597/packages/graphql/src/introspection.ts#L254",children:"packages/graphql/src/introspection.ts:254"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"gettypefromschema",children:"getTypeFromSchema()"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"getTypeFromSchema<T>(schema, type): Maybe<Record<string, T>>\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Returns a map of GraphQL named types from a schema for a defined GraphQL type.\nWhen parsing the entities, internal GraphQL entities (starting with ",(0,s.jsx)(r.code,{children:"__"}),") are excluded."]}),"\n",(0,s.jsx)(r.h3,{id:"type-parameters-1",children:"Type parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"T"})]}),"\n",(0,s.jsx)(r.h3,{id:"parameters-8",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"schema"}),": ",(0,s.jsx)(r.code,{children:"Maybe"}),"<",(0,s.jsx)(r.code,{children:"GraphQLSchema"}),">"]}),"\n",(0,s.jsx)(r.p,{children:"a GraphQL schema."}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"type"}),": ",(0,s.jsx)(r.code,{children:"unknown"})]}),"\n",(0,s.jsxs)(r.p,{children:["a GraphQL type, eg ",(0,s.jsx)(r.code,{children:"GraphQLObjectType"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"returns-8",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Maybe"}),"<",(0,s.jsx)(r.code,{children:"Record"}),"<",(0,s.jsx)(r.code,{children:"string"}),", ",(0,s.jsx)(r.code,{children:"T"}),">>"]}),"\n",(0,s.jsx)(r.p,{children:"a map of GraphQL named types for the matching GraphQL type, or undefined if no match."}),"\n",(0,s.jsx)(r.h3,{id:"see",children:"See"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/api/graphql/introspection#getschemamap",children:"getSchemaMap"})}),"\n",(0,s.jsx)(r.h3,{id:"source-8",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/53c5597/packages/graphql/src/introspection.ts#L59",children:"packages/graphql/src/introspection.ts:59"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"gettypename",children:"getTypeName()"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"getTypeName(type, defaultName): string\n"})}),"\n",(0,s.jsx)(r.p,{children:"Resolves the name of a GraphQL schema type."}),"\n",(0,s.jsx)(r.h3,{id:"parameters-9",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"type"}),": ",(0,s.jsx)(r.code,{children:"unknown"})]}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"defaultName"}),": ",(0,s.jsx)(r.code,{children:"string"}),"= ",(0,s.jsx)(r.code,{children:'""'})]}),"\n",(0,s.jsx)(r.p,{children:"optional fallback value if the name resolution fails."}),"\n",(0,s.jsx)(r.h3,{id:"returns-9",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"string"})}),"\n",(0,s.jsxs)(r.p,{children:["the type's name, or ",(0,s.jsx)(r.code,{children:"defaultName"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"source-9",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/53c5597/packages/graphql/src/introspection.ts#L401",children:"packages/graphql/src/introspection.ts:401"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"hasastnode",children:"hasAstNode()"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"hasAstNode<T>(node): node is AstNodeType<T>\n"})}),"\n",(0,s.jsx)(r.p,{children:"Type guard for type with an AST node property."}),"\n",(0,s.jsx)(r.h3,{id:"type-parameters-2",children:"Type parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"T"})]}),"\n",(0,s.jsx)(r.h3,{id:"parameters-10",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"node"}),": ",(0,s.jsx)(r.code,{children:"T"})]}),"\n",(0,s.jsx)(r.p,{children:"a GraphQL schema named type."}),"\n",(0,s.jsx)(r.h3,{id:"returns-10",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"node is AstNodeType<T>"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"true"})," if the entity has an AST node property, else ",(0,s.jsx)(r.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"source-10",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/53c5597/packages/graphql/src/introspection.ts#L107",children:"packages/graphql/src/introspection.ts:107"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"hasdirective",children:"hasDirective()"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"hasDirective(\n   entity, \n   directives, \n   fallback): boolean\n"})}),"\n",(0,s.jsx)(r.p,{children:"Checks if a schema entity as a directive belonging to a defined set."}),"\n",(0,s.jsx)(r.h3,{id:"parameters-11",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"entity"}),": ",(0,s.jsx)(r.code,{children:"unknown"})]}),"\n",(0,s.jsx)(r.p,{children:"a GraphQL schema entity."}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"directives"}),": ",(0,s.jsx)(r.code,{children:"Maybe"}),"<",(0,s.jsx)(r.code,{children:"GraphQLDirective"}),"[]>"]}),"\n",(0,s.jsx)(r.p,{children:"a directive name or a list of directive names."}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"fallback"}),": ",(0,s.jsx)(r.code,{children:"boolean"}),"= ",(0,s.jsx)(r.code,{children:"false"})]}),"\n",(0,s.jsx)(r.p,{children:"default value if the entity type is not a valid location for directives."}),"\n",(0,s.jsx)(r.h3,{id:"returns-11",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"boolean"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"true"})," if the entity has at least one directive matching, else ",(0,s.jsx)(r.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"source-11",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/53c5597/packages/graphql/src/introspection.ts#L184",children:"packages/graphql/src/introspection.ts:184"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"isvaliddirectivelocation",children:"isValidDirectiveLocation()"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"isValidDirectiveLocation(entity, directive): boolean\n"})}),"\n",(0,s.jsx)(r.p,{children:"Check if a directive can be applied to specific schema entity location."}),"\n",(0,s.jsx)(r.h3,{id:"parameters-12",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"entity"}),": ",(0,s.jsx)(r.code,{children:"unknown"})]}),"\n",(0,s.jsx)(r.p,{children:"a GraphQL schema entity."}),"\n",(0,s.jsxs)(r.p,{children:["\u25aa ",(0,s.jsx)(r.strong,{children:"directive"}),": ",(0,s.jsx)(r.code,{children:"GraphQLDirective"})]}),"\n",(0,s.jsx)(r.p,{children:"a directive name."}),"\n",(0,s.jsx)(r.h3,{id:"returns-12",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"boolean"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"true"})," if the entity is a valid directive location, else ",(0,s.jsx)(r.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"source-12",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/53c5597/packages/graphql/src/introspection.ts#L163",children:"packages/graphql/src/introspection.ts:163"})})]})}function p(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>t});var s=n(7294);const i={},a=s.createContext(i);function t(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);