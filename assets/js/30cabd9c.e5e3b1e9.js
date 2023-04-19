"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3883],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=i(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||l;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var i=2;i<l;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6171:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>s,default:()=>b,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var n=r(7462),o=r(7294),l=r(3905);const a={id:"follower",title:"Follower",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},s=void 0,c={unversionedId:"queries/follower",id:"queries/follower",title:"Follower",description:"Follow query",source:"@site/examples/schema/queries/follower.mdx",sourceDirName:"queries",slug:"/queries/follower",permalink:"/schema/queries/follower",draft:!1,tags:[],version:"current",frontMatter:{id:"follower",title:"Follower",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},i={},d=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Follower.<b>userId</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-followerbuseridbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Follower.<b>sort</b></code><Bullet /><code>[UserSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-followerbsortbcodeusersort--",level:4},{value:"Type",id:"type",level:3},{value:'<code>User</code> <Badge class="secondary" text="object"/>',id:"user-",level:4}],f=e=>{let{dataOpen:t,dataClose:r,children:a,startOpen:s=!1}=e;const[c,i]=(0,o.useState)(s);return(0,l.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},c?t:r),c&&a)},y={Bullet:d,SpecifiedBy:u,Badge:p,toc:m,Details:f};function b(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Follow query"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"Follower(\n  userId: Int!\n  sort: [UserSort]\n): User\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-followerbuseridbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Follower.",(0,l.kt)("b",null,"userId"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"User id of the follower/followed")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-followerbsortbcodeusersort--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Follower.",(0,l.kt)("b",null,"sort"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/enums/user-sort"},(0,l.kt)("inlineCode",{parentName:"a"},"[UserSort]"))," ",(0,l.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The order the results will be returned in")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"user-"},(0,l.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A user")))}b.isMDXComponent=!0}}]);