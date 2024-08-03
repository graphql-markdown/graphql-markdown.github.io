"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[8466],{85498:(e,d,s)=>{s.r(d),s.d(d,{Badge:()=>h,Bullet:()=>c,Details:()=>x,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>g});var t=s(74848),n=s(28453),i=s(96540);const a={pagination_next:null,pagination_prev:null,id:"studio",title:"Studio"},o=void 0,r={id:"operations/queries/studio",title:"Studio",description:"Studio query",source:"@site/examples/default/operations/queries/studio.mdx",sourceDirName:"operations/queries",slug:"/operations/queries/studio",permalink:"/examples/default/operations/queries/studio",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"studio",title:"Studio"},sidebar:"defaultSidebar"},l={},c=()=>{const e={span:"span",...(0,n.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const d={a:"a",...(0,n.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(d.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const d={span:"span",...(0,n.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(d.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:d,children:s,startOpen:a=!1})=>{const o={details:"details",summary:"summary",...(0,n.R)()},[r,l]=(0,i.useState)(a);return(0,t.jsxs)(o.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(o.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:r?e:d}),r&&s]})},g=[{value:"Arguments",id:"arguments",level:3},{value:'<code>Studio.<b>id</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"studioidint-",level:4},{value:'<code>Studio.<b>search</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"studiosearchstring-",level:4},{value:'<code>Studio.<b>id_not</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"studioid_notint-",level:4},{value:'<code>Studio.<b>id_in</b></code><Bullet></Bullet><code>[Int]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"studioid_inint--",level:4},{value:'<code>Studio.<b>id_not_in</b></code><Bullet></Bullet><code>[Int]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"studioid_not_inint--",level:4},{value:'<code>Studio.<b>sort</b></code><Bullet></Bullet><code>[StudioSort]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"studiosortstudiosort--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Studio</code> <Badge class="badge badge--secondary"></Badge>',id:"studio-",level:4}];function j(e){const d={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Head:s}=d;return s||function(e,d){throw new Error("Expected "+(d?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s,{children:[(0,t.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,t.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,t.jsx)(d.p,{children:"Studio query"}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-graphql",children:"Studio(\n  id: Int\n  search: String\n  id_not: Int\n  id_in: [Int]\n  id_not_in: [Int]\n  sort: [StudioSort]\n): Studio\n"})}),"\n",(0,t.jsx)(d.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(d.h4,{id:"studioidint-",children:[(0,t.jsx)(d.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Studio.",(0,t.jsx)("b",{children:"id"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(d.code,{children:"Int"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(d.p,{children:"Filter by the studio id"}),"\n",(0,t.jsxs)(d.h4,{id:"studiosearchstring-",children:[(0,t.jsx)(d.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Studio.",(0,t.jsx)("b",{children:"search"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(d.a,{href:"/examples/default/types/scalars/string",children:(0,t.jsx)(d.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(d.p,{children:"Filter by search query"}),"\n",(0,t.jsxs)(d.h4,{id:"studioid_notint-",children:[(0,t.jsx)(d.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Studio.",(0,t.jsx)("b",{children:"id_not"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(d.code,{children:"Int"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(d.p,{children:"Filter by the studio id"}),"\n",(0,t.jsxs)(d.h4,{id:"studioid_inint--",children:[(0,t.jsx)(d.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Studio.",(0,t.jsx)("b",{children:"id_in"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(d.code,{children:"[Int]"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(d.p,{children:"Filter by the studio id"}),"\n",(0,t.jsxs)(d.h4,{id:"studioid_not_inint--",children:[(0,t.jsx)(d.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Studio.",(0,t.jsx)("b",{children:"id_not_in"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(d.code,{children:"[Int]"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(d.p,{children:"Filter by the studio id"}),"\n",(0,t.jsxs)(d.h4,{id:"studiosortstudiosort--",children:[(0,t.jsx)(d.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Studio.",(0,t.jsx)("b",{children:"sort"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(d.a,{href:"/examples/default/types/enums/studio-sort",children:(0,t.jsx)(d.code,{children:"[StudioSort]"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsx)(d.p,{children:"The order the results will be returned in"}),"\n",(0,t.jsx)(d.h3,{id:"type",children:"Type"}),"\n",(0,t.jsxs)(d.h4,{id:"studio-",children:[(0,t.jsx)(d.a,{href:"/examples/default/types/objects/studio",children:(0,t.jsx)(d.code,{children:"Studio"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(d.p,{children:"Animation or production company"})]})}function p(e={}){const{wrapper:d}={...(0,n.R)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},28453:(e,d,s)=>{s.d(d,{R:()=>a,x:()=>o});var t=s(96540);const n={},i=t.createContext(n);function a(e){const d=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function o(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(i.Provider,{value:d},e.children)}}}]);