"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[924],{97696:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=r(74848),i=r(28453);const t={title:"string",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},d=void 0,l={id:"utils/string",title:"string",description:"Library of helpers for formatting strings.",source:"@site/api/utils/string.md",sourceDirName:"utils",slug:"/utils/string",permalink:"/api/utils/string",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"string",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},a={},c=[{value:"capitalize()",id:"capitalize",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Defined in",id:"defined-in",level:3},{value:"escapeMDX()",id:"escapemdx",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Defined in",id:"defined-in-1",level:3},{value:"firstUppercase()",id:"firstuppercase",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Returns",id:"returns-2",level:3},{value:"Defined in",id:"defined-in-2",level:3},{value:"kebabCase()",id:"kebabcase",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Returns",id:"returns-3",level:3},{value:"Defined in",id:"defined-in-3",level:3},{value:"prune()",id:"prune",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"Returns",id:"returns-4",level:3},{value:"Defined in",id:"defined-in-4",level:3},{value:"replaceDiacritics()",id:"replacediacritics",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"Returns",id:"returns-5",level:3},{value:"Defined in",id:"defined-in-5",level:3},{value:"slugify()",id:"slugify",level:2},{value:"Parameters",id:"parameters-6",level:3},{value:"Returns",id:"returns-6",level:3},{value:"Example",id:"example",level:3},{value:"Defined in",id:"defined-in-6",level:3},{value:"startCase()",id:"startcase",level:2},{value:"Parameters",id:"parameters-7",level:3},{value:"Returns",id:"returns-7",level:3},{value:"Defined in",id:"defined-in-7",level:3},{value:"stringCaseBuilder()",id:"stringcasebuilder",level:2},{value:"Parameters",id:"parameters-8",level:3},{value:"Returns",id:"returns-8",level:3},{value:"Defined in",id:"defined-in-8",level:3},{value:"toHTMLUnicode()",id:"tohtmlunicode",level:2},{value:"Parameters",id:"parameters-9",level:3},{value:"Returns",id:"returns-9",level:3},{value:"Defined in",id:"defined-in-9",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Library of helpers for formatting strings."}),"\n",(0,s.jsx)(n.h2,{id:"capitalize",children:"capitalize()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function capitalize(str): string\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"str"}),": ",(0,s.jsx)(n.code,{children:"Maybe"}),"<",(0,s.jsx)(n.code,{children:"string"}),">"]}),"\n",(0,s.jsx)(n.p,{children:"the string to be transformed."}),"\n",(0,s.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"string"})}),"\n",(0,s.jsxs)(n.p,{children:["a capitalized string, or an empty string if ",(0,s.jsx)(n.code,{children:"str"})," is not a valid string."]}),"\n",(0,s.jsx)(n.h3,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/utils/src/string.ts#L224",children:"string.ts:224"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"escapemdx",children:"escapeMDX()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function escapeMDX(str): string\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"str"}),": ",(0,s.jsx)(n.code,{children:"unknown"})]}),"\n",(0,s.jsx)(n.p,{children:"the string to be transformed."}),"\n",(0,s.jsx)(n.h3,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"string"})}),"\n",(0,s.jsx)(n.p,{children:"a string with MDX special characters replaced by HTML unicode equivalents."}),"\n",(0,s.jsx)(n.h3,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/utils/src/string.ts#L177",children:"string.ts:177"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"firstuppercase",children:"firstUppercase()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function firstUppercase(str): string\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"str"}),": ",(0,s.jsx)(n.code,{children:"Maybe"}),"<",(0,s.jsx)(n.code,{children:"string"}),">"]}),"\n",(0,s.jsx)(n.p,{children:"the string to be transformed."}),"\n",(0,s.jsx)(n.h3,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"string"})}),"\n",(0,s.jsxs)(n.p,{children:["a string with the 1st character in uppercase, or an empty string if ",(0,s.jsx)(n.code,{children:"str"})," is not a valid string."]}),"\n",(0,s.jsx)(n.h3,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/utils/src/string.ts#L200",children:"string.ts:200"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"kebabcase",children:"kebabCase()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function kebabCase(str): string\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"str"}),": ",(0,s.jsx)(n.code,{children:"Maybe"}),"<",(0,s.jsx)(n.code,{children:"string"}),">"]}),"\n",(0,s.jsx)(n.p,{children:"the string to be transformed."}),"\n",(0,s.jsx)(n.h3,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"string"})}),"\n",(0,s.jsxs)(n.p,{children:["a string converted to start case, or an empty string if ",(0,s.jsx)(n.code,{children:"str"})," is not a valid string."]}),"\n",(0,s.jsx)(n.h3,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/utils/src/string.ts#L267",children:"string.ts:267"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"prune",children:"prune()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function prune(str, substr): string\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parameters-4",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"str"}),": ",(0,s.jsx)(n.code,{children:"Maybe"}),"<",(0,s.jsx)(n.code,{children:"string"}),">"]}),"\n",(0,s.jsx)(n.p,{children:"the string to be pruned."}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"substr"}),": ",(0,s.jsx)(n.code,{children:"string"})," = ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsxs)(n.p,{children:["the substring to be removed from ",(0,s.jsx)(n.code,{children:"str"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"returns-4",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"string"})}),"\n",(0,s.jsxs)(n.p,{children:["a pruned string, or an empty string if ",(0,s.jsx)(n.code,{children:"str"})," is not a valid string."]}),"\n",(0,s.jsx)(n.h3,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/utils/src/string.ts#L58",children:"string.ts:58"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"replacediacritics",children:"replaceDiacritics()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function replaceDiacritics(str): string\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parameters-5",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"str"}),": ",(0,s.jsx)(n.code,{children:"Maybe"}),"<",(0,s.jsx)(n.code,{children:"string"}),">"]}),"\n",(0,s.jsx)(n.p,{children:"the string to be transformed."}),"\n",(0,s.jsx)(n.h3,{id:"returns-5",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"string"})}),"\n",(0,s.jsxs)(n.p,{children:["a string with diacritic characters replaced, or an empty string if ",(0,s.jsx)(n.code,{children:"str"})," is not a valid string."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"defined-in-5",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/utils/src/string.ts#L27",children:"string.ts:27"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"slugify",children:"slugify()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function slugify(str): string\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Returns a lowercase string with ",(0,s.jsx)(n.code,{children:"-"})," as replacement for non alphanum characters using ",(0,s.jsx)(n.a,{href:"/api/utils/string#stringcasebuilder",children:"stringCaseBuilder"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters-6",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"str"}),": ",(0,s.jsx)(n.code,{children:"Maybe"}),"<",(0,s.jsx)(n.code,{children:"string"}),">"]}),"\n",(0,s.jsx)(n.p,{children:"the string to be transformed."}),"\n",(0,s.jsx)(n.h3,{id:"returns-6",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"string"})}),"\n",(0,s.jsxs)(n.p,{children:["a string converted to start case, or an empty string if ",(0,s.jsx)(n.code,{children:"str"})," is not a valid string."]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { kebabCase } from "@graphql-markdown/utils/string";\n\nkebabCase("The quick brown Fox");\n// Expected result: "the-quick-brown-fox"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"defined-in-6",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/utils/src/string.ts#L282",children:"string.ts:282"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"startcase",children:"startCase()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function startCase(str): string\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parameters-7",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"str"}),": ",(0,s.jsx)(n.code,{children:"Maybe"}),"<",(0,s.jsx)(n.code,{children:"string"}),">"]}),"\n",(0,s.jsx)(n.p,{children:"the string to be transformed."}),"\n",(0,s.jsx)(n.h3,{id:"returns-7",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"string"})}),"\n",(0,s.jsxs)(n.p,{children:["a string converted to start case, or an empty string if ",(0,s.jsx)(n.code,{children:"str"})," is not a valid string."]}),"\n",(0,s.jsx)(n.h3,{id:"defined-in-7",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/utils/src/string.ts#L246",children:"string.ts:246"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"stringcasebuilder",children:"stringCaseBuilder()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function stringCaseBuilder(\n   str, \n   transformation?, \n   separator?, \n   splitter?): string\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parameters-8",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"str"}),": ",(0,s.jsx)(n.code,{children:"Maybe"}),"<",(0,s.jsx)(n.code,{children:"string"}),">"]}),"\n",(0,s.jsx)(n.p,{children:"the string to be transformed."}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"transformation?"}),": ",(0,s.jsx)(n.code,{children:"Maybe"}),"<(",(0,s.jsx)(n.code,{children:"word"}),") => ",(0,s.jsx)(n.code,{children:"string"}),">"]}),"\n",(0,s.jsx)(n.p,{children:"optional transformation callback function."}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"separator?"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"optional character separator for word-based transformation."}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"splitter?"}),": ",(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"RegExp"})," = ",(0,s.jsx)(n.code,{children:"..."})]}),"\n",(0,s.jsx)(n.p,{children:"optional regex or string rule for splitting string into word."}),"\n",(0,s.jsx)(n.h3,{id:"returns-8",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"string"})}),"\n",(0,s.jsxs)(n.p,{children:["a transformed string, or an empty string if ",(0,s.jsx)(n.code,{children:"str"})," is not a valid string."]}),"\n",(0,s.jsx)(n.h3,{id:"defined-in-8",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/utils/src/string.ts#L100",children:"string.ts:100"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"tohtmlunicode",children:"toHTMLUnicode()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function toHTMLUnicode(char): string\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parameters-9",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"char"}),": ",(0,s.jsx)(n.code,{children:"Maybe"}),"<",(0,s.jsx)(n.code,{children:"string"}),">"]}),"\n",(0,s.jsx)(n.p,{children:"the character to be transformed."}),"\n",(0,s.jsx)(n.h3,{id:"returns-9",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"string"})}),"\n",(0,s.jsxs)(n.p,{children:["a HTML unicode representation of ",(0,s.jsx)(n.code,{children:"char"}),", or an empty string if ",(0,s.jsx)(n.code,{children:"char"})," is not a valid string."]}),"\n",(0,s.jsx)(n.h3,{id:"defined-in-9",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/utils/src/string.ts#L146",children:"string.ts:146"})})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var s=r(96540);const i={},t=s.createContext(i);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);