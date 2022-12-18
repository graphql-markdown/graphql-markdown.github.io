"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[5472],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),m=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return o.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=m(n),p=r,f=s["".concat(c,".").concat(p)]||s[p]||u[p]||a;return n?o.createElement(f,l(l({ref:t},d),{},{components:n})):o.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var m=2;m<a;m++)l[m]=n[m];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7856:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>m,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var o=n(7462),r=n(7294),a=n(3905);const l={id:"recommendation-sort",title:"RecommendationSort",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,c={unversionedId:"enums/recommendation-sort",id:"enums/recommendation-sort",title:"RecommendationSort",description:"Recommendation sort enums",source:"@site/examples/schema/enums/recommendation-sort.mdx",sourceDirName:"enums",slug:"/enums/recommendation-sort",permalink:"/schema/enums/recommendation-sort",draft:!1,tags:[],version:"current",frontMatter:{id:"recommendation-sort",title:"RecommendationSort",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},m={},d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>RecommendationSort.<b>ID</b></code>",id:"code-style-fontweight-normal-recommendationsortbidbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>RecommendationSort.<b>ID_DESC</b></code>",id:"code-style-fontweight-normal-recommendationsortbid_descbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>RecommendationSort.<b>RATING</b></code>",id:"code-style-fontweight-normal-recommendationsortbratingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>RecommendationSort.<b>RATING_DESC</b></code>",id:"code-style-fontweight-normal-recommendationsortbrating_descbcode",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:s,SpecifiedBy:u,Badge:p};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Recommendation sort enums"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum RecommendationSort {\n  ID\n  ID_DESC\n  RATING\n  RATING_DESC\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-recommendationsortbidbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RecommendationSort.",(0,a.kt)("b",null,"ID")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-recommendationsortbid_descbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RecommendationSort.",(0,a.kt)("b",null,"ID_DESC")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-recommendationsortbratingbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RecommendationSort.",(0,a.kt)("b",null,"RATING")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-recommendationsortbrating_descbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RecommendationSort.",(0,a.kt)("b",null,"RATING_DESC")))),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/schema/queries/recommendation"},(0,a.kt)("inlineCode",{parentName:"a"},"Recommendation"))," ",(0,a.kt)(p,{class:"secondary",text:"query",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);