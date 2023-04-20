"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[161],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=s(a),p=n,k=m["".concat(d,".").concat(p)]||m[p]||h[p]||l;return a?r.createElement(k,o(o({ref:t},i),{},{components:a})):r.createElement(k,o({ref:t},i))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[m]="string"==typeof e?e:n,o[1]=c;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6813:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>h,Bullet:()=>i,Details:()=>k,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>c,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var r=a(7462),n=a(7294),l=a(3905);const o={id:"character",title:"Character",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},c=void 0,d={unversionedId:"objects/character",id:"objects/character",title:"Character",description:"A character that features in an anime or manga",source:"@site/examples/default/objects/character.mdx",sourceDirName:"objects",slug:"/objects/character",permalink:"/examples/default/objects/character",draft:!1,tags:[],version:"current",frontMatter:{id:"character",title:"Character",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},s={},i=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>name</b></code><Bullet /><code>CharacterName</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-characterbnamebcodecharactername-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>image</b></code><Bullet /><code>CharacterImage</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-characterbimagebcodecharacterimage-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>description</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>gender</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbgenderbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>dateOfBirth</b></code><Bullet /><code>FuzzyDate</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-characterbdateofbirthbcodefuzzydate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>age</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbagebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>bloodType</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbbloodtypebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>isFavourite</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbisfavouritebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>isFavouriteBlocked</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbisfavouriteblockedbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>siteUrl</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbsiteurlbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>media</b></code><Bullet /><code>MediaConnection</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-characterbmediabcodemediaconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.media.<b>type</b></code><Bullet /><code>MediaType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-charactermediabtypebcodemediatype-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Character.media.<b>onList</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-charactermediabonlistbcodeboolean-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Character.media.<b>page</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-charactermediabpagebcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Character.media.<b>perPage</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-charactermediabperpagebcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>favourites</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbfavouritesbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>modNotes</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbmodnotesbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>updatedAt</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="deprecated"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbupdatedatbcodeint--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],k=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:c=!1}=e;const[d,s]=(0,n.useState)(c);return(0,l.kt)("details",(0,r.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&o)},u={Bullet:i,SpecifiedBy:m,Badge:h,toc:p,Details:k};function b(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A character that features in an anime or manga"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Character {\n  id: Int!\n  name: CharacterName\n  image: CharacterImage\n  description(asHtml: Boolean): String\n  gender: String\n  dateOfBirth: FuzzyDate\n  age: String\n  bloodType: String\n  isFavourite: Boolean!\n  isFavouriteBlocked: Boolean!\n  siteUrl: String\n  media(\n    sort: [MediaSort]\n    type: MediaType\n    onList: Boolean\n    page: Int\n    perPage: Int\n  ): MediaConnection\n  updatedAt: Int @deprecated\n  favourites: Int\n  modNotes: String\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-characterbidbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,l.kt)("b",null,"id"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The id of the character")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-characterbnamebcodecharactername-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,l.kt)("b",null,"name"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/objects/character-name"},(0,l.kt)("inlineCode",{parentName:"a"},"CharacterName"))," ",(0,l.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The names of the character")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-characterbimagebcodecharacterimage-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,l.kt)("b",null,"image"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/objects/character-image"},(0,l.kt)("inlineCode",{parentName:"a"},"CharacterImage"))," ",(0,l.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Character images")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-characterbdescriptionbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,l.kt)("b",null,"description"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A general description of the character"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-characterdescriptionbashtmlbcodeboolean-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Character.description.",(0,l.kt)("b",null,"asHtml"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/examples/default/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("p",{parentName:"blockquote"},"Return the string in pre-parsed html instead of markdown")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-characterbgenderbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,l.kt)("b",null,"gender"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The character's gender. Usually Male, Female, or Non-binary but can be any string.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-characterbdateofbirthbcodefuzzydate-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,l.kt)("b",null,"dateOfBirth"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/objects/fuzzy-date"},(0,l.kt)("inlineCode",{parentName:"a"},"FuzzyDate"))," ",(0,l.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The character's birth date")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-characterbagebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,l.kt)("b",null,"age"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The character's age. Note this is a string, not an int, it may contain further text and additional ages.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-characterbbloodtypebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,l.kt)("b",null,"bloodType"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The characters blood type")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-characterbisfavouritebcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,l.kt)("b",null,"isFavourite"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the character is marked as favourite by the currently authenticated user")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-characterbisfavouriteblockedbcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,l.kt)("b",null,"isFavouriteBlocked"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the character is blocked from being added to favourites")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-characterbsiteurlbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,l.kt)("b",null,"siteUrl"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The url for the character page on the AniList website")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-characterbmediabcodemediaconnection-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,l.kt)("b",null,"media"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/objects/media-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaConnection"))," ",(0,l.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Media that includes the character"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-charactermediabsortbcodemediasort--"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Character.media.",(0,l.kt)("b",null,"sort"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/examples/default/enums/media-sort"},(0,l.kt)("inlineCode",{parentName:"a"},"[MediaSort]"))," ",(0,l.kt)(h,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(h,{class:"secondary",text:"enum",mdxType:"Badge"}))),(0,l.kt)("h5",{id:"code-style-fontweight-normal-charactermediabtypebcodemediatype-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Character.media.",(0,l.kt)("b",null,"type"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/examples/default/enums/media-type"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaType"))," ",(0,l.kt)(h,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h5",{id:"code-style-fontweight-normal-charactermediabonlistbcodeboolean-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Character.media.",(0,l.kt)("b",null,"onList"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/examples/default/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h5",{id:"code-style-fontweight-normal-charactermediabpagebcodeint-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Character.media.",(0,l.kt)("b",null,"page"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/examples/default/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The page")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-charactermediabperpagebcodeint-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Character.media.",(0,l.kt)("b",null,"perPage"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/examples/default/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The amount of entries per page, max 25")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-characterbfavouritesbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,l.kt)("b",null,"favourites"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The amount of user's who have favourited the character")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-characterbmodnotesbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,l.kt)("b",null,"modNotes"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Notes for site moderators")),(0,l.kt)(k,{dataOpen:(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:"deprecated"},"Hide deprecated")),dataClose:(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:"deprecated"},"Show deprecated")),mdxType:"Details"},(0,l.kt)("h4",{id:"code-style-fontweight-normal-characterbupdatedatbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,l.kt)("b",null,"updatedAt"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(h,{class:"secondary",text:"deprecated",mdxType:"Badge"})," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)(h,{class:"warning",text:"DEPRECATED: No data available",mdxType:"Badge"}))),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/examples/default/queries/character"},(0,l.kt)("inlineCode",{parentName:"a"},"Character"))," ",(0,l.kt)(h,{class:"secondary",text:"query",mdxType:"Badge"})),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/character-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"CharacterConnection"))," ",(0,l.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/character-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"CharacterEdge"))," ",(0,l.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/character-submission"},(0,l.kt)("inlineCode",{parentName:"a"},"CharacterSubmission"))," ",(0,l.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/internal-page"},(0,l.kt)("inlineCode",{parentName:"a"},"InternalPage"))," ",(0,l.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/media-character"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaCharacter"))," ",(0,l.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/media-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaEdge"))," ",(0,l.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/media-submission-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaSubmissionEdge"))," ",(0,l.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/page"},(0,l.kt)("inlineCode",{parentName:"a"},"Page"))," ",(0,l.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/revision-history"},(0,l.kt)("inlineCode",{parentName:"a"},"RevisionHistory"))," ",(0,l.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);