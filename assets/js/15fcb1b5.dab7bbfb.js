"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2348],{4137:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},f=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},i="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),i=s(n),b=o,g=i["".concat(d,".").concat(b)]||i[b]||p[b]||r;return n?a.createElement(g,l(l({ref:t},f),{},{components:n})):a.createElement(g,l({ref:t},f))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=b;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[i]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},3292:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>f,Details:()=>g,SpecifiedBy:()=>i,assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>b});var a=n(7462),o=n(7294),r=n(4137);const l={id:"staff-connection",title:"StaffConnection",hide_table_of_contents:!1},c=void 0,d={unversionedId:"objects/staff-connection",id:"objects/staff-connection",title:"StaffConnection",description:"No description",source:"@site/examples/default/objects/staff-connection.mdx",sourceDirName:"objects",slug:"/objects/staff-connection",permalink:"/examples/default/objects/staff-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"staff-connection",title:"StaffConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SiteTrend",permalink:"/examples/default/objects/site-trend"},next:{title:"StaffEdge",permalink:"/examples/default/objects/staff-edge"}},s={},f=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),i=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>StaffConnection.<b>edges</b></code><Bullet /><code>[StaffEdge]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-staffconnectionbedgesbcodestaffedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffConnection.<b>nodes</b></code><Bullet /><code>[Staff]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-staffconnectionbnodesbcodestaff--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-staffconnectionbpageinfobcodepageinfo-",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:c=!1}=e;const[d,s]=(0,o.useState)(c);return(0,r.kt)("details",(0,a.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},d?t:n),d&&l)},m={Bullet:f,SpecifiedBy:i,Badge:p,toc:b,Details:g};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type StaffConnection {\n  edges: [StaffEdge]\n  nodes: [Staff]\n  pageInfo: PageInfo\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-staffconnectionbedgesbcodestaffedge--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"StaffConnection.",(0,r.kt)("b",null,"edges"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/staff-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"[StaffEdge]"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-staffconnectionbnodesbcodestaff--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"StaffConnection.",(0,r.kt)("b",null,"nodes"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/staff"},(0,r.kt)("inlineCode",{parentName:"a"},"[Staff]"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-staffconnectionbpageinfobcodepageinfo-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"StaffConnection.",(0,r.kt)("b",null,"pageInfo"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/page-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PageInfo"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The pagination information")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/examples/default/objects/favourites"},(0,r.kt)("inlineCode",{parentName:"a"},"Favourites"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/examples/default/objects/media"},(0,r.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);