"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[5670],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=a.createContext({}),c=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(m.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),p=o,f=s["".concat(m,".").concat(p)]||s[p]||u[p]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},20:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>m,toc:()=>p});var a=n(7462),o=n(7294),r=n(4137);const i={id:"recommendation-rating",title:"RecommendationRating",hide_table_of_contents:!1},l=void 0,m={unversionedId:"enums/recommendation-rating",id:"enums/recommendation-rating",title:"RecommendationRating",description:"Recommendation rating enums",source:"@site/examples/default/enums/recommendation-rating.mdx",sourceDirName:"enums",slug:"/enums/recommendation-rating",permalink:"/examples/default/enums/recommendation-rating",draft:!1,tags:[],version:"current",frontMatter:{id:"recommendation-rating",title:"RecommendationRating",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"NotificationType",permalink:"/examples/default/enums/notification-type"},next:{title:"RecommendationSort",permalink:"/examples/default/enums/recommendation-sort"}},c={},d=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),p=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>RecommendationRating.<b>NO_RATING</b></code>",id:"code-style-fontweight-normal-recommendationratingbno_ratingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>RecommendationRating.<b>RATE_UP</b></code>",id:"code-style-fontweight-normal-recommendationratingbrate_upbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>RecommendationRating.<b>RATE_DOWN</b></code>",id:"code-style-fontweight-normal-recommendationratingbrate_downbcode",level:4},{value:"Member Of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:l=!1}=e;const[m,c]=(0,o.useState)(l);return(0,r.kt)("details",(0,a.Z)({},m?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},m?t:n),m&&i)},g={Bullet:d,SpecifiedBy:s,Badge:u,toc:p,Details:f};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"googlebot",content:"noindex"}),(0,r.kt)("meta",{charset:"utf-8"})),(0,r.kt)("p",null,"Recommendation rating enums"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum RecommendationRating {\n  NO_RATING\n  RATE_UP\n  RATE_DOWN\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-recommendationratingbno_ratingbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"RecommendationRating.",(0,r.kt)("b",null,"NO_RATING")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-recommendationratingbrate_upbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"RecommendationRating.",(0,r.kt)("b",null,"RATE_UP")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-recommendationratingbrate_downbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"RecommendationRating.",(0,r.kt)("b",null,"RATE_DOWN")))),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member Of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/examples/default/objects/recommendation"},(0,r.kt)("inlineCode",{parentName:"a"},"Recommendation"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-recommendation"},(0,r.kt)("inlineCode",{parentName:"a"},"SaveRecommendation"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);