"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["3595"],{59006:function(e,n,a){a.r(n),a.d(n,{Bullet:()=>o,SpecifiedBy:()=>g,Badge:()=>h,default:()=>b,frontMatter:()=>r,metadata:()=>s,Details:()=>p,assets:()=>c,toc:()=>u,contentTitle:()=>l});var s=JSON.parse('{"id":"grade/queries/weighted-gpa","title":"WeightedGPA","description":"No description","source":"@site/examples/group-by/grade/queries/weighted-gpa.mdx","sourceDirName":"grade/queries","slug":"/grade/queries/weighted-gpa","permalink":"/examples/group-by/grade/queries/weighted-gpa","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"weighted-gpa","title":"WeightedGPA"},"sidebar":"defaultSidebar","previous":{"title":"UnWeightedGPA","permalink":"/examples/group-by/grade/queries/un-weighted-gpa"},"next":{"title":"Schema Documentation","permalink":"/examples/group-by/"}}'),t=a("85893"),d=a("50065"),i=a("67294");let r={id:"weighted-gpa",title:"WeightedGPA"},l=void 0,c={},o=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25CF\xa0"})}),g=e=>(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:e.class,children:e.text})}),p=({dataOpen:e,dataClose:n,children:a,startOpen:s=!1})=>{let[d,r]=(0,i.useState)(s);return(0,t.jsxs)("details",{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)("summary",{onClick:e=>{e.preventDefault(),r(e=>!e)},style:{listStyle:"none"},children:d?e:n}),d&&a]})},u=[{value:"Directives",id:"directives",level:3},{value:"<code><b>complexity</b></code>",id:"complexity",level:4},{value:"Arguments",id:"arguments",level:3},{value:'<code>WeightedGPA.<b>input</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary "></Badge> <Badge class="badge badge--secondary "></Badge>',id:"weightedgpainputstring--",level:4},{value:'<code>WeightedGPA.<b>skip</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary badge--non_null"></Badge> <Badge class="badge badge--secondary "></Badge> <Badge class="badge badge--secondary "></Badge>',id:"weightedgpaskipint---",level:4},{value:"Type",id:"type",level:3},{value:'<code><b>Int</b></code> <Badge class="badge badge--secondary "></Badge> <Badge class="badge badge--secondary "></Badge>',id:"int--",level:4}];function x(e){let n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h,{class:"badge badge--secondary badge--badge--secondary",text:"@complexity"}),"\n",(0,t.jsx)(n.p,{children:"No description"}),"\n",(0,t.jsxs)(n.p,{children:["This has an additional cost of ",(0,t.jsx)(n.code,{children:"3"})," points."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"WeightedGPA(\n  input: String\n  skip: Int!\n): Int\n"})}),"\n",(0,t.jsx)(n.h3,{id:"directives",children:"Directives"}),"\n",(0,t.jsx)(n.h4,{id:"complexity",children:(0,t.jsx)(n.a,{href:"/examples/group-by/common/directives/complexity",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"complexity"})})})}),"\n",(0,t.jsxs)(n.p,{children:["This has an additional cost of ",(0,t.jsx)(n.code,{children:"3"})," points."]}),"\n",(0,t.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(n.h4,{id:"weightedgpainputstring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["WeightedGPA.",(0,t.jsx)("b",{children:"input"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/examples/group-by/common/scalars/string",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"String"})})})," ",(0,t.jsx)(h,{class:"badge badge--secondary ",text:"scalar"})," ",(0,t.jsx)(h,{class:"badge badge--secondary ",text:"common"})]}),"\n",(0,t.jsxs)(n.h4,{id:"weightedgpaskipint---",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["WeightedGPA.",(0,t.jsx)("b",{children:"skip"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/examples/group-by/common/scalars/int",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"Int!"})})})," ",(0,t.jsx)(h,{class:"badge badge--secondary badge--non_null",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary ",text:"scalar"})," ",(0,t.jsx)(h,{class:"badge badge--secondary ",text:"common"})]}),"\n",(0,t.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,t.jsxs)(n.h4,{id:"int--",children:[(0,t.jsx)(n.a,{href:"/examples/group-by/common/scalars/int",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"Int"})})})," ",(0,t.jsx)(h,{class:"badge badge--secondary ",text:"scalar"})," ",(0,t.jsx)(h,{class:"badge badge--secondary ",text:"common"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Int"})," scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1."]})]})}function b(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return r},a:function(){return i}});var s=a(67294);let t={},d=s.createContext(t);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);