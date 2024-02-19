"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6727],{2121:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var o=a(5893),s=a(1151);const r={pagination_prev:null,pagination_next:null},l="Schema loading",t={id:"advanced/schema-loading",title:"Schema loading",description:"GraphQL-Markdown use external loaders for loading GraphQL schemas (see full list).",source:"@site/docs/advanced/schema-loading.md",sourceDirName:"advanced",slug:"/advanced/schema-loading",permalink:"/docs/advanced/schema-loading",draft:!1,unlisted:!1,editUrl:"https://github.com/graphql-markdown/graphql-markdown/tree/main/docs/advanced/schema-loading.md",tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null},sidebar:"defaultSidebar"},i={},c=[{value:"Local schema (file)",id:"local-schema-file",level:2},{value:"Remote schema (url)",id:"remote-schema-url",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"schema-loading",children:"Schema loading"}),"\n",(0,o.jsxs)(n.p,{children:["GraphQL-Markdown use external loaders for loading GraphQL schemas (see ",(0,o.jsx)(n.a,{href:"https://github.com/ardatan/graphql-tools/tree/master/packages/loaders",children:"full list"}),")."]}),"\n",(0,o.jsx)(n.p,{children:"You can declare as many loaders as you need using the structure:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"type RootTypes = { query?: string; mutation?: string; subscription?: string };\n\ntype PackageOptionsConfig = BaseLoaderOptions & RootTypes;\n\ntype PackageConfig = {\n  module: PackageName;\n  options?: PackageOptionsConfig;\n};\n\ntype PackageName = string & { _opaque: typeof PackageName };\n\ntype ClassName = string & { _opaque: typeof ClassName };\n\ntype LoaderOption = {\n  [name: ClassName]: PackageName | PackageConfig;\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"local-schema-file",children:"Local schema (file)"}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"@graphql-tools/graphql-file-loader"})," if you want to load a local schema:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",metastring:'title="shell"',children:"npm install @graphql-tools/graphql-file-loader\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Once done, you can declare the loader into ",(0,o.jsx)(n.code,{children:"@graphql-markdown/docusaurus"})," configuration:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:'plugins: [\n  [\n    "@graphql-markdown/docusaurus",\n    /** @type {import(\'@graphql-markdown/types\').ConfigOptions} */\n    {\n      // ... other options\n      loaders: {\n        GraphQLFileLoader: "@graphql-tools/graphql-file-loader"\n      }\n    },\n  ],\n],\n'})}),"\n",(0,o.jsx)(n.h2,{id:"remote-schema-url",children:"Remote schema (url)"}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"@graphql-tools/url-loader"}),", if you want to load a schema from a URL:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",metastring:'title="shell"',children:"npm install @graphql-tools/url-loader\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Once done, you can declare the loader into ",(0,o.jsx)(n.code,{children:"docusaurus2-graphql-doc-generator"})," configuration:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:'plugins: [\n  [\n    "@graphql-markdown/docusaurus",\n    /** @type {import(\'@graphql-markdown/types\').ConfigOptions} */\n    {\n      // ... other options\n      loaders: {\n        UrlLoader: {\n          module: "@graphql-tools/url-loader",\n          options: {\n            headers: {\n              Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"\n             }\n          }\n        }\n      }\n    },\n  ],\n],\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>t,a:()=>l});var o=a(7294);const s={},r=o.createContext(s);function l(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);