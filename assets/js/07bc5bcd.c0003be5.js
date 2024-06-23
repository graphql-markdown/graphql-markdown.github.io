"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7969],{17288:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var o=t(74848),i=t(28453);const r={pagination_prev:null,pagination_next:null},a="Documentation categories",c={id:"advanced/group-by-directive",title:"Documentation categories",description:"You can group the documentation to provide an easier user experience to navigate. This is accomplished by adding a directive to all the types you want to have grouped.",source:"@site/docs/advanced/group-by-directive.md",sourceDirName:"advanced",slug:"/advanced/group-by-directive",permalink:"/docs/advanced/group-by-directive",draft:!1,unlisted:!1,editUrl:"https://github.com/graphql-markdown/graphql-markdown/tree/main/docs/advanced/group-by-directive.md",tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null},sidebar:"defaultSidebar"},d={},s=[{value:"Usage",id:"usage",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"documentation-categories",children:"Documentation categories"}),"\n",(0,o.jsx)(n.p,{children:"You can group the documentation to provide an easier user experience to navigate. This is accomplished by adding a directive to all the types you want to have grouped."}),"\n",(0,o.jsxs)(n.p,{children:["For example, we have two mutations called ",(0,o.jsx)(n.code,{children:"addCourse"})," and ",(0,o.jsx)(n.code,{children:"dropCourse"}),", and we want to group them under a category called ",(0,o.jsx)(n.code,{children:"Courses"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"type Mutation {\n  AddCourse(input: String): String\n}\n\ntype Mutation {\n  DropCourse(input: String): String\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["We can accomplish this by adding a directive called ",(0,o.jsx)(n.code,{children:"doc"})," with a field ",(0,o.jsx)(n.code,{children:"category"})," to each mutation."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:'type Mutation {\n  AddCourse(input: String): String @doc(category: "Course")\n}\n\ntype Mutation {\n  DropCourse(input: String): String @doc(category: "Course")\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["We can add a fallback option called ",(0,o.jsx)(n.code,{children:"Common"})," which is for types that we don't explicitly add a directive to."]}),"\n",(0,o.jsxs)(n.p,{children:["It can be set either with the command line flag ",(0,o.jsx)(n.code,{children:"--groupByDirective"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'npx docusaurus graphql-to-doc --groupByDirective "@doc(category|=Common)"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["or the plugin configuration ",(0,o.jsx)(n.code,{children:"groupByDirective"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:'plugins: [\n  [\n    "@graphql-markdown/docusaurus",\n    /** @type {import(\'@graphql-markdown/types\').ConfigOptions} */\n    {\n      // ... other options\n      // highlight-start\n      groupByDirective: {\n        directive: "doc",\n        field: "category",\n        fallback: "Common", // default is Miscellaneous\n      }\n      // highlight-end\n    },\n  ],\n],\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var o=t(96540);const i={},r=o.createContext(i);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);