"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[4521],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=l.createContext({}),c=function(e){var t=l.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return l.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},g=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,m=p["".concat(d,".").concat(g)]||p[g]||u[g]||o;return n?l.createElement(m,r(r({ref:t},s),{},{components:n})):l.createElement(m,r({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=g;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:a,r[1]=i;for(var c=2;c<o;c++)r[c]=n[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5092:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>r,metadata:()=>d,toc:()=>g});var l=n(7462),a=n(7294),o=n(4137);const r={id:"toggle-like-v2",title:"ToggleLikeV2",hide_table_of_contents:!1},i=void 0,d={unversionedId:"mutations/toggle-like-v2",id:"mutations/toggle-like-v2",title:"ToggleLikeV2",description:"Add or remove a like from a likeable type.",source:"@site/examples/default/mutations/toggle-like-v2.mdx",sourceDirName:"mutations",slug:"/mutations/toggle-like-v2",permalink:"/examples/default/mutations/toggle-like-v2",draft:!1,tags:[],version:"current",frontMatter:{id:"toggle-like-v2",title:"ToggleLikeV2",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ToggleFollow",permalink:"/examples/default/mutations/toggle-follow"},next:{title:"ToggleLike",permalink:"/examples/default/mutations/toggle-like"}},c={},s=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),g=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ToggleLikeV2.<b>id</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-togglelikev2bidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ToggleLikeV2.<b>type</b></code><Bullet /><code>LikeableType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-togglelikev2btypebcodelikeabletype-",level:4},{value:"Type",id:"type",level:3},{value:'<code>LikeableUnion</code> <Badge class="badge badge--secondary" text="union"/>',id:"likeableunion-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:i=!1}=e;const[d,c]=(0,a.useState)(i);return(0,o.kt)("details",(0,l.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},d?t:n),d&&r)},k={Bullet:s,SpecifiedBy:p,Badge:u,toc:g,Details:m};function b(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,l.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Add or remove a like from a likeable type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"ToggleLikeV2(\n  id: Int\n  type: LikeableType\n): LikeableUnion\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-togglelikev2bidbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ToggleLikeV2.",(0,o.kt)("b",null,"id"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The id of the likeable type")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-togglelikev2btypebcodelikeabletype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ToggleLikeV2.",(0,o.kt)("b",null,"type"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/enums/likeable-type"},(0,o.kt)("inlineCode",{parentName:"a"},"LikeableType"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The type of model to be un/liked")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"likeableunion-"},(0,o.kt)("a",{parentName:"h4",href:"/examples/default/unions/likeable-union"},(0,o.kt)("inlineCode",{parentName:"a"},"LikeableUnion"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Likeable union type")))}b.isMDXComponent=!0}}]);