"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[92],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},s=Object.keys(e);for(l=0;l<s.length;l++)a=s[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)a=s[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=l.createContext({}),r=function(e){var t=l.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=r(e.components);return l.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=r(a),k=n,y=m["".concat(d,".").concat(k)]||m[k]||u[k]||s;return a?l.createElement(y,i(i({ref:t},c),{},{components:a})):l.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var r=2;r<s;r++)i[r]=a[r];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3861:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>k,Bullet:()=>m,SpecifiedBy:()=>u,assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var l=a(7462),n=a(7294),s=a(3905);const i={id:"media-list",title:"MediaList",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,d={unversionedId:"queries/media-list",id:"queries/media-list",title:"MediaList",description:"Media list query",source:"@site/examples/schema/queries/media-list.mdx",sourceDirName:"queries",slug:"/queries/media-list",permalink:"/schema/queries/media-list",draft:!1,tags:[],version:"current",frontMatter:{id:"media-list",title:"MediaList",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},r={},c=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>id</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>userId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbuseridbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>userName</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbusernamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>type</b></code><Bullet /><code>MediaType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-medialistbtypebcodemediatype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>status</b></code><Bullet /><code>MediaListStatus</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-medialistbstatusbcodemedialiststatus-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>mediaId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbmediaidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>isFollowing</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbisfollowingbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>notes</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbnotesbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>startedAt</b></code><Bullet /><code>FuzzyDateInt</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbstartedatbcodefuzzydateint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>completedAt</b></code><Bullet /><code>FuzzyDateInt</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbcompletedatbcodefuzzydateint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>compareWithAuthList</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbcomparewithauthlistbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>userId_in</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbuserid_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>status_in</b></code><Bullet /><code>[MediaListStatus]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-medialistbstatus_inbcodemedialiststatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>status_not_in</b></code><Bullet /><code>[MediaListStatus]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-medialistbstatus_not_inbcodemedialiststatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>status_not</b></code><Bullet /><code>MediaListStatus</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-medialistbstatus_notbcodemedialiststatus-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>mediaId_in</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbmediaid_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>mediaId_not_in</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbmediaid_not_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>notes_like</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbnotes_likebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>startedAt_greater</b></code><Bullet /><code>FuzzyDateInt</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbstartedat_greaterbcodefuzzydateint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>startedAt_lesser</b></code><Bullet /><code>FuzzyDateInt</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbstartedat_lesserbcodefuzzydateint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>startedAt_like</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbstartedat_likebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>completedAt_greater</b></code><Bullet /><code>FuzzyDateInt</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbcompletedat_greaterbcodefuzzydateint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>completedAt_lesser</b></code><Bullet /><code>FuzzyDateInt</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbcompletedat_lesserbcodefuzzydateint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>completedAt_like</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbcompletedat_likebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>sort</b></code><Bullet /><code>[MediaListSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-medialistbsortbcodemedialistsort--",level:4},{value:"Type",id:"type",level:3},{value:'<code>MediaList</code> <Badge class="secondary" text="object"/>',id:"medialist-",level:4}],m=()=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,s.kt)(n.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:c,Bullet:m,SpecifiedBy:u,Badge:k};function h(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,l.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Media list query"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"MediaList(\n  id: Int\n  userId: Int\n  userName: String\n  type: MediaType\n  status: MediaListStatus\n  mediaId: Int\n  isFollowing: Boolean\n  notes: String\n  startedAt: FuzzyDateInt\n  completedAt: FuzzyDateInt\n  compareWithAuthList: Boolean\n  userId_in: [Int]\n  status_in: [MediaListStatus]\n  status_not_in: [MediaListStatus]\n  status_not: MediaListStatus\n  mediaId_in: [Int]\n  mediaId_not_in: [Int]\n  notes_like: String\n  startedAt_greater: FuzzyDateInt\n  startedAt_lesser: FuzzyDateInt\n  startedAt_like: String\n  completedAt_greater: FuzzyDateInt\n  completedAt_lesser: FuzzyDateInt\n  completedAt_like: String\n  sort: [MediaListSort]\n): MediaList\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistbidbcodeint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,s.kt)("b",null,"id"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by a list entry's id")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistbuseridbcodeint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,s.kt)("b",null,"userId"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by a user's id")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistbusernamebcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,s.kt)("b",null,"userName"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by a user's name")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistbtypebcodemediatype-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,s.kt)("b",null,"type"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/enums/media-type"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaType"))," ",(0,s.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by the list entries media type")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistbstatusbcodemedialiststatus-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,s.kt)("b",null,"status"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-status"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaListStatus"))," ",(0,s.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by the watching/reading status")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistbmediaidbcodeint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,s.kt)("b",null,"mediaId"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by the media id of the list entry")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistbisfollowingbcodeboolean-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,s.kt)("b",null,"isFollowing"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,s.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter list entries to users who are being followed by the authenticated user")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistbnotesbcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,s.kt)("b",null,"notes"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by note words and #tags")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistbstartedatbcodefuzzydateint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,s.kt)("b",null,"startedAt"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,s.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt"))," ",(0,s.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by the date the user started the media")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistbcompletedatbcodefuzzydateint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,s.kt)("b",null,"completedAt"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,s.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt"))," ",(0,s.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by the date the user completed the media")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistbcomparewithauthlistbcodeboolean-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,s.kt)("b",null,"compareWithAuthList"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,s.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Limit to only entries also on the auth user's list. Requires user id or name arguments.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistbuserid_inbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,s.kt)("b",null,"userId_in"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,s.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by a user's id")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistbstatus_inbcodemedialiststatus--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,s.kt)("b",null,"status_in"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-status"},(0,s.kt)("inlineCode",{parentName:"a"},"[MediaListStatus]"))," ",(0,s.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by the watching/reading status")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistbstatus_not_inbcodemedialiststatus--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,s.kt)("b",null,"status_not_in"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-status"},(0,s.kt)("inlineCode",{parentName:"a"},"[MediaListStatus]"))," ",(0,s.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by the watching/reading status")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistbstatus_notbcodemedialiststatus-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,s.kt)("b",null,"status_not"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-status"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaListStatus"))," ",(0,s.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by the watching/reading status")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistbmediaid_inbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,s.kt)("b",null,"mediaId_in"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,s.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by the media id of the list entry")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistbmediaid_not_inbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,s.kt)("b",null,"mediaId_not_in"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,s.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by the media id of the list entry")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistbnotes_likebcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,s.kt)("b",null,"notes_like"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by note words and #tags")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistbstartedat_greaterbcodefuzzydateint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,s.kt)("b",null,"startedAt_greater"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,s.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt"))," ",(0,s.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by the date the user started the media")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistbstartedat_lesserbcodefuzzydateint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,s.kt)("b",null,"startedAt_lesser"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,s.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt"))," ",(0,s.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by the date the user started the media")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistbstartedat_likebcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,s.kt)("b",null,"startedAt_like"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by the date the user started the media")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistbcompletedat_greaterbcodefuzzydateint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,s.kt)("b",null,"completedAt_greater"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,s.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt"))," ",(0,s.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by the date the user completed the media")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistbcompletedat_lesserbcodefuzzydateint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,s.kt)("b",null,"completedAt_lesser"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,s.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt"))," ",(0,s.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by the date the user completed the media")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistbcompletedat_likebcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,s.kt)("b",null,"completedAt_like"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by the date the user completed the media")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistbsortbcodemedialistsort--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,s.kt)("b",null,"sort"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-sort"},(0,s.kt)("inlineCode",{parentName:"a"},"[MediaListSort]"))," ",(0,s.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The order the results will be returned in")),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"medialist-"},(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/media-list"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaList"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"List of anime or manga")))}h.isMDXComponent=!0}}]);