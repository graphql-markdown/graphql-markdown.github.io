"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[1873],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=o.createContext({}),s=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},c=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=s(a),p=n,k=m["".concat(i,".").concat(p)]||m[p]||u[p]||l;return a?o.createElement(k,d(d({ref:t},c),{},{components:a})):o.createElement(k,d({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,d=new Array(l);d[0]=p;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[m]="string"==typeof e?e:n,d[1]=r;for(var s=2;s<l;s++)d[s]=a[s];return o.createElement.apply(null,d)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6689:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>k,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>r,default:()=>y,frontMatter:()=>d,metadata:()=>i,toc:()=>p});var o=a(7462),n=a(7294),l=a(3905);const d={id:"studio",title:"Studio",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},r=void 0,i={unversionedId:"objects/studio",id:"objects/studio",title:"Studio",description:"Animation or production company",source:"@site/examples/schema/objects/studio.mdx",sourceDirName:"objects",slug:"/objects/studio",permalink:"/schema/objects/studio",draft:!1,tags:[],version:"current",frontMatter:{id:"studio",title:"Studio",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},s={},c=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Studio.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-studiobidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Studio.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-studiobnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Studio.<b>isAnimationStudio</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-studiobisanimationstudiobcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Studio.<b>media</b></code><Bullet /><code>MediaConnection</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-studiobmediabcodemediaconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Studio.media.<b>isMain</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-studiomediabismainbcodeboolean-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Studio.media.<b>onList</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-studiomediabonlistbcodeboolean-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Studio.media.<b>page</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-studiomediabpagebcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Studio.media.<b>perPage</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-studiomediabperpagebcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Studio.<b>siteUrl</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-studiobsiteurlbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Studio.<b>isFavourite</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-studiobisfavouritebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Studio.<b>favourites</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-studiobfavouritesbcodeint-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],k=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:r=!1}=e;const[i,s]=(0,n.useState)(r);return(0,l.kt)("details",(0,o.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&d)},b={Bullet:c,SpecifiedBy:m,Badge:u,toc:p,Details:k};function y(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,o.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Animation or production company"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Studio {\n  id: Int!\n  name: String!\n  isAnimationStudio: Boolean!\n  media(\n    sort: [MediaSort]\n    isMain: Boolean\n    onList: Boolean\n    page: Int\n    perPage: Int\n  ): MediaConnection\n  siteUrl: String\n  isFavourite: Boolean!\n  favourites: Int\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-studiobidbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Studio.",(0,l.kt)("b",null,"id"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The id of the studio")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-studiobnamebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Studio.",(0,l.kt)("b",null,"name"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The name of the studio")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-studiobisanimationstudiobcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Studio.",(0,l.kt)("b",null,"isAnimationStudio"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the studio is an animation studio or a different kind of company")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-studiobmediabcodemediaconnection-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Studio.",(0,l.kt)("b",null,"media"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/objects/media-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaConnection"))," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The media the studio has worked on"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-studiomediabsortbcodemediasort--"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Studio.media.",(0,l.kt)("b",null,"sort"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/schema/enums/media-sort"},(0,l.kt)("inlineCode",{parentName:"a"},"[MediaSort]"))," ",(0,l.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("p",{parentName:"blockquote"},"The order the results will be returned in")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-studiomediabismainbcodeboolean-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Studio.media.",(0,l.kt)("b",null,"isMain"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the studio was the primary animation studio of the media")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-studiomediabonlistbcodeboolean-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Studio.media.",(0,l.kt)("b",null,"onList"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h5",{id:"code-style-fontweight-normal-studiomediabpagebcodeint-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Studio.media.",(0,l.kt)("b",null,"page"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The page")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-studiomediabperpagebcodeint-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Studio.media.",(0,l.kt)("b",null,"perPage"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The amount of entries per page, max 25")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-studiobsiteurlbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Studio.",(0,l.kt)("b",null,"siteUrl"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The url for the studio page on the AniList website")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-studiobisfavouritebcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Studio.",(0,l.kt)("b",null,"isFavourite"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the studio is marked as favourite by the currently authenticated user")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-studiobfavouritesbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Studio.",(0,l.kt)("b",null,"favourites"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The amount of user's who have favourited the studio")),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/schema/queries/studio"},(0,l.kt)("inlineCode",{parentName:"a"},"Studio"))," ",(0,l.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"})),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/schema/objects/internal-page"},(0,l.kt)("inlineCode",{parentName:"a"},"InternalPage"))," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/media-submission-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaSubmissionEdge"))," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/page"},(0,l.kt)("inlineCode",{parentName:"a"},"Page"))," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/revision-history"},(0,l.kt)("inlineCode",{parentName:"a"},"RevisionHistory"))," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/studio-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"StudioConnection"))," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/studio-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"StudioEdge"))," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/studio-stats"},(0,l.kt)("inlineCode",{parentName:"a"},"StudioStats"))," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/user-studio-statistic"},(0,l.kt)("inlineCode",{parentName:"a"},"UserStudioStatistic"))," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);