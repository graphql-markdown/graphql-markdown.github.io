"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[4860],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),f=r,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||l;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},7279:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>f});var n=a(7462),r=a(7294),l=a(4137);const o={id:"fuzzy-date-int",title:"FuzzyDateInt",hide_table_of_contents:!1},i=void 0,s={unversionedId:"scalars/fuzzy-date-int",id:"scalars/fuzzy-date-int",title:"FuzzyDateInt",description:"8 digit long date integer (YYYYMMDD). Unknown dates represented by 0. E.g. 2016 19760500",source:"@site/examples/default/scalars/fuzzy-date-int.mdx",sourceDirName:"scalars",slug:"/scalars/fuzzy-date-int",permalink:"/examples/default/scalars/fuzzy-date-int",draft:!1,tags:[],version:"current",frontMatter:{id:"fuzzy-date-int",title:"FuzzyDateInt",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Float",permalink:"/examples/default/scalars/float"},next:{title:"ID",permalink:"/examples/default/scalars/id"}},c={},d=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),f=[{value:"Member Of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:i=!1}=e;const[s,c]=(0,r.useState)(i);return(0,l.kt)("details",(0,n.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&o)},y={Bullet:d,SpecifiedBy:p,Badge:u,toc:f,Details:m};function g(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("meta",{name:"googlebot",content:"noindex"}),(0,l.kt)("meta",{charset:"utf-8"})),(0,l.kt)("p",null,"8 digit long date integer (YYYYMMDD). Unknown dates represented by 0. E.g. 2016: 20160000, May 1976: 19760500"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar FuzzyDateInt\n")),(0,l.kt)("h3",{id:"member-of"},"Member Of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/examples/default/queries/media"},(0,l.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/queries/media-list"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaList"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/queries/media-list-collection"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaListCollection"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"query",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);