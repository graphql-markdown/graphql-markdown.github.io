"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[5614],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>p});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=d(t),p=r,f=g["".concat(l,".").concat(p)]||g[p]||u[p]||a;return t?o.createElement(f,c(c({ref:n},s),{},{components:t})):o.createElement(f,c({ref:n},s))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var d=2;d<a;d++)c[d]=t[d];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},575:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>u,SpecifiedBy:()=>g,assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var o=t(7462),r=t(7294),a=t(3905);const c={id:"airing-schedule-connection",title:"AiringScheduleConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,l={unversionedId:"schema/objects/airing-schedule-connection",id:"schema/objects/airing-schedule-connection",title:"AiringScheduleConnection",description:"No description",source:"@site/docs/schema/objects/airing-schedule-connection.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/airing-schedule-connection",permalink:"/schema/objects/airing-schedule-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"airing-schedule-connection",title:"AiringScheduleConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AiringScheduleConnection.<b>edges</b></code><Bullet /><code>[AiringScheduleEdge]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-airingscheduleconnectionbedgesbcodeairingscheduleedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringScheduleConnection.<b>nodes</b></code><Bullet /><code>[AiringSchedule]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-airingscheduleconnectionbnodesbcodeairingschedule--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringScheduleConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-airingscheduleconnectionbpageinfobcodepageinfo-",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:u,SpecifiedBy:g,Badge:p};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type AiringScheduleConnection {\n  edges: [AiringScheduleEdge]\n  nodes: [AiringSchedule]\n  pageInfo: PageInfo\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-airingscheduleconnectionbedgesbcodeairingscheduleedge--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AiringScheduleConnection.",(0,a.kt)("b",null,"edges"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/airing-schedule-edge"},(0,a.kt)("inlineCode",{parentName:"a"},"[AiringScheduleEdge]"))," ",(0,a.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-airingscheduleconnectionbnodesbcodeairingschedule--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AiringScheduleConnection.",(0,a.kt)("b",null,"nodes"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/airing-schedule"},(0,a.kt)("inlineCode",{parentName:"a"},"[AiringSchedule]"))," ",(0,a.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-airingscheduleconnectionbpageinfobcodepageinfo-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AiringScheduleConnection.",(0,a.kt)("b",null,"pageInfo"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/page-info"},(0,a.kt)("inlineCode",{parentName:"a"},"PageInfo"))," ",(0,a.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The pagination information")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/schema/objects/media"},(0,a.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,a.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);