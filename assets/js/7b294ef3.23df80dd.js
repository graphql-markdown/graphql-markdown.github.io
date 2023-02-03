"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[5937],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),p=n,f=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2010:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>m,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(7462),n=r(7294),o=r(3905);const l={id:"user-previous-name",title:"UserPreviousName",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,i={unversionedId:"objects/user-previous-name",id:"objects/user-previous-name",title:"UserPreviousName",description:"A user's previous name",source:"@site/examples/schema/objects/user-previous-name.mdx",sourceDirName:"objects",slug:"/objects/user-previous-name",permalink:"/schema/objects/user-previous-name",draft:!1,tags:[],version:"current",frontMatter:{id:"user-previous-name",title:"UserPreviousName",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UserPreviousName.<b>name</b></code><Bullet /><code>String</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userpreviousnamebnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserPreviousName.<b>createdAt</b></code><Bullet /><code>Int</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userpreviousnamebcreatedatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserPreviousName.<b>updatedAt</b></code><Bullet /><code>Int</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userpreviousnamebupdatedatbcodeint-",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.className},e.text)),f={toc:u,Bullet:m,SpecifiedBy:d,Badge:p};function b(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A user's previous name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserPreviousName {\n  name: String\n  createdAt: Int\n  updatedAt: Int\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userpreviousnamebnamebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserPreviousName.",(0,o.kt)("b",null,"name"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A previous name of the user.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userpreviousnamebcreatedatbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserPreviousName.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(p,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the user first changed from this name.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userpreviousnamebupdatedatbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserPreviousName.",(0,o.kt)("b",null,"updatedAt"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(p,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the user most recently changed from this name.")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/schema/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,o.kt)(p,{className:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);