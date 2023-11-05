"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6613],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),o=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=o(r),d=n,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return r?a.createElement(k,s(s({ref:t},u),{},{components:r})):a.createElement(k,s({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var o=2;o<l;o++)s[o]=r[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4524:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=r(7462),n=(r(7294),r(4137));const l={title:"string",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},s=void 0,i={unversionedId:"utils/string",id:"utils/string",title:"string",description:"Library of helpers for formatting strings.",source:"@site/api/utils/string.md",sourceDirName:"utils",slug:"/utils/string",permalink:"/api/utils/string",draft:!1,tags:[],version:"current",frontMatter:{title:"string",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},p={},o=[{value:"capitalize()",id:"capitalize",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"Source",id:"source",level:3},{value:"escapeMDX()",id:"escapemdx",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"Source",id:"source-1",level:3},{value:"firstUppercase()",id:"firstuppercase",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Returns",id:"returns-2",level:3},{value:"Example",id:"example-2",level:3},{value:"Source",id:"source-2",level:3},{value:"kebabCase()",id:"kebabcase",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Returns",id:"returns-3",level:3},{value:"Example",id:"example-3",level:3},{value:"Source",id:"source-3",level:3},{value:"prune()",id:"prune",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"Returns",id:"returns-4",level:3},{value:"Example",id:"example-4",level:3},{value:"Source",id:"source-4",level:3},{value:"replaceDiacritics()",id:"replacediacritics",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"Returns",id:"returns-5",level:3},{value:"Example",id:"example-5",level:3},{value:"See",id:"see",level:3},{value:"Source",id:"source-5",level:3},{value:"slugify()",id:"slugify",level:2},{value:"Parameters",id:"parameters-6",level:3},{value:"Source",id:"source-6",level:3},{value:"startCase()",id:"startcase",level:2},{value:"Parameters",id:"parameters-7",level:3},{value:"Returns",id:"returns-6",level:3},{value:"Example",id:"example-6",level:3},{value:"Source",id:"source-7",level:3},{value:"stringCaseBuilder()",id:"stringcasebuilder",level:2},{value:"Parameters",id:"parameters-8",level:3},{value:"Returns",id:"returns-7",level:3},{value:"Example",id:"example-7",level:3},{value:"Source",id:"source-8",level:3},{value:"toHTMLUnicode()",id:"tohtmlunicode",level:2},{value:"Parameters",id:"parameters-9",level:3},{value:"Returns",id:"returns-8",level:3},{value:"Example",id:"example-8",level:3},{value:"Source",id:"source-9",level:3}],u={toc:o};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Library of helpers for formatting strings."),(0,n.kt)("h2",{id:"capitalize"},"capitalize()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"capitalize(str): string\n")),(0,n.kt)("p",null,"Returns a string in lowercase excepted for the 1st character capitalized using ",(0,n.kt)("a",{parentName:"p",href:"/api/utils/string#firstuppercase"},"firstUppercase"),"."),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"str"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Maybe"),"\\<",(0,n.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,n.kt)("p",null,"the string to be transformed."),(0,n.kt)("h3",{id:"returns"},"Returns"),(0,n.kt)("p",null,"a capitalized string, or an empty string if ",(0,n.kt)("inlineCode",{parentName:"p"},"str")," is not a valid string."),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { capitalize } from "@graphql-markdown/utils/string";\n\ncapitalize("the quick Brown Fox");\n// Expected result: "The quick brown fox"\n')),(0,n.kt)("h3",{id:"source"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/fdeba50/packages/utils/src/string.ts#L216"},"string.ts:216")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"escapemdx"},"escapeMDX()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"escapeMDX(str): string\n")),(0,n.kt)("p",null,"Returns a string with MDX special characters converted to HTML unicode using ",(0,n.kt)("a",{parentName:"p",href:"/api/utils/string#tohtmlunicode"},"toHTMLUnicode"),"."),(0,n.kt)("h3",{id:"parameters-1"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"str"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"unknown")),(0,n.kt)("p",null,"the string to be transformed."),(0,n.kt)("h3",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,"a string with MDX special characters replaced by HTML unicode equivalents."),(0,n.kt)("h3",{id:"example-1"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { escapeMDX } from "@graphql-markdown/utils/string";\n\nescapeMDX("{MDX} <special> characters");\n// Expected result: "&#x007B;MDX&#x007D; &#x003C;special&#x003E; characters"\n')),(0,n.kt)("h3",{id:"source-1"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/fdeba50/packages/utils/src/string.ts#L172"},"string.ts:172")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"firstuppercase"},"firstUppercase()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"firstUppercase(str): string\n")),(0,n.kt)("p",null,"Returns a string with the 1st character in uppercase."),(0,n.kt)("h3",{id:"parameters-2"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"str"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Maybe"),"\\<",(0,n.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,n.kt)("p",null,"the string to be transformed."),(0,n.kt)("h3",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,"a string with the 1st character in uppercase, or an empty string if ",(0,n.kt)("inlineCode",{parentName:"p"},"str")," is not a valid string."),(0,n.kt)("h3",{id:"example-2"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { firstUppercase } from "@graphql-markdown/utils/string";\n\nfirstUppercase("the quick Brown Fox");\n// Expected result: "The quick Brown Fox"\n')),(0,n.kt)("h3",{id:"source-2"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/fdeba50/packages/utils/src/string.ts#L192"},"string.ts:192")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"kebabcase"},"kebabCase()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"kebabCase(str): string\n")),(0,n.kt)("p",null,"Returns a lowercase string with ",(0,n.kt)("inlineCode",{parentName:"p"},"-")," as replacement for non alphanum characters using ",(0,n.kt)("a",{parentName:"p",href:"/api/utils/string#stringcasebuilder"},"stringCaseBuilder"),"."),(0,n.kt)("h3",{id:"parameters-3"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"str"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Maybe"),"\\<",(0,n.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,n.kt)("p",null,"the string to be transformed."),(0,n.kt)("h3",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,"a string converted to start case, or an empty string if ",(0,n.kt)("inlineCode",{parentName:"p"},"str")," is not a valid string."),(0,n.kt)("h3",{id:"example-3"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { kebabCase } from "@graphql-markdown/utils/string";\n\nkebabCase("The quick brown Fox");\n// Expected result: "the-quick-brown-fox"\n')),(0,n.kt)("h3",{id:"source-3"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/fdeba50/packages/utils/src/string.ts#L259"},"string.ts:259")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"prune"},"prune()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"prune(str, substr): string\n")),(0,n.kt)("p",null,"Returns a string pruned on both start and end, similar to ",(0,n.kt)("inlineCode",{parentName:"p"},"trim()")," but with any substring."),(0,n.kt)("h3",{id:"parameters-4"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"str"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Maybe"),"\\<",(0,n.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,n.kt)("p",null,"the string to be pruned."),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"substr"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string"),"= ",(0,n.kt)("inlineCode",{parentName:"p"},'""')),(0,n.kt)("p",null,"the substring to be removed from ",(0,n.kt)("inlineCode",{parentName:"p"},"str"),"."),(0,n.kt)("h3",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,"a pruned string, or an empty string if ",(0,n.kt)("inlineCode",{parentName:"p"},"str")," is not a valid string."),(0,n.kt)("h3",{id:"example-4"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { prune } from "@graphql-markdown/utils/string";\n\nconst text = "**The quick brown fox jumps over the lazy dog.**";\n\nprune(text, "**");\n// Expected result: "The quick brown fox jumps over the lazy dog."\n')),(0,n.kt)("h3",{id:"source-4"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/fdeba50/packages/utils/src/string.ts#L58"},"string.ts:58")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"replacediacritics"},"replaceDiacritics()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"replaceDiacritics(str): string\n")),(0,n.kt)("p",null,"Replaces diacritics by non-diacritic equivalent characters."),(0,n.kt)("h3",{id:"parameters-5"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"str"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Maybe"),"\\<",(0,n.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,n.kt)("p",null,"the string to be transformed."),(0,n.kt)("h3",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,"a string with diacritic characters replaced, or an empty string if ",(0,n.kt)("inlineCode",{parentName:"p"},"str")," is not a valid string."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"})),(0,n.kt)("h3",{id:"example-5"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { replaceDiacritics } from "@graphql-markdown/utils/string";\n\nreplaceDiacritics("\xc2\xe9\xea\u015b"); // Expected result: "Aees"\n')),(0,n.kt)("h3",{id:"see"},"See"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/37511463"},"StackOverflow source"),"."),(0,n.kt)("h3",{id:"source-5"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/fdeba50/packages/utils/src/string.ts#L27"},"string.ts:27")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"slugify"},"slugify()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"slugify(str): string\n")),(0,n.kt)("p",null,"Alias of ",(0,n.kt)("a",{parentName:"p",href:"/api/utils/string#kebabcase"},"kebabCase"),"."),(0,n.kt)("h3",{id:"parameters-6"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"str"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Maybe"),"\\<",(0,n.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,n.kt)("h3",{id:"source-6"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/fdeba50/packages/utils/src/string.ts#L259"},"string.ts:259")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"startcase"},"startCase()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"startCase(str): string\n")),(0,n.kt)("p",null,"Applies ",(0,n.kt)("a",{parentName:"p",href:"/api/utils/string#firstuppercase"},"firstUppercase")," using ",(0,n.kt)("a",{parentName:"p",href:"/api/utils/string#stringcasebuilder"},"stringCaseBuilder")," to every word of a string with ",(0,n.kt)("inlineCode",{parentName:"p"},"space")," character as separator."),(0,n.kt)("h3",{id:"parameters-7"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"str"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Maybe"),"\\<",(0,n.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,n.kt)("p",null,"the string to be transformed."),(0,n.kt)("h3",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,"a string converted to start case, or an empty string if ",(0,n.kt)("inlineCode",{parentName:"p"},"str")," is not a valid string."),(0,n.kt)("h3",{id:"example-6"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { startCase } from "@graphql-markdown/utils/string";\n\nstartCase("the quick Brown Fox");\n// Expected result: "The Quick Brown Fox"\n')),(0,n.kt)("h3",{id:"source-7"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/fdeba50/packages/utils/src/string.ts#L238"},"string.ts:238")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"stringcasebuilder"},"stringCaseBuilder()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"stringCaseBuilder(\n   str, \n   transformation?, \n   separator?, \n   splitter?): string\n")),(0,n.kt)("p",null,"Returns a string after applying a transformation function.\nBy default ",(0,n.kt)("inlineCode",{parentName:"p"},"splitter")," expression will split the string into words, where non-alphanum chars are considered as word separators.\n",(0,n.kt)("inlineCode",{parentName:"p"},"separator")," will be used for joining the words back together.\n",(0,n.kt)("a",{parentName:"p",href:"/api/utils/string#prune"},"prune")," using ",(0,n.kt)("inlineCode",{parentName:"p"},"separator")," is applied to the result of the transformation."),(0,n.kt)("h3",{id:"parameters-8"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"str"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Maybe"),"\\<",(0,n.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,n.kt)("p",null,"the string to be transformed."),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"transformation?"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Maybe"),"\\<(",(0,n.kt)("inlineCode",{parentName:"p"},"word"),") => ",(0,n.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,n.kt)("p",null,"optional transformation callback function."),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"separator?"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"optional character separator for word-based transformation."),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"splitter?"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},"RegExp"),"= ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")),(0,n.kt)("p",null,"optional regex or string rule for splitting string into word."),(0,n.kt)("h3",{id:"returns-7"},"Returns"),(0,n.kt)("p",null,"a transformed string, or an empty string if ",(0,n.kt)("inlineCode",{parentName:"p"},"str")," is not a valid string."),(0,n.kt)("h3",{id:"example-7"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { stringCaseBuilder } from "@graphql-markdown/utils/string";\n\nconst text = "The quick brown fox jumps over the lazy dog.";\nconst transformation = (word: string): string => `*${word}*`\n\nstringCaseBuilder(text, transformation, " ");\n// Expected result: "*The* *quick* *brown* *fox* *jumps* *over* *the* *lazy* *dog*"\n')),(0,n.kt)("h3",{id:"source-8"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/fdeba50/packages/utils/src/string.ts#L100"},"string.ts:100")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"tohtmlunicode"},"toHTMLUnicode()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"toHTMLUnicode(char): string\n")),(0,n.kt)("p",null,"Converts a character to its equivalent HTML unicode representation ",(0,n.kt)("inlineCode",{parentName:"p"},"&#x0000"),"."),(0,n.kt)("h3",{id:"parameters-9"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"char"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Maybe"),"\\<",(0,n.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,n.kt)("p",null,"the character to be transformed."),(0,n.kt)("h3",{id:"returns-8"},"Returns"),(0,n.kt)("p",null,"a HTML unicode representation of ",(0,n.kt)("inlineCode",{parentName:"p"},"char"),", or an empty string if ",(0,n.kt)("inlineCode",{parentName:"p"},"char")," is not a valid string."),(0,n.kt)("h3",{id:"example-8"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { toHTMLUnicode } from "@graphql-markdown/utils/string";\n\ntoHTMLUnicode("%"); // Expected result: "&#x0025;"\n')),(0,n.kt)("h3",{id:"source-9"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/fdeba50/packages/utils/src/string.ts#L146"},"string.ts:146")))}c.isMDXComponent=!0}}]);