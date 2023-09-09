"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6613],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),o=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=o(a),u=n,c=m["".concat(s,".").concat(u)]||m[u]||k[u]||l;return a?r.createElement(c,i(i({ref:t},d),{},{components:a})):r.createElement(c,i({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:n,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4524:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=a(7462),n=(a(7294),a(4137));const l={title:"string",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},i=void 0,p={unversionedId:"utils/string",id:"utils/string",title:"string",description:"Library of helpers for formatting strings.",source:"@site/api/utils/string.md",sourceDirName:"utils",slug:"/utils/string",permalink:"/api/utils/string",draft:!1,tags:[],version:"current",frontMatter:{title:"string",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},s={},o=[{value:"capitalize",id:"capitalize",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Source",id:"source",level:3},{value:"Example",id:"example",level:3},{value:"escapeMDX",id:"escapemdx",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Source",id:"source-1",level:3},{value:"Example",id:"example-1",level:3},{value:"firstUppercase",id:"firstuppercase",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Returns",id:"returns-2",level:3},{value:"Source",id:"source-2",level:3},{value:"Example",id:"example-2",level:3},{value:"kebabCase",id:"kebabcase",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Returns",id:"returns-3",level:3},{value:"Source",id:"source-3",level:3},{value:"Example",id:"example-3",level:3},{value:"prune",id:"prune",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"Returns",id:"returns-4",level:3},{value:"Source",id:"source-4",level:3},{value:"Example",id:"example-4",level:3},{value:"replaceDiacritics",id:"replacediacritics",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"Returns",id:"returns-5",level:3},{value:"Source",id:"source-5",level:3},{value:"Example",id:"example-5",level:3},{value:"See",id:"see",level:3},{value:"slugify",id:"slugify",level:2},{value:"Parameters",id:"parameters-6",level:3},{value:"Returns",id:"returns-6",level:3},{value:"Source",id:"source-6",level:3},{value:"startCase",id:"startcase",level:2},{value:"Parameters",id:"parameters-7",level:3},{value:"Returns",id:"returns-7",level:3},{value:"Source",id:"source-7",level:3},{value:"Example",id:"example-6",level:3},{value:"stringCaseBuilder",id:"stringcasebuilder",level:2},{value:"Parameters",id:"parameters-8",level:3},{value:"Returns",id:"returns-8",level:3},{value:"Source",id:"source-8",level:3},{value:"Example",id:"example-7",level:3},{value:"toHTMLUnicode",id:"tohtmlunicode",level:2},{value:"Parameters",id:"parameters-9",level:3},{value:"Returns",id:"returns-9",level:3},{value:"Source",id:"source-9",level:3},{value:"Example",id:"example-8",level:3}],d={toc:o};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Library of helpers for formatting strings."),(0,n.kt)("h2",{id:"capitalize"},"capitalize"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"capitalize(str): string\n")),(0,n.kt)("p",null,"Returns a string in lowercase excepted for the 1st character capitalized using ",(0,n.kt)("a",{parentName:"p",href:"/api/utils/string#firstuppercase"},"firstUppercase"),"."),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"str")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Maybe"),"\\< ",(0,n.kt)("inlineCode",{parentName:"td"},"string")," ",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the string to be transformed.")))),(0,n.kt)("h3",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"a capitalized string, or an empty string if ",(0,n.kt)("inlineCode",{parentName:"p"},"str")," is not a valid string."),(0,n.kt)("h3",{id:"source"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/61a214b/packages/utils/src/string.ts#L184"},"string.ts:184")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { capitalize } from "@graphql-markdown/utils/string";\n\ncapitalize("the quick Brown Fox");\n// Expected result: "The quick brown fox"\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"escapemdx"},"escapeMDX"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"escapeMDX(str): string\n")),(0,n.kt)("p",null,"Returns a string with MDX special characters converted to HTML unicode using ",(0,n.kt)("a",{parentName:"p",href:"/api/utils/string#tohtmlunicode"},"toHTMLUnicode"),"."),(0,n.kt)("h3",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"str")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"unknown")),(0,n.kt)("td",{parentName:"tr",align:"left"},"the string to be transformed.")))),(0,n.kt)("h3",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"a string with MDX special characters replaced by HTML unicode equivalents."),(0,n.kt)("h3",{id:"source-1"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/61a214b/packages/utils/src/string.ts#L140"},"string.ts:140")),(0,n.kt)("h3",{id:"example-1"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { escapeMDX } from "@graphql-markdown/utils/string";\n\nescapeMDX("{MDX} <special> characters");\n// Expected result: "&#x007B;MDX&#x007D; &#x003C;special&#x003E; characters"\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"firstuppercase"},"firstUppercase"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"firstUppercase(str): string\n")),(0,n.kt)("p",null,"Returns a string with the 1st character in uppercase."),(0,n.kt)("h3",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"str")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Maybe"),"\\< ",(0,n.kt)("inlineCode",{parentName:"td"},"string")," ",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the string to be transformed.")))),(0,n.kt)("h3",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"a string with the 1st character in uppercase, or an empty string if ",(0,n.kt)("inlineCode",{parentName:"p"},"str")," is not a valid string."),(0,n.kt)("h3",{id:"source-2"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/61a214b/packages/utils/src/string.ts#L160"},"string.ts:160")),(0,n.kt)("h3",{id:"example-2"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { firstUppercase } from "@graphql-markdown/utils/string";\n\nfirstUppercase("the quick Brown Fox");\n// Expected result: "The quick Brown Fox"\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"kebabcase"},"kebabCase"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"kebabCase(str): string\n")),(0,n.kt)("p",null,"Returns a lowercase string with ",(0,n.kt)("inlineCode",{parentName:"p"},"-")," as replacement for non alphanum characters using ",(0,n.kt)("a",{parentName:"p",href:"/api/utils/string#stringcasebuilder"},"stringCaseBuilder"),"."),(0,n.kt)("h3",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"str")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Maybe"),"\\< ",(0,n.kt)("inlineCode",{parentName:"td"},"string")," ",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the string to be transformed.")))),(0,n.kt)("h3",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"a string converted to start case, or an empty string if ",(0,n.kt)("inlineCode",{parentName:"p"},"str")," is not a valid string."),(0,n.kt)("h3",{id:"source-3"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/61a214b/packages/utils/src/string.ts#L258"},"string.ts:258")),(0,n.kt)("h3",{id:"example-3"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { kebabCase } from "@graphql-markdown/utils/string";\n\nkebabCase("The quick brown Fox");\n// Expected result: "the-quick-brown-fox"\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"prune"},"prune"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'prune(str, substr = ""): string\n')),(0,n.kt)("p",null,"Returns a string pruned on both start and end, similar to ",(0,n.kt)("inlineCode",{parentName:"p"},"trim()")," but with any substring."),(0,n.kt)("h3",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"str")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Maybe"),"\\< ",(0,n.kt)("inlineCode",{parentName:"td"},"string")," ",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"undefined")),(0,n.kt)("td",{parentName:"tr",align:"left"},"the string to be pruned.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"substr")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},'""')),(0,n.kt)("td",{parentName:"tr",align:"left"},"the substring to be removed from ",(0,n.kt)("inlineCode",{parentName:"td"},"str"),".")))),(0,n.kt)("h3",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"a pruned string, or an empty string if ",(0,n.kt)("inlineCode",{parentName:"p"},"str")," is not a valid string."),(0,n.kt)("h3",{id:"source-4"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/61a214b/packages/utils/src/string.ts#L82"},"string.ts:82")),(0,n.kt)("h3",{id:"example-4"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { prune } from "@graphql-markdown/utils/string";\n\nconst text = "**The quick brown fox jumps over the lazy dog.**";\n\nprune(text, "**");\n// Expected result: "The quick brown fox jumps over the lazy dog."\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"replacediacritics"},"replaceDiacritics"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"replaceDiacritics(str): string\n")),(0,n.kt)("p",null,"Replaces diacritics by non-diacritic equivalent characters."),(0,n.kt)("h3",{id:"parameters-5"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"str")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Maybe"),"\\< ",(0,n.kt)("inlineCode",{parentName:"td"},"string")," ",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the string to be transformed.")))),(0,n.kt)("h3",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"a string with diacritic characters replaced, or an empty string if ",(0,n.kt)("inlineCode",{parentName:"p"},"str")," is not a valid string."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"})),(0,n.kt)("h3",{id:"source-5"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/61a214b/packages/utils/src/string.ts#L209"},"string.ts:209")),(0,n.kt)("h3",{id:"example-5"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { replaceDiacritics } from "@graphql-markdown/utils/string";\n\nreplaceDiacritics("\xc2\xe9\xea\u015b"); // Expected result: "Aees"\n')),(0,n.kt)("h3",{id:"see"},"See"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/37511463"},"StackOverflow source"),"."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"slugify"},"slugify"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"slugify(str): string\n")),(0,n.kt)("p",null,"Alias of ",(0,n.kt)("a",{parentName:"p",href:"/api/utils/string#kebabcase"},"kebabCase"),"."),(0,n.kt)("h3",{id:"parameters-6"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"str")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Maybe"),"\\< ",(0,n.kt)("inlineCode",{parentName:"td"},"string")," ",">")))),(0,n.kt)("h3",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h3",{id:"source-6"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/61a214b/packages/utils/src/string.ts#L258"},"string.ts:258")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"startcase"},"startCase"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"startCase(str): string\n")),(0,n.kt)("p",null,"Applies ",(0,n.kt)("a",{parentName:"p",href:"/api/utils/string#firstuppercase"},"firstUppercase")," using ",(0,n.kt)("a",{parentName:"p",href:"/api/utils/string#stringcasebuilder"},"stringCaseBuilder")," to every word of a string with ",(0,n.kt)("inlineCode",{parentName:"p"},"space")," character as separator."),(0,n.kt)("h3",{id:"parameters-7"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"str")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Maybe"),"\\< ",(0,n.kt)("inlineCode",{parentName:"td"},"string")," ",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the string to be transformed.")))),(0,n.kt)("h3",{id:"returns-7"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"a string converted to start case, or an empty string if ",(0,n.kt)("inlineCode",{parentName:"p"},"str")," is not a valid string."),(0,n.kt)("h3",{id:"source-7"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/61a214b/packages/utils/src/string.ts#L234"},"string.ts:234")),(0,n.kt)("h3",{id:"example-6"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { startCase } from "@graphql-markdown/utils/string";\n\nstartCase("the quick Brown Fox");\n// Expected result: "The Quick Brown Fox"\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"stringcasebuilder"},"stringCaseBuilder"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"stringCaseBuilder(\n  str,\n  transformation?,\n  separator?,\n  splitter? = ...): string\n")),(0,n.kt)("p",null,"Returns a string after applying a transformation function.\nBy default ",(0,n.kt)("inlineCode",{parentName:"p"},"splitter")," expression will split the string into words, where non-alphanum chars are considered as word separators.\n",(0,n.kt)("inlineCode",{parentName:"p"},"separator")," will be used for joining the words back together.\n",(0,n.kt)("a",{parentName:"p",href:"/api/utils/string#prune"},"prune")," using ",(0,n.kt)("inlineCode",{parentName:"p"},"separator")," is applied to the result of the transformation."),(0,n.kt)("h3",{id:"parameters-8"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"str")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Maybe"),"\\< ",(0,n.kt)("inlineCode",{parentName:"td"},"string")," ",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the string to be transformed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"transformation"),"?"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Maybe"),"\\< (",(0,n.kt)("inlineCode",{parentName:"td"},"word"),") => ",(0,n.kt)("inlineCode",{parentName:"td"},"string")," ",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"optional transformation callback function.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"separator"),"?"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"optional character separator for word-based transformation.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"splitter"),"?"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"RegExp")),(0,n.kt)("td",{parentName:"tr",align:"left"},"optional regex or string rule for splitting string into word.")))),(0,n.kt)("h3",{id:"returns-8"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"a transformed string, or an empty string if ",(0,n.kt)("inlineCode",{parentName:"p"},"str")," is not a valid string."),(0,n.kt)("h3",{id:"source-8"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/61a214b/packages/utils/src/string.ts#L36"},"string.ts:36")),(0,n.kt)("h3",{id:"example-7"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { stringCaseBuilder } from "@graphql-markdown/utils/string";\n\nconst text = "The quick brown fox jumps over the lazy dog.";\nconst transformation = (word: string): string => `*${word}*`\n\nstringCaseBuilder(text, transformation, " ");\n// Expected result: "*The* *quick* *brown* *fox* *jumps* *over* *the* *lazy* *dog*"\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"tohtmlunicode"},"toHTMLUnicode"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"toHTMLUnicode(char): string\n")),(0,n.kt)("p",null,"Converts a character to its equivalent HTML unicode representation ",(0,n.kt)("inlineCode",{parentName:"p"},"&#x0000"),"."),(0,n.kt)("h3",{id:"parameters-9"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"char")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Maybe"),"\\< ",(0,n.kt)("inlineCode",{parentName:"td"},"string")," ",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the character to be transformed.")))),(0,n.kt)("h3",{id:"returns-9"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"a HTML unicode representation of ",(0,n.kt)("inlineCode",{parentName:"p"},"char"),", or an empty string if ",(0,n.kt)("inlineCode",{parentName:"p"},"char")," is not a valid string."),(0,n.kt)("h3",{id:"source-9"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/61a214b/packages/utils/src/string.ts#L114"},"string.ts:114")),(0,n.kt)("h3",{id:"example-8"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { toHTMLUnicode } from "@graphql-markdown/utils/string";\n\ntoHTMLUnicode("%"); // Expected result: "&#x0025;"\n')))}m.isMDXComponent=!0}}]);