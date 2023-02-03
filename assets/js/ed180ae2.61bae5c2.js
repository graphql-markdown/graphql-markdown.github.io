"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[269],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(n),f=o,b=u["".concat(c,".").concat(f)]||u[f]||m[f]||l;return n?r.createElement(b,a(a({ref:t},s),{},{components:n})):r.createElement(b,a({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var d=2;d<l;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7774:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>u,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=n(7294),l=n(3905);const a={id:"site-trend-sort",title:"SiteTrendSort",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,c={unversionedId:"enums/site-trend-sort",id:"enums/site-trend-sort",title:"SiteTrendSort",description:"Site trend sort enums",source:"@site/examples/schema/enums/site-trend-sort.mdx",sourceDirName:"enums",slug:"/enums/site-trend-sort",permalink:"/schema/enums/site-trend-sort",draft:!1,tags:[],version:"current",frontMatter:{id:"site-trend-sort",title:"SiteTrendSort",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},s=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>SiteTrendSort.<b>DATE</b></code>",id:"code-style-fontweight-normal-sitetrendsortbdatebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SiteTrendSort.<b>DATE_DESC</b></code>",id:"code-style-fontweight-normal-sitetrendsortbdate_descbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SiteTrendSort.<b>COUNT</b></code>",id:"code-style-fontweight-normal-sitetrendsortbcountbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SiteTrendSort.<b>COUNT_DESC</b></code>",id:"code-style-fontweight-normal-sitetrendsortbcount_descbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SiteTrendSort.<b>CHANGE</b></code>",id:"code-style-fontweight-normal-sitetrendsortbchangebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SiteTrendSort.<b>CHANGE_DESC</b></code>",id:"code-style-fontweight-normal-sitetrendsortbchange_descbcode",level:4}],u=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.className},e.text)),b={toc:s,Bullet:u,SpecifiedBy:m,Badge:f};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Site trend sort enums"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SiteTrendSort {\n  DATE\n  DATE_DESC\n  COUNT\n  COUNT_DESC\n  CHANGE\n  CHANGE_DESC\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-sitetrendsortbdatebcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SiteTrendSort.",(0,l.kt)("b",null,"DATE")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-sitetrendsortbdate_descbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SiteTrendSort.",(0,l.kt)("b",null,"DATE_DESC")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-sitetrendsortbcountbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SiteTrendSort.",(0,l.kt)("b",null,"COUNT")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-sitetrendsortbcount_descbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SiteTrendSort.",(0,l.kt)("b",null,"COUNT_DESC")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-sitetrendsortbchangebcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SiteTrendSort.",(0,l.kt)("b",null,"CHANGE")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-sitetrendsortbchange_descbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SiteTrendSort.",(0,l.kt)("b",null,"CHANGE_DESC")))),(0,l.kt)("blockquote",null))}p.isMDXComponent=!0}}]);