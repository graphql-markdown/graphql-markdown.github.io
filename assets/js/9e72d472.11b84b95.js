"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[1157],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(a),f=o,g=p["".concat(i,".").concat(f)]||p[f]||m[f]||r;return a?n.createElement(g,l(l({ref:t},d),{},{components:a})):n.createElement(g,l({ref:t},d))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},6863:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(7462),o=a(7294),r=a(3905);const l={id:"page-info",title:"PageInfo",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},c=void 0,i={unversionedId:"objects/page-info",id:"objects/page-info",title:"PageInfo",description:"No description",source:"@site/examples/schema/objects/page-info.mdx",sourceDirName:"objects",slug:"/objects/page-info",permalink:"/schema/objects/page-info",draft:!1,tags:[],version:"current",frontMatter:{id:"page-info",title:"PageInfo",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PageInfo.<b>total</b></code><Bullet /><code>Int</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-pageinfobtotalbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageInfo.<b>perPage</b></code><Bullet /><code>Int</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-pageinfobperpagebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageInfo.<b>currentPage</b></code><Bullet /><code>Int</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-pageinfobcurrentpagebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageInfo.<b>lastPage</b></code><Bullet /><code>Int</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-pageinfoblastpagebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageInfo.<b>hasNextPage</b></code><Bullet /><code>Boolean</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-pageinfobhasnextpagebcodeboolean-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:d,Bullet:p,SpecifiedBy:m,Badge:f};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type PageInfo {\n  total: Int\n  perPage: Int\n  currentPage: Int\n  lastPage: Int\n  hasNextPage: Boolean\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-pageinfobtotalbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PageInfo.",(0,r.kt)("b",null,"total"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(f,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The total number of items. Note: This value is not guaranteed to be accurate, do not rely on this for logic")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-pageinfobperpagebcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PageInfo.",(0,r.kt)("b",null,"perPage"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(f,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The count on a page")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-pageinfobcurrentpagebcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PageInfo.",(0,r.kt)("b",null,"currentPage"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(f,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The current page")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-pageinfoblastpagebcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PageInfo.",(0,r.kt)("b",null,"lastPage"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(f,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The last page")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-pageinfobhasnextpagebcodeboolean-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PageInfo.",(0,r.kt)("b",null,"hasNextPage"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,r.kt)(f,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If there is another page")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/schema/objects/airing-schedule-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"AiringScheduleConnection"))," ",(0,r.kt)(f,{className:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/character-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"CharacterConnection"))," ",(0,r.kt)(f,{className:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/character-submission-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"CharacterSubmissionConnection"))," ",(0,r.kt)(f,{className:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/internal-page"},(0,r.kt)("inlineCode",{parentName:"a"},"InternalPage"))," ",(0,r.kt)(f,{className:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/media-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaConnection"))," ",(0,r.kt)(f,{className:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/media-trend-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaTrendConnection"))," ",(0,r.kt)(f,{className:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/page"},(0,r.kt)("inlineCode",{parentName:"a"},"Page"))," ",(0,r.kt)(f,{className:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/recommendation-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"RecommendationConnection"))," ",(0,r.kt)(f,{className:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/review-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"ReviewConnection"))," ",(0,r.kt)(f,{className:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/site-trend-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"SiteTrendConnection"))," ",(0,r.kt)(f,{className:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/staff-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"StaffConnection"))," ",(0,r.kt)(f,{className:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/studio-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"StudioConnection"))," ",(0,r.kt)(f,{className:"secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);