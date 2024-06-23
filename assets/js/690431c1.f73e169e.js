"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[612],{85444:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});var i=n(74848),d=n(28453);const s={title:"renderer",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},l=void 0,t={id:"core/renderer",title:"renderer",description:"Renderer",source:"@site/api/core/renderer.md",sourceDirName:"core",slug:"/core/renderer",permalink:"/api/core/renderer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"renderer",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},a={},c=[{value:"Renderer",id:"renderer",level:2},{value:"Constructors",id:"constructors",level:3},{value:"new Renderer()",id:"new-renderer",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:5},{value:"Properties",id:"properties",level:3},{value:"baseURL",id:"baseurl",level:4},{value:"Defined in",id:"defined-in-1",level:5},{value:"group",id:"group",level:4},{value:"Defined in",id:"defined-in-2",level:5},{value:"options",id:"options",level:4},{value:"Defined in",id:"defined-in-3",level:5},{value:"outputDir",id:"outputdir",level:4},{value:"Defined in",id:"defined-in-4",level:5},{value:"prettify",id:"prettify",level:4},{value:"Defined in",id:"defined-in-5",level:5},{value:"Methods",id:"methods",level:3},{value:"generateCategoryMetafile()",id:"generatecategorymetafile",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-6",level:5},{value:"generateCategoryMetafileType()",id:"generatecategorymetafiletype",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Defined in",id:"defined-in-7",level:5},{value:"renderHomepage()",id:"renderhomepage",level:4},{value:"Parameters",id:"parameters-3",level:5},{value:"Returns",id:"returns-3",level:5},{value:"Defined in",id:"defined-in-8",level:5},{value:"renderRootTypes()",id:"renderroottypes",level:4},{value:"Parameters",id:"parameters-4",level:5},{value:"Returns",id:"returns-4",level:5},{value:"Defined in",id:"defined-in-9",level:5},{value:"renderSidebar()",id:"rendersidebar",level:4},{value:"Returns",id:"returns-5",level:5},{value:"Defined in",id:"defined-in-10",level:5},{value:"renderTypeEntities()",id:"rendertypeentities",level:4},{value:"Parameters",id:"parameters-5",level:5},{value:"Returns",id:"returns-6",level:5},{value:"Defined in",id:"defined-in-11",level:5}];function o(e){const r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"renderer",children:"Renderer"}),"\n",(0,i.jsx)(r.h3,{id:"constructors",children:"Constructors"}),"\n",(0,i.jsx)(r.h4,{id:"new-renderer",children:"new Renderer()"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"new Renderer(\n   printer, \n   outputDir, \n   baseURL, \n   group, \n   prettify, \n   docOptions): Renderer\n"})}),"\n",(0,i.jsx)(r.h5,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"printer"}),": ",(0,i.jsx)(r.em,{children:"typeof"})," ",(0,i.jsx)(r.code,{children:"IPrinter"})]}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"outputDir"}),": ",(0,i.jsx)(r.code,{children:"string"})]}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"baseURL"}),": ",(0,i.jsx)(r.code,{children:"string"})]}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"group"}),": ",(0,i.jsx)(r.code,{children:"Maybe"}),"<",(0,i.jsx)(r.code,{children:"Partial"}),"<",(0,i.jsx)(r.code,{children:"Record"}),"<",(0,i.jsx)(r.code,{children:"SchemaEntity"}),", ",(0,i.jsx)(r.code,{children:"Record"}),"<",(0,i.jsx)(r.code,{children:"string"}),", ",(0,i.jsx)(r.code,{children:"Maybe"}),"<",(0,i.jsx)(r.code,{children:"string"}),">>>>>"]}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"prettify"}),": ",(0,i.jsx)(r.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"docOptions"}),": ",(0,i.jsx)(r.code,{children:"Maybe"}),"<",(0,i.jsx)(r.code,{children:"RendererDocOptions"}),">"]}),"\n",(0,i.jsx)(r.h5,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/api/core/renderer#renderer",children:(0,i.jsx)(r.code,{children:"Renderer"})})}),"\n",(0,i.jsx)(r.h5,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/core/src/renderer.ts#L47",children:"renderer.ts:47"})}),"\n",(0,i.jsx)(r.h3,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(r.h4,{id:"baseurl",children:"baseURL"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"baseURL: string;\n"})}),"\n",(0,i.jsx)(r.h5,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/core/src/renderer.ts#L41",children:"renderer.ts:41"})}),"\n",(0,i.jsx)(r.h4,{id:"group",children:"group"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"group: Maybe<Partial<Record<SchemaEntity, Record<string, Maybe<string>>>>>;\n"})}),"\n",(0,i.jsx)(r.h5,{id:"defined-in-2",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/core/src/renderer.ts#L39",children:"renderer.ts:39"})}),"\n",(0,i.jsx)(r.h4,{id:"options",children:"options"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"options: Maybe<RendererDocOptions>;\n"})}),"\n",(0,i.jsx)(r.h5,{id:"defined-in-3",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/core/src/renderer.ts#L43",children:"renderer.ts:43"})}),"\n",(0,i.jsx)(r.h4,{id:"outputdir",children:"outputDir"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"outputDir: string;\n"})}),"\n",(0,i.jsx)(r.h5,{id:"defined-in-4",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/core/src/renderer.ts#L40",children:"renderer.ts:40"})}),"\n",(0,i.jsx)(r.h4,{id:"prettify",children:"prettify"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"prettify: boolean;\n"})}),"\n",(0,i.jsx)(r.h5,{id:"defined-in-5",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/core/src/renderer.ts#L42",children:"renderer.ts:42"})}),"\n",(0,i.jsx)(r.h3,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(r.h4,{id:"generatecategorymetafile",children:"generateCategoryMetafile()"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"generateCategoryMetafile(\n   category, \n   dirPath, \n   sidebarPosition?, \n   styleClass?, \noptions?): Promise<void>\n"})}),"\n",(0,i.jsx)(r.h5,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"category"}),": ",(0,i.jsx)(r.code,{children:"string"})]}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"dirPath"}),": ",(0,i.jsx)(r.code,{children:"string"})]}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"sidebarPosition?"}),": ",(0,i.jsx)(r.code,{children:"number"})]}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"styleClass?"}),": ",(0,i.jsx)(r.code,{children:"string"})]}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"options?"})," = ",(0,i.jsx)(r.code,{children:"..."})]}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"options.collapsed?"}),": ",(0,i.jsx)(r.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"options.collapsible?"}),": ",(0,i.jsx)(r.code,{children:"boolean"})]}),"\n",(0,i.jsx)(r.h5,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Promise"}),"<",(0,i.jsx)(r.code,{children:"void"}),">"]}),"\n",(0,i.jsx)(r.h5,{id:"defined-in-6",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/core/src/renderer.ts#L63",children:"renderer.ts:63"})}),"\n",(0,i.jsx)(r.h4,{id:"generatecategorymetafiletype",children:"generateCategoryMetafileType()"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"generateCategoryMetafileType(\n   type, \n   name, \nrootTypeName): Promise<string>\n"})}),"\n",(0,i.jsx)(r.h5,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"type"}),": ",(0,i.jsx)(r.code,{children:"unknown"})]}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"name"}),": ",(0,i.jsx)(r.code,{children:"string"})]}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"rootTypeName"}),": ",(0,i.jsx)(r.code,{children:"SchemaEntity"})]}),"\n",(0,i.jsx)(r.h5,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Promise"}),"<",(0,i.jsx)(r.code,{children:"string"}),">"]}),"\n",(0,i.jsx)(r.h5,{id:"defined-in-7",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/core/src/renderer.ts#L98",children:"renderer.ts:98"})}),"\n",(0,i.jsx)(r.h4,{id:"renderhomepage",children:"renderHomepage()"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"renderHomepage(homepageLocation): Promise<void>\n"})}),"\n",(0,i.jsx)(r.h5,{id:"parameters-3",children:"Parameters"}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"homepageLocation"}),": ",(0,i.jsx)(r.code,{children:"string"})]}),"\n",(0,i.jsx)(r.h5,{id:"returns-3",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Promise"}),"<",(0,i.jsx)(r.code,{children:"void"}),">"]}),"\n",(0,i.jsx)(r.h5,{id:"defined-in-8",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/core/src/renderer.ts#L248",children:"renderer.ts:248"})}),"\n",(0,i.jsx)(r.h4,{id:"renderroottypes",children:"renderRootTypes()"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"renderRootTypes(rootTypeName, type): Promise<Maybe<Maybe<Category>[]>>\n"})}),"\n",(0,i.jsx)(r.h5,{id:"parameters-4",children:"Parameters"}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"rootTypeName"}),": ",(0,i.jsx)(r.code,{children:"SchemaEntity"})]}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"type"}),": ",(0,i.jsx)(r.code,{children:"unknown"})]}),"\n",(0,i.jsx)(r.h5,{id:"returns-4",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Promise"}),"<",(0,i.jsx)(r.code,{children:"Maybe"}),"<",(0,i.jsx)(r.code,{children:"Maybe"}),"<",(0,i.jsx)(r.code,{children:"Category"}),">[]>>"]}),"\n",(0,i.jsx)(r.h5,{id:"defined-in-9",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/core/src/renderer.ts#L145",children:"renderer.ts:145"})}),"\n",(0,i.jsx)(r.h4,{id:"rendersidebar",children:"renderSidebar()"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"renderSidebar(): Promise<string>\n"})}),"\n",(0,i.jsx)(r.h5,{id:"returns-5",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Promise"}),"<",(0,i.jsx)(r.code,{children:"string"}),">"]}),"\n",(0,i.jsx)(r.h5,{id:"defined-in-10",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/core/src/renderer.ts#L222",children:"renderer.ts:222"})}),"\n",(0,i.jsx)(r.h4,{id:"rendertypeentities",children:"renderTypeEntities()"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"renderTypeEntities(\n   dirPath, \n   name, \ntype): Promise<Maybe<Category>>\n"})}),"\n",(0,i.jsx)(r.h5,{id:"parameters-5",children:"Parameters"}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"dirPath"}),": ",(0,i.jsx)(r.code,{children:"string"})]}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"name"}),": ",(0,i.jsx)(r.code,{children:"string"})]}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"type"}),": ",(0,i.jsx)(r.code,{children:"unknown"})]}),"\n",(0,i.jsx)(r.h5,{id:"returns-6",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Promise"}),"<",(0,i.jsx)(r.code,{children:"Maybe"}),"<",(0,i.jsx)(r.code,{children:"Category"}),">>"]}),"\n",(0,i.jsx)(r.h5,{id:"defined-in-11",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/core/src/renderer.ts#L174",children:"renderer.ts:174"})})]})}function h(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>t});var i=n(96540);const d={},s=i.createContext(d);function l(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);