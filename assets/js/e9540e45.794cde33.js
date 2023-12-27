"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[1219],{1574:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var a=r(5893),s=r(1151);const t={title:"relation",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},i=void 0,l={id:"graphql/relation",title:"relation",description:"Library supporting relatedTypeSection for displaying relations between GraphQL schema entities.",source:"@site/api/graphql/relation.md",sourceDirName:"graphql",slug:"/graphql/relation",permalink:"/api/graphql/relation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"relation",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},c={},h=[{value:"See",id:"see",level:2},{value:"getRelationOfField()",id:"getrelationoffield",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"See",id:"see-1",level:3},{value:"Source",id:"source",level:3},{value:"getRelationOfImplementation()",id:"getrelationofimplementation",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"See",id:"see-2",level:3},{value:"Source",id:"source-1",level:3},{value:"getRelationOfInterface()",id:"getrelationofinterface",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Returns",id:"returns-2",level:3},{value:"See",id:"see-3",level:3},{value:"Source",id:"source-2",level:3},{value:"getRelationOfReturn()",id:"getrelationofreturn",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Returns",id:"returns-3",level:3},{value:"See",id:"see-4",level:3},{value:"Source",id:"source-3",level:3},{value:"getRelationOfUnion()",id:"getrelationofunion",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"Returns",id:"returns-4",level:3},{value:"See",id:"see-5",level:3},{value:"Source",id:"source-4",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Library supporting ",(0,a.jsx)(n.code,{children:"relatedTypeSection"})," for displaying relations between GraphQL schema entities."]}),"\n",(0,a.jsx)(n.h2,{id:"see",children:"See"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.a,{href:"https://graphql-markdown.github.io/docs/settings#printtypeoptions",children:["Option ",(0,a.jsx)(n.code,{children:"relatedTypeSection"})]})}),"\n",(0,a.jsx)(n.h2,{id:"getrelationoffield",children:"getRelationOfField()"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"getRelationOfField(type, schemaMap): Partial<Record<SchemaEntity, RelationOfField[]>>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Returns a map of fields and arguments where the GraphQL schema type matches the type."}),"\n",(0,a.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.p,{children:["\u2022 ",(0,a.jsx)(n.strong,{children:"type"}),": ",(0,a.jsx)(n.code,{children:"unknown"})]}),"\n",(0,a.jsx)(n.p,{children:"the GraphQL schema type being processed."}),"\n",(0,a.jsxs)(n.p,{children:["\u2022 ",(0,a.jsx)(n.strong,{children:"schemaMap"}),": ",(0,a.jsx)(n.code,{children:"Maybe"}),"<",(0,a.jsx)(n.code,{children:"SchemaMap"}),">"]}),"\n",(0,a.jsxs)(n.p,{children:["a GraphQL schema map (see ",(0,a.jsx)(n.a,{href:"/api/graphql/introspection#getschemamap",children:"introspection!getSchemaMap"}),")."]}),"\n",(0,a.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Partial"}),"<",(0,a.jsx)(n.code,{children:"Record"}),"<",(0,a.jsx)(n.code,{children:"SchemaEntity"}),", ",(0,a.jsx)(n.code,{children:"RelationOfField"}),"[]>>"]}),"\n",(0,a.jsx)(n.p,{children:"a record map of fields and arguments relations."}),"\n",(0,a.jsx)(n.h3,{id:"see-1",children:"See"}),"\n",(0,a.jsx)(n.p,{children:"[mapRelationOf]([object Object])"}),"\n",(0,a.jsx)(n.h3,{id:"source",children:"Source"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/340ef96/packages/types/src/graphql.d.ts#L79",children:"packages/types/src/graphql.d.ts:79"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"getrelationofimplementation",children:"getRelationOfImplementation()"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"getRelationOfImplementation(type, schemaMap): Partial<Record<SchemaEntity, RelationOfImplementation[]>>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Returns a map of types (unions or interfaces) where the GraphQL schema type is implemented."}),"\n",(0,a.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,a.jsxs)(n.p,{children:["\u2022 ",(0,a.jsx)(n.strong,{children:"type"}),": ",(0,a.jsx)(n.code,{children:"unknown"})]}),"\n",(0,a.jsx)(n.p,{children:"the GraphQL schema type being processed."}),"\n",(0,a.jsxs)(n.p,{children:["\u2022 ",(0,a.jsx)(n.strong,{children:"schemaMap"}),": ",(0,a.jsx)(n.code,{children:"Maybe"}),"<",(0,a.jsx)(n.code,{children:"SchemaMap"}),">"]}),"\n",(0,a.jsxs)(n.p,{children:["a GraphQL schema map (see ",(0,a.jsx)(n.a,{href:"/api/graphql/introspection#getschemamap",children:"introspection!getSchemaMap"}),")."]}),"\n",(0,a.jsx)(n.h3,{id:"returns-1",children:"Returns"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Partial"}),"<",(0,a.jsx)(n.code,{children:"Record"}),"<",(0,a.jsx)(n.code,{children:"SchemaEntity"}),", ",(0,a.jsx)(n.code,{children:"RelationOfImplementation"}),"[]>>"]}),"\n",(0,a.jsx)(n.p,{children:"a record map of unions or interfaces relations."}),"\n",(0,a.jsx)(n.h3,{id:"see-2",children:"See"}),"\n",(0,a.jsx)(n.p,{children:"[mapRelationOf]([object Object])"}),"\n",(0,a.jsx)(n.h3,{id:"source-1",children:"Source"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/340ef96/packages/types/src/graphql.d.ts#L79",children:"packages/types/src/graphql.d.ts:79"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"getrelationofinterface",children:"getRelationOfInterface()"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"getRelationOfInterface(type, schemaMap): Partial<Record<SchemaEntity, RelationOfInterface[]>>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Returns a map of interfaces where the GraphQL schema type is extended."}),"\n",(0,a.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,a.jsxs)(n.p,{children:["\u2022 ",(0,a.jsx)(n.strong,{children:"type"}),": ",(0,a.jsx)(n.code,{children:"unknown"})]}),"\n",(0,a.jsx)(n.p,{children:"the GraphQL schema type being processed."}),"\n",(0,a.jsxs)(n.p,{children:["\u2022 ",(0,a.jsx)(n.strong,{children:"schemaMap"}),": ",(0,a.jsx)(n.code,{children:"Maybe"}),"<",(0,a.jsx)(n.code,{children:"SchemaMap"}),">"]}),"\n",(0,a.jsxs)(n.p,{children:["a GraphQL schema map (see ",(0,a.jsx)(n.a,{href:"/api/graphql/introspection#getschemamap",children:"introspection!getSchemaMap"}),")."]}),"\n",(0,a.jsx)(n.h3,{id:"returns-2",children:"Returns"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Partial"}),"<",(0,a.jsx)(n.code,{children:"Record"}),"<",(0,a.jsx)(n.code,{children:"SchemaEntity"}),", ",(0,a.jsx)(n.code,{children:"RelationOfInterface"}),"[]>>"]}),"\n",(0,a.jsx)(n.p,{children:"a record map of interfaces relations."}),"\n",(0,a.jsx)(n.h3,{id:"see-3",children:"See"}),"\n",(0,a.jsx)(n.p,{children:"[mapRelationOf]([object Object])"}),"\n",(0,a.jsx)(n.h3,{id:"source-2",children:"Source"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/340ef96/packages/types/src/graphql.d.ts#L79",children:"packages/types/src/graphql.d.ts:79"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"getrelationofreturn",children:"getRelationOfReturn()"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"getRelationOfReturn(type, schemaMap): Partial<Record<SchemaEntity, GraphQLOperationType[]>>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Returns a map of operations (queries, mutations, subscriptions) where the GraphQL schema type is the return type."}),"\n",(0,a.jsx)(n.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,a.jsxs)(n.p,{children:["\u2022 ",(0,a.jsx)(n.strong,{children:"type"}),": ",(0,a.jsx)(n.code,{children:"unknown"})]}),"\n",(0,a.jsx)(n.p,{children:"the GraphQL schema type being processed."}),"\n",(0,a.jsxs)(n.p,{children:["\u2022 ",(0,a.jsx)(n.strong,{children:"schemaMap"}),": ",(0,a.jsx)(n.code,{children:"Maybe"}),"<",(0,a.jsx)(n.code,{children:"SchemaMap"}),">"]}),"\n",(0,a.jsxs)(n.p,{children:["a GraphQL schema map (see ",(0,a.jsx)(n.a,{href:"/api/graphql/introspection#getschemamap",children:"introspection!getSchemaMap"}),")."]}),"\n",(0,a.jsx)(n.h3,{id:"returns-3",children:"Returns"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Partial"}),"<",(0,a.jsx)(n.code,{children:"Record"}),"<",(0,a.jsx)(n.code,{children:"SchemaEntity"}),", ",(0,a.jsx)(n.code,{children:"GraphQLOperationType"}),"[]>>"]}),"\n",(0,a.jsx)(n.p,{children:"a record map of operations relations."}),"\n",(0,a.jsx)(n.h3,{id:"see-4",children:"See"}),"\n",(0,a.jsx)(n.p,{children:"[mapRelationOf]([object Object])"}),"\n",(0,a.jsx)(n.h3,{id:"source-3",children:"Source"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/340ef96/packages/types/src/graphql.d.ts#L79",children:"packages/types/src/graphql.d.ts:79"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"getrelationofunion",children:"getRelationOfUnion()"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"getRelationOfUnion(type, schemaMap): Partial<Record<SchemaEntity, GraphQLUnionType[]>>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Returns a map of unions where the GraphQL schema type is part of it."}),"\n",(0,a.jsx)(n.h3,{id:"parameters-4",children:"Parameters"}),"\n",(0,a.jsxs)(n.p,{children:["\u2022 ",(0,a.jsx)(n.strong,{children:"type"}),": ",(0,a.jsx)(n.code,{children:"unknown"})]}),"\n",(0,a.jsx)(n.p,{children:"the GraphQL schema type being processed."}),"\n",(0,a.jsxs)(n.p,{children:["\u2022 ",(0,a.jsx)(n.strong,{children:"schemaMap"}),": ",(0,a.jsx)(n.code,{children:"Maybe"}),"<",(0,a.jsx)(n.code,{children:"SchemaMap"}),">"]}),"\n",(0,a.jsxs)(n.p,{children:["a GraphQL schema map (see ",(0,a.jsx)(n.a,{href:"/api/graphql/introspection#getschemamap",children:"introspection!getSchemaMap"}),")."]}),"\n",(0,a.jsx)(n.h3,{id:"returns-4",children:"Returns"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Partial"}),"<",(0,a.jsx)(n.code,{children:"Record"}),"<",(0,a.jsx)(n.code,{children:"SchemaEntity"}),", ",(0,a.jsx)(n.code,{children:"GraphQLUnionType"}),"[]>>"]}),"\n",(0,a.jsx)(n.p,{children:"a record map of unions relations."}),"\n",(0,a.jsx)(n.h3,{id:"see-5",children:"See"}),"\n",(0,a.jsx)(n.p,{children:"[mapRelationOf]([object Object])"}),"\n",(0,a.jsx)(n.h3,{id:"source-4",children:"Source"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/340ef96/packages/types/src/graphql.d.ts#L79",children:"packages/types/src/graphql.d.ts:79"})})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>i});var a=r(7294);const s={},t=a.createContext(s);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);