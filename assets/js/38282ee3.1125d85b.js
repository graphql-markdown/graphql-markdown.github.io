"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2571],{2350:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>u,Bullet:()=>o,Details:()=>p,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>t,metadata:()=>l,toc:()=>x});var d=s(74848),i=s(28453),a=s(96540);const t={pagination_next:null,pagination_prev:null,id:"review",title:"Review"},r=void 0,l={id:"api/queries/review",title:"Review",description:"Review query",source:"@site/examples/default/api/queries/review.mdx",sourceDirName:"api/queries",slug:"/api/queries/review",permalink:"/examples/default/api/queries/review",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"review",title:"Review"},sidebar:"schemaSidebar"},c={},o=()=>{const e={span:"span",...(0,i.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,i.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,i.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(n.span,{className:e.class,children:e.text})})},x=[{value:"Arguments",id:"arguments",level:3},{value:'<code>Review.<b>id</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"reviewidint-",level:4},{value:'<code>Review.<b>mediaId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"reviewmediaidint-",level:4},{value:'<code>Review.<b>userId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"reviewuseridint-",level:4},{value:'<code>Review.<b>mediaType</b></code><Bullet></Bullet><code>MediaType</code> <Badge class="badge badge--secondary"></Badge>',id:"reviewmediatypemediatype-",level:4},{value:'<code>Review.<b>sort</b></code><Bullet></Bullet><code>[ReviewSort]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reviewsortreviewsort--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Review</code> <Badge class="badge badge--secondary"></Badge>',id:"review-",level:4}],p=({dataOpen:e,dataClose:n,children:s,startOpen:t=!1})=>{const r={details:"details",summary:"summary",...(0,i.R)()},[l,c]=(0,a.useState)(t);return(0,d.jsxs)(r.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(r.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&s]})};function j(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s,{children:[(0,d.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,d.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,d.jsx)(n.p,{children:"Review query"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-graphql",children:"Review(\n  id: Int\n  mediaId: Int\n  userId: Int\n  mediaType: MediaType\n  sort: [ReviewSort]\n): Review\n"})}),"\n",(0,d.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,d.jsxs)(n.h4,{id:"reviewidint-",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"id"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(n.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(n.code,{children:"Int"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Filter by Review id"}),"\n"]}),"\n",(0,d.jsxs)(n.h4,{id:"reviewmediaidint-",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"mediaId"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(n.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(n.code,{children:"Int"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Filter by media id"}),"\n"]}),"\n",(0,d.jsxs)(n.h4,{id:"reviewuseridint-",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"userId"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(n.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(n.code,{children:"Int"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Filter by user id"}),"\n"]}),"\n",(0,d.jsxs)(n.h4,{id:"reviewmediatypemediatype-",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"mediaType"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(n.a,{href:"/examples/default/types/enums/media-type",children:(0,d.jsx)(n.code,{children:"MediaType"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Filter by media type"}),"\n"]}),"\n",(0,d.jsxs)(n.h4,{id:"reviewsortreviewsort--",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"sort"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(n.a,{href:"/examples/default/types/enums/review-sort",children:(0,d.jsx)(n.code,{children:"[ReviewSort]"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"The order the results will be returned in"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,d.jsxs)(n.h4,{id:"review-",children:[(0,d.jsx)(n.a,{href:"/examples/default/types/objects/review",children:(0,d.jsx)(n.code,{children:"Review"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"A Review that features in an anime or manga"}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>r});var d=s(96540);const i={},a=d.createContext(i);function t(e){const n=d.useContext(a);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),d.createElement(a.Provider,{value:n},e.children)}}}]);