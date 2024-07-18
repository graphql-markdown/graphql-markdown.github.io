"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[5526],{79732:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>x,Bullet:()=>i,Details:()=>m,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var d=s(74848),n=s(28453),c=s(96540);const r={id:"semester",title:"Semester"},t=void 0,o={id:"common/objects/semester",title:"Semester",description:"No description",source:"@site/examples/group-by/common/objects/semester.mdx",sourceDirName:"common/objects",slug:"/common/objects/semester",permalink:"/examples/group-by/common/objects/semester",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"semester",title:"Semester"},sidebar:"schemaSidebar",previous:{title:"DepartmentInformation",permalink:"/examples/group-by/common/objects/department-information"},next:{title:"Queries",permalink:"/examples/group-by/category/queries"}},l={},i=()=>{const e={span:"span",...(0,n.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,n.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const a={span:"span",...(0,n.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:a,children:s,startOpen:r=!1})=>{const t={details:"details",summary:"summary",...(0,n.R)()},[o,l]=(0,c.useState)(r);return(0,d.jsxs)(t.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(t.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:a}),o&&s]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>id</code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"idid---",level:4},{value:'<code>startDate</code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"startdatedate--",level:4},{value:'<code>endDate</code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"enddatedate--",level:4},{value:'<code>courses</code><Bullet></Bullet><code>[Course!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"coursescourse-----",level:4},{value:'<code>withdrawDate</code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"withdrawdatedate---",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Record</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"record--",level:4},{value:"Example",id:"example",level:3}];function b(e){const a={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",span:"span",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.p,{children:"No description"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-graphql",children:"type Semester implements Record {\n  id: ID!\n  startDate: Date\n  withdrawDate: Date @deprecated\n  endDate: Date\n  courses: [Course!]!\n}\n"})}),"\n",(0,d.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(a.h4,{id:"idid---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsx)(a.code,{children:"id"})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/examples/group-by/common/scalars/id",children:(0,d.jsx)(a.code,{children:"ID!"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,d.jsxs)(a.h4,{id:"startdatedate--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsx)(a.code,{children:"startDate"})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/examples/group-by/common/scalars/date",children:(0,d.jsx)(a.code,{children:"Date"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,d.jsxs)(a.h4,{id:"enddatedate--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsx)(a.code,{children:"endDate"})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/examples/group-by/common/scalars/date",children:(0,d.jsx)(a.code,{children:"Date"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,d.jsxs)(a.h4,{id:"coursescourse-----",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsx)(a.code,{children:"courses"})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/examples/group-by/common/objects/course",children:(0,d.jsx)(a.code,{children:"[Course!]!"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"object"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"common"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"@complexity"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"@auth"})]}),"\n",(0,d.jsx)(a.p,{children:"Courses for the semester."}),"\n",(0,d.jsxs)(a.p,{children:["This has an additional cost of ",(0,d.jsx)(a.code,{children:"2"})," points."]}),"\n",(0,d.jsxs)(a.p,{children:["This requires the current user to be in ",(0,d.jsx)(a.code,{children:"ADMIN"})," role."]}),"\n",(0,d.jsxs)(m,{dataOpen:(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.span,{className:"deprecated",children:"Hide deprecated"})}),dataClose:(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.span,{className:"deprecated",children:"Show deprecated"})}),children:[(0,d.jsxs)(a.h4,{id:"withdrawdatedate---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsx)(a.code,{children:"withdrawDate"})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/examples/group-by/common/scalars/date",children:(0,d.jsx)(a.code,{children:"Date"})})," ",(0,d.jsx)(x,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"common"})]}),(0,d.jsx)(a.admonition,{title:"DEPRECATED",type:"warning",children:(0,d.jsx)(a.p,{children:"No longer supported"})})]}),"\n",(0,d.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,d.jsxs)(a.h4,{id:"record--",children:[(0,d.jsx)(a.a,{href:"/examples/group-by/common/interfaces/record",children:(0,d.jsx)(a.code,{children:"Record"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"interface"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,d.jsx)(a.h3,{id:"example",children:"Example"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-graphql",children:'{\n  "id": 1,\n  "startDate": "1970-01-01",\n  "withdrawDate": "1970-01-01",\n  "endDate": "1970-01-01",\n  "courses": [\n    {\n      "id": 5,\n      "title": "GraphQL Markdown",\n      "updatedAt": "1970-01-01"\n    }\n  ]\n}\n'})})]})}function p(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(b,{...e})}):b(e)}},28453:(e,a,s)=>{s.d(a,{R:()=>r,x:()=>t});var d=s(96540);const n={},c=d.createContext(n);function r(e){const a=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),d.createElement(c.Provider,{value:a},e.children)}}}]);