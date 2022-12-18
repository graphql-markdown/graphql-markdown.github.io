"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[4652],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var r=a(7294);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,c=function(e,t){if(null==e)return{};var a,r,c={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var i=r.createContext({}),d=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,c=e.mdxType,n=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=d(a),p=c,u=h["".concat(i,".").concat(p)]||h[p]||m[p]||n;return a?r.createElement(u,o(o({ref:t},s),{},{components:a})):r.createElement(u,o({ref:t},s))}));function u(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var n=a.length,o=new Array(n);o[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[h]="string"==typeof e?e:c,o[1]=l;for(var d=2;d<n;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5959:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>h,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(7462),c=a(7294),n=a(3905);const o={id:"media-character",title:"MediaCharacter",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,i={unversionedId:"objects/media-character",id:"objects/media-character",title:"MediaCharacter",description:"Internal - Media characters separated",source:"@site/examples/schema/objects/media-character.mdx",sourceDirName:"objects",slug:"/objects/media-character",permalink:"/schema/objects/media-character",draft:!1,tags:[],version:"current",frontMatter:{id:"media-character",title:"MediaCharacter",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MediaCharacter.<b>id</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediacharacterbidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaCharacter.<b>role</b></code><Bullet /><code>CharacterRole</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-mediacharacterbrolebcodecharacterrole-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaCharacter.<b>roleNotes</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediacharacterbrolenotesbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaCharacter.<b>dubGroup</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediacharacterbdubgroupbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaCharacter.<b>characterName</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediacharacterbcharacternamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaCharacter.<b>character</b></code><Bullet /><code>Character</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediacharacterbcharacterbcodecharacter-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaCharacter.<b>voiceActor</b></code><Bullet /><code>Staff</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediacharacterbvoiceactorbcodestaff-",level:4},{value:"Member of",id:"member-of",level:3}],h=()=>(0,n.kt)(c.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,n.kt)(c.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,n.kt)(c.Fragment,null,(0,n.kt)("span",{class:"badge badge--"+e.class},e.text)),u={toc:s,Bullet:h,SpecifiedBy:m,Badge:p};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Internal - Media characters separated"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaCharacter {\n  id: Int\n  role: CharacterRole\n  roleNotes: String\n  dubGroup: String\n  characterName: String\n  character: Character\n  voiceActor: Staff\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediacharacterbidbcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaCharacter.",(0,n.kt)("b",null,"id"))),(0,n.kt)(h,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The id of the connection")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediacharacterbrolebcodecharacterrole-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaCharacter.",(0,n.kt)("b",null,"role"))),(0,n.kt)(h,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/enums/character-role"},(0,n.kt)("inlineCode",{parentName:"a"},"CharacterRole"))," ",(0,n.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The characters role in the media")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediacharacterbrolenotesbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaCharacter.",(0,n.kt)("b",null,"roleNotes"))),(0,n.kt)(h,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediacharacterbdubgroupbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaCharacter.",(0,n.kt)("b",null,"dubGroup"))),(0,n.kt)(h,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediacharacterbcharacternamebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaCharacter.",(0,n.kt)("b",null,"characterName"))),(0,n.kt)(h,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Media specific character name")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediacharacterbcharacterbcodecharacter-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaCharacter.",(0,n.kt)("b",null,"character"))),(0,n.kt)(h,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/character"},(0,n.kt)("inlineCode",{parentName:"a"},"Character"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The characters in the media voiced by the parent actor")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediacharacterbvoiceactorbcodestaff-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaCharacter.",(0,n.kt)("b",null,"voiceActor"))),(0,n.kt)(h,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,n.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The voice actor of the character")),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/schema/objects/media-submission-comparison"},(0,n.kt)("inlineCode",{parentName:"a"},"MediaSubmissionComparison"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);