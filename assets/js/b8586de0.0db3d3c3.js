"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2205],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=d(a),u=s,h=p["".concat(i,".").concat(u)]||p[u]||m[u]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,l=new Array(o);l[0]=u;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[p]="string"==typeof e?e:s,l[1]=r;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6551:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>c,Details:()=>h,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>r,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(7462),s=a(7294),o=a(3905);const l={id:"update-media-list-entries",title:"UpdateMediaListEntries",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},r=void 0,i={unversionedId:"mutations/update-media-list-entries",id:"mutations/update-media-list-entries",title:"UpdateMediaListEntries",description:"Update multiple media list entries to the same values",source:"@site/examples/schema/mutations/update-media-list-entries.mdx",sourceDirName:"mutations",slug:"/mutations/update-media-list-entries",permalink:"/schema/mutations/update-media-list-entries",draft:!1,tags:[],version:"current",frontMatter:{id:"update-media-list-entries",title:"UpdateMediaListEntries",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},c=()=>(0,o.kt)(s.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(s.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(s.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>status</b></code><Bullet /><code>MediaListStatus</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-updatemedialistentriesbstatusbcodemedialiststatus-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>score</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatemedialistentriesbscorebcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>scoreRaw</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatemedialistentriesbscorerawbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>progress</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatemedialistentriesbprogressbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>progressVolumes</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatemedialistentriesbprogressvolumesbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>repeat</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatemedialistentriesbrepeatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>priority</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatemedialistentriesbprioritybcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>private</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatemedialistentriesbprivatebcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>notes</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatemedialistentriesbnotesbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>hiddenFromStatusLists</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatemedialistentriesbhiddenfromstatuslistsbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>advancedScores</b></code><Bullet /><code>[Float]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatemedialistentriesbadvancedscoresbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>startedAt</b></code><Bullet /><code>FuzzyDateInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updatemedialistentriesbstartedatbcodefuzzydateinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>completedAt</b></code><Bullet /><code>FuzzyDateInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updatemedialistentriesbcompletedatbcodefuzzydateinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateMediaListEntries.<b>ids</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatemedialistentriesbidsbcodeint--",level:4},{value:"Type",id:"type",level:3},{value:'<code>MediaList</code> <Badge class="secondary" text="object"/>',id:"medialist-",level:4}],h=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:r=!1}=e;const[i,d]=(0,s.useState)(r);return(0,o.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&l)},k={Bullet:c,SpecifiedBy:p,Badge:m,toc:u,Details:h};function y(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Update multiple media list entries to the same values"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"UpdateMediaListEntries(\n  status: MediaListStatus\n  score: Float\n  scoreRaw: Int\n  progress: Int\n  progressVolumes: Int\n  repeat: Int\n  priority: Int\n  private: Boolean\n  notes: String\n  hiddenFromStatusLists: Boolean\n  advancedScores: [Float]\n  startedAt: FuzzyDateInput\n  completedAt: FuzzyDateInput\n  ids: [Int]\n): [MediaList]\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbstatusbcodemedialiststatus-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,o.kt)("b",null,"status"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-status"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaListStatus"))," ",(0,o.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The watching/reading status")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbscorebcodefloat-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,o.kt)("b",null,"score"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The score of the media in the user's chosen scoring method")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbscorerawbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,o.kt)("b",null,"scoreRaw"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The score of the media in 100 point")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbprogressbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,o.kt)("b",null,"progress"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The amount of episodes/chapters consumed by the user")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbprogressvolumesbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,o.kt)("b",null,"progressVolumes"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The amount of volumes read by the user")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbrepeatbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,o.kt)("b",null,"repeat"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The amount of times the user has rewatched/read the media")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbprioritybcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,o.kt)("b",null,"priority"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Priority of planning")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbprivatebcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,o.kt)("b",null,"private"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the entry should only be visible to authenticated user")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbnotesbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,o.kt)("b",null,"notes"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Text notes")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbhiddenfromstatuslistsbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,o.kt)("b",null,"hiddenFromStatusLists"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the entry shown be hidden from non-custom lists")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbadvancedscoresbcodefloat--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,o.kt)("b",null,"advancedScores"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"[Float]"))," ",(0,o.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Array of advanced scores")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbstartedatbcodefuzzydateinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,o.kt)("b",null,"startedAt"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/inputs/fuzzy-date-input"},(0,o.kt)("inlineCode",{parentName:"a"},"FuzzyDateInput"))," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the entry was started by the user")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbcompletedatbcodefuzzydateinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,o.kt)("b",null,"completedAt"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/inputs/fuzzy-date-input"},(0,o.kt)("inlineCode",{parentName:"a"},"FuzzyDateInput"))," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the entry was completed by the user")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updatemedialistentriesbidsbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateMediaListEntries.",(0,o.kt)("b",null,"ids"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,o.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The list entries ids to update")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"medialist-"},(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/media-list"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaList"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"List of anime or manga")))}y.isMDXComponent=!0}}]);