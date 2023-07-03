"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:4},i="Configuration",s={unversionedId:"configuration",id:"configuration",title:"Configuration",description:"You can define some or all of the plugin settings directly at the plugin level in the Docusaurus configuration file docusaurus.config.js:",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",draft:!1,editUrl:"https://github.com/graphql-markdown/graphql-markdown/tree/main/docs/configuration.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Getting started",permalink:"/docs/get-started"},next:{title:"Settings",permalink:"/docs/settings"}},l={},p=[{value:"Sidebar",id:"sidebar",level:2},{value:"Site Settings",id:"site-settings",level:2},{value:"GraphQL Config",id:"graphql-config",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You can define some or all of the plugin settings directly at the plugin level in the Docusaurus configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  // ...\n  plugins: [\n    [\n      "@graphql-markdown/docusaurus",\n      {\n        schema: "./schema/swapi.graphql",\n        rootPath: "./docs", // docs will be generated under \'./docs/swapi\' (rootPath/baseURL)\n        baseURL: "swapi",\n        homepage: "./docs/swapi.md",\n        loaders: {\n          GraphQLFileLoader: "@graphql-tools/graphql-file-loader" // local file schema\n        },\n      },\n    ],\n  ],\n};\n')),(0,r.kt)("p",null,"All settings are described in the page ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/settings"},"settings")),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to use several GraphQL schemas, read our guide for ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/advanced/additional-schema"},"additional schema")),".")),(0,r.kt)("h2",{id:"sidebar"},"Sidebar"),(0,r.kt)("p",null,"A sidebar file ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebar-schema.js")," will be generated for the documentation, and you need to add a reference to ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebar-schema.js")," into the default ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebar.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebar.js"',title:'"sidebar.js"'},'module.exports = {\n  docsSidebar: [\n    // ... your site\'s sidebar\n  ],\n  ...require("./docs/swapi/sidebar-schema.js"),\n};\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The sidebar path must be relative to the ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebars.js")," location. By default, the plugin provides a relative path from the root folder of Docusaurus."),(0,r.kt)("p",{parentName:"admonition"},"For example, if your ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebars.js")," is located under ",(0,r.kt)("inlineCode",{parentName:"p"},"./src")," folder, then you need to go one level up in the path: ",(0,r.kt)("inlineCode",{parentName:"p"},"./../docs/swapi/sidebar-schema"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/advanced/docs-multi-instance"},"docs multi-instance"))," for sidebar settings when using multiple sets of documentation.")),(0,r.kt)("h2",{id:"site-settings"},"Site Settings"),(0,r.kt)("p",null,"You will also need to add a link to your documentation on your site. One way to do it is to add it to your site's ",(0,r.kt)("inlineCode",{parentName:"p"},"navbar")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  // ...\n  navbar: {\n    items: [\n      {\n        to: "/swapi/homepage", // adjust the location depending on your baseURL (see configuration)\n        label: "SWAPI Schema", // change the label with yours\n        position: "left",\n      },\n    ],\n  },\n};\n')),(0,r.kt)("p",null,"For more details about ",(0,r.kt)("inlineCode",{parentName:"p"},"navbar"),", please refer to Docusaurus ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/themes/configuration#navbar"},"documentation"),"."),(0,r.kt)("h2",{id:"graphql-config"},"GraphQL Config"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The GraphQL-Markdown template provides GraphQL Config as default configuration file.")),(0,r.kt)("p",null,"Instead of defining the configuration alongside the Docusaurus config file, you can use a ",(0,r.kt)("a",{parentName:"p",href:"https://the-guild.dev/graphql/config/docs/user/usage"},"GraphQL Config")," file (multiple formats supported)."),(0,r.kt)("p",null,"You need to install the package ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-config"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install graphql-config\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  // ...\n  plugins: ["@graphql-markdown/docusaurus"],\n};\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".graphqlrc"',title:'".graphqlrc"'},'schema: "https://graphql.anilist.co/"\nextensions:\n  graphql-markdown:\n    linkRoot: "/examples/default"\n    baseURL: "."\n    homepage: "data/anilist.md"\n    loaders:\n      UrlLoader:\n        module: "@graphql-tools/url-loader"\n        options: \n          method: "POST"\n    printTypeOptions:\n      deprecated: "group"\n    docOptions:\n      pagination: false,\n      toc: false\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Note that ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"schema")," is not part of the extension configuration"),", but part of the default graphql-config configuration.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Current limitations:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"single schema only, no schema stitching"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"include"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"exclude"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"documents")," and glob pattern are not supported")))}d.isMDXComponent=!0}}]);