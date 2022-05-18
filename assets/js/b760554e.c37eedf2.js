"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[2662],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=d(a),p=r,f=h["".concat(c,".").concat(p)]||h[p]||u[p]||o;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5862:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={id:"media-edge",title:"MediaEdge",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},c=void 0,d={unversionedId:"schema/objects/media-edge",id:"schema/objects/media-edge",title:"MediaEdge",description:"Media connection edge",source:"@site/docs/schema/objects/media-edge.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/media-edge",permalink:"/schema/objects/media-edge",draft:!1,tags:[],version:"current",frontMatter:{id:"media-edge",title:"MediaEdge",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},s={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>node</code> (<code>Media</code>)",id:"node-media",level:4},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>relationType</code> (<code>MediaRelation</code>)",id:"relationtype-mediarelation",level:4},{value:"<code>isMainStudio</code> (<code>Boolean</code>)",id:"ismainstudio-boolean",level:4},{value:"<code>characters</code> (<code>Character</code>)",id:"characters-character",level:4},{value:"<code>characterRole</code> (<code>CharacterRole</code>)",id:"characterrole-characterrole",level:4},{value:"<code>characterName</code> (<code>String</code>)",id:"charactername-string",level:4},{value:"<code>roleNotes</code> (<code>String</code>)",id:"rolenotes-string",level:4},{value:"<code>dubGroup</code> (<code>String</code>)",id:"dubgroup-string",level:4},{value:"<code>staffRole</code> (<code>String</code>)",id:"staffrole-string",level:4},{value:"<code>voiceActors</code> (<code>Staff</code>)",id:"voiceactors-staff",level:4},{value:"<code>voiceActorRoles</code> (<code>StaffRoleType</code>)",id:"voiceactorroles-staffroletype",level:4},{value:"<code>favouriteOrder</code> (<code>Int</code>)",id:"favouriteorder-int",level:4}],h={toc:u};function p(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Media connection edge"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaEdge {\n  node: Media\n  id: Int\n  relationType(version: Int): MediaRelation\n  isMainStudio: Boolean!\n  characters: [Character]\n  characterRole: CharacterRole\n  characterName: String\n  roleNotes: String\n  dubGroup: String\n  staffRole: String\n  voiceActors(language: StaffLanguage, sort: [StaffSort]): [Staff]\n  voiceActorRoles(language: StaffLanguage, sort: [StaffSort]): [StaffRoleType]\n  favouriteOrder: Int\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"node-media"},(0,o.kt)("inlineCode",{parentName:"h4"},"node")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,o.kt)("inlineCode",{parentName:"a"},"Media")),")"),(0,o.kt)("h4",{id:"id-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The id of the connection"),(0,o.kt)("h4",{id:"relationtype-mediarelation"},(0,o.kt)("inlineCode",{parentName:"h4"},"relationType")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/media-relation"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaRelation")),")"),(0,o.kt)("p",null,"The type of relation to the parent model"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"version-int"},(0,o.kt)("inlineCode",{parentName:"h5"},"version")," (",(0,o.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,o.kt)("p",null,"Provide 2 to use new version 2 of relation enum"),(0,o.kt)("h4",{id:"ismainstudio-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"isMainStudio")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("p",null,"If the studio is the main animation studio of the media (For Studio-",">","MediaConnection field only)"),(0,o.kt)("h4",{id:"characters-character"},(0,o.kt)("inlineCode",{parentName:"h4"},"characters")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/character"},(0,o.kt)("inlineCode",{parentName:"a"},"Character")),")"),(0,o.kt)("p",null,"The characters in the media voiced by the parent actor"),(0,o.kt)("h4",{id:"characterrole-characterrole"},(0,o.kt)("inlineCode",{parentName:"h4"},"characterRole")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/character-role"},(0,o.kt)("inlineCode",{parentName:"a"},"CharacterRole")),")"),(0,o.kt)("p",null,"The characters role in the media"),(0,o.kt)("h4",{id:"charactername-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"characterName")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"Media specific character name"),(0,o.kt)("h4",{id:"rolenotes-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"roleNotes")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"Notes regarding the VA's role for the character"),(0,o.kt)("h4",{id:"dubgroup-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"dubGroup")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant."),(0,o.kt)("h4",{id:"staffrole-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"staffRole")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"The role of the staff member in the production of the media"),(0,o.kt)("h4",{id:"voiceactors-staff"},(0,o.kt)("inlineCode",{parentName:"h4"},"voiceActors")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,o.kt)("inlineCode",{parentName:"a"},"Staff")),")"),(0,o.kt)("p",null,"The voice actors of the character"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"language-stafflanguage"},(0,o.kt)("inlineCode",{parentName:"h5"},"language")," (",(0,o.kt)("a",{parentName:"h5",href:"/schema/enums/staff-language"},(0,o.kt)("inlineCode",{parentName:"a"},"StaffLanguage")),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"sort-staffsort"},(0,o.kt)("inlineCode",{parentName:"h5"},"sort")," (",(0,o.kt)("a",{parentName:"h5",href:"/schema/enums/staff-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"StaffSort")),")"))),(0,o.kt)("h4",{id:"voiceactorroles-staffroletype"},(0,o.kt)("inlineCode",{parentName:"h4"},"voiceActorRoles")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/staff-role-type"},(0,o.kt)("inlineCode",{parentName:"a"},"StaffRoleType")),")"),(0,o.kt)("p",null,"The voice actors of the character with role date"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"language-stafflanguage-1"},(0,o.kt)("inlineCode",{parentName:"h5"},"language")," (",(0,o.kt)("a",{parentName:"h5",href:"/schema/enums/staff-language"},(0,o.kt)("inlineCode",{parentName:"a"},"StaffLanguage")),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"sort-staffsort-1"},(0,o.kt)("inlineCode",{parentName:"h5"},"sort")," (",(0,o.kt)("a",{parentName:"h5",href:"/schema/enums/staff-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"StaffSort")),")"))),(0,o.kt)("h4",{id:"favouriteorder-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"favouriteOrder")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The order the media should be displayed from the users favourites"))}p.isMDXComponent=!0}}]);