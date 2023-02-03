"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3908],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=s(r),u=n,h=d["".concat(i,".").concat(u)]||d[u]||p[u]||o;return r?a.createElement(h,l(l({ref:t},m),{},{components:r})):a.createElement(h,l({ref:t},m))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:n,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7582:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>d,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=r(7462),n=r(7294),o=r(3905);const l={id:"character-role",title:"CharacterRole",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},c=void 0,i={unversionedId:"enums/character-role",id:"enums/character-role",title:"CharacterRole",description:"The role the character plays in the media",source:"@site/examples/schema/enums/character-role.mdx",sourceDirName:"enums",slug:"/enums/character-role",permalink:"/schema/enums/character-role",draft:!1,tags:[],version:"current",frontMatter:{id:"character-role",title:"CharacterRole",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},s={},m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>CharacterRole.<b>MAIN</b></code>",id:"code-style-fontweight-normal-characterrolebmainbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CharacterRole.<b>SUPPORTING</b></code>",id:"code-style-fontweight-normal-characterrolebsupportingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CharacterRole.<b>BACKGROUND</b></code>",id:"code-style-fontweight-normal-characterrolebbackgroundbcode",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),h={toc:m,Bullet:d,SpecifiedBy:p,Badge:u};function b(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The role the character plays in the media"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum CharacterRole {\n  MAIN\n  SUPPORTING\n  BACKGROUND\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-characterrolebmainbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CharacterRole.",(0,o.kt)("b",null,"MAIN")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A primary character role in the media")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-characterrolebsupportingbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CharacterRole.",(0,o.kt)("b",null,"SUPPORTING")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A supporting character role in the media")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-characterrolebbackgroundbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CharacterRole.",(0,o.kt)("b",null,"BACKGROUND")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A background character in the media")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/schema/objects/character-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"CharacterEdge"))," ",(0,o.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/objects/character-submission-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"CharacterSubmissionEdge"))," ",(0,o.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/objects/media-character"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaCharacter"))," ",(0,o.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/objects/media-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaEdge"))," ",(0,o.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/objects/media-submission-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaSubmissionEdge"))," ",(0,o.kt)(u,{className:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);