"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[8597],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=d(a),u=o,p=m["".concat(i,".").concat(u)]||m[u]||y[u]||l;return a?n.createElement(p,s(s({ref:t},c),{},{components:a})):n.createElement(p,s({ref:t},c))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,s=new Array(l);s[0]=u;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[m]="string"==typeof e?e:o,s[1]=r;for(var d=2;d<l;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2891:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>c,Details:()=>p,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>r,default:()=>k,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=a(7462),o=a(7294),l=a(3905);const s={id:"save-media-list-entry",title:"SaveMediaListEntry",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},r=void 0,i={unversionedId:"mutations/save-media-list-entry",id:"mutations/save-media-list-entry",title:"SaveMediaListEntry",description:"Create or update a media list entry",source:"@site/examples/schema/mutations/save-media-list-entry.mdx",sourceDirName:"mutations",slug:"/mutations/save-media-list-entry",permalink:"/schema/mutations/save-media-list-entry",draft:!1,tags:[],version:"current",frontMatter:{id:"save-media-list-entry",title:"SaveMediaListEntry",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},c=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SaveMediaListEntry.<b>id</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-savemedialistentrybidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveMediaListEntry.<b>mediaId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-savemedialistentrybmediaidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveMediaListEntry.<b>status</b></code><Bullet /><code>MediaListStatus</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-savemedialistentrybstatusbcodemedialiststatus-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveMediaListEntry.<b>score</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-savemedialistentrybscorebcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveMediaListEntry.<b>scoreRaw</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-savemedialistentrybscorerawbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveMediaListEntry.<b>progress</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-savemedialistentrybprogressbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveMediaListEntry.<b>progressVolumes</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-savemedialistentrybprogressvolumesbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveMediaListEntry.<b>repeat</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-savemedialistentrybrepeatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveMediaListEntry.<b>priority</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-savemedialistentrybprioritybcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveMediaListEntry.<b>private</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-savemedialistentrybprivatebcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveMediaListEntry.<b>notes</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-savemedialistentrybnotesbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveMediaListEntry.<b>hiddenFromStatusLists</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-savemedialistentrybhiddenfromstatuslistsbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveMediaListEntry.<b>customLists</b></code><Bullet /><code>[String]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-savemedialistentrybcustomlistsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveMediaListEntry.<b>advancedScores</b></code><Bullet /><code>[Float]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-savemedialistentrybadvancedscoresbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveMediaListEntry.<b>startedAt</b></code><Bullet /><code>FuzzyDateInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-savemedialistentrybstartedatbcodefuzzydateinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveMediaListEntry.<b>completedAt</b></code><Bullet /><code>FuzzyDateInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-savemedialistentrybcompletedatbcodefuzzydateinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>MediaList</code> <Badge class="secondary" text="object"/>',id:"medialist-",level:4}],p=e=>{let{dataOpen:t,dataClose:a,children:s,startOpen:r=!1}=e;const[i,d]=(0,o.useState)(r);return(0,l.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&s)},h={Bullet:c,SpecifiedBy:m,Badge:y,toc:u,Details:p};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Create or update a media list entry"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"SaveMediaListEntry(\n  id: Int\n  mediaId: Int\n  status: MediaListStatus\n  score: Float\n  scoreRaw: Int\n  progress: Int\n  progressVolumes: Int\n  repeat: Int\n  priority: Int\n  private: Boolean\n  notes: String\n  hiddenFromStatusLists: Boolean\n  customLists: [String]\n  advancedScores: [Float]\n  startedAt: FuzzyDateInput\n  completedAt: FuzzyDateInput\n): MediaList\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-savemedialistentrybidbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SaveMediaListEntry.",(0,l.kt)("b",null,"id"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The list entry id, required for updating")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-savemedialistentrybmediaidbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SaveMediaListEntry.",(0,l.kt)("b",null,"mediaId"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The id of the media the entry is of")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-savemedialistentrybstatusbcodemedialiststatus-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SaveMediaListEntry.",(0,l.kt)("b",null,"status"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-status"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaListStatus"))," ",(0,l.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The watching/reading status")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-savemedialistentrybscorebcodefloat-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SaveMediaListEntry.",(0,l.kt)("b",null,"score"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/float"},(0,l.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The score of the media in the user's chosen scoring method")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-savemedialistentrybscorerawbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SaveMediaListEntry.",(0,l.kt)("b",null,"scoreRaw"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The score of the media in 100 point")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-savemedialistentrybprogressbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SaveMediaListEntry.",(0,l.kt)("b",null,"progress"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The amount of episodes/chapters consumed by the user")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-savemedialistentrybprogressvolumesbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SaveMediaListEntry.",(0,l.kt)("b",null,"progressVolumes"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The amount of volumes read by the user")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-savemedialistentrybrepeatbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SaveMediaListEntry.",(0,l.kt)("b",null,"repeat"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The amount of times the user has rewatched/read the media")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-savemedialistentrybprioritybcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SaveMediaListEntry.",(0,l.kt)("b",null,"priority"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Priority of planning")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-savemedialistentrybprivatebcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SaveMediaListEntry.",(0,l.kt)("b",null,"private"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the entry should only be visible to authenticated user")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-savemedialistentrybnotesbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SaveMediaListEntry.",(0,l.kt)("b",null,"notes"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Text notes")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-savemedialistentrybhiddenfromstatuslistsbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SaveMediaListEntry.",(0,l.kt)("b",null,"hiddenFromStatusLists"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the entry shown be hidden from non-custom lists")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-savemedialistentrybcustomlistsbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SaveMediaListEntry.",(0,l.kt)("b",null,"customLists"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,l.kt)(y,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Array of custom list names which should be enabled for this entry")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-savemedialistentrybadvancedscoresbcodefloat--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SaveMediaListEntry.",(0,l.kt)("b",null,"advancedScores"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/float"},(0,l.kt)("inlineCode",{parentName:"a"},"[Float]"))," ",(0,l.kt)(y,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Array of advanced scores")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-savemedialistentrybstartedatbcodefuzzydateinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SaveMediaListEntry.",(0,l.kt)("b",null,"startedAt"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/inputs/fuzzy-date-input"},(0,l.kt)("inlineCode",{parentName:"a"},"FuzzyDateInput"))," ",(0,l.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When the entry was started by the user")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-savemedialistentrybcompletedatbcodefuzzydateinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SaveMediaListEntry.",(0,l.kt)("b",null,"completedAt"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/inputs/fuzzy-date-input"},(0,l.kt)("inlineCode",{parentName:"a"},"FuzzyDateInput"))," ",(0,l.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When the entry was completed by the user")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"medialist-"},(0,l.kt)("a",{parentName:"h4",href:"/schema/objects/media-list"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaList"))," ",(0,l.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"List of anime or manga")))}k.isMDXComponent=!0}}]);