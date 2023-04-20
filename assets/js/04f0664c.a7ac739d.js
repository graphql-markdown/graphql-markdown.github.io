"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6717],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3275:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>u,Details:()=>f,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=r(7462),n=r(7294),l=r(3905);const o={id:"user-avatar",title:"UserAvatar",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},s=void 0,i={unversionedId:"objects/user-avatar",id:"objects/user-avatar",title:"UserAvatar",description:"A user's avatars",source:"@site/examples/default/objects/user-avatar.mdx",sourceDirName:"objects",slug:"/objects/user-avatar",permalink:"/examples/default/objects/user-avatar",draft:!1,tags:[],version:"current",frontMatter:{id:"user-avatar",title:"UserAvatar",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},u=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UserAvatar.<b>large</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-useravatarblargebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserAvatar.<b>medium</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-useravatarbmediumbcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:r,children:o,startOpen:s=!1}=e;const[i,c]=(0,n.useState)(s);return(0,l.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:r),i&&o)},g={Bullet:u,SpecifiedBy:d,Badge:p,toc:m,Details:f};function b(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A user's avatars"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserAvatar {\n  large: String\n  medium: String\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-useravatarblargebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserAvatar.",(0,l.kt)("b",null,"large"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The avatar of user at its largest size")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-useravatarbmediumbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserAvatar.",(0,l.kt)("b",null,"medium"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The avatar of user at medium size")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);