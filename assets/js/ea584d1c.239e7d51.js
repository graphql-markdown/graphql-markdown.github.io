"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9256],{93331:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>h,Bullet:()=>c,Details:()=>x,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var a=t(74848),r=t(28453),i=t(96540);const s={pagination_next:null,pagination_prev:null,id:"rate-review",title:"RateReview"},l=void 0,d={id:"api/mutations/rate-review",title:"RateReview",description:"Rate a review",source:"@site/examples/default/api/mutations/rate-review.mdx",sourceDirName:"api/mutations",slug:"/api/mutations/rate-review",permalink:"/examples/default/api/mutations/rate-review",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"rate-review",title:"RateReview"},sidebar:"schemaSidebar"},o={},c=()=>{const e={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,r.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code>RateReview.<b>reviewId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"ratereviewreviewidint-",level:4},{value:'<code>RateReview.<b>rating</b></code><Bullet></Bullet><code>ReviewRating</code> <Badge class="badge badge--secondary"></Badge>',id:"ratereviewratingreviewrating-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Review</code> <Badge class="badge badge--secondary"></Badge>',id:"review-",level:4}],x=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const l={details:"details",summary:"summary",...(0,r.R)()},[d,o]=(0,i.useState)(s);return(0,a.jsxs)(l.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(l.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&t]})};function v(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t,{children:[(0,a.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,a.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,a.jsx)(n.p,{children:"Rate a review"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"RateReview(\n  reviewId: Int\n  rating: ReviewRating\n): Review\n"})}),"\n",(0,a.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(n.h4,{id:"ratereviewreviewidint-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RateReview.",(0,a.jsx)("b",{children:"reviewId"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(n.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(n.code,{children:"Int"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"The id of the review to rate"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"ratereviewratingreviewrating-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RateReview.",(0,a.jsx)("b",{children:"rating"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(n.a,{href:"/examples/default/types/enums/review-rating",children:(0,a.jsx)(n.code,{children:"ReviewRating"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"The rating to apply to the review"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,a.jsxs)(n.h4,{id:"review-",children:[(0,a.jsx)(n.a,{href:"/examples/default/types/objects/review",children:(0,a.jsx)(n.code,{children:"Review"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"A Review that features in an anime or manga"}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(v,{...e})}):v(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var a=t(96540);const r={},i=a.createContext(r);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);