"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[5614],{72722:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var i=r(74848),s=r(28453);const t={title:"introspection",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},a=void 0,d={id:"graphql/introspection",title:"introspection",description:"Library for introspecting a GraphQL schema.",source:"@site/api/graphql/introspection.md",sourceDirName:"graphql",slug:"/graphql/introspection",permalink:"/api/graphql/introspection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"introspection",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},l={},c=[{value:"IntrospectionError",id:"introspectionerror",level:2},{value:"Extends",id:"extends",level:3},{value:"Constructors",id:"constructors",level:3},{value:"new IntrospectionError()",id:"new-introspectionerror",level:4},{value:"Parameters",id:"parameters",level:5},{value:"message?",id:"message",level:6},{value:"Returns",id:"returns",level:5},{value:"Inherited from",id:"inherited-from",level:5},{value:"new IntrospectionError()",id:"new-introspectionerror-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"message?",id:"message-1",level:6},{value:"options?",id:"options",level:6},{value:"Returns",id:"returns-1",level:5},{value:"Inherited from",id:"inherited-from-1",level:5},{value:"_getFields()",id:"_getfields",level:2},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Parameters",id:"parameters-2",level:3},{value:"type",id:"type",level:4},{value:"processor?",id:"processor",level:4},{value:"fallback?",id:"fallback",level:4},{value:"Returns",id:"returns-2",level:3},{value:"getDirective()",id:"getdirective",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"entity",id:"entity",level:4},{value:"directives",id:"directives",level:4},{value:"Returns",id:"returns-3",level:3},{value:"getDirectiveLocationForASTPath()",id:"getdirectivelocationforastpath",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"appliedTo",id:"appliedto",level:4},{value:"Returns",id:"returns-4",level:3},{value:"getFields()",id:"getfields",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"type",id:"type-1",level:4},{value:"Returns",id:"returns-5",level:3},{value:"getOperation()",id:"getoperation",level:2},{value:"Parameters",id:"parameters-6",level:3},{value:"operationType?",id:"operationtype",level:4},{value:"Returns",id:"returns-6",level:3},{value:"getSchemaMap()",id:"getschemamap",level:2},{value:"Parameters",id:"parameters-7",level:3},{value:"schema",id:"schema",level:4},{value:"Returns",id:"returns-7",level:3},{value:"Example",id:"example",level:3},{value:"getTypeDirectiveArgValue()",id:"gettypedirectiveargvalue",level:2},{value:"Parameters",id:"parameters-8",level:3},{value:"directive",id:"directive",level:4},{value:"node",id:"node",level:4},{value:"argName",id:"argname",level:4},{value:"Returns",id:"returns-8",level:3},{value:"getTypeDirectiveValues()",id:"gettypedirectivevalues",level:2},{value:"Parameters",id:"parameters-9",level:3},{value:"directive",id:"directive-1",level:4},{value:"type",id:"type-2",level:4},{value:"Returns",id:"returns-9",level:3},{value:"getTypeFromSchema()",id:"gettypefromschema",level:2},{value:"Type Parameters",id:"type-parameters-1",level:3},{value:"Parameters",id:"parameters-10",level:3},{value:"schema",id:"schema-1",level:4},{value:"type",id:"type-3",level:4},{value:"Returns",id:"returns-10",level:3},{value:"See",id:"see",level:3},{value:"getTypeName()",id:"gettypename",level:2},{value:"Parameters",id:"parameters-11",level:3},{value:"type",id:"type-4",level:4},{value:"defaultName",id:"defaultname",level:4},{value:"Returns",id:"returns-11",level:3},{value:"hasAstNode()",id:"hasastnode",level:2},{value:"Type Parameters",id:"type-parameters-2",level:3},{value:"Parameters",id:"parameters-12",level:3},{value:"node",id:"node-1",level:4},{value:"Returns",id:"returns-12",level:3},{value:"hasDirective()",id:"hasdirective",level:2},{value:"Parameters",id:"parameters-13",level:3},{value:"entity",id:"entity-1",level:4},{value:"directives",id:"directives-1",level:4},{value:"fallback",id:"fallback-1",level:4},{value:"Returns",id:"returns-13",level:3},{value:"isValidDirectiveLocation()",id:"isvaliddirectivelocation",level:2},{value:"Parameters",id:"parameters-14",level:3},{value:"entity",id:"entity-2",level:4},{value:"directive",id:"directive-2",level:4},{value:"Returns",id:"returns-14",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Library for introspecting a GraphQL schema.\nThe entry point method is ",(0,i.jsx)(n.a,{href:"/api/graphql/introspection#getschemamap",children:"getSchemaMap"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"introspectionerror",children:"IntrospectionError"}),"\n",(0,i.jsx)(n.p,{children:"Defined in: packages/graphql/src/introspection.ts:45"}),"\n",(0,i.jsx)(n.h3,{id:"extends",children:"Extends"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Error"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"constructors",children:"Constructors"}),"\n",(0,i.jsx)(n.h4,{id:"new-introspectionerror",children:"new IntrospectionError()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"new IntrospectionError(message?): IntrospectionError\n"})}),"\n",(0,i.jsx)(n.p,{children:"Defined in: node_modules/typescript/lib/lib.es5.d.ts:1082"}),"\n",(0,i.jsx)(n.h5,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(n.h6,{id:"message",children:"message?"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"string"})}),"\n",(0,i.jsx)(n.h5,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/api/graphql/introspection#introspectionerror",children:(0,i.jsx)(n.code,{children:"IntrospectionError"})})}),"\n",(0,i.jsx)(n.h5,{id:"inherited-from",children:"Inherited from"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"Error.constructor\n"})}),"\n",(0,i.jsx)(n.h4,{id:"new-introspectionerror-1",children:"new IntrospectionError()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"new IntrospectionError(message?, options?): IntrospectionError\n"})}),"\n",(0,i.jsx)(n.p,{children:"Defined in: node_modules/typescript/lib/lib.es5.d.ts:1082"}),"\n",(0,i.jsx)(n.h5,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsx)(n.h6,{id:"message-1",children:"message?"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"string"})}),"\n",(0,i.jsx)(n.h6,{id:"options",children:"options?"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"ErrorOptions"})}),"\n",(0,i.jsx)(n.h5,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/api/graphql/introspection#introspectionerror",children:(0,i.jsx)(n.code,{children:"IntrospectionError"})})}),"\n",(0,i.jsx)(n.h5,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"Error.constructor\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"_getfields",children:"_getFields()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function _getFields<T, V>(\n   type, \n   processor?, \n   fallback?): \n  | GraphQLFieldMap<unknown, unknown>\n  | GraphQLInputFieldMap\n  | V\n| GraphQLObjectType<any, any>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Defined in: packages/graphql/src/introspection.ts:317"}),"\n",(0,i.jsx)(n.p,{children:"Returns the fields from a GraphQL schema type."}),"\n",(0,i.jsxs)(n.p,{children:["see ",(0,i.jsx)(n.a,{href:"/api/graphql/introspection#getoperation",children:"getOperation"}),", ",(0,i.jsx)(n.a,{href:"/api/graphql/introspection#getfields",children:"getFields"})]}),"\n",(0,i.jsx)(n.h3,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.strong,{children:"T"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.strong,{children:"V"})]}),"\n",(0,i.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsx)(n.h4,{id:"type",children:"type"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"T"})}),"\n",(0,i.jsx)(n.p,{children:"the GraphQL schema type to parse."}),"\n",(0,i.jsx)(n.h4,{id:"processor",children:"processor?"}),"\n",(0,i.jsxs)(n.p,{children:["(",(0,i.jsx)(n.code,{children:"fieldMap"}),") => ",(0,i.jsx)(n.code,{children:"V"})]}),"\n",(0,i.jsx)(n.p,{children:"optional callback function to parse the fields map."}),"\n",(0,i.jsx)(n.h4,{id:"fallback",children:"fallback?"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"V"})}),"\n",(0,i.jsxs)(n.p,{children:["optional fallback value, ",(0,i.jsx)(n.code,{children:"undefined"})," if not set."]}),"\n",(0,i.jsx)(n.h3,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:["| ",(0,i.jsx)(n.code,{children:"GraphQLFieldMap"}),"<",(0,i.jsx)(n.code,{children:"unknown"}),", ",(0,i.jsx)(n.code,{children:"unknown"}),">\n| ",(0,i.jsx)(n.code,{children:"GraphQLInputFieldMap"}),"\n| ",(0,i.jsx)(n.code,{children:"V"}),"\n| ",(0,i.jsx)(n.code,{children:"GraphQLObjectType"}),"<",(0,i.jsx)(n.code,{children:"any"}),", ",(0,i.jsx)(n.code,{children:"any"}),">"]}),"\n",(0,i.jsxs)(n.p,{children:["a map of fields as k/v records, or ",(0,i.jsx)(n.code,{children:"fallback"})," value if no fields available."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"getdirective",children:"getDirective()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function getDirective(entity, directives): GraphQLDirective[]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Defined in: packages/graphql/src/introspection.ts:226"}),"\n",(0,i.jsx)(n.p,{children:"Returns a schema entity's list of directives matching a defined set."}),"\n",(0,i.jsx)(n.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,i.jsx)(n.h4,{id:"entity",children:"entity"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"unknown"})}),"\n",(0,i.jsx)(n.p,{children:"a GraphQL schema entity."}),"\n",(0,i.jsx)(n.h4,{id:"directives",children:"directives"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Maybe"}),"<",(0,i.jsx)(n.code,{children:"GraphQLDirective"}),"[]>"]}),"\n",(0,i.jsx)(n.p,{children:"a directive name or a list of directive names."}),"\n",(0,i.jsx)(n.h3,{id:"returns-3",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"GraphQLDirective"}),"[]"]}),"\n",(0,i.jsxs)(n.p,{children:["a list of GraphQL directives matching the set, else ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"getdirectivelocationforastpath",children:"getDirectiveLocationForASTPath()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function getDirectiveLocationForASTPath(appliedTo): DirectiveLocation\n"})}),"\n",(0,i.jsx)(n.p,{children:"Defined in: packages/graphql/src/introspection.ts:113"}),"\n",(0,i.jsx)(n.h3,{id:"parameters-4",children:"Parameters"}),"\n",(0,i.jsx)(n.h4,{id:"appliedto",children:"appliedTo"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Maybe"}),"<",(0,i.jsx)(n.code,{children:"ASTNode"}),">"]}),"\n",(0,i.jsx)(n.h3,{id:"returns-4",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DirectiveLocation"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"getfields",children:"getFields()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function getFields(type): unknown[]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Defined in: packages/graphql/src/introspection.ts:386"}),"\n",(0,i.jsx)(n.p,{children:"Returns fields map for a GraphQL schema type."}),"\n",(0,i.jsxs)(n.p,{children:["see ",(0,i.jsx)(n.a,{href:"/api/graphql/introspection#getschemamap",children:"getSchemaMap"})]}),"\n",(0,i.jsx)(n.h3,{id:"parameters-5",children:"Parameters"}),"\n",(0,i.jsx)(n.h4,{id:"type-1",children:"type"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"unknown"})}),"\n",(0,i.jsx)(n.p,{children:"the GraphQL schema type to parse."}),"\n",(0,i.jsx)(n.h3,{id:"returns-5",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"unknown"}),"[]"]}),"\n",(0,i.jsx)(n.p,{children:"a list of fields of type object."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"getoperation",children:"getOperation()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function getOperation(operationType?): Record<string, GraphQLOperationType>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Defined in: packages/graphql/src/introspection.ts:362"}),"\n",(0,i.jsx)(n.p,{children:"Returns fields map for a GraphQL operation type (query, mutation, subscription...)."}),"\n",(0,i.jsxs)(n.p,{children:["see ",(0,i.jsx)(n.a,{href:"/api/graphql/introspection#getschemamap",children:"getSchemaMap"})]}),"\n",(0,i.jsx)(n.h3,{id:"parameters-6",children:"Parameters"}),"\n",(0,i.jsx)(n.h4,{id:"operationtype",children:"operationType?"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"unknown"})}),"\n",(0,i.jsx)(n.p,{children:"the operation type to parse."}),"\n",(0,i.jsx)(n.h3,{id:"returns-6",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Record"}),"<",(0,i.jsx)(n.code,{children:"string"}),", ",(0,i.jsx)(n.code,{children:"GraphQLOperationType"}),">"]}),"\n",(0,i.jsx)(n.p,{children:"a map of fields as k/v records."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"getschemamap",children:"getSchemaMap()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function getSchemaMap(schema): SchemaMap\n"})}),"\n",(0,i.jsx)(n.p,{children:"Defined in: packages/graphql/src/introspection.ts:496"}),"\n",(0,i.jsx)(n.p,{children:"Returns an introspection map of the GraphQL schema.\nThis is the entry point for GraphQL-Markdown schema parsing features."}),"\n",(0,i.jsx)(n.h3,{id:"parameters-7",children:"Parameters"}),"\n",(0,i.jsx)(n.h4,{id:"schema",children:"schema"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Maybe"}),"<",(0,i.jsx)(n.code,{children:"GraphQLSchema"}),">"]}),"\n",(0,i.jsx)(n.p,{children:"a GraphQL schema."}),"\n",(0,i.jsx)(n.h3,{id:"returns-7",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"SchemaMap"})}),"\n",(0,i.jsx)(n.p,{children:"a schema map by GraphQL entities (see SchemaEntity)."}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import { buildSchema } from "graphql";\nimport { getSchemaMap } from "@graphql-markdown/utils/graphql";\n\nconst schema = buildSchema(`\n  interface Record {\n    id: String!\n  }\n  type StudyItem implements Record {\n    id: String!\n    subject: String!\n    duration: Int!\n  }\n  type Query {\n    getStudyItems(subject: String): [StudyItem!]\n    getStudyItem(id: String!): StudyItem\n  }\n  type Mutation {\n    addStudyItem(subject: String!, duration: Int!): StudyItem\n  }\n  type Subscription {\n    listStudyItems: [StudyItem!]\n  }\n`);\n\nconst schemaTypeMap = getSchemaMap(schema);\n\n// expected result: {\n//   queries: {\n//     getStudyItems: GraphQLField,\n//     getStudyItem: GraphQLField,\n//   },\n//   mutations: {\n//     addStudyItem: GraphQLField,\n//   },\n//   subscriptions: {\n//     listStudyItems: GraphQLField,\n//   }\n//   directives: {\n//     include: GraphQLDirective,\n//     skip: GraphQLDirective,\n//     deprecated: GraphQLDirective,\n//     specifiedBy: GraphQLDirective,\n//   objects: {\n//     StudyItem: GraphQLObjectType,\n//   unions: {},\n//   interfaces: {\n//     Record: GraphQLInterfaceType,\n//   enums: {},\n//   inputs: {},\n//   scalars: {\n//     String: GraphQLScalarType,\n//     Int: GraphQLScalarType,\n//     Boolean: GraphQLScalarType,\n//   }\n// }\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"gettypedirectiveargvalue",children:"getTypeDirectiveArgValue()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function getTypeDirectiveArgValue(\n   directive, \n   node, \nargName): Maybe<string | Record<string, unknown>>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Defined in: packages/graphql/src/introspection.ts:289"}),"\n",(0,i.jsxs)(n.p,{children:["Returns one directive's argument's value linked to a GraphQL schema type.\nIt calls ",(0,i.jsx)(n.a,{href:"/api/graphql/introspection#gettypedirectivevalues",children:"getTypeDirectiveValues"})," and returns a matching record."]}),"\n",(0,i.jsx)(n.h3,{id:"parameters-8",children:"Parameters"}),"\n",(0,i.jsx)(n.h4,{id:"directive",children:"directive"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GraphQLDirective"})}),"\n",(0,i.jsx)(n.p,{children:"a GraphQL directive defined in the schema."}),"\n",(0,i.jsx)(n.h4,{id:"node",children:"node"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"unknown"})}),"\n",(0,i.jsx)(n.h4,{id:"argname",children:"argName"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"string"})}),"\n",(0,i.jsx)(n.p,{children:"the name of the GraphQL directive argument to fetch the value from."}),"\n",(0,i.jsx)(n.h3,{id:"returns-8",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Maybe"}),"<",(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"Record"}),"<",(0,i.jsx)(n.code,{children:"string"}),", ",(0,i.jsx)(n.code,{children:"unknown"}),">>"]}),"\n",(0,i.jsxs)(n.p,{children:["a record k/v with ",(0,i.jsx)(n.code,{children:"argName"})," as key and the argument's value."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"gettypedirectivevalues",children:"getTypeDirectiveValues()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function getTypeDirectiveValues(directive, type): Maybe<Record<string, unknown>>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Defined in: packages/graphql/src/introspection.ts:258"}),"\n",(0,i.jsx)(n.p,{children:"Returns all directive's arguments' values linked to a GraphQL schema type."}),"\n",(0,i.jsx)(n.h3,{id:"parameters-9",children:"Parameters"}),"\n",(0,i.jsx)(n.h4,{id:"directive-1",children:"directive"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GraphQLDirective"})}),"\n",(0,i.jsx)(n.p,{children:"a GraphQL directive defined in the schema."}),"\n",(0,i.jsx)(n.h4,{id:"type-2",children:"type"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"unknown"})}),"\n",(0,i.jsx)(n.p,{children:"the GraphQL schema type to parse."}),"\n",(0,i.jsx)(n.h3,{id:"returns-9",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Maybe"}),"<",(0,i.jsx)(n.code,{children:"Record"}),"<",(0,i.jsx)(n.code,{children:"string"}),", ",(0,i.jsx)(n.code,{children:"unknown"}),">>"]}),"\n",(0,i.jsx)(n.p,{children:"a record k/v with arguments' name as keys and arguments' value."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"gettypefromschema",children:"getTypeFromSchema()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function getTypeFromSchema<T>(schema, type): Maybe<Record<string, T>>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Defined in: packages/graphql/src/introspection.ts:61"}),"\n",(0,i.jsxs)(n.p,{children:["Returns a map of GraphQL named types from a schema for a defined GraphQL type.\nWhen parsing the entities, internal GraphQL entities (starting with ",(0,i.jsx)(n.code,{children:"__"}),") are excluded."]}),"\n",(0,i.jsx)(n.h3,{id:"type-parameters-1",children:"Type Parameters"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.strong,{children:"T"})]}),"\n",(0,i.jsx)(n.h3,{id:"parameters-10",children:"Parameters"}),"\n",(0,i.jsx)(n.h4,{id:"schema-1",children:"schema"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Maybe"}),"<",(0,i.jsx)(n.code,{children:"GraphQLSchema"}),">"]}),"\n",(0,i.jsx)(n.p,{children:"a GraphQL schema."}),"\n",(0,i.jsx)(n.h4,{id:"type-3",children:"type"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"unknown"})}),"\n",(0,i.jsxs)(n.p,{children:["a GraphQL type, eg ",(0,i.jsx)(n.code,{children:"GraphQLObjectType"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"returns-10",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Maybe"}),"<",(0,i.jsx)(n.code,{children:"Record"}),"<",(0,i.jsx)(n.code,{children:"string"}),", ",(0,i.jsx)(n.code,{children:"T"}),">>"]}),"\n",(0,i.jsx)(n.p,{children:"a map of GraphQL named types for the matching GraphQL type, or undefined if no match."}),"\n",(0,i.jsx)(n.h3,{id:"see",children:"See"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/api/graphql/introspection#getschemamap",children:"getSchemaMap"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"gettypename",children:"getTypeName()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function getTypeName(type, defaultName): string\n"})}),"\n",(0,i.jsx)(n.p,{children:"Defined in: packages/graphql/src/introspection.ts:409"}),"\n",(0,i.jsx)(n.p,{children:"Resolves the name of a GraphQL schema type."}),"\n",(0,i.jsx)(n.h3,{id:"parameters-11",children:"Parameters"}),"\n",(0,i.jsx)(n.h4,{id:"type-4",children:"type"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"unknown"})}),"\n",(0,i.jsx)(n.h4,{id:"defaultname",children:"defaultName"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"string"})," = ",(0,i.jsx)(n.code,{children:'""'})]}),"\n",(0,i.jsx)(n.p,{children:"optional fallback value if the name resolution fails."}),"\n",(0,i.jsx)(n.h3,{id:"returns-11",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"string"})}),"\n",(0,i.jsxs)(n.p,{children:["the type's name, or ",(0,i.jsx)(n.code,{children:"defaultName"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"hasastnode",children:"hasAstNode()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function hasAstNode<T>(node): node is AstNodeType<T>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Defined in: packages/graphql/src/introspection.ts:109"}),"\n",(0,i.jsx)(n.p,{children:"Type guard for type with an AST node property."}),"\n",(0,i.jsx)(n.h3,{id:"type-parameters-2",children:"Type Parameters"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.strong,{children:"T"})]}),"\n",(0,i.jsx)(n.h3,{id:"parameters-12",children:"Parameters"}),"\n",(0,i.jsx)(n.h4,{id:"node-1",children:"node"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"T"})}),"\n",(0,i.jsx)(n.p,{children:"a GraphQL schema named type."}),"\n",(0,i.jsx)(n.h3,{id:"returns-12",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"node is AstNodeType<T>"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"true"})," if the entity has an AST node property, else ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"hasdirective",children:"hasDirective()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function hasDirective(\n   entity, \n   directives, \n   fallback): boolean\n"})}),"\n",(0,i.jsx)(n.p,{children:"Defined in: packages/graphql/src/introspection.ts:188"}),"\n",(0,i.jsx)(n.p,{children:"Checks if a schema entity as a directive belonging to a defined set."}),"\n",(0,i.jsx)(n.h3,{id:"parameters-13",children:"Parameters"}),"\n",(0,i.jsx)(n.h4,{id:"entity-1",children:"entity"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"unknown"})}),"\n",(0,i.jsx)(n.p,{children:"a GraphQL schema entity."}),"\n",(0,i.jsx)(n.h4,{id:"directives-1",children:"directives"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Maybe"}),"<",(0,i.jsx)(n.code,{children:"GraphQLDirective"}),"[]>"]}),"\n",(0,i.jsx)(n.p,{children:"a directive name or a list of directive names."}),"\n",(0,i.jsx)(n.h4,{id:"fallback-1",children:"fallback"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"boolean"})," = ",(0,i.jsx)(n.code,{children:"false"})]}),"\n",(0,i.jsx)(n.p,{children:"default value if the entity type is not a valid location for directives."}),"\n",(0,i.jsx)(n.h3,{id:"returns-13",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"boolean"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"true"})," if the entity has at least one directive matching, else ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"isvaliddirectivelocation",children:"isValidDirectiveLocation()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function isValidDirectiveLocation(entity, directive): boolean\n"})}),"\n",(0,i.jsx)(n.p,{children:"Defined in: packages/graphql/src/introspection.ts:167"}),"\n",(0,i.jsx)(n.p,{children:"Check if a directive can be applied to specific schema entity location."}),"\n",(0,i.jsx)(n.h3,{id:"parameters-14",children:"Parameters"}),"\n",(0,i.jsx)(n.h4,{id:"entity-2",children:"entity"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"unknown"})}),"\n",(0,i.jsx)(n.p,{children:"a GraphQL schema entity."}),"\n",(0,i.jsx)(n.h4,{id:"directive-2",children:"directive"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GraphQLDirective"})}),"\n",(0,i.jsx)(n.p,{children:"a directive name."}),"\n",(0,i.jsx)(n.h3,{id:"returns-14",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"boolean"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"true"})," if the entity is a valid directive location, else ",(0,i.jsx)(n.code,{children:"false"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>d});var i=r(96540);const s={},t=i.createContext(s);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);