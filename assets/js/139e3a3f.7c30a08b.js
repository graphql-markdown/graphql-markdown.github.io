"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[8821],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5255:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"media-list-type-options",title:"MediaListTypeOptions",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},c=void 0,l={unversionedId:"schema/objects/media-list-type-options",id:"schema/objects/media-list-type-options",title:"MediaListTypeOptions",description:"A user's list options for anime or manga lists",source:"@site/docs/schema/objects/media-list-type-options.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/media-list-type-options",permalink:"/schema/objects/media-list-type-options",draft:!1,tags:[],version:"current",frontMatter:{id:"media-list-type-options",title:"MediaListTypeOptions",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},d={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>sectionOrder</code> (<code>String</code>)",id:"sectionorder-string",level:4},{value:"<code>splitCompletedSectionByFormat</code> (<code>Boolean</code>)",id:"splitcompletedsectionbyformat-boolean",level:4},{value:"<code>theme</code> (<code>Json</code>)",id:"theme-json",level:4},{value:"<code>customLists</code> (<code>String</code>)",id:"customlists-string",level:4},{value:"<code>advancedScoring</code> (<code>String</code>)",id:"advancedscoring-string",level:4},{value:"<code>advancedScoringEnabled</code> (<code>Boolean</code>)",id:"advancedscoringenabled-boolean",level:4}],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A user's list options for anime or manga lists"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaListTypeOptions {\n  sectionOrder: [String]\n  splitCompletedSectionByFormat: Boolean\n  theme: Json\n  customLists: [String]\n  advancedScoring: [String]\n  advancedScoringEnabled: Boolean\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"sectionorder-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"sectionOrder"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"The order each list should be displayed in"),(0,o.kt)("h4",{id:"splitcompletedsectionbyformat-boolean"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"splitCompletedSectionByFormat"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("p",null,"If the completed sections of the list should be separated by format"),(0,o.kt)("h4",{id:"theme-json"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"theme"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/json"},(0,o.kt)("inlineCode",{parentName:"a"},"Json")),")"),(0,o.kt)("p",null,"The list theme options"),(0,o.kt)("h4",{id:"customlists-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"customLists"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"The names of the user's custom lists"),(0,o.kt)("h4",{id:"advancedscoring-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"advancedScoring"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"The names of the user's advanced scoring sections"),(0,o.kt)("h4",{id:"advancedscoringenabled-boolean"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"advancedScoringEnabled"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("p",null,"If advanced scoring is enabled"))}u.isMDXComponent=!0}}]);