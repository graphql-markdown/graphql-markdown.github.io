"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6752],{761:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=r(5893),i=r(1151);const a={title:"tag",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},s=void 0,c={id:"helpers/directives/tag",title:"tag",description:"Custom directive tag helper.",source:"@site/api/helpers/directives/tag.md",sourceDirName:"helpers/directives",slug:"/helpers/directives/tag",permalink:"/api/helpers/directives/tag",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"tag",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},d={},l=[{value:"See",id:"see",level:2},{value:"directiveTag()",id:"directivetag",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"Source",id:"source",level:3}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Custom directive ",(0,t.jsx)(n.code,{children:"tag"})," helper."]}),"\n",(0,t.jsx)(n.h2,{id:"see",children:"See"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.a,{href:"https://graphql-markdown.github.io/docs/advanced/custom-directive#tag",children:["Option ",(0,t.jsx)(n.code,{children:"customDirective.[directive].tag"})]})}),"\n",(0,t.jsx)(n.h2,{id:"directivetag",children:"directiveTag()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function directiveTag(\n   directive, \n   type?, \n   classname?): Badge\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Helper for rendering custom description from schema directive on type.\nThis is an example on how to build a custom ",(0,t.jsx)(n.code,{children:"tag"})," callback."]}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"directive"}),": ",(0,t.jsx)(n.code,{children:"GraphQLDirective"})]}),"\n",(0,t.jsx)(n.p,{children:"the schema directive to parse."}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"type?"}),": ",(0,t.jsx)(n.code,{children:"unknown"})]}),"\n",(0,t.jsx)(n.p,{children:"the type being processed."}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"classname?"}),": ",(0,t.jsx)(n.code,{children:"string"}),"= ",(0,t.jsx)(n.code,{children:'"badge--secondary"'})]}),"\n",(0,t.jsxs)(n.p,{children:["optional CSS classname, ",(0,t.jsx)(n.code,{children:'"badge--secondary"'})," by default."]}),"\n",(0,t.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Badge"})}),"\n",(0,t.jsx)(n.p,{children:"a custom description based on directive value."}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'import { GraphQLDirective, GraphQLScalarType } from "graphql";\nimport { directiveTag } from "@graphql-markdown/helpers/directives/tag";\n\nconst directive = new GraphQLDirective({\n  name: "auth",\n  description: "Authentication required",\n  locations: [],\n});\n\nconst type = new GraphQLScalarType<string>({\n  name: "FooBar",\n  astNode: {\n    kind: Kind.SCALAR_TYPE_DEFINITION,\n    name: { kind: Kind.NAME, value: "FooBar" },\n    directives: [\n      {\n        kind: Kind.DIRECTIVE,\n        name: { kind: Kind.NAME, value: "auth" },\n      },\n    ],\n  },\n});\n\ndirectiveTag(directive, type);\n// Expected result: { text: "@auth", classname: "badge--secondary" }\n'})}),"\n",(0,t.jsx)(n.h3,{id:"source",children:"Source"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/c25ff35/packages/helpers/src/directives/tag.ts#L51",children:"directives/tag.ts:51"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>s});var t=r(7294);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);