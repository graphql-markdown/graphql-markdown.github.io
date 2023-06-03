"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2484],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(a),p=l,m=u["".concat(o,".").concat(p)]||u[p]||g[p]||r;return a?n.createElement(m,d(d({ref:t},s),{},{components:a})):n.createElement(m,d({ref:t},s))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,d=new Array(r);d[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:l,d[1]=i;for(var c=2;c<r;c++)d[c]=a[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8705:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>p});var n=a(7462),l=a(7294),r=a(3905);const d={id:"airing-schedule",title:"AiringSchedule",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},i=void 0,o={unversionedId:"objects/airing-schedule",id:"objects/airing-schedule",title:"AiringSchedule",description:"Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate.",source:"@site/examples/default/objects/airing-schedule.mdx",sourceDirName:"objects",slug:"/objects/airing-schedule",permalink:"/examples/default/objects/airing-schedule",draft:!1,tags:[],version:"current",frontMatter:{id:"airing-schedule",title:"AiringSchedule",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},s=()=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(l.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>airingAt</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebairingatbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>timeUntilAiring</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebtimeuntilairingbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>episode</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebepisodebcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>mediaId</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebmediaidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>media</b></code><Bullet /><code>Media</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-airingschedulebmediabcodemedia-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:i=!1}=e;const[o,c]=(0,l.useState)(i);return(0,r.kt)("details",(0,n.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},o?t:a),o&&d)},b={Bullet:s,SpecifiedBy:u,Badge:g,toc:p,Details:m};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type AiringSchedule {\n  id: Int!\n  airingAt: Int!\n  timeUntilAiring: Int!\n  episode: Int!\n  mediaId: Int!\n  media: Media\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebidbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,r.kt)("b",null,"id"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The id of the airing schedule item")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebairingatbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,r.kt)("b",null,"airingAt"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The time the episode airs at")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebtimeuntilairingbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,r.kt)("b",null,"timeUntilAiring"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Seconds until episode starts airing")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebepisodebcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,r.kt)("b",null,"episode"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The airing episode number")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebmediaidbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,r.kt)("b",null,"mediaId"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The associate media id of the airing episode")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebmediabcodemedia-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,r.kt)("b",null,"media"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/media"},(0,r.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The associate media of the airing episode")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/examples/default/queries/airing-schedule"},(0,r.kt)("inlineCode",{parentName:"a"},"AiringSchedule"))," ",(0,r.kt)(g,{class:"secondary",text:"query",mdxType:"Badge"})),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/examples/default/objects/airing-schedule-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"AiringScheduleConnection"))," ",(0,r.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/examples/default/objects/airing-schedule-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"AiringScheduleEdge"))," ",(0,r.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/examples/default/objects/internal-page"},(0,r.kt)("inlineCode",{parentName:"a"},"InternalPage"))," ",(0,r.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/examples/default/objects/media"},(0,r.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,r.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/examples/default/objects/page"},(0,r.kt)("inlineCode",{parentName:"a"},"Page"))," ",(0,r.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);