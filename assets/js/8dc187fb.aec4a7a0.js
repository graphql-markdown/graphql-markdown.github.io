"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[8776],{8514:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>x,Bullet:()=>l,Details:()=>j,SpecifiedBy:()=>m,assets:()=>r,contentTitle:()=>c,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var d=a(5893),t=a(1151),s=a(7294);const o={pagination_next:null,pagination_prev:null,id:"recommendation",title:"Recommendation"},c=void 0,i={id:"types/objects/recommendation",title:"Recommendation",description:"Media recommendation",source:"@site/examples/default/types/objects/recommendation.mdx",sourceDirName:"types/objects",slug:"/types/objects/recommendation",permalink:"/examples/default/types/objects/recommendation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"recommendation",title:"Recommendation"},sidebar:"schemaSidebar"},r={},l=()=>{const e={span:"span",...(0,t.a)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const n={a:"a",...(0,t.a)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const n={span:"span",...(0,t.a)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(n.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>Recommendation.<b>id</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"recommendationidint--",level:4},{value:'<code>Recommendation.<b>rating</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"recommendationratingint-",level:4},{value:'<code>Recommendation.<b>userRating</b></code><Bullet></Bullet><code>RecommendationRating</code> <Badge class="badge badge--secondary"></Badge>',id:"recommendationuserratingrecommendationrating-",level:4},{value:'<code>Recommendation.<b>media</b></code><Bullet></Bullet><code>Media</code> <Badge class="badge badge--secondary"></Badge>',id:"recommendationmediamedia-",level:4},{value:'<code>Recommendation.<b>mediaRecommendation</b></code><Bullet></Bullet><code>Media</code> <Badge class="badge badge--secondary"></Badge>',id:"recommendationmediarecommendationmedia-",level:4},{value:'<code>Recommendation.<b>user</b></code><Bullet></Bullet><code>User</code> <Badge class="badge badge--secondary"></Badge>',id:"recommendationuseruser-",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}],j=({dataOpen:e,dataClose:n,children:a,startOpen:o=!1})=>{const c={details:"details",summary:"summary",...(0,t.a)()},[i,r]=(0,s.useState)(o);return(0,d.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(c.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&a]})};function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Head:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(a,{children:[(0,d.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,d.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,d.jsx)(n.p,{children:"Media recommendation"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-graphql",children:"type Recommendation {\n  id: Int!\n  rating: Int\n  userRating: RecommendationRating\n  media: Media\n  mediaRecommendation: Media\n  user: User\n}\n"})}),"\n",(0,d.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(n.h4,{id:"recommendationidint--",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Recommendation.",(0,d.jsx)("b",{children:"id"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(n.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(n.code,{children:"Int!"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"The id of the recommendation"}),"\n"]}),"\n",(0,d.jsxs)(n.h4,{id:"recommendationratingint-",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Recommendation.",(0,d.jsx)("b",{children:"rating"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(n.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(n.code,{children:"Int"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Users rating of the recommendation"}),"\n"]}),"\n",(0,d.jsxs)(n.h4,{id:"recommendationuserratingrecommendationrating-",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Recommendation.",(0,d.jsx)("b",{children:"userRating"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(n.a,{href:"/examples/default/types/enums/recommendation-rating",children:(0,d.jsx)(n.code,{children:"RecommendationRating"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"The rating of the recommendation by currently authenticated user"}),"\n"]}),"\n",(0,d.jsxs)(n.h4,{id:"recommendationmediamedia-",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Recommendation.",(0,d.jsx)("b",{children:"media"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(n.a,{href:"/examples/default/types/objects/media",children:(0,d.jsx)(n.code,{children:"Media"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"The media the recommendation is from"}),"\n"]}),"\n",(0,d.jsxs)(n.h4,{id:"recommendationmediarecommendationmedia-",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Recommendation.",(0,d.jsx)("b",{children:"mediaRecommendation"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(n.a,{href:"/examples/default/types/objects/media",children:(0,d.jsx)(n.code,{children:"Media"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"The recommended media"}),"\n"]}),"\n",(0,d.jsxs)(n.h4,{id:"recommendationuseruser-",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Recommendation.",(0,d.jsx)("b",{children:"user"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(n.a,{href:"/examples/default/types/objects/user",children:(0,d.jsx)(n.code,{children:"User"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"The user that first created the recommendation"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/examples/default/api/queries/recommendation",children:(0,d.jsx)(n.code,{children:"Recommendation"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"query"}),(0,d.jsx)(l,{}),(0,d.jsx)(n.a,{href:"/examples/default/api/mutations/save-recommendation",children:(0,d.jsx)(n.code,{children:"SaveRecommendation"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"mutation"})]}),"\n",(0,d.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/examples/default/types/objects/internal-page",children:(0,d.jsx)(n.code,{children:"InternalPage"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(l,{}),(0,d.jsx)(n.a,{href:"/examples/default/types/objects/page",children:(0,d.jsx)(n.code,{children:"Page"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(l,{}),(0,d.jsx)(n.a,{href:"/examples/default/types/objects/recommendation-connection",children:(0,d.jsx)(n.code,{children:"RecommendationConnection"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(l,{}),(0,d.jsx)(n.a,{href:"/examples/default/types/objects/recommendation-edge",children:(0,d.jsx)(n.code,{children:"RecommendationEdge"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(u,{...e})}):u(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>o});var d=a(7294);const t={},s=d.createContext(t);function o(e){const n=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);