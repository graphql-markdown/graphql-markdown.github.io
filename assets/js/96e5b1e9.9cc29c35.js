"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3139],{3905:(e,t,o)=>{o.d(t,{Zo:()=>i,kt:()=>b});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function f(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},i=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,i=f(e,["components","mdxType","originalType","parentName"]),d=c(o),m=r,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return o?n.createElement(b,l(l({ref:t},i),{},{components:o})):n.createElement(b,l({ref:t},i))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=m;var f={};for(var s in t)hasOwnProperty.call(t,s)&&(f[s]=t[s]);f.originalType=e,f[d]="string"==typeof e?e:r,l[1]=f;for(var c=2;c<a;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4340:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>f,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var n=o(7462),r=o(7294),a=o(3905);const l={id:"staff-sort",title:"StaffSort",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},f=void 0,s={unversionedId:"enums/staff-sort",id:"enums/staff-sort",title:"StaffSort",description:"Staff sort enums",source:"@site/examples/schema/enums/staff-sort.mdx",sourceDirName:"enums",slug:"/enums/staff-sort",permalink:"/schema/enums/staff-sort",draft:!1,tags:[],version:"current",frontMatter:{id:"staff-sort",title:"StaffSort",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},i=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>StaffSort.<b>ID</b></code>",id:"code-style-fontweight-normal-staffsortbidbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>StaffSort.<b>ID_DESC</b></code>",id:"code-style-fontweight-normal-staffsortbid_descbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>StaffSort.<b>ROLE</b></code>",id:"code-style-fontweight-normal-staffsortbrolebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>StaffSort.<b>ROLE_DESC</b></code>",id:"code-style-fontweight-normal-staffsortbrole_descbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>StaffSort.<b>LANGUAGE</b></code>",id:"code-style-fontweight-normal-staffsortblanguagebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>StaffSort.<b>LANGUAGE_DESC</b></code>",id:"code-style-fontweight-normal-staffsortblanguage_descbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>StaffSort.<b>SEARCH_MATCH</b></code>",id:"code-style-fontweight-normal-staffsortbsearch_matchbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>StaffSort.<b>FAVOURITES</b></code>",id:"code-style-fontweight-normal-staffsortbfavouritesbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>StaffSort.<b>FAVOURITES_DESC</b></code>",id:"code-style-fontweight-normal-staffsortbfavourites_descbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>StaffSort.<b>RELEVANCE</b></code>",id:"code-style-fontweight-normal-staffsortbrelevancebcode",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),b={toc:i,Bullet:d,SpecifiedBy:u,Badge:m};function h(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},b,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Staff sort enums"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum StaffSort {\n  ID\n  ID_DESC\n  ROLE\n  ROLE_DESC\n  LANGUAGE\n  LANGUAGE_DESC\n  SEARCH_MATCH\n  FAVOURITES\n  FAVOURITES_DESC\n  RELEVANCE\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-staffsortbidbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"StaffSort.",(0,a.kt)("b",null,"ID")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-staffsortbid_descbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"StaffSort.",(0,a.kt)("b",null,"ID_DESC")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-staffsortbrolebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"StaffSort.",(0,a.kt)("b",null,"ROLE")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-staffsortbrole_descbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"StaffSort.",(0,a.kt)("b",null,"ROLE_DESC")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-staffsortblanguagebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"StaffSort.",(0,a.kt)("b",null,"LANGUAGE")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-staffsortblanguage_descbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"StaffSort.",(0,a.kt)("b",null,"LANGUAGE_DESC")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-staffsortbsearch_matchbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"StaffSort.",(0,a.kt)("b",null,"SEARCH_MATCH")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-staffsortbfavouritesbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"StaffSort.",(0,a.kt)("b",null,"FAVOURITES")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-staffsortbfavourites_descbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"StaffSort.",(0,a.kt)("b",null,"FAVOURITES_DESC")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-staffsortbrelevancebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"StaffSort.",(0,a.kt)("b",null,"RELEVANCE")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Order manually decided by moderators")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/schema/queries/staff"},(0,a.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,a.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);