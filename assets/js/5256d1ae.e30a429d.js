"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[5965],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,u=p["".concat(i,".").concat(f)]||p[f]||m[f]||r;return n?a.createElement(u,l(l({ref:t},s),{},{components:n})):a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=f;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[p]="string"==typeof e?e:o,l[1]=d;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6093:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>s,Details:()=>u,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>f});var a=n(7462),o=n(7294),r=n(3905);const l={id:"media-connection",title:"MediaConnection",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},d=void 0,i={unversionedId:"objects/media-connection",id:"objects/media-connection",title:"MediaConnection",description:"No description",source:"@site/examples/default/objects/media-connection.mdx",sourceDirName:"objects",slug:"/objects/media-connection",permalink:"/examples/default/objects/media-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"media-connection",title:"MediaConnection",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},s=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MediaConnection.<b>edges</b></code><Bullet /><code>[MediaEdge]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-mediaconnectionbedgesbcodemediaedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaConnection.<b>nodes</b></code><Bullet /><code>[Media]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-mediaconnectionbnodesbcodemedia--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-mediaconnectionbpageinfobcodepageinfo-",level:4},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:d=!1}=e;const[i,c]=(0,o.useState)(d);return(0,r.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&l)},b={Bullet:s,SpecifiedBy:p,Badge:m,toc:f,Details:u};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaConnection {\n  edges: [MediaEdge]\n  nodes: [Media]\n  pageInfo: PageInfo\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-mediaconnectionbedgesbcodemediaedge--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MediaConnection.",(0,r.kt)("b",null,"edges"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/media-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"[MediaEdge]"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-mediaconnectionbnodesbcodemedia--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MediaConnection.",(0,r.kt)("b",null,"nodes"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/media"},(0,r.kt)("inlineCode",{parentName:"a"},"[Media]"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-mediaconnectionbpageinfobcodepageinfo-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MediaConnection.",(0,r.kt)("b",null,"pageInfo"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/page-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PageInfo"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The pagination information")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/examples/default/objects/character"},(0,r.kt)("inlineCode",{parentName:"a"},"Character"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/examples/default/objects/favourites"},(0,r.kt)("inlineCode",{parentName:"a"},"Favourites"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/examples/default/objects/media"},(0,r.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/examples/default/objects/staff"},(0,r.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/examples/default/objects/studio"},(0,r.kt)("inlineCode",{parentName:"a"},"Studio"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);