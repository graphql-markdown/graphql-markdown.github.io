"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[4638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},b=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),b=a,p=m["".concat(l,".").concat(b)]||m[b]||d[b]||o;return n?s.createElement(p,r(r({ref:t},c),{},{components:n})):s.createElement(p,r({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}b.displayName="MDXCreateElement"},748:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>c,Details:()=>p,SpecifiedBy:()=>m,assets:()=>u,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>l,toc:()=>b});var s=n(7462),a=n(7294),o=n(3905);const r={id:"submission-status",title:"SubmissionStatus",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},i=void 0,l={unversionedId:"enums/submission-status",id:"enums/submission-status",title:"SubmissionStatus",description:"Submission status",source:"@site/examples/schema/enums/submission-status.mdx",sourceDirName:"enums",slug:"/enums/submission-status",permalink:"/schema/enums/submission-status",draft:!1,tags:[],version:"current",frontMatter:{id:"submission-status",title:"SubmissionStatus",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},u={},c=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),b=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>SubmissionStatus.<b>PENDING</b></code>",id:"code-style-fontweight-normal-submissionstatusbpendingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SubmissionStatus.<b>REJECTED</b></code>",id:"code-style-fontweight-normal-submissionstatusbrejectedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SubmissionStatus.<b>PARTIALLY_ACCEPTED</b></code>",id:"code-style-fontweight-normal-submissionstatusbpartially_acceptedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SubmissionStatus.<b>ACCEPTED</b></code>",id:"code-style-fontweight-normal-submissionstatusbacceptedbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:i=!1}=e;const[l,u]=(0,a.useState)(i);return(0,o.kt)("details",(0,s.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&r)},f={Bullet:c,SpecifiedBy:m,Badge:d,toc:b,Details:p};function y(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Submission status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SubmissionStatus {\n  PENDING\n  REJECTED\n  PARTIALLY_ACCEPTED\n  ACCEPTED\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-submissionstatusbpendingbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SubmissionStatus.",(0,o.kt)("b",null,"PENDING")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-submissionstatusbrejectedbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SubmissionStatus.",(0,o.kt)("b",null,"REJECTED")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-submissionstatusbpartially_acceptedbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SubmissionStatus.",(0,o.kt)("b",null,"PARTIALLY_ACCEPTED")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-submissionstatusbacceptedbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SubmissionStatus.",(0,o.kt)("b",null,"ACCEPTED")))),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/schema/objects/character-submission"},(0,o.kt)("inlineCode",{parentName:"a"},"CharacterSubmission"))," ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/objects/media-submission"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaSubmission"))," ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/objects/staff-submission"},(0,o.kt)("inlineCode",{parentName:"a"},"StaffSubmission"))," ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);