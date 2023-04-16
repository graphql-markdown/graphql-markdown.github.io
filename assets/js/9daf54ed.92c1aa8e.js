"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2103],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var l=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,o=function(e,t){if(null==e)return{};var a,l,o={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var r=l.createContext({}),c=function(e){var t=l.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return l.createElement(r.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,r=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(a),u=o,y=m["".concat(r,".").concat(u)]||m[u]||p[u]||n;return a?l.createElement(y,s(s({ref:t},d),{},{components:a})):l.createElement(y,s({ref:t},d))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=u;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<n;c++)s[c]=a[c];return l.createElement.apply(null,s)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7363:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>y,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>r,toc:()=>u});var l=a(7462),o=a(7294),n=a(3905);const s={id:"media-list-collection",title:"MediaListCollection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,r={unversionedId:"objects/media-list-collection",id:"objects/media-list-collection",title:"MediaListCollection",description:"List of anime or manga",source:"@site/examples/schema/objects/media-list-collection.mdx",sourceDirName:"objects",slug:"/objects/media-list-collection",permalink:"/schema/objects/media-list-collection",draft:!1,tags:[],version:"current",frontMatter:{id:"media-list-collection",title:"MediaListCollection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},d=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListCollection.<b>lists</b></code><Bullet /><code>[MediaListGroup]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-medialistcollectionblistsbcodemedialistgroup--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListCollection.<b>user</b></code><Bullet /><code>User</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-medialistcollectionbuserbcodeuser-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListCollection.<b>hasNextChunk</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistcollectionbhasnextchunkbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListCollection.<b>statusLists</b></code><Bullet /><code>[[MediaList]]</code> <Badge class="secondary" text="deprecated"/> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-medialistcollectionbstatuslistsbcodemedialist---",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListCollection.<b>customLists</b></code><Bullet /><code>[[MediaList]]</code> <Badge class="secondary" text="deprecated"/> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-medialistcollectionbcustomlistsbcodemedialist---",level:4},{value:"Returned by",id:"returned-by",level:3}],y=e=>{let{dataOpen:t,dataClose:a,children:s,startOpen:i=!1}=e;const[r,c]=(0,o.useState)(i);return(0,n.kt)("details",(0,l.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},r?t:a),r&&s)},k={Bullet:d,SpecifiedBy:m,Badge:p,toc:u,Details:y};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"List of anime or manga"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaListCollection {\n  lists: [MediaListGroup]\n  user: User\n  hasNextChunk: Boolean\n  statusLists(asArray: Boolean): [[MediaList]] @deprecated\n  customLists(asArray: Boolean): [[MediaList]] @deprecated\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-medialistcollectionblistsbcodemedialistgroup--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.",(0,n.kt)("b",null,"lists"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/media-list-group"},(0,n.kt)("inlineCode",{parentName:"a"},"[MediaListGroup]"))," ",(0,n.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Grouped media list entries")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-medialistcollectionbuserbcodeuser-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.",(0,n.kt)("b",null,"user"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,n.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The owner of the list")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-medialistcollectionbhasnextchunkbcodeboolean-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.",(0,n.kt)("b",null,"hasNextChunk"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If there is another chunk")),(0,n.kt)(y,{dataOpen:(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{className:"deprecated"},"Hide deprecated")),dataClose:(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{className:"deprecated"},"Show deprecated")),mdxType:"Details"},(0,n.kt)("h4",{id:"code-style-fontweight-normal-medialistcollectionbstatuslistsbcodemedialist---"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.",(0,n.kt)("b",null,"statusLists"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/media-list"},(0,n.kt)("inlineCode",{parentName:"a"},"[[MediaList]]"))," ",(0,n.kt)(p,{class:"secondary",text:"deprecated",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)(p,{class:"warning",text:"DEPRECATED: Not GraphQL spec compliant, use lists field instead.",mdxType:"Badge"}),(0,n.kt)("p",{parentName:"blockquote"},"A map of media list entry arrays grouped by status"),(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-medialistcollectionstatuslistsbasarraybcodeboolean-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.statusLists.",(0,n.kt)("b",null,"asArray"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"}))),(0,n.kt)("h4",{id:"code-style-fontweight-normal-medialistcollectionbcustomlistsbcodemedialist---"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.",(0,n.kt)("b",null,"customLists"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/media-list"},(0,n.kt)("inlineCode",{parentName:"a"},"[[MediaList]]"))," ",(0,n.kt)(p,{class:"secondary",text:"deprecated",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)(p,{class:"warning",text:"DEPRECATED: Not GraphQL spec compliant, use lists field instead.",mdxType:"Badge"}),(0,n.kt)("p",{parentName:"blockquote"},"A map of media list entry arrays grouped by custom lists"),(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-medialistcollectioncustomlistsbasarraybcodeboolean-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.customLists.",(0,n.kt)("b",null,"asArray"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})))),(0,n.kt)("h3",{id:"returned-by"},"Returned by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/schema/queries/media-list-collection"},(0,n.kt)("inlineCode",{parentName:"a"},"MediaListCollection"))," ",(0,n.kt)(p,{class:"secondary",text:"query",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);