"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[5066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>b});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=a.createContext({}),l=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,m=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),s=l(n),u=o,b=s["".concat(m,".").concat(u)]||s[u]||p[u]||r;return n?a.createElement(b,c(c({ref:t},i),{},{components:n})):a.createElement(b,c({ref:t},i))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=u;var d={};for(var m in t)hasOwnProperty.call(t,m)&&(d[m]=t[m]);d.originalType=e,d[s]="string"==typeof e?e:o,c[1]=d;for(var l=2;l<r;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2467:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>s,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>d,default:()=>k,frontMatter:()=>c,metadata:()=>m,toc:()=>i});var a=n(7462),o=n(7294),r=n(3905);const c={id:"recommendation",title:"Recommendation",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,m={unversionedId:"objects/recommendation",id:"objects/recommendation",title:"Recommendation",description:"Media recommendation",source:"@site/examples/schema/objects/recommendation.mdx",sourceDirName:"objects",slug:"/objects/recommendation",permalink:"/schema/objects/recommendation",draft:!1,tags:[],version:"current",frontMatter:{id:"recommendation",title:"Recommendation",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},l={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Recommendation.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-recommendationbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Recommendation.<b>rating</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-recommendationbratingbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Recommendation.<b>userRating</b></code><Bullet /><code>RecommendationRating</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-recommendationbuserratingbcoderecommendationrating-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Recommendation.<b>media</b></code><Bullet /><code>Media</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-recommendationbmediabcodemedia-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Recommendation.<b>mediaRecommendation</b></code><Bullet /><code>Media</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-recommendationbmediarecommendationbcodemedia-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Recommendation.<b>user</b></code><Bullet /><code>User</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-recommendationbuserbcodeuser-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],s=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:i,Bullet:s,SpecifiedBy:p,Badge:u};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Media recommendation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Recommendation {\n  id: Int!\n  rating: Int\n  userRating: RecommendationRating\n  media: Media\n  mediaRecommendation: Media\n  user: User\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-recommendationbidbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Recommendation.",(0,r.kt)("b",null,"id"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The id of the recommendation")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-recommendationbratingbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Recommendation.",(0,r.kt)("b",null,"rating"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Users rating of the recommendation")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-recommendationbuserratingbcoderecommendationrating-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Recommendation.",(0,r.kt)("b",null,"userRating"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/recommendation-rating"},(0,r.kt)("inlineCode",{parentName:"a"},"RecommendationRating"))," ",(0,r.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The rating of the recommendation by currently authenticated user")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-recommendationbmediabcodemedia-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Recommendation.",(0,r.kt)("b",null,"media"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,r.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The media the recommendation is from")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-recommendationbmediarecommendationbcodemedia-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Recommendation.",(0,r.kt)("b",null,"mediaRecommendation"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,r.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The recommended media")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-recommendationbuserbcodeuser-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Recommendation.",(0,r.kt)("b",null,"user"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,r.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The user that first created the recommendation")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/schema/queries/recommendation"},(0,r.kt)("inlineCode",{parentName:"a"},"Recommendation"))," ",(0,r.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/mutations/save-recommendation"},(0,r.kt)("inlineCode",{parentName:"a"},"SaveRecommendation"))," ",(0,r.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/schema/objects/internal-page"},(0,r.kt)("inlineCode",{parentName:"a"},"InternalPage"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/page"},(0,r.kt)("inlineCode",{parentName:"a"},"Page"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/recommendation-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"RecommendationConnection"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/recommendation-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"RecommendationEdge"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);