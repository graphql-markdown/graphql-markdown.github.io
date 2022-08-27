"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[509],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=i(r),p=a,y=m["".concat(c,".").concat(p)]||m[p]||u[p]||o;return r?n.createElement(y,l(l({ref:t},d),{},{components:r})):n.createElement(y,l({ref:t},d))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6914:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>u,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=r(7462),a=r(7294),o=r(3905);const l={id:"user",title:"User",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,c={unversionedId:"schema/queries/user",id:"schema/queries/user",title:"User",description:"User query",source:"@site/docs/schema/queries/user.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/user",permalink:"/schema/queries/user",draft:!1,tags:[],version:"current",frontMatter:{id:"user",title:"User",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},i={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>id</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>isModerator</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbismoderatorbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>search</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbsearchbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>sort</b></code><Bullet /><code>[UserSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-userbsortbcodeusersort--",level:4},{value:"Type",id:"type",level:3},{value:'<code>User</code> <Badge class="secondary" text="object"/>',id:"user-",level:4}],u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:u,SpecifiedBy:m,Badge:p};function b(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"User query"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"User(\n  id: Int\n  name: String\n  isModerator: Boolean\n  search: String\n  sort: [UserSort]\n): User\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbidbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"id"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Filter by the user id")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbnamebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"name"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Filter by the name of the user")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbismoderatorbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"isModerator"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Filter to moderators only if true")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbsearchbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"search"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Filter by search query")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbsortbcodeusersort--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"sort"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/user-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserSort]"))," ",(0,o.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The order the results will be returned in")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"user-"},(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A user")))}b.isMDXComponent=!0}}]);