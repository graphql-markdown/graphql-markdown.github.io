"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[8116],{5071:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var a=n(5893),t=n(1151);const s={title:"array",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},l=void 0,c={id:"utils/array",title:"array",description:"Internal library of helpers for manipulating array and list.",source:"@site/api/utils/array.md",sourceDirName:"utils",slug:"/utils/array",permalink:"/api/utils/array",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"array",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},o={},i=[{value:"convertArrayToMapObject()",id:"convertarraytomapobject",level:2},{value:"Type parameters",id:"type-parameters",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"Source",id:"source",level:3},{value:"toArray()",id:"toarray",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"Source",id:"source-1",level:3}];function d(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"Internal library of helpers for manipulating array and list."}),"\n",(0,a.jsx)(r.h2,{id:"convertarraytomapobject",children:"convertArrayToMapObject()"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.code,{children:"Internal"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-ts",children:"convertArrayToMapObject<T>(list): Maybe<Record<string, T>>\n"})}),"\n",(0,a.jsxs)(r.p,{children:["Returns a k/v object from an array of objects with a ",(0,a.jsx)(r.code,{children:"name"})," property."]}),"\n",(0,a.jsx)(r.h3,{id:"type-parameters",children:"Type parameters"}),"\n",(0,a.jsxs)(r.p,{children:["\u2022 ",(0,a.jsx)(r.strong,{children:"T"})]}),"\n",(0,a.jsx)(r.p,{children:"the type of objects the list contains."}),"\n",(0,a.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(r.p,{children:["\u2022 ",(0,a.jsx)(r.strong,{children:"list"}),": ",(0,a.jsx)(r.code,{children:"Maybe"}),"<",(0,a.jsx)(r.code,{children:"T"}),"[]>"]}),"\n",(0,a.jsxs)(r.p,{children:["the list of objects of type ",(0,a.jsx)(r.code,{children:"{ name: any }"})," to be converted."]}),"\n",(0,a.jsx)(r.h3,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"Maybe"}),"<",(0,a.jsx)(r.code,{children:"Record"}),"<",(0,a.jsx)(r.code,{children:"string"}),", ",(0,a.jsx)(r.code,{children:"T"}),">>"]}),"\n",(0,a.jsxs)(r.p,{children:["an array of object values with ",(0,a.jsx)(r.code,{children:"name"})," as key, or ",(0,a.jsx)(r.code,{children:"undefined"})," if ",(0,a.jsx)(r.code,{children:"list"})," is not a valid array."]}),"\n",(0,a.jsx)(r.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:'import { convertArrayToMapObject } from \'@graphql-markdown/utils/array\';\n\nconvertArrayToMapObject([\n    { name: true },\n    { name: "test" },\n    { name: 123 },\n    { name2: 1234 },\n  ]);\n\n// Expected result: {\n//   true: { name: true },\n//   test: { name: "test" },\n//   "123": { name: 123 },\n// }\n'})}),"\n",(0,a.jsx)(r.h3,{id:"source",children:"Source"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/0b8fc86/packages/utils/src/array.ts#L76",children:"array.ts:76"})}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"toarray",children:"toArray()"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.code,{children:"Internal"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-ts",children:"toArray(recordMap): Maybe<unknown[]>\n"})}),"\n",(0,a.jsx)(r.p,{children:"Returns an array of values from a k/v object."}),"\n",(0,a.jsx)(r.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,a.jsxs)(r.p,{children:["\u2022 ",(0,a.jsx)(r.strong,{children:"recordMap"}),": ",(0,a.jsx)(r.code,{children:"Maybe"}),"<",(0,a.jsx)(r.code,{children:"Record"}),"<",(0,a.jsx)(r.code,{children:"string"}),", ",(0,a.jsx)(r.code,{children:"unknown"}),">>"]}),"\n",(0,a.jsx)(r.p,{children:"the key/value record object to be converted."}),"\n",(0,a.jsx)(r.h3,{id:"returns-1",children:"Returns"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"Maybe"}),"<",(0,a.jsx)(r.code,{children:"unknown"}),"[]>"]}),"\n",(0,a.jsxs)(r.p,{children:["an array of object values, or ",(0,a.jsx)(r.code,{children:"undefined"})," if ",(0,a.jsx)(r.code,{children:"recordMap"})," is not a valid object."]}),"\n",(0,a.jsx)(r.h3,{id:"example-1",children:"Example"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:'import { toArray } from \'@graphql-markdown/utils/array\';\n\ntoArray({\n    bool: true,\n    string: "test",\n    number: 123,\n    array: ["one", "two"],\n    child: { key: "value" },\n  });\n\n// Expected result: [true, "test", 123, ["one", "two"], { key: "value" }]\n'})}),"\n",(0,a.jsx)(r.h3,{id:"source-1",children:"Source"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/0b8fc86/packages/utils/src/array.ts#L34",children:"array.ts:34"})})]})}function h(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>l});var a=n(7294);const t={},s=a.createContext(t);function l(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);