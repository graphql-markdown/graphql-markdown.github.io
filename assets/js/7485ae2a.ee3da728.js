"use strict";(self.webpackChunkgraphql_markdown_website=self.webpackChunkgraphql_markdown_website||[]).push([[9852],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},l="Getting started",i={unversionedId:"get-started",id:"get-started",title:"Getting started",description:"Get started by creating a new site.",source:"@site/docs/get-started.md",sourceDirName:".",slug:"/get-started",permalink:"/docs/get-started",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Try it",permalink:"/docs/try-it"},next:{title:"Configuration",permalink:"/docs/configuration"}},s={},u=[{value:"New site",id:"new-site",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Generate a new site",id:"generate-a-new-site",level:3},{value:"Start your site",id:"start-your-site",level:3},{value:"Existing site",id:"existing-site",level:2},{value:"What you&#39;ll need",id:"what-youll-need-1",level:3},{value:"Install the plugin",id:"install-the-plugin",level:3},{value:"Configure the plugin",id:"configure-the-plugin",level:3},{value:"Update your documentation",id:"update-your-documentation",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"Get started by ",(0,r.kt)("a",{parentName:"p",href:"#new-site"},"creating a new site"),"."),(0,r.kt)("p",null,"Or try GraphQL-Markdown immediately with our ",(0,r.kt)("a",{parentName:"p",href:"/docs/try-it"},"demo"),"."),(0,r.kt)("h2",{id:"new-site"},"New site"),(0,r.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version 16.14 or above:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When installing Node.js, you are recommended to check all checkboxes related to dependencies.")))),(0,r.kt)("h3",{id:"generate-a-new-site"},"Generate a new site"),(0,r.kt)("p",null,"Generate a new Docusaurus site using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/template"},"GraphQL-Markdown template"),"."),(0,r.kt)("p",null,"The template will automatically be added to your project after you run the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init docusaurus@latest my-website https://github.com/graphql-markdown/template.git\n")),(0,r.kt)("p",null,"You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor."),(0,r.kt)("p",null,"The command also installs all necessary dependencies you need to run Docusaurus."),(0,r.kt)("h3",{id:"start-your-site"},"Start your site"),(0,r.kt)("p",null,"Run the development server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-website\nnpm run docusaurus graphql-to-doc\nnpm start\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run docusaurus graphql-to-doc")," command generates MDX files locally from your GraphQL schema using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/settings"},"settings")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-markdown.config.js"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run start")," command builds your website locally and serves it through a development server, ready for you to view at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/"),"."),(0,r.kt)("h2",{id:"existing-site"},"Existing site"),(0,r.kt)("h3",{id:"what-youll-need-1"},"What you'll need"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version 16.14 or above:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When installing Node.js, you are recommended to check all checkboxes related to dependencies."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/"},"Docusaurus")," instance version 2.0 or above with the ",(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/docs-introduction"},"docs")," feature:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Docs feature is provided by ",(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs"},(0,r.kt)("inlineCode",{parentName:"a"},"@docusaurus/plugin-content-docs"))," or ",(0,r.kt)("inlineCode",{parentName:"li"},"@docusaurus/preset-classic"),".")))),(0,r.kt)("h3",{id:"install-the-plugin"},"Install the plugin"),(0,r.kt)("p",null,"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"@graphql-markdown/docusaurus")," plugin to your site installation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @graphql-markdown/docusaurus graphql\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql")," package is a peer-dependency, and it should be installed if not yet present.")),(0,r.kt)("h3",{id:"configure-the-plugin"},"Configure the plugin"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration"},"configuration"),"."),(0,r.kt)("h2",{id:"update-your-documentation"},"Update your documentation"),(0,r.kt)("p",null,"Run the documentation generator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus graphql-to-doc\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run docusaurus graphql-to-doc")," command generates MDX files locally from your GraphQL schema. The possible command's flags are documented in ",(0,r.kt)("a",{parentName:"p",href:"/docs/settings"},"settings"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The GraphQL-Markdown template provides a short command ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run doc"),".")))}d.isMDXComponent=!0}}]);