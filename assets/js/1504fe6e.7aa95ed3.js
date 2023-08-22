"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9608],{4137:(e,t,l)=>{l.d(t,{Zo:()=>d,kt:()=>m});var n=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(l),b=a,m=s["".concat(c,".").concat(b)]||s[b]||u[b]||r;return l?n.createElement(m,o(o({ref:t},d),{},{components:l})):n.createElement(m,o({ref:t},d))}));function m(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,o=new Array(r);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<r;p++)o[p]=l[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}b.displayName="MDXCreateElement"},7961:(e,t,l)=>{l.r(t),l.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>b});var n=l(7462),a=l(7294),r=l(4137);const o={id:"likeable-type",title:"LikeableType",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},i=void 0,c={unversionedId:"enums/likeable-type",id:"enums/likeable-type",title:"LikeableType",description:"Types that can be liked",source:"@site/examples/default/enums/likeable-type.mdx",sourceDirName:"enums",slug:"/enums/likeable-type",permalink:"/examples/default/enums/likeable-type",draft:!1,tags:[],version:"current",frontMatter:{id:"likeable-type",title:"LikeableType",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},p={},d=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),b=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>LikeableType.<b>THREAD</b></code>",id:"code-style-fontweight-normal-likeabletypebthreadbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>LikeableType.<b>THREAD_COMMENT</b></code>",id:"code-style-fontweight-normal-likeabletypebthread_commentbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>LikeableType.<b>ACTIVITY</b></code>",id:"code-style-fontweight-normal-likeabletypebactivitybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>LikeableType.<b>ACTIVITY_REPLY</b></code>",id:"code-style-fontweight-normal-likeabletypebactivity_replybcode",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:l,children:o,startOpen:i=!1}=e;const[c,p]=(0,a.useState)(i);return(0,r.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},c?t:l),c&&o)},y={Bullet:d,SpecifiedBy:s,Badge:u,toc:b,Details:m};function k(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},y,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Types that can be liked"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum LikeableType {\n  THREAD\n  THREAD_COMMENT\n  ACTIVITY\n  ACTIVITY_REPLY\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-likeabletypebthreadbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"LikeableType.",(0,r.kt)("b",null,"THREAD")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-likeabletypebthread_commentbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"LikeableType.",(0,r.kt)("b",null,"THREAD_COMMENT")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-likeabletypebactivitybcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"LikeableType.",(0,r.kt)("b",null,"ACTIVITY")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-likeabletypebactivity_replybcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"LikeableType.",(0,r.kt)("b",null,"ACTIVITY_REPLY")))),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/examples/default/queries/like"},(0,r.kt)("inlineCode",{parentName:"a"},"Like"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/examples/default/mutations/toggle-like"},(0,r.kt)("inlineCode",{parentName:"a"},"ToggleLike"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/examples/default/mutations/toggle-like-v2"},(0,r.kt)("inlineCode",{parentName:"a"},"ToggleLikeV2"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);