"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9706],{3905:(t,e,s)=>{s.d(e,{Zo:()=>d,kt:()=>y});var a=s(7294);function r(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function o(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function i(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?o(Object(s),!0).forEach((function(e){r(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function c(t,e){if(null==t)return{};var s,a,r=function(t,e){if(null==t)return{};var s,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)s=o[a],e.indexOf(s)>=0||(r[s]=t[s]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)s=o[a],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(t,s)&&(r[s]=t[s])}return r}var l=a.createContext({}),n=function(t){var e=a.useContext(l),s=e;return t&&(s="function"==typeof t?t(e):i(i({},e),t)),s},d=function(t){var e=n(t.components);return a.createElement(l.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var s=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),m=n(s),k=r,y=m["".concat(l,".").concat(k)]||m[k]||u[k]||o;return s?a.createElement(y,i(i({ref:e},d),{},{components:s})):a.createElement(y,i({ref:e},d))}));function y(t,e){var s=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=s.length,i=new Array(o);i[0]=k;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[m]="string"==typeof t?t:r,i[1]=c;for(var n=2;n<o;n++)i[n]=s[n];return a.createElement.apply(null,i)}return a.createElement.apply(null,s)}k.displayName="MDXCreateElement"},1256:(t,e,s)=>{s.r(e),s.d(e,{Badge:()=>u,Bullet:()=>d,Details:()=>y,SpecifiedBy:()=>m,assets:()=>n,contentTitle:()=>c,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>k});var a=s(7462),r=s(7294),o=s(3905);const i={id:"user-statistics",title:"UserStatistics",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},c=void 0,l={unversionedId:"objects/user-statistics",id:"objects/user-statistics",title:"UserStatistics",description:"No description",source:"@site/examples/schema/objects/user-statistics.mdx",sourceDirName:"objects",slug:"/objects/user-statistics",permalink:"/schema/objects/user-statistics",draft:!1,tags:[],version:"current",frontMatter:{id:"user-statistics",title:"UserStatistics",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},n={},d=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=t=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),u=t=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+t.class},t.text)),k=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.<b>count</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userstatisticsbcountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.<b>meanScore</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userstatisticsbmeanscorebcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.<b>standardDeviation</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userstatisticsbstandarddeviationbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.<b>minutesWatched</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userstatisticsbminuteswatchedbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.<b>episodesWatched</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userstatisticsbepisodeswatchedbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.<b>chaptersRead</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userstatisticsbchaptersreadbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.<b>volumesRead</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userstatisticsbvolumesreadbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.<b>formats</b></code><Bullet /><code>[UserFormatStatistic]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userstatisticsbformatsbcodeuserformatstatistic--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.formats.<b>sort</b></code><Bullet /><code>[UserStatisticsSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-userstatisticsformatsbsortbcodeuserstatisticssort--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.<b>statuses</b></code><Bullet /><code>[UserStatusStatistic]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userstatisticsbstatusesbcodeuserstatusstatistic--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.statuses.<b>sort</b></code><Bullet /><code>[UserStatisticsSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-userstatisticsstatusesbsortbcodeuserstatisticssort--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.<b>scores</b></code><Bullet /><code>[UserScoreStatistic]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userstatisticsbscoresbcodeuserscorestatistic--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.scores.<b>sort</b></code><Bullet /><code>[UserStatisticsSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-userstatisticsscoresbsortbcodeuserstatisticssort--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.<b>lengths</b></code><Bullet /><code>[UserLengthStatistic]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userstatisticsblengthsbcodeuserlengthstatistic--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.lengths.<b>sort</b></code><Bullet /><code>[UserStatisticsSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-userstatisticslengthsbsortbcodeuserstatisticssort--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.<b>releaseYears</b></code><Bullet /><code>[UserReleaseYearStatistic]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userstatisticsbreleaseyearsbcodeuserreleaseyearstatistic--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.releaseYears.<b>sort</b></code><Bullet /><code>[UserStatisticsSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-userstatisticsreleaseyearsbsortbcodeuserstatisticssort--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.<b>startYears</b></code><Bullet /><code>[UserStartYearStatistic]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userstatisticsbstartyearsbcodeuserstartyearstatistic--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.startYears.<b>sort</b></code><Bullet /><code>[UserStatisticsSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-userstatisticsstartyearsbsortbcodeuserstatisticssort--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.<b>genres</b></code><Bullet /><code>[UserGenreStatistic]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userstatisticsbgenresbcodeusergenrestatistic--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.genres.<b>sort</b></code><Bullet /><code>[UserStatisticsSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-userstatisticsgenresbsortbcodeuserstatisticssort--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.<b>tags</b></code><Bullet /><code>[UserTagStatistic]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userstatisticsbtagsbcodeusertagstatistic--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.tags.<b>sort</b></code><Bullet /><code>[UserStatisticsSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-userstatisticstagsbsortbcodeuserstatisticssort--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.<b>countries</b></code><Bullet /><code>[UserCountryStatistic]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userstatisticsbcountriesbcodeusercountrystatistic--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.countries.<b>sort</b></code><Bullet /><code>[UserStatisticsSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-userstatisticscountriesbsortbcodeuserstatisticssort--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.<b>voiceActors</b></code><Bullet /><code>[UserVoiceActorStatistic]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userstatisticsbvoiceactorsbcodeuservoiceactorstatistic--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.voiceActors.<b>sort</b></code><Bullet /><code>[UserStatisticsSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-userstatisticsvoiceactorsbsortbcodeuserstatisticssort--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.<b>staff</b></code><Bullet /><code>[UserStaffStatistic]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userstatisticsbstaffbcodeuserstaffstatistic--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.staff.<b>sort</b></code><Bullet /><code>[UserStatisticsSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-userstatisticsstaffbsortbcodeuserstatisticssort--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.<b>studios</b></code><Bullet /><code>[UserStudioStatistic]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userstatisticsbstudiosbcodeuserstudiostatistic--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStatistics.studios.<b>sort</b></code><Bullet /><code>[UserStatisticsSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-userstatisticsstudiosbsortbcodeuserstatisticssort--",level:5},{value:"Member of",id:"member-of",level:3}],y=t=>{let{dataOpen:e,dataClose:s,children:i,startOpen:c=!1}=t;const[l,n]=(0,r.useState)(c);return(0,o.kt)("details",(0,a.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:t=>{t.preventDefault(),n((t=>!t))},style:{listStyle:"none"}},l?e:s),l&&i)},h={Bullet:d,SpecifiedBy:m,Badge:u,toc:k,Details:y};function b(t){let{components:e,...s}=t;return(0,o.kt)("wrapper",(0,a.Z)({},h,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserStatistics {\n  count: Int!\n  meanScore: Float!\n  standardDeviation: Float!\n  minutesWatched: Int!\n  episodesWatched: Int!\n  chaptersRead: Int!\n  volumesRead: Int!\n  formats(limit: Int, sort: [UserStatisticsSort]): [UserFormatStatistic]\n  statuses(limit: Int, sort: [UserStatisticsSort]): [UserStatusStatistic]\n  scores(limit: Int, sort: [UserStatisticsSort]): [UserScoreStatistic]\n  lengths(limit: Int, sort: [UserStatisticsSort]): [UserLengthStatistic]\n  releaseYears(\n    limit: Int\n    sort: [UserStatisticsSort]\n  ): [UserReleaseYearStatistic]\n  startYears(limit: Int, sort: [UserStatisticsSort]): [UserStartYearStatistic]\n  genres(limit: Int, sort: [UserStatisticsSort]): [UserGenreStatistic]\n  tags(limit: Int, sort: [UserStatisticsSort]): [UserTagStatistic]\n  countries(limit: Int, sort: [UserStatisticsSort]): [UserCountryStatistic]\n  voiceActors(limit: Int, sort: [UserStatisticsSort]): [UserVoiceActorStatistic]\n  staff(limit: Int, sort: [UserStatisticsSort]): [UserStaffStatistic]\n  studios(limit: Int, sort: [UserStatisticsSort]): [UserStudioStatistic]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userstatisticsbcountbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.",(0,o.kt)("b",null,"count"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userstatisticsbmeanscorebcodefloat--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.",(0,o.kt)("b",null,"meanScore"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userstatisticsbstandarddeviationbcodefloat--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.",(0,o.kt)("b",null,"standardDeviation"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userstatisticsbminuteswatchedbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.",(0,o.kt)("b",null,"minutesWatched"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userstatisticsbepisodeswatchedbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.",(0,o.kt)("b",null,"episodesWatched"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userstatisticsbchaptersreadbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.",(0,o.kt)("b",null,"chaptersRead"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userstatisticsbvolumesreadbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.",(0,o.kt)("b",null,"volumesRead"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userstatisticsbformatsbcodeuserformatstatistic--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.",(0,o.kt)("b",null,"formats"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user-format-statistic"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserFormatStatistic]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-userstatisticsformatsblimitbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.formats.",(0,o.kt)("b",null,"limit"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-userstatisticsformatsbsortbcodeuserstatisticssort--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.formats.",(0,o.kt)("b",null,"sort"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/enums/user-statistics-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserStatisticsSort]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userstatisticsbstatusesbcodeuserstatusstatistic--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.",(0,o.kt)("b",null,"statuses"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user-status-statistic"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserStatusStatistic]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-userstatisticsstatusesblimitbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.statuses.",(0,o.kt)("b",null,"limit"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-userstatisticsstatusesbsortbcodeuserstatisticssort--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.statuses.",(0,o.kt)("b",null,"sort"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/enums/user-statistics-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserStatisticsSort]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userstatisticsbscoresbcodeuserscorestatistic--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.",(0,o.kt)("b",null,"scores"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user-score-statistic"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserScoreStatistic]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-userstatisticsscoresblimitbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.scores.",(0,o.kt)("b",null,"limit"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-userstatisticsscoresbsortbcodeuserstatisticssort--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.scores.",(0,o.kt)("b",null,"sort"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/enums/user-statistics-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserStatisticsSort]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userstatisticsblengthsbcodeuserlengthstatistic--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.",(0,o.kt)("b",null,"lengths"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user-length-statistic"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserLengthStatistic]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-userstatisticslengthsblimitbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.lengths.",(0,o.kt)("b",null,"limit"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-userstatisticslengthsbsortbcodeuserstatisticssort--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.lengths.",(0,o.kt)("b",null,"sort"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/enums/user-statistics-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserStatisticsSort]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userstatisticsbreleaseyearsbcodeuserreleaseyearstatistic--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.",(0,o.kt)("b",null,"releaseYears"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user-release-year-statistic"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserReleaseYearStatistic]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-userstatisticsreleaseyearsblimitbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.releaseYears.",(0,o.kt)("b",null,"limit"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-userstatisticsreleaseyearsbsortbcodeuserstatisticssort--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.releaseYears.",(0,o.kt)("b",null,"sort"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/enums/user-statistics-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserStatisticsSort]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userstatisticsbstartyearsbcodeuserstartyearstatistic--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.",(0,o.kt)("b",null,"startYears"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user-start-year-statistic"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserStartYearStatistic]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-userstatisticsstartyearsblimitbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.startYears.",(0,o.kt)("b",null,"limit"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-userstatisticsstartyearsbsortbcodeuserstatisticssort--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.startYears.",(0,o.kt)("b",null,"sort"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/enums/user-statistics-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserStatisticsSort]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userstatisticsbgenresbcodeusergenrestatistic--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.",(0,o.kt)("b",null,"genres"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user-genre-statistic"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserGenreStatistic]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-userstatisticsgenresblimitbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.genres.",(0,o.kt)("b",null,"limit"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-userstatisticsgenresbsortbcodeuserstatisticssort--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.genres.",(0,o.kt)("b",null,"sort"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/enums/user-statistics-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserStatisticsSort]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userstatisticsbtagsbcodeusertagstatistic--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.",(0,o.kt)("b",null,"tags"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user-tag-statistic"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserTagStatistic]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-userstatisticstagsblimitbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.tags.",(0,o.kt)("b",null,"limit"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-userstatisticstagsbsortbcodeuserstatisticssort--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.tags.",(0,o.kt)("b",null,"sort"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/enums/user-statistics-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserStatisticsSort]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userstatisticsbcountriesbcodeusercountrystatistic--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.",(0,o.kt)("b",null,"countries"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user-country-statistic"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserCountryStatistic]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-userstatisticscountriesblimitbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.countries.",(0,o.kt)("b",null,"limit"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-userstatisticscountriesbsortbcodeuserstatisticssort--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.countries.",(0,o.kt)("b",null,"sort"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/enums/user-statistics-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserStatisticsSort]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userstatisticsbvoiceactorsbcodeuservoiceactorstatistic--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.",(0,o.kt)("b",null,"voiceActors"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user-voice-actor-statistic"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserVoiceActorStatistic]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-userstatisticsvoiceactorsblimitbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.voiceActors.",(0,o.kt)("b",null,"limit"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-userstatisticsvoiceactorsbsortbcodeuserstatisticssort--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.voiceActors.",(0,o.kt)("b",null,"sort"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/enums/user-statistics-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserStatisticsSort]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userstatisticsbstaffbcodeuserstaffstatistic--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.",(0,o.kt)("b",null,"staff"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user-staff-statistic"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserStaffStatistic]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-userstatisticsstaffblimitbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.staff.",(0,o.kt)("b",null,"limit"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-userstatisticsstaffbsortbcodeuserstatisticssort--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.staff.",(0,o.kt)("b",null,"sort"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/enums/user-statistics-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserStatisticsSort]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userstatisticsbstudiosbcodeuserstudiostatistic--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.",(0,o.kt)("b",null,"studios"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user-studio-statistic"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserStudioStatistic]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-userstatisticsstudiosblimitbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.studios.",(0,o.kt)("b",null,"limit"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-userstatisticsstudiosbsortbcodeuserstatisticssort--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStatistics.studios.",(0,o.kt)("b",null,"sort"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/enums/user-statistics-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserStatisticsSort]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/schema/objects/user-statistic-types"},(0,o.kt)("inlineCode",{parentName:"a"},"UserStatisticTypes"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);