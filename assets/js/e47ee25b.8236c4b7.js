"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3160],{1342:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var n=a(4848),o=a(8453);const s={title:"loader",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},l=void 0,c={id:"graphql/loader",title:"loader",description:"Library for GraphQL schema loading and loaders config processing.",source:"@site/api/graphql/loader.md",sourceDirName:"graphql",slug:"/graphql/loader",permalink:"/api/graphql/loader",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"loader",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},d={},i=[{value:"getDocumentLoaders()",id:"getdocumentloaders",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Throws",id:"throws",level:3},{value:"Example",id:"example",level:3},{value:"Source",id:"source",level:3},{value:"loadSchema()",id:"loadschema",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"Source",id:"source-1",level:3}];function t(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["Library for GraphQL schema loading and ",(0,n.jsx)(r.code,{children:"loaders"})," config processing."]}),"\n",(0,n.jsx)(r.h2,{id:"getdocumentloaders",children:"getDocumentLoaders()"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"getDocumentLoaders(loadersList): Promise<Maybe<LoadSchemaOptions>>\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Asynchronously returns a valid loaders list for ",(0,n.jsx)(r.a,{href:"/api/graphql/loader#loadschema",children:"loadSchema"})," based on the plugin config.\nImport each loader package, and instantiate a loader object."]}),"\n",(0,n.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"loadersList"}),": ",(0,n.jsx)(r.code,{children:"Maybe"}),"<",(0,n.jsx)(r.code,{children:"LoaderOption"}),">"]}),"\n",(0,n.jsx)(r.p,{children:"the list of loaders defined in the plugin config."}),"\n",(0,n.jsx)(r.h3,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Promise"}),"<",(0,n.jsx)(r.code,{children:"Maybe"}),"<",(0,n.jsx)(r.code,{children:"LoadSchemaOptions"}),">>"]}),"\n",(0,n.jsx)(r.p,{children:"a list of loader objects."}),"\n",(0,n.jsx)(r.h3,{id:"throws",children:"Throws"}),"\n",(0,n.jsxs)(r.p,{children:["an ",(0,n.jsx)(r.code,{children:"Error"})," if no loader has been loaded, or if an error occurred while importing loaders."]}),"\n",(0,n.jsx)(r.h3,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'import { getDocumentLoaders, loadSchema } from "@graphql-markdown/utils/graphql"\n\nconst loaderList = {\n  GraphQLFileLoader: "@graphql-tools/graphql-file-loader",\n};\n\nconst loaders = await getDocumentLoaders(loaderList);\n\nconst schema = await loadSchema("schema.graphql", {\n  loaders,\n  rootTypes: { query: "Root", subscription: "" },\n});\n'})}),"\n",(0,n.jsx)(r.h3,{id:"source",children:"Source"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/42c204b/packages/graphql/src/loader.ts#L106",children:"packages/graphql/src/loader.ts:106"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"loadschema",children:"loadSchema()"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"loadSchema(schemaLocation, options): Promise<GraphQLSchema>\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Wrapper method for ",(0,n.jsx)(r.code,{children:"@graphql-tools/load.loadSchema"})," to load asynchronously a GraphQL Schema from a source.\nThe wrapper will load the schema using the loader declared in ",(0,n.jsx)(r.code,{children:"options"}),".\nIf ",(0,n.jsx)(r.code,{children:"rootTypes"})," is set in the options, then the schema root types will be overridden to generate custom GraphQL schema."]}),"\n",(0,n.jsx)(r.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"schemaLocation"}),": ",(0,n.jsx)(r.code,{children:"string"})]}),"\n",(0,n.jsx)(r.p,{children:"the schema location pointer matching the loader."}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"options"}),": ",(0,n.jsx)(r.code,{children:"BuildSchemaOptions"})," & ",(0,n.jsx)(r.code,{children:"GraphQLParseOptions"})," & ",(0,n.jsx)(r.code,{children:"Object"})," & ",(0,n.jsx)(r.code,{children:"Object"})," & ",(0,n.jsx)(r.code,{children:"Object"})," & ",(0,n.jsx)(r.code,{children:"Partial"}),"<",(0,n.jsx)(r.code,{children:"IExecutableSchemaDefinition"}),"<",(0,n.jsx)(r.code,{children:"any"}),">> & ",(0,n.jsx)(r.code,{children:"Object"})," & ",(0,n.jsx)(r.code,{children:"Object"})]}),"\n",(0,n.jsxs)(r.p,{children:["the schema ",(0,n.jsx)(r.code,{children:"loaders"}),", and optional ",(0,n.jsx)(r.code,{children:"rootTypes"})," override."]}),"\n",(0,n.jsx)(r.h3,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Promise"}),"<",(0,n.jsx)(r.code,{children:"GraphQLSchema"}),">"]}),"\n",(0,n.jsx)(r.p,{children:"a GraphQL schema."}),"\n",(0,n.jsx)(r.h3,{id:"example-1",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'import { loadSchema } from "@graphql-markdown/utils/graphql"\n\nconst schema = await loadSchema("schema.graphql", {\n  loaders: [new GraphQLFileLoader()],\n  rootTypes: { query: "Root", subscription: "" },\n});\n'})}),"\n",(0,n.jsx)(r.h3,{id:"source-1",children:"Source"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/42c204b/packages/graphql/src/loader.ts#L41",children:"packages/graphql/src/loader.ts:41"})})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},8453:(e,r,a)=>{a.d(r,{R:()=>l,x:()=>c});var n=a(6540);const o={},s=n.createContext(o);function l(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);