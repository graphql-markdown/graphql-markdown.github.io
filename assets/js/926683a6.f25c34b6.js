"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[829],{3905:(e,t,a)=>{a.d(t,{Zo:()=>r,kt:()=>p});var l=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,o=function(e,t){if(null==e)return{};var a,l,o={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=l.createContext({}),c=function(e){var t=l.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},r=function(e){var t=c(e.components);return l.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,d=e.parentName,r=s(e,["components","mdxType","originalType","parentName"]),m=c(a),k=o,p=m["".concat(d,".").concat(k)]||m[k]||u[k]||n;return a?l.createElement(p,i(i({ref:t},r),{},{components:a})):l.createElement(p,i({ref:t},r))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=k;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6511:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>k,Bullet:()=>m,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>d,toc:()=>r});var l=a(7462),o=a(7294),n=a(3905);const i={id:"media-list-collection",title:"MediaListCollection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,d={unversionedId:"queries/media-list-collection",id:"queries/media-list-collection",title:"MediaListCollection",description:"Media list collection query, provides list pre-grouped by status & custom lists. User ID and Media Type arguments required.",source:"@site/examples/schema/queries/media-list-collection.mdx",sourceDirName:"queries",slug:"/queries/media-list-collection",permalink:"/schema/queries/media-list-collection",draft:!1,tags:[],version:"current",frontMatter:{id:"media-list-collection",title:"MediaListCollection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},r=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListCollection.<b>userId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistcollectionbuseridbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListCollection.<b>userName</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistcollectionbusernamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListCollection.<b>type</b></code><Bullet /><code>MediaType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-medialistcollectionbtypebcodemediatype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListCollection.<b>status</b></code><Bullet /><code>MediaListStatus</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-medialistcollectionbstatusbcodemedialiststatus-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListCollection.<b>notes</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistcollectionbnotesbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListCollection.<b>startedAt</b></code><Bullet /><code>FuzzyDateInt</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistcollectionbstartedatbcodefuzzydateint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListCollection.<b>completedAt</b></code><Bullet /><code>FuzzyDateInt</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistcollectionbcompletedatbcodefuzzydateint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListCollection.<b>forceSingleCompletedList</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistcollectionbforcesinglecompletedlistbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListCollection.<b>chunk</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistcollectionbchunkbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListCollection.<b>perChunk</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistcollectionbperchunkbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListCollection.<b>status_in</b></code><Bullet /><code>[MediaListStatus]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-medialistcollectionbstatus_inbcodemedialiststatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListCollection.<b>status_not_in</b></code><Bullet /><code>[MediaListStatus]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-medialistcollectionbstatus_not_inbcodemedialiststatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListCollection.<b>status_not</b></code><Bullet /><code>MediaListStatus</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-medialistcollectionbstatus_notbcodemedialiststatus-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListCollection.<b>notes_like</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistcollectionbnotes_likebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListCollection.<b>startedAt_greater</b></code><Bullet /><code>FuzzyDateInt</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistcollectionbstartedat_greaterbcodefuzzydateint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListCollection.<b>startedAt_lesser</b></code><Bullet /><code>FuzzyDateInt</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistcollectionbstartedat_lesserbcodefuzzydateint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListCollection.<b>startedAt_like</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistcollectionbstartedat_likebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListCollection.<b>completedAt_greater</b></code><Bullet /><code>FuzzyDateInt</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistcollectionbcompletedat_greaterbcodefuzzydateint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListCollection.<b>completedAt_lesser</b></code><Bullet /><code>FuzzyDateInt</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistcollectionbcompletedat_lesserbcodefuzzydateint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListCollection.<b>completedAt_like</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistcollectionbcompletedat_likebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListCollection.<b>sort</b></code><Bullet /><code>[MediaListSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-medialistcollectionbsortbcodemedialistsort--",level:4},{value:"Type",id:"type",level:3},{value:'<code>MediaListCollection</code> <Badge class="secondary" text="object"/>',id:"medialistcollection-",level:4}],m=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{className:"badge badge--"+e.class},e.text)),p={toc:r,Bullet:m,SpecifiedBy:u,Badge:k};function y(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Media list collection query, provides list pre-grouped by status & custom lists. User ID and Media Type arguments required."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"MediaListCollection(\n  userId: Int\n  userName: String\n  type: MediaType\n  status: MediaListStatus\n  notes: String\n  startedAt: FuzzyDateInt\n  completedAt: FuzzyDateInt\n  forceSingleCompletedList: Boolean\n  chunk: Int\n  perChunk: Int\n  status_in: [MediaListStatus]\n  status_not_in: [MediaListStatus]\n  status_not: MediaListStatus\n  notes_like: String\n  startedAt_greater: FuzzyDateInt\n  startedAt_lesser: FuzzyDateInt\n  startedAt_like: String\n  completedAt_greater: FuzzyDateInt\n  completedAt_lesser: FuzzyDateInt\n  completedAt_like: String\n  sort: [MediaListSort]\n): MediaListCollection\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-medialistcollectionbuseridbcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.",(0,n.kt)("b",null,"userId"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by a user's id")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-medialistcollectionbusernamebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.",(0,n.kt)("b",null,"userName"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by a user's name")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-medialistcollectionbtypebcodemediatype-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.",(0,n.kt)("b",null,"type"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/enums/media-type"},(0,n.kt)("inlineCode",{parentName:"a"},"MediaType"))," ",(0,n.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by the list entries media type")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-medialistcollectionbstatusbcodemedialiststatus-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.",(0,n.kt)("b",null,"status"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-status"},(0,n.kt)("inlineCode",{parentName:"a"},"MediaListStatus"))," ",(0,n.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by the watching/reading status")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-medialistcollectionbnotesbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.",(0,n.kt)("b",null,"notes"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by note words and #tags")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-medialistcollectionbstartedatbcodefuzzydateint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.",(0,n.kt)("b",null,"startedAt"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,n.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by the date the user started the media")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-medialistcollectionbcompletedatbcodefuzzydateint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.",(0,n.kt)("b",null,"completedAt"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,n.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by the date the user completed the media")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-medialistcollectionbforcesinglecompletedlistbcodeboolean-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.",(0,n.kt)("b",null,"forceSingleCompletedList"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Always return completed list entries in one group, overriding the user's split completed option.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-medialistcollectionbchunkbcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.",(0,n.kt)("b",null,"chunk"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Which chunk of list entries to load")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-medialistcollectionbperchunkbcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.",(0,n.kt)("b",null,"perChunk"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The amount of entries per chunk, max 500")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-medialistcollectionbstatus_inbcodemedialiststatus--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.",(0,n.kt)("b",null,"status_in"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-status"},(0,n.kt)("inlineCode",{parentName:"a"},"[MediaListStatus]"))," ",(0,n.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by the watching/reading status")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-medialistcollectionbstatus_not_inbcodemedialiststatus--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.",(0,n.kt)("b",null,"status_not_in"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-status"},(0,n.kt)("inlineCode",{parentName:"a"},"[MediaListStatus]"))," ",(0,n.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by the watching/reading status")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-medialistcollectionbstatus_notbcodemedialiststatus-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.",(0,n.kt)("b",null,"status_not"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-status"},(0,n.kt)("inlineCode",{parentName:"a"},"MediaListStatus"))," ",(0,n.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by the watching/reading status")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-medialistcollectionbnotes_likebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.",(0,n.kt)("b",null,"notes_like"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by note words and #tags")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-medialistcollectionbstartedat_greaterbcodefuzzydateint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.",(0,n.kt)("b",null,"startedAt_greater"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,n.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by the date the user started the media")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-medialistcollectionbstartedat_lesserbcodefuzzydateint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.",(0,n.kt)("b",null,"startedAt_lesser"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,n.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by the date the user started the media")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-medialistcollectionbstartedat_likebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.",(0,n.kt)("b",null,"startedAt_like"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by the date the user started the media")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-medialistcollectionbcompletedat_greaterbcodefuzzydateint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.",(0,n.kt)("b",null,"completedAt_greater"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,n.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by the date the user completed the media")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-medialistcollectionbcompletedat_lesserbcodefuzzydateint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.",(0,n.kt)("b",null,"completedAt_lesser"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,n.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by the date the user completed the media")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-medialistcollectionbcompletedat_likebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.",(0,n.kt)("b",null,"completedAt_like"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by the date the user completed the media")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-medialistcollectionbsortbcodemedialistsort--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaListCollection.",(0,n.kt)("b",null,"sort"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-sort"},(0,n.kt)("inlineCode",{parentName:"a"},"[MediaListSort]"))," ",(0,n.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The order the results will be returned in")),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"medialistcollection-"},(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/media-list-collection"},(0,n.kt)("inlineCode",{parentName:"a"},"MediaListCollection"))," ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"List of anime or manga")))}y.isMDXComponent=!0}}]);