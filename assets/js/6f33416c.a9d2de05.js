"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9011],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(a),p=r,f=c["".concat(s,".").concat(p)]||c[p]||m[p]||l;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2322:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>u,Details:()=>f,SpecifiedBy:()=>c,assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=a(7294),l=a(3905);const o={id:"media-status",title:"MediaStatus",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},i=void 0,s={unversionedId:"enums/media-status",id:"enums/media-status",title:"MediaStatus",description:"The current releasing status of the media",source:"@site/examples/default/enums/media-status.mdx",sourceDirName:"enums",slug:"/enums/media-status",permalink:"/examples/default/enums/media-status",draft:!1,tags:[],version:"current",frontMatter:{id:"media-status",title:"MediaStatus",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},u=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),p=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>MediaStatus.<b>FINISHED</b></code>",id:"code-style-fontweight-normal-mediastatusbfinishedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MediaStatus.<b>RELEASING</b></code>",id:"code-style-fontweight-normal-mediastatusbreleasingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MediaStatus.<b>NOT_YET_RELEASED</b></code>",id:"code-style-fontweight-normal-mediastatusbnot_yet_releasedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MediaStatus.<b>CANCELLED</b></code>",id:"code-style-fontweight-normal-mediastatusbcancelledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MediaStatus.<b>HIATUS</b></code>",id:"code-style-fontweight-normal-mediastatusbhiatusbcode",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:i=!1}=e;const[s,d]=(0,r.useState)(i);return(0,l.kt)("details",(0,n.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&o)},b={Bullet:u,SpecifiedBy:c,Badge:m,toc:p,Details:f};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The current releasing status of the media"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum MediaStatus {\n  FINISHED\n  RELEASING\n  NOT_YET_RELEASED\n  CANCELLED\n  HIATUS\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-mediastatusbfinishedbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaStatus.",(0,l.kt)("b",null,"FINISHED")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Has completed and is no longer being released")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-mediastatusbreleasingbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaStatus.",(0,l.kt)("b",null,"RELEASING")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Currently releasing")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-mediastatusbnot_yet_releasedbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaStatus.",(0,l.kt)("b",null,"NOT_YET_RELEASED")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"To be released at a later date")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-mediastatusbcancelledbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaStatus.",(0,l.kt)("b",null,"CANCELLED")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Ended before the work could be finished")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-mediastatusbhiatusbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MediaStatus.",(0,l.kt)("b",null,"HIATUS")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Version 2 only. Is currently paused from releasing and will resume at a later date")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/media"},(0,l.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/queries/media"},(0,l.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,l.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);