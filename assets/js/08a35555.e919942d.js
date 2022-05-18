"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[7862],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),c=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(t),u=r,f=p["".concat(d,".").concat(u)]||p[u]||s[u]||i;return t?a.createElement(f,o(o({ref:n},m),{},{components:t})):a.createElement(f,o({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8014:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],l={id:"media-rank",title:"MediaRank",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,c={unversionedId:"schema/objects/media-rank",id:"schema/objects/media-rank",title:"MediaRank",description:"The ranking of a media in a particular time span and format compared to other media",source:"@site/docs/schema/objects/media-rank.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/media-rank",permalink:"/schema/objects/media-rank",draft:!1,tags:[],version:"current",frontMatter:{id:"media-rank",title:"MediaRank",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},m={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>rank</code> (<code>Int</code>)",id:"rank-int",level:4},{value:"<code>type</code> (<code>MediaRankType</code>)",id:"type-mediaranktype",level:4},{value:"<code>format</code> (<code>MediaFormat</code>)",id:"format-mediaformat",level:4},{value:"<code>year</code> (<code>Int</code>)",id:"year-int",level:4},{value:"<code>season</code> (<code>MediaSeason</code>)",id:"season-mediaseason",level:4},{value:"<code>allTime</code> (<code>Boolean</code>)",id:"alltime-boolean",level:4},{value:"<code>context</code> (<code>String</code>)",id:"context-string",level:4}],p={toc:s};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ranking of a media in a particular time span and format compared to other media"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaRank {\n  id: Int!\n  rank: Int!\n  type: MediaRankType!\n  format: MediaFormat!\n  year: Int\n  season: MediaSeason\n  allTime: Boolean\n  context: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The id of the rank"),(0,i.kt)("h4",{id:"rank-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"rank")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The numerical rank of the media"),(0,i.kt)("h4",{id:"type-mediaranktype"},(0,i.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/media-rank-type"},(0,i.kt)("inlineCode",{parentName:"a"},"MediaRankType")),")"),(0,i.kt)("p",null,"The type of ranking"),(0,i.kt)("h4",{id:"format-mediaformat"},(0,i.kt)("inlineCode",{parentName:"h4"},"format")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/media-format"},(0,i.kt)("inlineCode",{parentName:"a"},"MediaFormat")),")"),(0,i.kt)("p",null,"The format the media is ranked within"),(0,i.kt)("h4",{id:"year-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"year")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The year the media is ranked within"),(0,i.kt)("h4",{id:"season-mediaseason"},(0,i.kt)("inlineCode",{parentName:"h4"},"season")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/media-season"},(0,i.kt)("inlineCode",{parentName:"a"},"MediaSeason")),")"),(0,i.kt)("p",null,"The season the media is ranked within"),(0,i.kt)("h4",{id:"alltime-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"allTime")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the ranking is based on all time instead of a season/year"),(0,i.kt)("h4",{id:"context-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"context")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"String that gives context to the ranking type and time span"))}u.isMDXComponent=!0}}]);