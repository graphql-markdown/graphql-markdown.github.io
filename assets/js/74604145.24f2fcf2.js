"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7100],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,d=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),h=c(a),m=l,g=h["".concat(d,".").concat(m)]||h[m]||u[m]||i;return a?n.createElement(g,o(o({ref:t},s),{},{components:a})):n.createElement(g,o({ref:t},s))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,o=new Array(i);o[0]=m;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[h]="string"==typeof e?e:l,o[1]=r;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2589:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>g,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var n=a(7462),l=a(7294),i=a(3905);const o={id:"airing-schedule",title:"AiringSchedule",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},r=void 0,d={unversionedId:"queries/airing-schedule",id:"queries/airing-schedule",title:"AiringSchedule",description:"Airing schedule query",source:"@site/examples/schema/queries/airing-schedule.mdx",sourceDirName:"queries",slug:"/queries/airing-schedule",permalink:"/schema/queries/airing-schedule",draft:!1,tags:[],version:"current",frontMatter:{id:"airing-schedule",title:"AiringSchedule",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},s=()=>(0,i.kt)(l.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),h=e=>(0,i.kt)(l.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(l.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>id</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>mediaId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebmediaidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>episode</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebepisodebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>airingAt</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebairingatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>notYetAired</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebnotyetairedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>id_not</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebid_notbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>id_in</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebid_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>id_not_in</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebid_not_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>mediaId_not</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebmediaid_notbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>mediaId_in</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebmediaid_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>mediaId_not_in</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebmediaid_not_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>episode_not</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebepisode_notbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>episode_in</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebepisode_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>episode_not_in</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebepisode_not_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>episode_greater</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebepisode_greaterbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>episode_lesser</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebepisode_lesserbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>airingAt_greater</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebairingat_greaterbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>airingAt_lesser</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-airingschedulebairingat_lesserbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AiringSchedule.<b>sort</b></code><Bullet /><code>[AiringSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-airingschedulebsortbcodeairingsort--",level:4},{value:"Type",id:"type",level:3},{value:'<code>AiringSchedule</code> <Badge class="secondary" text="object"/>',id:"airingschedule-",level:4}],g=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:r=!1}=e;const[d,c]=(0,l.useState)(r);return(0,i.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&o)},k={Bullet:s,SpecifiedBy:h,Badge:u,toc:m,Details:g};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Airing schedule query"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"AiringSchedule(\n  id: Int\n  mediaId: Int\n  episode: Int\n  airingAt: Int\n  notYetAired: Boolean\n  id_not: Int\n  id_in: [Int]\n  id_not_in: [Int]\n  mediaId_not: Int\n  mediaId_in: [Int]\n  mediaId_not_in: [Int]\n  episode_not: Int\n  episode_in: [Int]\n  episode_not_in: [Int]\n  episode_greater: Int\n  episode_lesser: Int\n  airingAt_greater: Int\n  airingAt_lesser: Int\n  sort: [AiringSort]\n): AiringSchedule\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebidbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,i.kt)("b",null,"id"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter by the id of the airing schedule item")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebmediaidbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,i.kt)("b",null,"mediaId"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter by the id of associated media")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebepisodebcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,i.kt)("b",null,"episode"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter by the airing episode number")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebairingatbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,i.kt)("b",null,"airingAt"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter by the time of airing")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebnotyetairedbcodeboolean-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,i.kt)("b",null,"notYetAired"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter to episodes that haven't yet aired")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebid_notbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,i.kt)("b",null,"id_not"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter by the id of the airing schedule item")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebid_inbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,i.kt)("b",null,"id_in"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,i.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter by the id of the airing schedule item")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebid_not_inbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,i.kt)("b",null,"id_not_in"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,i.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter by the id of the airing schedule item")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebmediaid_notbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,i.kt)("b",null,"mediaId_not"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter by the id of associated media")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebmediaid_inbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,i.kt)("b",null,"mediaId_in"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,i.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter by the id of associated media")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebmediaid_not_inbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,i.kt)("b",null,"mediaId_not_in"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,i.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter by the id of associated media")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebepisode_notbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,i.kt)("b",null,"episode_not"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter by the airing episode number")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebepisode_inbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,i.kt)("b",null,"episode_in"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,i.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter by the airing episode number")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebepisode_not_inbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,i.kt)("b",null,"episode_not_in"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,i.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter by the airing episode number")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebepisode_greaterbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,i.kt)("b",null,"episode_greater"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter by the airing episode number")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebepisode_lesserbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,i.kt)("b",null,"episode_lesser"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter by the airing episode number")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebairingat_greaterbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,i.kt)("b",null,"airingAt_greater"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter by the time of airing")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebairingat_lesserbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,i.kt)("b",null,"airingAt_lesser"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter by the time of airing")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingschedulebsortbcodeairingsort--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSchedule.",(0,i.kt)("b",null,"sort"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/airing-sort"},(0,i.kt)("inlineCode",{parentName:"a"},"[AiringSort]"))," ",(0,i.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The order the results will be returned in")),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"airingschedule-"},(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/airing-schedule"},(0,i.kt)("inlineCode",{parentName:"a"},"AiringSchedule"))," ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate.")))}p.isMDXComponent=!0}}]);