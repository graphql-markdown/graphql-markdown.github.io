"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[8342],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return h}});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),h=i,u=p["".concat(s,".").concat(h)]||p[h]||m[h]||r;return t?n.createElement(u,o(o({ref:a},c),{},{components:t})):n.createElement(u,o({ref:a},c))}));function h(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},647:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var n=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],l={id:"staff",title:"Staff",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,d={unversionedId:"schema/objects/staff",id:"schema/objects/staff",title:"Staff",description:"Voice actors or production staff",source:"@site/docs/schema/objects/staff.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/staff",permalink:"/schema/objects/staff",draft:!1,tags:[],version:"current",frontMatter:{id:"staff",title:"Staff",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},c={},m=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>name</code> (<code>StaffName</code>)",id:"name-staffname",level:4},{value:"<code>language</code> (<code>StaffLanguage</code>)",id:"language-stafflanguage",level:4},{value:"<code>languageV2</code> (<code>String</code>)",id:"languagev2-string",level:4},{value:"<code>image</code> (<code>StaffImage</code>)",id:"image-staffimage",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>primaryOccupations</code> (<code>String</code>)",id:"primaryoccupations-string",level:4},{value:"<code>gender</code> (<code>String</code>)",id:"gender-string",level:4},{value:"<code>dateOfBirth</code> (<code>FuzzyDate</code>)",id:"dateofbirth-fuzzydate",level:4},{value:"<code>dateOfDeath</code> (<code>FuzzyDate</code>)",id:"dateofdeath-fuzzydate",level:4},{value:"<code>age</code> (<code>Int</code>)",id:"age-int",level:4},{value:"<code>yearsActive</code> (<code>Int</code>)",id:"yearsactive-int",level:4},{value:"<code>homeTown</code> (<code>String</code>)",id:"hometown-string",level:4},{value:"<code>bloodType</code> (<code>String</code>)",id:"bloodtype-string",level:4},{value:"<code>isFavourite</code> (<code>Boolean</code>)",id:"isfavourite-boolean",level:4},{value:"<code>isFavouriteBlocked</code> (<code>Boolean</code>)",id:"isfavouriteblocked-boolean",level:4},{value:"<code>siteUrl</code> (<code>String</code>)",id:"siteurl-string",level:4},{value:"<code>staffMedia</code> (<code>MediaConnection</code>)",id:"staffmedia-mediaconnection",level:4},{value:"<code>characters</code> (<code>CharacterConnection</code>)",id:"characters-characterconnection",level:4},{value:"<code>characterMedia</code> (<code>MediaConnection</code>)",id:"charactermedia-mediaconnection",level:4},{value:"<code>updatedAt</code> (<code>Int</code>)",id:"updatedat-int",level:4},{value:"<code>staff</code> (<code>Staff</code>)",id:"staff-staff",level:4},{value:"<code>submitter</code> (<code>User</code>)",id:"submitter-user",level:4},{value:"<code>submissionStatus</code> (<code>Int</code>)",id:"submissionstatus-int",level:4},{value:"<code>submissionNotes</code> (<code>String</code>)",id:"submissionnotes-string",level:4},{value:"<code>favourites</code> (<code>Int</code>)",id:"favourites-int",level:4},{value:"<code>modNotes</code> (<code>String</code>)",id:"modnotes-string",level:4}],p={toc:m};function h(e){var a=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Voice actors or production staff"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Staff {\n  id: Int!\n  name: StaffName\n  language: StaffLanguage\n  languageV2: String\n  image: StaffImage\n  description(asHtml: Boolean): String\n  primaryOccupations: [String]\n  gender: String\n  dateOfBirth: FuzzyDate\n  dateOfDeath: FuzzyDate\n  age: Int\n  yearsActive: [Int]\n  homeTown: String\n  bloodType: String\n  isFavourite: Boolean!\n  isFavouriteBlocked: Boolean!\n  siteUrl: String\n  staffMedia(\n    sort: [MediaSort]\n    type: MediaType\n    onList: Boolean\n    page: Int\n    perPage: Int\n  ): MediaConnection\n  characters(\n    sort: [CharacterSort]\n    page: Int\n    perPage: Int\n  ): CharacterConnection\n  characterMedia(\n    sort: [MediaSort]\n    onList: Boolean\n    page: Int\n    perPage: Int\n  ): MediaConnection\n  updatedAt: Int\n  staff: Staff\n  submitter: User\n  submissionStatus: Int\n  submissionNotes: String\n  favourites: Int\n  modNotes: String\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"id-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The id of the staff member"),(0,r.kt)("h4",{id:"name-staffname"},(0,r.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/staff-name"},(0,r.kt)("inlineCode",{parentName:"a"},"StaffName")),")"),(0,r.kt)("p",null,"The names of the staff member"),(0,r.kt)("h4",{id:"language-stafflanguage"},(0,r.kt)("inlineCode",{parentName:"h4"},"language")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/staff-language"},(0,r.kt)("inlineCode",{parentName:"a"},"StaffLanguage")),")"),(0,r.kt)("p",null,"The primary language the staff member dub's in"),(0,r.kt)("h4",{id:"languagev2-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"languageV2")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"The primary language of the staff member. Current values: Japanese, English, Korean, Italian, Spanish, Portuguese, French, German, Hebrew, Hungarian, Chinese, Arabic, Filipino, Catalan, Finnish, Turkish, Dutch, Swedish, Thai, Tagalog, Malaysian, Indonesian, Vietnamese, Nepali, Hindi, Urdu"),(0,r.kt)("h4",{id:"image-staffimage"},(0,r.kt)("inlineCode",{parentName:"h4"},"image")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/staff-image"},(0,r.kt)("inlineCode",{parentName:"a"},"StaffImage")),")"),(0,r.kt)("p",null,"The staff images"),(0,r.kt)("h4",{id:"description-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"A general description of the staff member"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"ashtml-boolean"},(0,r.kt)("inlineCode",{parentName:"h5"},"asHtml")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,r.kt)("p",null,"Return the string in pre-parsed html instead of markdown"),(0,r.kt)("h4",{id:"primaryoccupations-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"primaryOccupations")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"The person's primary occupations"),(0,r.kt)("h4",{id:"gender-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"gender")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"The staff's gender. Usually Male, Female, or Non-binary but can be any string."),(0,r.kt)("h4",{id:"dateofbirth-fuzzydate"},(0,r.kt)("inlineCode",{parentName:"h4"},"dateOfBirth")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/fuzzy-date"},(0,r.kt)("inlineCode",{parentName:"a"},"FuzzyDate")),")"),(0,r.kt)("h4",{id:"dateofdeath-fuzzydate"},(0,r.kt)("inlineCode",{parentName:"h4"},"dateOfDeath")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/fuzzy-date"},(0,r.kt)("inlineCode",{parentName:"a"},"FuzzyDate")),")"),(0,r.kt)("h4",{id:"age-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"age")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The person's age in years"),(0,r.kt)("h4",{id:"yearsactive-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"yearsActive")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"[startYear, endYear]"," (If the 2nd value is not present staff is still active)"),(0,r.kt)("h4",{id:"hometown-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"homeTown")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"The persons birthplace or hometown"),(0,r.kt)("h4",{id:"bloodtype-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"bloodType")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"The persons blood type"),(0,r.kt)("h4",{id:"isfavourite-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"isFavourite")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("p",null,"If the staff member is marked as favourite by the currently authenticated user"),(0,r.kt)("h4",{id:"isfavouriteblocked-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"isFavouriteBlocked")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("p",null,"If the staff member is blocked from being added to favourites"),(0,r.kt)("h4",{id:"siteurl-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"siteUrl")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"The url for the staff page on the AniList website"),(0,r.kt)("h4",{id:"staffmedia-mediaconnection"},(0,r.kt)("inlineCode",{parentName:"h4"},"staffMedia")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaConnection")),")"),(0,r.kt)("p",null,"Media where the staff member has a production role"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"sort-mediasort"},(0,r.kt)("inlineCode",{parentName:"h5"},"sort")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/enums/media-sort"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaSort")),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"type-mediatype"},(0,r.kt)("inlineCode",{parentName:"h5"},"type")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/enums/media-type"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaType")),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"onlist-boolean"},(0,r.kt)("inlineCode",{parentName:"h5"},"onList")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"page-int"},(0,r.kt)("inlineCode",{parentName:"h5"},"page")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"perpage-int"},(0,r.kt)("inlineCode",{parentName:"h5"},"perPage")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The amount of entries per page, max 25"),(0,r.kt)("h4",{id:"characters-characterconnection"},(0,r.kt)("inlineCode",{parentName:"h4"},"characters")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/character-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"CharacterConnection")),")"),(0,r.kt)("p",null,"Characters voiced by the actor"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"sort-charactersort"},(0,r.kt)("inlineCode",{parentName:"h5"},"sort")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/enums/character-sort"},(0,r.kt)("inlineCode",{parentName:"a"},"CharacterSort")),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"page-int-1"},(0,r.kt)("inlineCode",{parentName:"h5"},"page")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"perpage-int-1"},(0,r.kt)("inlineCode",{parentName:"h5"},"perPage")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The amount of entries per page, max 25"),(0,r.kt)("h4",{id:"charactermedia-mediaconnection"},(0,r.kt)("inlineCode",{parentName:"h4"},"characterMedia")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaConnection")),")"),(0,r.kt)("p",null,"Media the actor voiced characters in. (Same data as characters with media as node instead of characters)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"sort-mediasort-1"},(0,r.kt)("inlineCode",{parentName:"h5"},"sort")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/enums/media-sort"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaSort")),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"onlist-boolean-1"},(0,r.kt)("inlineCode",{parentName:"h5"},"onList")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"page-int-2"},(0,r.kt)("inlineCode",{parentName:"h5"},"page")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"perpage-int-2"},(0,r.kt)("inlineCode",{parentName:"h5"},"perPage")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The amount of entries per page, max 25"),(0,r.kt)("h4",{id:"updatedat-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("h4",{id:"staff-staff"},(0,r.kt)("inlineCode",{parentName:"h4"},"staff")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,r.kt)("inlineCode",{parentName:"a"},"Staff")),")"),(0,r.kt)("p",null,"Staff member that the submission is referencing"),(0,r.kt)("h4",{id:"submitter-user"},(0,r.kt)("inlineCode",{parentName:"h4"},"submitter")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,r.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,r.kt)("p",null,"Submitter for the submission"),(0,r.kt)("h4",{id:"submissionstatus-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"submissionStatus")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Status of the submission"),(0,r.kt)("h4",{id:"submissionnotes-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"submissionNotes")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Inner details of submission status"),(0,r.kt)("h4",{id:"favourites-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"favourites")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The amount of user's who have favourited the staff member"),(0,r.kt)("h4",{id:"modnotes-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"modNotes")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Notes for site moderators"))}h.isMDXComponent=!0}}]);