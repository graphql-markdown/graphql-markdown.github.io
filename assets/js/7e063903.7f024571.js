"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[5531],{7203:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>r});var i=a(5893),s=a(1151);const o={pagination_prev:null,pagination_next:null},t="Additional schemas",d={id:"advanced/additional-schema",title:"Additional schemas",description:"If you need to support multiple schemas, then you can set multiple instances of the plugin",source:"@site/docs/advanced/additional-schema.md",sourceDirName:"advanced",slug:"/advanced/additional-schema",permalink:"/docs/advanced/additional-schema",draft:!1,unlisted:!1,editUrl:"https://github.com/graphql-markdown/graphql-markdown/tree/main/docs/advanced/additional-schema.md",tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null},sidebar:"defaultSidebar"},l={},r=[{value:"GraphQL Config",id:"graphql-config",level:2}];function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"additional-schemas",children:"Additional schemas"}),"\n",(0,i.jsx)(e.p,{children:"If you need to support multiple schemas, then you can set multiple instances of the plugin"}),"\n",(0,i.jsxs)(e.p,{children:["Assign a unique ",(0,i.jsx)(e.code,{children:"id"})," attribute to each plugin instance (if not set, then ",(0,i.jsx)(e.code,{children:"id"})," value is ",(0,i.jsx)(e.code,{children:"default"}),")."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:'plugins: [\n  [\n    "@graphql-markdown/docusaurus",\n    /** @type {import(\'@graphql-markdown/types\').ConfigOptions} */\n    {\n      // highlight-next-line\n      // id: \'default\', // omitted => default instance\n      schema: "./schema/swapi.graphql",\n      rootPath: "./docs", // docs will be generated under \'./docs/swapi\' (rootPath/baseURL)\n      baseURL: "swapi",\n      homepage: "./docs/swapi.md",\n      loaders: {\n        GraphQLFileLoader: "@graphql-tools/graphql-file-loader" // local file schema\n      }\n    },\n  ],\n  [\n    "@graphql-markdown/docusaurus",\n    /** @type {import(\'@graphql-markdown/types\').ConfigOptions} */\n    {\n      // highlight-next-line\n      id: "admin",\n      schema: "./schema/admin.graphql",\n      rootPath: "./docs", // docs will be generated under \'./docs/admin\' (rootPath/baseURL)\n      baseURL: "admin",\n      homepage: "./docs/admin.md",\n      loaders: {\n        GraphQLFileLoader: "@graphql-tools/graphql-file-loader" // local file schema\n      }\n    },\n  ],\n],\n'})}),"\n",(0,i.jsxs)(e.p,{children:["Instance with an ",(0,i.jsx)(e.code,{children:"id"})," will have their own command line:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"npm run docusaurus graphql-to-doc:admin\n"})}),"\n",(0,i.jsx)(e.h2,{id:"graphql-config",children:"GraphQL Config"}),"\n",(0,i.jsxs)(e.p,{children:["If you use ",(0,i.jsx)(e.a,{href:"/docs/configuration#graphql-config",children:"GraphQL config"}),", then you need to define ",(0,i.jsx)(e.code,{children:"projects"})," with the same ",(0,i.jsx)(e.code,{children:"id"})," (including ",(0,i.jsx)(e.code,{children:"default"}),")."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:'plugins: [\n  "@graphql-markdown/docusaurus", // default instance\n  [\n    "@graphql-markdown/docusaurus",\n    /** @type {import(\'@graphql-markdown/types\').ConfigOptions} */\n    {\n      // highlight-next-line\n      id: "admin",\n    },\n  ],\n],\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-yaml",metastring:'title=".graphqlrc"',children:'projects:\n  # highlight-next-line\n  default:\n    schema: "./schema/swapi.graphql"\n    extensions:\n      graphql-markdown:\n        linkRoot: "./docs"\n        baseURL: "swapi"\n        homepage: "./docs/swapi.md"\n        loaders:\n          GraphQLFileLoader: "@graphql-tools/graphql-file-loader"\n  # highlight-next-line\n  admin:\n    schema: "./schema/admin.graphql"\n    extensions:\n      graphql-markdown:\n        linkRoot: "./docs"\n        baseURL: "admin"\n        homepage: "./docs/admin.md"\n        loaders:\n          GraphQLFileLoader: "@graphql-tools/graphql-file-loader"\n'})})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},1151:(n,e,a)=>{a.d(e,{Z:()=>d,a:()=>t});var i=a(7294);const s={},o=i.createContext(s);function t(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);