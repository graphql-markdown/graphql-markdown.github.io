"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7688],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(a),u=n,b=m["".concat(s,".").concat(u)]||m[u]||p[u]||l;return a?o.createElement(b,r(r({ref:t},c),{},{components:a})):o.createElement(b,r({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,r[1]=i;for(var d=2;d<l;d++)r[d]=a[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1590:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=a(7462),n=a(7294),l=a(3905);const r={id:"media-list-group",title:"MediaListGroup",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},i=void 0,s={unversionedId:"objects/media-list-group",id:"objects/media-list-group",title:"MediaListGroup",description:"List group of anime or manga entries",source:"@site/examples/schema/objects/media-list-group.mdx",sourceDirName:"objects",slug:"/objects/media-list-group",permalink:"/schema/objects/media-list-group",draft:!1,tags:[],version:"current",frontMatter:{id:"media-list-group",title:"MediaListGroup",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},c=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListGroup.<b>entries</b></code><Bullet /><code>[MediaList]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-medialistgroupbentriesbcodemedialist--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListGroup.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistgroupbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListGroup.<b>isCustomList</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistgroupbiscustomlistbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListGroup.<b>isSplitCompletedList</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistgroupbissplitcompletedlistbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListGroup.<b>status</b></code><Bullet /><code>MediaListStatus</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-medialistgroupbstatusbcodemedialiststatus-",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:i=!1}=e;const[s,d]=(0,n.useState)(i);return(0,l.kt)("details",(0,o.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&r)},g={Bullet:c,SpecifiedBy:m,Badge:p,toc:u,Details:b};function f(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,o.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"List group of anime or manga entries"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaListGroup {\n  entries: [MediaList]\n  name: String\n  isCustomList: Boolean\n  isSplitCompletedList: Boolean\n  status: MediaListStatus\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-medialistgroupbentriesbcodemedialist--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaListGroup.",(0,l.kt)("b",null,"entries"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/objects/media-list"},(0,l.kt)("inlineCode",{parentName:"a"},"[MediaList]"))," ",(0,l.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Media list entries")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-medialistgroupbnamebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaListGroup.",(0,l.kt)("b",null,"name"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-medialistgroupbiscustomlistbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaListGroup.",(0,l.kt)("b",null,"isCustomList"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-medialistgroupbissplitcompletedlistbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaListGroup.",(0,l.kt)("b",null,"isSplitCompletedList"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-medialistgroupbstatusbcodemedialiststatus-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaListGroup.",(0,l.kt)("b",null,"status"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-status"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaListStatus"))," ",(0,l.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/schema/objects/media-list-collection"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaListCollection"))," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);