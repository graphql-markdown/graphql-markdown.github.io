"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3648],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1258:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>u,Details:()=>y,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>l,default:()=>v,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=r(7462),o=r(7294),a=r(4137);const i={id:"activity-sort",title:"ActivitySort",hide_table_of_contents:!1},l=void 0,c={unversionedId:"enums/activity-sort",id:"enums/activity-sort",title:"ActivitySort",description:"Activity sort enums",source:"@site/examples/default/enums/activity-sort.mdx",sourceDirName:"enums",slug:"/enums/activity-sort",permalink:"/examples/default/enums/activity-sort",draft:!1,tags:[],version:"current",frontMatter:{id:"activity-sort",title:"ActivitySort",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"skip",permalink:"/examples/default/directives/skip"},next:{title:"ActivityType",permalink:"/examples/default/enums/activity-type"}},s={},u=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>ActivitySort.<b>ID</b></code>",id:"code-style-fontweight-normal-activitysortbidbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ActivitySort.<b>ID_DESC</b></code>",id:"code-style-fontweight-normal-activitysortbid_descbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ActivitySort.<b>PINNED</b></code>",id:"code-style-fontweight-normal-activitysortbpinnedbcode",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:r,children:i,startOpen:l=!1}=e;const[c,s]=(0,o.useState)(l);return(0,a.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:r),c&&i)},f={Bullet:u,SpecifiedBy:d,Badge:p,toc:m,Details:y};function v(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Activity sort enums"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ActivitySort {\n  ID\n  ID_DESC\n  PINNED\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-activitysortbidbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ActivitySort.",(0,a.kt)("b",null,"ID")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-activitysortbid_descbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ActivitySort.",(0,a.kt)("b",null,"ID_DESC")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-activitysortbpinnedbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ActivitySort.",(0,a.kt)("b",null,"PINNED")))),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/examples/default/queries/activity"},(0,a.kt)("inlineCode",{parentName:"a"},"Activity"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"query",mdxType:"Badge"})))}v.isMDXComponent=!0}}]);