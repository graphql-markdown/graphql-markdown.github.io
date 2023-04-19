"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[4934],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=l,y=u["".concat(i,".").concat(p)]||u[p]||m[p]||r;return n?a.createElement(y,o(o({ref:t},d),{},{components:n})):a.createElement(y,o({ref:t},d))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:l,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},864:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>y,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),l=n(7294),r=n(3905);const o={id:"delete-custom-list",title:"DeleteCustomList",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},s=void 0,i={unversionedId:"mutations/delete-custom-list",id:"mutations/delete-custom-list",title:"DeleteCustomList",description:"Delete a custom list and remove the list entries from it",source:"@site/examples/schema/mutations/delete-custom-list.mdx",sourceDirName:"mutations",slug:"/mutations/delete-custom-list",permalink:"/schema/mutations/delete-custom-list",draft:!1,tags:[],version:"current",frontMatter:{id:"delete-custom-list",title:"DeleteCustomList",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},d=()=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(l.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteCustomList.<b>customList</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-deletecustomlistbcustomlistbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteCustomList.<b>type</b></code><Bullet /><code>MediaType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-deletecustomlistbtypebcodemediatype-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Deleted</code> <Badge class="secondary" text="object"/>',id:"deleted-",level:4}],y=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:s=!1}=e;const[i,c]=(0,l.useState)(s);return(0,r.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&o)},f={Bullet:d,SpecifiedBy:u,Badge:m,toc:p,Details:y};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Delete a custom list and remove the list entries from it"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"DeleteCustomList(\n  customList: String\n  type: MediaType\n): Deleted\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-deletecustomlistbcustomlistbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"DeleteCustomList.",(0,r.kt)("b",null,"customList"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The name of the custom list to delete")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-deletecustomlistbtypebcodemediatype-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"DeleteCustomList.",(0,r.kt)("b",null,"type"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-type"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaType"))," ",(0,r.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The media list type of the custom list")),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"deleted-"},(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/deleted"},(0,r.kt)("inlineCode",{parentName:"a"},"Deleted"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Deleted data type")))}g.isMDXComponent=!0}}]);