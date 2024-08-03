"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[8577],{37145:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var r=i(74848),s=i(28453);const t={title:"directive",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},d=void 0,c={id:"printer-legacy/directive",title:"directive",description:"getCustomDirectiveResolver()",source:"@site/api/printer-legacy/directive.md",sourceDirName:"printer-legacy",slug:"/printer-legacy/directive",permalink:"/api/printer-legacy/directive",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"directive",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},l={},o=[{value:"getCustomDirectiveResolver()",id:"getcustomdirectiveresolver",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Defined in",id:"defined-in",level:3},{value:"getCustomTags()",id:"getcustomtags",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Defined in",id:"defined-in-1",level:3},{value:"printCustomDirective()",id:"printcustomdirective",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Returns",id:"returns-2",level:3},{value:"Defined in",id:"defined-in-2",level:3},{value:"printCustomDirectives()",id:"printcustomdirectives",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Returns",id:"returns-3",level:3},{value:"Defined in",id:"defined-in-3",level:3},{value:"printCustomTags()",id:"printcustomtags",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"Returns",id:"returns-4",level:3},{value:"Defined in",id:"defined-in-4",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"getcustomdirectiveresolver",children:"getCustomDirectiveResolver()"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function getCustomDirectiveResolver(\n   resolver, \n   type, \n   constDirectiveOption, \nfallback?): Maybe<string>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"resolver"}),": ",(0,r.jsx)(n.code,{children:"CustomDirectiveResolver"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"type"}),": ",(0,r.jsx)(n.code,{children:"unknown"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"constDirectiveOption"}),": ",(0,r.jsx)(n.code,{children:"CustomDirectiveMapItem"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"fallback?"}),": ",(0,r.jsx)(n.code,{children:"Maybe"}),"<",(0,r.jsx)(n.code,{children:"string"}),">"]}),"\n",(0,r.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Maybe"}),"<",(0,r.jsx)(n.code,{children:"string"}),">"]}),"\n",(0,r.jsx)(n.h3,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:"directive.ts:17"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"getcustomtags",children:"getCustomTags()"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function getCustomTags(type, options): Badge[]\n"})}),"\n",(0,r.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"type"}),": ",(0,r.jsx)(n.code,{children:"unknown"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"options"}),": ",(0,r.jsx)(n.code,{children:"PrintTypeOptions"})]}),"\n",(0,r.jsx)(n.h3,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Badge"}),"[]"]}),"\n",(0,r.jsx)(n.h3,{id:"defined-in-1",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:"directive.ts:89"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"printcustomdirective",children:"printCustomDirective()"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function printCustomDirective(\n   type, \n   constDirectiveOption, \noptions): Maybe<string>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"type"}),": ",(0,r.jsx)(n.code,{children:"unknown"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"constDirectiveOption"}),": ",(0,r.jsx)(n.code,{children:"CustomDirectiveMapItem"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"options"}),": ",(0,r.jsx)(n.code,{children:"PrintTypeOptions"})]}),"\n",(0,r.jsx)(n.h3,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Maybe"}),"<",(0,r.jsx)(n.code,{children:"string"}),">"]}),"\n",(0,r.jsx)(n.h3,{id:"defined-in-2",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:"directive.ts:37"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"printcustomdirectives",children:"printCustomDirectives()"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function printCustomDirectives(type, options): string\n"})}),"\n",(0,r.jsx)(n.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"type"}),": ",(0,r.jsx)(n.code,{children:"unknown"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"options"}),": ",(0,r.jsx)(n.code,{children:"PrintTypeOptions"})]}),"\n",(0,r.jsx)(n.h3,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"string"})}),"\n",(0,r.jsx)(n.h3,{id:"defined-in-3",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:"directive.ts:59"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"printcustomtags",children:"printCustomTags()"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function printCustomTags(type, options): string | MDXString\n"})}),"\n",(0,r.jsx)(n.h3,{id:"parameters-4",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"type"}),": ",(0,r.jsx)(n.code,{children:"unknown"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"options"}),": ",(0,r.jsx)(n.code,{children:"PrintTypeOptions"})]}),"\n",(0,r.jsx)(n.h3,{id:"returns-4",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"string"})," | ",(0,r.jsx)(n.code,{children:"MDXString"})]}),"\n",(0,r.jsx)(n.h3,{id:"defined-in-4",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:"directive.ts:115"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>c});var r=i(96540);const s={},t=r.createContext(s);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);