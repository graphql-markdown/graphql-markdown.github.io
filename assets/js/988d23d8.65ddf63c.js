"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6657],{598:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>t,metadata:()=>s,toc:()=>p});var a=r(4848),i=r(8453);const t={title:"group",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},c=void 0,s={id:"graphql/group",title:"group",description:"Library supporting groupByDirective for grouping GraphQL schema entities.",source:"@site/api/graphql/group.md",sourceDirName:"graphql",slug:"/graphql/group",permalink:"/api/graphql/group",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"group",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},o={},p=[{value:"See",id:"see",level:2},{value:"getGroupName()",id:"getgroupname",level:2},{value:"Type parameters",id:"type-parameters",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"Source",id:"source",level:3},{value:"getGroups()",id:"getgroups",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"Source",id:"source-1",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Library supporting ",(0,a.jsx)(n.code,{children:"groupByDirective"})," for grouping GraphQL schema entities."]}),"\n",(0,a.jsx)(n.h2,{id:"see",children:"See"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.a,{href:"https://graphql-markdown.dev/docs/advanced/group-by-directive",children:["Option ",(0,a.jsx)(n.code,{children:"groupByDirective"})]})}),"\n",(0,a.jsx)(n.h2,{id:"getgroupname",children:"getGroupName()"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"getGroupName<T>(type, groupByDirective): Maybe<string>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Gets the group name for a schema type based on the directive information."}),"\n",(0,a.jsx)(n.h3,{id:"type-parameters",children:"Type parameters"}),"\n",(0,a.jsxs)(n.p,{children:["\u2022 ",(0,a.jsx)(n.strong,{children:"T"})]}),"\n",(0,a.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.p,{children:["\u2022 ",(0,a.jsx)(n.strong,{children:"type"}),": ",(0,a.jsx)(n.code,{children:"T"})]}),"\n",(0,a.jsx)(n.p,{children:"a GraphQL schema named type"}),"\n",(0,a.jsxs)(n.p,{children:["\u2022 ",(0,a.jsx)(n.strong,{children:"groupByDirective"}),": ",(0,a.jsx)(n.code,{children:"Maybe"}),"<",(0,a.jsx)(n.code,{children:"GroupByDirectiveOptions"}),">"]}),"\n",(0,a.jsxs)(n.p,{children:["the ",(0,a.jsx)(n.code,{children:"groupByDirective"})," option."]}),"\n",(0,a.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Maybe"}),"<",(0,a.jsx)(n.code,{children:"string"}),">"]}),"\n",(0,a.jsxs)(n.p,{children:["the group name matching the type, or ",(0,a.jsx)(n.code,{children:"groupByDirective.fallback"})," if no match found."]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'import { buildSchema } from "graphql";\nimport { getGroupName } from "@graphql-markdown/utils/groups";\n\nconst schema = buildSchema(`\n  directive @doc(\n    category: String\n  ) on OBJECT | INPUT_OBJECT | UNION | ENUM | INTERFACE | FIELD_DEFINITION | ARGUMENT_DEFINITION\n  type Unicorn {\n    name: String!\n  }\n  type Bird @doc(category: "animal") {\n    name: String!\n  }\n  type Fish {\n    name: String!\n  }\n  type Elf @doc(category: "fantasy") {\n    name: String!\n  }\n  type Query {\n    Fish: [Fish!]! @doc(category: "animal")\n  }\n`);\n\nconst groupOptions = {\n  fallback: "common",\n  directive: "doc",\n  field: "category",\n}\n\ngetGroupName(schema.getType("Bird"), groupOptions); // Expected result: "animal"\n\ngetGroupName(schema.getType("Unicorn"), groupOptions); // Expected result: "common"\n\n'})}),"\n",(0,a.jsx)(n.h3,{id:"source",children:"Source"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/db3543cf084a0a6879506122e66d3cbe34e1b69c/packages/graphql/src/group.ts#L72",children:"packages/graphql/src/group.ts:72"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"getgroups",children:"getGroups()"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"getGroups(schemaMap, groupByDirective): Maybe<Partial<Record<SchemaEntity, Record<string, Maybe<string>>>>>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Parses a GraphQL schema to build a map of entities with matching ",(0,a.jsx)(n.code,{children:"groupByDirective"})," option."]}),"\n",(0,a.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,a.jsxs)(n.p,{children:["\u2022 ",(0,a.jsx)(n.strong,{children:"schemaMap"}),": ",(0,a.jsx)(n.code,{children:"SchemaMap"})]}),"\n",(0,a.jsxs)(n.p,{children:["the GraphQL schema map returned by ",(0,a.jsx)(n.a,{href:"/api/graphql/introspection#getschemamap",children:"introspection!getSchemaMap"})]}),"\n",(0,a.jsxs)(n.p,{children:["\u2022 ",(0,a.jsx)(n.strong,{children:"groupByDirective"}),": ",(0,a.jsx)(n.code,{children:"Maybe"}),"<",(0,a.jsx)(n.code,{children:"GroupByDirectiveOptions"}),">"]}),"\n",(0,a.jsxs)(n.p,{children:["the ",(0,a.jsx)(n.code,{children:"groupByDirective"})," option."]}),"\n",(0,a.jsx)(n.h3,{id:"returns-1",children:"Returns"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Maybe"}),"<",(0,a.jsx)(n.code,{children:"Partial"}),"<",(0,a.jsx)(n.code,{children:"Record"}),"<",(0,a.jsx)(n.code,{children:"SchemaEntity"}),", ",(0,a.jsx)(n.code,{children:"Record"}),"<",(0,a.jsx)(n.code,{children:"string"}),", ",(0,a.jsx)(n.code,{children:"Maybe"}),"<",(0,a.jsx)(n.code,{children:"string"}),">>>>>"]}),"\n",(0,a.jsx)(n.p,{children:"a map of entities with matching group name."}),"\n",(0,a.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'import { buildSchema } from "graphql";\nimport { getGroups } from "@graphql-markdown/utils/groups";\n\nconst schema = buildSchema(`\n  directive @doc(\n    category: String\n  ) on OBJECT | INPUT_OBJECT | UNION | ENUM | INTERFACE | FIELD_DEFINITION | ARGUMENT_DEFINITION\n  type Unicorn {\n    name: String!\n  }\n  type Bird @doc(category: "animal") {\n    name: String!\n  }\n  type Fish {\n    name: String!\n  }\n  type Elf @doc(category: "fantasy") {\n    name: String!\n  }\n  type Query {\n    Fish: [Fish!]! @doc(category: "animal")\n  }\n`);\n\nconst schemaMap = {\n  objects: schema.getTypeMap(),\n  queries: schema.getQueryType()?.getFields(),\n};\n\nconst groupOptions = {\n  fallback: "common",\n  directive: "doc",\n  field: "category",\n}\n\nconst groupsMap = getGroups(schemaMap, groupOptions);\n\n// Expected result: {\n//   "objects": {\n//     "Bird": "animal",\n//     "Boolean": "common",\n//     "Elf": "fantasy",\n//     "Fish": "common",\n//     "Query": "common",\n//     "String": "common",\n//     "Unicorn": "common",\n//   },\n//   "queries": {\n//     "Fish": "animal",\n//   },\n// }\n'})}),"\n",(0,a.jsx)(n.h3,{id:"source-1",children:"Source"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/db3543cf084a0a6879506122e66d3cbe34e1b69c/packages/graphql/src/group.ts#L173",children:"packages/graphql/src/group.ts:173"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>s});var a=r(6540);const i={},t=a.createContext(i);function c(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);