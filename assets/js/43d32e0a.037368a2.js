"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6718],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),s=l(n),u=o,f=s["".concat(c,".").concat(u)]||s[u]||p[u]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var m={};for(var c in t)hasOwnProperty.call(t,c)&&(m[c]=t[c]);m.originalType=e,m[s]="string"==typeof e?e:o,i[1]=m;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3428:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>s,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>m,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(7462),o=n(7294),r=n(3905);const i={id:"save-recommendation",title:"SaveRecommendation",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},m=void 0,c={unversionedId:"mutations/save-recommendation",id:"mutations/save-recommendation",title:"SaveRecommendation",description:"Recommendation a media",source:"@site/examples/schema/mutations/save-recommendation.mdx",sourceDirName:"mutations",slug:"/mutations/save-recommendation",permalink:"/schema/mutations/save-recommendation",draft:!1,tags:[],version:"current",frontMatter:{id:"save-recommendation",title:"SaveRecommendation",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},l={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SaveRecommendation.<b>mediaId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-saverecommendationbmediaidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveRecommendation.<b>mediaRecommendationId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-saverecommendationbmediarecommendationidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveRecommendation.<b>rating</b></code><Bullet /><code>RecommendationRating</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-saverecommendationbratingbcoderecommendationrating-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Recommendation</code> <Badge class="secondary" text="object"/>',id:"recommendation-",level:4}],s=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:s,SpecifiedBy:p,Badge:u};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Recommendation a media"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"SaveRecommendation(\n  mediaId: Int\n  mediaRecommendationId: Int\n  rating: RecommendationRating\n): Recommendation\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-saverecommendationbmediaidbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SaveRecommendation.",(0,r.kt)("b",null,"mediaId"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The id of the base media")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-saverecommendationbmediarecommendationidbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SaveRecommendation.",(0,r.kt)("b",null,"mediaRecommendationId"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The id of the media to recommend")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-saverecommendationbratingbcoderecommendationrating-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SaveRecommendation.",(0,r.kt)("b",null,"rating"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/recommendation-rating"},(0,r.kt)("inlineCode",{parentName:"a"},"RecommendationRating"))," ",(0,r.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The rating to give the recommendation")),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"recommendation-"},(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/recommendation"},(0,r.kt)("inlineCode",{parentName:"a"},"Recommendation"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Media recommendation")))}g.isMDXComponent=!0}}]);