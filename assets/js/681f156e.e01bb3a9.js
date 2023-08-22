"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[1250],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(7294);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,d=function(e,t){if(null==e)return{};var a,n,d={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var r=n.createContext({}),i=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(r.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,d=e.mdxType,l=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=i(a),m=d,b=p["".concat(r,".").concat(m)]||p[m]||u[m]||l;return a?n.createElement(b,s(s({ref:t},c),{},{components:a})):n.createElement(b,s({ref:t},c))}));function b(e,t){var a=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o[p]="string"==typeof e?e:d,s[1]=o;for(var i=2;i<l;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2196:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>s,metadata:()=>r,toc:()=>m});var n=a(7462),d=a(7294),l=a(4137);const s={id:"update-media-list-entries",title:"UpdateMediaListEntries",hide_table_of_contents:!1},o=void 0,r={unversionedId:"mutations/update-media-list-entries",id:"mutations/update-media-list-entries",title:"UpdateMediaListEntries",description:"Update multiple media list entries to the same values",source:"@site/examples/default/mutations/update-media-list-entries.mdx",sourceDirName:"mutations",slug:"/mutations/update-media-list-entries",permalink:"/examples/default/mutations/update-media-list-entries",draft:!1,tags:[],version:"current",frontMatter:{id:"update-media-list-entries",title:"UpdateMediaListEntries",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UpdateFavouriteOrder",permalink:"/examples/default/mutations/update-favourite-order"},next:{title:"UpdateUser",permalink:"/examples/default/mutations/update-user"}},i={},c=()=>(0,l.kt)(d.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(d.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(d.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>status</b></code><Bullet /><code>MediaListStatus</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-updatemedialistentriesbstatusbcodemedialiststatus-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>score</b></code><Bullet /><code>Float</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatemedialistentriesbscorebcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>scoreRaw</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatemedialistentriesbscorerawbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>progress</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatemedialistentriesbprogressbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>progressVolumes</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatemedialistentriesbprogressvolumesbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>repeat</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatemedialistentriesbrepeatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>priority</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatemedialistentriesbprioritybcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>private</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatemedialistentriesbprivatebcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>notes</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatemedialistentriesbnotesbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>hiddenFromStatusLists</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatemedialistentriesbhiddenfromstatuslistsbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>advancedScores</b></code><Bullet /><code>[Float]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatemedialistentriesbadvancedscoresbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>startedAt</b></code><Bullet /><code>FuzzyDateInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-updatemedialistentriesbstartedatbcodefuzzydateinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>completedAt</b></code><Bullet /><code>FuzzyDateInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-updatemedialistentriesbcompletedatbcodefuzzydateinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>ids</b></code><Bullet /><code>[Int]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatemedialistentriesbidsbcodeint--",level:4},{value:"Type",id:"type",level:3},{value:'<code>MediaList</code> <Badge class="badge badge--secondary" text="object"/>',id:"medialist-",level:4}],b=e=>{let{dataOpen:t,dataClose:a,children:s,startOpen:o=!1}=e;const[r,i]=(0,d.useState)(o);return(0,l.kt)("details",(0,n.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},r?t:a),r&&s)},g={Bullet:c,SpecifiedBy:p,Badge:u,toc:m,Details:b};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Update multiple media list entries to the same values"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"UpdateMediaListEntries(\n  status: MediaListStatus\n  score: Float\n  scoreRaw: Int\n  progress: Int\n  progressVolumes: Int\n  repeat: Int\n  priority: Int\n  private: Boolean\n  notes: String\n  hiddenFromStatusLists: Boolean\n  advancedScores: [Float]\n  startedAt: FuzzyDateInput\n  completedAt: FuzzyDateInput\n  ids: [Int]\n): [MediaList]\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbstatusbcodemedialiststatus-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,l.kt)("b",null,"status"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/enums/media-list-status"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaListStatus"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The watching/reading status")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbscorebcodefloat-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,l.kt)("b",null,"score"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/float"},(0,l.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The score of the media in the user's chosen scoring method")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbscorerawbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,l.kt)("b",null,"scoreRaw"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The score of the media in 100 point")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbprogressbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,l.kt)("b",null,"progress"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The amount of episodes/chapters consumed by the user")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbprogressvolumesbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,l.kt)("b",null,"progressVolumes"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The amount of volumes read by the user")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbrepeatbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,l.kt)("b",null,"repeat"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The amount of times the user has rewatched/read the media")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbprioritybcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,l.kt)("b",null,"priority"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Priority of planning")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbprivatebcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,l.kt)("b",null,"private"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the entry should only be visible to authenticated user")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbnotesbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,l.kt)("b",null,"notes"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Text notes")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbhiddenfromstatuslistsbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,l.kt)("b",null,"hiddenFromStatusLists"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the entry shown be hidden from non-custom lists")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbadvancedscoresbcodefloat--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,l.kt)("b",null,"advancedScores"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/float"},(0,l.kt)("inlineCode",{parentName:"a"},"[Float]"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Array of advanced scores")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbstartedatbcodefuzzydateinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,l.kt)("b",null,"startedAt"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/inputs/fuzzy-date-input"},(0,l.kt)("inlineCode",{parentName:"a"},"FuzzyDateInput"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When the entry was started by the user")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbcompletedatbcodefuzzydateinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,l.kt)("b",null,"completedAt"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/inputs/fuzzy-date-input"},(0,l.kt)("inlineCode",{parentName:"a"},"FuzzyDateInput"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When the entry was completed by the user")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbidsbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,l.kt)("b",null,"ids"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The list entries ids to update")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"medialist-"},(0,l.kt)("a",{parentName:"h4",href:"/examples/default/objects/media-list"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaList"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"List of anime or manga")))}k.isMDXComponent=!0}}]);