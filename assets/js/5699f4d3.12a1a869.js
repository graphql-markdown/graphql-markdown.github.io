"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["6985"],{16658:function(e,t,n){n.r(t),n.d(t,{Bullet:()=>c,SpecifiedBy:()=>p,Badge:()=>u,default:()=>x,frontMatter:()=>i,metadata:()=>r,Details:()=>m,assets:()=>l,toc:()=>h,contentTitle:()=>o});var r=JSON.parse('{"id":"types/directives/deprecated","title":"deprecated","description":"Marks an element of a GraphQL schema as no longer supported.","source":"@site/examples/default/types/directives/deprecated.mdx","sourceDirName":"types/directives","slug":"/types/directives/deprecated","permalink":"/examples/default/types/directives/deprecated","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"deprecated","title":"deprecated"},"sidebar":"defaultSidebar","previous":{"title":"Viewer","permalink":"/examples/default/operations/queries/viewer"},"next":{"title":"ActivitySort","permalink":"/examples/default/types/enums/activity-sort"}}'),a=n("85893"),s=n("50065"),d=n("67294");let i={id:"deprecated",title:"deprecated"},o=void 0,l={},c=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25CF\xa0"})}),p=e=>(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:e.class,children:e.text})}),m=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{let[s,i]=(0,d.useState)(r);return(0,a.jsxs)("details",{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)("summary",{onClick:e=>{e.preventDefault(),i(e=>!e)},style:{listStyle:"none"},children:s?e:t}),s&&n]})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>deprecated.<b>reason</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary "></Badge>',id:"deprecatedreasonstring-",level:4}];function f(e){let t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Head:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n,{children:[(0,a.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,a.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,a.jsx)(t.p,{children:"Marks an element of a GraphQL schema as no longer supported."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:'directive @deprecated(\n  reason: String = "No longer supported"\n) on FIELD_DEFINITION | ENUM_VALUE\n'})}),"\n",(0,a.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(t.h4,{id:"deprecatedreasonstring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["deprecated.",(0,a.jsx)("b",{children:"reason"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/string",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"String"})})})," ",(0,a.jsx)(u,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,a.jsxs)(t.p,{children:["Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted in ",(0,a.jsx)(t.a,{href:"https://daringfireball.net/projects/markdown/",children:"Markdown"}),"."]})]})}function x(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return d}});var r=n(67294);let a={},s=r.createContext(a);function d(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);