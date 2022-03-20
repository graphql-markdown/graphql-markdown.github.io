"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[4881],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(a),p=r,h=u["".concat(s,".").concat(p)]||u[p]||m[p]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5408:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],d={id:"media-list",title:"MediaList"},s=void 0,l={unversionedId:"schema/objects/media-list",id:"schema/objects/media-list",title:"MediaList",description:"List of anime or manga",source:"@site/docs/schema/objects/media-list.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/media-list",permalink:"/schema/objects/media-list",tags:[],version:"current",frontMatter:{id:"media-list",title:"MediaList"},sidebar:"basic",previous:{title:"MediaListTypeOptions",permalink:"/schema/objects/media-list-type-options"},next:{title:"MediaMergeNotification",permalink:"/schema/objects/media-merge-notification"}},c={},m=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>userId</code> (<code>Int</code>)",id:"userid-int",level:4},{value:"<code>mediaId</code> (<code>Int</code>)",id:"mediaid-int",level:4},{value:"<code>status</code> (<code>MediaListStatus</code>)",id:"status-medialiststatus",level:4},{value:"<code>score</code> (<code>Float</code>)",id:"score-float",level:4},{value:"<code>progress</code> (<code>Int</code>)",id:"progress-int",level:4},{value:"<code>progressVolumes</code> (<code>Int</code>)",id:"progressvolumes-int",level:4},{value:"<code>repeat</code> (<code>Int</code>)",id:"repeat-int",level:4},{value:"<code>priority</code> (<code>Int</code>)",id:"priority-int",level:4},{value:"<code>private</code> (<code>Boolean</code>)",id:"private-boolean",level:4},{value:"<code>notes</code> (<code>String</code>)",id:"notes-string",level:4},{value:"<code>hiddenFromStatusLists</code> (<code>Boolean</code>)",id:"hiddenfromstatuslists-boolean",level:4},{value:"<code>customLists</code> (<code>Json</code>)",id:"customlists-json",level:4},{value:"<code>advancedScores</code> (<code>Json</code>)",id:"advancedscores-json",level:4},{value:"<code>startedAt</code> (<code>FuzzyDate</code>)",id:"startedat-fuzzydate",level:4},{value:"<code>completedAt</code> (<code>FuzzyDate</code>)",id:"completedat-fuzzydate",level:4},{value:"<code>updatedAt</code> (<code>Int</code>)",id:"updatedat-int",level:4},{value:"<code>createdAt</code> (<code>Int</code>)",id:"createdat-int",level:4},{value:"<code>media</code> (<code>Media</code>)",id:"media-media",level:4},{value:"<code>user</code> (<code>User</code>)",id:"user-user",level:4}],u={toc:m};function p(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"List of anime or manga"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaList {\n  id: Int!\n  userId: Int!\n  mediaId: Int!\n  status: MediaListStatus\n  score(format: ScoreFormat): Float\n  progress: Int\n  progressVolumes: Int\n  repeat: Int\n  priority: Int\n  private: Boolean\n  notes: String\n  hiddenFromStatusLists: Boolean\n  customLists(asArray: Boolean): Json\n  advancedScores: Json\n  startedAt: FuzzyDate\n  completedAt: FuzzyDate\n  updatedAt: Int\n  createdAt: Int\n  media: Media\n  user: User\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"id-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The id of the list entry"),(0,o.kt)("h4",{id:"userid-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"userId")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The id of the user owner of the list entry"),(0,o.kt)("h4",{id:"mediaid-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"mediaId")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The id of the media"),(0,o.kt)("h4",{id:"status-medialiststatus"},(0,o.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-status"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaListStatus")),")"),(0,o.kt)("p",null,"The watching/reading status"),(0,o.kt)("h4",{id:"score-float"},(0,o.kt)("inlineCode",{parentName:"h4"},"score")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,o.kt)("p",null,"The score of the entry"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"format-scoreformat"},(0,o.kt)("inlineCode",{parentName:"h5"},"format")," (",(0,o.kt)("a",{parentName:"h5",href:"/schema/enums/score-format"},(0,o.kt)("inlineCode",{parentName:"a"},"ScoreFormat")),")"))),(0,o.kt)("p",null,"Force the score to be returned in the provided format type."),(0,o.kt)("h4",{id:"progress-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"progress")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The amount of episodes/chapters consumed by the user"),(0,o.kt)("h4",{id:"progressvolumes-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"progressVolumes")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The amount of volumes read by the user"),(0,o.kt)("h4",{id:"repeat-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"repeat")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The amount of times the user has rewatched/read the media"),(0,o.kt)("h4",{id:"priority-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"priority")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"Priority of planning"),(0,o.kt)("h4",{id:"private-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"private")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("p",null,"If the entry should only be visible to authenticated user"),(0,o.kt)("h4",{id:"notes-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"notes")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"Text notes"),(0,o.kt)("h4",{id:"hiddenfromstatuslists-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"hiddenFromStatusLists")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("p",null,"If the entry shown be hidden from non-custom lists"),(0,o.kt)("h4",{id:"customlists-json"},(0,o.kt)("inlineCode",{parentName:"h4"},"customLists")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/json"},(0,o.kt)("inlineCode",{parentName:"a"},"Json")),")"),(0,o.kt)("p",null,"Map of booleans for which custom lists the entry are in"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"asarray-boolean"},(0,o.kt)("inlineCode",{parentName:"h5"},"asArray")," (",(0,o.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,o.kt)("p",null,"Change return structure to an array of objects"),(0,o.kt)("h4",{id:"advancedscores-json"},(0,o.kt)("inlineCode",{parentName:"h4"},"advancedScores")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/json"},(0,o.kt)("inlineCode",{parentName:"a"},"Json")),")"),(0,o.kt)("p",null,"Map of advanced scores with name keys"),(0,o.kt)("h4",{id:"startedat-fuzzydate"},(0,o.kt)("inlineCode",{parentName:"h4"},"startedAt")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/fuzzy-date"},(0,o.kt)("inlineCode",{parentName:"a"},"FuzzyDate")),")"),(0,o.kt)("p",null,"When the entry was started by the user"),(0,o.kt)("h4",{id:"completedat-fuzzydate"},(0,o.kt)("inlineCode",{parentName:"h4"},"completedAt")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/fuzzy-date"},(0,o.kt)("inlineCode",{parentName:"a"},"FuzzyDate")),")"),(0,o.kt)("p",null,"When the entry was completed by the user"),(0,o.kt)("h4",{id:"updatedat-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"When the entry data was last updated"),(0,o.kt)("h4",{id:"createdat-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"When the entry data was created"),(0,o.kt)("h4",{id:"media-media"},(0,o.kt)("inlineCode",{parentName:"h4"},"media")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,o.kt)("inlineCode",{parentName:"a"},"Media")),")"),(0,o.kt)("h4",{id:"user-user"},(0,o.kt)("inlineCode",{parentName:"h4"},"user")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User")),")"))}p.isMDXComponent=!0}}]);