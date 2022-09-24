"use strict";(self.webpackChunkgraphql_markdown_website=self.webpackChunkgraphql_markdown_website||[]).push([[2109],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=i(a),p=r,y=m["".concat(l,".").concat(p)]||m[p]||u[p]||s;return a?n.createElement(y,o(o({ref:t},d),{},{components:a})):n.createElement(y,o({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<s;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4847:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>u,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),r=a(7294),s=a(3905);const o={id:"user-score-statistic",title:"UserScoreStatistic",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},c=void 0,l={unversionedId:"objects/user-score-statistic",id:"objects/user-score-statistic",title:"UserScoreStatistic",description:"No description",source:"@site/examples/schema/objects/user-score-statistic.mdx",sourceDirName:"objects",slug:"/objects/user-score-statistic",permalink:"/schema/objects/user-score-statistic",draft:!1,tags:[],version:"current",frontMatter:{id:"user-score-statistic",title:"UserScoreStatistic",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UserScoreStatistic.<b>count</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userscorestatisticbcountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserScoreStatistic.<b>meanScore</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userscorestatisticbmeanscorebcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserScoreStatistic.<b>minutesWatched</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userscorestatisticbminuteswatchedbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserScoreStatistic.<b>chaptersRead</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userscorestatisticbchaptersreadbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserScoreStatistic.<b>mediaIds</b></code><Bullet /><code>[Int]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userscorestatisticbmediaidsbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserScoreStatistic.<b>score</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userscorestatisticbscorebcodeint-",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,s.kt)(r.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:u,SpecifiedBy:m,Badge:p};function f(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"No description"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserScoreStatistic {\n  count: Int!\n  meanScore: Float!\n  minutesWatched: Int!\n  chaptersRead: Int!\n  mediaIds: [Int]!\n  score: Int\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-userscorestatisticbcountbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"UserScoreStatistic.",(0,s.kt)("b",null,"count"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,s.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-userscorestatisticbmeanscorebcodefloat--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"UserScoreStatistic.",(0,s.kt)("b",null,"meanScore"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/float"},(0,s.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,s.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-userscorestatisticbminuteswatchedbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"UserScoreStatistic.",(0,s.kt)("b",null,"minutesWatched"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,s.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-userscorestatisticbchaptersreadbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"UserScoreStatistic.",(0,s.kt)("b",null,"chaptersRead"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,s.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-userscorestatisticbmediaidsbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"UserScoreStatistic.",(0,s.kt)("b",null,"mediaIds"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"[Int]!"))," ",(0,s.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-userscorestatisticbscorebcodeint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"UserScoreStatistic.",(0,s.kt)("b",null,"score"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-statistics"},(0,s.kt)("inlineCode",{parentName:"a"},"UserStatistics"))," ",(0,s.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);