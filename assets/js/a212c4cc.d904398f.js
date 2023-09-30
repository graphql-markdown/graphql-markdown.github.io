"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9350],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var o=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,l=function(e,t){if(null==e)return{};var a,o,l={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=o.createContext({}),i=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},c=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=i(a),b=l,u=m["".concat(s,".").concat(b)]||m[b]||p[b]||n;return a?o.createElement(u,d(d({ref:t},c),{},{components:a})):o.createElement(u,d({ref:t},c))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,d=new Array(n);d[0]=b;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[m]="string"==typeof e?e:l,d[1]=r;for(var i=2;i<n;i++)d[i]=a[i];return o.createElement.apply(null,d)}return o.createElement.apply(null,a)}b.displayName="MDXCreateElement"},10:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>r,default:()=>g,frontMatter:()=>d,metadata:()=>s,toc:()=>b});var o=a(7462),l=a(7294),n=a(4137);const d={id:"user",title:"User",hide_table_of_contents:!1},r=void 0,s={unversionedId:"objects/user",id:"objects/user",title:"User",description:"A user",source:"@site/examples/default/objects/user.mdx",sourceDirName:"objects",slug:"/objects/user",permalink:"/examples/default/objects/user",draft:!1,tags:[],version:"current",frontMatter:{id:"user",title:"User",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UserVoiceActorStatistic",permalink:"/examples/default/objects/user-voice-actor-statistic"},next:{title:"YearStats",permalink:"/examples/default/objects/year-stats"}},i={},c=()=>(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,n.kt)(l.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>name</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>about</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbaboutbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>avatar</b></code><Bullet /><code>UserAvatar</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-userbavatarbcodeuseravatar-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>bannerImage</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbbannerimagebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>isFollowing</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbisfollowingbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>isFollower</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbisfollowerbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>isBlocked</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbisblockedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>bans</b></code><Bullet /><code>Json</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbbansbcodejson-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>options</b></code><Bullet /><code>UserOptions</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-userboptionsbcodeuseroptions-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>mediaListOptions</b></code><Bullet /><code>MediaListOptions</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-userbmedialistoptionsbcodemedialistoptions-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>favourites</b></code><Bullet /><code>Favourites</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-userbfavouritesbcodefavourites-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>statistics</b></code><Bullet /><code>UserStatisticTypes</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-userbstatisticsbcodeuserstatistictypes-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>unreadNotificationCount</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbunreadnotificationcountbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>siteUrl</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbsiteurlbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>donatorTier</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbdonatortierbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>donatorBadge</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbdonatorbadgebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>moderatorRoles</b></code><Bullet /><code>[ModRole]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-userbmoderatorrolesbcodemodrole--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>createdAt</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbcreatedatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>updatedAt</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbupdatedatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>previousNames</b></code><Bullet /><code>[UserPreviousName]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-userbpreviousnamesbcodeuserpreviousname--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>stats</b></code><Bullet /><code>UserStats</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-userbstatsbcodeuserstats--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>moderatorStatus</b></code><Bullet /><code>String</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbmoderatorstatusbcodestring--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:r=!1}=e;const[s,i]=(0,l.useState)(r);return(0,n.kt)("details",(0,o.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&d)},k={Bullet:c,SpecifiedBy:m,Badge:p,toc:b,Details:u};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"googlebot",content:"noindex"}),(0,n.kt)("meta",{charset:"utf-8"})),(0,n.kt)("p",null,"A user"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type User {\n  id: Int!\n  name: String!\n  about(asHtml: Boolean): String\n  avatar: UserAvatar\n  bannerImage: String\n  isFollowing: Boolean\n  isFollower: Boolean\n  isBlocked: Boolean\n  bans: Json\n  options: UserOptions\n  mediaListOptions: MediaListOptions\n  favourites(page: Int): Favourites\n  statistics: UserStatisticTypes\n  unreadNotificationCount: Int\n  siteUrl: String\n  donatorTier: Int\n  donatorBadge: String\n  moderatorRoles: [ModRole]\n  createdAt: Int\n  updatedAt: Int\n  stats: UserStats @deprecated\n  moderatorStatus: String @deprecated\n  previousNames: [UserPreviousName]\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbidbcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"id"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The id of the user")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbnamebcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"name"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The name of the user")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbaboutbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"about"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The bio written by user (Markdown)"),(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-useraboutbashtmlbcodeboolean-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.about.",(0,n.kt)("b",null,"asHtml"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/examples/default/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("p",{parentName:"blockquote"},"Return the string in pre-parsed html instead of markdown")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbavatarbcodeuseravatar-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"avatar"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/objects/user-avatar"},(0,n.kt)("inlineCode",{parentName:"a"},"UserAvatar"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The user's avatar images")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbbannerimagebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"bannerImage"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The user's banner images")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbisfollowingbcodeboolean-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"isFollowing"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If the authenticated user if following this user")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbisfollowerbcodeboolean-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"isFollower"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If this user if following the authenticated user")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbisblockedbcodeboolean-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"isBlocked"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If the user is blocked by the authenticated user")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbbansbcodejson-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"bans"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/scalars/json"},(0,n.kt)("inlineCode",{parentName:"a"},"Json"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userboptionsbcodeuseroptions-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"options"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/objects/user-options"},(0,n.kt)("inlineCode",{parentName:"a"},"UserOptions"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The user's general options")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbmedialistoptionsbcodemedialistoptions-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"mediaListOptions"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/objects/media-list-options"},(0,n.kt)("inlineCode",{parentName:"a"},"MediaListOptions"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The user's media list options")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbfavouritesbcodefavourites-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"favourites"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/objects/favourites"},(0,n.kt)("inlineCode",{parentName:"a"},"Favourites"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The users favourites"),(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-userfavouritesbpagebcodeint-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.favourites.",(0,n.kt)("b",null,"page"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/examples/default/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("p",{parentName:"blockquote"},"Deprecated. Use page arguments on each favourite field instead.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbstatisticsbcodeuserstatistictypes-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"statistics"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/objects/user-statistic-types"},(0,n.kt)("inlineCode",{parentName:"a"},"UserStatisticTypes"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The users anime & manga list statistics")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbunreadnotificationcountbcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"unreadNotificationCount"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The number of unread notifications the user has")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbsiteurlbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"siteUrl"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The url for the user page on the AniList website")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbdonatortierbcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"donatorTier"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The donation tier of the user")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbdonatorbadgebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"donatorBadge"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Custom donation badge text")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbmoderatorrolesbcodemodrole--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"moderatorRoles"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/enums/mod-role"},(0,n.kt)("inlineCode",{parentName:"a"},"[ModRole]"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The user's moderator roles if they are a site moderator")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbcreatedatbcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"createdAt"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"When the user's account was created. (Does not exist for accounts created before 2020)")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbupdatedatbcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"updatedAt"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"When the user's data was last updated")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbpreviousnamesbcodeuserpreviousname--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"previousNames"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/objects/user-previous-name"},(0,n.kt)("inlineCode",{parentName:"a"},"[UserPreviousName]"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The user's previously used names.")),(0,n.kt)(u,{dataOpen:(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{className:"deprecated"},"Hide deprecated")),dataClose:(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{className:"deprecated"},"Show deprecated")),mdxType:"Details"},(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbstatsbcodeuserstats--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"stats"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/objects/user-stats"},(0,n.kt)("inlineCode",{parentName:"a"},"UserStats"))," ",(0,n.kt)(p,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Deprecated. Replaced with statistics field.")),(0,n.kt)("p",{parentName:"blockquote"},"The user's statistics")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbmoderatorstatusbcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"moderatorStatus"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(p,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Deprecated. Replaced with moderatorRoles field.")),(0,n.kt)("p",{parentName:"blockquote"},"If the user is a moderator or data moderator"))),(0,n.kt)("h3",{id:"returned-by"},"Returned by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/examples/default/queries/follower"},(0,n.kt)("inlineCode",{parentName:"a"},"Follower"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/queries/following"},(0,n.kt)("inlineCode",{parentName:"a"},"Following"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/queries/like"},(0,n.kt)("inlineCode",{parentName:"a"},"Like"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/mutations/toggle-follow"},(0,n.kt)("inlineCode",{parentName:"a"},"ToggleFollow"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/mutations/toggle-like"},(0,n.kt)("inlineCode",{parentName:"a"},"ToggleLike"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/mutations/update-user"},(0,n.kt)("inlineCode",{parentName:"a"},"UpdateUser"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/queries/user"},(0,n.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/queries/viewer"},(0,n.kt)("inlineCode",{parentName:"a"},"Viewer"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"query",mdxType:"Badge"})),(0,n.kt)("h3",{id:"member-of"},"Member Of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-like-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"ActivityLikeNotification"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-mention-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"ActivityMentionNotification"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-message-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"ActivityMessageNotification"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-reply"},(0,n.kt)("inlineCode",{parentName:"a"},"ActivityReply"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-reply-like-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"ActivityReplyLikeNotification"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-reply-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"ActivityReplyNotification"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-reply-subscribed-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"ActivityReplySubscribedNotification"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/ani-chart-user"},(0,n.kt)("inlineCode",{parentName:"a"},"AniChartUser"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/character-submission"},(0,n.kt)("inlineCode",{parentName:"a"},"CharacterSubmission"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/following-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"FollowingNotification"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/internal-page"},(0,n.kt)("inlineCode",{parentName:"a"},"InternalPage"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/list-activity"},(0,n.kt)("inlineCode",{parentName:"a"},"ListActivity"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/media-list"},(0,n.kt)("inlineCode",{parentName:"a"},"MediaList"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/media-list-collection"},(0,n.kt)("inlineCode",{parentName:"a"},"MediaListCollection"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/media-submission"},(0,n.kt)("inlineCode",{parentName:"a"},"MediaSubmission"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/message-activity"},(0,n.kt)("inlineCode",{parentName:"a"},"MessageActivity"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/mod-action"},(0,n.kt)("inlineCode",{parentName:"a"},"ModAction"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/page"},(0,n.kt)("inlineCode",{parentName:"a"},"Page"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/recommendation"},(0,n.kt)("inlineCode",{parentName:"a"},"Recommendation"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/report"},(0,n.kt)("inlineCode",{parentName:"a"},"Report"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/review"},(0,n.kt)("inlineCode",{parentName:"a"},"Review"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/revision-history"},(0,n.kt)("inlineCode",{parentName:"a"},"RevisionHistory"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/staff"},(0,n.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/staff-submission"},(0,n.kt)("inlineCode",{parentName:"a"},"StaffSubmission"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/text-activity"},(0,n.kt)("inlineCode",{parentName:"a"},"TextActivity"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/thread"},(0,n.kt)("inlineCode",{parentName:"a"},"Thread"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-comment"},(0,n.kt)("inlineCode",{parentName:"a"},"ThreadComment"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-comment-like-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"ThreadCommentLikeNotification"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-comment-mention-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"ThreadCommentMentionNotification"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-comment-reply-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"ThreadCommentReplyNotification"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-comment-subscribed-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"ThreadCommentSubscribedNotification"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-like-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"ThreadLikeNotification"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/user-mod-data"},(0,n.kt)("inlineCode",{parentName:"a"},"UserModData"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);