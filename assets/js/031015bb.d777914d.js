"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3449],{4137:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>p});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),s=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):d(d({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(i.Provider,{value:a},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},b=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=s(t),b=o,p=m["".concat(i,".").concat(b)]||m[b]||k[b]||l;return t?n.createElement(p,d(d({ref:a},c),{},{components:t})):n.createElement(p,d({ref:a},c))}));function p(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var l=t.length,d=new Array(l);d[0]=b;var r={};for(var i in a)hasOwnProperty.call(a,i)&&(r[i]=a[i]);r.originalType=e,r[m]="string"==typeof e?e:o,d[1]=r;for(var s=2;s<l;s++)d[s]=t[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},6112:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>k,Bullet:()=>c,Details:()=>p,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>d,metadata:()=>i,toc:()=>b});var n=t(7462),o=t(7294),l=t(4137);const d={id:"media-rank",title:"MediaRank",hide_table_of_contents:!1},r=void 0,i={unversionedId:"objects/media-rank",id:"objects/media-rank",title:"MediaRank",description:"The ranking of a media in a particular time span and format compared to other media",source:"@site/examples/default/objects/media-rank.mdx",sourceDirName:"objects",slug:"/objects/media-rank",permalink:"/examples/default/objects/media-rank",draft:!1,tags:[],version:"current",frontMatter:{id:"media-rank",title:"MediaRank",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MediaMergeNotification",permalink:"/examples/default/objects/media-merge-notification"},next:{title:"MediaStats",permalink:"/examples/default/objects/media-stats"}},s={},c=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MediaRank.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediarankbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaRank.<b>rank</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediarankbrankbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaRank.<b>type</b></code><Bullet /><code>MediaRankType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-mediarankbtypebcodemediaranktype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaRank.<b>format</b></code><Bullet /><code>MediaFormat!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-mediarankbformatbcodemediaformat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaRank.<b>year</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediarankbyearbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaRank.<b>season</b></code><Bullet /><code>MediaSeason</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-mediarankbseasonbcodemediaseason-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaRank.<b>allTime</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediarankballtimebcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaRank.<b>context</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediarankbcontextbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],p=e=>{let{dataOpen:a,dataClose:t,children:d,startOpen:r=!1}=e;const[i,s]=(0,o.useState)(r);return(0,l.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?a:t),i&&d)},u={Bullet:c,SpecifiedBy:m,Badge:k,toc:b,Details:p};function g(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ranking of a media in a particular time span and format compared to other media"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaRank {\n  id: Int!\n  rank: Int!\n  type: MediaRankType!\n  format: MediaFormat!\n  year: Int\n  season: MediaSeason\n  allTime: Boolean\n  context: String!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-mediarankbidbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaRank.",(0,l.kt)("b",null,"id"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(k,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The id of the rank")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-mediarankbrankbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaRank.",(0,l.kt)("b",null,"rank"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(k,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The numerical rank of the media")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-mediarankbtypebcodemediaranktype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaRank.",(0,l.kt)("b",null,"type"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/enums/media-rank-type"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaRankType!"))," ",(0,l.kt)(k,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The type of ranking")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-mediarankbformatbcodemediaformat--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaRank.",(0,l.kt)("b",null,"format"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/enums/media-format"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaFormat!"))," ",(0,l.kt)(k,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The format the media is ranked within")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-mediarankbyearbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaRank.",(0,l.kt)("b",null,"year"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(k,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The year the media is ranked within")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-mediarankbseasonbcodemediaseason-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaRank.",(0,l.kt)("b",null,"season"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/enums/media-season"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaSeason"))," ",(0,l.kt)(k,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The season the media is ranked within")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-mediarankballtimebcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaRank.",(0,l.kt)("b",null,"allTime"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(k,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the ranking is based on all time instead of a season/year")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-mediarankbcontextbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaRank.",(0,l.kt)("b",null,"context"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(k,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"String that gives context to the ranking type and time span")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/media"},(0,l.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,l.kt)(k,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);