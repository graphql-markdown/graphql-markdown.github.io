"use strict";(self.webpackChunkgraphql_markdown_website=self.webpackChunkgraphql_markdown_website||[]).push([[1119],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,y=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2750:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=n(7294),i=n(3905);const a={id:"revision-history-action",title:"RevisionHistoryAction",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,s={unversionedId:"enums/revision-history-action",id:"enums/revision-history-action",title:"RevisionHistoryAction",description:"Revision history actions",source:"@site/examples/schema/enums/revision-history-action.mdx",sourceDirName:"enums",slug:"/enums/revision-history-action",permalink:"/schema/enums/revision-history-action",draft:!1,tags:[],version:"current",frontMatter:{id:"revision-history-action",title:"RevisionHistoryAction",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>RevisionHistoryAction.<b>CREATE</b></code>",id:"code-style-fontweight-normal-revisionhistoryactionbcreatebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>RevisionHistoryAction.<b>EDIT</b></code>",id:"code-style-fontweight-normal-revisionhistoryactionbeditbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:u,Bullet:p,SpecifiedBy:m,Badge:d};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Revision history actions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum RevisionHistoryAction {\n  CREATE\n  EDIT\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-revisionhistoryactionbcreatebcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RevisionHistoryAction.",(0,i.kt)("b",null,"CREATE")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-revisionhistoryactionbeditbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RevisionHistoryAction.",(0,i.kt)("b",null,"EDIT")))),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/schema/objects/revision-history"},(0,i.kt)("inlineCode",{parentName:"a"},"RevisionHistory"))," ",(0,i.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);