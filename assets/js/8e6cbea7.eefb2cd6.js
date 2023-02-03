"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9053],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=o.createContext({}),i=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=i(a),f=n,h=m["".concat(c,".").concat(f)]||m[f]||g[f]||l;return a?o.createElement(h,r(r({ref:t},s),{},{components:a})):o.createElement(h,r({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=f;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[m]="string"==typeof e?e:n,r[1]=d;for(var i=2;i<l;i++)r[i]=a[i];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}f.displayName="MDXCreateElement"},652:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>f,Bullet:()=>m,SpecifiedBy:()=>g,assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var o=a(7462),n=a(7294),l=a(3905);const r={id:"media-edge",title:"MediaEdge",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,c={unversionedId:"objects/media-edge",id:"objects/media-edge",title:"MediaEdge",description:"Media connection edge",source:"@site/examples/schema/objects/media-edge.mdx",sourceDirName:"objects",slug:"/objects/media-edge",permalink:"/schema/objects/media-edge",draft:!1,tags:[],version:"current",frontMatter:{id:"media-edge",title:"MediaEdge",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MediaEdge.<b>node</b></code><Bullet /><code>Media</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediaedgebnodebcodemedia-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaEdge.<b>id</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediaedgebidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaEdge.<b>relationType</b></code><Bullet /><code>MediaRelation</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-mediaedgebrelationtypebcodemediarelation-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaEdge.<b>isMainStudio</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediaedgebismainstudiobcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaEdge.<b>characters</b></code><Bullet /><code>[Character]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediaedgebcharactersbcodecharacter--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaEdge.<b>characterRole</b></code><Bullet /><code>CharacterRole</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-mediaedgebcharacterrolebcodecharacterrole-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaEdge.<b>characterName</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediaedgebcharacternamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaEdge.<b>roleNotes</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediaedgebrolenotesbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaEdge.<b>dubGroup</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediaedgebdubgroupbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaEdge.<b>staffRole</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediaedgebstaffrolebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaEdge.<b>voiceActors</b></code><Bullet /><code>[Staff]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediaedgebvoiceactorsbcodestaff--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaEdge.voiceActors.<b>sort</b></code><Bullet /><code>[StaffSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-mediaedgevoiceactorsbsortbcodestaffsort--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>MediaEdge.<b>voiceActorRoles</b></code><Bullet /><code>[StaffRoleType]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediaedgebvoiceactorrolesbcodestaffroletype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaEdge.voiceActorRoles.<b>sort</b></code><Bullet /><code>[StaffSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-mediaedgevoiceactorrolesbsortbcodestaffsort--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>MediaEdge.<b>favouriteOrder</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediaedgebfavouriteorderbcodeint-",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),h={toc:s,Bullet:m,SpecifiedBy:g,Badge:f};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Media connection edge"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaEdge {\n  node: Media\n  id: Int\n  relationType(version: Int): MediaRelation\n  isMainStudio: Boolean!\n  characters: [Character]\n  characterRole: CharacterRole\n  characterName: String\n  roleNotes: String\n  dubGroup: String\n  staffRole: String\n  voiceActors(language: StaffLanguage, sort: [StaffSort]): [Staff]\n  voiceActorRoles(language: StaffLanguage, sort: [StaffSort]): [StaffRoleType]\n  favouriteOrder: Int\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-mediaedgebnodebcodemedia-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaEdge.",(0,l.kt)("b",null,"node"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,l.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,l.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-mediaedgebidbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaEdge.",(0,l.kt)("b",null,"id"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The id of the connection")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-mediaedgebrelationtypebcodemediarelation-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaEdge.",(0,l.kt)("b",null,"relationType"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/enums/media-relation"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaRelation"))," ",(0,l.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The type of relation to the parent model"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-mediaedgerelationtypebversionbcodeint-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaEdge.relationType.",(0,l.kt)("b",null,"version"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("p",{parentName:"blockquote"},"Provide 2 to use new version 2 of relation enum")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-mediaedgebismainstudiobcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaEdge.",(0,l.kt)("b",null,"isMainStudio"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the studio is the main animation studio of the media (For Studio-",">","MediaConnection field only)")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-mediaedgebcharactersbcodecharacter--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaEdge.",(0,l.kt)("b",null,"characters"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/objects/character"},(0,l.kt)("inlineCode",{parentName:"a"},"[Character]"))," ",(0,l.kt)(f,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The characters in the media voiced by the parent actor")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-mediaedgebcharacterrolebcodecharacterrole-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaEdge.",(0,l.kt)("b",null,"characterRole"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/enums/character-role"},(0,l.kt)("inlineCode",{parentName:"a"},"CharacterRole"))," ",(0,l.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The characters role in the media")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-mediaedgebcharacternamebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaEdge.",(0,l.kt)("b",null,"characterName"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Media specific character name")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-mediaedgebrolenotesbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaEdge.",(0,l.kt)("b",null,"roleNotes"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Notes regarding the VA's role for the character")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-mediaedgebdubgroupbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaEdge.",(0,l.kt)("b",null,"dubGroup"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-mediaedgebstaffrolebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaEdge.",(0,l.kt)("b",null,"staffRole"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The role of the staff member in the production of the media")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-mediaedgebvoiceactorsbcodestaff--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaEdge.",(0,l.kt)("b",null,"voiceActors"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,l.kt)("inlineCode",{parentName:"a"},"[Staff]"))," ",(0,l.kt)(f,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The voice actors of the character"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-mediaedgevoiceactorsblanguagebcodestafflanguage-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaEdge.voiceActors.",(0,l.kt)("b",null,"language"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/schema/enums/staff-language"},(0,l.kt)("inlineCode",{parentName:"a"},"StaffLanguage"))," ",(0,l.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"}))),(0,l.kt)("h5",{id:"code-style-fontweight-normal-mediaedgevoiceactorsbsortbcodestaffsort--"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaEdge.voiceActors.",(0,l.kt)("b",null,"sort"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/schema/enums/staff-sort"},(0,l.kt)("inlineCode",{parentName:"a"},"[StaffSort]"))," ",(0,l.kt)(f,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-mediaedgebvoiceactorrolesbcodestaffroletype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaEdge.",(0,l.kt)("b",null,"voiceActorRoles"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/objects/staff-role-type"},(0,l.kt)("inlineCode",{parentName:"a"},"[StaffRoleType]"))," ",(0,l.kt)(f,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The voice actors of the character with role date"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-mediaedgevoiceactorrolesblanguagebcodestafflanguage-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaEdge.voiceActorRoles.",(0,l.kt)("b",null,"language"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/schema/enums/staff-language"},(0,l.kt)("inlineCode",{parentName:"a"},"StaffLanguage"))," ",(0,l.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"}))),(0,l.kt)("h5",{id:"code-style-fontweight-normal-mediaedgevoiceactorrolesbsortbcodestaffsort--"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaEdge.voiceActorRoles.",(0,l.kt)("b",null,"sort"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/schema/enums/staff-sort"},(0,l.kt)("inlineCode",{parentName:"a"},"[StaffSort]"))," ",(0,l.kt)(f,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-mediaedgebfavouriteorderbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaEdge.",(0,l.kt)("b",null,"favouriteOrder"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The order the media should be displayed from the users favourites")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/schema/objects/media-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaConnection"))," ",(0,l.kt)(f,{className:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/media-submission"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaSubmission"))," ",(0,l.kt)(f,{className:"secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);