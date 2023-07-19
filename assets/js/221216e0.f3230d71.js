"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[664],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=d(n),p=o,b=g["".concat(c,".").concat(p)]||g[p]||u[p]||r;return n?a.createElement(b,l(l({ref:t},s),{},{components:n})):a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[g]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2615:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>g,assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(7462),o=n(7294),r=n(4137);const l={id:"airing-schedule-connection",title:"AiringScheduleConnection",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},i=void 0,c={unversionedId:"objects/airing-schedule-connection",id:"objects/airing-schedule-connection",title:"AiringScheduleConnection",description:"No description",source:"@site/examples/default/objects/airing-schedule-connection.mdx",sourceDirName:"objects",slug:"/objects/airing-schedule-connection",permalink:"/examples/default/objects/airing-schedule-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"airing-schedule-connection",title:"AiringScheduleConnection",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},s=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AiringScheduleConnection.<b>edges</b></code><Bullet /><code>[AiringScheduleEdge]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-airingscheduleconnectionbedgesbcodeairingscheduleedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringScheduleConnection.<b>nodes</b></code><Bullet /><code>[AiringSchedule]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-airingscheduleconnectionbnodesbcodeairingschedule--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringScheduleConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-airingscheduleconnectionbpageinfobcodepageinfo-",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:i=!1}=e;const[c,d]=(0,o.useState)(i);return(0,r.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&l)},f={Bullet:s,SpecifiedBy:g,Badge:u,toc:p,Details:b};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type AiringScheduleConnection {\n  edges: [AiringScheduleEdge]\n  nodes: [AiringSchedule]\n  pageInfo: PageInfo\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-airingscheduleconnectionbedgesbcodeairingscheduleedge--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AiringScheduleConnection.",(0,r.kt)("b",null,"edges"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/airing-schedule-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"[AiringScheduleEdge]"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-airingscheduleconnectionbnodesbcodeairingschedule--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AiringScheduleConnection.",(0,r.kt)("b",null,"nodes"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/airing-schedule"},(0,r.kt)("inlineCode",{parentName:"a"},"[AiringSchedule]"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-airingscheduleconnectionbpageinfobcodepageinfo-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AiringScheduleConnection.",(0,r.kt)("b",null,"pageInfo"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/page-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PageInfo"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The pagination information")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/examples/default/objects/media"},(0,r.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);