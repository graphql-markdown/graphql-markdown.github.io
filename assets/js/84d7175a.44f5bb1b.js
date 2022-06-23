"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[7213],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={id:"media-list-options-input",title:"MediaListOptionsInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,s={unversionedId:"schema/inputs/media-list-options-input",id:"schema/inputs/media-list-options-input",title:"MediaListOptionsInput",description:"A user's list options for anime or manga lists",source:"@site/docs/schema/inputs/media-list-options-input.mdx",sourceDirName:"schema/inputs",slug:"/schema/inputs/media-list-options-input",permalink:"/schema/inputs/media-list-options-input",draft:!1,tags:[],version:"current",frontMatter:{id:"media-list-options-input",title:"MediaListOptionsInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},l={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>sectionOrder</code> (<code>[String]</code>)",id:"sectionorder-string",level:4},{value:"<code>splitCompletedSectionByFormat</code> (<code>Boolean</code>)",id:"splitcompletedsectionbyformat-boolean",level:4},{value:"<code>customLists</code> (<code>[String]</code>)",id:"customlists-string",level:4},{value:"<code>advancedScoring</code> (<code>[String]</code>)",id:"advancedscoring-string",level:4},{value:"<code>advancedScoringEnabled</code> (<code>Boolean</code>)",id:"advancedscoringenabled-boolean",level:4},{value:"<code>theme</code> (<code>String</code>)",id:"theme-string",level:4}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A user's list options for anime or manga lists"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input MediaListOptionsInput {\n  sectionOrder: [String]\n  splitCompletedSectionByFormat: Boolean\n  customLists: [String]\n  advancedScoring: [String]\n  advancedScoringEnabled: Boolean\n  theme: String\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"sectionorder-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"sectionOrder"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"[String]")),")"),(0,r.kt)("p",null,"The order each list should be displayed in"),(0,r.kt)("h4",{id:"splitcompletedsectionbyformat-boolean"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"splitCompletedSectionByFormat"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("p",null,"If the completed sections of the list should be separated by format"),(0,r.kt)("h4",{id:"customlists-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"customLists"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"[String]")),")"),(0,r.kt)("p",null,"The names of the user's custom lists"),(0,r.kt)("h4",{id:"advancedscoring-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"advancedScoring"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"[String]")),")"),(0,r.kt)("p",null,"The names of the user's advanced scoring sections"),(0,r.kt)("h4",{id:"advancedscoringenabled-boolean"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"advancedScoringEnabled"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("p",null,"If advanced scoring is enabled"),(0,r.kt)("h4",{id:"theme-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"theme"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"list theme"))}p.isMDXComponent=!0}}]);