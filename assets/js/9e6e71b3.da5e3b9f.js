"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[1910],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=i(a),f=r,p=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return a?n.createElement(p,s(s({ref:t},d),{},{components:a})):n.createElement(p,s({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},1407:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>f,Bullet:()=>m,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(7462),r=a(7294),o=a(3905);const s={id:"user-format-statistic",title:"UserFormatStatistic",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,c={unversionedId:"objects/user-format-statistic",id:"objects/user-format-statistic",title:"UserFormatStatistic",description:"No description",source:"@site/examples/schema/objects/user-format-statistic.mdx",sourceDirName:"objects",slug:"/objects/user-format-statistic",permalink:"/schema/objects/user-format-statistic",draft:!1,tags:[],version:"current",frontMatter:{id:"user-format-statistic",title:"UserFormatStatistic",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UserFormatStatistic.<b>count</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userformatstatisticbcountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserFormatStatistic.<b>meanScore</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userformatstatisticbmeanscorebcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserFormatStatistic.<b>minutesWatched</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userformatstatisticbminuteswatchedbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserFormatStatistic.<b>chaptersRead</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userformatstatisticbchaptersreadbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserFormatStatistic.<b>mediaIds</b></code><Bullet /><code>[Int]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userformatstatisticbmediaidsbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserFormatStatistic.<b>format</b></code><Bullet /><code>MediaFormat</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-userformatstatisticbformatbcodemediaformat-",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),p={toc:d,Bullet:m,SpecifiedBy:u,Badge:f};function y(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserFormatStatistic {\n  count: Int!\n  meanScore: Float!\n  minutesWatched: Int!\n  chaptersRead: Int!\n  mediaIds: [Int]!\n  format: MediaFormat\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userformatstatisticbcountbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserFormatStatistic.",(0,o.kt)("b",null,"count"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userformatstatisticbmeanscorebcodefloat--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserFormatStatistic.",(0,o.kt)("b",null,"meanScore"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userformatstatisticbminuteswatchedbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserFormatStatistic.",(0,o.kt)("b",null,"minutesWatched"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userformatstatisticbchaptersreadbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserFormatStatistic.",(0,o.kt)("b",null,"chaptersRead"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userformatstatisticbmediaidsbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserFormatStatistic.",(0,o.kt)("b",null,"mediaIds"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"[Int]!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userformatstatisticbformatbcodemediaformat-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserFormatStatistic.",(0,o.kt)("b",null,"format"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/media-format"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaFormat"))," ",(0,o.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/schema/objects/user-statistics"},(0,o.kt)("inlineCode",{parentName:"a"},"UserStatistics"))," ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);