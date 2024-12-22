"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[4775],{90062:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var l=i(74848),s=i(28453);const r={title:"fs",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},t=void 0,d={id:"utils/fs",title:"fs",description:"Library of helper functions for handling files and folders.",source:"@site/api/utils/fs.md",sourceDirName:"utils",slug:"/utils/fs",permalink:"/api/utils/fs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"fs",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},a={},o=[{value:"ensureDir()",id:"ensuredir",level:2},{value:"Parameters",id:"parameters",level:3},{value:"location",id:"location",level:4},{value:"options?",id:"options",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"Defined in",id:"defined-in",level:3},{value:"fileExists()",id:"fileexists",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"location",id:"location-1",level:4},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"Defined in",id:"defined-in-1",level:3},{value:"saveFile()",id:"savefile",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"location",id:"location-2",level:4},{value:"content",id:"content",level:4},{value:"prettify?",id:"prettify",level:4},{value:"Returns",id:"returns-2",level:3},{value:"Example",id:"example-2",level:3},{value:"Defined in",id:"defined-in-2",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Library of helper functions for handling files and folders."}),"\n",(0,l.jsx)(n.h2,{id:"ensuredir",children:"ensureDir()"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"function ensureDir(location, options?): Promise<void>\n"})}),"\n",(0,l.jsx)(n.p,{children:"Asynchronously create a folder structure if it does not exist."}),"\n",(0,l.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsx)(n.h4,{id:"location",children:"location"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"string"})}),"\n",(0,l.jsx)(n.p,{children:"folder structure in path format."}),"\n",(0,l.jsx)(n.h4,{id:"options",children:"options?"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"EnsureDirOptions"})}),"\n",(0,l.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Promise"}),"<",(0,l.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"import { ensureDir } from '@graphql-markdown/utils/fs';\n\nawait ensureDir(\"./.temp/local\")\n\n// Creates both folders if they do not exists.\n"})}),"\n",(0,l.jsx)(n.h3,{id:"defined-in",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:"fs.ts:60"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"fileexists",children:"fileExists()"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"function fileExists(location): Promise<boolean>\n"})}),"\n",(0,l.jsx)(n.p,{children:"Asynchronously check if a file or folder exists at the path location."}),"\n",(0,l.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,l.jsx)(n.h4,{id:"location-1",children:"location"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"string"})}),"\n",(0,l.jsx)(n.p,{children:"file or folder location."}),"\n",(0,l.jsx)(n.h3,{id:"returns-1",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Promise"}),"<",(0,l.jsx)(n.code,{children:"boolean"}),">"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"true"})," if the path is valid, else ",(0,l.jsx)(n.code,{children:"false"})," if not."]}),"\n",(0,l.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"import { fileExists } from '@graphql-markdown/utils/fs';\n\nawait fileExists(\"./.temp/local\")\n\n// Expected true if path is valid, false if not\n"})}),"\n",(0,l.jsx)(n.h3,{id:"defined-in-1",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:"fs.ts:35"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"savefile",children:"saveFile()"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"function saveFile(\n   location, \n   content, \nprettify?): Promise<void>\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Asynchronously save a file with a string content at specified location in local FS.\nOverride the file content if the file already exists.\nThe function calls ",(0,l.jsx)(n.code,{children:"ensureDir(dirname(location))"})," to create the folder structure if missing."]}),"\n",(0,l.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,l.jsx)(n.h4,{id:"location-2",children:"location"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"string"})}),"\n",(0,l.jsx)(n.p,{children:"file location."}),"\n",(0,l.jsx)(n.h4,{id:"content",children:"content"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"string"})}),"\n",(0,l.jsx)(n.p,{children:"data to be written into the file (UTF-8 string)."}),"\n",(0,l.jsx)(n.h4,{id:"prettify",children:"prettify?"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"PrettifyCallbackFunction"})}),"\n",(0,l.jsx)(n.p,{children:"optional callback function for prettifying the content."}),"\n",(0,l.jsx)(n.h3,{id:"returns-2",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Promise"}),"<",(0,l.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"true"})," if the path is valid, else ",(0,l.jsx)(n.code,{children:"false"})," if not."]}),"\n",(0,l.jsx)(n.h3,{id:"example-2",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'import { saveFile } from \'@graphql-markdown/utils/fs\';\n\nawait saveFile("./.temp/local.md", "foobar")\n\n// Created .temp folder if it does not exists, and save data into local.md\n'})}),"\n",(0,l.jsx)(n.h3,{id:"defined-in-2",children:"Defined in"}),"\n",(0,l.jsx)(n.p,{children:"fs.ts:97"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>d});var l=i(96540);const s={},r=l.createContext(s);function t(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);