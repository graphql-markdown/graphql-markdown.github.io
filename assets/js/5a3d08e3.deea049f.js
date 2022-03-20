"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[2263],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=c(n),u=a,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||r;return n?i.createElement(m,d(d({ref:t},s),{},{components:n})):i.createElement(m,d({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,d=new Array(r);d[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,d[1]=o;for(var c=2;c<r;c++)d[c]=n[c];return i.createElement.apply(null,d)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2828:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),d=["components"],o={id:"airing-schedule",title:"AiringSchedule"},l=void 0,c={unversionedId:"schema/queries/airing-schedule",id:"schema/queries/airing-schedule",title:"AiringSchedule",description:"Airing schedule query",source:"@site/docs/schema/queries/airing-schedule.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/airing-schedule",permalink:"/schema/queries/airing-schedule",tags:[],version:"current",frontMatter:{id:"airing-schedule",title:"AiringSchedule"},sidebar:"basic",previous:{title:"Activity",permalink:"/schema/queries/activity"},next:{title:"AniChartUser",permalink:"/schema/queries/ani-chart-user"}},s={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>mediaId</code> (<code>Int</code>)",id:"mediaid-int",level:4},{value:"<code>episode</code> (<code>Int</code>)",id:"episode-int",level:4},{value:"<code>airingAt</code> (<code>Int</code>)",id:"airingat-int",level:4},{value:"<code>notYetAired</code> (<code>Boolean</code>)",id:"notyetaired-boolean",level:4},{value:"<code>id_not</code> (<code>Int</code>)",id:"id_not-int",level:4},{value:"<code>id_in</code> (<code>Int</code>)",id:"id_in-int",level:4},{value:"<code>id_not_in</code> (<code>Int</code>)",id:"id_not_in-int",level:4},{value:"<code>mediaId_not</code> (<code>Int</code>)",id:"mediaid_not-int",level:4},{value:"<code>mediaId_in</code> (<code>Int</code>)",id:"mediaid_in-int",level:4},{value:"<code>mediaId_not_in</code> (<code>Int</code>)",id:"mediaid_not_in-int",level:4},{value:"<code>episode_not</code> (<code>Int</code>)",id:"episode_not-int",level:4},{value:"<code>episode_in</code> (<code>Int</code>)",id:"episode_in-int",level:4},{value:"<code>episode_not_in</code> (<code>Int</code>)",id:"episode_not_in-int",level:4},{value:"<code>episode_greater</code> (<code>Int</code>)",id:"episode_greater-int",level:4},{value:"<code>episode_lesser</code> (<code>Int</code>)",id:"episode_lesser-int",level:4},{value:"<code>airingAt_greater</code> (<code>Int</code>)",id:"airingat_greater-int",level:4},{value:"<code>airingAt_lesser</code> (<code>Int</code>)",id:"airingat_lesser-int",level:4},{value:"<code>sort</code> (<code>AiringSort</code>)",id:"sort-airingsort",level:4},{value:"Type",id:"type",level:3},{value:"<code>AiringSchedule</code>",id:"airingschedule",level:4}],h={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,d);return(0,r.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Airing schedule query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"AiringSchedule(\n  id: Int\n  mediaId: Int\n  episode: Int\n  airingAt: Int\n  notYetAired: Boolean\n  id_not: Int\n  id_in: [Int]\n  id_not_in: [Int]\n  mediaId_not: Int\n  mediaId_in: [Int]\n  mediaId_not_in: [Int]\n  episode_not: Int\n  episode_in: [Int]\n  episode_not_in: [Int]\n  episode_greater: Int\n  episode_lesser: Int\n  airingAt_greater: Int\n  airingAt_lesser: Int\n  sort: [AiringSort]\n): AiringSchedule\n\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"id-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the id of the airing schedule item"),(0,r.kt)("h4",{id:"mediaid-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"mediaId")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the id of associated media"),(0,r.kt)("h4",{id:"episode-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"episode")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the airing episode number"),(0,r.kt)("h4",{id:"airingat-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"airingAt")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the time of airing"),(0,r.kt)("h4",{id:"notyetaired-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"notYetAired")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("p",null,"Filter to episodes that haven't yet aired"),(0,r.kt)("h4",{id:"id_not-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"id_not")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the id of the airing schedule item"),(0,r.kt)("h4",{id:"id_in-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"id_in")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the id of the airing schedule item"),(0,r.kt)("h4",{id:"id_not_in-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"id_not_in")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the id of the airing schedule item"),(0,r.kt)("h4",{id:"mediaid_not-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"mediaId_not")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the id of associated media"),(0,r.kt)("h4",{id:"mediaid_in-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"mediaId_in")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the id of associated media"),(0,r.kt)("h4",{id:"mediaid_not_in-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"mediaId_not_in")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the id of associated media"),(0,r.kt)("h4",{id:"episode_not-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"episode_not")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the airing episode number"),(0,r.kt)("h4",{id:"episode_in-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"episode_in")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the airing episode number"),(0,r.kt)("h4",{id:"episode_not_in-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"episode_not_in")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the airing episode number"),(0,r.kt)("h4",{id:"episode_greater-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"episode_greater")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the airing episode number"),(0,r.kt)("h4",{id:"episode_lesser-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"episode_lesser")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the airing episode number"),(0,r.kt)("h4",{id:"airingat_greater-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"airingAt_greater")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the time of airing"),(0,r.kt)("h4",{id:"airingat_lesser-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"airingAt_lesser")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the time of airing"),(0,r.kt)("h4",{id:"sort-airingsort"},(0,r.kt)("inlineCode",{parentName:"h4"},"sort")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/airing-sort"},(0,r.kt)("inlineCode",{parentName:"a"},"AiringSort")),")"),(0,r.kt)("p",null,"The order the results will be returned in"),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"airingschedule"},(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/airing-schedule"},(0,r.kt)("inlineCode",{parentName:"a"},"AiringSchedule"))),(0,r.kt)("p",null,"Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate."))}u.isMDXComponent=!0}}]);