"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[1718],{4143:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var i=d(4848),s=d(8453);const t={sidebar_position:5},r="Settings",c={id:"settings",title:"Settings",description:"By default, the plugin will use the options as defined in the configuration, and they can be overridden using CLI flags.",source:"@site/docs/settings.md",sourceDirName:".",slug:"/settings",permalink:"/docs/settings",draft:!1,unlisted:!1,editUrl:"https://github.com/graphql-markdown/graphql-markdown/tree/main/docs/settings.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"Configuration",permalink:"/docs/configuration"},next:{title:"Advanced settings",permalink:"/docs/category/advanced-settings"}},l={},o=[{value:"<code>baseURL</code>",id:"baseurl",level:2},{value:"<code>customDirective</code>",id:"customdirective",level:2},{value:"<code>diffMethod</code>",id:"diffmethod",level:2},{value:"<code>docOptions</code>",id:"docoptions",level:2},{value:"<code>groupByDirective</code>",id:"groupbydirective",level:2},{value:"<code>homepage</code>",id:"homepage",level:2},{value:"<code>linkRoot</code>",id:"linkroot",level:2},{value:"<code>loaders</code>",id:"loaders",level:2},{value:"<code>metatags</code>",id:"metatags",level:2},{value:"<code>onlyDocDirective</code>",id:"onlydocdirective",level:2},{value:"<code>printTypeOptions</code>",id:"printtypeoptions",level:2},{value:"<code>pretty</code>",id:"pretty",level:2},{value:"<code>runOnBuild</code>",id:"runonbuild",level:2},{value:"<code>rootPath</code>",id:"rootpath",level:2},{value:"<code>schema</code>",id:"schema",level:2},{value:"<code>skipDocDirective</code>",id:"skipdocdirective",level:2},{value:"<code>tmpDir</code>",id:"tmpdir",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"settings",children:"Settings"}),"\n",(0,i.jsxs)(n.p,{children:["By default, the plugin will use the options as defined in the ",(0,i.jsx)(n.a,{href:"/docs/configuration",children:"configuration"}),", and they can be overridden using CLI flags."]}),"\n",(0,i.jsx)(n.h2,{id:"baseurl",children:(0,i.jsx)(n.code,{children:"baseURL"})}),"\n",(0,i.jsxs)(n.p,{children:["The base URL used by Docusaurus. It will also be used as the folder name under ",(0,i.jsx)(n.a,{href:"#rootpath",children:(0,i.jsx)(n.code,{children:"rootPath"})})," for the generated documentation."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Setting"}),(0,i.jsx)(n.th,{children:"CLI flag"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"baseURL"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"-b, --base <baseURL>"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"schema"})})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"customdirective",children:(0,i.jsx)(n.code,{children:"customDirective"})}),"\n",(0,i.jsxs)(n.p,{children:["Use this option to render directive information for types (see ",(0,i.jsx)(n.a,{href:"/docs/advanced/custom-directive",children:"custom directive"}),")."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Setting"}),(0,i.jsx)(n.th,{children:"CLI flag"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"customDirective"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"not supported"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"diffmethod",children:(0,i.jsx)(n.code,{children:"diffMethod"})}),"\n",(0,i.jsx)(n.p,{children:"The method to be used for identifying changes in the schema for triggering the documentation generation."}),"\n",(0,i.jsx)(n.p,{children:"The possible values are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"FORCE"}),": skip diff, always generate documentation, same as CLI flag ",(0,i.jsx)(n.code,{children:"-f"})," or ",(0,i.jsx)(n.code,{children:"--force"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"NONE"}),": skip diff (same as ",(0,i.jsx)(n.code,{children:"FORCE"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SCHEMA-DIFF"}),": use ",(0,i.jsx)(n.a,{href:"https://graphql-inspector.com",children:"GraphQL Inspector"})," to identify changes in the schema (including description)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SCHEMA-HASH"}),": use the schema SHA-256 hash for identifying changes in the schema (this method is sensitive to white spaces and invisible characters)."]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Setting"}),(0,i.jsx)(n.th,{children:"CLI flag"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"diffMethod"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"-d, --diff <diffMethod>"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"NONE"})})]})})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["The package ",(0,i.jsx)(n.code,{children:"@graphql-markdown/diff"})," is required for using ",(0,i.jsx)(n.code,{children:"diffMethod"}),".\nIf the package is missing, then the change detection is always skipped."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"npm install @graphql-markdown/diff\n"})})]}),"\n",(0,i.jsx)(n.h2,{id:"docoptions",children:(0,i.jsx)(n.code,{children:"docOptions"})}),"\n",(0,i.jsx)(n.p,{children:"Use these options to tweak some of the Docusaurus documentation features:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"frontMatter"}),": set custom front matter entries, see ",(0,i.jsx)(n.a,{href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter",children:"Docusaurus documentation"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"index"}),": enable/disable the index page for categories/groups, see ",(0,i.jsx)(n.a,{href:"https://docusaurus.io/docs/sidebar/items#generated-index-page",children:"Docusaurus documentation"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pagination"}),": enable/disable page buttons ",(0,i.jsx)(n.code,{children:"Previous"})," and ",(0,i.jsx)(n.code,{children:"Next"})," [",(0,i.jsx)(n.strong,{children:"deprecated"}),", see note below]."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"toc"}),": enable/disable page table of content [",(0,i.jsx)(n.strong,{children:"deprecated"}),", see note below]."]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Setting"}),(0,i.jsx)(n.th,{children:"CLI flag"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"docOptions.frontMatter"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"not supported"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"{}"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"docOptions.index"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--index"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"docOptions.pagination"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--noPagination"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"docOptions.toc"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--noToc"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})})]})]})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:'plugins: [\n    [\n      "@graphql-markdown/docusaurus",\n       /** @type {import(\'@graphql-markdown/types\').ConfigOptions} */\n       {\n        schema: "./schema/swapi.graphql",\n        rootPath: "./docs",\n        baseURL: "swapi",\n        homepage: "./docs/swapi.md",\n        // highlight-start\n        docOptions: {\n          frontMatter: {\n            pagination_next: null, // disable page navigation next\n            pagination_prev: null, // disable page navigation previous\n            hide_table_of_contents: true, // disable page table of content\n          },\n          index: true, // enable generated index pages, same as CLI flag --index\n        },\n        // highlight-end\n        loaders: {\n          GraphQLFileLoader: "@graphql-tools/graphql-file-loader" // local file schema\n        },\n      },\n    ],\n  ],\n'})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.admonition,{title:"DEPRECATED",type:"warning",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"docOptions.pagination"})})," (CLI flag ",(0,i.jsx)(n.code,{children:"--noPagination"}),") has been replaced by ",(0,i.jsx)(n.code,{children:"docOptions.frontMatter"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"docOptions: {\n frontMatter: {\n   pagination_next: null, // disable page navigation next\n   pagination_prev: null, // disable page navigation previous\n },\n},\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"docOptions.toc"})})," (CLI flag ",(0,i.jsx)(n.code,{children:"--noToc"}),") has been replaced by ",(0,i.jsx)(n.code,{children:"docOptions.frontMatter"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"docOptions: {\n frontMatter: {\n   hide_table_of_contents: true, // disable page table of content\n },\n},\n"})}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"groupbydirective",children:(0,i.jsx)(n.code,{children:"groupByDirective"})}),"\n",(0,i.jsxs)(n.p,{children:["Use a GraphQL directive for creating documentation categories (see ",(0,i.jsx)(n.a,{href:"/docs/advanced/group-by-directive",children:"documentation categories"}),")."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Setting"}),(0,i.jsx)(n.th,{children:"CLI flag"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"groupByDirective"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"-gdb, --groupByDirective <@directive(field|=fallback)>"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"homepage",children:(0,i.jsx)(n.code,{children:"homepage"})}),"\n",(0,i.jsxs)(n.p,{children:["The location of the landing page to be used for the documentation, relative to the current workspace (see ",(0,i.jsx)(n.a,{href:"/docs/advanced/homepage",children:"custom homepage"}),"). The file will be copied at the root folder of the generated documentation."]}),"\n",(0,i.jsxs)(n.p,{children:["The plugin provides a default page in ",(0,i.jsx)(n.code,{children:"assets/generated"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Setting"}),(0,i.jsx)(n.th,{children:"CLI flag"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"homepage"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"-h, --homepage <homepage>"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"generated.md"})})]})})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The GraphQL-Markdown template for Docusaurus provides a customized homepage located at ",(0,i.jsx)(n.code,{children:"static/index.md"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"linkroot",children:(0,i.jsx)(n.code,{children:"linkRoot"})}),"\n",(0,i.jsx)(n.p,{children:"The root for links in documentation. It depends on the entry for the schema main page in the Docusaurus sidebar."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Setting"}),(0,i.jsx)(n.th,{children:"CLI flag"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"linkRoot"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"-l, --link <linkRoot>"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/"})})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"loaders",children:(0,i.jsx)(n.code,{children:"loaders"})}),"\n",(0,i.jsxs)(n.p,{children:["GraphQL schema loaders to use (see ",(0,i.jsx)(n.a,{href:"/docs/advanced/schema-loading",children:"schema loading"}),")."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Setting"}),(0,i.jsx)(n.th,{children:"CLI flag"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"loaders"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"not supported"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"{ }"})})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"metatags",children:(0,i.jsx)(n.code,{children:"metatags"})}),"\n",(0,i.jsxs)(n.p,{children:["Set page metadata in ",(0,i.jsx)(n.code,{children:"<html>"}),", ",(0,i.jsx)(n.code,{children:"<head>"})," using ",(0,i.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features/head-metadata",children:"Docusaurus head metadata"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Meta tags are provided as a list of metadata objects, eg ",(0,i.jsx)(n.code,{children:'[{ name: "robots", content: "noindex" }]'})," for ",(0,i.jsx)(n.code,{children:'<meta name="robots" content="noindex" />'}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Setting"}),(0,i.jsx)(n.th,{children:"CLI flag"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"metatags"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"not supported"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"[]"})})]})})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:'plugins: [\n    [\n      "@graphql-markdown/docusaurus",\n       /** @type {import(\'@graphql-markdown/types\').ConfigOptions} */\n       {\n        schema: "./schema/swapi.graphql",\n        rootPath: "./docs",\n        baseURL: "swapi",\n        homepage: "./docs/swapi.md",\n        // highlight-start\n        metatags: [\n          { name: "robots", content: "noindex" }, // <meta name="robots" content="noindex" />\n          { charset: "utf-8" }, // <meta charset="utf-8" />\n        ],\n        // highlight-end\n        loaders: {\n          GraphQLFileLoader: "@graphql-tools/graphql-file-loader" // local file schema\n        }\n      },\n    ],\n  ],\n'})}),"\n",(0,i.jsx)(n.h2,{id:"onlydocdirective",children:(0,i.jsx)(n.code,{children:"onlyDocDirective"})}),"\n",(0,i.jsx)(n.p,{children:"The schema directive/s is used for selecting types to be rendered in the documentation."}),"\n",(0,i.jsxs)(n.p,{children:["The CLI flag supports multiple values separated by a space character, eg ",(0,i.jsx)(n.code,{children:"--only @stable @beta"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Setting"}),(0,i.jsx)(n.th,{children:"CLI flag"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"onlyDocDirective"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--only <@directive...>"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"[]"})})]})})]}),"\n",(0,i.jsxs)(n.p,{children:["See also ",(0,i.jsx)(n.a,{href:"#skipdocdirective",children:(0,i.jsx)(n.code,{children:"skipDocDirective"})}),"."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["It only applies to types with a location compatible with the directive, i.e. if the ",(0,i.jsx)(n.code,{children:"onlyDocDirective"})," cannot be applied to a type (e.g. ",(0,i.jsx)(n.code,{children:"ENUM"}),") then the type will be displayed."]})}),"\n",(0,i.jsx)(n.h2,{id:"printtypeoptions",children:(0,i.jsx)(n.code,{children:"printTypeOptions"})}),"\n",(0,i.jsx)(n.p,{children:"Use these options to toggle type information rendered on pages:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"codeSection"}),": display type code section."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"deprecated"}),": option for displaying deprecated entities (fields, values, operations).","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"default"}),": deprecated entities are displayed with other entities."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"group"}),": deprecated entities are grouped."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"skip"}),": deprecated entities are not displayed (same as ",(0,i.jsx)(n.a,{href:"#skipdocdirective",children:(0,i.jsx)(n.code,{children:"skipDocDirective"})}),")."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"exampleSection"}),": display example section based on directive data (see ",(0,i.jsx)(n.a,{href:"/docs/advanced/examples",children:"Examples"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"parentTypePrefix"}),": prefix field names with the parent type name."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"relatedTypeSection"}),": display related type sections."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"typeBadges"}),": add field type attributes badges."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"useApiGroup"}),": split entities in ",(0,i.jsx)(n.code,{children:"API"})," group (executable types) and ",(0,i.jsx)(n.code,{children:"Types"})," group (system types)."]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Setting"}),(0,i.jsx)(n.th,{children:"CLI flag"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"printTypeOptions.codeSection"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--noCode"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"printTypeOptions.deprecated"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--deprecated <option>"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"default"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"printTypeOptions.exampleSection"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--noExample"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"printTypeOptions.parentTypePrefix"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--noParentType"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"printTypeOptions.relatedTypeSection"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--noRelatedType"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"printTypeOptions.typeBadges"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--noTypeBadges"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"printTypeOptions.useApiGroup"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--noApiGroup"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})})]})]})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:'plugins: [\n    [\n      "@graphql-markdown/docusaurus",\n       /** @type {import(\'@graphql-markdown/types\').ConfigOptions} */\n       {\n        schema: "./schema/swapi.graphql",\n        rootPath: "./docs",\n        baseURL: "swapi",\n        homepage: "./docs/swapi.md",\n        // highlight-start\n        printTypeOptions: {\n          codeSection: false, // disable code section, same as CLI flag --noCode\n          deprecated: "group", // group deprecated entities, same as CLI flag --deprecated group\n          exampleSection: false, // disable code section, same as CLI flag --noExample\n          parentTypePrefix: false, // disable parent prefix, same as CLI flag --noParentType\n          relatedTypeSection: false, // disable related type sections, same as CLI flag --noRelatedType\n          typeBadges: false, // disable type attribute badges, same as CLI flag --noTypeBadges\n          useApiGroup: false, // disable type API grouping, same as CLI flag --noApiGroup\n        },\n        // highlight-end\n        loaders: {\n          GraphQLFileLoader: "@graphql-tools/graphql-file-loader" // local file schema\n        }\n      },\n    ],\n  ],\n'})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/docs/advanced/custom-deprecated-section",children:"customize deprecated sections"})})," to customize the rendering of ",(0,i.jsx)(n.code,{children:'printTypeOptions.deprecated: "group"'}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"pretty",children:(0,i.jsx)(n.code,{children:"pretty"})}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.a,{href:"https://prettier.io",children:(0,i.jsx)(n.code,{children:"prettier"})})," to format generated files."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Setting"}),(0,i.jsx)(n.th,{children:"CLI flag"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"pretty"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--pretty"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})})]})})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"prettier"})," package has to be installed separately. If the package is not present locally, then the formatting will always be skipped."]})}),"\n",(0,i.jsx)(n.h2,{id:"runonbuild",children:(0,i.jsx)(n.code,{children:"runOnBuild"})}),"\n",(0,i.jsx)(n.admonition,{title:"EXPERIMENTAL",type:"warning",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"runOnBuild"})," is an experimental feature, and it should not be used in production."]})}),"\n",(0,i.jsxs)(n.p,{children:["When set to ",(0,i.jsx)(n.code,{children:"true"})," enables running doc generation on ",(0,i.jsx)(n.code,{children:"docusaurus build"}),".\nIf ",(0,i.jsx)(n.code,{children:"false"}),", then the documentation can only be generated with the Docusaurus command ",(0,i.jsx)(n.code,{children:"graphql-to-doc"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Setting"}),(0,i.jsx)(n.th,{children:"CLI flag"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"runOnBuild"})}),(0,i.jsx)(n.td,{children:"n/a"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"rootpath",children:(0,i.jsx)(n.code,{children:"rootPath"})}),"\n",(0,i.jsxs)(n.p,{children:["The output root path for the generated documentation, relative to the current workspace.\nIt works in relation to ",(0,i.jsx)(n.a,{href:"#baseurl",children:(0,i.jsx)(n.code,{children:"baseURL"})}),", and the final path will be ",(0,i.jsx)(n.code,{children:"rootPath/baseURL"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Setting"}),(0,i.jsx)(n.th,{children:"CLI flag"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"rootPath"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"-r, --root <rootPath>"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"./docs"})})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"schema",children:(0,i.jsx)(n.code,{children:"schema"})}),"\n",(0,i.jsx)(n.p,{children:"The GraphQL schema location."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Setting"}),(0,i.jsx)(n.th,{children:"CLI flag"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"schema"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"-s, --schema <schema>"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"./schema.graphql"})})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"skipdocdirective",children:(0,i.jsx)(n.code,{children:"skipDocDirective"})}),"\n",(0,i.jsx)(n.p,{children:"The schema directive/s is used for skipping types from documentation."}),"\n",(0,i.jsxs)(n.p,{children:["The CLI flag supports multiple values separated by a space character, eg ",(0,i.jsx)(n.code,{children:"--skip @noDoc @deprecated"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Setting"}),(0,i.jsx)(n.th,{children:"CLI flag"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"skipDocDirective"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--skip <@directive...>"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"[]"})})]})})]}),"\n",(0,i.jsxs)(n.p,{children:["See also ",(0,i.jsx)(n.a,{href:"#onlydocdirective",children:(0,i.jsx)(n.code,{children:"onlyDocDirective"})}),"."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["Declaring the same type in both ",(0,i.jsx)(n.code,{children:"onlyDocDirective"})," and ",(0,i.jsx)(n.code,{children:"skipDocDirective"})," will generate an error."]})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Types with ",(0,i.jsx)(n.code,{children:"@deprecated"})," directive can also be skipped using the setting ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"#printtypeoptions",children:(0,i.jsx)(n.code,{children:'printTypeOptions.deprecated: "skip"'})})})," or the flag ",(0,i.jsx)(n.code,{children:"--deprecated skip"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"tmpdir",children:(0,i.jsx)(n.code,{children:"tmpDir"})}),"\n",(0,i.jsxs)(n.p,{children:["The folder used for storing schema copy and signature is used by ",(0,i.jsx)(n.a,{href:"#diffmethod",children:(0,i.jsx)(n.code,{children:"diffMethod"})})," setting."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Setting"}),(0,i.jsx)(n.th,{children:"CLI flag"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"tmpDir"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"-t, --tmp <tmpDir>"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"OS temp folder"})})]})})]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,d)=>{d.d(n,{R:()=>r,x:()=>c});var i=d(6540);const s={},t=i.createContext(s);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);