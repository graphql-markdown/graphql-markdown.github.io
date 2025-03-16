"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["2242"],{55354:function(e,n,l){l.r(n),l.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>s});var t=JSON.parse('{"id":"helpers/utils/interpolate","title":"interpolate","description":"Helpers utility functions library.","source":"@site/api/helpers/utils/interpolate.md","sourceDirName":"helpers/utils","slug":"/helpers/utils/interpolate","permalink":"/api/helpers/utils/interpolate","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"interpolate","pagination_prev":null,"pagination_next":null,"toc_max_heading_level":2},"sidebar":"defaultSidebar"}'),r=l("85893"),a=l("50065");let i={title:"interpolate",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},s=void 0,c={},d=[{value:"getObjPath()",id:"getobjpath",level:2},{value:"Parameters",id:"parameters",level:3},{value:"path",id:"path",level:4},{value:"obj",id:"obj",level:4},{value:"fallback",id:"fallback",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"interpolate()",id:"interpolate",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"template",id:"template",level:4},{value:"variables",id:"variables",level:4},{value:"fallback?",id:"fallback-1",level:4},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Helpers utility functions library."}),"\n",(0,r.jsx)(n.h2,{id:"getobjpath",children:"getObjPath()"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function getObjPath(\n   path, \n   obj, \n   fallback): unknown\n"})}),"\n",(0,r.jsx)(n.p,{children:"Defined in: utils/interpolate.ts:31"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Internal"})})}),"\n",(0,r.jsx)(n.p,{children:"Returns the value of the specified property or nested property of an object using a string path."}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(n.h4,{id:"path",children:"path"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Maybe"}),"<",(0,r.jsx)(n.code,{children:"string"}),">"]}),"\n",(0,r.jsx)(n.p,{children:"property path as string."}),"\n",(0,r.jsx)(n.h4,{id:"obj",children:"obj"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"unknown"})}),"\n",(0,r.jsx)(n.p,{children:"the key/value record object."}),"\n",(0,r.jsx)(n.h4,{id:"fallback",children:"fallback"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"unknown"})," = ",(0,r.jsx)(n.code,{children:'""'})]}),"\n",(0,r.jsx)(n.p,{children:"optional fallback value to be returned if the path cannot be resolved."}),"\n",(0,r.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"unknown"})}),"\n",(0,r.jsxs)(n.p,{children:["the property value if the path is resolved, else returns the ",(0,r.jsx)(n.code,{children:"fallback"})," value."]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import { getObjPath } from \'@graphql-markdown/utils/object\';\n\ngetObjPath("foo.bar", { foo: { bar: 42 } }); // Returns 42\n\ngetObjPath("foo.bak", { foo: { bar: 42 } }, "fallback"); // Returns "fallback"\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"interpolate",children:"interpolate()"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function interpolate(\n   template, \n   variables, \n   fallback?): string\n"})}),"\n",(0,r.jsx)(n.p,{children:"Defined in: utils/interpolate.ts:64"}),"\n",(0,r.jsx)(n.p,{children:"Interpolate a template literal-like string."}),"\n",(0,r.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsx)(n.h4,{id:"template",children:"template"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"string"})}),"\n",(0,r.jsx)(n.p,{children:"a string template literal-like."}),"\n",(0,r.jsx)(n.h4,{id:"variables",children:"variables"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Maybe"}),"<",(0,r.jsx)(n.code,{children:"Record"}),"<",(0,r.jsx)(n.code,{children:"string"}),", ",(0,r.jsx)(n.code,{children:"unknown"}),"> & ",(0,r.jsx)(n.code,{children:"object"}),">"]}),"\n",(0,r.jsxs)(n.p,{children:["a record map of values with variable's name as key and ",(0,r.jsx)(n.code,{children:"description"})," as directive's description."]}),"\n",(0,r.jsx)(n.h4,{id:"fallback-1",children:"fallback?"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"string"})}),"\n",(0,r.jsx)(n.p,{children:"optional fallback value if a variable cannot be substituted."}),"\n",(0,r.jsx)(n.h3,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"string"})}),"\n",(0,r.jsx)(n.p,{children:"an interpolated new string from the template."}),"\n",(0,r.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const values = { foo: 42, bar: { value: "test" } };\nconst template = "${foo} is not ${bar.notfound}";\n\ninterpolate(template, values, "fallback"); // Expected result: "42 is not fallback",\n'})})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,n,l){l.d(n,{Z:function(){return s},a:function(){return i}});var t=l(67294);let r={},a=t.createContext(r);function i(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);