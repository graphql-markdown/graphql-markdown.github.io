"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6588],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=d(a),u=l,g=k["".concat(p,".").concat(u)]||k[u]||s[u]||r;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[k]="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7738:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(7462),l=(a(7294),a(3905));const r={sidebar_position:5},i="Settings",o={unversionedId:"settings",id:"settings",title:"Settings",description:"By default, the plugin will use the options as defined in the configuration, and they can be overridden using CLI flags.",source:"@site/docs/settings.md",sourceDirName:".",slug:"/settings",permalink:"/docs/settings",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"Configuration",permalink:"/docs/configuration"},next:{title:"Advanced settings",permalink:"/docs/category/advanced-settings"}},p={},d=[{value:"<code>baseURL</code>",id:"baseurl",level:2},{value:"<code>diffMethod</code>",id:"diffmethod",level:2},{value:"<code>docOptions</code>",id:"docoptions",level:2},{value:"<code>groupByDirective</code>",id:"groupbydirective",level:2},{value:"<code>homepage</code>",id:"homepage",level:2},{value:"<code>linkRoot</code>",id:"linkroot",level:2},{value:"<code>loaders</code>",id:"loaders",level:2},{value:"<code>printTypeOptions</code>",id:"printtypeoptions",level:2},{value:"<code>pretty</code>",id:"pretty",level:2},{value:"<code>rootPath</code>",id:"rootpath",level:2},{value:"<code>schema</code>",id:"schema",level:2},{value:"<code>skipDocDirective</code>",id:"skipdocdirective",level:2},{value:"<code>tmpDir</code>",id:"tmpdir",level:2}],m={toc:d};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"settings"},"Settings"),(0,l.kt)("p",null,"By default, the plugin will use the options as defined in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/configuration"},"configuration"),", and they can be overridden using CLI flags."),(0,l.kt)("h2",{id:"baseurl"},(0,l.kt)("inlineCode",{parentName:"h2"},"baseURL")),(0,l.kt)("p",null,"The base URL to be used by Docusaurus. It will also be used as folder name under ",(0,l.kt)("a",{parentName:"p",href:"#rootpath"},(0,l.kt)("inlineCode",{parentName:"a"},"rootPath"))," for the generated documentation."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"CLI flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"baseURL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-b, --base <baseURL>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schema"))))),(0,l.kt)("h2",{id:"diffmethod"},(0,l.kt)("inlineCode",{parentName:"h2"},"diffMethod")),(0,l.kt)("p",null,"The method to be used for identifying changes in the schema for triggering the documentation generation."),(0,l.kt)("p",null,"The possible values are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FORCE"),": skip diff, always generate documentation, same as CLI flag ",(0,l.kt)("inlineCode",{parentName:"li"},"-f")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"--force"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NONE"),": skip diff (same as ",(0,l.kt)("inlineCode",{parentName:"li"},"FORCE"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SCHEMA-DIFF"),": use ",(0,l.kt)("a",{parentName:"li",href:"https://graphql-inspector.com"},"GraphQL Inspector")," for identifying changes in the schema (including description)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SCHEMA-HASH"),": use the schema SHA-256 hash for identifying changes in the schema (this method is sensitive to white spaces and invisible characters)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"CLI flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"diffMethod")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-d, --diff <diffMethod>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NONE"))))),(0,l.kt)("br",null),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The package ",(0,l.kt)("inlineCode",{parentName:"p"},"@graphql-markdown/diff")," is required for using ",(0,l.kt)("inlineCode",{parentName:"p"},"diffMethod"),".\nIf the package is missing, then the change detection will be skipped."),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @graphql-markdown/diff\n"))),(0,l.kt)("h2",{id:"docoptions"},(0,l.kt)("inlineCode",{parentName:"h2"},"docOptions")),(0,l.kt)("p",null,"Use these options to tweak some of the Docusaurus documentation features:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pagination"),": page buttons ",(0,l.kt)("inlineCode",{parentName:"li"},"Previous")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"Next")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"toc"),": page table of content"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"index"),": generate index page for categories/groups, see ",(0,l.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/sidebar/items#generated-index-page"},"Docusaurus documentation"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"CLI flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"docOptions.pagination")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--noPagination")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"docOptions.toc")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--noToc")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"docOptions.index")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--index")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"{9-13}","{9-13}":!0},'plugins: [\n    [\n      "@graphql-markdown/docusaurus",\n       {\n        schema: "./schema/swapi.graphql",\n        rootPath: "./docs",\n        baseURL: "swapi",\n        homepage: "./docs/swapi.md",\n        docOptions: {\n          pagination: false, // disable buttons previous and next, same as CLI flag --noPagination\n          toc: false, // disable page table of content, same as CLI flag --noToc\n          index: true, // enable generated index pages, same as CLI flag --index\n        },\n        loaders: {\n          GraphQLFileLoader: "@graphql-tools/graphql-file-loader" // local file schema\n        },\n      },\n    ],\n  ],\n')),(0,l.kt)("h2",{id:"groupbydirective"},(0,l.kt)("inlineCode",{parentName:"h2"},"groupByDirective")),(0,l.kt)("p",null,"Use a GraphQL directive for creating documentation categories (see ",(0,l.kt)("a",{parentName:"p",href:"/docs/advanced/group-by-directive"},"documentation categories"),")."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"CLI flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"groupByDirective")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"-gdb, --groupByDirective <@directive(field","|","=fallback)>")),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"homepage"},(0,l.kt)("inlineCode",{parentName:"h2"},"homepage")),(0,l.kt)("p",null,"The location of the landing page to be used for the documentation, relative to the current workspace (see ",(0,l.kt)("a",{parentName:"p",href:"/docs/advanced/homepage"},"custom homepage"),"). The file will be copied at the root folder of the generated documentation."),(0,l.kt)("p",null,"The plugin provides a default page in ",(0,l.kt)("inlineCode",{parentName:"p"},"assets/generated"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"CLI flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"homepage")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-h, --homepage <homepage>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"generated.md"))))),(0,l.kt)("br",null),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The GraphQL-Markdown template for Docusaurus provides a customized homepage located at ",(0,l.kt)("inlineCode",{parentName:"p"},"static/index.md"),".")),(0,l.kt)("h2",{id:"linkroot"},(0,l.kt)("inlineCode",{parentName:"h2"},"linkRoot")),(0,l.kt)("p",null,"The root for links in documentation. It depends on the entry for the schema main page in the Docusaurus sidebar."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"CLI flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"linkRoot")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-l, --link <linkRoot>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/"))))),(0,l.kt)("h2",{id:"loaders"},(0,l.kt)("inlineCode",{parentName:"h2"},"loaders")),(0,l.kt)("p",null,"GraphQL schema loaders to use (see ",(0,l.kt)("a",{parentName:"p",href:"/docs/advanced/schema-loading"},"schema loading"),")."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"CLI flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"loaders")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"not supported")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{ }"))))),(0,l.kt)("h2",{id:"printtypeoptions"},(0,l.kt)("inlineCode",{parentName:"h2"},"printTypeOptions")),(0,l.kt)("p",null,"Use these options to toggle type information rendered on pages:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"parentTypePrefix"),": prefix field names with parent type name"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"relatedTypeSection"),": display related type sections"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"typeBadges"),": add field type attributes badges")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"CLI flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"printTypeOptions.parentTypePrefix")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--noParentType")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"printTypeOptions.relatedTypeSection")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--noRelatedType")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"printTypeOptions.typeBadges")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--noTypeBadges")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))))),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"{9-13}","{9-13}":!0},'plugins: [\n    [\n      "@graphql-markdown/docusaurus",\n       {\n        schema: "./schema/swapi.graphql",\n        rootPath: "./docs",\n        baseURL: "swapi",\n        homepage: "./docs/swapi.md",\n        printTypeOptions: {\n          parentTypePrefix: false, // disable parent prefix, same as CLI flag --noParentType\n          relatedTypeSection: false, // disable related type sections, same as CLI flag --noRelatedType\n          typeBadges: false, // disable type attribute badges, same as CLI flag --noTypeBadges\n        },\n        loaders: {\n          GraphQLFileLoader: "@graphql-tools/graphql-file-loader" // local file schema\n        }\n      },\n    ],\n  ],\n')),(0,l.kt)("h2",{id:"pretty"},(0,l.kt)("inlineCode",{parentName:"h2"},"pretty")),(0,l.kt)("p",null,"Use ",(0,l.kt)("a",{parentName:"p",href:"https://prettier.io"},(0,l.kt)("inlineCode",{parentName:"a"},"prettier"))," to format generated files."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"CLI flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pretty")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--pretty")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("br",null),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"prettier")," package has to be installed separately. If the package is not present locally, then the formatting will always be skipped.")),(0,l.kt)("h2",{id:"rootpath"},(0,l.kt)("inlineCode",{parentName:"h2"},"rootPath")),(0,l.kt)("p",null,"The output root path for the generated documentation, relative to the current workspace. The final path will be ",(0,l.kt)("inlineCode",{parentName:"p"},"rootPath/baseURL"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"CLI flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rootPath")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-r, --root <rootPath>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"./docs"))))),(0,l.kt)("h2",{id:"schema"},(0,l.kt)("inlineCode",{parentName:"h2"},"schema")),(0,l.kt)("p",null,"The GraphQL schema location."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"CLI flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schema")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-s, --schema <schema>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"./schema.graphql"))))),(0,l.kt)("h2",{id:"skipdocdirective"},(0,l.kt)("inlineCode",{parentName:"h2"},"skipDocDirective")),(0,l.kt)("p",null,"The schema directive used for skipping types from documentation."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"CLI flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"skipDocDirective")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--skip <@directive>")),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"tmpdir"},(0,l.kt)("inlineCode",{parentName:"h2"},"tmpDir")),(0,l.kt)("p",null,"The folder used for storing schema copy and signature used by ",(0,l.kt)("a",{parentName:"p",href:"#diffmethod"},(0,l.kt)("inlineCode",{parentName:"a"},"diffMethod"))," setting."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"CLI flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tmpDir")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-t, --tmp <tmpDir>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"OS temp folder"))))))}k.isMDXComponent=!0}}]);