"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9608],{4137:(e,t,l)=>{l.d(t,{Zo:()=>d,kt:()=>b});var a=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(l),u=n,b=s["".concat(c,".").concat(u)]||s[u]||m[u]||r;return l?a.createElement(b,o(o({ref:t},d),{},{components:l})):a.createElement(b,o({ref:t},d))}));function b(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,o=new Array(r);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<r;p++)o[p]=l[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,l)}u.displayName="MDXCreateElement"},7961:(e,t,l)=>{l.r(t),l.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=l(7462),n=l(7294),r=l(4137);const o={id:"likeable-type",title:"LikeableType",hide_table_of_contents:!1},i=void 0,c={unversionedId:"enums/likeable-type",id:"enums/likeable-type",title:"LikeableType",description:"Types that can be liked",source:"@site/examples/default/enums/likeable-type.mdx",sourceDirName:"enums",slug:"/enums/likeable-type",permalink:"/examples/default/enums/likeable-type",draft:!1,tags:[],version:"current",frontMatter:{id:"likeable-type",title:"LikeableType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ExternalLinkType",permalink:"/examples/default/enums/external-link-type"},next:{title:"MediaFormat",permalink:"/examples/default/enums/media-format"}},p={},d=()=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,r.kt)(n.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>LikeableType.<b>THREAD</b></code>",id:"code-style-fontweight-normal-likeabletypebthreadbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>LikeableType.<b>THREAD_COMMENT</b></code>",id:"code-style-fontweight-normal-likeabletypebthread_commentbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>LikeableType.<b>ACTIVITY</b></code>",id:"code-style-fontweight-normal-likeabletypebactivitybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>LikeableType.<b>ACTIVITY_REPLY</b></code>",id:"code-style-fontweight-normal-likeabletypebactivity_replybcode",level:4},{value:"Member Of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:l,children:o,startOpen:i=!1}=e;const[c,p]=(0,n.useState)(i);return(0,r.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},c?t:l),c&&o)},k={Bullet:d,SpecifiedBy:s,Badge:m,toc:u,Details:b};function y(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"googlebot",content:"noindex"}),(0,r.kt)("meta",{charset:"utf-8"})),(0,r.kt)("p",null,"Types that can be liked"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum LikeableType {\n  THREAD\n  THREAD_COMMENT\n  ACTIVITY\n  ACTIVITY_REPLY\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-likeabletypebthreadbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"LikeableType.",(0,r.kt)("b",null,"THREAD")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-likeabletypebthread_commentbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"LikeableType.",(0,r.kt)("b",null,"THREAD_COMMENT")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-likeabletypebactivitybcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"LikeableType.",(0,r.kt)("b",null,"ACTIVITY")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-likeabletypebactivity_replybcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"LikeableType.",(0,r.kt)("b",null,"ACTIVITY_REPLY")))),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member Of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/examples/default/queries/like"},(0,r.kt)("inlineCode",{parentName:"a"},"Like"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/examples/default/mutations/toggle-like"},(0,r.kt)("inlineCode",{parentName:"a"},"ToggleLike"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/examples/default/mutations/toggle-like-v2"},(0,r.kt)("inlineCode",{parentName:"a"},"ToggleLikeV2"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);