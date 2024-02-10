"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[4058],{4887:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>r});var s=t(5893),a=t(1151);const c={pagination_prev:null,pagination_next:null},o="Docs multi-instance",i={id:"advanced/docs-multi-instance",title:"Docs multi-instance",description:"In this use case, you have multiple sets of documentation (a.k.a. Docs Multi-instance), then you need to add a reference to sidebar-schema.js into the dedicated instance of @docusaurus/plugin-content-docs:",source:"@site/docs/advanced/docs-multi-instance.md",sourceDirName:"advanced",slug:"/advanced/docs-multi-instance",permalink:"/docs/advanced/docs-multi-instance",draft:!1,unlisted:!1,editUrl:"https://github.com/graphql-markdown/graphql-markdown/tree/main/docs/advanced/docs-multi-instance.md",tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null},sidebar:"defaultSidebar"},d={},r=[];function u(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"docs-multi-instance",children:"Docs multi-instance"}),"\n",(0,s.jsxs)(n.p,{children:["In this use case, you have multiple sets of documentation (a.k.a. ",(0,s.jsx)(n.a,{href:"https://docusaurus.io/docs/docs-multi-instance",children:"Docs Multi-instance"}),"), then you need to add a reference to ",(0,s.jsx)(n.code,{children:"sidebar-schema.js"})," into the dedicated instance of ",(0,s.jsx)(n.code,{children:"@docusaurus/plugin-content-docs"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:'plugins: [\n  [\n    "@docusaurus/plugin-content-docs",\n    {\n      id: "api",\n      path: "api",\n      routeBasePath: "api",\n      sidebarPath: require.resolve("./api/sidebar-schema.js"),\n      // ... other options\n    },\n  ],\n],\n'})})]})}function l(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var s=t(7294);const a={},c=s.createContext(a);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);