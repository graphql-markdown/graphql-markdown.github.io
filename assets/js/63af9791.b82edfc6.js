"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["5299"],{48034:function(e,d,n){n.r(d),n.d(d,{default:()=>o,frontMatter:()=>m,metadata:()=>s,assets:()=>c,toc:()=>i,contentTitle:()=>t});var s=JSON.parse('{"id":"types/objects/recommendation","title":"recommendation","description":"Media recommendation","source":"@site/examples/default/types/objects/recommendation.md","sourceDirName":"types/objects","slug":"/types/objects/recommendation","permalink":"/examples/default/types/objects/recommendation","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"recommendation-edge","permalink":"/examples/default/types/objects/recommendation-edge"},"next":{"title":"related-media-addition-notification","permalink":"/examples/default/types/objects/related-media-addition-notification"}}'),a=n("85893"),l=n("50065");let m={},t=void 0,c={},i=[{value:"Fields",id:"fields",level:3},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Recommendation.</code><code class="gqlmd-mdx-entity-name">id</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span> <mark class="gqlmd-mdx-badge">non-null</mark> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"recommendationidint-non-null-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Recommendation.</code><code class="gqlmd-mdx-entity-name">rating</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"recommendationratingint-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Recommendation.</code><code class="gqlmd-mdx-entity-name">userRating</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">RecommendationRating</code></span> <mark class="gqlmd-mdx-badge">enum</mark>',id:"recommendationuserratingrecommendationrating-enum",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Recommendation.</code><code class="gqlmd-mdx-entity-name">media</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Media</code></span> <mark class="gqlmd-mdx-badge">object</mark>',id:"recommendationmediamedia-object",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Recommendation.</code><code class="gqlmd-mdx-entity-name">mediaRecommendation</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Media</code></span> <mark class="gqlmd-mdx-badge">object</mark>',id:"recommendationmediarecommendationmedia-object",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Recommendation.</code><code class="gqlmd-mdx-entity-name">user</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">User</code></span> <mark class="gqlmd-mdx-badge">object</mark>',id:"recommendationuseruser-object",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}];function r(e){let d={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...e.components},{Head:n}=d;return n||function(e,d){throw Error("Expected "+(d?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n,{children:[(0,a.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,a.jsx)("meta",{charset:"utf-8"})]}),"\n",(0,a.jsx)(d.p,{children:"Media recommendation"}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-graphql",children:"type Recommendation {\n  id: Int!\n  rating: Int\n  userRating: RecommendationRating\n  media: Media\n  mediaRecommendation: Media\n  user: User\n}\n"})}),"\n",(0,a.jsx)(d.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(d.h4,{id:"recommendationidint-non-null-scalar",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,a.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"Recommendation."}),(0,a.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"id"})]})}),(0,a.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,a.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,a.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Int!"})})})," ",(0,a.jsx)("mark",{class:"gqlmd-mdx-badge",children:"non-null"})," ",(0,a.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,a.jsx)(d.p,{children:"The id of the recommendation"}),"\n",(0,a.jsxs)(d.h4,{id:"recommendationratingint-scalar",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,a.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"Recommendation."}),(0,a.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"rating"})]})}),(0,a.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,a.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,a.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Int"})})})," ",(0,a.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,a.jsx)(d.p,{children:"Users rating of the recommendation"}),"\n",(0,a.jsxs)(d.h4,{id:"recommendationuserratingrecommendationrating-enum",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,a.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"Recommendation."}),(0,a.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"userRating"})]})}),(0,a.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,a.jsx)(d.a,{href:"/examples/default/types/enums/recommendation-rating",children:(0,a.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,a.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"RecommendationRating"})})})," ",(0,a.jsx)("mark",{class:"gqlmd-mdx-badge",children:"enum"})]}),"\n",(0,a.jsx)(d.p,{children:"The rating of the recommendation by currently authenticated user"}),"\n",(0,a.jsxs)(d.h4,{id:"recommendationmediamedia-object",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,a.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"Recommendation."}),(0,a.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"media"})]})}),(0,a.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,a.jsx)(d.a,{href:"/examples/default/types/objects/media",children:(0,a.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,a.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Media"})})})," ",(0,a.jsx)("mark",{class:"gqlmd-mdx-badge",children:"object"})]}),"\n",(0,a.jsx)(d.p,{children:"The media the recommendation is from"}),"\n",(0,a.jsxs)(d.h4,{id:"recommendationmediarecommendationmedia-object",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,a.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"Recommendation."}),(0,a.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"mediaRecommendation"})]})}),(0,a.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,a.jsx)(d.a,{href:"/examples/default/types/objects/media",children:(0,a.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,a.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Media"})})})," ",(0,a.jsx)("mark",{class:"gqlmd-mdx-badge",children:"object"})]}),"\n",(0,a.jsx)(d.p,{children:"The recommended media"}),"\n",(0,a.jsxs)(d.h4,{id:"recommendationuseruser-object",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,a.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"Recommendation."}),(0,a.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"user"})]})}),(0,a.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,a.jsx)(d.a,{href:"/examples/default/types/objects/user",children:(0,a.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,a.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"User"})})})," ",(0,a.jsx)("mark",{class:"gqlmd-mdx-badge",children:"object"})]}),"\n",(0,a.jsx)(d.p,{children:"The user that first created the recommendation"}),"\n",(0,a.jsx)(d.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,a.jsxs)(d.p,{children:[(0,a.jsx)(d.a,{href:"/examples/default/operations/queries/recommendation",children:(0,a.jsx)(d.code,{children:"Recommendation"})})," ",(0,a.jsx)("mark",{class:"gqlmd-mdx-badge",children:"query"}),(0,a.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,a.jsx)(d.a,{href:"/examples/default/operations/mutations/save-recommendation",children:(0,a.jsx)(d.code,{children:"SaveRecommendation"})})," ",(0,a.jsx)("mark",{class:"gqlmd-mdx-badge",children:"mutation"})]}),"\n",(0,a.jsx)(d.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(d.p,{children:[(0,a.jsx)(d.a,{href:"/examples/default/types/objects/internal-page",children:(0,a.jsx)(d.code,{children:"InternalPage"})})," ",(0,a.jsx)("mark",{class:"gqlmd-mdx-badge",children:"object"}),(0,a.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,a.jsx)(d.a,{href:"/examples/default/types/objects/page",children:(0,a.jsx)(d.code,{children:"Page"})})," ",(0,a.jsx)("mark",{class:"gqlmd-mdx-badge",children:"object"}),(0,a.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,a.jsx)(d.a,{href:"/examples/default/types/objects/recommendation-connection",children:(0,a.jsx)(d.code,{children:"RecommendationConnection"})})," ",(0,a.jsx)("mark",{class:"gqlmd-mdx-badge",children:"object"}),(0,a.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,a.jsx)(d.a,{href:"/examples/default/types/objects/recommendation-edge",children:(0,a.jsx)(d.code,{children:"RecommendationEdge"})})," ",(0,a.jsx)("mark",{class:"gqlmd-mdx-badge",children:"object"})]})]})}function o(e={}){let{wrapper:d}={...(0,l.a)(),...e.components};return d?(0,a.jsx)(d,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},50065:function(e,d,n){n.d(d,{Z:function(){return t},a:function(){return m}});var s=n(67294);let a={},l=s.createContext(a);function m(e){let d=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(d):{...d,...e}},[d,e])}function t(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:m(e.components),s.createElement(l.Provider,{value:d},e.children)}}}]);