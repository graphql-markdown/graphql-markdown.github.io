"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[6916],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>p});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),d=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},s=function(e){var a=d(e.components);return r.createElement(l.Provider,{value:a},e.children)},f={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),h=d(t),p=n,m=h["".concat(l,".").concat(p)]||h[p]||f[p]||o;return t?r.createElement(m,c(c({ref:a},s),{},{components:t})):r.createElement(m,c({ref:a},s))}));function p(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=h;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var d=2;d<o;d++)c[d]=t[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},4143:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=t(7462),n=(t(7294),t(3905));const o={id:"character-edge",title:"CharacterEdge",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},c=void 0,i={unversionedId:"schema/objects/character-edge",id:"schema/objects/character-edge",title:"CharacterEdge",description:"Character connection edge",source:"@site/docs/schema/objects/character-edge.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/character-edge",permalink:"/schema/objects/character-edge",draft:!1,tags:[],version:"current",frontMatter:{id:"character-edge",title:"CharacterEdge",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},l={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>node</code> (<code>Character</code>)",id:"node-character",level:4},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>role</code> (<code>CharacterRole</code>)",id:"role-characterrole",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>voiceActors</code> (<code>[Staff]</code>)",id:"voiceactors-staff",level:4},{value:"<code>voiceActorRoles</code> (<code>[StaffRoleType]</code>)",id:"voiceactorroles-staffroletype",level:4},{value:"<code>media</code> (<code>[Media]</code>)",id:"media-media",level:4},{value:"<code>favouriteOrder</code> (<code>Int</code>)",id:"favouriteorder-int",level:4}],s={toc:d};function f(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Character connection edge"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type CharacterEdge {\n  node: Character\n  id: Int\n  role: CharacterRole\n  name: String\n  voiceActors(language: StaffLanguage, sort: [StaffSort]): [Staff]\n  voiceActorRoles(language: StaffLanguage, sort: [StaffSort]): [StaffRoleType]\n  media: [Media]\n  favouriteOrder: Int\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"node-character"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"node"))," (",(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/character"},(0,n.kt)("inlineCode",{parentName:"a"},"Character")),")"),(0,n.kt)("h4",{id:"id-int"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,n.kt)("p",null,"The id of the connection"),(0,n.kt)("h4",{id:"role-characterrole"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"role"))," (",(0,n.kt)("a",{parentName:"h4",href:"/schema/enums/character-role"},(0,n.kt)("inlineCode",{parentName:"a"},"CharacterRole")),")"),(0,n.kt)("p",null,"The characters role in the media"),(0,n.kt)("h4",{id:"name-string"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,n.kt)("p",null,"Media specific character name"),(0,n.kt)("h4",{id:"voiceactors-staff"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"voiceActors"))," (",(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,n.kt)("inlineCode",{parentName:"a"},"[Staff]")),")"),(0,n.kt)("p",null,"The voice actors of the character"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"language-stafflanguage"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"language"))," (",(0,n.kt)("a",{parentName:"h5",href:"/schema/enums/staff-language"},(0,n.kt)("inlineCode",{parentName:"a"},"StaffLanguage")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"sort-staffsort"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"sort"))," (",(0,n.kt)("a",{parentName:"h5",href:"/schema/enums/staff-sort"},(0,n.kt)("inlineCode",{parentName:"a"},"[StaffSort]")),")"))),(0,n.kt)("h4",{id:"voiceactorroles-staffroletype"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"voiceActorRoles"))," (",(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/staff-role-type"},(0,n.kt)("inlineCode",{parentName:"a"},"[StaffRoleType]")),")"),(0,n.kt)("p",null,"The voice actors of the character with role date"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"language-stafflanguage-1"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"language"))," (",(0,n.kt)("a",{parentName:"h5",href:"/schema/enums/staff-language"},(0,n.kt)("inlineCode",{parentName:"a"},"StaffLanguage")),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"sort-staffsort-1"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"sort"))," (",(0,n.kt)("a",{parentName:"h5",href:"/schema/enums/staff-sort"},(0,n.kt)("inlineCode",{parentName:"a"},"[StaffSort]")),")"))),(0,n.kt)("h4",{id:"media-media"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"media"))," (",(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,n.kt)("inlineCode",{parentName:"a"},"[Media]")),")"),(0,n.kt)("p",null,"The media the character is in"),(0,n.kt)("h4",{id:"favouriteorder-int"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"favouriteOrder"))," (",(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,n.kt)("p",null,"The order the character should be displayed from the users favourites"))}f.isMDXComponent=!0}}]);