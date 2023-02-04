"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[22],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>u});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=o.createContext({}),d=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=d(a),k=n,u=m["".concat(c,".").concat(k)]||m[k]||p[k]||r;return a?o.createElement(u,s(s({ref:t},i),{},{components:a})):o.createElement(u,s({ref:t},i))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:n,s[1]=l;for(var d=2;d<r;d++)s[d]=a[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9780:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>k,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var o=a(7462),n=a(7294),r=a(3905);const s={id:"user",title:"User",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,c={unversionedId:"objects/user",id:"objects/user",title:"User",description:"A user",source:"@site/examples/schema/objects/user.mdx",sourceDirName:"objects",slug:"/objects/user",permalink:"/schema/objects/user",draft:!1,tags:[],version:"current",frontMatter:{id:"user",title:"User",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>about</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbaboutbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>avatar</b></code><Bullet /><code>UserAvatar</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userbavatarbcodeuseravatar-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>bannerImage</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbbannerimagebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>isFollowing</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbisfollowingbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>isFollower</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbisfollowerbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>isBlocked</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbisblockedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>bans</b></code><Bullet /><code>Json</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbbansbcodejson-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>options</b></code><Bullet /><code>UserOptions</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userboptionsbcodeuseroptions-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>mediaListOptions</b></code><Bullet /><code>MediaListOptions</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userbmedialistoptionsbcodemedialistoptions-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>favourites</b></code><Bullet /><code>Favourites</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userbfavouritesbcodefavourites-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>statistics</b></code><Bullet /><code>UserStatisticTypes</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userbstatisticsbcodeuserstatistictypes-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>unreadNotificationCount</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbunreadnotificationcountbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>siteUrl</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbsiteurlbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>donatorTier</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbdonatortierbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>donatorBadge</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbdonatorbadgebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>moderatorRoles</b></code><Bullet /><code>[ModRole]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-userbmoderatorrolesbcodemodrole--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>createdAt</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbcreatedatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>updatedAt</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbupdatedatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>stats</b></code><Bullet /><code>UserStats</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userbstatsbcodeuserstats-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>moderatorStatus</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbmoderatorstatusbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>previousNames</b></code><Bullet /><code>[UserPreviousName]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userbpreviousnamesbcodeuserpreviousname--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],m=()=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(n.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:i,Bullet:m,SpecifiedBy:p,Badge:k};function y(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A user"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type User {\n  id: Int!\n  name: String!\n  about(asHtml: Boolean): String\n  avatar: UserAvatar\n  bannerImage: String\n  isFollowing: Boolean\n  isFollower: Boolean\n  isBlocked: Boolean\n  bans: Json\n  options: UserOptions\n  mediaListOptions: MediaListOptions\n  favourites(page: Int): Favourites\n  statistics: UserStatisticTypes\n  unreadNotificationCount: Int\n  siteUrl: String\n  donatorTier: Int\n  donatorBadge: String\n  moderatorRoles: [ModRole]\n  createdAt: Int\n  updatedAt: Int\n  stats: UserStats\n  moderatorStatus: String\n  previousNames: [UserPreviousName]\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbidbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"id"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The id of the user")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbnamebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"name"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The name of the user")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbaboutbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"about"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The bio written by user (Markdown)"),(0,r.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-useraboutbashtmlbcodeboolean-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.about.",(0,r.kt)("b",null,"asHtml"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,r.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("p",{parentName:"blockquote"},"Return the string in pre-parsed html instead of markdown")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbavatarbcodeuseravatar-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"avatar"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/user-avatar"},(0,r.kt)("inlineCode",{parentName:"a"},"UserAvatar"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The user's avatar images")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbbannerimagebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"bannerImage"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The user's banner images")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbisfollowingbcodeboolean-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"isFollowing"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,r.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the authenticated user if following this user")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbisfollowerbcodeboolean-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"isFollower"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,r.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If this user if following the authenticated user")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbisblockedbcodeboolean-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"isBlocked"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,r.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the user is blocked by the authenticated user")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbbansbcodejson-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"bans"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/json"},(0,r.kt)("inlineCode",{parentName:"a"},"Json"))," ",(0,r.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userboptionsbcodeuseroptions-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"options"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/user-options"},(0,r.kt)("inlineCode",{parentName:"a"},"UserOptions"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The user's general options")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbmedialistoptionsbcodemedialistoptions-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"mediaListOptions"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media-list-options"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaListOptions"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The user's media list options")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbfavouritesbcodefavourites-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"favourites"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/favourites"},(0,r.kt)("inlineCode",{parentName:"a"},"Favourites"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The users favourites"),(0,r.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-userfavouritesbpagebcodeint-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.favourites.",(0,r.kt)("b",null,"page"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("p",{parentName:"blockquote"},"Deprecated. Use page arguments on each favourite field instead.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbstatisticsbcodeuserstatistictypes-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"statistics"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/user-statistic-types"},(0,r.kt)("inlineCode",{parentName:"a"},"UserStatisticTypes"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The users anime & manga list statistics")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbunreadnotificationcountbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"unreadNotificationCount"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The number of unread notifications the user has")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbsiteurlbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"siteUrl"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The url for the user page on the AniList website")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbdonatortierbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"donatorTier"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The donation tier of the user")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbdonatorbadgebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"donatorBadge"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Custom donation badge text")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbmoderatorrolesbcodemodrole--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"moderatorRoles"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/mod-role"},(0,r.kt)("inlineCode",{parentName:"a"},"[ModRole]"))," ",(0,r.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The user's moderator roles if they are a site moderator")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbcreatedatbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"createdAt"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When the user's account was created. (Does not exist for accounts created before 2020)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbupdatedatbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"updatedAt"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When the user's data was last updated")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbstatsbcodeuserstats-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"stats"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/user-stats"},(0,r.kt)("inlineCode",{parentName:"a"},"UserStats"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The user's statistics")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbmoderatorstatusbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"moderatorStatus"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the user is a moderator or data moderator")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-userbpreviousnamesbcodeuserpreviousname--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,r.kt)("b",null,"previousNames"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/user-previous-name"},(0,r.kt)("inlineCode",{parentName:"a"},"[UserPreviousName]"))," ",(0,r.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The user's previously used names.")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/schema/queries/follower"},(0,r.kt)("inlineCode",{parentName:"a"},"Follower"))," ",(0,r.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/queries/following"},(0,r.kt)("inlineCode",{parentName:"a"},"Following"))," ",(0,r.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/queries/like"},(0,r.kt)("inlineCode",{parentName:"a"},"Like"))," ",(0,r.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/mutations/toggle-follow"},(0,r.kt)("inlineCode",{parentName:"a"},"ToggleFollow"))," ",(0,r.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/mutations/toggle-like"},(0,r.kt)("inlineCode",{parentName:"a"},"ToggleLike"))," ",(0,r.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/mutations/update-user"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateUser"))," ",(0,r.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/queries/user"},(0,r.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,r.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/queries/viewer"},(0,r.kt)("inlineCode",{parentName:"a"},"Viewer"))," ",(0,r.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"})),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/schema/objects/activity-like-notification"},(0,r.kt)("inlineCode",{parentName:"a"},"ActivityLikeNotification"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/activity-mention-notification"},(0,r.kt)("inlineCode",{parentName:"a"},"ActivityMentionNotification"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/activity-message-notification"},(0,r.kt)("inlineCode",{parentName:"a"},"ActivityMessageNotification"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/activity-reply"},(0,r.kt)("inlineCode",{parentName:"a"},"ActivityReply"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/activity-reply-like-notification"},(0,r.kt)("inlineCode",{parentName:"a"},"ActivityReplyLikeNotification"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/activity-reply-notification"},(0,r.kt)("inlineCode",{parentName:"a"},"ActivityReplyNotification"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/activity-reply-subscribed-notification"},(0,r.kt)("inlineCode",{parentName:"a"},"ActivityReplySubscribedNotification"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/ani-chart-user"},(0,r.kt)("inlineCode",{parentName:"a"},"AniChartUser"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/character-submission"},(0,r.kt)("inlineCode",{parentName:"a"},"CharacterSubmission"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/following-notification"},(0,r.kt)("inlineCode",{parentName:"a"},"FollowingNotification"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/internal-page"},(0,r.kt)("inlineCode",{parentName:"a"},"InternalPage"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/list-activity"},(0,r.kt)("inlineCode",{parentName:"a"},"ListActivity"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/media-list"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaList"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/media-list-collection"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaListCollection"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/media-submission"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaSubmission"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/message-activity"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageActivity"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/mod-action"},(0,r.kt)("inlineCode",{parentName:"a"},"ModAction"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/page"},(0,r.kt)("inlineCode",{parentName:"a"},"Page"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/recommendation"},(0,r.kt)("inlineCode",{parentName:"a"},"Recommendation"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/report"},(0,r.kt)("inlineCode",{parentName:"a"},"Report"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/review"},(0,r.kt)("inlineCode",{parentName:"a"},"Review"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/revision-history"},(0,r.kt)("inlineCode",{parentName:"a"},"RevisionHistory"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/staff"},(0,r.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/staff-submission"},(0,r.kt)("inlineCode",{parentName:"a"},"StaffSubmission"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/text-activity"},(0,r.kt)("inlineCode",{parentName:"a"},"TextActivity"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/thread"},(0,r.kt)("inlineCode",{parentName:"a"},"Thread"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/thread-comment"},(0,r.kt)("inlineCode",{parentName:"a"},"ThreadComment"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/thread-comment-like-notification"},(0,r.kt)("inlineCode",{parentName:"a"},"ThreadCommentLikeNotification"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/thread-comment-mention-notification"},(0,r.kt)("inlineCode",{parentName:"a"},"ThreadCommentMentionNotification"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/thread-comment-reply-notification"},(0,r.kt)("inlineCode",{parentName:"a"},"ThreadCommentReplyNotification"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/thread-comment-subscribed-notification"},(0,r.kt)("inlineCode",{parentName:"a"},"ThreadCommentSubscribedNotification"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/thread-like-notification"},(0,r.kt)("inlineCode",{parentName:"a"},"ThreadLikeNotification"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/user-mod-data"},(0,r.kt)("inlineCode",{parentName:"a"},"UserModData"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);