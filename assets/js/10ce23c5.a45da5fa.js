"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=l.createContext({}),s=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return l.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?l.createElement(g,o(o({ref:t},p),{},{components:n})):l.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3121:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var l=n(7462),r=n(7294),a=n(3905);const o={id:"toggle-like",title:"ToggleLike",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,c={unversionedId:"mutations/toggle-like",id:"mutations/toggle-like",title:"ToggleLike",description:"Add or remove a like from a likeable type.",source:"@site/examples/schema/mutations/toggle-like.mdx",sourceDirName:"mutations",slug:"/mutations/toggle-like",permalink:"/schema/mutations/toggle-like",draft:!1,tags:[],version:"current",frontMatter:{id:"toggle-like",title:"ToggleLike",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},s={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ToggleLike.<b>id</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-togglelikebidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ToggleLike.<b>type</b></code><Bullet /><code>LikeableType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-togglelikebtypebcodelikeabletype-",level:4},{value:"Type",id:"type",level:3},{value:'<code>User</code> <Badge class="secondary" text="object"/>',id:"user-",level:4}],d=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),g={toc:p,Bullet:d,SpecifiedBy:u,Badge:m};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Add or remove a like from a likeable type.\nReturns all the users who liked the same model"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"ToggleLike(\n  id: Int\n  type: LikeableType\n): [User]\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-togglelikebidbcodeint-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ToggleLike.",(0,a.kt)("b",null,"id"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The id of the likeable type")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-togglelikebtypebcodelikeabletype-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ToggleLike.",(0,a.kt)("b",null,"type"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/enums/likeable-type"},(0,a.kt)("inlineCode",{parentName:"a"},"LikeableType"))," ",(0,a.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The type of model to be un/liked")),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"user-"},(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,a.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A user")))}k.isMDXComponent=!0}}]);