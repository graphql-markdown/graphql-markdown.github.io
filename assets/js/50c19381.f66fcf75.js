"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2113],{62079:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var r=i(74848),t=i(28453);const s={title:"descriptor",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},d=void 0,c={id:"helpers/directives/descriptor",title:"descriptor",description:"Custom directive descriptor helper.",source:"@site/api/helpers/directives/descriptor.md",sourceDirName:"helpers/directives",slug:"/helpers/directives/descriptor",permalink:"/api/helpers/directives/descriptor",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"descriptor",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},a={},o=[{value:"See",id:"see",level:2},{value:"directiveDescriptor()",id:"directivedescriptor",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"Defined in",id:"defined-in",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Custom directive ",(0,r.jsx)(n.code,{children:"descriptor"})," helper."]}),"\n",(0,r.jsx)(n.h2,{id:"see",children:"See"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.a,{href:"https://graphql-markdown.dev/docs/advanced/custom-directive#descriptor",children:["Option ",(0,r.jsx)(n.code,{children:"customDirective.[directive].descriptor"})]})}),"\n",(0,r.jsx)(n.h2,{id:"directivedescriptor",children:"directiveDescriptor()"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function directiveDescriptor(\n   directive, \n   type?, \n   descriptionTemplate?): string\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Helper for rendering custom description from schema directive on type.\nThis is an example on how to build a custom ",(0,r.jsx)(n.code,{children:"descriptor"})," callback."]}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"directive"}),": ",(0,r.jsx)(n.code,{children:"GraphQLDirective"})]}),"\n",(0,r.jsx)(n.p,{children:"the schema directive to parse."}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"type?"}),": ",(0,r.jsx)(n.code,{children:"unknown"})]}),"\n",(0,r.jsx)(n.p,{children:"the schema type to be processed for generating a custom description."}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"descriptionTemplate?"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.p,{children:["optional template literal-like string for rendering the description (see ",(0,r.jsx)(n.a,{href:"/api/helpers/utils/interpolate#interpolate",children:"interpolate"}),"), if not present then the directive description will be used."]}),"\n",(0,r.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"string"})}),"\n",(0,r.jsx)(n.p,{children:"a custom description based on directive value."}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import { GraphQLDirective, GraphQLScalarType } from "graphql";\nimport { directiveDescriptor } from "@graphql-markdown/helpers/directives/descriptor";\n\nconst directive = new GraphQLDirective({\n  name: "version",\n  description: "Min version",\n  locations: [],\n  args: {\n    major: { type: GraphQLInt, defaultValue: 0 },\n    minor: { type: GraphQLInt, defaultValue: 0 },\n    patch: { type: GraphQLInt, defaultValue: 0 },\n  },\n});\n\nconst type = new GraphQLScalarType<string>({\n  name: "FooBar",\n  astNode: {\n    kind: Kind.SCALAR_TYPE_DEFINITION,\n    name: { kind: Kind.NAME, value: "FooBar" },\n    directives: [\n      {\n        kind: Kind.DIRECTIVE,\n        name: { kind: Kind.NAME, value: "version" },\n        arguments: [\n          {\n            kind: Kind.ARGUMENT,\n            name: { kind: Kind.NAME, value: "major" },\n            value: { kind: Kind.INT, value: "2" },\n          },\n          {\n            kind: Kind.ARGUMENT,\n            name: { kind: Kind.NAME, value: "minor" },\n            value: { kind: Kind.INT, value: "1" },\n          },\n          {\n            kind: Kind.ARGUMENT,\n            name: { kind: Kind.NAME, value: "patch" },\n            value: { kind: Kind.INT, value: "3" },\n          },\n        ],\n      },\n    ],\n  },\n});\n\ndirectiveDescriptor(directive, type, "${description} is ${major}.${minor}.${patch}");\n// Expected result: "Min version is 2.1.3"\n\ndirectiveDescriptor(directive, type);\n// Expected result: "Min version"\n\ndirectiveDescriptor(directive, type, "Version should be at least ^${major}.${minor}.${patch}");\n// Expected result: "Version should be at least ^2.1.3"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/helpers/src/directives/descriptor.ts#L83",children:"directives/descriptor.ts:83"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>c});var r=i(96540);const t={},s=r.createContext(t);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);