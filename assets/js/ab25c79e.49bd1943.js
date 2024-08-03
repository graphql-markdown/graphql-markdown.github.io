"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[4453],{73642:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=t(74848),s=t(28453);const i={title:"object",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},l=void 0,o={id:"utils/object",title:"object",description:"Internal library of helpers for manipulating objects.",source:"@site/api/utils/object.md",sourceDirName:"utils",slug:"/utils/object",permalink:"/api/utils/object",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"object",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},c={},a=[{value:"isEmpty()",id:"isempty",level:2},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"Defined in",id:"defined-in",level:3}];function d(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Internal library of helpers for manipulating objects."}),"\n",(0,r.jsx)(n.h2,{id:"isempty",children:"isEmpty()"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function isEmpty<T>(obj): obj is Exclude<unknown, T>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Check if an object contains key/value records."}),"\n",(0,r.jsx)(n.h3,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"T"})," ",(0,r.jsx)(n.em,{children:"extends"})," ",(0,r.jsx)(n.code,{children:"Record"}),"<",(0,r.jsx)(n.code,{children:"string"}),", ",(0,r.jsx)(n.code,{children:"unknown"}),">"]}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"obj"}),": ",(0,r.jsx)(n.code,{children:"unknown"})]}),"\n",(0,r.jsx)(n.p,{children:"the key/value record object."}),"\n",(0,r.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"obj is Exclude<unknown, T>"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"false"})," if the object is a valid k/v set of records, else ",(0,r.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import { isEmpty } from \'@graphql-markdown/utils/object\';\n\nconst obj = {\n  bool: true,\n  string: "test",\n  number: 123,\n  array: ["one", "two"],\n  child: { key: "value" },\n};\n\nisEmpty(obj); // Returns false\n\nisEmpty({}); // Returns true\n'})}),"\n",(0,r.jsx)(n.h3,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:"object.ts:34"})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);