"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[8765],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,u=m["".concat(c,".").concat(f)]||m[f]||p[f]||r;return n?a.createElement(u,d(d({ref:t},s),{},{components:n})):a.createElement(u,d({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,d=new Array(r);d[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:o,d[1]=i;for(var l=2;l<r;l++)d[l]=n[l];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7717:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>d,metadata:()=>c,toc:()=>s});var a=n(7462),o=n(7294),r=n(3905);const d={id:"media-trend-connection",title:"MediaTrendConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,c={unversionedId:"objects/media-trend-connection",id:"objects/media-trend-connection",title:"MediaTrendConnection",description:"No description",source:"@site/examples/schema/objects/media-trend-connection.mdx",sourceDirName:"objects",slug:"/objects/media-trend-connection",permalink:"/schema/objects/media-trend-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"media-trend-connection",title:"MediaTrendConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},l={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrendConnection.<b>edges</b></code><Bullet /><code>[MediaTrendEdge]</code> <Badge className="secondary" text="list"/> <Badge className="secondary" text="object"/>',id:"code-style-fontweight-normal-mediatrendconnectionbedgesbcodemediatrendedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrendConnection.<b>nodes</b></code><Bullet /><code>[MediaTrend]</code> <Badge className="secondary" text="list"/> <Badge className="secondary" text="object"/>',id:"code-style-fontweight-normal-mediatrendconnectionbnodesbcodemediatrend--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrendConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo</code> <Badge className="secondary" text="object"/>',id:"code-style-fontweight-normal-mediatrendconnectionbpageinfobcodepageinfo-",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:s,Bullet:m,SpecifiedBy:p,Badge:f};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaTrendConnection {\n  edges: [MediaTrendEdge]\n  nodes: [MediaTrend]\n  pageInfo: PageInfo\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-mediatrendconnectionbedgesbcodemediatrendedge--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MediaTrendConnection.",(0,r.kt)("b",null,"edges"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media-trend-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"[MediaTrendEdge]"))," ",(0,r.kt)(f,{className:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(f,{className:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-mediatrendconnectionbnodesbcodemediatrend--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MediaTrendConnection.",(0,r.kt)("b",null,"nodes"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media-trend"},(0,r.kt)("inlineCode",{parentName:"a"},"[MediaTrend]"))," ",(0,r.kt)(f,{className:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(f,{className:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-mediatrendconnectionbpageinfobcodepageinfo-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MediaTrendConnection.",(0,r.kt)("b",null,"pageInfo"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/page-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PageInfo"))," ",(0,r.kt)(f,{className:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The pagination information")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/schema/objects/media"},(0,r.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,r.kt)(f,{className:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);