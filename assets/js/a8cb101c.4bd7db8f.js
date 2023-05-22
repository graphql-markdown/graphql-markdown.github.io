"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[734],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=i(r),m=n,y=u["".concat(c,".").concat(m)]||u[m]||p[m]||l;return r?a.createElement(y,o(o({ref:t},d),{},{components:r})):a.createElement(y,o({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var i=2;i<l;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6219:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>y,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var a=r(7462),n=r(7294),l=r(3905);const o={id:"user",title:"User",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},s=void 0,c={unversionedId:"queries/user",id:"queries/user",title:"User",description:"User query",source:"@site/examples/default/queries/user.mdx",sourceDirName:"queries",slug:"/queries/user",permalink:"/examples/default/queries/user",draft:!1,tags:[],version:"current",frontMatter:{id:"user",title:"User",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},i={},d=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>id</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>isModerator</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbismoderatorbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>search</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbsearchbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>sort</b></code><Bullet /><code>[UserSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-userbsortbcodeusersort--",level:4},{value:"Type",id:"type",level:3},{value:'<code>User</code> <Badge class="secondary" text="object"/>',id:"user-",level:4}],y=e=>{let{dataOpen:t,dataClose:r,children:o,startOpen:s=!1}=e;const[c,i]=(0,n.useState)(s);return(0,l.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},c?t:r),c&&o)},f={Bullet:d,SpecifiedBy:u,Badge:p,toc:m,Details:y};function k(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"User query"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"User(\n  id: Int\n  name: String\n  isModerator: Boolean\n  search: String\n  sort: [UserSort]\n): User\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userbidbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,l.kt)("b",null,"id"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by the user id")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userbnamebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,l.kt)("b",null,"name"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by the name of the user")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userbismoderatorbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,l.kt)("b",null,"isModerator"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter to moderators only if true")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userbsearchbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,l.kt)("b",null,"search"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by search query")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userbsortbcodeusersort--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,l.kt)("b",null,"sort"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/enums/user-sort"},(0,l.kt)("inlineCode",{parentName:"a"},"[UserSort]"))," ",(0,l.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The order the results will be returned in")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"user-"},(0,l.kt)("a",{parentName:"h4",href:"/examples/default/objects/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A user")))}k.isMDXComponent=!0}}]);