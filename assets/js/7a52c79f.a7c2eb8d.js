"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[333],{4137:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>p});var r=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},i=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,l=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=d(a),b=s,p=u["".concat(c,".").concat(b)]||u[b]||m[b]||l;return a?r.createElement(p,n(n({ref:t},i),{},{components:a})):r.createElement(p,n({ref:t},i))}));function p(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=a.length,n=new Array(l);n[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:s,n[1]=o;for(var d=2;d<l;d++)n[d]=a[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},4529:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>i,Details:()=>p,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>n,metadata:()=>c,toc:()=>b});var r=a(7462),s=a(7294),l=a(4137);const n={id:"user-release-year-statistic",title:"UserReleaseYearStatistic",hide_table_of_contents:!1},o=void 0,c={unversionedId:"objects/user-release-year-statistic",id:"objects/user-release-year-statistic",title:"UserReleaseYearStatistic",description:"No description",source:"@site/examples/default/objects/user-release-year-statistic.mdx",sourceDirName:"objects",slug:"/objects/user-release-year-statistic",permalink:"/examples/default/objects/user-release-year-statistic",draft:!1,tags:[],version:"current",frontMatter:{id:"user-release-year-statistic",title:"UserReleaseYearStatistic",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UserPreviousName",permalink:"/examples/default/objects/user-previous-name"},next:{title:"UserScoreStatistic",permalink:"/examples/default/objects/user-score-statistic"}},d={},i=()=>(0,l.kt)(s.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(s.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(s.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UserReleaseYearStatistic.<b>count</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userreleaseyearstatisticbcountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserReleaseYearStatistic.<b>meanScore</b></code><Bullet /><code>Float!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userreleaseyearstatisticbmeanscorebcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserReleaseYearStatistic.<b>minutesWatched</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userreleaseyearstatisticbminuteswatchedbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserReleaseYearStatistic.<b>chaptersRead</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userreleaseyearstatisticbchaptersreadbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserReleaseYearStatistic.<b>mediaIds</b></code><Bullet /><code>[Int]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userreleaseyearstatisticbmediaidsbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserReleaseYearStatistic.<b>releaseYear</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userreleaseyearstatisticbreleaseyearbcodeint-",level:4},{value:"Member Of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:a,children:n,startOpen:o=!1}=e;const[c,d]=(0,s.useState)(o);return(0,l.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&n)},y={Bullet:i,SpecifiedBy:u,Badge:m,toc:b,Details:p};function g(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("meta",{name:"googlebot",content:"noindex"}),(0,l.kt)("meta",{charset:"utf-8"})),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserReleaseYearStatistic {\n  count: Int!\n  meanScore: Float!\n  minutesWatched: Int!\n  chaptersRead: Int!\n  mediaIds: [Int]!\n  releaseYear: Int\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userreleaseyearstatisticbcountbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserReleaseYearStatistic.",(0,l.kt)("b",null,"count"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userreleaseyearstatisticbmeanscorebcodefloat--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserReleaseYearStatistic.",(0,l.kt)("b",null,"meanScore"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/float"},(0,l.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userreleaseyearstatisticbminuteswatchedbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserReleaseYearStatistic.",(0,l.kt)("b",null,"minutesWatched"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userreleaseyearstatisticbchaptersreadbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserReleaseYearStatistic.",(0,l.kt)("b",null,"chaptersRead"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userreleaseyearstatisticbmediaidsbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserReleaseYearStatistic.",(0,l.kt)("b",null,"mediaIds"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"[Int]!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userreleaseyearstatisticbreleaseyearbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserReleaseYearStatistic.",(0,l.kt)("b",null,"releaseYear"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member Of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/user-statistics"},(0,l.kt)("inlineCode",{parentName:"a"},"UserStatistics"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);