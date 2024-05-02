"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[5497],{65090:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>h,Bullet:()=>o,Details:()=>u,SpecifiedBy:()=>f,assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>x});var t=a(74848),n=a(28453),d=a(96540);const l={pagination_next:null,pagination_prev:null,id:"staff",title:"Staff"},r=void 0,i={id:"api/queries/staff",title:"Staff",description:"Staff query",source:"@site/examples/default/api/queries/staff.mdx",sourceDirName:"api/queries",slug:"/api/queries/staff",permalink:"/examples/default/api/queries/staff",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"staff",title:"Staff"},sidebar:"schemaSidebar"},c={},o=()=>{const e={span:"span",...(0,n.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},f=e=>{const s={a:"a",...(0,n.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const s={span:"span",...(0,n.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.span,{className:e.class,children:e.text})})},x=[{value:"Arguments",id:"arguments",level:3},{value:'<code>Staff.<b>id</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"staffidint-",level:4},{value:'<code>Staff.<b>isBirthday</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"staffisbirthdayboolean-",level:4},{value:'<code>Staff.<b>search</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"staffsearchstring-",level:4},{value:'<code>Staff.<b>id_not</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"staffid_notint-",level:4},{value:'<code>Staff.<b>id_in</b></code><Bullet></Bullet><code>[Int]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"staffid_inint--",level:4},{value:'<code>Staff.<b>id_not_in</b></code><Bullet></Bullet><code>[Int]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"staffid_not_inint--",level:4},{value:'<code>Staff.<b>sort</b></code><Bullet></Bullet><code>[StaffSort]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"staffsortstaffsort--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Staff</code> <Badge class="badge badge--secondary"></Badge>',id:"staff-",level:4}],u=({dataOpen:e,dataClose:s,children:a,startOpen:l=!1})=>{const r={details:"details",summary:"summary",...(0,n.R)()},[i,c]=(0,d.useState)(l);return(0,t.jsxs)(r.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(r.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:s}),i&&a]})};function b(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Head:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,t.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,t.jsx)(s.p,{children:"Staff query"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"Staff(\n  id: Int\n  isBirthday: Boolean\n  search: String\n  id_not: Int\n  id_in: [Int]\n  id_not_in: [Int]\n  sort: [StaffSort]\n): Staff\n"})}),"\n",(0,t.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(s.h4,{id:"staffidint-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Staff.",(0,t.jsx)("b",{children:"id"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(s.code,{children:"Int"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Filter by the staff id"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"staffisbirthdayboolean-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Staff.",(0,t.jsx)("b",{children:"isBirthday"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,t.jsx)(s.code,{children:"Boolean"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Filter by staff by if its their birthday today"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"staffsearchstring-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Staff.",(0,t.jsx)("b",{children:"search"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/string",children:(0,t.jsx)(s.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Filter by search query"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"staffid_notint-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Staff.",(0,t.jsx)("b",{children:"id_not"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(s.code,{children:"Int"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Filter by the staff id"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"staffid_inint--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Staff.",(0,t.jsx)("b",{children:"id_in"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(s.code,{children:"[Int]"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Filter by the staff id"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"staffid_not_inint--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Staff.",(0,t.jsx)("b",{children:"id_not_in"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(s.code,{children:"[Int]"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Filter by the staff id"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"staffsortstaffsort--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Staff.",(0,t.jsx)("b",{children:"sort"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/enums/staff-sort",children:(0,t.jsx)(s.code,{children:"[StaffSort]"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"The order the results will be returned in"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,t.jsxs)(s.h4,{id:"staff-",children:[(0,t.jsx)(s.a,{href:"/examples/default/types/objects/staff",children:(0,t.jsx)(s.code,{children:"Staff"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Voice actors or production staff"}),"\n"]})]})}function g(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},28453:(e,s,a)=>{a.d(s,{R:()=>l,x:()=>r});var t=a(96540);const n={},d=t.createContext(n);function l(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);