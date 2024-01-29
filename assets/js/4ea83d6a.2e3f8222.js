"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7327],{7450:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=s(5893),i=s(1151);const l={title:"fs",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},t=void 0,a={id:"utils/fs",title:"fs",description:"Library of helper functions for handling files and folders.",source:"@site/api/utils/fs.md",sourceDirName:"utils",slug:"/utils/fs",permalink:"/api/utils/fs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"fs",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},o={},c=[{value:"ensureDir()",id:"ensuredir",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"Source",id:"source",level:3},{value:"fileExists()",id:"fileexists",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"Source",id:"source-1",level:3},{value:"saveFile()",id:"savefile",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Returns",id:"returns-2",level:3},{value:"Example",id:"example-2",level:3},{value:"Source",id:"source-2",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Library of helper functions for handling files and folders."}),"\n",(0,r.jsx)(n.h2,{id:"ensuredir",children:"ensureDir()"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function ensureDir(location): Promise<void>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Asynchronously create a folder structure if it does not exist."}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"location"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.p,{children:"folder structure in path format."}),"\n",(0,r.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { ensureDir } from '@graphql-markdown/utils/fs';\n\nawait ensureDir(\"./.temp/local\")\n\n// Creates both folders if they do not exists.\n"})}),"\n",(0,r.jsx)(n.h3,{id:"source",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/c25ff35/packages/utils/src/fs.ts#L57",children:"fs.ts:57"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"fileexists",children:"fileExists()"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function fileExists(location): Promise<boolean>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Asynchronously check if a file or folder exists at the path location."}),"\n",(0,r.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"location"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.p,{children:"file or folder location."}),"\n",(0,r.jsx)(n.h3,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.code,{children:"boolean"}),">"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"true"})," if the path is valid, else ",(0,r.jsx)(n.code,{children:"false"})," if not."]}),"\n",(0,r.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { fileExists } from '@graphql-markdown/utils/fs';\n\nawait fileExists(\"./.temp/local\")\n\n// Expected true if path is valid, false if not\n"})}),"\n",(0,r.jsx)(n.h3,{id:"source-1",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/c25ff35/packages/utils/src/fs.ts#L32",children:"fs.ts:32"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"savefile",children:"saveFile()"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function saveFile(\n   location, \n   content, \nprettify?): Promise<void>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Asynchronously save a file with a string content at specified location in local FS.\nOverride the file content if the file already exists.\nThe function calls ",(0,r.jsx)(n.code,{children:"ensureDir(dirname(location))"})," to create the folder structure if missing."]}),"\n",(0,r.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"location"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.p,{children:"file location."}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"content"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.p,{children:"data to be written into the file (UTF-8 string)."}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"prettify?"}),": ",(0,r.jsx)(n.code,{children:"PrettifyCallbackFunction"})]}),"\n",(0,r.jsx)(n.p,{children:"optional callback function for prettifying the content."}),"\n",(0,r.jsx)(n.h3,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"true"})," if the path is valid, else ",(0,r.jsx)(n.code,{children:"false"})," if not."]}),"\n",(0,r.jsx)(n.h3,{id:"example-2",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import { saveFile } from \'@graphql-markdown/utils/fs\';\n\nawait saveFile("./.temp/local.md", "foobar")\n\n// Created .temp folder if it does not exists, and save data into local.md\n'})}),"\n",(0,r.jsx)(n.h3,{id:"source-2",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/c25ff35/packages/utils/src/fs.ts#L85",children:"fs.ts:85"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>t});var r=s(7294);const i={},l=r.createContext(i);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);