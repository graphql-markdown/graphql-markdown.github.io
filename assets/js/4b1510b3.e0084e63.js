"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[6786],{3905:function(e,t,r){r.d(t,{Zo:function(){return h},kt:function(){return u}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},h=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=d(r),u=n,m=p["".concat(l,".").concat(u)]||p[u]||s[u]||c;return r?a.createElement(m,o(o({ref:t},h),{},{components:r})):a.createElement(m,o({ref:t},h))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var d=2;d<c;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5943:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return s}});var a=r(7462),n=r(3366),c=(r(7294),r(3905)),o=["components"],i={id:"media-character",title:"MediaCharacter",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,d={unversionedId:"schema/objects/media-character",id:"schema/objects/media-character",title:"MediaCharacter",description:"Internal - Media characters separated",source:"@site/docs/schema/objects/media-character.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/media-character",permalink:"/schema/objects/media-character",draft:!1,tags:[],version:"current",frontMatter:{id:"media-character",title:"MediaCharacter",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},h={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>role</code> (<code>CharacterRole</code>)",id:"role-characterrole",level:4},{value:"<code>roleNotes</code> (<code>String</code>)",id:"rolenotes-string",level:4},{value:"<code>dubGroup</code> (<code>String</code>)",id:"dubgroup-string",level:4},{value:"<code>characterName</code> (<code>String</code>)",id:"charactername-string",level:4},{value:"<code>character</code> (<code>Character</code>)",id:"character-character",level:4},{value:"<code>voiceActor</code> (<code>Staff</code>)",id:"voiceactor-staff",level:4}],p={toc:s};function u(e){var t=e.components,r=(0,n.Z)(e,o);return(0,c.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Internal - Media characters separated"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaCharacter {\n  id: Int\n  role: CharacterRole\n  roleNotes: String\n  dubGroup: String\n  characterName: String\n  character: Character\n  voiceActor: Staff\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"id-int"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,c.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,c.kt)("p",null,"The id of the connection"),(0,c.kt)("h4",{id:"role-characterrole"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("inlineCode",{parentName:"a"},"role"))," (",(0,c.kt)("a",{parentName:"h4",href:"/schema/enums/character-role"},(0,c.kt)("inlineCode",{parentName:"a"},"CharacterRole")),")"),(0,c.kt)("p",null,"The characters role in the media"),(0,c.kt)("h4",{id:"rolenotes-string"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("inlineCode",{parentName:"a"},"roleNotes"))," (",(0,c.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,c.kt)("h4",{id:"dubgroup-string"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("inlineCode",{parentName:"a"},"dubGroup"))," (",(0,c.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,c.kt)("h4",{id:"charactername-string"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("inlineCode",{parentName:"a"},"characterName"))," (",(0,c.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,c.kt)("p",null,"Media specific character name"),(0,c.kt)("h4",{id:"character-character"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("inlineCode",{parentName:"a"},"character"))," (",(0,c.kt)("a",{parentName:"h4",href:"/schema/objects/character"},(0,c.kt)("inlineCode",{parentName:"a"},"Character")),")"),(0,c.kt)("p",null,"The characters in the media voiced by the parent actor"),(0,c.kt)("h4",{id:"voiceactor-staff"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("inlineCode",{parentName:"a"},"voiceActor"))," (",(0,c.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,c.kt)("inlineCode",{parentName:"a"},"Staff")),")"),(0,c.kt)("p",null,"The voice actor of the character"))}u.isMDXComponent=!0}}]);