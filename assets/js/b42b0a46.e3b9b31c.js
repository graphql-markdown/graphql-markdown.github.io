"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7868],{5877:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>u,Bullet:()=>o,Details:()=>m,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>x});var d=n(5893),t=n(1151),i=n(7294);const a={id:"review",title:"Review",hide_table_of_contents:!1},r=void 0,l={id:"queries/review",title:"Review",description:"Review query",source:"@site/examples/default/queries/review.mdx",sourceDirName:"queries",slug:"/queries/review",permalink:"/examples/default/queries/review",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"review",title:"Review",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Recommendation",permalink:"/examples/default/queries/recommendation"},next:{title:"SiteStatistics",permalink:"/examples/default/queries/site-statistics"}},c={},o=()=>{const e={span:"span",...(0,t.a)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,t.a)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const s={span:"span",...(0,t.a)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s.span,{className:e.class,children:e.text})})},x=[{value:"Arguments",id:"arguments",level:3},{value:'<code>Review.<b>id</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"reviewidint-",level:4},{value:'<code>Review.<b>mediaId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"reviewmediaidint-",level:4},{value:'<code>Review.<b>userId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"reviewuseridint-",level:4},{value:'<code>Review.<b>mediaType</b></code><Bullet></Bullet><code>MediaType</code> <Badge class="badge badge--secondary"></Badge>',id:"reviewmediatypemediatype-",level:4},{value:'<code>Review.<b>sort</b></code><Bullet></Bullet><code>[ReviewSort]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reviewsortreviewsort--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Review</code> <Badge class="badge badge--secondary"></Badge>',id:"review-",level:4}],m=({dataOpen:e,dataClose:s,children:n,startOpen:a=!1})=>{const r={details:"details",summary:"summary",...(0,t.a)()},[l,c]=(0,i.useState)(a);return(0,d.jsxs)(r.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(r.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:s}),l&&n]})};function j(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Head:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n,{children:[(0,d.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,d.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,d.jsx)(s.p,{children:"Review query"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-graphql",children:"Review(\n  id: Int\n  mediaId: Int\n  userId: Int\n  mediaType: MediaType\n  sort: [ReviewSort]\n): Review\n"})}),"\n",(0,d.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,d.jsxs)(s.h4,{id:"reviewidint-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"id"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/scalars/int",children:(0,d.jsx)(s.code,{children:"Int"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter by Review id"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"reviewmediaidint-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"mediaId"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/scalars/int",children:(0,d.jsx)(s.code,{children:"Int"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter by media id"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"reviewuseridint-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"userId"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/scalars/int",children:(0,d.jsx)(s.code,{children:"Int"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter by user id"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"reviewmediatypemediatype-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"mediaType"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/enums/media-type",children:(0,d.jsx)(s.code,{children:"MediaType"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter by media type"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"reviewsortreviewsort--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"sort"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/enums/review-sort",children:(0,d.jsx)(s.code,{children:"[ReviewSort]"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"The order the results will be returned in"}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,d.jsxs)(s.h4,{id:"review-",children:[(0,d.jsx)(s.a,{href:"/examples/default/objects/review",children:(0,d.jsx)(s.code,{children:"Review"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"A Review that features in an anime or manga"}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>a});var d=n(7294);const t={},i=d.createContext(t);function a(e){const s=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),d.createElement(i.Provider,{value:s},e.children)}}}]);