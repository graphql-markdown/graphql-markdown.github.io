"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[5162],{59477:(e,s,r)=>{r.r(s),r.d(s,{Badge:()=>p,Bullet:()=>i,Details:()=>m,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var n=r(74848),a=r(28453),t=r(96540);const o={id:"course",title:"Course"},c=void 0,l={id:"course/queries/course",title:"Course",description:"No description",source:"@site/examples/group-by/course/queries/course.mdx",sourceDirName:"course/queries",slug:"/course/queries/course",permalink:"/examples/group-by/course/queries/course",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"course",title:"Course"},sidebar:"defaultSidebar",previous:{title:"allCourses",permalink:"/examples/group-by/course/queries/all-courses"},next:{title:"Grade",permalink:"/examples/group-by/category/grade"}},d={},i=()=>{const e={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const s={a:"a",...(0,a.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const s={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:s,children:r,startOpen:o=!1})=>{const c={details:"details",summary:"summary",...(0,a.R)()},[l,d]=(0,t.useState)(o);return(0,n.jsxs)(c.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(c.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:l?e:s}),l&&r]})},g=[{value:"Arguments",id:"arguments",level:3},{value:'<code>skip</code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"skipint--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Course</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"course--",level:4},{value:"Example",id:"example",level:3}];function x(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"No description"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"Course(\n  skip: Int = 0\n): Course\n"})}),"\n",(0,n.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(s.h4,{id:"skipint--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsx)(s.code,{children:"skip"})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/examples/group-by/common/scalars/int",children:(0,n.jsx)(s.code,{children:"Int"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,n.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(s.h4,{id:"course--",children:[(0,n.jsx)(s.a,{href:"/examples/group-by/common/objects/course",children:(0,n.jsx)(s.code,{children:"Course"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,n.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"{\n  Course(skip: 1) {\n    id\n    title\n  }\n}\n"})})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>c});var n=r(96540);const a={},t=n.createContext(a);function o(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);