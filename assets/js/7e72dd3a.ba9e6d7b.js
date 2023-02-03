"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[4612],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>k});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=o.createContext({}),d=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,i=r(e,["components","mdxType","originalType","parentName"]),f=d(a),h=n,k=f["".concat(c,".").concat(h)]||f[h]||m[h]||l;return a?o.createElement(k,s(s({ref:t},i),{},{components:a})):o.createElement(k,s({ref:t},i))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=h;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[f]="string"==typeof e?e:n,s[1]=r;for(var d=2;d<l;d++)s[d]=a[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7409:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>h,Bullet:()=>f,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var o=a(7462),n=a(7294),l=a(3905);const s={id:"staff",title:"Staff",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},r=void 0,c={unversionedId:"objects/staff",id:"objects/staff",title:"Staff",description:"Voice actors or production staff",source:"@site/examples/schema/objects/staff.mdx",sourceDirName:"objects",slug:"/objects/staff",permalink:"/schema/objects/staff",draft:!1,tags:[],version:"current",frontMatter:{id:"staff",title:"Staff",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>id</b></code><Bullet /><code>Int!</code> <Badge className="secondary" text="non-null"/> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>name</b></code><Bullet /><code>StaffName</code> <Badge className="secondary" text="object"/>',id:"code-style-fontweight-normal-staffbnamebcodestaffname-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>language</b></code><Bullet /><code>StaffLanguage</code> <Badge className="secondary" text="enum"/>',id:"code-style-fontweight-normal-staffblanguagebcodestafflanguage-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>languageV2</b></code><Bullet /><code>String</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffblanguagev2bcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>image</b></code><Bullet /><code>StaffImage</code> <Badge className="secondary" text="object"/>',id:"code-style-fontweight-normal-staffbimagebcodestaffimage-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>description</b></code><Bullet /><code>String</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffbdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>primaryOccupations</b></code><Bullet /><code>[String]</code> <Badge className="secondary" text="list"/> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffbprimaryoccupationsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>gender</b></code><Bullet /><code>String</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffbgenderbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>dateOfBirth</b></code><Bullet /><code>FuzzyDate</code> <Badge className="secondary" text="object"/>',id:"code-style-fontweight-normal-staffbdateofbirthbcodefuzzydate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>dateOfDeath</b></code><Bullet /><code>FuzzyDate</code> <Badge className="secondary" text="object"/>',id:"code-style-fontweight-normal-staffbdateofdeathbcodefuzzydate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>age</b></code><Bullet /><code>Int</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffbagebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>yearsActive</b></code><Bullet /><code>[Int]</code> <Badge className="secondary" text="list"/> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffbyearsactivebcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>homeTown</b></code><Bullet /><code>String</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffbhometownbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>bloodType</b></code><Bullet /><code>String</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffbbloodtypebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>isFavourite</b></code><Bullet /><code>Boolean!</code> <Badge className="secondary" text="non-null"/> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffbisfavouritebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>isFavouriteBlocked</b></code><Bullet /><code>Boolean!</code> <Badge className="secondary" text="non-null"/> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffbisfavouriteblockedbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>siteUrl</b></code><Bullet /><code>String</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffbsiteurlbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>staffMedia</b></code><Bullet /><code>MediaConnection</code> <Badge className="secondary" text="object"/>',id:"code-style-fontweight-normal-staffbstaffmediabcodemediaconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.staffMedia.<b>type</b></code><Bullet /><code>MediaType</code> <Badge className="secondary" text="enum"/>',id:"code-style-fontweight-normal-staffstaffmediabtypebcodemediatype-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.staffMedia.<b>onList</b></code><Bullet /><code>Boolean</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffstaffmediabonlistbcodeboolean-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.staffMedia.<b>page</b></code><Bullet /><code>Int</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffstaffmediabpagebcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.staffMedia.<b>perPage</b></code><Bullet /><code>Int</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffstaffmediabperpagebcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>characters</b></code><Bullet /><code>CharacterConnection</code> <Badge className="secondary" text="object"/>',id:"code-style-fontweight-normal-staffbcharactersbcodecharacterconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.characters.<b>page</b></code><Bullet /><code>Int</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffcharactersbpagebcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.characters.<b>perPage</b></code><Bullet /><code>Int</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffcharactersbperpagebcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>characterMedia</b></code><Bullet /><code>MediaConnection</code> <Badge className="secondary" text="object"/>',id:"code-style-fontweight-normal-staffbcharactermediabcodemediaconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.characterMedia.<b>onList</b></code><Bullet /><code>Boolean</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffcharactermediabonlistbcodeboolean-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.characterMedia.<b>page</b></code><Bullet /><code>Int</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffcharactermediabpagebcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.characterMedia.<b>perPage</b></code><Bullet /><code>Int</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffcharactermediabperpagebcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>updatedAt</b></code><Bullet /><code>Int</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffbupdatedatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>staff</b></code><Bullet /><code>Staff</code> <Badge className="secondary" text="object"/>',id:"code-style-fontweight-normal-staffbstaffbcodestaff-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>submitter</b></code><Bullet /><code>User</code> <Badge className="secondary" text="object"/>',id:"code-style-fontweight-normal-staffbsubmitterbcodeuser-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>submissionStatus</b></code><Bullet /><code>Int</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffbsubmissionstatusbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>submissionNotes</b></code><Bullet /><code>String</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffbsubmissionnotesbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>favourites</b></code><Bullet /><code>Int</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffbfavouritesbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>modNotes</b></code><Bullet /><code>String</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffbmodnotesbcodestring-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],f=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.className},e.text)),k={toc:i,Bullet:f,SpecifiedBy:m,Badge:h};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,o.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Voice actors or production staff"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Staff {\n  id: Int!\n  name: StaffName\n  language: StaffLanguage\n  languageV2: String\n  image: StaffImage\n  description(asHtml: Boolean): String\n  primaryOccupations: [String]\n  gender: String\n  dateOfBirth: FuzzyDate\n  dateOfDeath: FuzzyDate\n  age: Int\n  yearsActive: [Int]\n  homeTown: String\n  bloodType: String\n  isFavourite: Boolean!\n  isFavouriteBlocked: Boolean!\n  siteUrl: String\n  staffMedia(\n    sort: [MediaSort]\n    type: MediaType\n    onList: Boolean\n    page: Int\n    perPage: Int\n  ): MediaConnection\n  characters(\n    sort: [CharacterSort]\n    page: Int\n    perPage: Int\n  ): CharacterConnection\n  characterMedia(\n    sort: [MediaSort]\n    onList: Boolean\n    page: Int\n    perPage: Int\n  ): MediaConnection\n  updatedAt: Int\n  staff: Staff\n  submitter: User\n  submissionStatus: Int\n  submissionNotes: String\n  favourites: Int\n  modNotes: String\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffbidbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"id"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(h,{className:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The id of the staff member")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffbnamebcodestaffname-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"name"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/objects/staff-name"},(0,l.kt)("inlineCode",{parentName:"a"},"StaffName"))," ",(0,l.kt)(h,{className:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The names of the staff member")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffblanguagebcodestafflanguage-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"language"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/enums/staff-language"},(0,l.kt)("inlineCode",{parentName:"a"},"StaffLanguage"))," ",(0,l.kt)(h,{className:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The primary language the staff member dub's in")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffblanguagev2bcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"languageV2"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The primary language of the staff member. Current values: Japanese, English, Korean, Italian, Spanish, Portuguese, French, German, Hebrew, Hungarian, Chinese, Arabic, Filipino, Catalan, Finnish, Turkish, Dutch, Swedish, Thai, Tagalog, Malaysian, Indonesian, Vietnamese, Nepali, Hindi, Urdu")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffbimagebcodestaffimage-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"image"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/objects/staff-image"},(0,l.kt)("inlineCode",{parentName:"a"},"StaffImage"))," ",(0,l.kt)(h,{className:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The staff images")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffbdescriptionbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"description"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A general description of the staff member"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-staffdescriptionbashtmlbcodeboolean-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.description.",(0,l.kt)("b",null,"asHtml"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("p",{parentName:"blockquote"},"Return the string in pre-parsed html instead of markdown")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffbprimaryoccupationsbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"primaryOccupations"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,l.kt)(h,{className:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The person's primary occupations")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffbgenderbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"gender"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The staff's gender. Usually Male, Female, or Non-binary but can be any string.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffbdateofbirthbcodefuzzydate-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"dateOfBirth"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/objects/fuzzy-date"},(0,l.kt)("inlineCode",{parentName:"a"},"FuzzyDate"))," ",(0,l.kt)(h,{className:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffbdateofdeathbcodefuzzydate-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"dateOfDeath"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/objects/fuzzy-date"},(0,l.kt)("inlineCode",{parentName:"a"},"FuzzyDate"))," ",(0,l.kt)(h,{className:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffbagebcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"age"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The person's age in years")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffbyearsactivebcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"yearsActive"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,l.kt)(h,{className:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"[startYear, endYear]"," (If the 2nd value is not present staff is still active)")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffbhometownbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"homeTown"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The persons birthplace or hometown")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffbbloodtypebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"bloodType"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The persons blood type")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffbisfavouritebcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"isFavourite"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(h,{className:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the staff member is marked as favourite by the currently authenticated user")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffbisfavouriteblockedbcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"isFavouriteBlocked"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(h,{className:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the staff member is blocked from being added to favourites")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffbsiteurlbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"siteUrl"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The url for the staff page on the AniList website")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffbstaffmediabcodemediaconnection-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"staffMedia"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/objects/media-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaConnection"))," ",(0,l.kt)(h,{className:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Media where the staff member has a production role"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-staffstaffmediabsortbcodemediasort--"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.staffMedia.",(0,l.kt)("b",null,"sort"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/schema/enums/media-sort"},(0,l.kt)("inlineCode",{parentName:"a"},"[MediaSort]"))," ",(0,l.kt)(h,{className:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(h,{className:"secondary",text:"enum",mdxType:"Badge"}))),(0,l.kt)("h5",{id:"code-style-fontweight-normal-staffstaffmediabtypebcodemediatype-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.staffMedia.",(0,l.kt)("b",null,"type"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/schema/enums/media-type"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaType"))," ",(0,l.kt)(h,{className:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h5",{id:"code-style-fontweight-normal-staffstaffmediabonlistbcodeboolean-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.staffMedia.",(0,l.kt)("b",null,"onList"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h5",{id:"code-style-fontweight-normal-staffstaffmediabpagebcodeint-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.staffMedia.",(0,l.kt)("b",null,"page"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The page")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-staffstaffmediabperpagebcodeint-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.staffMedia.",(0,l.kt)("b",null,"perPage"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The amount of entries per page, max 25")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffbcharactersbcodecharacterconnection-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"characters"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/objects/character-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"CharacterConnection"))," ",(0,l.kt)(h,{className:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Characters voiced by the actor"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-staffcharactersbsortbcodecharactersort--"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.characters.",(0,l.kt)("b",null,"sort"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/schema/enums/character-sort"},(0,l.kt)("inlineCode",{parentName:"a"},"[CharacterSort]"))," ",(0,l.kt)(h,{className:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(h,{className:"secondary",text:"enum",mdxType:"Badge"}))),(0,l.kt)("h5",{id:"code-style-fontweight-normal-staffcharactersbpagebcodeint-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.characters.",(0,l.kt)("b",null,"page"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The page")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-staffcharactersbperpagebcodeint-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.characters.",(0,l.kt)("b",null,"perPage"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The amount of entries per page, max 25")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffbcharactermediabcodemediaconnection-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"characterMedia"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/objects/media-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaConnection"))," ",(0,l.kt)(h,{className:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Media the actor voiced characters in. (Same data as characters with media as node instead of characters)"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-staffcharactermediabsortbcodemediasort--"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.characterMedia.",(0,l.kt)("b",null,"sort"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/schema/enums/media-sort"},(0,l.kt)("inlineCode",{parentName:"a"},"[MediaSort]"))," ",(0,l.kt)(h,{className:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(h,{className:"secondary",text:"enum",mdxType:"Badge"}))),(0,l.kt)("h5",{id:"code-style-fontweight-normal-staffcharactermediabonlistbcodeboolean-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.characterMedia.",(0,l.kt)("b",null,"onList"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h5",{id:"code-style-fontweight-normal-staffcharactermediabpagebcodeint-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.characterMedia.",(0,l.kt)("b",null,"page"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The page")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-staffcharactermediabperpagebcodeint-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.characterMedia.",(0,l.kt)("b",null,"perPage"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The amount of entries per page, max 25")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffbupdatedatbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"updatedAt"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffbstaffbcodestaff-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"staff"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,l.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,l.kt)(h,{className:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Staff member that the submission is referencing")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffbsubmitterbcodeuser-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"submitter"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,l.kt)(h,{className:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Submitter for the submission")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffbsubmissionstatusbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"submissionStatus"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Status of the submission")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffbsubmissionnotesbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"submissionNotes"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Inner details of submission status")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffbfavouritesbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"favourites"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The amount of user's who have favourited the staff member")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffbmodnotesbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,l.kt)("b",null,"modNotes"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Notes for site moderators")),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/schema/queries/staff"},(0,l.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,l.kt)(h,{className:"secondary",text:"query",mdxType:"Badge"})),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/schema/objects/character-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"CharacterEdge"))," ",(0,l.kt)(h,{className:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/character-submission-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"CharacterSubmissionEdge"))," ",(0,l.kt)(h,{className:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/internal-page"},(0,l.kt)("inlineCode",{parentName:"a"},"InternalPage"))," ",(0,l.kt)(h,{className:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/media-character"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaCharacter"))," ",(0,l.kt)(h,{className:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/media-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaEdge"))," ",(0,l.kt)(h,{className:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/media-submission-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaSubmissionEdge"))," ",(0,l.kt)(h,{className:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/page"},(0,l.kt)("inlineCode",{parentName:"a"},"Page"))," ",(0,l.kt)(h,{className:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/revision-history"},(0,l.kt)("inlineCode",{parentName:"a"},"RevisionHistory"))," ",(0,l.kt)(h,{className:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/staff"},(0,l.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,l.kt)(h,{className:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/staff-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"StaffConnection"))," ",(0,l.kt)(h,{className:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/staff-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"StaffEdge"))," ",(0,l.kt)(h,{className:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/staff-role-type"},(0,l.kt)("inlineCode",{parentName:"a"},"StaffRoleType"))," ",(0,l.kt)(h,{className:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/staff-stats"},(0,l.kt)("inlineCode",{parentName:"a"},"StaffStats"))," ",(0,l.kt)(h,{className:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/staff-submission"},(0,l.kt)("inlineCode",{parentName:"a"},"StaffSubmission"))," ",(0,l.kt)(h,{className:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/user-staff-statistic"},(0,l.kt)("inlineCode",{parentName:"a"},"UserStaffStatistic"))," ",(0,l.kt)(h,{className:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/user-voice-actor-statistic"},(0,l.kt)("inlineCode",{parentName:"a"},"UserVoiceActorStatistic"))," ",(0,l.kt)(h,{className:"secondary",text:"object",mdxType:"Badge"})))}p.isMDXComponent=!0}}]);