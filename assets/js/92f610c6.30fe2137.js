"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7356],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),f=r,u=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return n?o.createElement(u,i(i({ref:t},s),{},{components:n})):o.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3264:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(7462),r=n(7294),a=n(3905);const i={id:"site-trend-connection",title:"SiteTrendConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},c=void 0,l={unversionedId:"objects/site-trend-connection",id:"objects/site-trend-connection",title:"SiteTrendConnection",description:"No description",source:"@site/examples/schema/objects/site-trend-connection.mdx",sourceDirName:"objects",slug:"/objects/site-trend-connection",permalink:"/schema/objects/site-trend-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"site-trend-connection",title:"SiteTrendConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SiteTrendConnection.<b>edges</b></code><Bullet /><code>[SiteTrendEdge]</code> <Badge className="secondary" text="list"/> <Badge className="secondary" text="object"/>',id:"code-style-fontweight-normal-sitetrendconnectionbedgesbcodesitetrendedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SiteTrendConnection.<b>nodes</b></code><Bullet /><code>[SiteTrend]</code> <Badge className="secondary" text="list"/> <Badge className="secondary" text="object"/>',id:"code-style-fontweight-normal-sitetrendconnectionbnodesbcodesitetrend--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SiteTrendConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo</code> <Badge className="secondary" text="object"/>',id:"code-style-fontweight-normal-sitetrendconnectionbpageinfobcodepageinfo-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.className},e.text)),u={toc:s,Bullet:p,SpecifiedBy:m,Badge:f};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type SiteTrendConnection {\n  edges: [SiteTrendEdge]\n  nodes: [SiteTrend]\n  pageInfo: PageInfo\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-sitetrendconnectionbedgesbcodesitetrendedge--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SiteTrendConnection.",(0,a.kt)("b",null,"edges"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/site-trend-edge"},(0,a.kt)("inlineCode",{parentName:"a"},"[SiteTrendEdge]"))," ",(0,a.kt)(f,{className:"secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(f,{className:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-sitetrendconnectionbnodesbcodesitetrend--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SiteTrendConnection.",(0,a.kt)("b",null,"nodes"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/site-trend"},(0,a.kt)("inlineCode",{parentName:"a"},"[SiteTrend]"))," ",(0,a.kt)(f,{className:"secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(f,{className:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-sitetrendconnectionbpageinfobcodepageinfo-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SiteTrendConnection.",(0,a.kt)("b",null,"pageInfo"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/page-info"},(0,a.kt)("inlineCode",{parentName:"a"},"PageInfo"))," ",(0,a.kt)(f,{className:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The pagination information")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/schema/objects/site-statistics"},(0,a.kt)("inlineCode",{parentName:"a"},"SiteStatistics"))," ",(0,a.kt)(f,{className:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);