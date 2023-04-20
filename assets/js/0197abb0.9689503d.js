"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[5512],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=i(r),p=n,y=u["".concat(c,".").concat(p)]||u[p]||m[p]||o;return r?a.createElement(y,l(l({ref:t},d),{},{components:r})):a.createElement(y,l({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},832:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>y,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=r(7462),n=r(7294),o=r(3905);const l={id:"user",title:"User",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,c={unversionedId:"queries/user",id:"queries/user",title:"User",description:"User query",source:"@site/examples/schema/queries/user.mdx",sourceDirName:"queries",slug:"/queries/user",permalink:"/schema/queries/user",draft:!1,tags:[],version:"current",frontMatter:{id:"user",title:"User",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},i={},d=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>id</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>isModerator</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbismoderatorbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>search</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbsearchbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>sort</b></code><Bullet /><code>[UserSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-userbsortbcodeusersort--",level:4},{value:"Type",id:"type",level:3},{value:'<code>User</code> <Badge class="secondary" text="object"/>',id:"user-",level:4}],y=e=>{let{dataOpen:t,dataClose:r,children:l,startOpen:s=!1}=e;const[c,i]=(0,n.useState)(s);return(0,o.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},c?t:r),c&&l)},k={Bullet:d,SpecifiedBy:u,Badge:m,toc:p,Details:y};function b(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"User query"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"User(\n  id: Int\n  name: String\n  isModerator: Boolean\n  search: String\n  sort: [UserSort]\n): User\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbidbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"id"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Filter by the user id")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbnamebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"name"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Filter by the name of the user")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbismoderatorbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"isModerator"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Filter to moderators only if true")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbsearchbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"search"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Filter by search query")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbsortbcodeusersort--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"sort"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/user-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserSort]"))," ",(0,o.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The order the results will be returned in")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"user-"},(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A user")))}b.isMDXComponent=!0}}]);