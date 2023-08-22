"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7111],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var m=n.createContext({}),i=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(m.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,d=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=i(a),u=o,b=s["".concat(m,".").concat(u)]||s[u]||p[u]||d;return a?n.createElement(b,r(r({ref:t},c),{},{components:a})):n.createElement(b,r({ref:t},c))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var d=a.length,r=new Array(d);r[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[s]="string"==typeof e?e:o,r[1]=l;for(var i=2;i<d;i++)r[i]=a[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3617:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>s,assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>m,toc:()=>u});var n=a(7462),o=a(7294),d=a(4137);const r={id:"recommendation",title:"Recommendation",hide_table_of_contents:!1},l=void 0,m={unversionedId:"objects/recommendation",id:"objects/recommendation",title:"Recommendation",description:"Media recommendation",source:"@site/examples/default/objects/recommendation.mdx",sourceDirName:"objects",slug:"/objects/recommendation",permalink:"/examples/default/objects/recommendation",draft:!1,tags:[],version:"current",frontMatter:{id:"recommendation",title:"Recommendation",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"RecommendationEdge",permalink:"/examples/default/objects/recommendation-edge"},next:{title:"RelatedMediaAdditionNotification",permalink:"/examples/default/objects/related-media-addition-notification"}},i={},c=()=>(0,d.kt)(o.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,d.kt)(o.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,d.kt)(o.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Recommendation.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-recommendationbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Recommendation.<b>rating</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-recommendationbratingbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Recommendation.<b>userRating</b></code><Bullet /><code>RecommendationRating</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-recommendationbuserratingbcoderecommendationrating-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Recommendation.<b>media</b></code><Bullet /><code>Media</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-recommendationbmediabcodemedia-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Recommendation.<b>mediaRecommendation</b></code><Bullet /><code>Media</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-recommendationbmediarecommendationbcodemedia-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Recommendation.<b>user</b></code><Bullet /><code>User</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-recommendationbuserbcodeuser-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:l=!1}=e;const[m,i]=(0,o.useState)(l);return(0,d.kt)("details",(0,n.Z)({},m?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},m?t:a),m&&r)},g={Bullet:c,SpecifiedBy:s,Badge:p,toc:u,Details:b};function f(e){let{components:t,...a}=e;return(0,d.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Media recommendation"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type Recommendation {\n  id: Int!\n  rating: Int\n  userRating: RecommendationRating\n  media: Media\n  mediaRecommendation: Media\n  user: User\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-recommendationbidbcodeint--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Recommendation.",(0,d.kt)("b",null,"id"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The id of the recommendation")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-recommendationbratingbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Recommendation.",(0,d.kt)("b",null,"rating"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Users rating of the recommendation")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-recommendationbuserratingbcoderecommendationrating-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Recommendation.",(0,d.kt)("b",null,"userRating"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/enums/recommendation-rating"},(0,d.kt)("inlineCode",{parentName:"a"},"RecommendationRating"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The rating of the recommendation by currently authenticated user")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-recommendationbmediabcodemedia-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Recommendation.",(0,d.kt)("b",null,"media"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/objects/media"},(0,d.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The media the recommendation is from")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-recommendationbmediarecommendationbcodemedia-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Recommendation.",(0,d.kt)("b",null,"mediaRecommendation"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/objects/media"},(0,d.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The recommended media")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-recommendationbuserbcodeuser-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Recommendation.",(0,d.kt)("b",null,"user"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/objects/user"},(0,d.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The user that first created the recommendation")),(0,d.kt)("h3",{id:"returned-by"},"Returned by"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/recommendation"},(0,d.kt)("inlineCode",{parentName:"a"},"Recommendation"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-recommendation"},(0,d.kt)("inlineCode",{parentName:"a"},"SaveRecommendation"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/internal-page"},(0,d.kt)("inlineCode",{parentName:"a"},"InternalPage"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/page"},(0,d.kt)("inlineCode",{parentName:"a"},"Page"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/recommendation-connection"},(0,d.kt)("inlineCode",{parentName:"a"},"RecommendationConnection"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/recommendation-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"RecommendationEdge"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);