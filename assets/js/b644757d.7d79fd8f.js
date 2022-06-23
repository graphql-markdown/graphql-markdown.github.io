"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[1559],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4768:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={id:"media-list-collection",title:"MediaListCollection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,l={unversionedId:"schema/objects/media-list-collection",id:"schema/objects/media-list-collection",title:"MediaListCollection",description:"List of anime or manga",source:"@site/docs/schema/objects/media-list-collection.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/media-list-collection",permalink:"/schema/objects/media-list-collection",draft:!1,tags:[],version:"current",frontMatter:{id:"media-list-collection",title:"MediaListCollection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},s={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>lists</code> (<code>[MediaListGroup]</code>)",id:"lists-medialistgroup",level:4},{value:"<code>user</code> (<code>User</code>)",id:"user-user",level:4},{value:"<code>hasNextChunk</code> (<code>Boolean</code>)",id:"hasnextchunk-boolean",level:4},{value:"<code>statusLists</code> (<code>[[MediaList]]</code>)",id:"statuslists-medialist",level:4},{value:"<code>customLists</code> (<code>[[MediaList]]</code>)",id:"customlists-medialist",level:4}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"List of anime or manga"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaListCollection {\n  lists: [MediaListGroup]\n  user: User\n  hasNextChunk: Boolean\n  statusLists(asArray: Boolean): [[MediaList]]\n  customLists(asArray: Boolean): [[MediaList]]\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"lists-medialistgroup"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"lists"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media-list-group"},(0,r.kt)("inlineCode",{parentName:"a"},"[MediaListGroup]")),")"),(0,r.kt)("p",null,"Grouped media list entries"),(0,r.kt)("h4",{id:"user-user"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"user"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,r.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,r.kt)("p",null,"The owner of the list"),(0,r.kt)("h4",{id:"hasnextchunk-boolean"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"hasNextChunk"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("p",null,"If there is another chunk"),(0,r.kt)("h4",{id:"statuslists-medialist"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"statusLists"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media-list"},(0,r.kt)("inlineCode",{parentName:"a"},"[[MediaList]]")),")"),(0,r.kt)("p",null,"A map of media list entry arrays grouped by status"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"asarray-boolean"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"asArray"))," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,r.kt)("h4",{id:"customlists-medialist"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"customLists"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media-list"},(0,r.kt)("inlineCode",{parentName:"a"},"[[MediaList]]")),")"),(0,r.kt)("p",null,"A map of media list entry arrays grouped by custom lists"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"asarray-boolean-1"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"asArray"))," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))))}u.isMDXComponent=!0}}]);