"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),k=a,m=d["".concat(c,".").concat(k)]||d[k]||u[k]||l;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9076:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,Details:()=>m,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>k});var r=n(7462),a=n(7294),l=n(3905);const o={id:"like",title:"Like",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},i=void 0,c={unversionedId:"queries/like",id:"queries/like",title:"Like",description:"Like query",source:"@site/examples/default/queries/like.mdx",sourceDirName:"queries",slug:"/queries/like",permalink:"/examples/default/queries/like",draft:!1,tags:[],version:"current",frontMatter:{id:"like",title:"Like",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},s={},p=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),k=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Like.<b>likeableId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-likeblikeableidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Like.<b>type</b></code><Bullet /><code>LikeableType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-likebtypebcodelikeabletype-",level:4},{value:"Type",id:"type",level:3},{value:'<code>User</code> <Badge class="secondary" text="object"/>',id:"user-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:i=!1}=e;const[c,s]=(0,a.useState)(i);return(0,l.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&o)},y={Bullet:p,SpecifiedBy:d,Badge:u,toc:k,Details:m};function f(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Like query"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"Like(\n  likeableId: Int\n  type: LikeableType\n): User\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-likeblikeableidbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Like.",(0,l.kt)("b",null,"likeableId"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The id of the likeable type")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-likebtypebcodelikeabletype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Like.",(0,l.kt)("b",null,"type"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/enums/likeable-type"},(0,l.kt)("inlineCode",{parentName:"a"},"LikeableType"))," ",(0,l.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The type of model the id applies to")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"user-"},(0,l.kt)("a",{parentName:"h4",href:"/examples/default/objects/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A user")))}f.isMDXComponent=!0}}]);