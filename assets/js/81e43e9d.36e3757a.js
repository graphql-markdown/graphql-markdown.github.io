"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7575],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var r=n.createContext({}),d=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(r.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(a),p=s,b=m["".concat(r,".").concat(p)]||m[p]||g[p]||o;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[m]="string"==typeof e?e:s,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7788:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=a(7462),s=a(7294),o=a(4137);const i={id:"site-statistics",title:"SiteStatistics",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},l=void 0,r={unversionedId:"objects/site-statistics",id:"objects/site-statistics",title:"SiteStatistics",description:"No description",source:"@site/examples/default/objects/site-statistics.mdx",sourceDirName:"objects",slug:"/objects/site-statistics",permalink:"/examples/default/objects/site-statistics",draft:!1,tags:[],version:"current",frontMatter:{id:"site-statistics",title:"SiteStatistics",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},c=()=>(0,o.kt)(s.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(s.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,o.kt)(s.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SiteStatistics.<b>users</b></code><Bullet /><code>SiteTrendConnection</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-sitestatisticsbusersbcodesitetrendconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SiteStatistics.users.<b>page</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-sitestatisticsusersbpagebcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SiteStatistics.users.<b>perPage</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-sitestatisticsusersbperpagebcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SiteStatistics.<b>anime</b></code><Bullet /><code>SiteTrendConnection</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-sitestatisticsbanimebcodesitetrendconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SiteStatistics.anime.<b>page</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-sitestatisticsanimebpagebcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SiteStatistics.anime.<b>perPage</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-sitestatisticsanimebperpagebcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SiteStatistics.<b>manga</b></code><Bullet /><code>SiteTrendConnection</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-sitestatisticsbmangabcodesitetrendconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SiteStatistics.manga.<b>page</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-sitestatisticsmangabpagebcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SiteStatistics.manga.<b>perPage</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-sitestatisticsmangabperpagebcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SiteStatistics.<b>characters</b></code><Bullet /><code>SiteTrendConnection</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-sitestatisticsbcharactersbcodesitetrendconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SiteStatistics.characters.<b>page</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-sitestatisticscharactersbpagebcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SiteStatistics.characters.<b>perPage</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-sitestatisticscharactersbperpagebcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SiteStatistics.<b>staff</b></code><Bullet /><code>SiteTrendConnection</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-sitestatisticsbstaffbcodesitetrendconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SiteStatistics.staff.<b>page</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-sitestatisticsstaffbpagebcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SiteStatistics.staff.<b>perPage</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-sitestatisticsstaffbperpagebcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SiteStatistics.<b>studios</b></code><Bullet /><code>SiteTrendConnection</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-sitestatisticsbstudiosbcodesitetrendconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SiteStatistics.studios.<b>page</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-sitestatisticsstudiosbpagebcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SiteStatistics.studios.<b>perPage</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-sitestatisticsstudiosbperpagebcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SiteStatistics.<b>reviews</b></code><Bullet /><code>SiteTrendConnection</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-sitestatisticsbreviewsbcodesitetrendconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SiteStatistics.reviews.<b>page</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-sitestatisticsreviewsbpagebcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SiteStatistics.reviews.<b>perPage</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-sitestatisticsreviewsbperpagebcodeint-",level:5},{value:"Returned by",id:"returned-by",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:l=!1}=e;const[r,d]=(0,s.useState)(l);return(0,o.kt)("details",(0,n.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},r?t:a),r&&i)},k={Bullet:c,SpecifiedBy:m,Badge:g,toc:p,Details:b};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type SiteStatistics {\n  users(sort: [SiteTrendSort], page: Int, perPage: Int): SiteTrendConnection\n  anime(sort: [SiteTrendSort], page: Int, perPage: Int): SiteTrendConnection\n  manga(sort: [SiteTrendSort], page: Int, perPage: Int): SiteTrendConnection\n  characters(\n    sort: [SiteTrendSort]\n    page: Int\n    perPage: Int\n  ): SiteTrendConnection\n  staff(sort: [SiteTrendSort], page: Int, perPage: Int): SiteTrendConnection\n  studios(sort: [SiteTrendSort], page: Int, perPage: Int): SiteTrendConnection\n  reviews(sort: [SiteTrendSort], page: Int, perPage: Int): SiteTrendConnection\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sitestatisticsbusersbcodesitetrendconnection-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.",(0,o.kt)("b",null,"users"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/objects/site-trend-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"SiteTrendConnection"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-sitestatisticsusersbsortbcodesitetrendsort--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.users.",(0,o.kt)("b",null,"sort"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/examples/default/enums/site-trend-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"[SiteTrendSort]"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-sitestatisticsusersbpagebcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.users.",(0,o.kt)("b",null,"page"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The page")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-sitestatisticsusersbperpagebcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.users.",(0,o.kt)("b",null,"perPage"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The amount of entries per page, max 25")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sitestatisticsbanimebcodesitetrendconnection-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.",(0,o.kt)("b",null,"anime"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/objects/site-trend-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"SiteTrendConnection"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-sitestatisticsanimebsortbcodesitetrendsort--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.anime.",(0,o.kt)("b",null,"sort"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/examples/default/enums/site-trend-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"[SiteTrendSort]"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-sitestatisticsanimebpagebcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.anime.",(0,o.kt)("b",null,"page"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The page")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-sitestatisticsanimebperpagebcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.anime.",(0,o.kt)("b",null,"perPage"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The amount of entries per page, max 25")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sitestatisticsbmangabcodesitetrendconnection-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.",(0,o.kt)("b",null,"manga"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/objects/site-trend-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"SiteTrendConnection"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-sitestatisticsmangabsortbcodesitetrendsort--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.manga.",(0,o.kt)("b",null,"sort"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/examples/default/enums/site-trend-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"[SiteTrendSort]"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-sitestatisticsmangabpagebcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.manga.",(0,o.kt)("b",null,"page"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The page")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-sitestatisticsmangabperpagebcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.manga.",(0,o.kt)("b",null,"perPage"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The amount of entries per page, max 25")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sitestatisticsbcharactersbcodesitetrendconnection-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.",(0,o.kt)("b",null,"characters"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/objects/site-trend-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"SiteTrendConnection"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-sitestatisticscharactersbsortbcodesitetrendsort--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.characters.",(0,o.kt)("b",null,"sort"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/examples/default/enums/site-trend-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"[SiteTrendSort]"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-sitestatisticscharactersbpagebcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.characters.",(0,o.kt)("b",null,"page"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The page")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-sitestatisticscharactersbperpagebcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.characters.",(0,o.kt)("b",null,"perPage"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The amount of entries per page, max 25")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sitestatisticsbstaffbcodesitetrendconnection-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.",(0,o.kt)("b",null,"staff"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/objects/site-trend-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"SiteTrendConnection"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-sitestatisticsstaffbsortbcodesitetrendsort--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.staff.",(0,o.kt)("b",null,"sort"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/examples/default/enums/site-trend-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"[SiteTrendSort]"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-sitestatisticsstaffbpagebcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.staff.",(0,o.kt)("b",null,"page"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The page")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-sitestatisticsstaffbperpagebcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.staff.",(0,o.kt)("b",null,"perPage"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The amount of entries per page, max 25")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sitestatisticsbstudiosbcodesitetrendconnection-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.",(0,o.kt)("b",null,"studios"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/objects/site-trend-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"SiteTrendConnection"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-sitestatisticsstudiosbsortbcodesitetrendsort--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.studios.",(0,o.kt)("b",null,"sort"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/examples/default/enums/site-trend-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"[SiteTrendSort]"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-sitestatisticsstudiosbpagebcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.studios.",(0,o.kt)("b",null,"page"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The page")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-sitestatisticsstudiosbperpagebcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.studios.",(0,o.kt)("b",null,"perPage"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The amount of entries per page, max 25")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sitestatisticsbreviewsbcodesitetrendconnection-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.",(0,o.kt)("b",null,"reviews"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/objects/site-trend-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"SiteTrendConnection"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-sitestatisticsreviewsbsortbcodesitetrendsort--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.reviews.",(0,o.kt)("b",null,"sort"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/examples/default/enums/site-trend-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"[SiteTrendSort]"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-sitestatisticsreviewsbpagebcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.reviews.",(0,o.kt)("b",null,"page"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The page")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-sitestatisticsreviewsbperpagebcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SiteStatistics.reviews.",(0,o.kt)("b",null,"perPage"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The amount of entries per page, max 25")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/examples/default/queries/site-statistics"},(0,o.kt)("inlineCode",{parentName:"a"},"SiteStatistics"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"query",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);