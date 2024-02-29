"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[952],{8433:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=r(5893),l=r(1151);const a={title:"interpolate",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},s=void 0,i={id:"helpers/utils/interpolate",title:"interpolate",description:"Helpers utility functions library.",source:"@site/api/helpers/utils/interpolate.md",sourceDirName:"helpers/utils",slug:"/helpers/utils/interpolate",permalink:"/api/helpers/utils/interpolate",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"interpolate",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},o={},c=[{value:"getObjPath()",id:"getobjpath",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"Source",id:"source",level:3},{value:"interpolate()",id:"interpolate",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"Source",id:"source-1",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Helpers utility functions library."}),"\n",(0,t.jsx)(n.h2,{id:"getobjpath",children:"getObjPath()"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Internal"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"getObjPath(\n   path, \n   obj, \n   fallback): unknown\n"})}),"\n",(0,t.jsx)(n.p,{children:"Returns the value of the specified property or nested property of an object using a string path."}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"path"}),": ",(0,t.jsx)(n.code,{children:"Maybe"}),"<",(0,t.jsx)(n.code,{children:"string"}),">"]}),"\n",(0,t.jsx)(n.p,{children:"property path as string."}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"obj"}),": ",(0,t.jsx)(n.code,{children:"unknown"})]}),"\n",(0,t.jsx)(n.p,{children:"the key/value record object."}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"fallback"}),": ",(0,t.jsx)(n.code,{children:"unknown"}),"= ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.p,{children:"optional fallback value to be returned if the path cannot be resolved."}),"\n",(0,t.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"unknown"})}),"\n",(0,t.jsxs)(n.p,{children:["the property value if the path is resolved, else returns the ",(0,t.jsx)(n.code,{children:"fallback"})," value."]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'import { getObjPath } from \'@graphql-markdown/utils/object\';\n\ngetObjPath("foo.bar", { foo: { bar: 42 } }); // Returns 42\n\ngetObjPath("foo.bak", { foo: { bar: 42 } }, "fallback"); // Returns "fallback"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"source",children:"Source"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/186a3f1/packages/helpers/src/utils/interpolate.ts#L31",children:"utils/interpolate.ts:31"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"interpolate",children:"interpolate()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interpolate(\n   template, \n   variables, \n   fallback?): string\n"})}),"\n",(0,t.jsx)(n.p,{children:"Interpolate a template literal-like string."}),"\n",(0,t.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"template"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsx)(n.p,{children:"a string template literal-like."}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"variables"}),": ",(0,t.jsx)(n.code,{children:"Maybe"}),"<",(0,t.jsx)(n.code,{children:"Record"}),"<",(0,t.jsx)(n.code,{children:"string"}),", ",(0,t.jsx)(n.code,{children:"unknown"}),"> & ",(0,t.jsx)(n.code,{children:"Object"}),">"]}),"\n",(0,t.jsxs)(n.p,{children:["a record map of values with variable's name as key and ",(0,t.jsx)(n.code,{children:"description"})," as directive's description."]}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"fallback?"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsx)(n.p,{children:"optional fallback value if a variable cannot be substituted."}),"\n",(0,t.jsx)(n.h3,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"string"})}),"\n",(0,t.jsx)(n.p,{children:"an interpolated new string from the template."}),"\n",(0,t.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const values = { foo: 42, bar: { value: "test" } };\nconst template = "${foo} is not ${bar.notfound}";\n\ninterpolate(template, values, "fallback"); // Expected result: "42 is not fallback",\n'})}),"\n",(0,t.jsx)(n.h3,{id:"source-1",children:"Source"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/186a3f1/packages/helpers/src/utils/interpolate.ts#L64",children:"utils/interpolate.ts:64"})})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>s});var t=r(7294);const l={},a=t.createContext(l);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);