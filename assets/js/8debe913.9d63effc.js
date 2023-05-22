"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2483],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=c(a),p=o,f=u["".concat(i,".").concat(p)]||u[p]||m[p]||s;return a?n.createElement(f,l(l({ref:t},d),{},{components:a})):n.createElement(f,l({ref:t},d))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,l=new Array(s);l[0]=p;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[u]="string"==typeof e?e:o,l[1]=r;for(var c=2;c<s;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6708:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>r,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),o=a(7294),s=a(3905);const l={id:"user-studio-statistic",title:"UserStudioStatistic",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},r=void 0,i={unversionedId:"objects/user-studio-statistic",id:"objects/user-studio-statistic",title:"UserStudioStatistic",description:"No description",source:"@site/examples/default/objects/user-studio-statistic.mdx",sourceDirName:"objects",slug:"/objects/user-studio-statistic",permalink:"/examples/default/objects/user-studio-statistic",draft:!1,tags:[],version:"current",frontMatter:{id:"user-studio-statistic",title:"UserStudioStatistic",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},d=()=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,s.kt)(o.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UserStudioStatistic.<b>count</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userstudiostatisticbcountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStudioStatistic.<b>meanScore</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userstudiostatisticbmeanscorebcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStudioStatistic.<b>minutesWatched</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userstudiostatisticbminuteswatchedbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStudioStatistic.<b>chaptersRead</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userstudiostatisticbchaptersreadbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStudioStatistic.<b>mediaIds</b></code><Bullet /><code>[Int]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userstudiostatisticbmediaidsbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStudioStatistic.<b>studio</b></code><Bullet /><code>Studio</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userstudiostatisticbstudiobcodestudio-",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:r=!1}=e;const[i,c]=(0,o.useState)(r);return(0,s.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&l)},y={Bullet:d,SpecifiedBy:u,Badge:m,toc:p,Details:f};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"No description"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserStudioStatistic {\n  count: Int!\n  meanScore: Float!\n  minutesWatched: Int!\n  chaptersRead: Int!\n  mediaIds: [Int]!\n  studio: Studio\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-userstudiostatisticbcountbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"UserStudioStatistic.",(0,s.kt)("b",null,"count"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,s.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-userstudiostatisticbmeanscorebcodefloat--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"UserStudioStatistic.",(0,s.kt)("b",null,"meanScore"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/examples/default/scalars/float"},(0,s.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,s.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-userstudiostatisticbminuteswatchedbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"UserStudioStatistic.",(0,s.kt)("b",null,"minutesWatched"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,s.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-userstudiostatisticbchaptersreadbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"UserStudioStatistic.",(0,s.kt)("b",null,"chaptersRead"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,s.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-userstudiostatisticbmediaidsbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"UserStudioStatistic.",(0,s.kt)("b",null,"mediaIds"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"[Int]!"))," ",(0,s.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-userstudiostatisticbstudiobcodestudio-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"UserStudioStatistic.",(0,s.kt)("b",null,"studio"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/examples/default/objects/studio"},(0,s.kt)("inlineCode",{parentName:"a"},"Studio"))," ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/examples/default/objects/user-statistics"},(0,s.kt)("inlineCode",{parentName:"a"},"UserStatistics"))," ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);