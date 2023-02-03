"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[4312],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>f});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),d=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(o),b=n,f=u["".concat(c,".").concat(b)]||u[b]||m[b]||l;return o?r.createElement(f,a(a({ref:t},s),{},{components:o})):r.createElement(f,a({ref:t},s))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,a=new Array(l);a[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,a[1]=i;for(var d=2;d<l;d++)a[d]=o[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}b.displayName="MDXCreateElement"},6994:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>b,Bullet:()=>u,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>i,default:()=>v,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=o(7462),n=o(7294),l=o(3905);const a={id:"review-sort",title:"ReviewSort",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,c={unversionedId:"enums/review-sort",id:"enums/review-sort",title:"ReviewSort",description:"Review sort enums",source:"@site/examples/schema/enums/review-sort.mdx",sourceDirName:"enums",slug:"/enums/review-sort",permalink:"/schema/enums/review-sort",draft:!1,tags:[],version:"current",frontMatter:{id:"review-sort",title:"ReviewSort",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},s=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>ReviewSort.<b>ID</b></code>",id:"code-style-fontweight-normal-reviewsortbidbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ReviewSort.<b>ID_DESC</b></code>",id:"code-style-fontweight-normal-reviewsortbid_descbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ReviewSort.<b>SCORE</b></code>",id:"code-style-fontweight-normal-reviewsortbscorebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ReviewSort.<b>SCORE_DESC</b></code>",id:"code-style-fontweight-normal-reviewsortbscore_descbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ReviewSort.<b>RATING</b></code>",id:"code-style-fontweight-normal-reviewsortbratingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ReviewSort.<b>RATING_DESC</b></code>",id:"code-style-fontweight-normal-reviewsortbrating_descbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ReviewSort.<b>CREATED_AT</b></code>",id:"code-style-fontweight-normal-reviewsortbcreated_atbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ReviewSort.<b>CREATED_AT_DESC</b></code>",id:"code-style-fontweight-normal-reviewsortbcreated_at_descbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ReviewSort.<b>UPDATED_AT</b></code>",id:"code-style-fontweight-normal-reviewsortbupdated_atbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ReviewSort.<b>UPDATED_AT_DESC</b></code>",id:"code-style-fontweight-normal-reviewsortbupdated_at_descbcode",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.className},e.text)),f={toc:s,Bullet:u,SpecifiedBy:m,Badge:b};function v(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,r.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Review sort enums"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ReviewSort {\n  ID\n  ID_DESC\n  SCORE\n  SCORE_DESC\n  RATING\n  RATING_DESC\n  CREATED_AT\n  CREATED_AT_DESC\n  UPDATED_AT\n  UPDATED_AT_DESC\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-reviewsortbidbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ReviewSort.",(0,l.kt)("b",null,"ID")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-reviewsortbid_descbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ReviewSort.",(0,l.kt)("b",null,"ID_DESC")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-reviewsortbscorebcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ReviewSort.",(0,l.kt)("b",null,"SCORE")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-reviewsortbscore_descbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ReviewSort.",(0,l.kt)("b",null,"SCORE_DESC")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-reviewsortbratingbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ReviewSort.",(0,l.kt)("b",null,"RATING")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-reviewsortbrating_descbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ReviewSort.",(0,l.kt)("b",null,"RATING_DESC")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-reviewsortbcreated_atbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ReviewSort.",(0,l.kt)("b",null,"CREATED_AT")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-reviewsortbcreated_at_descbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ReviewSort.",(0,l.kt)("b",null,"CREATED_AT_DESC")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-reviewsortbupdated_atbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ReviewSort.",(0,l.kt)("b",null,"UPDATED_AT")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-reviewsortbupdated_at_descbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ReviewSort.",(0,l.kt)("b",null,"UPDATED_AT_DESC")))),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/schema/queries/review"},(0,l.kt)("inlineCode",{parentName:"a"},"Review"))," ",(0,l.kt)(b,{className:"secondary",text:"query",mdxType:"Badge"})))}v.isMDXComponent=!0}}]);