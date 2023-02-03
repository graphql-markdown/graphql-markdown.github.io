"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6813],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(a),u=n,y=m["".concat(c,".").concat(u)]||m[u]||d[u]||s;return a?r.createElement(y,i(i({ref:t},p),{},{components:a})):r.createElement(y,i({ref:t},p))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4196:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>m,SpecifiedBy:()=>d,assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=a(7462),n=a(7294),s=a(3905);const i={id:"float",title:"Float",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,c={unversionedId:"scalars/float",id:"scalars/float",title:"Float",description:"The Float scalar type represents signed double-precision fractional values as specified by IEEE 754.",source:"@site/examples/schema/scalars/float.mdx",sourceDirName:"scalars",slug:"/scalars/float",permalink:"/schema/scalars/float",draft:!1,tags:[],version:"current",frontMatter:{id:"float",title:"Float",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},l={},p=[{value:"Member of",id:"member-of",level:3}],m=()=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,s.kt)(n.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:p,Bullet:m,SpecifiedBy:d,Badge:u};function f(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Float")," scalar type represents signed double-precision fractional values as specified by ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IEEE_floating_point"},"IEEE 754"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar Float\n")),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/schema/objects/airing-progression"},(0,s.kt)("inlineCode",{parentName:"a"},"AiringProgression"))," ",(0,s.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-list"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaList"))," ",(0,s.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/save-media-list-entry"},(0,s.kt)("inlineCode",{parentName:"a"},"SaveMediaListEntry"))," ",(0,s.kt)(u,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/update-media-list-entries"},(0,s.kt)("inlineCode",{parentName:"a"},"UpdateMediaListEntries"))," ",(0,s.kt)(u,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-country-statistic"},(0,s.kt)("inlineCode",{parentName:"a"},"UserCountryStatistic"))," ",(0,s.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-format-statistic"},(0,s.kt)("inlineCode",{parentName:"a"},"UserFormatStatistic"))," ",(0,s.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-genre-statistic"},(0,s.kt)("inlineCode",{parentName:"a"},"UserGenreStatistic"))," ",(0,s.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-length-statistic"},(0,s.kt)("inlineCode",{parentName:"a"},"UserLengthStatistic"))," ",(0,s.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-release-year-statistic"},(0,s.kt)("inlineCode",{parentName:"a"},"UserReleaseYearStatistic"))," ",(0,s.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-score-statistic"},(0,s.kt)("inlineCode",{parentName:"a"},"UserScoreStatistic"))," ",(0,s.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-staff-statistic"},(0,s.kt)("inlineCode",{parentName:"a"},"UserStaffStatistic"))," ",(0,s.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-start-year-statistic"},(0,s.kt)("inlineCode",{parentName:"a"},"UserStartYearStatistic"))," ",(0,s.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-statistics"},(0,s.kt)("inlineCode",{parentName:"a"},"UserStatistics"))," ",(0,s.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-status-statistic"},(0,s.kt)("inlineCode",{parentName:"a"},"UserStatusStatistic"))," ",(0,s.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-studio-statistic"},(0,s.kt)("inlineCode",{parentName:"a"},"UserStudioStatistic"))," ",(0,s.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-tag-statistic"},(0,s.kt)("inlineCode",{parentName:"a"},"UserTagStatistic"))," ",(0,s.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-voice-actor-statistic"},(0,s.kt)("inlineCode",{parentName:"a"},"UserVoiceActorStatistic"))," ",(0,s.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);