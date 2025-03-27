"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["1903"],{60009:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>d,metadata:()=>i,assets:()=>s,toc:()=>t,contentTitle:()=>o});var i=JSON.parse('{"id":"cli/index-1","title":"index","description":"GraphQLMarkdownCliType","source":"@site/api/cli/index-1.md","sourceDirName":"cli","slug":"/cli/index-1","permalink":"/api/cli/index-1","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"index","pagination_prev":null,"pagination_next":null,"toc_max_heading_level":2},"sidebar":"defaultSidebar"}'),l=r("85893"),a=r("50065");let d={title:"index",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},o=void 0,s={},t=[{value:"GraphQLMarkdownCliType",id:"graphqlmarkdownclitype",level:2},{value:"See",id:"see",level:3},{value:"getGraphQLMarkdownCli()",id:"getgraphqlmarkdowncli",level:2},{value:"Parameters",id:"parameters",level:3},{value:"options",id:"options",level:4},{value:"loggerModule?",id:"loggermodule",level:4},{value:"customMdxParser?",id:"custommdxparser",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"runGraphQLMarkdown()",id:"rungraphqlmarkdown",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"options",id:"options-1",level:4},{value:"cliOptions",id:"clioptions",level:4},{value:"loggerModule?",id:"loggermodule-1",level:4},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"graphqlmarkdownclitype",children:"GraphQLMarkdownCliType"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"type GraphQLMarkdownCliType = CommanderStatic;\n"})}),"\n",(0,l.jsx)(n.p,{children:"Defined in: index.ts:21"}),"\n",(0,l.jsx)(n.p,{children:"Type representing the GraphQL Markdown CLI."}),"\n",(0,l.jsx)(n.h3,{id:"see",children:"See"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://graphql-markdown.dev",children:"GraphQL Markdown Documentation"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"getgraphqlmarkdowncli",children:"getGraphQLMarkdownCli()"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"function getGraphQLMarkdownCli(\n   options, \n   loggerModule?, \n   customMdxParser?): CommanderStatic\n"})}),"\n",(0,l.jsx)(n.p,{children:"Defined in: index.ts:76"}),"\n",(0,l.jsx)(n.p,{children:"Configures and returns the GraphQL Markdown CLI."}),"\n",(0,l.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsx)(n.h4,{id:"options",children:"options"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"GraphQLMarkdownCliOptions"})}),"\n",(0,l.jsx)(n.p,{children:"Options for configuring the GraphQL Markdown CLI."}),"\n",(0,l.jsx)(n.h4,{id:"loggermodule",children:"loggerModule?"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"string"})}),"\n",(0,l.jsx)(n.p,{children:"Optional logger module to use."}),"\n",(0,l.jsx)(n.h4,{id:"custommdxparser",children:"customMdxParser?"}),"\n",(0,l.jsx)(n.p,{children:"Optional MDX parser configuration."}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"string"})," | ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"CommanderStatic"})}),"\n",(0,l.jsx)(n.p,{children:"The configured CLI instance."}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:'const cli = getGraphQLMarkdownCli(\n  { id: "custom" },\n  "custom-logger",\n  true\n);\nawait cli.parseAsync(process.argv);\n'})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"rungraphqlmarkdown",children:"runGraphQLMarkdown()"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"function runGraphQLMarkdown(\n   options, \n   cliOptions, \nloggerModule?): Promise<void>\n"})}),"\n",(0,l.jsx)(n.p,{children:"Defined in: index.ts:39"}),"\n",(0,l.jsx)(n.p,{children:"Runs the GraphQL Markdown CLI to generate documentation from a GraphQL schema."}),"\n",(0,l.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,l.jsx)(n.h4,{id:"options-1",children:"options"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"GraphQLMarkdownCliOptions"})}),"\n",(0,l.jsx)(n.p,{children:"Options for configuring the GraphQL Markdown CLI."}),"\n",(0,l.jsx)(n.h4,{id:"clioptions",children:"cliOptions"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"CliOptions"})}),"\n",(0,l.jsx)(n.p,{children:"Command-line options passed to the CLI."}),"\n",(0,l.jsx)(n.h4,{id:"loggermodule-1",children:"loggerModule?"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"string"})}),"\n",(0,l.jsx)(n.p,{children:"Optional logger module to use."}),"\n",(0,l.jsx)(n.h3,{id:"returns-1",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Promise"}),"<",(0,l.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,l.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:'await runGraphQLMarkdown(\n  { id: "custom" },\n  { schema: "./schema.graphql", root: "./docs" },\n  "custom-logger"\n);\n'})})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return d}});var i=r(67294);let l={},a=i.createContext(l);function d(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);