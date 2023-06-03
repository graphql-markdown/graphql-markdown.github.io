"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3825],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,b=m["".concat(l,".").concat(d)]||m[d]||p[d]||s;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[m]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5336:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>m,assets:()=>u,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),o=n(7294),s=n(3905);const i={id:"submission-sort",title:"SubmissionSort",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},a=void 0,l={unversionedId:"enums/submission-sort",id:"enums/submission-sort",title:"SubmissionSort",description:"Submission sort enums",source:"@site/examples/default/enums/submission-sort.mdx",sourceDirName:"enums",slug:"/enums/submission-sort",permalink:"/examples/default/enums/submission-sort",draft:!1,tags:[],version:"current",frontMatter:{id:"submission-sort",title:"SubmissionSort",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},u={},c=()=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,s.kt)(o.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{className:e.class},e.text)),d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>SubmissionSort.<b>ID</b></code>",id:"code-style-fontweight-normal-submissionsortbidbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SubmissionSort.<b>ID_DESC</b></code>",id:"code-style-fontweight-normal-submissionsortbid_descbcode",level:4}],b=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:a=!1}=e;const[l,u]=(0,o.useState)(a);return(0,s.kt)("details",(0,r.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&i)},f={Bullet:c,SpecifiedBy:m,Badge:p,toc:d,Details:b};function y(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Submission sort enums"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SubmissionSort {\n  ID\n  ID_DESC\n}\n")),(0,s.kt)("h3",{id:"values"},"Values"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-submissionsortbidbcode"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"SubmissionSort.",(0,s.kt)("b",null,"ID")))),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-submissionsortbid_descbcode"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"SubmissionSort.",(0,s.kt)("b",null,"ID_DESC")))),(0,s.kt)("blockquote",null))}y.isMDXComponent=!0}}]);