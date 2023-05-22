"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9866],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(y,l(l({ref:t},p),{},{components:r})):n.createElement(y,l({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6941:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>d,Bullet:()=>p,Details:()=>y,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var n=r(7462),a=r(7294),o=r(3905);const l={id:"search-role",title:"searchRole",hide_table_of_contents:!1},i=void 0,c={unversionedId:"common/queries/search-role",id:"common/queries/search-role",title:"searchRole",description:"No description",source:"@site/examples/group-by/common/queries/search-role.mdx",sourceDirName:"common/queries",slug:"/common/queries/search-role",permalink:"/examples/group-by/common/queries/search-role",draft:!1,tags:[],version:"current",frontMatter:{id:"search-role",title:"searchRole",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Queries",permalink:"/examples/group-by/category/queries"},next:{title:"Scalars",permalink:"/examples/group-by/category/scalars"}},s={},p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Directives",id:"directives",level:3},{value:"<code>auth</code>",id:"auth",level:4},{value:"<code>complexity</code>",id:"complexity",level:4},{value:"Arguments",id:"arguments",level:3},{value:'<code>roles</code><Bullet /><code>[Roles!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"rolesroles--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Int</code> <Badge class="secondary" text="scalar"/>',id:"int-",level:4}],y=e=>{let{dataOpen:t,dataClose:r,children:l,startOpen:i=!1}=e;const[c,s]=(0,a.useState)(i);return(0,o.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:r),c&&l)},k={Bullet:p,SpecifiedBy:u,Badge:d,toc:m,Details:y};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"searchRole(\n  roles: [Roles!]! = ADMIN\n): Int!\n")),(0,o.kt)("h3",{id:"directives"},"Directives"),(0,o.kt)("h4",{id:"auth"},(0,o.kt)("a",{parentName:"h4",href:"/examples/group-by/common/directives/auth"},(0,o.kt)("inlineCode",{parentName:"a"},"auth"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This requires the current user to be in ",(0,o.kt)("inlineCode",{parentName:"p"},"ADMIN")," role.")),(0,o.kt)("h4",{id:"complexity"},(0,o.kt)("a",{parentName:"h4",href:"/examples/group-by/common/directives/complexity"},(0,o.kt)("inlineCode",{parentName:"a"},"complexity"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This has an additional cost of ",(0,o.kt)("inlineCode",{parentName:"p"},"2")," points per ",(0,o.kt)("inlineCode",{parentName:"p"},"roles"),".")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"rolesroles--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"roles")),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/group-by/common/enums/roles"},(0,o.kt)("inlineCode",{parentName:"a"},"[Roles!]!"))," ",(0,o.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"int-"},(0,o.kt)("a",{parentName:"h4",href:"/examples/group-by/common/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(d,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Int")," scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.")))}f.isMDXComponent=!0}}]);