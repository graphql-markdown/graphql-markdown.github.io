"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[305],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=o,m=u["".concat(d,".").concat(f)]||u[f]||p[f]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3556:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={id:"site-trend-connection",title:"SiteTrendConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,c={unversionedId:"schema/objects/site-trend-connection",id:"schema/objects/site-trend-connection",title:"SiteTrendConnection",description:"No description",source:"@site/docs/schema/objects/site-trend-connection.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/site-trend-connection",permalink:"/schema/objects/site-trend-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"site-trend-connection",title:"SiteTrendConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},d={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>edges</code> (<code>[SiteTrendEdge]</code>)",id:"edges-sitetrendedge",level:4},{value:"<code>nodes</code> (<code>[SiteTrend]</code>)",id:"nodes-sitetrend",level:4},{value:"<code>pageInfo</code> (<code>PageInfo</code>)",id:"pageinfo-pageinfo",level:4}],l={toc:s};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type SiteTrendConnection {\n  edges: [SiteTrendEdge]\n  nodes: [SiteTrend]\n  pageInfo: PageInfo\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"edges-sitetrendedge"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"edges"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/site-trend-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"[SiteTrendEdge]")),")"),(0,o.kt)("h4",{id:"nodes-sitetrend"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"nodes"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/site-trend"},(0,o.kt)("inlineCode",{parentName:"a"},"[SiteTrend]")),")"),(0,o.kt)("h4",{id:"pageinfo-pageinfo"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"pageInfo"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/page-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PageInfo")),")"),(0,o.kt)("p",null,"The pagination information"))}p.isMDXComponent=!0}}]);