"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2602],{7650:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(74848),t=n(28453);const s={title:"prettier",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},d=void 0,l={id:"utils/prettier",title:"prettier",description:"Internal library for prettifying files using prettier.",source:"@site/api/utils/prettier.md",sourceDirName:"utils",slug:"/utils/prettier",permalink:"/api/utils/prettier",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"prettier",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},a={},c=[{value:"prettify()",id:"prettify",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Defined in",id:"defined-in",level:3},{value:"prettifyJavascript()",id:"prettifyjavascript",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Defined in",id:"defined-in-1",level:3},{value:"prettifyMarkdown()",id:"prettifymarkdown",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Returns",id:"returns-2",level:3},{value:"Defined in",id:"defined-in-2",level:3}];function o(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:["Internal library for prettifying files using ",(0,i.jsx)(r.code,{children:"prettier"}),"."]}),"\n",(0,i.jsx)(r.h2,{id:"prettify",children:"prettify()"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"function prettify(content, parser): Promise<undefined | string>\n"})}),"\n",(0,i.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"content"}),": ",(0,i.jsx)(r.code,{children:"string"})]}),"\n",(0,i.jsx)(r.p,{children:"the string to be prettified."}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"parser"}),": ",(0,i.jsx)(r.code,{children:"string"})]}),"\n",(0,i.jsxs)(r.p,{children:["the ",(0,i.jsx)(r.code,{children:"prettier"})," parser to use."]}),"\n",(0,i.jsx)(r.h3,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Promise"}),"<",(0,i.jsx)(r.code,{children:"undefined"})," | ",(0,i.jsx)(r.code,{children:"string"}),">"]}),"\n",(0,i.jsx)(r.p,{children:"a prettified string, or undefined if an error occurred."}),"\n",(0,i.jsx)(r.h3,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/utils/src/prettier.ts#L29",children:"prettier.ts:29"})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"prettifyjavascript",children:"prettifyJavascript()"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"function prettifyJavascript(content): Promise<undefined | string>\n"})}),"\n",(0,i.jsx)(r.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"content"}),": ",(0,i.jsx)(r.code,{children:"string"})]}),"\n",(0,i.jsx)(r.p,{children:"the string to be prettified."}),"\n",(0,i.jsx)(r.h3,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Promise"}),"<",(0,i.jsx)(r.code,{children:"undefined"})," | ",(0,i.jsx)(r.code,{children:"string"}),">"]}),"\n",(0,i.jsx)(r.p,{children:"a prettified string, or undefined if an error occurred."}),"\n",(0,i.jsx)(r.h3,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/utils/src/prettier.ts#L82",children:"prettier.ts:82"})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"prettifymarkdown",children:"prettifyMarkdown()"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"function prettifyMarkdown(content): Promise<undefined | string>\n"})}),"\n",(0,i.jsx)(r.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"content"}),": ",(0,i.jsx)(r.code,{children:"string"})]}),"\n",(0,i.jsx)(r.p,{children:"the string to be prettified."}),"\n",(0,i.jsx)(r.h3,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Promise"}),"<",(0,i.jsx)(r.code,{children:"undefined"})," | ",(0,i.jsx)(r.code,{children:"string"}),">"]}),"\n",(0,i.jsx)(r.p,{children:"a prettified string, or undefined if an error occurred."}),"\n",(0,i.jsx)(r.h3,{id:"defined-in-2",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/utils/src/prettier.ts#L61",children:"prettier.ts:61"})})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>l});var i=n(96540);const t={},s=i.createContext(t);function d(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);