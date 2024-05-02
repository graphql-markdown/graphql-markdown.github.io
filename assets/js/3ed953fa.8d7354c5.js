"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3129],{33807:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var s=r(74848),n=r(28453),o=r(96540);const a={id:"auth",title:"auth"},c=void 0,i={id:"common/directives/auth",title:"auth",description:"Example of custom directive for customDirective descriptor.",source:"@site/examples/group-by/common/directives/auth.mdx",sourceDirName:"common/directives",slug:"/common/directives/auth",permalink:"/examples/group-by/common/directives/auth",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"auth",title:"auth"},sidebar:"schemaSidebar",previous:{title:"Directives",permalink:"/examples/group-by/category/directives"},next:{title:"beta",permalink:"/examples/group-by/common/directives/beta"}},l={},d=()=>{const e={span:"span",...(0,n.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,n.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const t={span:"span",...(0,n.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code>requires</code><Bullet></Bullet><code>Roles</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"requiresroles--",level:4}],h=({dataOpen:e,dataClose:t,children:r,startOpen:a=!1})=>{const c={details:"details",summary:"summary",...(0,n.R)()},[i,l]=(0,o.useState)(a);return(0,s.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&r]})};function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Example of custom directive for ",(0,s.jsx)(t.code,{children:"customDirective"})," descriptor."]}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"https://graphql-markdown.dev/docs/settings#customdirective",children:"documentation"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"directive @auth(\n  requires: Roles = ADMIN\n) on \r\n  | OBJECT\r\n  | FIELD_DEFINITION\n"})}),"\n",(0,s.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(t.h4,{id:"requiresroles--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsx)(t.code,{children:"requires"})}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/examples/group-by/common/enums/roles",children:(0,s.jsx)(t.code,{children:"Roles"})})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"enum"})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["User role required for access. Default to ",(0,s.jsx)(t.code,{children:"ADMIN"}),"."]}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>c});var s=r(96540);const n={},o=s.createContext(n);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);