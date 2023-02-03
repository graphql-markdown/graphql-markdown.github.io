"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[8291],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,d=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,k=m["".concat(i,".").concat(u)]||m[u]||p[u]||d;return a?n.createElement(k,l(l({ref:t},s),{},{components:a})):n.createElement(k,l({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=a.length,l=new Array(d);l[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<d;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2087:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(7462),r=a(7294),d=a(3905);const l={id:"media-trend",title:"MediaTrend",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,i={unversionedId:"objects/media-trend",id:"objects/media-trend",title:"MediaTrend",description:"Daily media statistics",source:"@site/examples/schema/objects/media-trend.mdx",sourceDirName:"objects",slug:"/objects/media-trend",permalink:"/schema/objects/media-trend",draft:!1,tags:[],version:"current",frontMatter:{id:"media-trend",title:"MediaTrend",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>mediaId</b></code><Bullet /><code>Int!</code> <Badge className="secondary" text="non-null"/> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbmediaidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>date</b></code><Bullet /><code>Int!</code> <Badge className="secondary" text="non-null"/> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbdatebcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>trending</b></code><Bullet /><code>Int!</code> <Badge className="secondary" text="non-null"/> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbtrendingbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>averageScore</b></code><Bullet /><code>Int</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbaveragescorebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>popularity</b></code><Bullet /><code>Int</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbpopularitybcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>inProgress</b></code><Bullet /><code>Int</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbinprogressbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>releasing</b></code><Bullet /><code>Boolean!</code> <Badge className="secondary" text="non-null"/> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbreleasingbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>episode</b></code><Bullet /><code>Int</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediatrendbepisodebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaTrend.<b>media</b></code><Bullet /><code>Media</code> <Badge className="secondary" text="object"/>',id:"code-style-fontweight-normal-mediatrendbmediabcodemedia-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],m=()=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,d.kt)(r.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.className},e.text)),k={toc:s,Bullet:m,SpecifiedBy:p,Badge:u};function y(e){let{components:t,...a}=e;return(0,d.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Daily media statistics"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaTrend {\n  mediaId: Int!\n  date: Int!\n  trending: Int!\n  averageScore: Int\n  popularity: Int\n  inProgress: Int\n  releasing: Boolean!\n  episode: Int\n  media: Media\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbmediaidbcodeint--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"mediaId"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,d.kt)(u,{className:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(u,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The id of the tag")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbdatebcodeint--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"date"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,d.kt)(u,{className:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(u,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The day the data was recorded (timestamp)")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbtrendingbcodeint--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"trending"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,d.kt)(u,{className:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(u,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The amount of media activity on the day")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbaveragescorebcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"averageScore"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(u,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"A weighted average score of all the user's scores of the media")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbpopularitybcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"popularity"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(u,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The number of users with the media on their list")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbinprogressbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"inProgress"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(u,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The number of users with watching/reading the media")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbreleasingbcodeboolean--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"releasing"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,d.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,d.kt)(u,{className:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(u,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"If the media was being released at this time")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbepisodebcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"episode"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(u,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The episode number of the anime released on this day")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-mediatrendbmediabcodemedia-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaTrend.",(0,d.kt)("b",null,"media"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,d.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,d.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The related media")),(0,d.kt)("h3",{id:"returned-by"},"Returned by"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/schema/queries/media-trend"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaTrend"))," ",(0,d.kt)(u,{className:"secondary",text:"query",mdxType:"Badge"})),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/schema/objects/internal-page"},(0,d.kt)("inlineCode",{parentName:"a"},"InternalPage"))," ",(0,d.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/schema/objects/media-trend-connection"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaTrendConnection"))," ",(0,d.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/schema/objects/media-trend-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaTrendEdge"))," ",(0,d.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/schema/objects/page"},(0,d.kt)("inlineCode",{parentName:"a"},"Page"))," ",(0,d.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);