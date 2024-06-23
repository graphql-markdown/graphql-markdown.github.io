"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[5489],{59763:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>h,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>m,assets:()=>r,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>x});var t=a(74848),o=a(28453),d=a(96540);const i={pagination_next:null,pagination_prev:null,id:"save-recommendation",title:"SaveRecommendation"},s=void 0,c={id:"api/mutations/save-recommendation",title:"SaveRecommendation",description:"Recommendation a media",source:"@site/examples/default/api/mutations/save-recommendation.mdx",sourceDirName:"api/mutations",slug:"/api/mutations/save-recommendation",permalink:"/examples/default/api/mutations/save-recommendation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"save-recommendation",title:"SaveRecommendation"},sidebar:"schemaSidebar"},r={},l=()=>{const e={span:"span",...(0,o.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const n={a:"a",...(0,o.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,o.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:n,children:a,startOpen:i=!1})=>{const s={details:"details",summary:"summary",...(0,o.R)()},[c,r]=(0,d.useState)(i);return(0,t.jsxs)(s.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(s.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&a]})},x=[{value:"Arguments",id:"arguments",level:3},{value:'<code>SaveRecommendation.<b>mediaId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"saverecommendationmediaidint-",level:4},{value:'<code>SaveRecommendation.<b>mediaRecommendationId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"saverecommendationmediarecommendationidint-",level:4},{value:'<code>SaveRecommendation.<b>rating</b></code><Bullet></Bullet><code>RecommendationRating</code> <Badge class="badge badge--secondary"></Badge>',id:"saverecommendationratingrecommendationrating-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Recommendation</code> <Badge class="badge badge--secondary"></Badge>',id:"recommendation-",level:4}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Head:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,t.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,t.jsx)(n.p,{children:"Recommendation a media"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"SaveRecommendation(\n  mediaId: Int\n  mediaRecommendationId: Int\n  rating: RecommendationRating\n): Recommendation\n"})}),"\n",(0,t.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(n.h4,{id:"saverecommendationmediaidint-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveRecommendation.",(0,t.jsx)("b",{children:"mediaId"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(n.code,{children:"Int"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"The id of the base media"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"saverecommendationmediarecommendationidint-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveRecommendation.",(0,t.jsx)("b",{children:"mediaRecommendationId"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(n.code,{children:"Int"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"The id of the media to recommend"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"saverecommendationratingrecommendationrating-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveRecommendation.",(0,t.jsx)("b",{children:"rating"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/examples/default/types/enums/recommendation-rating",children:(0,t.jsx)(n.code,{children:"RecommendationRating"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"The rating to give the recommendation"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,t.jsxs)(n.h4,{id:"recommendation-",children:[(0,t.jsx)(n.a,{href:"/examples/default/types/objects/recommendation",children:(0,t.jsx)(n.code,{children:"Recommendation"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Media recommendation"}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>s});var t=a(96540);const o={},d=t.createContext(o);function i(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);