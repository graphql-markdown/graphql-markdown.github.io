"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[9135],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,h=m["".concat(d,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1939:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={slug:"/"},d="GraphQL Documentation Generator for Docusaurus",s={unversionedId:"*",id:"*",title:"GraphQL Documentation Generator for Docusaurus",description:"Latest Version",source:"@site/docs/*.md",sourceDirName:".",slug:"/",permalink:"/",tags:[],version:"current",frontMatter:{slug:"/"}},p={},u=[{value:"Try it",id:"try-it",level:2},{value:"Installation",id:"installation",level:2},{value:"npm",id:"npm",level:3},{value:"Yarn",id:"yarn",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Plugin Multi-instance",id:"plugin-multi-instance",level:3},{value:"Plugin Loaders",id:"plugin-loaders",level:3},{value:"Site Settings",id:"site-settings",level:3},{value:"Sidebars Settings",id:"sidebars-settings",level:3},{value:"1. Single Docs instance",id:"1-single-docs-instance",level:4},{value:"Important",id:"important",level:5},{value:"2. Docs Multi-instance",id:"2-docs-multi-instance",level:4},{value:"Home Page",id:"home-page",level:3},{value:"Option <code>diffMethod</code>",id:"option-diffmethod",level:3},{value:"Option <code>groupByDirective</code>",id:"option-groupbydirective",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"<code>Duplicate &quot;graphql&quot; modules cannot be used at the same time</code>",id:"duplicate-graphql-modules-cannot-be-used-at-the-same-time",level:3},{value:"<code>Unable to find any GraphQL type definitions</code>",id:"unable-to-find-any-graphql-type-definitions",level:3},{value:"<code>Unable to find any GraphQL type definitions for the following pointers</code>",id:"unable-to-find-any-graphql-type-definitions-for-the-following-pointers",level:3},{value:"Contributions",id:"contributions",level:2}],m={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"graphql-documentation-generator-for-docusaurus"},"GraphQL Documentation Generator for Docusaurus"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@edno/docusaurus2-graphql-doc-generator"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@edno/docusaurus2-graphql-doc-generator?style=flat-square",alt:"Latest Version"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/graphql-markdown/graphql-markdown/main/LICENSE"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/github/license/graphql-markdown/graphql-markdown?style=flat-square",alt:"GitHub License"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://coveralls.io/github/graphql-markdown/graphql-markdown?branch=main"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/coveralls/github/graphql-markdown/graphql-markdown?style=flat-square",alt:"Coverage Status"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.stryker-mutator.io/reports/github.com/graphql-markdown/graphql-markdown/main"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/endpoint?label=mutation%20score&style=flat-square&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%25graphql-markdown%2Fgraphql-markdown%2Fmain",alt:"Mutation Score"})),"\n",(0,o.kt)("a",{parentName:"p",href:"http://commitizen.github.io/cz-cli/"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/commitizen-friendly-brightgreen.svg",alt:"Commitizen friendly"}))),(0,o.kt)("p",null,"This plugin generates a ",(0,o.kt)("strong",{parentName:"p"},"Markdown documentation")," from a ",(0,o.kt)("strong",{parentName:"p"},"GraphQL schema"),"."),(0,o.kt)("p",null,"The documentation is generated for ",(0,o.kt)("strong",{parentName:"p"},"Docusaurus")," ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/docs-introduction"},"docs feature"),"."),(0,o.kt)("h2",{id:"try-it"},"Try it"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/edno-graphql-markdown-demo-iiyj3c?file=/graphql-markdown.config.js"},"CodeSandbox template")," or fork our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown-demo"},"demo repo")," to try with your own GraphQL schema."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Edit the configuration in ",(0,o.kt)("inlineCode",{parentName:"li"},"graphql-markdown.config.js")),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"npx docusaurus graphql-to-doc")," in a new terminal")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"graphql")," package is a peer-dependency starting version ",(0,o.kt)("inlineCode",{parentName:"strong"},"1.7.0"),", and it must be installed separatly.")),(0,o.kt)("h3",{id:"npm"},"npm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @edno/docusaurus2-graphql-doc-generator graphql\n")),(0,o.kt)("h3",{id:"yarn"},"Yarn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @edno/docusaurus2-graphql-doc-generator graphql\n")),(0,o.kt)("p",null,"Add ",(0,o.kt)("inlineCode",{parentName:"p"},"@edno/docusaurus2-graphql-doc-generator")," to your site's ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," plugins option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  // ...\n  plugins: ["@edno/docusaurus2-graphql-doc-generator"],\n};\n')),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"You can define some or all of the plugin options directly at the plugin level in the Docusaurus configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  // ...\n  plugins: [\n    [\n      \'@edno/docusaurus2-graphql-doc-generator\',\n      {\n        schema: "./schema/swapi.graphql",\n        rootPath: "./docs", // docs will be generated under \'./docs/swapi\' (rootPath/baseURL)\n        baseURL: "swapi",\n        homepage: "./docs/swapi.md",\n      },\n    ],\n  ],\n};\n')),(0,o.kt)("p",null,"Each option is described in the section ",(0,o.kt)("a",{parentName:"p",href:"#options"},"Options"),"."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"#plugin-multi-instance"},"multi-intance")," section, if you want to use 2 distinct schemas."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The plugin adds a new command ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-to-doc")," to the ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/cli"},"Docusaurus CLI"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx docusaurus graphql-to-doc\n")),(0,o.kt)("p",null,"Command line options are described in the section ",(0,o.kt)("a",{parentName:"p",href:"#options"},"Options"),"."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"By default, the plugin will use the options as defined in the plugin's ",(0,o.kt)("a",{parentName:"p",href:"#configuration"},"configuration"),", but they can be overridden by passing them with the command."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Config File"),(0,o.kt)("th",{parentName:"tr",align:null},"CLI Flag"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"baseURL")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"-b, --base <baseURL>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"schema")),(0,o.kt)("td",{parentName:"tr",align:null},"The base URL to be used by Docusaurus. It will also be used as folder name under ",(0,o.kt)("inlineCode",{parentName:"td"},"rootPath")," for the generated documentation.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"diffMethod")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"-d, --diff <diffMethod>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"SCHEMA-DIFF")),(0,o.kt)("td",{parentName:"tr",align:null},"The method to be used for identifying changes in the schema for triggering the documentation generation. The possible values are:",(0,o.kt)("br",null)," - ",(0,o.kt)("inlineCode",{parentName:"td"},"SCHEMA-DIFF"),": use ",(0,o.kt)("a",{parentName:"td",href:"https://graphql-inspector.com/"},"GraphQL Inspector")," for identifying changes in the schema (including description)",(0,o.kt)("br",null)," - ",(0,o.kt)("inlineCode",{parentName:"td"},"SCHEMA-HASH"),": use the schema SHA-256 hash for identifying changes in the schema (this method is sensitive to white spaces and invisible characters)",(0,o.kt)("br",null),"Any other value will disable the change detection.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"groupByDirective")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"-gdb, --groupByDirective <@directive(field\\|=fallback)>")),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"Group documentation by directive (see ",(0,o.kt)("a",{parentName:"td",href:"#option-groupbydirective"},"groupByDirective"),").")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"homepage")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"-h, --homepage <homepage>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"generated.md")),(0,o.kt)("td",{parentName:"tr",align:null},"The location of the landing page to be used for the documentation, relative to the current workspace. The file will be copied at the root folder of the generated documentation.",(0,o.kt)("br",null),"By default, the plugin provides a default page ",(0,o.kt)("inlineCode",{parentName:"td"},"assets/generated.md"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"linkRoot")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"-l, --link <linkRoot>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/")),(0,o.kt)("td",{parentName:"tr",align:null},"The root for links in documentation. It depends on the entry for the schema main page in the Docusaurus sidebar.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"loaders")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'{GraphQLFileLoader: "@graphql-tools/graphql-file-loader"}')),(0,o.kt)("td",{parentName:"tr",align:null},"GraphQL schema loader/s to be used (see ",(0,o.kt)("a",{parentName:"td",href:"#plugin-loaders"},"Loaders"),").")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pretty")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--pretty")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"Use ",(0,o.kt)("inlineCode",{parentName:"td"},"prettier")," to format generated files. The package ",(0,o.kt)("inlineCode",{parentName:"td"},"prettier")," has to be installed separately. If ",(0,o.kt)("inlineCode",{parentName:"td"},"prettier")," is not present, then the formatting will be always skipped.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"rootPath")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"-r, --root <rootPath>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"./docs")),(0,o.kt)("td",{parentName:"tr",align:null},"The output root path for the generated documentation, relative to the current workspace. The final path will be ",(0,o.kt)("inlineCode",{parentName:"td"},"rootPath/baseURL"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"schema")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"-s, --schema <schema>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"./schema.graphql")),(0,o.kt)("td",{parentName:"tr",align:null},"The schema location. It should be compatible with the GraphQL Tools ",(0,o.kt)("a",{parentName:"td",href:"https://www.graphql-tools.com/docs/schema-loading"},"schema loaders")," (see ",(0,o.kt)("a",{parentName:"td",href:"#plugin-loaders"},"Loaders"),").")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"tmpDir")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"-t, --tmp <tmpDir>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"OS temp folder")),(0,o.kt)("td",{parentName:"tr",align:null},"The folder used for storing schema copy and signature used by ",(0,o.kt)("inlineCode",{parentName:"td"},"diffMethod"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"-f, --force")),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"Force documentation generation (bypass diff).")))),(0,o.kt)("h3",{id:"plugin-multi-instance"},"Plugin Multi-instance"),(0,o.kt)("p",null,"From 1.9.0, the plugin can support multiple instances."),(0,o.kt)("p",null,"To add another instance, you need to assign a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," attribute to plugin instances (if not set, then ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," value is ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'plugins: [\n    [\n      \'@edno/docusaurus2-graphql-doc-generator\',\n       {\n        // id: \'swapi\', // omitted => default instance\n        schema: "./schema/swapi.graphql",\n        rootPath: "./docs", // docs will be generated under \'./docs/swapi\' (rootPath/baseURL)\n        baseURL: "swapi",\n        homepage: "./docs/swapi.md",\n      },\n    ],\n    [\n      \'@edno/docusaurus2-graphql-doc-generator\',\n      {\n        id: "admin",\n        schema: "./schema/admin.graphql",\n        rootPath: "./docs", // docs will be generated under \'./docs/admin\' (rootPath/baseURL)\n        baseURL: "admin",\n        homepage: "./docs/admin.md",\n      },\n    ],\n  ],\n')),(0,o.kt)("p",null,"Instance with an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," will have their own command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx docusaurus graphql-to-doc:admin\n")),(0,o.kt)("h3",{id:"plugin-loaders"},"Plugin Loaders"),(0,o.kt)("p",null,"Starting version ",(0,o.kt)("inlineCode",{parentName:"p"},"1.5.0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus2-graphql-doc-generator")," only provides ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-file-loader")," document loader out-of-the-box.\nThus, by default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"schema")," default loading expects a local GraphQL schema definition file (",(0,o.kt)("inlineCode",{parentName:"p"},"*.graphql"),")."),(0,o.kt)("p",null,"However, this behaviour can be extended by installing additional GraphQL document loaders (see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/tree/master/packages/loaders"},"full list"),")."),(0,o.kt)("p",null,"If you want to load a schema from a URL, you first need to install the package ",(0,o.kt)("inlineCode",{parentName:"p"},"@graphql-tools/url-loader")," into your Docusaurus project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @graphql-tools/url-loader\n")),(0,o.kt)("p",null,"Once done, you can declare the loader into ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus2-graphql-doc-generator")," configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"plugins: [\n  [\n    '@edno/docusaurus2-graphql-doc-generator',\n    {\n      // ... other options\n      loaders: {\n        UrlLoader: \"@graphql-tools/url-loader\"\n      }\n    },\n  ],\n],\n")),(0,o.kt)("p",null,"You can declare as many loaders as you need using the structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'type className = string; // UrlLoader\n\ntype moduleName = string; // "@graphql-tools/url-loader"\ntype moduleOptions = { [option: string]: any };\n\ntype module = { \n  module: moduleName, \n  options: moduleOptions | undefined \n}\n\ntype loaders = {\n  [className: className]: moduleName | module\n}\n')),(0,o.kt)("h3",{id:"site-settings"},"Site Settings"),(0,o.kt)("p",null,"You will also need to add a link to your documentation on your site. One way to do it is to add it to your site's navbar in ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  // ...\n  navbar: {\n    items: [\n      {\n        to: "/swapi/homepage", // adjust the location depending on your baseURL (see configuration)\n        label: "SWAPI Schema", // change the label with yours\n        position: "left",\n      },\n    ],\n  },\n};\n')),(0,o.kt)("p",null,"For more details about navbar, please refer to Docusaurus 2 ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/themes/configuration#navbar-link"},"documentation"),"."),(0,o.kt)("h3",{id:"sidebars-settings"},"Sidebars Settings"),(0,o.kt)("p",null,"A sidebar file ",(0,o.kt)("inlineCode",{parentName:"p"},"sidebar-schema.js")," will be generated for the documentation, you have different options depending on your Docusaurus setup:"),(0,o.kt)("h4",{id:"1-single-docs-instance"},"1. Single Docs instance"),(0,o.kt)("p",null,"In this use case, you have a unique set of documentation, then you just need to add a reference to ",(0,o.kt)("inlineCode",{parentName:"p"},"sidebar-schema.js")," into the default ",(0,o.kt)("inlineCode",{parentName:"p"},"sidebar.js"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  docsSidebar: [\n    // ... your site\'s sidebar\n  ],\n  ...require("./docs/swapi/sidebar-schema.js"),\n};\n')),(0,o.kt)("h5",{id:"important"},"Important"),(0,o.kt)("p",null,"The sidebar path must be relative to the ",(0,o.kt)("inlineCode",{parentName:"p"},"sidebars.js")," location. By default, the plugin provides a relative path from the root folder of Docusaurus."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For example, if your ",(0,o.kt)("inlineCode",{parentName:"p"},"sidebars.js")," is located under ",(0,o.kt)("inlineCode",{parentName:"p"},"./src")," folder, then you need to go one level up in the path: ",(0,o.kt)("inlineCode",{parentName:"p"},"./../docs/swapi/sidebar-schema"))),(0,o.kt)("h4",{id:"2-docs-multi-instance"},"2. Docs Multi-instance"),(0,o.kt)("p",null,"In this use case, you have multiple sets of documentation (a.k.a. ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/docs-multi-instance"},"Docs Multi-instance"),"), then you need to add a reference to ",(0,o.kt)("inlineCode",{parentName:"p"},"sidebar-schema.js")," into the dedicated instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"@docusaurus/plugin-content-docs"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"plugins: [\n  [\n    '@docusaurus/plugin-content-docs',\n    {\n      id: 'api',\n      path: 'api',\n      routeBasePath: 'api',\n      sidebarPath: require.resolve('./api/sidebar-schema.js'),\n      // ... other options\n    },\n  ],\n],\n")),(0,o.kt)("h3",{id:"home-page"},"Home Page"),(0,o.kt)("p",null,"If you decide to use your own home page for the GraphQL generated documentation, then set the page ID to ",(0,o.kt)("inlineCode",{parentName:"p"},"id: schema")," and the sidebar position to ",(0,o.kt)("inlineCode",{parentName:"p"},"sidebar_position: 1"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"---\nid: schema\nslug: /schema\ntitle: Schema Documentation\nsidebar_position: 1\n---\n\nThis documentation has been automatically generated from the GraphQL schema.\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Trick"))),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"If you want to hide it from the sidebar (like in the demo), then set the front matter ",(0,o.kt)("inlineCode",{parentName:"em"},"sidebar_class_name")," (or ",(0,o.kt)("inlineCode",{parentName:"em"},"className")," depending on your Docusaurus version) to ",(0,o.kt)("inlineCode",{parentName:"em"},"navbar__toggle"),".")),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"---\nid: schema\nslug: /schema\ntitle: Schema Documentation\nsidebar_position: 1\nsidebar_class_name: navbar__toggle\n---\n"))),(0,o.kt)("h3",{id:"option-diffmethod"},"Option ",(0,o.kt)("inlineCode",{parentName:"h3"},"diffMethod")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"diffMethod")," is only used for identifying if the schema has changed. If a change is detected since the last documentation generation, then the full schema documentation will be generated."),(0,o.kt)("h3",{id:"option-groupbydirective"},"Option ",(0,o.kt)("inlineCode",{parentName:"h3"},"groupByDirective")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"groupByDirective")," is used to add grouping to the documentation to provide for an easier user experience to navigate. This is accomplished by adding a directive to all the types you want to have grouped."),(0,o.kt)("p",null,"For example, we have two mutations called ",(0,o.kt)("inlineCode",{parentName:"p"},"addCourse")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"dropCourse"),", and we want to group them under a category called ",(0,o.kt)("inlineCode",{parentName:"p"},"Courses"),"."),(0,o.kt)("p",null,"We can accomplish this by adding a directive called ",(0,o.kt)("inlineCode",{parentName:"p"},"doc")," with a field ",(0,o.kt)("inlineCode",{parentName:"p"},"category")," to each mutation. Also, we can add a fallback option called ",(0,o.kt)("inlineCode",{parentName:"p"},"Common")," which is for types that we don't explicitly add a directive to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'type Mutation{\n  AddCourse(input: String): String  @doc(category: "Course") \n}\n\ntype Mutation{\n  DropCourse(input: String): String  @doc(category: "Course") \n}\n')),(0,o.kt)("p",null,"It can be set either with the command line flag ",(0,o.kt)("inlineCode",{parentName:"p"},"-gdb"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'npx docusaurus graphql-to-doc -gdb "@doc(category|=Common)"\n')),(0,o.kt)("p",null,"or the plugin configuration ",(0,o.kt)("inlineCode",{parentName:"p"},"groupByDirective"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'plugins: [\n  [\n    \'@edno/docusaurus2-graphql-doc-generator\',\n    {\n      // ... other options\n      groupByDirective: {\n        directive: "doc",\n        field: "category",\n        fallback: "Common", // default is Miscellaneous\n      }\n    },\n  ],\n],\n')),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h3",{id:"duplicate-graphql-modules-cannot-be-used-at-the-same-time"},(0,o.kt)("inlineCode",{parentName:"h3"},'Duplicate "graphql" modules cannot be used at the same time')),(0,o.kt)("p",null,"Add a ",(0,o.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs/selective-version-resolutions/"},(0,o.kt)("inlineCode",{parentName:"a"},"resolutions"))," entry to your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"resolutions": {\n  "graphql": "15.5.2"\n}\n')),(0,o.kt)("h3",{id:"unable-to-find-any-graphql-type-definitions"},(0,o.kt)("inlineCode",{parentName:"h3"},"Unable to find any GraphQL type definitions")),(0,o.kt)("p",null,"Try changing the temporary folder for the plugin by setting ",(0,o.kt)("inlineCode",{parentName:"p"},'tmpDir: "./.docusaurus"')," (see ",(0,o.kt)("a",{parentName:"p",href:"#options"},"options")," section for more details)."),(0,o.kt)("p",null,"You can also disable the schema diff feature by setting ",(0,o.kt)("inlineCode",{parentName:"p"},'diffMethod: "NONE"'),"."),(0,o.kt)("h3",{id:"unable-to-find-any-graphql-type-definitions-for-the-following-pointers"},(0,o.kt)("inlineCode",{parentName:"h3"},"Unable to find any GraphQL type definitions for the following pointers")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This error may occur when upgrading to version ",(0,o.kt)("inlineCode",{parentName:"p"},"1.5.0")," or above.")),(0,o.kt)("p",null,"Install and declare the missing GraphQL document loader package, see ",(0,o.kt)("a",{parentName:"p",href:"#plugin-loaders"},"Loaders"),"."),(0,o.kt)("p",null,"If the error persists, check that you have the correct class name in the configuration declaration."),(0,o.kt)("h2",{id:"contributions"},"Contributions"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"CONTRIBUTING.md"},"Contributions"),", issues and feature requests are very welcome. If you are using this package and fixed a bug for yourself, please consider submitting a PR!"),(0,o.kt)("a",{href:"https://github.com/graphql-markdown/graphql-markdown/graphs/contributors"},(0,o.kt)("img",{src:"https://contrib.rocks/image?repo=graphql-markdown/graphql-markdown"})),(0,o.kt)("p",null,"Made with ",(0,o.kt)("a",{parentName:"p",href:"https://contrib.rocks"},"contributors-img"),"."))}c.isMDXComponent=!0}}]);