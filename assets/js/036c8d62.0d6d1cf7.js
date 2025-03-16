"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["9014"],{72953:function(e,t,r){r.r(t),r.d(t,{Bullet:()=>o,SpecifiedBy:()=>u,Badge:()=>g,default:()=>m,frontMatter:()=>i,metadata:()=>a,Details:()=>p,assets:()=>c,toc:()=>h,contentTitle:()=>l});var a=JSON.parse('{"id":"grade/mutations/update-grade","title":"UpdateGrade","description":"No description","source":"@site/examples/group-by/grade/mutations/update-grade.mdx","sourceDirName":"grade/mutations","slug":"/grade/mutations/update-grade","permalink":"/examples/group-by/grade/mutations/update-grade","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"update-grade","title":"UpdateGrade"},"sidebar":"defaultSidebar","previous":{"title":"UpdateGPA","permalink":"/examples/group-by/grade/mutations/update-gpa"},"next":{"title":"Queries","permalink":"/examples/group-by/category/queries-2"}}'),n=r("85893"),s=r("50065"),d=r("67294");let i={id:"update-grade",title:"UpdateGrade"},l=void 0,c={},o=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25CF\xa0"})}),u=e=>(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),g=e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:e.class,children:e.text})}),p=({dataOpen:e,dataClose:t,children:r,startOpen:a=!1})=>{let[s,i]=(0,d.useState)(a);return(0,n.jsxs)("details",{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)("summary",{onClick:e=>{e.preventDefault(),i(e=>!e)},style:{listStyle:"none"},children:s?e:t}),s&&r]})},h=[{value:"Directives",id:"directives",level:3},{value:"<code><b>auth</b></code>",id:"auth",level:4},{value:"Arguments",id:"arguments",level:3},{value:'<code>UpdateGrade.<b>input</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updategradeinputstring--",level:4},{value:"Type",id:"type",level:3},{value:'<code><b>String</b></code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"string--",level:4}];function x(e){let t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g,{class:"badge badge--secondary",text:"@auth"}),"\n",(0,n.jsx)(t.p,{children:"No description"}),"\n",(0,n.jsxs)(t.p,{children:["This requires the current user to be in ",(0,n.jsx)(t.code,{children:"ADMIN"})," role."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"UpdateGrade(\n  input: String\n): String\n"})}),"\n",(0,n.jsx)(t.h3,{id:"directives",children:"Directives"}),"\n",(0,n.jsx)(t.h4,{id:"auth",children:(0,n.jsx)(t.a,{href:"/examples/group-by/common/directives/auth",children:(0,n.jsx)("code",{style:{fontWeight:"normal"},children:(0,n.jsx)("b",{children:"auth"})})})}),"\n",(0,n.jsxs)(t.p,{children:["This requires the current user to be in ",(0,n.jsx)(t.code,{children:"ADMIN"})," role."]}),"\n",(0,n.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(t.h4,{id:"updategradeinputstring--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateGrade.",(0,n.jsx)("b",{children:"input"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/examples/group-by/common/scalars/string",children:(0,n.jsx)("code",{style:{fontWeight:"normal"},children:(0,n.jsx)("b",{children:"String"})})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,n.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(t.h4,{id:"string--",children:[(0,n.jsx)(t.a,{href:"/examples/group-by/common/scalars/string",children:(0,n.jsx)("code",{style:{fontWeight:"normal"},children:(0,n.jsx)("b",{children:"String"})})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"String"})," scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text."]})]})}function m(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return i},a:function(){return d}});var a=r(67294);let n={},s=a.createContext(n);function d(e){let t=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);