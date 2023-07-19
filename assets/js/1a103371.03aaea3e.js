"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3243],{4137:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>m});var s=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,s,o=function(e,t){if(null==e)return{};var a,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=s.createContext({}),c=function(e){var t=s.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},i=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},b="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},g=s.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,i=n(e,["components","mdxType","originalType","parentName"]),b=c(a),g=o,m=b["".concat(l,".").concat(g)]||b[g]||u[g]||r;return a?s.createElement(m,d(d({ref:t},i),{},{components:a})):s.createElement(m,d({ref:t},i))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,d=new Array(r);d[0]=g;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n[b]="string"==typeof e?e:o,d[1]=n;for(var c=2;c<r;c++)d[c]=a[c];return s.createElement.apply(null,d)}return s.createElement.apply(null,a)}g.displayName="MDXCreateElement"},3974:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>m,SpecifiedBy:()=>b,assets:()=>c,contentTitle:()=>n,default:()=>y,frontMatter:()=>d,metadata:()=>l,toc:()=>g});var s=a(7462),o=a(7294),r=a(4137);const d={id:"user-stats",title:"UserStats",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},n=void 0,l={unversionedId:"objects/user-stats",id:"objects/user-stats",title:"UserStats",description:"A user's statistics",source:"@site/examples/default/objects/user-stats.mdx",sourceDirName:"objects",slug:"/objects/user-stats",permalink:"/examples/default/objects/user-stats",draft:!1,tags:[],version:"current",frontMatter:{id:"user-stats",title:"UserStats",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},i=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UserStats.<b>watchedTime</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userstatsbwatchedtimebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStats.<b>chaptersRead</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userstatsbchaptersreadbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStats.<b>activityHistory</b></code><Bullet /><code>[UserActivityHistory]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-userstatsbactivityhistorybcodeuseractivityhistory--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStats.<b>animeStatusDistribution</b></code><Bullet /><code>[StatusDistribution]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-userstatsbanimestatusdistributionbcodestatusdistribution--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStats.<b>mangaStatusDistribution</b></code><Bullet /><code>[StatusDistribution]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-userstatsbmangastatusdistributionbcodestatusdistribution--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStats.<b>animeScoreDistribution</b></code><Bullet /><code>[ScoreDistribution]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-userstatsbanimescoredistributionbcodescoredistribution--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStats.<b>mangaScoreDistribution</b></code><Bullet /><code>[ScoreDistribution]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-userstatsbmangascoredistributionbcodescoredistribution--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStats.<b>animeListScores</b></code><Bullet /><code>ListScoreStats</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-userstatsbanimelistscoresbcodelistscorestats-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStats.<b>mangaListScores</b></code><Bullet /><code>ListScoreStats</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-userstatsbmangalistscoresbcodelistscorestats-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStats.<b>favouredGenresOverview</b></code><Bullet /><code>[GenreStats]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-userstatsbfavouredgenresoverviewbcodegenrestats--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStats.<b>favouredGenres</b></code><Bullet /><code>[GenreStats]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-userstatsbfavouredgenresbcodegenrestats--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStats.<b>favouredTags</b></code><Bullet /><code>[TagStats]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-userstatsbfavouredtagsbcodetagstats--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStats.<b>favouredActors</b></code><Bullet /><code>[StaffStats]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-userstatsbfavouredactorsbcodestaffstats--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStats.<b>favouredStaff</b></code><Bullet /><code>[StaffStats]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-userstatsbfavouredstaffbcodestaffstats--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStats.<b>favouredStudios</b></code><Bullet /><code>[StudioStats]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-userstatsbfavouredstudiosbcodestudiostats--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStats.<b>favouredYears</b></code><Bullet /><code>[YearStats]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-userstatsbfavouredyearsbcodeyearstats--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStats.<b>favouredFormats</b></code><Bullet /><code>[FormatStats]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-userstatsbfavouredformatsbcodeformatstats--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:n=!1}=e;const[l,c]=(0,o.useState)(n);return(0,r.kt)("details",(0,s.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},l?t:a),l&&d)},f={Bullet:i,SpecifiedBy:b,Badge:u,toc:g,Details:m};function y(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A user's statistics"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserStats {\n  watchedTime: Int\n  chaptersRead: Int\n  activityHistory: [UserActivityHistory]\n  animeStatusDistribution: [StatusDistribution]\n  mangaStatusDistribution: [StatusDistribution]\n  animeScoreDistribution: [ScoreDistribution]\n  mangaScoreDistribution: [ScoreDistribution]\n  animeListScores: ListScoreStats\n  mangaListScores: ListScoreStats\n  favouredGenresOverview: [GenreStats]\n  favouredGenres: [GenreStats]\n  favouredTags: [TagStats]\n  favouredActors: [StaffStats]\n  favouredStaff: [StaffStats]\n  favouredStudios: [StudioStats]\n  favouredYears: [YearStats]\n  favouredFormats: [FormatStats]\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userstatsbwatchedtimebcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserStats.",(0,r.kt)("b",null,"watchedTime"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The amount of anime the user has watched in minutes")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userstatsbchaptersreadbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserStats.",(0,r.kt)("b",null,"chaptersRead"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The amount of manga chapters the user has read")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userstatsbactivityhistorybcodeuseractivityhistory--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserStats.",(0,r.kt)("b",null,"activityHistory"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/user-activity-history"},(0,r.kt)("inlineCode",{parentName:"a"},"[UserActivityHistory]"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userstatsbanimestatusdistributionbcodestatusdistribution--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserStats.",(0,r.kt)("b",null,"animeStatusDistribution"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/status-distribution"},(0,r.kt)("inlineCode",{parentName:"a"},"[StatusDistribution]"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userstatsbmangastatusdistributionbcodestatusdistribution--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserStats.",(0,r.kt)("b",null,"mangaStatusDistribution"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/status-distribution"},(0,r.kt)("inlineCode",{parentName:"a"},"[StatusDistribution]"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userstatsbanimescoredistributionbcodescoredistribution--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserStats.",(0,r.kt)("b",null,"animeScoreDistribution"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/score-distribution"},(0,r.kt)("inlineCode",{parentName:"a"},"[ScoreDistribution]"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userstatsbmangascoredistributionbcodescoredistribution--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserStats.",(0,r.kt)("b",null,"mangaScoreDistribution"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/score-distribution"},(0,r.kt)("inlineCode",{parentName:"a"},"[ScoreDistribution]"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userstatsbanimelistscoresbcodelistscorestats-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserStats.",(0,r.kt)("b",null,"animeListScores"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/list-score-stats"},(0,r.kt)("inlineCode",{parentName:"a"},"ListScoreStats"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userstatsbmangalistscoresbcodelistscorestats-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserStats.",(0,r.kt)("b",null,"mangaListScores"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/list-score-stats"},(0,r.kt)("inlineCode",{parentName:"a"},"ListScoreStats"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userstatsbfavouredgenresoverviewbcodegenrestats--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserStats.",(0,r.kt)("b",null,"favouredGenresOverview"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/genre-stats"},(0,r.kt)("inlineCode",{parentName:"a"},"[GenreStats]"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userstatsbfavouredgenresbcodegenrestats--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserStats.",(0,r.kt)("b",null,"favouredGenres"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/genre-stats"},(0,r.kt)("inlineCode",{parentName:"a"},"[GenreStats]"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userstatsbfavouredtagsbcodetagstats--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserStats.",(0,r.kt)("b",null,"favouredTags"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/tag-stats"},(0,r.kt)("inlineCode",{parentName:"a"},"[TagStats]"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userstatsbfavouredactorsbcodestaffstats--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserStats.",(0,r.kt)("b",null,"favouredActors"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/staff-stats"},(0,r.kt)("inlineCode",{parentName:"a"},"[StaffStats]"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userstatsbfavouredstaffbcodestaffstats--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserStats.",(0,r.kt)("b",null,"favouredStaff"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/staff-stats"},(0,r.kt)("inlineCode",{parentName:"a"},"[StaffStats]"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userstatsbfavouredstudiosbcodestudiostats--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserStats.",(0,r.kt)("b",null,"favouredStudios"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/studio-stats"},(0,r.kt)("inlineCode",{parentName:"a"},"[StudioStats]"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userstatsbfavouredyearsbcodeyearstats--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserStats.",(0,r.kt)("b",null,"favouredYears"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/year-stats"},(0,r.kt)("inlineCode",{parentName:"a"},"[YearStats]"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userstatsbfavouredformatsbcodeformatstats--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserStats.",(0,r.kt)("b",null,"favouredFormats"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/format-stats"},(0,r.kt)("inlineCode",{parentName:"a"},"[FormatStats]"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/examples/default/objects/user"},(0,r.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);