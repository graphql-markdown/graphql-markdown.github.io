"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[986],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=s(a),p=i,u=h["".concat(l,".").concat(p)]||h[p]||m[p]||r;return a?n.createElement(u,d(d({ref:t},c),{},{components:a})):n.createElement(u,d({ref:t},c))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,d=new Array(r);d[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,d[1]=o;for(var s=2;s<r;s++)d[s]=a[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4129:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),d=["components"],o={id:"media",title:"Media",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,s={unversionedId:"schema/queries/media",id:"schema/queries/media",title:"Media",description:"Media query",source:"@site/docs/schema/queries/media.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/media",permalink:"/schema/queries/media",draft:!1,tags:[],version:"current",frontMatter:{id:"media",title:"Media",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},c={},m=[{value:"Arguments",id:"arguments",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>idMal</code> (<code>Int</code>)",id:"idmal-int",level:4},{value:"<code>startDate</code> (<code>FuzzyDateInt</code>)",id:"startdate-fuzzydateint",level:4},{value:"<code>endDate</code> (<code>FuzzyDateInt</code>)",id:"enddate-fuzzydateint",level:4},{value:"<code>season</code> (<code>MediaSeason</code>)",id:"season-mediaseason",level:4},{value:"<code>seasonYear</code> (<code>Int</code>)",id:"seasonyear-int",level:4},{value:"<code>type</code> (<code>MediaType</code>)",id:"type-mediatype",level:4},{value:"<code>format</code> (<code>MediaFormat</code>)",id:"format-mediaformat",level:4},{value:"<code>status</code> (<code>MediaStatus</code>)",id:"status-mediastatus",level:4},{value:"<code>episodes</code> (<code>Int</code>)",id:"episodes-int",level:4},{value:"<code>duration</code> (<code>Int</code>)",id:"duration-int",level:4},{value:"<code>chapters</code> (<code>Int</code>)",id:"chapters-int",level:4},{value:"<code>volumes</code> (<code>Int</code>)",id:"volumes-int",level:4},{value:"<code>isAdult</code> (<code>Boolean</code>)",id:"isadult-boolean",level:4},{value:"<code>genre</code> (<code>String</code>)",id:"genre-string",level:4},{value:"<code>tag</code> (<code>String</code>)",id:"tag-string",level:4},{value:"<code>minimumTagRank</code> (<code>Int</code>)",id:"minimumtagrank-int",level:4},{value:"<code>tagCategory</code> (<code>String</code>)",id:"tagcategory-string",level:4},{value:"<code>onList</code> (<code>Boolean</code>)",id:"onlist-boolean",level:4},{value:"<code>licensedBy</code> (<code>String</code>)",id:"licensedby-string",level:4},{value:"<code>licensedById</code> (<code>Int</code>)",id:"licensedbyid-int",level:4},{value:"<code>averageScore</code> (<code>Int</code>)",id:"averagescore-int",level:4},{value:"<code>popularity</code> (<code>Int</code>)",id:"popularity-int",level:4},{value:"<code>source</code> (<code>MediaSource</code>)",id:"source-mediasource",level:4},{value:"<code>countryOfOrigin</code> (<code>CountryCode</code>)",id:"countryoforigin-countrycode",level:4},{value:"<code>isLicensed</code> (<code>Boolean</code>)",id:"islicensed-boolean",level:4},{value:"<code>search</code> (<code>String</code>)",id:"search-string",level:4},{value:"<code>id_not</code> (<code>Int</code>)",id:"id_not-int",level:4},{value:"<code>id_in</code> (<code>Int</code>)",id:"id_in-int",level:4},{value:"<code>id_not_in</code> (<code>Int</code>)",id:"id_not_in-int",level:4},{value:"<code>idMal_not</code> (<code>Int</code>)",id:"idmal_not-int",level:4},{value:"<code>idMal_in</code> (<code>Int</code>)",id:"idmal_in-int",level:4},{value:"<code>idMal_not_in</code> (<code>Int</code>)",id:"idmal_not_in-int",level:4},{value:"<code>startDate_greater</code> (<code>FuzzyDateInt</code>)",id:"startdate_greater-fuzzydateint",level:4},{value:"<code>startDate_lesser</code> (<code>FuzzyDateInt</code>)",id:"startdate_lesser-fuzzydateint",level:4},{value:"<code>startDate_like</code> (<code>String</code>)",id:"startdate_like-string",level:4},{value:"<code>endDate_greater</code> (<code>FuzzyDateInt</code>)",id:"enddate_greater-fuzzydateint",level:4},{value:"<code>endDate_lesser</code> (<code>FuzzyDateInt</code>)",id:"enddate_lesser-fuzzydateint",level:4},{value:"<code>endDate_like</code> (<code>String</code>)",id:"enddate_like-string",level:4},{value:"<code>format_in</code> (<code>MediaFormat</code>)",id:"format_in-mediaformat",level:4},{value:"<code>format_not</code> (<code>MediaFormat</code>)",id:"format_not-mediaformat",level:4},{value:"<code>format_not_in</code> (<code>MediaFormat</code>)",id:"format_not_in-mediaformat",level:4},{value:"<code>status_in</code> (<code>MediaStatus</code>)",id:"status_in-mediastatus",level:4},{value:"<code>status_not</code> (<code>MediaStatus</code>)",id:"status_not-mediastatus",level:4},{value:"<code>status_not_in</code> (<code>MediaStatus</code>)",id:"status_not_in-mediastatus",level:4},{value:"<code>episodes_greater</code> (<code>Int</code>)",id:"episodes_greater-int",level:4},{value:"<code>episodes_lesser</code> (<code>Int</code>)",id:"episodes_lesser-int",level:4},{value:"<code>duration_greater</code> (<code>Int</code>)",id:"duration_greater-int",level:4},{value:"<code>duration_lesser</code> (<code>Int</code>)",id:"duration_lesser-int",level:4},{value:"<code>chapters_greater</code> (<code>Int</code>)",id:"chapters_greater-int",level:4},{value:"<code>chapters_lesser</code> (<code>Int</code>)",id:"chapters_lesser-int",level:4},{value:"<code>volumes_greater</code> (<code>Int</code>)",id:"volumes_greater-int",level:4},{value:"<code>volumes_lesser</code> (<code>Int</code>)",id:"volumes_lesser-int",level:4},{value:"<code>genre_in</code> (<code>String</code>)",id:"genre_in-string",level:4},{value:"<code>genre_not_in</code> (<code>String</code>)",id:"genre_not_in-string",level:4},{value:"<code>tag_in</code> (<code>String</code>)",id:"tag_in-string",level:4},{value:"<code>tag_not_in</code> (<code>String</code>)",id:"tag_not_in-string",level:4},{value:"<code>tagCategory_in</code> (<code>String</code>)",id:"tagcategory_in-string",level:4},{value:"<code>tagCategory_not_in</code> (<code>String</code>)",id:"tagcategory_not_in-string",level:4},{value:"<code>licensedBy_in</code> (<code>String</code>)",id:"licensedby_in-string",level:4},{value:"<code>licensedById_in</code> (<code>Int</code>)",id:"licensedbyid_in-int",level:4},{value:"<code>averageScore_not</code> (<code>Int</code>)",id:"averagescore_not-int",level:4},{value:"<code>averageScore_greater</code> (<code>Int</code>)",id:"averagescore_greater-int",level:4},{value:"<code>averageScore_lesser</code> (<code>Int</code>)",id:"averagescore_lesser-int",level:4},{value:"<code>popularity_not</code> (<code>Int</code>)",id:"popularity_not-int",level:4},{value:"<code>popularity_greater</code> (<code>Int</code>)",id:"popularity_greater-int",level:4},{value:"<code>popularity_lesser</code> (<code>Int</code>)",id:"popularity_lesser-int",level:4},{value:"<code>source_in</code> (<code>MediaSource</code>)",id:"source_in-mediasource",level:4},{value:"<code>sort</code> (<code>MediaSort</code>)",id:"sort-mediasort",level:4},{value:"Type",id:"type",level:3},{value:"<code>Media</code>",id:"media",level:4}],h={toc:m};function p(e){var t=e.components,a=(0,i.Z)(e,d);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Media query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"Media(\n  id: Int\n  idMal: Int\n  startDate: FuzzyDateInt\n  endDate: FuzzyDateInt\n  season: MediaSeason\n  seasonYear: Int\n  type: MediaType\n  format: MediaFormat\n  status: MediaStatus\n  episodes: Int\n  duration: Int\n  chapters: Int\n  volumes: Int\n  isAdult: Boolean\n  genre: String\n  tag: String\n  minimumTagRank: Int\n  tagCategory: String\n  onList: Boolean\n  licensedBy: String\n  licensedById: Int\n  averageScore: Int\n  popularity: Int\n  source: MediaSource\n  countryOfOrigin: CountryCode\n  isLicensed: Boolean\n  search: String\n  id_not: Int\n  id_in: [Int]\n  id_not_in: [Int]\n  idMal_not: Int\n  idMal_in: [Int]\n  idMal_not_in: [Int]\n  startDate_greater: FuzzyDateInt\n  startDate_lesser: FuzzyDateInt\n  startDate_like: String\n  endDate_greater: FuzzyDateInt\n  endDate_lesser: FuzzyDateInt\n  endDate_like: String\n  format_in: [MediaFormat]\n  format_not: MediaFormat\n  format_not_in: [MediaFormat]\n  status_in: [MediaStatus]\n  status_not: MediaStatus\n  status_not_in: [MediaStatus]\n  episodes_greater: Int\n  episodes_lesser: Int\n  duration_greater: Int\n  duration_lesser: Int\n  chapters_greater: Int\n  chapters_lesser: Int\n  volumes_greater: Int\n  volumes_lesser: Int\n  genre_in: [String]\n  genre_not_in: [String]\n  tag_in: [String]\n  tag_not_in: [String]\n  tagCategory_in: [String]\n  tagCategory_not_in: [String]\n  licensedBy_in: [String]\n  licensedById_in: [Int]\n  averageScore_not: Int\n  averageScore_greater: Int\n  averageScore_lesser: Int\n  popularity_not: Int\n  popularity_greater: Int\n  popularity_lesser: Int\n  source_in: [MediaSource]\n  sort: [MediaSort]\n): Media\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"id-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the media id"),(0,r.kt)("h4",{id:"idmal-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"idMal"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the media's MyAnimeList id"),(0,r.kt)("h4",{id:"startdate-fuzzydateint"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"startDate"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,r.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt")),")"),(0,r.kt)("p",null,"Filter by the start date of the media"),(0,r.kt)("h4",{id:"enddate-fuzzydateint"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"endDate"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,r.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt")),")"),(0,r.kt)("p",null,"Filter by the end date of the media"),(0,r.kt)("h4",{id:"season-mediaseason"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"season"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-season"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaSeason")),")"),(0,r.kt)("p",null,"Filter by the season the media was released in"),(0,r.kt)("h4",{id:"seasonyear-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"seasonYear"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The year of the season (Winter 2017 would also include December 2016 releases). Requires season argument"),(0,r.kt)("h4",{id:"type-mediatype"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"type"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-type"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaType")),")"),(0,r.kt)("p",null,"Filter by the media's type"),(0,r.kt)("h4",{id:"format-mediaformat"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"format"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-format"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaFormat")),")"),(0,r.kt)("p",null,"Filter by the media's format"),(0,r.kt)("h4",{id:"status-mediastatus"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"status"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-status"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaStatus")),")"),(0,r.kt)("p",null,"Filter by the media's current release status"),(0,r.kt)("h4",{id:"episodes-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"episodes"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by amount of episodes the media has"),(0,r.kt)("h4",{id:"duration-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"duration"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the media's episode length"),(0,r.kt)("h4",{id:"chapters-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"chapters"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the media's chapter count"),(0,r.kt)("h4",{id:"volumes-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"volumes"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the media's volume count"),(0,r.kt)("h4",{id:"isadult-boolean"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"isAdult"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("p",null,"Filter by if the media's intended for 18+ adult audiences"),(0,r.kt)("h4",{id:"genre-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"genre"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Filter by the media's genres"),(0,r.kt)("h4",{id:"tag-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"tag"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Filter by the media's tags"),(0,r.kt)("h4",{id:"minimumtagrank-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"minimumTagRank"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Only apply the tags filter argument to tags above this rank. Default: 18"),(0,r.kt)("h4",{id:"tagcategory-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"tagCategory"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Filter by the media's tags with in a tag category"),(0,r.kt)("h4",{id:"onlist-boolean"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"onList"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("p",null,"Filter by the media on the authenticated user's lists"),(0,r.kt)("h4",{id:"licensedby-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"licensedBy"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Filter media by sites name with a online streaming or reading license"),(0,r.kt)("h4",{id:"licensedbyid-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"licensedById"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter media by sites id with a online streaming or reading license"),(0,r.kt)("h4",{id:"averagescore-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"averageScore"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the media's average score"),(0,r.kt)("h4",{id:"popularity-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"popularity"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the number of users with this media on their list"),(0,r.kt)("h4",{id:"source-mediasource"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"source"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-source"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaSource")),")"),(0,r.kt)("p",null,"Filter by the source type of the media"),(0,r.kt)("h4",{id:"countryoforigin-countrycode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"countryOfOrigin"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/country-code"},(0,r.kt)("inlineCode",{parentName:"a"},"CountryCode")),")"),(0,r.kt)("p",null,"Filter by the media's country of origin"),(0,r.kt)("h4",{id:"islicensed-boolean"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"isLicensed"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("p",null,"If the media is officially licensed or a self-published doujin release"),(0,r.kt)("h4",{id:"search-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"search"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Filter by search query"),(0,r.kt)("h4",{id:"id_not-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"id_not"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the media id"),(0,r.kt)("h4",{id:"id_in-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"id_in"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the media id"),(0,r.kt)("h4",{id:"id_not_in-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"id_not_in"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the media id"),(0,r.kt)("h4",{id:"idmal_not-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"idMal_not"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the media's MyAnimeList id"),(0,r.kt)("h4",{id:"idmal_in-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"idMal_in"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the media's MyAnimeList id"),(0,r.kt)("h4",{id:"idmal_not_in-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"idMal_not_in"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the media's MyAnimeList id"),(0,r.kt)("h4",{id:"startdate_greater-fuzzydateint"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"startDate_greater"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,r.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt")),")"),(0,r.kt)("p",null,"Filter by the start date of the media"),(0,r.kt)("h4",{id:"startdate_lesser-fuzzydateint"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"startDate_lesser"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,r.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt")),")"),(0,r.kt)("p",null,"Filter by the start date of the media"),(0,r.kt)("h4",{id:"startdate_like-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"startDate_like"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Filter by the start date of the media"),(0,r.kt)("h4",{id:"enddate_greater-fuzzydateint"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"endDate_greater"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,r.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt")),")"),(0,r.kt)("p",null,"Filter by the end date of the media"),(0,r.kt)("h4",{id:"enddate_lesser-fuzzydateint"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"endDate_lesser"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,r.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt")),")"),(0,r.kt)("p",null,"Filter by the end date of the media"),(0,r.kt)("h4",{id:"enddate_like-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"endDate_like"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Filter by the end date of the media"),(0,r.kt)("h4",{id:"format_in-mediaformat"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"format_in"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-format"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaFormat")),")"),(0,r.kt)("p",null,"Filter by the media's format"),(0,r.kt)("h4",{id:"format_not-mediaformat"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"format_not"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-format"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaFormat")),")"),(0,r.kt)("p",null,"Filter by the media's format"),(0,r.kt)("h4",{id:"format_not_in-mediaformat"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"format_not_in"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-format"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaFormat")),")"),(0,r.kt)("p",null,"Filter by the media's format"),(0,r.kt)("h4",{id:"status_in-mediastatus"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"status_in"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-status"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaStatus")),")"),(0,r.kt)("p",null,"Filter by the media's current release status"),(0,r.kt)("h4",{id:"status_not-mediastatus"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"status_not"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-status"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaStatus")),")"),(0,r.kt)("p",null,"Filter by the media's current release status"),(0,r.kt)("h4",{id:"status_not_in-mediastatus"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"status_not_in"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-status"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaStatus")),")"),(0,r.kt)("p",null,"Filter by the media's current release status"),(0,r.kt)("h4",{id:"episodes_greater-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"episodes_greater"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by amount of episodes the media has"),(0,r.kt)("h4",{id:"episodes_lesser-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"episodes_lesser"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by amount of episodes the media has"),(0,r.kt)("h4",{id:"duration_greater-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"duration_greater"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the media's episode length"),(0,r.kt)("h4",{id:"duration_lesser-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"duration_lesser"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the media's episode length"),(0,r.kt)("h4",{id:"chapters_greater-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"chapters_greater"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the media's chapter count"),(0,r.kt)("h4",{id:"chapters_lesser-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"chapters_lesser"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the media's chapter count"),(0,r.kt)("h4",{id:"volumes_greater-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"volumes_greater"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the media's volume count"),(0,r.kt)("h4",{id:"volumes_lesser-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"volumes_lesser"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the media's volume count"),(0,r.kt)("h4",{id:"genre_in-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"genre_in"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Filter by the media's genres"),(0,r.kt)("h4",{id:"genre_not_in-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"genre_not_in"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Filter by the media's genres"),(0,r.kt)("h4",{id:"tag_in-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"tag_in"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Filter by the media's tags"),(0,r.kt)("h4",{id:"tag_not_in-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"tag_not_in"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Filter by the media's tags"),(0,r.kt)("h4",{id:"tagcategory_in-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"tagCategory_in"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Filter by the media's tags with in a tag category"),(0,r.kt)("h4",{id:"tagcategory_not_in-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"tagCategory_not_in"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Filter by the media's tags with in a tag category"),(0,r.kt)("h4",{id:"licensedby_in-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"licensedBy_in"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Filter media by sites name with a online streaming or reading license"),(0,r.kt)("h4",{id:"licensedbyid_in-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"licensedById_in"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter media by sites id with a online streaming or reading license"),(0,r.kt)("h4",{id:"averagescore_not-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"averageScore_not"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the media's average score"),(0,r.kt)("h4",{id:"averagescore_greater-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"averageScore_greater"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the media's average score"),(0,r.kt)("h4",{id:"averagescore_lesser-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"averageScore_lesser"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the media's average score"),(0,r.kt)("h4",{id:"popularity_not-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"popularity_not"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the number of users with this media on their list"),(0,r.kt)("h4",{id:"popularity_greater-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"popularity_greater"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the number of users with this media on their list"),(0,r.kt)("h4",{id:"popularity_lesser-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"popularity_lesser"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the number of users with this media on their list"),(0,r.kt)("h4",{id:"source_in-mediasource"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"source_in"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-source"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaSource")),")"),(0,r.kt)("p",null,"Filter by the source type of the media"),(0,r.kt)("h4",{id:"sort-mediasort"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"sort"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-sort"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaSort")),")"),(0,r.kt)("p",null,"The order the results will be returned in"),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"media"},(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,r.kt)("inlineCode",{parentName:"a"},"Media"))),(0,r.kt)("p",null,"Anime or Manga"))}p.isMDXComponent=!0}}]);