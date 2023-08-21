"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[4414],{4137:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),d=c(r),p=o,f=d["".concat(s,".").concat(p)]||d[p]||u[p]||a;return r?n.createElement(f,l(l({ref:t},i),{},{components:r})):n.createElement(f,l({ref:t},i))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m[d]="string"==typeof e?e:o,l[1]=m;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8182:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>f,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>m,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(7462),o=r(7294),a=r(4137);const l={id:"thread-comment-sort",title:"ThreadCommentSort",hide_table_of_contents:!1},m=void 0,s={unversionedId:"enums/thread-comment-sort",id:"enums/thread-comment-sort",title:"ThreadCommentSort",description:"Thread comments sort enums",source:"@site/examples/default/enums/thread-comment-sort.mdx",sourceDirName:"enums",slug:"/enums/thread-comment-sort",permalink:"/examples/default/enums/thread-comment-sort",draft:!1,tags:[],version:"current",frontMatter:{id:"thread-comment-sort",title:"ThreadCommentSort",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SubmissionStatus",permalink:"/examples/default/enums/submission-status"},next:{title:"ThreadSort",permalink:"/examples/default/enums/thread-sort"}},c={},i=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),p=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>ThreadCommentSort.<b>ID</b></code>",id:"code-style-fontweight-normal-threadcommentsortbidbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ThreadCommentSort.<b>ID_DESC</b></code>",id:"code-style-fontweight-normal-threadcommentsortbid_descbcode",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:r,children:l,startOpen:m=!1}=e;const[s,c]=(0,o.useState)(m);return(0,a.kt)("details",(0,n.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:r),s&&l)},h={Bullet:i,SpecifiedBy:d,Badge:u,toc:p,Details:f};function b(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Thread comments sort enums"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ThreadCommentSort {\n  ID\n  ID_DESC\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-threadcommentsortbidbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentSort.",(0,a.kt)("b",null,"ID")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-threadcommentsortbid_descbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ThreadCommentSort.",(0,a.kt)("b",null,"ID_DESC")))),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/examples/default/queries/thread-comment"},(0,a.kt)("inlineCode",{parentName:"a"},"ThreadComment"))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"query",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);