"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9020],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),p=l,f=u["".concat(i,".").concat(p)]||u[p]||m[p]||r;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:l,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7001:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),l=a(7294),r=a(4137);const o={id:"delete-custom-list",title:"DeleteCustomList",hide_table_of_contents:!1},s=void 0,i={unversionedId:"mutations/delete-custom-list",id:"mutations/delete-custom-list",title:"DeleteCustomList",description:"Delete a custom list and remove the list entries from it",source:"@site/examples/default/mutations/delete-custom-list.mdx",sourceDirName:"mutations",slug:"/mutations/delete-custom-list",permalink:"/examples/default/mutations/delete-custom-list",draft:!1,tags:[],version:"current",frontMatter:{id:"delete-custom-list",title:"DeleteCustomList",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DeleteActivity",permalink:"/examples/default/mutations/delete-activity"},next:{title:"DeleteMediaListEntry",permalink:"/examples/default/mutations/delete-media-list-entry"}},c={},d=()=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(l.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteCustomList.<b>customList</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-deletecustomlistbcustomlistbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteCustomList.<b>type</b></code><Bullet /><code>MediaType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-deletecustomlistbtypebcodemediatype-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Deleted</code> <Badge class="badge badge--secondary" text="object"/>',id:"deleted-",level:4}],f=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:s=!1}=e;const[i,c]=(0,l.useState)(s);return(0,r.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&o)},y={Bullet:d,SpecifiedBy:u,Badge:m,toc:p,Details:f};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"googlebot",content:"noindex"}),(0,r.kt)("meta",{charset:"utf-8"})),(0,r.kt)("p",null,"Delete a custom list and remove the list entries from it"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"DeleteCustomList(\n  customList: String\n  type: MediaType\n): Deleted\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-deletecustomlistbcustomlistbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"DeleteCustomList.",(0,r.kt)("b",null,"customList"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The name of the custom list to delete")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-deletecustomlistbtypebcodemediatype-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"DeleteCustomList.",(0,r.kt)("b",null,"type"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/enums/media-type"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaType"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The media list type of the custom list")),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"deleted-"},(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/deleted"},(0,r.kt)("inlineCode",{parentName:"a"},"Deleted"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Deleted data type")))}b.isMDXComponent=!0}}]);