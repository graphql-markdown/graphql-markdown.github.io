"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2535],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var l=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,o=function(e,t){if(null==e)return{};var a,l,o={},d=Object.keys(e);for(l=0;l<d.length;l++)a=d[l],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(l=0;l<d.length;l++)a=d[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var r=l.createContext({}),i=function(e){var t=l.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=i(e.components);return l.createElement(r.Provider,{value:t},e.children)},m="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,o=e.mdxType,d=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(a),u=o,p=m["".concat(r,".").concat(u)]||m[u]||b[u]||d;return a?l.createElement(p,n(n({ref:t},c),{},{components:a})):l.createElement(p,n({ref:t},c))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var d=a.length,n=new Array(d);n[0]=u;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[m]="string"==typeof e?e:o,n[1]=s;for(var i=2;i<d;i++)n[i]=a[i];return l.createElement.apply(null,n)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6355:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>c,Details:()=>p,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>n,metadata:()=>r,toc:()=>u});var l=a(7462),o=a(7294),d=a(3905);const n={id:"media-list",title:"MediaList",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},s=void 0,r={unversionedId:"objects/media-list",id:"objects/media-list",title:"MediaList",description:"List of anime or manga",source:"@site/examples/default/objects/media-list.mdx",sourceDirName:"objects",slug:"/objects/media-list",permalink:"/examples/default/objects/media-list",draft:!1,tags:[],version:"current",frontMatter:{id:"media-list",title:"MediaList",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},i={},c=()=>(0,d.kt)(o.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,d.kt)(o.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,d.kt)(o.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>userId</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbuseridbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>mediaId</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbmediaidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>status</b></code><Bullet /><code>MediaListStatus</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-medialistbstatusbcodemedialiststatus-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>score</b></code><Bullet /><code>Float</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbscorebcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>progress</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbprogressbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>progressVolumes</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbprogressvolumesbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>repeat</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbrepeatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>priority</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbprioritybcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>private</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbprivatebcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>notes</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbnotesbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>hiddenFromStatusLists</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbhiddenfromstatuslistsbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>customLists</b></code><Bullet /><code>Json</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbcustomlistsbcodejson-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>advancedScores</b></code><Bullet /><code>Json</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbadvancedscoresbcodejson-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>startedAt</b></code><Bullet /><code>FuzzyDate</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-medialistbstartedatbcodefuzzydate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>completedAt</b></code><Bullet /><code>FuzzyDate</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-medialistbcompletedatbcodefuzzydate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>updatedAt</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbupdatedatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>createdAt</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistbcreatedatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>media</b></code><Bullet /><code>Media</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-medialistbmediabcodemedia-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaList.<b>user</b></code><Bullet /><code>User</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-medialistbuserbcodeuser-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:a,children:n,startOpen:s=!1}=e;const[r,i]=(0,o.useState)(s);return(0,d.kt)("details",(0,l.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},r?t:a),r&&n)},k={Bullet:c,SpecifiedBy:m,Badge:b,toc:u,Details:p};function g(e){let{components:t,...a}=e;return(0,d.kt)("wrapper",(0,l.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"List of anime or manga"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaList {\n  id: Int!\n  userId: Int!\n  mediaId: Int!\n  status: MediaListStatus\n  score(format: ScoreFormat): Float\n  progress: Int\n  progressVolumes: Int\n  repeat: Int\n  priority: Int\n  private: Boolean\n  notes: String\n  hiddenFromStatusLists: Boolean\n  customLists(asArray: Boolean): Json\n  advancedScores: Json\n  startedAt: FuzzyDate\n  completedAt: FuzzyDate\n  updatedAt: Int\n  createdAt: Int\n  media: Media\n  user: User\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-medialistbidbcodeint--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,d.kt)("b",null,"id"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The id of the list entry")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-medialistbuseridbcodeint--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,d.kt)("b",null,"userId"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The id of the user owner of the list entry")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-medialistbmediaidbcodeint--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,d.kt)("b",null,"mediaId"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The id of the media")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-medialistbstatusbcodemedialiststatus-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,d.kt)("b",null,"status"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/enums/media-list-status"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaListStatus"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The watching/reading status")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-medialistbscorebcodefloat-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,d.kt)("b",null,"score"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/float"},(0,d.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The score of the entry"),(0,d.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-medialistscorebformatbcodescoreformat-"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaList.score.",(0,d.kt)("b",null,"format"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/examples/default/enums/score-format"},(0,d.kt)("inlineCode",{parentName:"a"},"ScoreFormat"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,d.kt)("p",{parentName:"blockquote"},"Force the score to be returned in the provided format type.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-medialistbprogressbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,d.kt)("b",null,"progress"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The amount of episodes/chapters consumed by the user")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-medialistbprogressvolumesbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,d.kt)("b",null,"progressVolumes"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The amount of volumes read by the user")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-medialistbrepeatbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,d.kt)("b",null,"repeat"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The amount of times the user has rewatched/read the media")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-medialistbprioritybcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,d.kt)("b",null,"priority"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Priority of planning")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-medialistbprivatebcodeboolean-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,d.kt)("b",null,"private"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,d.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"If the entry should only be visible to authenticated user")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-medialistbnotesbcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,d.kt)("b",null,"notes"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Text notes")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-medialistbhiddenfromstatuslistsbcodeboolean-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,d.kt)("b",null,"hiddenFromStatusLists"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,d.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"If the entry shown be hidden from non-custom lists")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-medialistbcustomlistsbcodejson-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,d.kt)("b",null,"customLists"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/json"},(0,d.kt)("inlineCode",{parentName:"a"},"Json"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Map of booleans for which custom lists the entry are in"),(0,d.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-medialistcustomlistsbasarraybcodeboolean-"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaList.customLists.",(0,d.kt)("b",null,"asArray"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/examples/default/scalars/boolean"},(0,d.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("p",{parentName:"blockquote"},"Change return structure to an array of objects")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-medialistbadvancedscoresbcodejson-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,d.kt)("b",null,"advancedScores"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/json"},(0,d.kt)("inlineCode",{parentName:"a"},"Json"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Map of advanced scores with name keys")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-medialistbstartedatbcodefuzzydate-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,d.kt)("b",null,"startedAt"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/objects/fuzzy-date"},(0,d.kt)("inlineCode",{parentName:"a"},"FuzzyDate"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"When the entry was started by the user")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-medialistbcompletedatbcodefuzzydate-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,d.kt)("b",null,"completedAt"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/objects/fuzzy-date"},(0,d.kt)("inlineCode",{parentName:"a"},"FuzzyDate"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"When the entry was completed by the user")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-medialistbupdatedatbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,d.kt)("b",null,"updatedAt"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"When the entry data was last updated")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-medialistbcreatedatbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,d.kt)("b",null,"createdAt"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"When the entry data was created")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-medialistbmediabcodemedia-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,d.kt)("b",null,"media"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/objects/media"},(0,d.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-medialistbuserbcodeuser-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"MediaList.",(0,d.kt)("b",null,"user"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/objects/user"},(0,d.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"returned-by"},"Returned by"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/media-list"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaList"))," ",(0,d.kt)(b,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-media-list-entry"},(0,d.kt)("inlineCode",{parentName:"a"},"SaveMediaListEntry"))," ",(0,d.kt)(b,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/update-media-list-entries"},(0,d.kt)("inlineCode",{parentName:"a"},"UpdateMediaListEntries"))," ",(0,d.kt)(b,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/internal-page"},(0,d.kt)("inlineCode",{parentName:"a"},"InternalPage"))," ",(0,d.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media"},(0,d.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,d.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-list-collection"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaListCollection"))," ",(0,d.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-list-group"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaListGroup"))," ",(0,d.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/page"},(0,d.kt)("inlineCode",{parentName:"a"},"Page"))," ",(0,d.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);