"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2463],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>g});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},i=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,c=e.originalType,d=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),h=s(a),f=o,g=h["".concat(d,".").concat(f)]||h[f]||m[f]||c;return a?r.createElement(g,n(n({ref:t},i),{},{components:a})):r.createElement(g,n({ref:t},i))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=a.length,n=new Array(c);n[0]=f;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[h]="string"==typeof e?e:o,n[1]=l;for(var s=2;s<c;s++)n[s]=a[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},5662:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>f,Bullet:()=>h,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>d,toc:()=>i});var r=a(7462),o=a(7294),c=a(3905);const n={id:"character-edge",title:"CharacterEdge",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,d={unversionedId:"objects/character-edge",id:"objects/character-edge",title:"CharacterEdge",description:"Character connection edge",source:"@site/examples/schema/objects/character-edge.mdx",sourceDirName:"objects",slug:"/objects/character-edge",permalink:"/schema/objects/character-edge",draft:!1,tags:[],version:"current",frontMatter:{id:"character-edge",title:"CharacterEdge",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},s={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterEdge.<b>node</b></code><Bullet /><code>Character</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-characteredgebnodebcodecharacter-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterEdge.<b>id</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characteredgebidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterEdge.<b>role</b></code><Bullet /><code>CharacterRole</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-characteredgebrolebcodecharacterrole-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterEdge.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characteredgebnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterEdge.<b>voiceActors</b></code><Bullet /><code>[Staff]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-characteredgebvoiceactorsbcodestaff--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterEdge.voiceActors.<b>sort</b></code><Bullet /><code>[StaffSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-characteredgevoiceactorsbsortbcodestaffsort--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterEdge.<b>voiceActorRoles</b></code><Bullet /><code>[StaffRoleType]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-characteredgebvoiceactorrolesbcodestaffroletype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterEdge.voiceActorRoles.<b>sort</b></code><Bullet /><code>[StaffSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-characteredgevoiceactorrolesbsortbcodestaffsort--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterEdge.<b>media</b></code><Bullet /><code>[Media]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-characteredgebmediabcodemedia--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterEdge.<b>favouriteOrder</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characteredgebfavouriteorderbcodeint-",level:4},{value:"Member of",id:"member-of",level:3}],h=()=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,c.kt)(o.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:i,Bullet:h,SpecifiedBy:m,Badge:f};function u(e){let{components:t,...a}=e;return(0,c.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Character connection edge"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type CharacterEdge {\n  node: Character\n  id: Int\n  role: CharacterRole\n  name: String\n  voiceActors(language: StaffLanguage, sort: [StaffSort]): [Staff]\n  voiceActorRoles(language: StaffLanguage, sort: [StaffSort]): [StaffRoleType]\n  media: [Media]\n  favouriteOrder: Int\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-characteredgebnodebcodecharacter-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CharacterEdge.",(0,c.kt)("b",null,"node"))),(0,c.kt)(h,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/schema/objects/character"},(0,c.kt)("inlineCode",{parentName:"a"},"Character"))," ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-characteredgebidbcodeint-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CharacterEdge.",(0,c.kt)("b",null,"id"))),(0,c.kt)(h,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,c.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The id of the connection")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-characteredgebrolebcodecharacterrole-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CharacterEdge.",(0,c.kt)("b",null,"role"))),(0,c.kt)(h,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/schema/enums/character-role"},(0,c.kt)("inlineCode",{parentName:"a"},"CharacterRole"))," ",(0,c.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The characters role in the media")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-characteredgebnamebcodestring-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CharacterEdge.",(0,c.kt)("b",null,"name"))),(0,c.kt)(h,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,c.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Media specific character name")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-characteredgebvoiceactorsbcodestaff--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CharacterEdge.",(0,c.kt)("b",null,"voiceActors"))),(0,c.kt)(h,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,c.kt)("inlineCode",{parentName:"a"},"[Staff]"))," ",(0,c.kt)(f,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The voice actors of the character"),(0,c.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-characteredgevoiceactorsblanguagebcodestafflanguage-"},(0,c.kt)("a",{parentName:"h5",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CharacterEdge.voiceActors.",(0,c.kt)("b",null,"language"))),(0,c.kt)(h,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h5",href:"/schema/enums/staff-language"},(0,c.kt)("inlineCode",{parentName:"a"},"StaffLanguage"))," ",(0,c.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"}))),(0,c.kt)("h5",{id:"code-style-fontweight-normal-characteredgevoiceactorsbsortbcodestaffsort--"},(0,c.kt)("a",{parentName:"h5",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CharacterEdge.voiceActors.",(0,c.kt)("b",null,"sort"))),(0,c.kt)(h,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h5",href:"/schema/enums/staff-sort"},(0,c.kt)("inlineCode",{parentName:"a"},"[StaffSort]"))," ",(0,c.kt)(f,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-characteredgebvoiceactorrolesbcodestaffroletype--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CharacterEdge.",(0,c.kt)("b",null,"voiceActorRoles"))),(0,c.kt)(h,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/schema/objects/staff-role-type"},(0,c.kt)("inlineCode",{parentName:"a"},"[StaffRoleType]"))," ",(0,c.kt)(f,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The voice actors of the character with role date"),(0,c.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-characteredgevoiceactorrolesblanguagebcodestafflanguage-"},(0,c.kt)("a",{parentName:"h5",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CharacterEdge.voiceActorRoles.",(0,c.kt)("b",null,"language"))),(0,c.kt)(h,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h5",href:"/schema/enums/staff-language"},(0,c.kt)("inlineCode",{parentName:"a"},"StaffLanguage"))," ",(0,c.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"}))),(0,c.kt)("h5",{id:"code-style-fontweight-normal-characteredgevoiceactorrolesbsortbcodestaffsort--"},(0,c.kt)("a",{parentName:"h5",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CharacterEdge.voiceActorRoles.",(0,c.kt)("b",null,"sort"))),(0,c.kt)(h,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h5",href:"/schema/enums/staff-sort"},(0,c.kt)("inlineCode",{parentName:"a"},"[StaffSort]"))," ",(0,c.kt)(f,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-characteredgebmediabcodemedia--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CharacterEdge.",(0,c.kt)("b",null,"media"))),(0,c.kt)(h,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,c.kt)("inlineCode",{parentName:"a"},"[Media]"))," ",(0,c.kt)(f,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The media the character is in")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-characteredgebfavouriteorderbcodeint-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CharacterEdge.",(0,c.kt)("b",null,"favouriteOrder"))),(0,c.kt)(h,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,c.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The order the character should be displayed from the users favourites")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/schema/objects/character-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"CharacterConnection"))," ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);