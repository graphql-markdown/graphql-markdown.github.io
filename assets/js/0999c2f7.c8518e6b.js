"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7706],{3305:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=n(5893),i=n(1151);const s={title:"prettier",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},d=void 0,l={id:"utils/prettier",title:"prettier",description:"Internal library for prettifying files using prettier.",source:"@site/api/utils/prettier.md",sourceDirName:"utils",slug:"/utils/prettier",permalink:"/api/utils/prettier",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"prettier",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},a={},c=[{value:"prettify()",id:"prettify",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Remarks",id:"remarks",level:3},{value:"See",id:"see",level:3},{value:"Source",id:"source",level:3},{value:"prettifyJavascript()",id:"prettifyjavascript",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Remarks",id:"remarks-1",level:3},{value:"See",id:"see-1",level:3},{value:"Source",id:"source-1",level:3},{value:"prettifyMarkdown()",id:"prettifymarkdown",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Returns",id:"returns-2",level:3},{value:"Remarks",id:"remarks-2",level:3},{value:"See",id:"see-2",level:3},{value:"Source",id:"source-2",level:3}];function o(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["Internal library for prettifying files using ",(0,t.jsx)(r.code,{children:"prettier"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"prettify",children:"prettify()"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"prettify(content, parser): Promise<undefined | string>\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Prettify a string using ",(0,t.jsx)(r.a,{href:"https://prettier.io/docs/en/api#prettierformatsource-options",children:"prettier.format"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.strong,{children:"content"}),": ",(0,t.jsx)(r.code,{children:"string"})]}),"\n",(0,t.jsx)(r.p,{children:"the string to be prettified."}),"\n",(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.strong,{children:"parser"}),": ",(0,t.jsx)(r.code,{children:"string"})]}),"\n",(0,t.jsxs)(r.p,{children:["the ",(0,t.jsx)(r.code,{children:"prettier"})," parser to use."]}),"\n",(0,t.jsx)(r.h3,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Promise"}),"<",(0,t.jsx)(r.code,{children:"undefined"})," | ",(0,t.jsx)(r.code,{children:"string"}),">"]}),"\n",(0,t.jsx)(r.p,{children:"a prettified string, or undefined if an error occurred."}),"\n",(0,t.jsx)(r.h3,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsx)(r.p,{children:"This function logs a warning message on error."}),"\n",(0,t.jsx)(r.h3,{id:"see",children:"See"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://prettier.io/docs/en/options#parser",children:"https://prettier.io/docs/en/options#parser"})," for the list of parsers."]}),"\n",(0,t.jsx)(r.h3,{id:"source",children:"Source"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/6dd3810/packages/utils/src/prettier.ts#L29",children:"prettier.ts:29"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"prettifyjavascript",children:"prettifyJavascript()"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"prettifyJavascript(content): Promise<undefined | string>\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Prettify a Javascript string using ",(0,t.jsx)(r.a,{href:"/api/utils/prettier#prettify",children:"prettify"})," and ",(0,t.jsx)(r.code,{children:"babel"})," parser."]}),"\n",(0,t.jsx)(r.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.strong,{children:"content"}),": ",(0,t.jsx)(r.code,{children:"string"})]}),"\n",(0,t.jsx)(r.p,{children:"the string to be prettified."}),"\n",(0,t.jsx)(r.h3,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Promise"}),"<",(0,t.jsx)(r.code,{children:"undefined"})," | ",(0,t.jsx)(r.code,{children:"string"}),">"]}),"\n",(0,t.jsx)(r.p,{children:"a prettified string, or undefined if an error occurred."}),"\n",(0,t.jsx)(r.h3,{id:"remarks-1",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["Same as ",(0,t.jsx)(r.code,{children:'prettify(content, "babel")'}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"see-1",children:"See"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/api/utils/prettier#prettify",children:"prettify"})}),"\n",(0,t.jsx)(r.h3,{id:"source-1",children:"Source"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/6dd3810/packages/utils/src/prettier.ts#L82",children:"prettier.ts:82"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"prettifymarkdown",children:"prettifyMarkdown()"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"prettifyMarkdown(content): Promise<undefined | string>\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Prettify a Markdown string using ",(0,t.jsx)(r.a,{href:"/api/utils/prettier#prettify",children:"prettify"})," and ",(0,t.jsx)(r.code,{children:"markdown"})," parser."]}),"\n",(0,t.jsx)(r.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.strong,{children:"content"}),": ",(0,t.jsx)(r.code,{children:"string"})]}),"\n",(0,t.jsx)(r.p,{children:"the string to be prettified."}),"\n",(0,t.jsx)(r.h3,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Promise"}),"<",(0,t.jsx)(r.code,{children:"undefined"})," | ",(0,t.jsx)(r.code,{children:"string"}),">"]}),"\n",(0,t.jsx)(r.p,{children:"a prettified string, or undefined if an error occurred."}),"\n",(0,t.jsx)(r.h3,{id:"remarks-2",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["Same as ",(0,t.jsx)(r.code,{children:'prettify(content, "markdown")'}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"see-2",children:"See"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/api/utils/prettier#prettify",children:"prettify"})}),"\n",(0,t.jsx)(r.h3,{id:"source-2",children:"Source"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/6dd3810/packages/utils/src/prettier.ts#L61",children:"prettier.ts:61"})})]})}function p(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>d});var t=n(7294);const i={},s=t.createContext(i);function d(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);