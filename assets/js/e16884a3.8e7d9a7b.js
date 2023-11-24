"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[5310],{3985:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var t=r(5893),n=r(1151);const s={title:"directive",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},c=void 0,a={id:"graphql/directive",title:"directive",description:"Library supporting customDirective for directive based customization.",source:"@site/api/graphql/directive.md",sourceDirName:"graphql",slug:"/graphql/directive",permalink:"/api/graphql/directive",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"directive",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},d={},o=[{value:"See",id:"see",level:2},{value:"WILDCARD_DIRECTIVE",id:"wildcard_directive",level:2},{value:"Source",id:"source",level:3},{value:"getConstDirectiveMap()",id:"getconstdirectivemap",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"Source",id:"source-1",level:3},{value:"getCustomDirectiveOptions()",id:"getcustomdirectiveoptions",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"Source",id:"source-2",level:3},{value:"getCustomDirectives()",id:"getcustomdirectives",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Returns",id:"returns-2",level:3},{value:"Example",id:"example-2",level:3},{value:"Source",id:"source-3",level:3},{value:"isCustomDirective()",id:"iscustomdirective",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Returns",id:"returns-3",level:3},{value:"Source",id:"source-4",level:3}];function l(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["Library supporting ",(0,t.jsx)(i.code,{children:"customDirective"})," for directive based customization."]}),"\n",(0,t.jsx)(i.h2,{id:"see",children:"See"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsxs)(i.a,{href:"https://graphql-markdown.github.io/docs/advanced/custom-directive",children:["Option ",(0,t.jsx)(i.code,{children:"customDirective"})]})}),"\n",(0,t.jsx)(i.h2,{id:"wildcard_directive",children:"WILDCARD_DIRECTIVE"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ts",children:'const WILDCARD_DIRECTIVE: "*";\n'})}),"\n",(0,t.jsxs)(i.p,{children:["Wildcard ",(0,t.jsx)(i.code,{children:"*"})," character for matching any directive name."]}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"/api/graphql/directive#getcustomdirectiveoptions",children:"getCustomDirectiveOptions"}),", ",(0,t.jsx)(i.a,{href:"/api/graphql/directive#iscustomdirective",children:"isCustomDirective"})]}),"\n",(0,t.jsx)(i.h3,{id:"source",children:"Source"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/9a72a43/packages/graphql/src/directive.ts#L28",children:"packages/graphql/src/directive.ts:28"})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"getconstdirectivemap",children:"getConstDirectiveMap()"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ts",children:"getConstDirectiveMap(entity, customDirectiveMap): Maybe<CustomDirectiveMap>\n"})}),"\n",(0,t.jsx)(i.p,{children:"Returns a map of custom directives for a schema entity."}),"\n",(0,t.jsx)(i.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(i.p,{children:["\u2022 ",(0,t.jsx)(i.strong,{children:"entity"}),": ",(0,t.jsx)(i.code,{children:"unknown"})]}),"\n",(0,t.jsx)(i.p,{children:"a GraphQL schema entity."}),"\n",(0,t.jsxs)(i.p,{children:["\u2022 ",(0,t.jsx)(i.strong,{children:"customDirectiveMap"}),": ",(0,t.jsx)(i.code,{children:"Maybe"}),"<",(0,t.jsx)(i.code,{children:"CustomDirectiveMap"}),">"]}),"\n",(0,t.jsxs)(i.p,{children:["a custom directive map (see ",(0,t.jsx)(i.a,{href:"/api/graphql/directive#getcustomdirectives",children:"getCustomDirectives"}),")."]}),"\n",(0,t.jsx)(i.h3,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"Maybe"}),"<",(0,t.jsx)(i.code,{children:"CustomDirectiveMap"}),">"]}),"\n",(0,t.jsxs)(i.p,{children:["a map of GraphQL directives matching the custom directives defined, else ",(0,t.jsx)(i.code,{children:"undefined"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:'import { buildSchema } from "graphql";\nimport { getConstDirectiveMap } from "@graphql-markdown/utils/directive";\n\nconst schema = buildSchema(`\n    directive @testA(\n      arg: ArgEnum = ARGA\n    ) on OBJECT | FIELD_DEFINITION\n\n    directive @testB(\n      argA: Int!,\n      argB: [String!]\n    ) on FIELD_DEFINITION\n\n    enum ArgEnum {\n      ARGA\n      ARGB\n      ARGC\n    }\n\n    type Test @testA {\n      id: ID!\n      fieldA: [String!]\n        @testA(arg: ARGC)\n        @testB(argA: 10, argB: ["testArgB"])\n    }\n\n    type TestWithoutDirective {\n      id: ID!\n    }\n  `);\n\nconst customDirectives = {\n  testA: {\n    type: schema.getDirective("testA"),\n    descriptor: (_, constDirectiveType) => `${constDirectiveType.name}`;\n  },\n};\n\nconst map = getConstDirectiveMap(schema.getType("Test"), customDirectives);\n// Expected result: {\n//   "descriptor": (_, constDirectiveType) => `${constDirectiveType.name}`,\n//   "type": schema.getDirective("testA"),\n// }\n\n'})}),"\n",(0,t.jsx)(i.h3,{id:"source-1",children:"Source"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/9a72a43/packages/graphql/src/directive.ts#L247",children:"packages/graphql/src/directive.ts:247"})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"getcustomdirectiveoptions",children:"getCustomDirectiveOptions()"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ts",children:"getCustomDirectiveOptions(schemaDirectiveName, customDirectiveOptions): Maybe<CustomDirectiveOptions>\n"})}),"\n",(0,t.jsx)(i.p,{children:"Returns a record set of custom handlers from a directive by name."}),"\n",(0,t.jsx)(i.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(i.p,{children:["\u2022 ",(0,t.jsx)(i.strong,{children:"schemaDirectiveName"}),": ",(0,t.jsx)(i.code,{children:"DirectiveName"})]}),"\n",(0,t.jsx)(i.p,{children:"the GraphQL directive name."}),"\n",(0,t.jsxs)(i.p,{children:["\u2022 ",(0,t.jsx)(i.strong,{children:"customDirectiveOptions"}),": ",(0,t.jsx)(i.code,{children:"CustomDirective"})]}),"\n",(0,t.jsxs)(i.p,{children:["the ",(0,t.jsx)(i.code,{children:"customDirective"})," option."]}),"\n",(0,t.jsx)(i.h3,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"Maybe"}),"<",(0,t.jsx)(i.code,{children:"CustomDirectiveOptions"}),">"]}),"\n",(0,t.jsxs)(i.p,{children:["a record set of custom handlers for the matching directive (or if ",(0,t.jsx)(i.code,{children:"*"})," is declared), or undefined if no match."]}),"\n",(0,t.jsx)(i.h3,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:'import { getCustomDirectiveOptions } from "@graphql-markdown/utils/directive";\n\nconst customDirectiveOptions = {\n  "*": {\n    descriptor: (_, constDirectiveType) => `Wildcard ${constDirectiveType.name}`;\n  },\n};\n\nconst customDirectives = getCustomDirectiveOptions("testB", customDirectiveOptions);\n\n// Expected result: {\n//   "descriptor": (_, constDirectiveType) => `Wildcard ${constDirectiveType.name}`,\n//   "type": "@testB",\n// }\n'})}),"\n",(0,t.jsx)(i.h3,{id:"source-2",children:"Source"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/9a72a43/packages/graphql/src/directive.ts#L76",children:"packages/graphql/src/directive.ts:76"})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"getcustomdirectives",children:"getCustomDirectives()"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ts",children:"getCustomDirectives(schemaMap, customDirectiveOptions?): Maybe<CustomDirectiveMap>\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Returns a custom directives map with custom handlers from ",(0,t.jsx)(i.code,{children:"customDirective"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(i.p,{children:["\u2022 ",(0,t.jsx)(i.strong,{children:"schemaMap"}),": ",(0,t.jsx)(i.code,{children:"Pick"}),"<",(0,t.jsx)(i.code,{children:"SchemaMap"}),", ",(0,t.jsx)(i.code,{children:'"directives"'}),">"]}),"\n",(0,t.jsxs)(i.p,{children:["the GraphQL schema map returned by ",(0,t.jsx)(i.a,{href:"/api/graphql/introspection#getschemamap",children:"introspection!getSchemaMap"})]}),"\n",(0,t.jsxs)(i.p,{children:["\u2022 ",(0,t.jsx)(i.strong,{children:"customDirectiveOptions?"}),": ",(0,t.jsx)(i.code,{children:"CustomDirective"})]}),"\n",(0,t.jsxs)(i.p,{children:["the ",(0,t.jsx)(i.code,{children:"customDirective"})," option."]}),"\n",(0,t.jsx)(i.h3,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"Maybe"}),"<",(0,t.jsx)(i.code,{children:"CustomDirectiveMap"}),">"]}),"\n",(0,t.jsx)(i.p,{children:"a custom directive map, or undefined if no match."}),"\n",(0,t.jsx)(i.h3,{id:"example-2",children:"Example"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:'import { buildSchema } from "graphql";\nimport { getCustomDirectives } from "@graphql-markdown/utils/directive";\n\nconst schema = buildSchema(`\n  directive @testA(\n    arg: ArgEnum = ARGA\n  ) on OBJECT | FIELD_DEFINITION\n  directive @testB(\n    argA: Int!,\n    argB: [String!]\n  ) on FIELD_DEFINITION\n  enum ArgEnum {\n    ARGA\n    ARGB\n    ARGC\n  }\n`);\n\nconst schemaMap = {\n  directives: {\n    testA: schema.getDirective("testA"),\n    testB: schema.getDirective("testB"),\n  },\n};\n\nconst customDirectiveOptions = {\n  testA: {\n    descriptor: (_, constDirectiveType) => `Named directive ${constDirectiveType.name}`;\n  },\n  "*": {\n    descriptor: (_, constDirectiveType) => `Wildcard ${constDirectiveType.name}`;\n  },\n};\n\nconst customDirectives = getCustomDirectives(schemaMap, customDirectiveOptions);\n\n// Expected result: {\n//   "testA": {\n//     "descriptor": (_, constDirectiveType) => `Named directive ${constDirectiveType.name}`,\n//     "type": "@testA",\n//   },\n//   "testB": {\n//     "descriptor": (_, constDirectiveType) => `Wildcard ${constDirectiveType.name}`,\n//     "type": "@testB",\n//   },\n// }\n'})}),"\n",(0,t.jsx)(i.h3,{id:"source-3",children:"Source"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/9a72a43/packages/graphql/src/directive.ts#L150",children:"packages/graphql/src/directive.ts:150"})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"iscustomdirective",children:"isCustomDirective()"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ts",children:"isCustomDirective(schemaDirectiveName, customDirectiveOptions): boolean\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Checks if a directive name is referenced in ",(0,t.jsx)(i.code,{children:"customDirective"})," option."]}),"\n",(0,t.jsx)(i.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,t.jsxs)(i.p,{children:["\u2022 ",(0,t.jsx)(i.strong,{children:"schemaDirectiveName"}),": ",(0,t.jsx)(i.code,{children:"DirectiveName"})]}),"\n",(0,t.jsx)(i.p,{children:"the GraphQL directive name."}),"\n",(0,t.jsxs)(i.p,{children:["\u2022 ",(0,t.jsx)(i.strong,{children:"customDirectiveOptions"}),": ",(0,t.jsx)(i.code,{children:"CustomDirective"})]}),"\n",(0,t.jsxs)(i.p,{children:["the ",(0,t.jsx)(i.code,{children:"customDirective"})," option."]}),"\n",(0,t.jsx)(i.h3,{id:"returns-3",children:"Returns"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"boolean"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"true"})," if the directive is declared or ",(0,t.jsx)(i.code,{children:"*"})," is declared in ",(0,t.jsx)(i.code,{children:"customDirective"})," option, else ",(0,t.jsx)(i.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"source-4",children:"Source"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/9a72a43/packages/graphql/src/directive.ts#L39",children:"packages/graphql/src/directive.ts:39"})})]})}function h(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,i,r)=>{r.d(i,{Z:()=>a,a:()=>c});var t=r(7294);const n={},s=t.createContext(n);function c(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);