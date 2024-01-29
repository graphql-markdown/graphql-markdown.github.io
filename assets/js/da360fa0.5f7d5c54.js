"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6613],{9666:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var n=s(5893),i=s(1151);const t={title:"string",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},l=void 0,a={id:"utils/string",title:"string",description:"Library of helpers for formatting strings.",source:"@site/api/utils/string.md",sourceDirName:"utils",slug:"/utils/string",permalink:"/api/utils/string",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"string",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},c={},d=[{value:"capitalize()",id:"capitalize",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"Source",id:"source",level:3},{value:"escapeMDX()",id:"escapemdx",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"Source",id:"source-1",level:3},{value:"firstUppercase()",id:"firstuppercase",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Returns",id:"returns-2",level:3},{value:"Example",id:"example-2",level:3},{value:"Source",id:"source-2",level:3},{value:"kebabCase()",id:"kebabcase",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Returns",id:"returns-3",level:3},{value:"Example",id:"example-3",level:3},{value:"Source",id:"source-3",level:3},{value:"prune()",id:"prune",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"Returns",id:"returns-4",level:3},{value:"Example",id:"example-4",level:3},{value:"Source",id:"source-4",level:3},{value:"replaceDiacritics()",id:"replacediacritics",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"Returns",id:"returns-5",level:3},{value:"Example",id:"example-5",level:3},{value:"See",id:"see",level:3},{value:"Source",id:"source-5",level:3},{value:"slugify()",id:"slugify",level:2},{value:"Parameters",id:"parameters-6",level:3},{value:"Returns",id:"returns-6",level:3},{value:"Alias",id:"alias",level:3},{value:"Source",id:"source-6",level:3},{value:"startCase()",id:"startcase",level:2},{value:"Parameters",id:"parameters-7",level:3},{value:"Returns",id:"returns-7",level:3},{value:"Example",id:"example-6",level:3},{value:"Source",id:"source-7",level:3},{value:"stringCaseBuilder()",id:"stringcasebuilder",level:2},{value:"Parameters",id:"parameters-8",level:3},{value:"Returns",id:"returns-8",level:3},{value:"Example",id:"example-7",level:3},{value:"Source",id:"source-8",level:3},{value:"toHTMLUnicode()",id:"tohtmlunicode",level:2},{value:"Parameters",id:"parameters-9",level:3},{value:"Returns",id:"returns-9",level:3},{value:"Example",id:"example-8",level:3},{value:"Source",id:"source-9",level:3}];function h(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Library of helpers for formatting strings."}),"\n",(0,n.jsx)(r.h2,{id:"capitalize",children:"capitalize()"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"function capitalize(str): string\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Returns a string in lowercase excepted for the 1st character capitalized using ",(0,n.jsx)(r.a,{href:"/api/utils/string#firstuppercase",children:"firstUppercase"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"str"}),": ",(0,n.jsx)(r.code,{children:"Maybe"}),"<",(0,n.jsx)(r.code,{children:"string"}),">"]}),"\n",(0,n.jsx)(r.p,{children:"the string to be transformed."}),"\n",(0,n.jsx)(r.h3,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"string"})}),"\n",(0,n.jsxs)(r.p,{children:["a capitalized string, or an empty string if ",(0,n.jsx)(r.code,{children:"str"})," is not a valid string."]}),"\n",(0,n.jsx)(r.h3,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'import { capitalize } from "@graphql-markdown/utils/string";\n\ncapitalize("the quick Brown Fox");\n// Expected result: "The quick brown fox"\n'})}),"\n",(0,n.jsx)(r.h3,{id:"source",children:"Source"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/15de13d/packages/utils/src/string.ts#L216",children:"string.ts:216"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"escapemdx",children:"escapeMDX()"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"function escapeMDX(str): string\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Returns a string with MDX special characters converted to HTML unicode using ",(0,n.jsx)(r.a,{href:"/api/utils/string#tohtmlunicode",children:"toHTMLUnicode"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"str"}),": ",(0,n.jsx)(r.code,{children:"unknown"})]}),"\n",(0,n.jsx)(r.p,{children:"the string to be transformed."}),"\n",(0,n.jsx)(r.h3,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"string"})}),"\n",(0,n.jsx)(r.p,{children:"a string with MDX special characters replaced by HTML unicode equivalents."}),"\n",(0,n.jsx)(r.h3,{id:"example-1",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'import { escapeMDX } from "@graphql-markdown/utils/string";\n\nescapeMDX("{MDX} <special> characters");\n// Expected result: "&#x007B;MDX&#x007D; &#x003C;special&#x003E; characters"\n'})}),"\n",(0,n.jsx)(r.h3,{id:"source-1",children:"Source"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/15de13d/packages/utils/src/string.ts#L172",children:"string.ts:172"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"firstuppercase",children:"firstUppercase()"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"function firstUppercase(str): string\n"})}),"\n",(0,n.jsx)(r.p,{children:"Returns a string with the 1st character in uppercase."}),"\n",(0,n.jsx)(r.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"str"}),": ",(0,n.jsx)(r.code,{children:"Maybe"}),"<",(0,n.jsx)(r.code,{children:"string"}),">"]}),"\n",(0,n.jsx)(r.p,{children:"the string to be transformed."}),"\n",(0,n.jsx)(r.h3,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"string"})}),"\n",(0,n.jsxs)(r.p,{children:["a string with the 1st character in uppercase, or an empty string if ",(0,n.jsx)(r.code,{children:"str"})," is not a valid string."]}),"\n",(0,n.jsx)(r.h3,{id:"example-2",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'import { firstUppercase } from "@graphql-markdown/utils/string";\n\nfirstUppercase("the quick Brown Fox");\n// Expected result: "The quick Brown Fox"\n'})}),"\n",(0,n.jsx)(r.h3,{id:"source-2",children:"Source"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/15de13d/packages/utils/src/string.ts#L192",children:"string.ts:192"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"kebabcase",children:"kebabCase()"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"function kebabCase(str): string\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Returns a lowercase string with ",(0,n.jsx)(r.code,{children:"-"})," as replacement for non alphanum characters using ",(0,n.jsx)(r.a,{href:"/api/utils/string#stringcasebuilder",children:"stringCaseBuilder"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"str"}),": ",(0,n.jsx)(r.code,{children:"Maybe"}),"<",(0,n.jsx)(r.code,{children:"string"}),">"]}),"\n",(0,n.jsx)(r.p,{children:"the string to be transformed."}),"\n",(0,n.jsx)(r.h3,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"string"})}),"\n",(0,n.jsxs)(r.p,{children:["a string converted to start case, or an empty string if ",(0,n.jsx)(r.code,{children:"str"})," is not a valid string."]}),"\n",(0,n.jsx)(r.h3,{id:"example-3",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'import { kebabCase } from "@graphql-markdown/utils/string";\n\nkebabCase("The quick brown Fox");\n// Expected result: "the-quick-brown-fox"\n'})}),"\n",(0,n.jsx)(r.h3,{id:"source-3",children:"Source"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/15de13d/packages/utils/src/string.ts#L259",children:"string.ts:259"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"prune",children:"prune()"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"function prune(str, substr): string\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Returns a string pruned on both start and end, similar to ",(0,n.jsx)(r.code,{children:"trim()"})," but with any substring."]}),"\n",(0,n.jsx)(r.h3,{id:"parameters-4",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"str"}),": ",(0,n.jsx)(r.code,{children:"Maybe"}),"<",(0,n.jsx)(r.code,{children:"string"}),">"]}),"\n",(0,n.jsx)(r.p,{children:"the string to be pruned."}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"substr"}),": ",(0,n.jsx)(r.code,{children:"string"}),"= ",(0,n.jsx)(r.code,{children:'""'})]}),"\n",(0,n.jsxs)(r.p,{children:["the substring to be removed from ",(0,n.jsx)(r.code,{children:"str"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"returns-4",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"string"})}),"\n",(0,n.jsxs)(r.p,{children:["a pruned string, or an empty string if ",(0,n.jsx)(r.code,{children:"str"})," is not a valid string."]}),"\n",(0,n.jsx)(r.h3,{id:"example-4",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'import { prune } from "@graphql-markdown/utils/string";\n\nconst text = "**The quick brown fox jumps over the lazy dog.**";\n\nprune(text, "**");\n// Expected result: "The quick brown fox jumps over the lazy dog."\n'})}),"\n",(0,n.jsx)(r.h3,{id:"source-4",children:"Source"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/15de13d/packages/utils/src/string.ts#L58",children:"string.ts:58"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"replacediacritics",children:"replaceDiacritics()"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"function replaceDiacritics(str): string\n"})}),"\n",(0,n.jsx)(r.p,{children:"Replaces diacritics by non-diacritic equivalent characters."}),"\n",(0,n.jsx)(r.h3,{id:"parameters-5",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"str"}),": ",(0,n.jsx)(r.code,{children:"Maybe"}),"<",(0,n.jsx)(r.code,{children:"string"}),">"]}),"\n",(0,n.jsx)(r.p,{children:"the string to be transformed."}),"\n",(0,n.jsx)(r.h3,{id:"returns-5",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"string"})}),"\n",(0,n.jsxs)(r.p,{children:["a string with diacritic characters replaced, or an empty string if ",(0,n.jsx)(r.code,{children:"str"})," is not a valid string."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"example-5",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'import { replaceDiacritics } from "@graphql-markdown/utils/string";\n\nreplaceDiacritics("\xc2\xe9\xea\u015b"); // Expected result: "Aees"\n'})}),"\n",(0,n.jsx)(r.h3,{id:"see",children:"See"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://stackoverflow.com/a/37511463",children:"StackOverflow source"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"source-5",children:"Source"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/15de13d/packages/utils/src/string.ts#L27",children:"string.ts:27"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"slugify",children:"slugify()"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"function slugify(str): string\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Alias of ",(0,n.jsx)(r.a,{href:"/api/utils/string#kebabcase",children:"kebabCase"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"parameters-6",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"str"}),": ",(0,n.jsx)(r.code,{children:"Maybe"}),"<",(0,n.jsx)(r.code,{children:"string"}),">"]}),"\n",(0,n.jsx)(r.h3,{id:"returns-6",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"string"})}),"\n",(0,n.jsx)(r.h3,{id:"alias",children:"Alias"}),"\n",(0,n.jsx)(r.h3,{id:"source-6",children:"Source"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/15de13d/packages/utils/src/string.ts#L274",children:"string.ts:274"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"startcase",children:"startCase()"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"function startCase(str): string\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Applies ",(0,n.jsx)(r.a,{href:"/api/utils/string#firstuppercase",children:"firstUppercase"})," using ",(0,n.jsx)(r.a,{href:"/api/utils/string#stringcasebuilder",children:"stringCaseBuilder"})," to every word of a string with ",(0,n.jsx)(r.code,{children:"space"})," character as separator."]}),"\n",(0,n.jsx)(r.h3,{id:"parameters-7",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"str"}),": ",(0,n.jsx)(r.code,{children:"Maybe"}),"<",(0,n.jsx)(r.code,{children:"string"}),">"]}),"\n",(0,n.jsx)(r.p,{children:"the string to be transformed."}),"\n",(0,n.jsx)(r.h3,{id:"returns-7",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"string"})}),"\n",(0,n.jsxs)(r.p,{children:["a string converted to start case, or an empty string if ",(0,n.jsx)(r.code,{children:"str"})," is not a valid string."]}),"\n",(0,n.jsx)(r.h3,{id:"example-6",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'import { startCase } from "@graphql-markdown/utils/string";\n\nstartCase("the quick Brown Fox");\n// Expected result: "The Quick Brown Fox"\n'})}),"\n",(0,n.jsx)(r.h3,{id:"source-7",children:"Source"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/15de13d/packages/utils/src/string.ts#L238",children:"string.ts:238"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"stringcasebuilder",children:"stringCaseBuilder()"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"function stringCaseBuilder(\n   str, \n   transformation?, \n   separator?, \n   splitter?): string\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Returns a string after applying a transformation function.\nBy default ",(0,n.jsx)(r.code,{children:"splitter"})," expression will split the string into words, where non-alphanum chars are considered as word separators.\n",(0,n.jsx)(r.code,{children:"separator"})," will be used for joining the words back together.\n",(0,n.jsx)(r.a,{href:"/api/utils/string#prune",children:"prune"})," using ",(0,n.jsx)(r.code,{children:"separator"})," is applied to the result of the transformation."]}),"\n",(0,n.jsx)(r.h3,{id:"parameters-8",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"str"}),": ",(0,n.jsx)(r.code,{children:"Maybe"}),"<",(0,n.jsx)(r.code,{children:"string"}),">"]}),"\n",(0,n.jsx)(r.p,{children:"the string to be transformed."}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"transformation?"}),": ",(0,n.jsx)(r.code,{children:"Maybe"}),"<(",(0,n.jsx)(r.code,{children:"word"}),") => ",(0,n.jsx)(r.code,{children:"string"}),">"]}),"\n",(0,n.jsx)(r.p,{children:"optional transformation callback function."}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"separator?"}),": ",(0,n.jsx)(r.code,{children:"string"})]}),"\n",(0,n.jsx)(r.p,{children:"optional character separator for word-based transformation."}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"splitter?"}),": ",(0,n.jsx)(r.code,{children:"string"})," | ",(0,n.jsx)(r.code,{children:"RegExp"}),"= ",(0,n.jsx)(r.code,{children:"undefined"})]}),"\n",(0,n.jsx)(r.p,{children:"optional regex or string rule for splitting string into word."}),"\n",(0,n.jsx)(r.h3,{id:"returns-8",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"string"})}),"\n",(0,n.jsxs)(r.p,{children:["a transformed string, or an empty string if ",(0,n.jsx)(r.code,{children:"str"})," is not a valid string."]}),"\n",(0,n.jsx)(r.h3,{id:"example-7",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'import { stringCaseBuilder } from "@graphql-markdown/utils/string";\n\nconst text = "The quick brown fox jumps over the lazy dog.";\nconst transformation = (word: string): string => `*${word}*`\n\nstringCaseBuilder(text, transformation, " ");\n// Expected result: "*The* *quick* *brown* *fox* *jumps* *over* *the* *lazy* *dog*"\n'})}),"\n",(0,n.jsx)(r.h3,{id:"source-8",children:"Source"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/15de13d/packages/utils/src/string.ts#L100",children:"string.ts:100"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"tohtmlunicode",children:"toHTMLUnicode()"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"function toHTMLUnicode(char): string\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Converts a character to its equivalent HTML unicode representation ",(0,n.jsx)(r.code,{children:"&#x0000"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"parameters-9",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"char"}),": ",(0,n.jsx)(r.code,{children:"Maybe"}),"<",(0,n.jsx)(r.code,{children:"string"}),">"]}),"\n",(0,n.jsx)(r.p,{children:"the character to be transformed."}),"\n",(0,n.jsx)(r.h3,{id:"returns-9",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"string"})}),"\n",(0,n.jsxs)(r.p,{children:["a HTML unicode representation of ",(0,n.jsx)(r.code,{children:"char"}),", or an empty string if ",(0,n.jsx)(r.code,{children:"char"})," is not a valid string."]}),"\n",(0,n.jsx)(r.h3,{id:"example-8",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'import { toHTMLUnicode } from "@graphql-markdown/utils/string";\n\ntoHTMLUnicode("%"); // Expected result: "&#x0025;"\n'})}),"\n",(0,n.jsx)(r.h3,{id:"source-9",children:"Source"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/15de13d/packages/utils/src/string.ts#L146",children:"string.ts:146"})})]})}function o(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,r,s)=>{s.d(r,{Z:()=>a,a:()=>l});var n=s(7294);const i={},t=n.createContext(i);function l(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);