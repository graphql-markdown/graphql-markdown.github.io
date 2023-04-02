"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[14],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,b=u["".concat(c,".").concat(m)]||u[m]||g[m]||i;return n?r.createElement(b,l(l({ref:t},d),{},{components:n})):r.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7951:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var r=n(7462),o=n(7294),i=n(3905);const l={id:"airing-sort",title:"AiringSort",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},a=void 0,c={unversionedId:"enums/airing-sort",id:"enums/airing-sort",title:"AiringSort",description:"Airing schedule sort enums",source:"@site/examples/schema/enums/airing-sort.mdx",sourceDirName:"enums",slug:"/enums/airing-sort",permalink:"/schema/enums/airing-sort",draft:!1,tags:[],version:"current",frontMatter:{id:"airing-sort",title:"AiringSort",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},s={},d=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>AiringSort.<b>ID</b></code>",id:"code-style-fontweight-normal-airingsortbidbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AiringSort.<b>ID_DESC</b></code>",id:"code-style-fontweight-normal-airingsortbid_descbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AiringSort.<b>MEDIA_ID</b></code>",id:"code-style-fontweight-normal-airingsortbmedia_idbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AiringSort.<b>MEDIA_ID_DESC</b></code>",id:"code-style-fontweight-normal-airingsortbmedia_id_descbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AiringSort.<b>TIME</b></code>",id:"code-style-fontweight-normal-airingsortbtimebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AiringSort.<b>TIME_DESC</b></code>",id:"code-style-fontweight-normal-airingsortbtime_descbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AiringSort.<b>EPISODE</b></code>",id:"code-style-fontweight-normal-airingsortbepisodebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AiringSort.<b>EPISODE_DESC</b></code>",id:"code-style-fontweight-normal-airingsortbepisode_descbcode",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:a=!1}=e;const[c,s]=(0,o.useState)(a);return(0,i.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&l)},f={Bullet:d,SpecifiedBy:u,Badge:g,toc:m,Details:b};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Airing schedule sort enums"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum AiringSort {\n  ID\n  ID_DESC\n  MEDIA_ID\n  MEDIA_ID_DESC\n  TIME\n  TIME_DESC\n  EPISODE\n  EPISODE_DESC\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingsortbidbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSort.",(0,i.kt)("b",null,"ID")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingsortbid_descbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSort.",(0,i.kt)("b",null,"ID_DESC")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingsortbmedia_idbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSort.",(0,i.kt)("b",null,"MEDIA_ID")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingsortbmedia_id_descbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSort.",(0,i.kt)("b",null,"MEDIA_ID_DESC")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingsortbtimebcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSort.",(0,i.kt)("b",null,"TIME")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingsortbtime_descbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSort.",(0,i.kt)("b",null,"TIME_DESC")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingsortbepisodebcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSort.",(0,i.kt)("b",null,"EPISODE")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-airingsortbepisode_descbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AiringSort.",(0,i.kt)("b",null,"EPISODE_DESC")))),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/schema/queries/airing-schedule"},(0,i.kt)("inlineCode",{parentName:"a"},"AiringSchedule"))," ",(0,i.kt)(g,{class:"secondary",text:"query",mdxType:"Badge"})))}p.isMDXComponent=!0}}]);