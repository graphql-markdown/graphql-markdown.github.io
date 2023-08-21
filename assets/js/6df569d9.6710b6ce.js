"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[8932],{4137:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var r=n.createContext({}),c=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(r.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,d=e.originalType,r=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=c(a),b=l,h=g["".concat(r,".").concat(b)]||g[b]||u[b]||d;return a?n.createElement(h,i(i({ref:t},s),{},{components:a})):n.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var d=a.length,i=new Array(d);i[0]=b;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o[g]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<d;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},9306:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>h,SpecifiedBy:()=>g,assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>b});var n=a(7462),l=a(7294),d=a(4137);const i={id:"airing-schedule",title:"AiringSchedule",hide_table_of_contents:!1},o=void 0,r={unversionedId:"queries/airing-schedule",id:"queries/airing-schedule",title:"AiringSchedule",description:"Airing schedule query",source:"@site/examples/default/queries/airing-schedule.mdx",sourceDirName:"queries",slug:"/queries/airing-schedule",permalink:"/examples/default/queries/airing-schedule",draft:!1,tags:[],version:"current",frontMatter:{id:"airing-schedule",title:"AiringSchedule",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Activity",permalink:"/examples/default/queries/activity"},next:{title:"AniChartUser",permalink:"/examples/default/queries/ani-chart-user"}},c={},s=()=>(0,d.kt)(l.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,d.kt)(l.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,d.kt)(l.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),b=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>id</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>mediaId</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebmediaidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>episode</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebepisodebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>airingAt</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebairingatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>notYetAired</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebnotyetairedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>id_not</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebid_notbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>id_in</b></code><Bullet /><code>[Int]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebid_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>id_not_in</b></code><Bullet /><code>[Int]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebid_not_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>mediaId_not</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebmediaid_notbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>mediaId_in</b></code><Bullet /><code>[Int]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebmediaid_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>mediaId_not_in</b></code><Bullet /><code>[Int]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebmediaid_not_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>episode_not</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebepisode_notbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>episode_in</b></code><Bullet /><code>[Int]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebepisode_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>episode_not_in</b></code><Bullet /><code>[Int]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebepisode_not_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>episode_greater</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebepisode_greaterbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>episode_lesser</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebepisode_lesserbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>airingAt_greater</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebairingat_greaterbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>airingAt_lesser</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebairingat_lesserbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>sort</b></code><Bullet /><code>[AiringSort]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-airingschedulebsortbcodeairingsort--",level:4},{value:"Type",id:"type",level:3},{value:'<code>AiringSchedule</code> <Badge class="badge badge--secondary" text="object"/>',id:"airingschedule-",level:4}],h=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:o=!1}=e;const[r,c]=(0,l.useState)(o);return(0,d.kt)("details",(0,n.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},r?t:a),r&&i)},m={Bullet:s,SpecifiedBy:g,Badge:u,toc:b,Details:h};function p(e){let{components:t,...a}=e;return(0,d.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Airing schedule query"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"AiringSchedule(\n  id: Int\n  mediaId: Int\n  episode: Int\n  airingAt: Int\n  notYetAired: Boolean\n  id_not: Int\n  id_in: [Int]\n  id_not_in: [Int]\n  mediaId_not: Int\n  mediaId_in: [Int]\n  mediaId_not_in: [Int]\n  episode_not: Int\n  episode_in: [Int]\n  episode_not_in: [Int]\n  episode_greater: Int\n  episode_lesser: Int\n  airingAt_greater: Int\n  airingAt_lesser: Int\n  sort: [AiringSort]\n): AiringSchedule\n")),(0,d.kt)("h3",{id:"arguments"},"Arguments"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebidbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,d.kt)("b",null,"id"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by the id of the airing schedule item")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebmediaidbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,d.kt)("b",null,"mediaId"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by the id of associated media")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebepisodebcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,d.kt)("b",null,"episode"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by the airing episode number")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebairingatbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,d.kt)("b",null,"airingAt"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by the time of airing")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebnotyetairedbcodeboolean-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,d.kt)("b",null,"notYetAired"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,d.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter to episodes that haven't yet aired")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebid_notbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,d.kt)("b",null,"id_not"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by the id of the airing schedule item")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebid_inbcodeint--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,d.kt)("b",null,"id_in"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by the id of the airing schedule item")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebid_not_inbcodeint--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,d.kt)("b",null,"id_not_in"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by the id of the airing schedule item")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebmediaid_notbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,d.kt)("b",null,"mediaId_not"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by the id of associated media")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebmediaid_inbcodeint--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,d.kt)("b",null,"mediaId_in"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by the id of associated media")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebmediaid_not_inbcodeint--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,d.kt)("b",null,"mediaId_not_in"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by the id of associated media")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebepisode_notbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,d.kt)("b",null,"episode_not"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by the airing episode number")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebepisode_inbcodeint--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,d.kt)("b",null,"episode_in"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by the airing episode number")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebepisode_not_inbcodeint--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,d.kt)("b",null,"episode_not_in"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by the airing episode number")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebepisode_greaterbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,d.kt)("b",null,"episode_greater"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by the airing episode number")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebepisode_lesserbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,d.kt)("b",null,"episode_lesser"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by the airing episode number")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebairingat_greaterbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,d.kt)("b",null,"airingAt_greater"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by the time of airing")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebairingat_lesserbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,d.kt)("b",null,"airingAt_lesser"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by the time of airing")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebsortbcodeairingsort--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,d.kt)("b",null,"sort"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/enums/airing-sort"},(0,d.kt)("inlineCode",{parentName:"a"},"[AiringSort]"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The order the results will be returned in")),(0,d.kt)("h3",{id:"type"},"Type"),(0,d.kt)("h4",{id:"airingschedule-"},(0,d.kt)("a",{parentName:"h4",href:"/examples/default/objects/airing-schedule"},(0,d.kt)("inlineCode",{parentName:"a"},"AiringSchedule"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate.")))}p.isMDXComponent=!0}}]);