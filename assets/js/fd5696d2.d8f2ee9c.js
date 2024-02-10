"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[189],{7882:(s,e,t)=>{t.r(e),t.d(e,{Badge:()=>x,Bullet:()=>o,Details:()=>u,SpecifiedBy:()=>g,assets:()=>n,contentTitle:()=>r,default:()=>j,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var a=t(5893),c=t(1151),i=t(7294);const d={pagination_next:null,pagination_prev:null,id:"user-statistics",title:"UserStatistics"},r=void 0,l={id:"types/objects/user-statistics",title:"UserStatistics",description:"No description",source:"@site/examples/default/types/objects/user-statistics.mdx",sourceDirName:"types/objects",slug:"/types/objects/user-statistics",permalink:"/examples/default/types/objects/user-statistics",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"user-statistics",title:"UserStatistics"},sidebar:"schemaSidebar"},n={},o=()=>{const s={span:"span",...(0,c.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=s=>{const e={a:"a",...(0,c.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(e.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:s.url,title:"Specified by "+s.url,children:"\u2398"})]})},x=s=>{const e={span:"span",...(0,c.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{className:s.class,children:s.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>UserStatistics.<b>count</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticscountint--",level:4},{value:'<code>UserStatistics.<b>meanScore</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsmeanscorefloat--",level:4},{value:'<code>UserStatistics.<b>standardDeviation</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsstandarddeviationfloat--",level:4},{value:'<code>UserStatistics.<b>minutesWatched</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsminuteswatchedint--",level:4},{value:'<code>UserStatistics.<b>episodesWatched</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsepisodeswatchedint--",level:4},{value:'<code>UserStatistics.<b>chaptersRead</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticschaptersreadint--",level:4},{value:'<code>UserStatistics.<b>volumesRead</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsvolumesreadint--",level:4},{value:'<code>UserStatistics.<b>formats</b></code><Bullet></Bullet><code>[UserFormatStatistic]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsformatsuserformatstatistic--",level:4},{value:'<code>UserStatistics.formats.<b>limit</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsformatslimitint-",level:5},{value:'<code>UserStatistics.formats.<b>sort</b></code><Bullet></Bullet><code>[UserStatisticsSort]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsformatssortuserstatisticssort--",level:5},{value:'<code>UserStatistics.<b>statuses</b></code><Bullet></Bullet><code>[UserStatusStatistic]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsstatusesuserstatusstatistic--",level:4},{value:'<code>UserStatistics.statuses.<b>limit</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsstatuseslimitint-",level:5},{value:'<code>UserStatistics.statuses.<b>sort</b></code><Bullet></Bullet><code>[UserStatisticsSort]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsstatusessortuserstatisticssort--",level:5},{value:'<code>UserStatistics.<b>scores</b></code><Bullet></Bullet><code>[UserScoreStatistic]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsscoresuserscorestatistic--",level:4},{value:'<code>UserStatistics.scores.<b>limit</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsscoreslimitint-",level:5},{value:'<code>UserStatistics.scores.<b>sort</b></code><Bullet></Bullet><code>[UserStatisticsSort]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsscoressortuserstatisticssort--",level:5},{value:'<code>UserStatistics.<b>lengths</b></code><Bullet></Bullet><code>[UserLengthStatistic]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticslengthsuserlengthstatistic--",level:4},{value:'<code>UserStatistics.lengths.<b>limit</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticslengthslimitint-",level:5},{value:'<code>UserStatistics.lengths.<b>sort</b></code><Bullet></Bullet><code>[UserStatisticsSort]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticslengthssortuserstatisticssort--",level:5},{value:'<code>UserStatistics.<b>releaseYears</b></code><Bullet></Bullet><code>[UserReleaseYearStatistic]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsreleaseyearsuserreleaseyearstatistic--",level:4},{value:'<code>UserStatistics.releaseYears.<b>limit</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsreleaseyearslimitint-",level:5},{value:'<code>UserStatistics.releaseYears.<b>sort</b></code><Bullet></Bullet><code>[UserStatisticsSort]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsreleaseyearssortuserstatisticssort--",level:5},{value:'<code>UserStatistics.<b>startYears</b></code><Bullet></Bullet><code>[UserStartYearStatistic]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsstartyearsuserstartyearstatistic--",level:4},{value:'<code>UserStatistics.startYears.<b>limit</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsstartyearslimitint-",level:5},{value:'<code>UserStatistics.startYears.<b>sort</b></code><Bullet></Bullet><code>[UserStatisticsSort]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsstartyearssortuserstatisticssort--",level:5},{value:'<code>UserStatistics.<b>genres</b></code><Bullet></Bullet><code>[UserGenreStatistic]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsgenresusergenrestatistic--",level:4},{value:'<code>UserStatistics.genres.<b>limit</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsgenreslimitint-",level:5},{value:'<code>UserStatistics.genres.<b>sort</b></code><Bullet></Bullet><code>[UserStatisticsSort]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsgenressortuserstatisticssort--",level:5},{value:'<code>UserStatistics.<b>tags</b></code><Bullet></Bullet><code>[UserTagStatistic]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticstagsusertagstatistic--",level:4},{value:'<code>UserStatistics.tags.<b>limit</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticstagslimitint-",level:5},{value:'<code>UserStatistics.tags.<b>sort</b></code><Bullet></Bullet><code>[UserStatisticsSort]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticstagssortuserstatisticssort--",level:5},{value:'<code>UserStatistics.<b>countries</b></code><Bullet></Bullet><code>[UserCountryStatistic]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticscountriesusercountrystatistic--",level:4},{value:'<code>UserStatistics.countries.<b>limit</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticscountrieslimitint-",level:5},{value:'<code>UserStatistics.countries.<b>sort</b></code><Bullet></Bullet><code>[UserStatisticsSort]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticscountriessortuserstatisticssort--",level:5},{value:'<code>UserStatistics.<b>voiceActors</b></code><Bullet></Bullet><code>[UserVoiceActorStatistic]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsvoiceactorsuservoiceactorstatistic--",level:4},{value:'<code>UserStatistics.voiceActors.<b>limit</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsvoiceactorslimitint-",level:5},{value:'<code>UserStatistics.voiceActors.<b>sort</b></code><Bullet></Bullet><code>[UserStatisticsSort]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsvoiceactorssortuserstatisticssort--",level:5},{value:'<code>UserStatistics.<b>staff</b></code><Bullet></Bullet><code>[UserStaffStatistic]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsstaffuserstaffstatistic--",level:4},{value:'<code>UserStatistics.staff.<b>limit</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsstafflimitint-",level:5},{value:'<code>UserStatistics.staff.<b>sort</b></code><Bullet></Bullet><code>[UserStatisticsSort]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsstaffsortuserstatisticssort--",level:5},{value:'<code>UserStatistics.<b>studios</b></code><Bullet></Bullet><code>[UserStudioStatistic]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsstudiosuserstudiostatistic--",level:4},{value:'<code>UserStatistics.studios.<b>limit</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsstudioslimitint-",level:5},{value:'<code>UserStatistics.studios.<b>sort</b></code><Bullet></Bullet><code>[UserStatisticsSort]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstatisticsstudiossortuserstatisticssort--",level:5},{value:"Member Of",id:"member-of",level:3}],u=({dataOpen:s,dataClose:e,children:t,startOpen:d=!1})=>{const r={details:"details",summary:"summary",...(0,c.a)()},[l,n]=(0,i.useState)(d);return(0,a.jsxs)(r.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(r.summary,{onClick:s=>{s.preventDefault(),n((s=>!s))},style:{listStyle:"none"},children:l?s:e}),l&&t]})};function b(s){const e={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,c.a)(),...s.components},{Head:t}=e;return t||function(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t,{children:[(0,a.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,a.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,a.jsx)(e.p,{children:"No description"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-graphql",children:"type UserStatistics {\n  count: Int!\n  meanScore: Float!\n  standardDeviation: Float!\n  minutesWatched: Int!\n  episodesWatched: Int!\n  chaptersRead: Int!\n  volumesRead: Int!\n  formats(limit: Int, sort: [UserStatisticsSort]): [UserFormatStatistic]\n  statuses(limit: Int, sort: [UserStatisticsSort]): [UserStatusStatistic]\n  scores(limit: Int, sort: [UserStatisticsSort]): [UserScoreStatistic]\n  lengths(limit: Int, sort: [UserStatisticsSort]): [UserLengthStatistic]\n  releaseYears(\n    limit: Int\n    sort: [UserStatisticsSort]\n  ): [UserReleaseYearStatistic]\n  startYears(limit: Int, sort: [UserStatisticsSort]): [UserStartYearStatistic]\n  genres(limit: Int, sort: [UserStatisticsSort]): [UserGenreStatistic]\n  tags(limit: Int, sort: [UserStatisticsSort]): [UserTagStatistic]\n  countries(limit: Int, sort: [UserStatisticsSort]): [UserCountryStatistic]\n  voiceActors(limit: Int, sort: [UserStatisticsSort]): [UserVoiceActorStatistic]\n  staff(limit: Int, sort: [UserStatisticsSort]): [UserStaffStatistic]\n  studios(limit: Int, sort: [UserStatisticsSort]): [UserStudioStatistic]\n}\n"})}),"\n",(0,a.jsx)(e.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(e.h4,{id:"userstatisticscountint--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.",(0,a.jsx)("b",{children:"count"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(e.code,{children:"Int!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(e.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(e.h4,{id:"userstatisticsmeanscorefloat--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.",(0,a.jsx)("b",{children:"meanScore"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/scalars/float",children:(0,a.jsx)(e.code,{children:"Float!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(e.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(e.h4,{id:"userstatisticsstandarddeviationfloat--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.",(0,a.jsx)("b",{children:"standardDeviation"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/scalars/float",children:(0,a.jsx)(e.code,{children:"Float!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(e.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(e.h4,{id:"userstatisticsminuteswatchedint--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.",(0,a.jsx)("b",{children:"minutesWatched"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(e.code,{children:"Int!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(e.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(e.h4,{id:"userstatisticsepisodeswatchedint--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.",(0,a.jsx)("b",{children:"episodesWatched"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(e.code,{children:"Int!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(e.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(e.h4,{id:"userstatisticschaptersreadint--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.",(0,a.jsx)("b",{children:"chaptersRead"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(e.code,{children:"Int!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(e.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(e.h4,{id:"userstatisticsvolumesreadint--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.",(0,a.jsx)("b",{children:"volumesRead"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(e.code,{children:"Int!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(e.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(e.h4,{id:"userstatisticsformatsuserformatstatistic--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.",(0,a.jsx)("b",{children:"formats"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/objects/user-format-statistic",children:(0,a.jsx)(e.code,{children:"[UserFormatStatistic]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsxs)(e.h5,{id:"userstatisticsformatslimitint-",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.formats.",(0,a.jsx)("b",{children:"limit"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(e.code,{children:"Int"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n"]}),"\n",(0,a.jsxs)(e.h5,{id:"userstatisticsformatssortuserstatisticssort--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.formats.",(0,a.jsx)("b",{children:"sort"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/enums/user-statistics-sort",children:(0,a.jsx)(e.code,{children:"[UserStatisticsSort]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(e.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(e.h4,{id:"userstatisticsstatusesuserstatusstatistic--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.",(0,a.jsx)("b",{children:"statuses"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/objects/user-status-statistic",children:(0,a.jsx)(e.code,{children:"[UserStatusStatistic]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsxs)(e.h5,{id:"userstatisticsstatuseslimitint-",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.statuses.",(0,a.jsx)("b",{children:"limit"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(e.code,{children:"Int"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n"]}),"\n",(0,a.jsxs)(e.h5,{id:"userstatisticsstatusessortuserstatisticssort--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.statuses.",(0,a.jsx)("b",{children:"sort"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/enums/user-statistics-sort",children:(0,a.jsx)(e.code,{children:"[UserStatisticsSort]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(e.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(e.h4,{id:"userstatisticsscoresuserscorestatistic--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.",(0,a.jsx)("b",{children:"scores"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/objects/user-score-statistic",children:(0,a.jsx)(e.code,{children:"[UserScoreStatistic]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsxs)(e.h5,{id:"userstatisticsscoreslimitint-",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.scores.",(0,a.jsx)("b",{children:"limit"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(e.code,{children:"Int"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n"]}),"\n",(0,a.jsxs)(e.h5,{id:"userstatisticsscoressortuserstatisticssort--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.scores.",(0,a.jsx)("b",{children:"sort"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/enums/user-statistics-sort",children:(0,a.jsx)(e.code,{children:"[UserStatisticsSort]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(e.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(e.h4,{id:"userstatisticslengthsuserlengthstatistic--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.",(0,a.jsx)("b",{children:"lengths"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/objects/user-length-statistic",children:(0,a.jsx)(e.code,{children:"[UserLengthStatistic]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsxs)(e.h5,{id:"userstatisticslengthslimitint-",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.lengths.",(0,a.jsx)("b",{children:"limit"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(e.code,{children:"Int"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n"]}),"\n",(0,a.jsxs)(e.h5,{id:"userstatisticslengthssortuserstatisticssort--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.lengths.",(0,a.jsx)("b",{children:"sort"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/enums/user-statistics-sort",children:(0,a.jsx)(e.code,{children:"[UserStatisticsSort]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(e.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(e.h4,{id:"userstatisticsreleaseyearsuserreleaseyearstatistic--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.",(0,a.jsx)("b",{children:"releaseYears"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/objects/user-release-year-statistic",children:(0,a.jsx)(e.code,{children:"[UserReleaseYearStatistic]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsxs)(e.h5,{id:"userstatisticsreleaseyearslimitint-",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.releaseYears.",(0,a.jsx)("b",{children:"limit"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(e.code,{children:"Int"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n"]}),"\n",(0,a.jsxs)(e.h5,{id:"userstatisticsreleaseyearssortuserstatisticssort--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.releaseYears.",(0,a.jsx)("b",{children:"sort"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/enums/user-statistics-sort",children:(0,a.jsx)(e.code,{children:"[UserStatisticsSort]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(e.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(e.h4,{id:"userstatisticsstartyearsuserstartyearstatistic--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.",(0,a.jsx)("b",{children:"startYears"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/objects/user-start-year-statistic",children:(0,a.jsx)(e.code,{children:"[UserStartYearStatistic]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsxs)(e.h5,{id:"userstatisticsstartyearslimitint-",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.startYears.",(0,a.jsx)("b",{children:"limit"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(e.code,{children:"Int"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n"]}),"\n",(0,a.jsxs)(e.h5,{id:"userstatisticsstartyearssortuserstatisticssort--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.startYears.",(0,a.jsx)("b",{children:"sort"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/enums/user-statistics-sort",children:(0,a.jsx)(e.code,{children:"[UserStatisticsSort]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(e.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(e.h4,{id:"userstatisticsgenresusergenrestatistic--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.",(0,a.jsx)("b",{children:"genres"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/objects/user-genre-statistic",children:(0,a.jsx)(e.code,{children:"[UserGenreStatistic]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsxs)(e.h5,{id:"userstatisticsgenreslimitint-",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.genres.",(0,a.jsx)("b",{children:"limit"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(e.code,{children:"Int"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n"]}),"\n",(0,a.jsxs)(e.h5,{id:"userstatisticsgenressortuserstatisticssort--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.genres.",(0,a.jsx)("b",{children:"sort"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/enums/user-statistics-sort",children:(0,a.jsx)(e.code,{children:"[UserStatisticsSort]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(e.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(e.h4,{id:"userstatisticstagsusertagstatistic--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.",(0,a.jsx)("b",{children:"tags"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/objects/user-tag-statistic",children:(0,a.jsx)(e.code,{children:"[UserTagStatistic]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsxs)(e.h5,{id:"userstatisticstagslimitint-",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.tags.",(0,a.jsx)("b",{children:"limit"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(e.code,{children:"Int"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n"]}),"\n",(0,a.jsxs)(e.h5,{id:"userstatisticstagssortuserstatisticssort--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.tags.",(0,a.jsx)("b",{children:"sort"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/enums/user-statistics-sort",children:(0,a.jsx)(e.code,{children:"[UserStatisticsSort]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(e.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(e.h4,{id:"userstatisticscountriesusercountrystatistic--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.",(0,a.jsx)("b",{children:"countries"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/objects/user-country-statistic",children:(0,a.jsx)(e.code,{children:"[UserCountryStatistic]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsxs)(e.h5,{id:"userstatisticscountrieslimitint-",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.countries.",(0,a.jsx)("b",{children:"limit"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(e.code,{children:"Int"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n"]}),"\n",(0,a.jsxs)(e.h5,{id:"userstatisticscountriessortuserstatisticssort--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.countries.",(0,a.jsx)("b",{children:"sort"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/enums/user-statistics-sort",children:(0,a.jsx)(e.code,{children:"[UserStatisticsSort]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(e.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(e.h4,{id:"userstatisticsvoiceactorsuservoiceactorstatistic--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.",(0,a.jsx)("b",{children:"voiceActors"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/objects/user-voice-actor-statistic",children:(0,a.jsx)(e.code,{children:"[UserVoiceActorStatistic]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsxs)(e.h5,{id:"userstatisticsvoiceactorslimitint-",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.voiceActors.",(0,a.jsx)("b",{children:"limit"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(e.code,{children:"Int"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n"]}),"\n",(0,a.jsxs)(e.h5,{id:"userstatisticsvoiceactorssortuserstatisticssort--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.voiceActors.",(0,a.jsx)("b",{children:"sort"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/enums/user-statistics-sort",children:(0,a.jsx)(e.code,{children:"[UserStatisticsSort]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(e.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(e.h4,{id:"userstatisticsstaffuserstaffstatistic--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.",(0,a.jsx)("b",{children:"staff"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/objects/user-staff-statistic",children:(0,a.jsx)(e.code,{children:"[UserStaffStatistic]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsxs)(e.h5,{id:"userstatisticsstafflimitint-",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.staff.",(0,a.jsx)("b",{children:"limit"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(e.code,{children:"Int"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n"]}),"\n",(0,a.jsxs)(e.h5,{id:"userstatisticsstaffsortuserstatisticssort--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.staff.",(0,a.jsx)("b",{children:"sort"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/enums/user-statistics-sort",children:(0,a.jsx)(e.code,{children:"[UserStatisticsSort]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(e.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(e.h4,{id:"userstatisticsstudiosuserstudiostatistic--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.",(0,a.jsx)("b",{children:"studios"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/objects/user-studio-statistic",children:(0,a.jsx)(e.code,{children:"[UserStudioStatistic]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsxs)(e.h5,{id:"userstatisticsstudioslimitint-",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.studios.",(0,a.jsx)("b",{children:"limit"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(e.code,{children:"Int"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n"]}),"\n",(0,a.jsxs)(e.h5,{id:"userstatisticsstudiossortuserstatisticssort--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserStatistics.studios.",(0,a.jsx)("b",{children:"sort"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(e.a,{href:"/examples/default/types/enums/user-statistics-sort",children:(0,a.jsx)(e.code,{children:"[UserStatisticsSort]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(e.blockquote,{children:"\n"}),"\n",(0,a.jsx)(e.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"/examples/default/types/objects/user-statistic-types",children:(0,a.jsx)(e.code,{children:"UserStatisticTypes"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function j(s={}){const{wrapper:e}={...(0,c.a)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(b,{...s})}):b(s)}},1151:(s,e,t)=>{t.d(e,{Z:()=>r,a:()=>d});var a=t(7294);const c={},i=a.createContext(c);function d(s){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(c):s.components||c:d(s.components),a.createElement(i.Provider,{value:e},s.children)}}}]);