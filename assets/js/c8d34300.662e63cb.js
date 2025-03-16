"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["9239"],{48831:function(e,s,r){r.r(s),r.d(s,{Bullet:()=>i,SpecifiedBy:()=>u,Badge:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>n,Details:()=>g,assets:()=>d,toc:()=>m,contentTitle:()=>c});var n=JSON.parse('{"id":"course/queries/course","title":"Course","description":"No description","source":"@site/examples/group-by/course/queries/course.mdx","sourceDirName":"course/queries","slug":"/course/queries/course","permalink":"/examples/group-by/course/queries/course","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"course","title":"Course"},"sidebar":"defaultSidebar","previous":{"title":"allCourses","permalink":"/examples/group-by/course/queries/all-courses"},"next":{"title":"Grade","permalink":"/examples/group-by/category/grade"}}'),a=r("85893"),t=r("50065"),l=r("67294");let o={id:"course",title:"Course"},c=void 0,d={},i=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25CF\xa0"})}),u=e=>(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:e.class,children:e.text})}),g=({dataOpen:e,dataClose:s,children:r,startOpen:n=!1})=>{let[t,o]=(0,l.useState)(n);return(0,a.jsxs)("details",{...t?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)("summary",{onClick:e=>{e.preventDefault(),o(e=>!e)},style:{listStyle:"none"},children:t?e:s}),t&&r]})},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code>Course.<b>skip</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"courseskipint--",level:4},{value:"Type",id:"type",level:3},{value:'<code><b>Course</b></code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"course--",level:4},{value:"Example",id:"example",level:3}];function x(e){let s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"No description"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"Course(\n  skip: Int = 0\n): Course\n"})}),"\n",(0,a.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(s.h4,{id:"courseskipint--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Course.",(0,a.jsx)("b",{children:"skip"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/examples/group-by/common/scalars/int",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"Int"})})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,a.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,a.jsxs)(s.h4,{id:"course--",children:[(0,a.jsx)(s.a,{href:"/examples/group-by/common/objects/course",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"Course"})})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,a.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"{\n  Course(skip: 1) {\n    id\n    title\n  }\n}\n"})})]})}function h(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},50065:function(e,s,r){r.d(s,{Z:function(){return o},a:function(){return l}});var n=r(67294);let a={},t=n.createContext(a);function l(e){let s=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);