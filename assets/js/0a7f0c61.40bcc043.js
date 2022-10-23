"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||l;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8954:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>d,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=n(7294),l=n(3905);const a={id:"following",title:"Following",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,s={unversionedId:"queries/following",id:"queries/following",title:"Following",description:"Follow query",source:"@site/examples/schema/queries/following.mdx",sourceDirName:"queries",slug:"/queries/following",permalink:"/schema/queries/following",draft:!1,tags:[],version:"current",frontMatter:{id:"following",title:"Following",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Following.<b>userId</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-followingbuseridbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Following.<b>sort</b></code><Bullet /><code>[UserSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-followingbsortbcodeusersort--",level:4},{value:"Type",id:"type",level:3},{value:'<code>User</code> <Badge class="secondary" text="object"/>',id:"user-",level:4}],d=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:u,Bullet:d,SpecifiedBy:p,Badge:f};function g(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Follow query"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"Following(\n  userId: Int!\n  sort: [UserSort]\n): User\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-followingbuseridbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Following.",(0,l.kt)("b",null,"userId"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"User id of the follower/followed")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-followingbsortbcodeusersort--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Following.",(0,l.kt)("b",null,"sort"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/enums/user-sort"},(0,l.kt)("inlineCode",{parentName:"a"},"[UserSort]"))," ",(0,l.kt)(f,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The order the results will be returned in")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"user-"},(0,l.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,l.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A user")))}g.isMDXComponent=!0}}]);