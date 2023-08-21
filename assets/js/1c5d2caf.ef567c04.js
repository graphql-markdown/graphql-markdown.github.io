"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3313],{4137:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>p});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=d(a),b=n,p=u["".concat(c,".").concat(b)]||u[b]||m[b]||s;return a?r.createElement(p,l(l({ref:t},i),{},{components:a})):r.createElement(p,l({ref:t},i))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var d=2;d<s;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},2673:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>i,Details:()=>p,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>b});var r=a(7462),n=a(7294),s=a(4137);const l={id:"user-start-year-statistic",title:"UserStartYearStatistic",hide_table_of_contents:!1},o=void 0,c={unversionedId:"objects/user-start-year-statistic",id:"objects/user-start-year-statistic",title:"UserStartYearStatistic",description:"No description",source:"@site/examples/default/objects/user-start-year-statistic.mdx",sourceDirName:"objects",slug:"/objects/user-start-year-statistic",permalink:"/examples/default/objects/user-start-year-statistic",draft:!1,tags:[],version:"current",frontMatter:{id:"user-start-year-statistic",title:"UserStartYearStatistic",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UserStaffStatistic",permalink:"/examples/default/objects/user-staff-statistic"},next:{title:"UserStatisticTypes",permalink:"/examples/default/objects/user-statistic-types"}},d={},i=()=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,s.kt)(n.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UserStartYearStatistic.<b>count</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userstartyearstatisticbcountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStartYearStatistic.<b>meanScore</b></code><Bullet /><code>Float!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userstartyearstatisticbmeanscorebcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStartYearStatistic.<b>minutesWatched</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userstartyearstatisticbminuteswatchedbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStartYearStatistic.<b>chaptersRead</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userstartyearstatisticbchaptersreadbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStartYearStatistic.<b>mediaIds</b></code><Bullet /><code>[Int]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userstartyearstatisticbmediaidsbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStartYearStatistic.<b>startYear</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userstartyearstatisticbstartyearbcodeint-",level:4},{value:"Member of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:o=!1}=e;const[c,d]=(0,n.useState)(o);return(0,s.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&l)},y={Bullet:i,SpecifiedBy:u,Badge:m,toc:b,Details:p};function g(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"No description"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserStartYearStatistic {\n  count: Int!\n  meanScore: Float!\n  minutesWatched: Int!\n  chaptersRead: Int!\n  mediaIds: [Int]!\n  startYear: Int\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-userstartyearstatisticbcountbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"UserStartYearStatistic.",(0,s.kt)("b",null,"count"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-userstartyearstatisticbmeanscorebcodefloat--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"UserStartYearStatistic.",(0,s.kt)("b",null,"meanScore"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/examples/default/scalars/float"},(0,s.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-userstartyearstatisticbminuteswatchedbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"UserStartYearStatistic.",(0,s.kt)("b",null,"minutesWatched"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-userstartyearstatisticbchaptersreadbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"UserStartYearStatistic.",(0,s.kt)("b",null,"chaptersRead"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-userstartyearstatisticbmediaidsbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"UserStartYearStatistic.",(0,s.kt)("b",null,"mediaIds"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"[Int]!"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-userstartyearstatisticbstartyearbcodeint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"UserStartYearStatistic.",(0,s.kt)("b",null,"startYear"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/examples/default/objects/user-statistics"},(0,s.kt)("inlineCode",{parentName:"a"},"UserStatistics"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);