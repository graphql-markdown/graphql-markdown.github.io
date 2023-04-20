"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>y,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},y=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),s=p(n),u=i,m=s["".concat(c,".").concat(u)]||s[u]||d[u]||l;return n?a.createElement(m,r(r({ref:t},y),{},{components:n})):a.createElement(m,r({ref:t},y))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8841:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>y,Details:()=>m,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>o,default:()=>b,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var a=n(7462),i=n(7294),l=n(3905);const r={id:"activity-type",title:"ActivityType",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},o=void 0,c={unversionedId:"enums/activity-type",id:"enums/activity-type",title:"ActivityType",description:"Activity type enum.",source:"@site/examples/default/enums/activity-type.mdx",sourceDirName:"enums",slug:"/enums/activity-type",permalink:"/examples/default/enums/activity-type",draft:!1,tags:[],version:"current",frontMatter:{id:"activity-type",title:"ActivityType",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},p={},y=()=>(0,l.kt)(i.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,l.kt)(i.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,l.kt)(i.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>ActivityType.<b>TEXT</b></code>",id:"code-style-fontweight-normal-activitytypebtextbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ActivityType.<b>ANIME_LIST</b></code>",id:"code-style-fontweight-normal-activitytypebanime_listbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ActivityType.<b>MANGA_LIST</b></code>",id:"code-style-fontweight-normal-activitytypebmanga_listbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ActivityType.<b>MESSAGE</b></code>",id:"code-style-fontweight-normal-activitytypebmessagebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ActivityType.<b>MEDIA_LIST</b></code>",id:"code-style-fontweight-normal-activitytypebmedia_listbcode",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:o=!1}=e;const[c,p]=(0,i.useState)(o);return(0,l.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&r)},f={Bullet:y,SpecifiedBy:s,Badge:d,toc:u,Details:m};function b(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Activity type enum."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ActivityType {\n  TEXT\n  ANIME_LIST\n  MANGA_LIST\n  MESSAGE\n  MEDIA_LIST\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitytypebtextbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ActivityType.",(0,l.kt)("b",null,"TEXT")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A text activity")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitytypebanime_listbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ActivityType.",(0,l.kt)("b",null,"ANIME_LIST")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A anime list update activity")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitytypebmanga_listbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ActivityType.",(0,l.kt)("b",null,"MANGA_LIST")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A manga list update activity")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitytypebmessagebcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ActivityType.",(0,l.kt)("b",null,"MESSAGE")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A text message activity sent to another user")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitytypebmedia_listbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ActivityType.",(0,l.kt)("b",null,"MEDIA_LIST")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Anime & Manga list update, only used in query arguments")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/examples/default/queries/activity"},(0,l.kt)("inlineCode",{parentName:"a"},"Activity"))," ",(0,l.kt)(d,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/list-activity"},(0,l.kt)("inlineCode",{parentName:"a"},"ListActivity"))," ",(0,l.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/message-activity"},(0,l.kt)("inlineCode",{parentName:"a"},"MessageActivity"))," ",(0,l.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/text-activity"},(0,l.kt)("inlineCode",{parentName:"a"},"TextActivity"))," ",(0,l.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);