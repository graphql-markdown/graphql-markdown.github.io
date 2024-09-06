"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[705],{84144:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=t(74848),i=t(28453);const s={pagination_prev:null,pagination_next:null},r="Examples",o={id:"advanced/examples",title:"Examples",description:"By enabling the option printTypeOptions.exampleSection, you can add examples to types documentation.",source:"@site/docs/advanced/examples.md",sourceDirName:"advanced",slug:"/advanced/examples",permalink:"/docs/advanced/examples",draft:!1,unlisted:!1,editUrl:"https://github.com/graphql-markdown/graphql-markdown/tree/main/docs/advanced/examples.md",tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null},sidebar:"defaultSidebar"},l={},d=[{value:"Usage",id:"usage",level:2},{value:"Advanced options",id:"advanced-options",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"examples",children:"Examples"})}),"\n",(0,a.jsxs)(n.p,{children:["By enabling the option ",(0,a.jsx)(n.a,{href:"/docs/settings#printtypeoptions",children:(0,a.jsx)(n.code,{children:"printTypeOptions.exampleSection"})}),", you can add examples to types documentation."]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["1. Add a type definition directive ",(0,a.jsx)(n.code,{children:"@example"})," to the schema"]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"directive @example(\n  value: String\n) on OBJECT | INPUT_OBJECT | INTERFACE | FIELD_DEFINITION | ARGUMENT_DEFINITION | SCALAR\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"2. Add examples to the schema"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:'scalar Date @example(value: "1970-01-01")\n\ninterface Record {\n  id: ID! @example(value: "1")\n}\n\ntype Course implements Record @example(value: "{ \\"id\\": 2, \\"title\\": \\"GraphQL\\" }") {\n  id: ID!\n  title: String!\n} \n\ntype Semester implements Record {\n  id: ID!\n  startDate: Date\n  withdrawDate: Date @deprecated\n  endDate: Date\n  courses: [Course!]!\n}\n\ntype Query {\n  course(id: ID!): Course @example(value: "{ course(id: \\"1\\") { title } }")\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Examples can be inherited, this is why in the above example there is no example explicitly set for the type ",(0,a.jsx)(n.code,{children:"Semester"}),", and it will render as the following"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"examples",src:t(61273).A+"",width:"620",height:"359"})}),"\n",(0,a.jsx)(n.h2,{id:"advanced-options",children:"Advanced options"}),"\n",(0,a.jsxs)(n.p,{children:["Example directive definition and parser behavior can be customized through the configuration using a ",(0,a.jsx)(n.code,{children:"TypeDirectiveExample"})," object instead of a boolean value for ",(0,a.jsx)(n.code,{children:"printTypeOptions.exampleSection"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"interface TypeExampleSectionOption {\n  directive?: string; // customize the directive name\n  field?: string; // customize the directive's field name\n  parser?: (value?: unknown, type?: unknown) => unknown; // customize the field's value parsing\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["For example, if the GraphQL schema already supports examples using the ",(0,a.jsx)(n.code,{children:"@spectaql"})," directive."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:'type CustomExampleDirective {\n  myField: String @spectaql(options: [{ key: "undocumented", value: "true" }])\n  myFieldOtherField: String @spectaql(options: [{ key: "example", value: "An Example from the Directive" }])\n  myFieldOtherOtherField: String @spectaql(options: [{ key: "examples", value: "[\\"Example 1 from the Directive\\", \\"Example 2 from the Directive\\"]" }])\n}\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:'plugins: [\n  [\n    "@graphql-markdown/docusaurus",\n    /** @type {import(\'@graphql-markdown/types\').ConfigOptions} */\n    {\n      // ... other options\n      printTypeOptions: {\n        exampleSection: {\n          directive: "spectaql",\n          field: "options",\n          /* simplified parser for @spectaql (non production ready) */\n          parser: (options?: unknown, type?: unknown): unknown => {\n            if (!options) {\n              return undefined;\n            }\n\n            const example = (options as [{ key: string; value: string }]).find(\n              (option) => {\n                return ["example", "examples"].includes(option.key);\n              },\n            );\n\n            if (!example) {\n              return undefined;\n            }\n\n            if (example.key === "example") {\n              return example.value;\n            }\n\n            return (JSON.parse(example.value) as string[])[0];\n          }\n        }\n      }\n    }\n  ]\n]\n'})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},61273:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/examples-c219d2f7b930b0547050cd51928bffcf.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(96540);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);