"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2807],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||l;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8695:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>d,Bullet:()=>p,Details:()=>m,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>f});var n=r(7462),a=r(7294),l=r(4137);const o={id:"genre-collection",title:"GenreCollection",hide_table_of_contents:!1},i=void 0,c={unversionedId:"queries/genre-collection",id:"queries/genre-collection",title:"GenreCollection",description:"Collection of all the possible media genres",source:"@site/examples/default/queries/genre-collection.mdx",sourceDirName:"queries",slug:"/queries/genre-collection",permalink:"/examples/default/queries/genre-collection",draft:!1,tags:[],version:"current",frontMatter:{id:"genre-collection",title:"GenreCollection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Following",permalink:"/examples/default/queries/following"},next:{title:"Like",permalink:"/examples/default/queries/like"}},s={},p=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),f=[{value:"Type",id:"type",level:3},{value:'<code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"string-",level:4}],m=e=>{let{dataOpen:t,dataClose:r,children:o,startOpen:i=!1}=e;const[c,s]=(0,a.useState)(i);return(0,l.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:r),c&&o)},g={Bullet:p,SpecifiedBy:u,Badge:d,toc:f,Details:m};function y(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("meta",{name:"googlebot",content:"noindex"}),(0,l.kt)("meta",{charset:"utf-8"})),(0,l.kt)("p",null,"Collection of all the possible media genres"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"GenreCollection: [String]\n")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"string-"},(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"String")," scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.")))}y.isMDXComponent=!0}}]);