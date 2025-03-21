"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["3969"],{56824:function(e,n,a){a.r(n),a.d(n,{Bullet:()=>l,SpecifiedBy:()=>m,Badge:()=>h,default:()=>g,frontMatter:()=>i,metadata:()=>d,Details:()=>x,assets:()=>c,toc:()=>b,contentTitle:()=>r});var d=JSON.parse('{"id":"types/objects/recommendation","title":"Recommendation","description":"Media recommendation","source":"@site/examples/default/types/objects/recommendation.mdx","sourceDirName":"types/objects","slug":"/types/objects/recommendation","permalink":"/examples/default/types/objects/recommendation","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"recommendation","title":"Recommendation"},"sidebar":"defaultSidebar","previous":{"title":"RecommendationEdge","permalink":"/examples/default/types/objects/recommendation-edge"},"next":{"title":"RelatedMediaAdditionNotification","permalink":"/examples/default/types/objects/related-media-addition-notification"}}'),t=a("85893"),o=a("50065"),s=a("67294");let i={id:"recommendation",title:"Recommendation"},r=void 0,c={},l=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25CF\xa0"})}),m=e=>(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:e.class,children:e.text})}),x=({dataOpen:e,dataClose:n,children:a,startOpen:d=!1})=>{let[o,i]=(0,s.useState)(d);return(0,t.jsxs)("details",{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)("summary",{onClick:e=>{e.preventDefault(),i(e=>!e)},style:{listStyle:"none"},children:o?e:n}),o&&a]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>Recommendation.<b>id</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary badge--non_null"></Badge> <Badge class="badge badge--secondary "></Badge>',id:"recommendationidint--",level:4},{value:'<code>Recommendation.<b>rating</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary "></Badge>',id:"recommendationratingint-",level:4},{value:'<code>Recommendation.<b>userRating</b></code><Bullet></Bullet><code><b>RecommendationRating</b></code> <Badge class="badge badge--secondary "></Badge>',id:"recommendationuserratingrecommendationrating-",level:4},{value:'<code>Recommendation.<b>media</b></code><Bullet></Bullet><code><b>Media</b></code> <Badge class="badge badge--secondary "></Badge>',id:"recommendationmediamedia-",level:4},{value:'<code>Recommendation.<b>mediaRecommendation</b></code><Bullet></Bullet><code><b>Media</b></code> <Badge class="badge badge--secondary "></Badge>',id:"recommendationmediarecommendationmedia-",level:4},{value:'<code>Recommendation.<b>user</b></code><Bullet></Bullet><code><b>User</b></code> <Badge class="badge badge--secondary "></Badge>',id:"recommendationuseruser-",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}];function j(e){let n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Head:a}=n;return a||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,t.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,t.jsx)(n.p,{children:"Media recommendation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type Recommendation {\n  id: Int!\n  rating: Int\n  userRating: RecommendationRating\n  media: Media\n  mediaRecommendation: Media\n  user: User\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"recommendationidint--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Recommendation.",(0,t.jsx)("b",{children:"id"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"Int!"})})})," ",(0,t.jsx)(h,{class:"badge badge--secondary badge--non_null",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,t.jsx)(n.p,{children:"The id of the recommendation"}),"\n",(0,t.jsxs)(n.h4,{id:"recommendationratingint-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Recommendation.",(0,t.jsx)("b",{children:"rating"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"Int"})})})," ",(0,t.jsx)(h,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,t.jsx)(n.p,{children:"Users rating of the recommendation"}),"\n",(0,t.jsxs)(n.h4,{id:"recommendationuserratingrecommendationrating-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Recommendation.",(0,t.jsx)("b",{children:"userRating"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/examples/default/types/enums/recommendation-rating",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"RecommendationRating"})})})," ",(0,t.jsx)(h,{class:"badge badge--secondary ",text:"enum"})]}),"\n",(0,t.jsx)(n.p,{children:"The rating of the recommendation by currently authenticated user"}),"\n",(0,t.jsxs)(n.h4,{id:"recommendationmediamedia-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Recommendation.",(0,t.jsx)("b",{children:"media"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/examples/default/types/objects/media",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"Media"})})})," ",(0,t.jsx)(h,{class:"badge badge--secondary ",text:"object"})]}),"\n",(0,t.jsx)(n.p,{children:"The media the recommendation is from"}),"\n",(0,t.jsxs)(n.h4,{id:"recommendationmediarecommendationmedia-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Recommendation.",(0,t.jsx)("b",{children:"mediaRecommendation"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/examples/default/types/objects/media",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"Media"})})})," ",(0,t.jsx)(h,{class:"badge badge--secondary ",text:"object"})]}),"\n",(0,t.jsx)(n.p,{children:"The recommended media"}),"\n",(0,t.jsxs)(n.h4,{id:"recommendationuseruser-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Recommendation.",(0,t.jsx)("b",{children:"user"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/examples/default/types/objects/user",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"User"})})})," ",(0,t.jsx)(h,{class:"badge badge--secondary ",text:"object"})]}),"\n",(0,t.jsx)(n.p,{children:"The user that first created the recommendation"}),"\n",(0,t.jsx)(n.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/examples/default/operations/queries/recommendation",children:(0,t.jsx)(n.code,{children:"Recommendation"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary badge--relation",text:"query"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/examples/default/operations/mutations/save-recommendation",children:(0,t.jsx)(n.code,{children:"SaveRecommendation"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary badge--relation",text:"mutation"})]}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/examples/default/types/objects/internal-page",children:(0,t.jsx)(n.code,{children:"InternalPage"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary badge--relation",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/examples/default/types/objects/page",children:(0,t.jsx)(n.code,{children:"Page"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary badge--relation",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/examples/default/types/objects/recommendation-connection",children:(0,t.jsx)(n.code,{children:"RecommendationConnection"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary badge--relation",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/examples/default/types/objects/recommendation-edge",children:(0,t.jsx)(n.code,{children:"RecommendationEdge"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary badge--relation",text:"object"})]})]})}function g(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return s}});var d=a(67294);let t={},o=d.createContext(t);function s(e){let n=d.useContext(o);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);