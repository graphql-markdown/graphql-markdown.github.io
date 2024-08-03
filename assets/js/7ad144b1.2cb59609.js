"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6037],{50615:(e,s,r)=>{r.r(s),r.d(s,{Badge:()=>p,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var n=r(74848),t=r(28453),a=r(96540);const o={id:"drop-course",title:"DropCourse"},c=void 0,d={id:"course/mutations/drop-course",title:"DropCourse",description:"No description",source:"@site/examples/group-by/course/mutations/drop-course.mdx",sourceDirName:"course/mutations",slug:"/course/mutations/drop-course",permalink:"/examples/group-by/course/mutations/drop-course",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"drop-course",title:"DropCourse"},sidebar:"schemaSidebar",previous:{title:"AddCourse",permalink:"/examples/group-by/course/mutations/add-course"},next:{title:"Queries",permalink:"/examples/group-by/category/queries-1"}},i={},l=()=>{const e={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const s={a:"a",...(0,t.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const s={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:s,children:r,startOpen:o=!1})=>{const c={details:"details",summary:"summary",...(0,t.R)()},[d,i]=(0,a.useState)(o);return(0,n.jsxs)(c.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(c.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:d?e:s}),d&&r]})},m=[{value:"Directives",id:"directives",level:3},{value:"<code>auth</code>",id:"auth",level:4},{value:"Arguments",id:"arguments",level:3},{value:'<code>input</code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inputstring--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Course</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"course--",level:4}];function g(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,{class:"badge badge--secondary",text:"@auth"}),"\n",(0,n.jsx)(s.p,{children:"No description"}),"\n",(0,n.jsxs)(s.p,{children:["This requires the current user to be in ",(0,n.jsx)(s.code,{children:"ADMIN"})," role."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"DropCourse(\n  input: String\n): Course\n"})}),"\n",(0,n.jsx)(s.h3,{id:"directives",children:"Directives"}),"\n",(0,n.jsx)(s.h4,{id:"auth",children:(0,n.jsx)(s.a,{href:"/examples/group-by/common/directives/auth",children:(0,n.jsx)(s.code,{children:"auth"})})}),"\n",(0,n.jsxs)(s.p,{children:["This requires the current user to be in ",(0,n.jsx)(s.code,{children:"ADMIN"})," role."]}),"\n",(0,n.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(s.h4,{id:"inputstring--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsx)(s.code,{children:"input"})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"/examples/group-by/common/scalars/string",children:(0,n.jsx)(s.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,n.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(s.h4,{id:"course--",children:[(0,n.jsx)(s.a,{href:"/examples/group-by/common/objects/course",children:(0,n.jsx)(s.code,{children:"Course"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"common"})]})]})}function x(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>c});var n=r(96540);const t={},a=n.createContext(t);function o(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);