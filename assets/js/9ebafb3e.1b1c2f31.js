"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2179],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,d=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(a),k=r,y=m["".concat(i,".").concat(k)]||m[k]||p[k]||d;return a?n.createElement(y,l(l({ref:t},s),{},{components:a})):n.createElement(y,l({ref:t},s))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=a.length,l=new Array(d);l[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<d;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6583:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>k,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(7462),r=a(7294),d=a(3905);const l={id:"media-trend",title:"MediaTrend",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,i={unversionedId:"queries/media-trend",id:"queries/media-trend",title:"MediaTrend",description:"Media Trend query",source:"@site/examples/schema/queries/media-trend.mdx",sourceDirName:"queries",slug:"/queries/media-trend",permalink:"/schema/queries/media-trend",draft:!1,tags:[],version:"current",frontMatter:{id:"media-trend",title:"MediaTrend",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},s=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>mediaId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbmediaidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>date</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbdatebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>trending</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbtrendingbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>averageScore</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbaveragescorebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>popularity</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbpopularitybcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>episode</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbepisodebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>releasing</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbreleasingbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>mediaId_not</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbmediaid_notbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>mediaId_in</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbmediaid_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>mediaId_not_in</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbmediaid_not_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>date_greater</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbdate_greaterbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>date_lesser</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbdate_lesserbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>trending_greater</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbtrending_greaterbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>trending_lesser</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbtrending_lesserbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>trending_not</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbtrending_notbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>averageScore_greater</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbaveragescore_greaterbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>averageScore_lesser</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbaveragescore_lesserbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>averageScore_not</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbaveragescore_notbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>popularity_greater</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbpopularity_greaterbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>popularity_lesser</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbpopularity_lesserbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>popularity_not</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbpopularity_notbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>episode_greater</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbepisode_greaterbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>episode_lesser</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbepisode_lesserbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>episode_not</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbepisode_notbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>sort</b></code><Bullet /><code>[MediaTrendSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-mediatrendbsortbcodemediatrendsort--",level:4},{value:"Type",id:"type",level:3},{value:'<code>MediaTrend</code> <Badge class="secondary" text="object"/>',id:"mediatrend-",level:4}],m=()=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,d.kt)(r.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:m,SpecifiedBy:p,Badge:k};function b(e){let{components:t,...a}=e;return(0,d.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Media Trend query"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"MediaTrend(\n  mediaId: Int\n  date: Int\n  trending: Int\n  averageScore: Int\n  popularity: Int\n  episode: Int\n  releasing: Boolean\n  mediaId_not: Int\n  mediaId_in: [Int]\n  mediaId_not_in: [Int]\n  date_greater: Int\n  date_lesser: Int\n  trending_greater: Int\n  trending_lesser: Int\n  trending_not: Int\n  averageScore_greater: Int\n  averageScore_lesser: Int\n  averageScore_not: Int\n  popularity_greater: Int\n  popularity_lesser: Int\n  popularity_not: Int\n  episode_greater: Int\n  episode_lesser: Int\n  episode_not: Int\n  sort: [MediaTrendSort]\n): MediaTrend\n")),(0,d.kt)("h3",{id:"arguments"},"Arguments"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbmediaidbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"mediaId"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by the media id")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbdatebcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"date"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by date")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbtrendingbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"trending"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by trending amount")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbaveragescorebcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"averageScore"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by score")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbpopularitybcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"popularity"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by popularity")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbepisodebcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"episode"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by episode number")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbreleasingbcodeboolean-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"releasing"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,d.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,d.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter to stats recorded while the media was releasing")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbmediaid_notbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"mediaId_not"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by the media id")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbmediaid_inbcodeint--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"mediaId_in"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,d.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by the media id")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbmediaid_not_inbcodeint--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"mediaId_not_in"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,d.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by the media id")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbdate_greaterbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"date_greater"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by date")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbdate_lesserbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"date_lesser"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by date")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbtrending_greaterbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"trending_greater"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by trending amount")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbtrending_lesserbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"trending_lesser"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by trending amount")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbtrending_notbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"trending_not"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by trending amount")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbaveragescore_greaterbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"averageScore_greater"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by score")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbaveragescore_lesserbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"averageScore_lesser"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by score")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbaveragescore_notbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"averageScore_not"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by score")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbpopularity_greaterbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"popularity_greater"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by popularity")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbpopularity_lesserbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"popularity_lesser"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by popularity")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbpopularity_notbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"popularity_not"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by popularity")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbepisode_greaterbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"episode_greater"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by episode number")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbepisode_lesserbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"episode_lesser"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by episode number")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbepisode_notbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"episode_not"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by episode number")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbsortbcodemediatrendsort--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"sort"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/enums/media-trend-sort"},(0,d.kt)("inlineCode",{parentName:"a"},"[MediaTrendSort]"))," ",(0,d.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The order the results will be returned in")),(0,d.kt)("h3",{id:"type"},"Type"),(0,d.kt)("h4",{id:"mediatrend-"},(0,d.kt)("a",{parentName:"h4",href:"/schema/objects/media-trend"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaTrend"))," ",(0,d.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Daily media statistics")))}b.isMDXComponent=!0}}]);