"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2039],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>u});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(o),y=a,u=m["".concat(s,".").concat(y)]||m[y]||h[y]||r;return o?n.createElement(u,i(i({ref:t},d),{},{components:o})):n.createElement(u,i({ref:t},d))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}y.displayName="MDXCreateElement"},2860:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>y,Bullet:()=>m,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=o(7462),a=o(7294),r=o(3905);const i={id:"revision-history",title:"RevisionHistory",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,s={unversionedId:"objects/revision-history",id:"objects/revision-history",title:"RevisionHistory",description:"Feed of mod edit activity",source:"@site/examples/schema/objects/revision-history.mdx",sourceDirName:"objects",slug:"/objects/revision-history",permalink:"/schema/objects/revision-history",draft:!1,tags:[],version:"current",frontMatter:{id:"revision-history",title:"RevisionHistory",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RevisionHistory.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-revisionhistorybidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RevisionHistory.<b>action</b></code><Bullet /><code>RevisionHistoryAction</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-revisionhistorybactionbcoderevisionhistoryaction-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RevisionHistory.<b>changes</b></code><Bullet /><code>Json</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-revisionhistorybchangesbcodejson-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RevisionHistory.<b>user</b></code><Bullet /><code>User</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-revisionhistorybuserbcodeuser-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RevisionHistory.<b>media</b></code><Bullet /><code>Media</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-revisionhistorybmediabcodemedia-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RevisionHistory.<b>character</b></code><Bullet /><code>Character</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-revisionhistorybcharacterbcodecharacter-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RevisionHistory.<b>staff</b></code><Bullet /><code>Staff</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-revisionhistorybstaffbcodestaff-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RevisionHistory.<b>studio</b></code><Bullet /><code>Studio</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-revisionhistorybstudiobcodestudio-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RevisionHistory.<b>externalLink</b></code><Bullet /><code>MediaExternalLink</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-revisionhistorybexternallinkbcodemediaexternallink-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RevisionHistory.<b>createdAt</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-revisionhistorybcreatedatbcodeint-",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),h=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),u={toc:d,Bullet:m,SpecifiedBy:h,Badge:y};function f(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Feed of mod edit activity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type RevisionHistory {\n  id: Int!\n  action: RevisionHistoryAction\n  changes: Json\n  user: User\n  media: Media\n  character: Character\n  staff: Staff\n  studio: Studio\n  externalLink: MediaExternalLink\n  createdAt: Int\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-revisionhistorybidbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"RevisionHistory.",(0,r.kt)("b",null,"id"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The id of the media")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-revisionhistorybactionbcoderevisionhistoryaction-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"RevisionHistory.",(0,r.kt)("b",null,"action"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/revision-history-action"},(0,r.kt)("inlineCode",{parentName:"a"},"RevisionHistoryAction"))," ",(0,r.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The action taken on the objects")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-revisionhistorybchangesbcodejson-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"RevisionHistory.",(0,r.kt)("b",null,"changes"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/json"},(0,r.kt)("inlineCode",{parentName:"a"},"Json"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A JSON object of the fields that changed")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-revisionhistorybuserbcodeuser-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"RevisionHistory.",(0,r.kt)("b",null,"user"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,r.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The user who made the edit to the object")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-revisionhistorybmediabcodemedia-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"RevisionHistory.",(0,r.kt)("b",null,"media"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,r.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The media the mod feed entry references")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-revisionhistorybcharacterbcodecharacter-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"RevisionHistory.",(0,r.kt)("b",null,"character"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/character"},(0,r.kt)("inlineCode",{parentName:"a"},"Character"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The character the mod feed entry references")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-revisionhistorybstaffbcodestaff-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"RevisionHistory.",(0,r.kt)("b",null,"staff"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,r.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The staff member the mod feed entry references")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-revisionhistorybstudiobcodestudio-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"RevisionHistory.",(0,r.kt)("b",null,"studio"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/studio"},(0,r.kt)("inlineCode",{parentName:"a"},"Studio"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The studio the mod feed entry references")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-revisionhistorybexternallinkbcodemediaexternallink-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"RevisionHistory.",(0,r.kt)("b",null,"externalLink"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media-external-link"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaExternalLink"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The external link source the mod feed entry references")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-revisionhistorybcreatedatbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"RevisionHistory.",(0,r.kt)("b",null,"createdAt"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When the mod feed entry was created")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/schema/objects/internal-page"},(0,r.kt)("inlineCode",{parentName:"a"},"InternalPage"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);