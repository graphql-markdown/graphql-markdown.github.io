"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[8827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(n),p=o,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||r;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},464:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>f,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(7462),o=n(7294),r=n(3905);const l={id:"media-season",title:"MediaSeason",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},i=void 0,s={unversionedId:"enums/media-season",id:"enums/media-season",title:"MediaSeason",description:"No description",source:"@site/examples/default/enums/media-season.mdx",sourceDirName:"enums",slug:"/enums/media-season",permalink:"/examples/default/enums/media-season",draft:!1,tags:[],version:"current",frontMatter:{id:"media-season",title:"MediaSeason",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},c=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),p=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>MediaSeason.<b>WINTER</b></code>",id:"code-style-fontweight-normal-mediaseasonbwinterbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MediaSeason.<b>SPRING</b></code>",id:"code-style-fontweight-normal-mediaseasonbspringbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MediaSeason.<b>SUMMER</b></code>",id:"code-style-fontweight-normal-mediaseasonbsummerbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MediaSeason.<b>FALL</b></code>",id:"code-style-fontweight-normal-mediaseasonbfallbcode",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:i=!1}=e;const[s,d]=(0,o.useState)(i);return(0,r.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&l)},b={Bullet:c,SpecifiedBy:m,Badge:u,toc:p,Details:f};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum MediaSeason {\n  WINTER\n  SPRING\n  SUMMER\n  FALL\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-mediaseasonbwinterbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MediaSeason.",(0,r.kt)("b",null,"WINTER")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Months December to February")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-mediaseasonbspringbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MediaSeason.",(0,r.kt)("b",null,"SPRING")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Months March to May")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-mediaseasonbsummerbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MediaSeason.",(0,r.kt)("b",null,"SUMMER")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Months June to August")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-mediaseasonbfallbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MediaSeason.",(0,r.kt)("b",null,"FALL")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Months September to November")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/examples/default/objects/media"},(0,r.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/examples/default/queries/media"},(0,r.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,r.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/examples/default/objects/media-rank"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaRank"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);