"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2916],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=i(a),p=r,g=m["".concat(c,".").concat(p)]||m[p]||u[p]||s;return a?n.createElement(g,l(l({ref:t},d),{},{components:a})):n.createElement(g,l({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var i=2;i<s;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8995:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>m,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(7462),r=a(7294),s=a(3905);const l={id:"user-genre-statistic",title:"UserGenreStatistic",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,c={unversionedId:"objects/user-genre-statistic",id:"objects/user-genre-statistic",title:"UserGenreStatistic",description:"No description",source:"@site/examples/schema/objects/user-genre-statistic.mdx",sourceDirName:"objects",slug:"/objects/user-genre-statistic",permalink:"/schema/objects/user-genre-statistic",draft:!1,tags:[],version:"current",frontMatter:{id:"user-genre-statistic",title:"UserGenreStatistic",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UserGenreStatistic.<b>count</b></code><Bullet /><code>Int!</code> <Badge className="secondary" text="non-null"/> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-usergenrestatisticbcountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserGenreStatistic.<b>meanScore</b></code><Bullet /><code>Float!</code> <Badge className="secondary" text="non-null"/> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-usergenrestatisticbmeanscorebcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserGenreStatistic.<b>minutesWatched</b></code><Bullet /><code>Int!</code> <Badge className="secondary" text="non-null"/> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-usergenrestatisticbminuteswatchedbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserGenreStatistic.<b>chaptersRead</b></code><Bullet /><code>Int!</code> <Badge className="secondary" text="non-null"/> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-usergenrestatisticbchaptersreadbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserGenreStatistic.<b>mediaIds</b></code><Bullet /><code>[Int]!</code> <Badge className="secondary" text="non-null"/> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-usergenrestatisticbmediaidsbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserGenreStatistic.<b>genre</b></code><Bullet /><code>String</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-usergenrestatisticbgenrebcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,s.kt)(r.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.className},e.text)),g={toc:d,Bullet:m,SpecifiedBy:u,Badge:p};function y(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"No description"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserGenreStatistic {\n  count: Int!\n  meanScore: Float!\n  minutesWatched: Int!\n  chaptersRead: Int!\n  mediaIds: [Int]!\n  genre: String\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-usergenrestatisticbcountbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"UserGenreStatistic.",(0,s.kt)("b",null,"count"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,s.kt)(p,{className:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-usergenrestatisticbmeanscorebcodefloat--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"UserGenreStatistic.",(0,s.kt)("b",null,"meanScore"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/float"},(0,s.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,s.kt)(p,{className:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-usergenrestatisticbminuteswatchedbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"UserGenreStatistic.",(0,s.kt)("b",null,"minutesWatched"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,s.kt)(p,{className:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-usergenrestatisticbchaptersreadbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"UserGenreStatistic.",(0,s.kt)("b",null,"chaptersRead"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,s.kt)(p,{className:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-usergenrestatisticbmediaidsbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"UserGenreStatistic.",(0,s.kt)("b",null,"mediaIds"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"[Int]!"))," ",(0,s.kt)(p,{className:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-usergenrestatisticbgenrebcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"UserGenreStatistic.",(0,s.kt)("b",null,"genre"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(p,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-statistics"},(0,s.kt)("inlineCode",{parentName:"a"},"UserStatistics"))," ",(0,s.kt)(p,{className:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);