"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[1523],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(a),u=r,y=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return a?n.createElement(y,s(s({ref:t},p),{},{components:a})):n.createElement(y,s({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4084:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>d,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=a(7462),r=a(7294),o=a(3905);const s={id:"json",title:"Json",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,c={unversionedId:"schema/scalars/json",id:"schema/scalars/json",title:"Json",description:"No description",source:"@site/docs/schema/scalars/json.mdx",sourceDirName:"schema/scalars",slug:"/schema/scalars/json",permalink:"/schema/scalars/json",draft:!1,tags:[],version:"current",frontMatter:{id:"json",title:"Json",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},l={},p=[{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],d=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:p,Bullet:d,SpecifiedBy:m,Badge:u};function f(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar Json\n")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/schema/mutations/update-ani-chart-highlights"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateAniChartHighlights"))," ",(0,o.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/mutations/update-ani-chart-settings"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateAniChartSettings"))," ",(0,o.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/schema/objects/ani-chart-user"},(0,o.kt)("inlineCode",{parentName:"a"},"AniChartUser"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/objects/media-list"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaList"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/objects/media-list-options"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaListOptions"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/objects/media-list-type-options"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaListTypeOptions"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/objects/media-submission"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaSubmission"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/objects/revision-history"},(0,o.kt)("inlineCode",{parentName:"a"},"RevisionHistory"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/objects/thread-comment"},(0,o.kt)("inlineCode",{parentName:"a"},"ThreadComment"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/objects/user-mod-data"},(0,o.kt)("inlineCode",{parentName:"a"},"UserModData"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);