"use strict";(self.webpackChunkgraphql_markdown_website=self.webpackChunkgraphql_markdown_website||[]).push([[4128],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>p});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),h=s(a),p=n,k=h["".concat(d,".").concat(p)]||h[p]||m[p]||o;return a?r.createElement(k,c(c({ref:t},i),{},{components:a})):r.createElement(k,c({ref:t},i))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<o;s++)c[s]=a[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4784:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>m,SpecifiedBy:()=>h,assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>i});var r=a(7462),n=a(7294),o=a(3905);const c={id:"character",title:"Character",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,d={unversionedId:"objects/character",id:"objects/character",title:"Character",description:"A character that features in an anime or manga",source:"@site/examples/schema/objects/character.mdx",sourceDirName:"objects",slug:"/objects/character",permalink:"/schema/objects/character",draft:!1,tags:[],version:"current",frontMatter:{id:"character",title:"Character",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},s={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>name</b></code><Bullet /><code>CharacterName</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-characterbnamebcodecharactername-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>image</b></code><Bullet /><code>CharacterImage</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-characterbimagebcodecharacterimage-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>description</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>gender</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbgenderbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>dateOfBirth</b></code><Bullet /><code>FuzzyDate</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-characterbdateofbirthbcodefuzzydate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>age</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbagebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>bloodType</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbbloodtypebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>isFavourite</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbisfavouritebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>isFavouriteBlocked</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbisfavouriteblockedbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>siteUrl</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbsiteurlbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>media</b></code><Bullet /><code>MediaConnection</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-characterbmediabcodemediaconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.media.<b>type</b></code><Bullet /><code>MediaType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-charactermediabtypebcodemediatype-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Character.media.<b>onList</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-charactermediabonlistbcodeboolean-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Character.media.<b>page</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-charactermediabpagebcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Character.media.<b>perPage</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-charactermediabperpagebcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>updatedAt</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbupdatedatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>favourites</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbfavouritesbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>modNotes</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbmodnotesbcodestring-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],m=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),h=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),k={toc:i,Bullet:m,SpecifiedBy:h,Badge:p};function b(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A character that features in an anime or manga"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Character {\n  id: Int!\n  name: CharacterName\n  image: CharacterImage\n  description(asHtml: Boolean): String\n  gender: String\n  dateOfBirth: FuzzyDate\n  age: String\n  bloodType: String\n  isFavourite: Boolean!\n  isFavouriteBlocked: Boolean!\n  siteUrl: String\n  media(\n    sort: [MediaSort]\n    type: MediaType\n    onList: Boolean\n    page: Int\n    perPage: Int\n  ): MediaConnection\n  updatedAt: Int\n  favourites: Int\n  modNotes: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-characterbidbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,o.kt)("b",null,"id"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The id of the character")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-characterbnamebcodecharactername-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,o.kt)("b",null,"name"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/character-name"},(0,o.kt)("inlineCode",{parentName:"a"},"CharacterName"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The names of the character")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-characterbimagebcodecharacterimage-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,o.kt)("b",null,"image"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/character-image"},(0,o.kt)("inlineCode",{parentName:"a"},"CharacterImage"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Character images")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-characterbdescriptionbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,o.kt)("b",null,"description"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A general description of the character"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-characterdescriptionbashtmlbcodeboolean-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Character.description.",(0,o.kt)("b",null,"asHtml"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("p",{parentName:"blockquote"},"Return the string in pre-parsed html instead of markdown")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-characterbgenderbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,o.kt)("b",null,"gender"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The character's gender. Usually Male, Female, or Non-binary but can be any string.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-characterbdateofbirthbcodefuzzydate-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,o.kt)("b",null,"dateOfBirth"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/fuzzy-date"},(0,o.kt)("inlineCode",{parentName:"a"},"FuzzyDate"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The character's birth date")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-characterbagebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,o.kt)("b",null,"age"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The character's age. Note this is a string, not an int, it may contain further text and additional ages.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-characterbbloodtypebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,o.kt)("b",null,"bloodType"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The characters blood type")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-characterbisfavouritebcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,o.kt)("b",null,"isFavourite"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the character is marked as favourite by the currently authenticated user")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-characterbisfavouriteblockedbcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,o.kt)("b",null,"isFavouriteBlocked"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the character is blocked from being added to favourites")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-characterbsiteurlbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,o.kt)("b",null,"siteUrl"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The url for the character page on the AniList website")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-characterbmediabcodemediaconnection-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,o.kt)("b",null,"media"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/media-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaConnection"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Media that includes the character"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-charactermediabsortbcodemediasort--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Character.media.",(0,o.kt)("b",null,"sort"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/enums/media-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"[MediaSort]"))," ",(0,o.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-charactermediabtypebcodemediatype-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Character.media.",(0,o.kt)("b",null,"type"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/enums/media-type"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaType"))," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h5",{id:"code-style-fontweight-normal-charactermediabonlistbcodeboolean-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Character.media.",(0,o.kt)("b",null,"onList"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h5",{id:"code-style-fontweight-normal-charactermediabpagebcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Character.media.",(0,o.kt)("b",null,"page"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The page")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-charactermediabperpagebcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Character.media.",(0,o.kt)("b",null,"perPage"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The amount of entries per page, max 25")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-characterbupdatedatbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,o.kt)("b",null,"updatedAt"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-characterbfavouritesbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,o.kt)("b",null,"favourites"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The amount of user's who have favourited the character")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-characterbmodnotesbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,o.kt)("b",null,"modNotes"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Notes for site moderators")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/schema/queries/character"},(0,o.kt)("inlineCode",{parentName:"a"},"Character"))," ",(0,o.kt)(p,{class:"secondary",text:"query",mdxType:"Badge"})),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/schema/objects/character-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"CharacterConnection"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/objects/character-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"CharacterEdge"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/objects/character-submission"},(0,o.kt)("inlineCode",{parentName:"a"},"CharacterSubmission"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/objects/internal-page"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalPage"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/objects/media-character"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaCharacter"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/objects/media-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaEdge"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/objects/media-submission-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaSubmissionEdge"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/objects/page"},(0,o.kt)("inlineCode",{parentName:"a"},"Page"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/objects/revision-history"},(0,o.kt)("inlineCode",{parentName:"a"},"RevisionHistory"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);