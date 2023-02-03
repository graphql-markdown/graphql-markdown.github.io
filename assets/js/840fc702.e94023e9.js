"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3461],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,y=m["".concat(d,".").concat(u)]||m[u]||p[u]||l;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2484:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var n=r(7462),a=r(7294),l=r(3905);const o={id:"review",title:"Review",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,d={unversionedId:"queries/review",id:"queries/review",title:"Review",description:"Review query",source:"@site/examples/schema/queries/review.mdx",sourceDirName:"queries",slug:"/queries/review",permalink:"/schema/queries/review",draft:!1,tags:[],version:"current",frontMatter:{id:"review",title:"Review",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},s=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Review.<b>id</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-reviewbidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Review.<b>mediaId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-reviewbmediaidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Review.<b>userId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-reviewbuseridbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Review.<b>mediaType</b></code><Bullet /><code>MediaType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-reviewbmediatypebcodemediatype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Review.<b>sort</b></code><Bullet /><code>[ReviewSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-reviewbsortbcodereviewsort--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Review</code> <Badge class="secondary" text="object"/>',id:"review-",level:4}],m=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:m,SpecifiedBy:p,Badge:u};function k(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Review query"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"Review(\n  id: Int\n  mediaId: Int\n  userId: Int\n  mediaType: MediaType\n  sort: [ReviewSort]\n): Review\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-reviewbidbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Review.",(0,l.kt)("b",null,"id"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by Review id")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-reviewbmediaidbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Review.",(0,l.kt)("b",null,"mediaId"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by media id")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-reviewbuseridbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Review.",(0,l.kt)("b",null,"userId"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by user id")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-reviewbmediatypebcodemediatype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Review.",(0,l.kt)("b",null,"mediaType"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/enums/media-type"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaType"))," ",(0,l.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by media type")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-reviewbsortbcodereviewsort--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Review.",(0,l.kt)("b",null,"sort"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/enums/review-sort"},(0,l.kt)("inlineCode",{parentName:"a"},"[ReviewSort]"))," ",(0,l.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The order the results will be returned in")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"review-"},(0,l.kt)("a",{parentName:"h4",href:"/schema/objects/review"},(0,l.kt)("inlineCode",{parentName:"a"},"Review"))," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A Review that features in an anime or manga")))}k.isMDXComponent=!0}}]);