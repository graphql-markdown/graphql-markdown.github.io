"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["1699"],{43612:function(e,i,t){t.r(i),t.d(i,{default:()=>h,frontMatter:()=>s,metadata:()=>n,assets:()=>a,toc:()=>o,contentTitle:()=>d});var n=JSON.parse('{"id":"graphql/directive","title":"directive","description":"Library supporting customDirective for directive based customization.","source":"@site/api/graphql/directive.md","sourceDirName":"graphql","slug":"/graphql/directive","permalink":"/api/graphql/directive","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"directive","pagination_prev":null,"pagination_next":null,"toc_max_heading_level":2},"sidebar":"defaultSidebar"}'),c=t("85893"),r=t("50065");let s={title:"directive",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},d=void 0,a={},o=[{value:"See",id:"see",level:2},{value:"WILDCARD_DIRECTIVE",id:"wildcard_directive",level:2},{value:"getConstDirectiveMap()",id:"getconstdirectivemap",level:2},{value:"Parameters",id:"parameters",level:3},{value:"entity",id:"entity",level:4},{value:"customDirectiveMap",id:"customdirectivemap",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"getCustomDirectiveOptions()",id:"getcustomdirectiveoptions",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"schemaDirectiveName",id:"schemadirectivename",level:4},{value:"customDirectiveOptions",id:"customdirectiveoptions",level:4},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"getCustomDirectives()",id:"getcustomdirectives",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"schemaMap",id:"schemamap",level:4},{value:"customDirectiveOptions?",id:"customdirectiveoptions-1",level:4},{value:"Returns",id:"returns-2",level:3},{value:"Example",id:"example-2",level:3},{value:"isCustomDirective()",id:"iscustomdirective",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"schemaDirectiveName",id:"schemadirectivename-1",level:4},{value:"customDirectiveOptions",id:"customdirectiveoptions-2",level:4},{value:"Returns",id:"returns-3",level:3}];function l(e){let i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(i.p,{children:["Library supporting ",(0,c.jsx)(i.code,{children:"customDirective"})," for directive based customization."]}),"\n",(0,c.jsx)(i.h2,{id:"see",children:"See"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsxs)(i.a,{href:"https://graphql-markdown.dev/docs/advanced/custom-directive",children:["Option ",(0,c.jsx)(i.code,{children:"customDirective"})]})}),"\n",(0,c.jsx)(i.h2,{id:"wildcard_directive",children:"WILDCARD_DIRECTIVE"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-ts",children:'const WILDCARD_DIRECTIVE: "*";\n'})}),"\n",(0,c.jsx)(i.p,{children:"Defined in: packages/graphql/src/directive.ts:29"}),"\n",(0,c.jsxs)(i.p,{children:["Wildcard ",(0,c.jsx)(i.code,{children:"*"})," character for matching any directive name."]}),"\n",(0,c.jsxs)(i.p,{children:["See ",(0,c.jsx)(i.a,{href:"#getcustomdirectiveoptions",children:"getCustomDirectiveOptions"}),", ",(0,c.jsx)(i.a,{href:"#iscustomdirective",children:"isCustomDirective"})]}),"\n",(0,c.jsx)(i.hr,{}),"\n",(0,c.jsx)(i.h2,{id:"getconstdirectivemap",children:"getConstDirectiveMap()"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-ts",children:"function getConstDirectiveMap(entity, customDirectiveMap): Maybe<CustomDirectiveMap>\n"})}),"\n",(0,c.jsx)(i.p,{children:"Defined in: packages/graphql/src/directive.ts:249"}),"\n",(0,c.jsx)(i.p,{children:"Returns a map of custom directives for a schema entity."}),"\n",(0,c.jsx)(i.h3,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsx)(i.h4,{id:"entity",children:"entity"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.code,{children:"unknown"})}),"\n",(0,c.jsx)(i.p,{children:"a GraphQL schema entity."}),"\n",(0,c.jsx)(i.h4,{id:"customdirectivemap",children:"customDirectiveMap"}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"Maybe"}),"<",(0,c.jsx)(i.code,{children:"CustomDirectiveMap"}),">"]}),"\n",(0,c.jsxs)(i.p,{children:["a custom directive map (see ",(0,c.jsx)(i.a,{href:"#getcustomdirectives",children:"getCustomDirectives"}),")."]}),"\n",(0,c.jsx)(i.h3,{id:"returns",children:"Returns"}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"Maybe"}),"<",(0,c.jsx)(i.code,{children:"CustomDirectiveMap"}),">"]}),"\n",(0,c.jsxs)(i.p,{children:["a map of GraphQL directives matching the custom directives defined, else ",(0,c.jsx)(i.code,{children:"undefined"}),"."]}),"\n",(0,c.jsx)(i.h3,{id:"example",children:"Example"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-js",children:'import { buildSchema } from "graphql";\nimport { getConstDirectiveMap } from "@graphql-markdown/utils/directive";\n\nconst schema = buildSchema(`\n    directive @testA(\n      arg: ArgEnum = ARGA\n    ) on OBJECT | FIELD_DEFINITION\n\n    directive @testB(\n      argA: Int!,\n      argB: [String!]\n    ) on FIELD_DEFINITION\n\n    enum ArgEnum {\n      ARGA\n      ARGB\n      ARGC\n    }\n\n    type Test @testA {\n      id: ID!\n      fieldA: [String!]\n        @testA(arg: ARGC)\n        @testB(argA: 10, argB: ["testArgB"])\n    }\n\n    type TestWithoutDirective {\n      id: ID!\n    }\n  `);\n\nconst customDirectives = {\n  testA: {\n    type: schema.getDirective("testA"),\n    descriptor: (_, constDirectiveType) => `${constDirectiveType.name}`;\n  },\n};\n\nconst map = getConstDirectiveMap(schema.getType("Test"), customDirectives);\n// Expected result: {\n//   "descriptor": (_, constDirectiveType) => `${constDirectiveType.name}`,\n//   "type": schema.getDirective("testA"),\n// }\n\n'})}),"\n",(0,c.jsx)(i.hr,{}),"\n",(0,c.jsx)(i.h2,{id:"getcustomdirectiveoptions",children:"getCustomDirectiveOptions()"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-ts",children:"function getCustomDirectiveOptions(schemaDirectiveName, customDirectiveOptions): Maybe<Partial<Record<CustomDirectiveResolver, CustomDirectiveFunction>>>\n"})}),"\n",(0,c.jsx)(i.p,{children:"Defined in: packages/graphql/src/directive.ts:77"}),"\n",(0,c.jsx)(i.p,{children:"Returns a record set of custom handlers from a directive by name."}),"\n",(0,c.jsx)(i.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,c.jsx)(i.h4,{id:"schemadirectivename",children:"schemaDirectiveName"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.code,{children:"DirectiveName"})}),"\n",(0,c.jsx)(i.p,{children:"the GraphQL directive name."}),"\n",(0,c.jsx)(i.h4,{id:"customdirectiveoptions",children:"customDirectiveOptions"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.code,{children:"CustomDirective"})}),"\n",(0,c.jsxs)(i.p,{children:["the ",(0,c.jsx)(i.code,{children:"customDirective"})," option."]}),"\n",(0,c.jsx)(i.h3,{id:"returns-1",children:"Returns"}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"Maybe"}),"<",(0,c.jsx)(i.code,{children:"Partial"}),"<",(0,c.jsx)(i.code,{children:"Record"}),"<",(0,c.jsx)(i.code,{children:"CustomDirectiveResolver"}),", ",(0,c.jsx)(i.code,{children:"CustomDirectiveFunction"}),">>>"]}),"\n",(0,c.jsxs)(i.p,{children:["a record set of custom handlers for the matching directive (or if ",(0,c.jsx)(i.code,{children:"*"})," is declared), or undefined if no match."]}),"\n",(0,c.jsx)(i.h3,{id:"example-1",children:"Example"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-js",children:'import { getCustomDirectiveOptions } from "@graphql-markdown/utils/directive";\n\nconst customDirectiveOptions = {\n  "*": {\n    descriptor: (_, constDirectiveType) => `Wildcard ${constDirectiveType.name}`;\n  },\n};\n\nconst customDirectives = getCustomDirectiveOptions("testB", customDirectiveOptions);\n\n// Expected result: {\n//   "descriptor": (_, constDirectiveType) => `Wildcard ${constDirectiveType.name}`,\n//   "type": "@testB",\n// }\n'})}),"\n",(0,c.jsx)(i.hr,{}),"\n",(0,c.jsx)(i.h2,{id:"getcustomdirectives",children:"getCustomDirectives()"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-ts",children:"function getCustomDirectives(schemaMap, customDirectiveOptions?): Maybe<CustomDirectiveMap>\n"})}),"\n",(0,c.jsx)(i.p,{children:"Defined in: packages/graphql/src/directive.ts:151"}),"\n",(0,c.jsxs)(i.p,{children:["Returns a custom directives map with custom handlers from ",(0,c.jsx)(i.code,{children:"customDirective"}),"."]}),"\n",(0,c.jsx)(i.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,c.jsx)(i.h4,{id:"schemamap",children:"schemaMap"}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"Pick"}),"<",(0,c.jsx)(i.code,{children:"SchemaMap"}),", ",(0,c.jsx)(i.code,{children:'"directives"'}),">"]}),"\n",(0,c.jsxs)(i.p,{children:["the GraphQL schema map returned by ",(0,c.jsx)(i.a,{href:"/api/graphql/introspection#getschemamap",children:"introspection!getSchemaMap"})]}),"\n",(0,c.jsx)(i.h4,{id:"customdirectiveoptions-1",children:"customDirectiveOptions?"}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"Maybe"}),"<",(0,c.jsx)(i.code,{children:"CustomDirective"}),">"]}),"\n",(0,c.jsxs)(i.p,{children:["the ",(0,c.jsx)(i.code,{children:"customDirective"})," option."]}),"\n",(0,c.jsx)(i.h3,{id:"returns-2",children:"Returns"}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"Maybe"}),"<",(0,c.jsx)(i.code,{children:"CustomDirectiveMap"}),">"]}),"\n",(0,c.jsx)(i.p,{children:"a custom directive map, or undefined if no match."}),"\n",(0,c.jsx)(i.h3,{id:"example-2",children:"Example"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-js",children:'import { buildSchema } from "graphql";\nimport { getCustomDirectives } from "@graphql-markdown/utils/directive";\n\nconst schema = buildSchema(`\n  directive @testA(\n    arg: ArgEnum = ARGA\n  ) on OBJECT | FIELD_DEFINITION\n  directive @testB(\n    argA: Int!,\n    argB: [String!]\n  ) on FIELD_DEFINITION\n  enum ArgEnum {\n    ARGA\n    ARGB\n    ARGC\n  }\n`);\n\nconst schemaMap = {\n  directives: {\n    testA: schema.getDirective("testA"),\n    testB: schema.getDirective("testB"),\n  },\n};\n\nconst customDirectiveOptions = {\n  testA: {\n    descriptor: (_, constDirectiveType) => `Named directive ${constDirectiveType.name}`;\n  },\n  "*": {\n    descriptor: (_, constDirectiveType) => `Wildcard ${constDirectiveType.name}`;\n  },\n};\n\nconst customDirectives = getCustomDirectives(schemaMap, customDirectiveOptions);\n\n// Expected result: {\n//   "testA": {\n//     "descriptor": (_, constDirectiveType) => `Named directive ${constDirectiveType.name}`,\n//     "type": "@testA",\n//   },\n//   "testB": {\n//     "descriptor": (_, constDirectiveType) => `Wildcard ${constDirectiveType.name}`,\n//     "type": "@testB",\n//   },\n// }\n'})}),"\n",(0,c.jsx)(i.hr,{}),"\n",(0,c.jsx)(i.h2,{id:"iscustomdirective",children:"isCustomDirective()"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-ts",children:"function isCustomDirective(schemaDirectiveName, customDirectiveOptions): boolean\n"})}),"\n",(0,c.jsx)(i.p,{children:"Defined in: packages/graphql/src/directive.ts:40"}),"\n",(0,c.jsxs)(i.p,{children:["Checks if a directive name is referenced in ",(0,c.jsx)(i.code,{children:"customDirective"})," option."]}),"\n",(0,c.jsx)(i.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,c.jsx)(i.h4,{id:"schemadirectivename-1",children:"schemaDirectiveName"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.code,{children:"DirectiveName"})}),"\n",(0,c.jsx)(i.p,{children:"the GraphQL directive name."}),"\n",(0,c.jsx)(i.h4,{id:"customdirectiveoptions-2",children:"customDirectiveOptions"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.code,{children:"CustomDirective"})}),"\n",(0,c.jsxs)(i.p,{children:["the ",(0,c.jsx)(i.code,{children:"customDirective"})," option."]}),"\n",(0,c.jsx)(i.h3,{id:"returns-3",children:"Returns"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.code,{children:"boolean"})}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"true"})," if the directive is declared or ",(0,c.jsx)(i.code,{children:"*"})," is declared in ",(0,c.jsx)(i.code,{children:"customDirective"})," option, else ",(0,c.jsx)(i.code,{children:"false"}),"."]})]})}function h(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,c.jsx)(i,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return d},a:function(){return s}});var n=t(67294);let c={},r=n.createContext(c);function s(e){let i=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);