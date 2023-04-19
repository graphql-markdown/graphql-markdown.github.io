"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[4260],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),y=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=y(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=y(n),d=i,u=p["".concat(c,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(u,o(o({ref:t},s),{},{components:n})):a.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var y=2;y<r;y++)o[y]=n[y];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},137:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>s,Details:()=>u,SpecifiedBy:()=>p,assets:()=>y,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(7462),i=n(7294),r=n(3905);const o={id:"activity-type",title:"ActivityType",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},l=void 0,c={unversionedId:"enums/activity-type",id:"enums/activity-type",title:"ActivityType",description:"Activity type enum.",source:"@site/examples/schema/enums/activity-type.mdx",sourceDirName:"enums",slug:"/enums/activity-type",permalink:"/schema/enums/activity-type",draft:!1,tags:[],version:"current",frontMatter:{id:"activity-type",title:"ActivityType",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},y={},s=()=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(i.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>ActivityType.<b>TEXT</b></code>",id:"code-style-fontweight-normal-activitytypebtextbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ActivityType.<b>ANIME_LIST</b></code>",id:"code-style-fontweight-normal-activitytypebanime_listbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ActivityType.<b>MANGA_LIST</b></code>",id:"code-style-fontweight-normal-activitytypebmanga_listbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ActivityType.<b>MESSAGE</b></code>",id:"code-style-fontweight-normal-activitytypebmessagebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ActivityType.<b>MEDIA_LIST</b></code>",id:"code-style-fontweight-normal-activitytypebmedia_listbcode",level:4},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:l=!1}=e;const[c,y]=(0,i.useState)(l);return(0,r.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),y((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&o)},b={Bullet:s,SpecifiedBy:p,Badge:m,toc:d,Details:u};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Activity type enum."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ActivityType {\n  TEXT\n  ANIME_LIST\n  MANGA_LIST\n  MESSAGE\n  MEDIA_LIST\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-activitytypebtextbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ActivityType.",(0,r.kt)("b",null,"TEXT")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A text activity")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-activitytypebanime_listbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ActivityType.",(0,r.kt)("b",null,"ANIME_LIST")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A anime list update activity")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-activitytypebmanga_listbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ActivityType.",(0,r.kt)("b",null,"MANGA_LIST")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A manga list update activity")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-activitytypebmessagebcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ActivityType.",(0,r.kt)("b",null,"MESSAGE")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A text message activity sent to another user")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-activitytypebmedia_listbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ActivityType.",(0,r.kt)("b",null,"MEDIA_LIST")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Anime & Manga list update, only used in query arguments")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/schema/queries/activity"},(0,r.kt)("inlineCode",{parentName:"a"},"Activity"))," ",(0,r.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/list-activity"},(0,r.kt)("inlineCode",{parentName:"a"},"ListActivity"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/message-activity"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageActivity"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/text-activity"},(0,r.kt)("inlineCode",{parentName:"a"},"TextActivity"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);