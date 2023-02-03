"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[833],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),f=i(a),u=s,p=f["".concat(c,".").concat(u)]||f[u]||m[u]||r;return a?n.createElement(p,l(l({ref:t},d),{},{components:a})):n.createElement(p,l({ref:t},d))}));function p(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[f]="string"==typeof e?e:s,l[1]=o;for(var i=2;i<r;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3448:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>f,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(7462),s=a(7294),r=a(3905);const l={id:"user-staff-statistic",title:"UserStaffStatistic",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,c={unversionedId:"objects/user-staff-statistic",id:"objects/user-staff-statistic",title:"UserStaffStatistic",description:"No description",source:"@site/examples/schema/objects/user-staff-statistic.mdx",sourceDirName:"objects",slug:"/objects/user-staff-statistic",permalink:"/schema/objects/user-staff-statistic",draft:!1,tags:[],version:"current",frontMatter:{id:"user-staff-statistic",title:"UserStaffStatistic",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UserStaffStatistic.<b>count</b></code><Bullet /><code>Int!</code> <Badge className="secondary" text="non-null"/> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userstaffstatisticbcountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStaffStatistic.<b>meanScore</b></code><Bullet /><code>Float!</code> <Badge className="secondary" text="non-null"/> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userstaffstatisticbmeanscorebcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStaffStatistic.<b>minutesWatched</b></code><Bullet /><code>Int!</code> <Badge className="secondary" text="non-null"/> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userstaffstatisticbminuteswatchedbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStaffStatistic.<b>chaptersRead</b></code><Bullet /><code>Int!</code> <Badge className="secondary" text="non-null"/> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userstaffstatisticbchaptersreadbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStaffStatistic.<b>mediaIds</b></code><Bullet /><code>[Int]!</code> <Badge className="secondary" text="non-null"/> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userstaffstatisticbmediaidsbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserStaffStatistic.<b>staff</b></code><Bullet /><code>Staff</code> <Badge className="secondary" text="object"/>',id:"code-style-fontweight-normal-userstaffstatisticbstaffbcodestaff-",level:4},{value:"Member of",id:"member-of",level:3}],f=()=>(0,r.kt)(s.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,r.kt)(s.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(s.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.className},e.text)),p={toc:d,Bullet:f,SpecifiedBy:m,Badge:u};function y(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserStaffStatistic {\n  count: Int!\n  meanScore: Float!\n  minutesWatched: Int!\n  chaptersRead: Int!\n  mediaIds: [Int]!\n  staff: Staff\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userstaffstatisticbcountbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserStaffStatistic.",(0,r.kt)("b",null,"count"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(u,{className:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userstaffstatisticbmeanscorebcodefloat--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserStaffStatistic.",(0,r.kt)("b",null,"meanScore"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,r.kt)(u,{className:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userstaffstatisticbminuteswatchedbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserStaffStatistic.",(0,r.kt)("b",null,"minutesWatched"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(u,{className:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userstaffstatisticbchaptersreadbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserStaffStatistic.",(0,r.kt)("b",null,"chaptersRead"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(u,{className:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userstaffstatisticbmediaidsbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserStaffStatistic.",(0,r.kt)("b",null,"mediaIds"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"[Int]!"))," ",(0,r.kt)(u,{className:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userstaffstatisticbstaffbcodestaff-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserStaffStatistic.",(0,r.kt)("b",null,"staff"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,r.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,r.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/schema/objects/user-statistics"},(0,r.kt)("inlineCode",{parentName:"a"},"UserStatistics"))," ",(0,r.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);