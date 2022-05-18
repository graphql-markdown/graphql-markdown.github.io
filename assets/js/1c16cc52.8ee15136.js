"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[4114],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),o=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=o(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=o(a),p=i,h=m["".concat(d,".").concat(p)]||m[p]||u[p]||r;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var o=2;o<r;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1947:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return u}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),l=["components"],s={id:"media-list-collection",title:"MediaListCollection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,o={unversionedId:"schema/queries/media-list-collection",id:"schema/queries/media-list-collection",title:"MediaListCollection",description:"Media list collection query, provides list pre-grouped by status & custom lists. User ID and Media Type arguments required.",source:"@site/docs/schema/queries/media-list-collection.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/media-list-collection",permalink:"/schema/queries/media-list-collection",draft:!1,tags:[],version:"current",frontMatter:{id:"media-list-collection",title:"MediaListCollection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},c={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>userId</code> (<code>Int</code>)",id:"userid-int",level:4},{value:"<code>userName</code> (<code>String</code>)",id:"username-string",level:4},{value:"<code>type</code> (<code>MediaType</code>)",id:"type-mediatype",level:4},{value:"<code>status</code> (<code>MediaListStatus</code>)",id:"status-medialiststatus",level:4},{value:"<code>notes</code> (<code>String</code>)",id:"notes-string",level:4},{value:"<code>startedAt</code> (<code>FuzzyDateInt</code>)",id:"startedat-fuzzydateint",level:4},{value:"<code>completedAt</code> (<code>FuzzyDateInt</code>)",id:"completedat-fuzzydateint",level:4},{value:"<code>forceSingleCompletedList</code> (<code>Boolean</code>)",id:"forcesinglecompletedlist-boolean",level:4},{value:"<code>chunk</code> (<code>Int</code>)",id:"chunk-int",level:4},{value:"<code>perChunk</code> (<code>Int</code>)",id:"perchunk-int",level:4},{value:"<code>status_in</code> (<code>MediaListStatus</code>)",id:"status_in-medialiststatus",level:4},{value:"<code>status_not_in</code> (<code>MediaListStatus</code>)",id:"status_not_in-medialiststatus",level:4},{value:"<code>status_not</code> (<code>MediaListStatus</code>)",id:"status_not-medialiststatus",level:4},{value:"<code>notes_like</code> (<code>String</code>)",id:"notes_like-string",level:4},{value:"<code>startedAt_greater</code> (<code>FuzzyDateInt</code>)",id:"startedat_greater-fuzzydateint",level:4},{value:"<code>startedAt_lesser</code> (<code>FuzzyDateInt</code>)",id:"startedat_lesser-fuzzydateint",level:4},{value:"<code>startedAt_like</code> (<code>String</code>)",id:"startedat_like-string",level:4},{value:"<code>completedAt_greater</code> (<code>FuzzyDateInt</code>)",id:"completedat_greater-fuzzydateint",level:4},{value:"<code>completedAt_lesser</code> (<code>FuzzyDateInt</code>)",id:"completedat_lesser-fuzzydateint",level:4},{value:"<code>completedAt_like</code> (<code>String</code>)",id:"completedat_like-string",level:4},{value:"<code>sort</code> (<code>MediaListSort</code>)",id:"sort-medialistsort",level:4},{value:"Type",id:"type",level:3},{value:"<code>MediaListCollection</code>",id:"medialistcollection",level:4}],m={toc:u};function p(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Media list collection query, provides list pre-grouped by status & custom lists. User ID and Media Type arguments required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"MediaListCollection(\n  userId: Int\n  userName: String\n  type: MediaType\n  status: MediaListStatus\n  notes: String\n  startedAt: FuzzyDateInt\n  completedAt: FuzzyDateInt\n  forceSingleCompletedList: Boolean\n  chunk: Int\n  perChunk: Int\n  status_in: [MediaListStatus]\n  status_not_in: [MediaListStatus]\n  status_not: MediaListStatus\n  notes_like: String\n  startedAt_greater: FuzzyDateInt\n  startedAt_lesser: FuzzyDateInt\n  startedAt_like: String\n  completedAt_greater: FuzzyDateInt\n  completedAt_lesser: FuzzyDateInt\n  completedAt_like: String\n  sort: [MediaListSort]\n): MediaListCollection\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"userid-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"userId")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by a user's id"),(0,r.kt)("h4",{id:"username-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"userName")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Filter by a user's name"),(0,r.kt)("h4",{id:"type-mediatype"},(0,r.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-type"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaType")),")"),(0,r.kt)("p",null,"Filter by the list entries media type"),(0,r.kt)("h4",{id:"status-medialiststatus"},(0,r.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-status"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaListStatus")),")"),(0,r.kt)("p",null,"Filter by the watching/reading status"),(0,r.kt)("h4",{id:"notes-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"notes")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Filter by note words and #tags"),(0,r.kt)("h4",{id:"startedat-fuzzydateint"},(0,r.kt)("inlineCode",{parentName:"h4"},"startedAt")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,r.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt")),")"),(0,r.kt)("p",null,"Filter by the date the user started the media"),(0,r.kt)("h4",{id:"completedat-fuzzydateint"},(0,r.kt)("inlineCode",{parentName:"h4"},"completedAt")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,r.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt")),")"),(0,r.kt)("p",null,"Filter by the date the user completed the media"),(0,r.kt)("h4",{id:"forcesinglecompletedlist-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"forceSingleCompletedList")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("p",null,"Always return completed list entries in one group, overriding the user's split completed option."),(0,r.kt)("h4",{id:"chunk-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"chunk")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Which chunk of list entries to load"),(0,r.kt)("h4",{id:"perchunk-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"perChunk")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The amount of entries per chunk, max 500"),(0,r.kt)("h4",{id:"status_in-medialiststatus"},(0,r.kt)("inlineCode",{parentName:"h4"},"status_in")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-status"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaListStatus")),")"),(0,r.kt)("p",null,"Filter by the watching/reading status"),(0,r.kt)("h4",{id:"status_not_in-medialiststatus"},(0,r.kt)("inlineCode",{parentName:"h4"},"status_not_in")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-status"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaListStatus")),")"),(0,r.kt)("p",null,"Filter by the watching/reading status"),(0,r.kt)("h4",{id:"status_not-medialiststatus"},(0,r.kt)("inlineCode",{parentName:"h4"},"status_not")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-status"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaListStatus")),")"),(0,r.kt)("p",null,"Filter by the watching/reading status"),(0,r.kt)("h4",{id:"notes_like-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"notes_like")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Filter by note words and #tags"),(0,r.kt)("h4",{id:"startedat_greater-fuzzydateint"},(0,r.kt)("inlineCode",{parentName:"h4"},"startedAt_greater")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,r.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt")),")"),(0,r.kt)("p",null,"Filter by the date the user started the media"),(0,r.kt)("h4",{id:"startedat_lesser-fuzzydateint"},(0,r.kt)("inlineCode",{parentName:"h4"},"startedAt_lesser")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,r.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt")),")"),(0,r.kt)("p",null,"Filter by the date the user started the media"),(0,r.kt)("h4",{id:"startedat_like-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"startedAt_like")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Filter by the date the user started the media"),(0,r.kt)("h4",{id:"completedat_greater-fuzzydateint"},(0,r.kt)("inlineCode",{parentName:"h4"},"completedAt_greater")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,r.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt")),")"),(0,r.kt)("p",null,"Filter by the date the user completed the media"),(0,r.kt)("h4",{id:"completedat_lesser-fuzzydateint"},(0,r.kt)("inlineCode",{parentName:"h4"},"completedAt_lesser")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,r.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt")),")"),(0,r.kt)("p",null,"Filter by the date the user completed the media"),(0,r.kt)("h4",{id:"completedat_like-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"completedAt_like")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Filter by the date the user completed the media"),(0,r.kt)("h4",{id:"sort-medialistsort"},(0,r.kt)("inlineCode",{parentName:"h4"},"sort")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-sort"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaListSort")),")"),(0,r.kt)("p",null,"The order the results will be returned in"),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"medialistcollection"},(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media-list-collection"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaListCollection"))),(0,r.kt)("p",null,"List of anime or manga"))}p.isMDXComponent=!0}}]);