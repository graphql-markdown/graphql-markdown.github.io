"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9433],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),i=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=i(r),b=n,f=u["".concat(c,".").concat(b)]||u[b]||m[b]||l;return r?o.createElement(f,a(a({ref:t},d),{},{components:r})):o.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var i=2;i<l;i++)a[i]=r[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},2514:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>b,Bullet:()=>u,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=r(7462),n=r(7294),l=r(3905);const a={id:"user-sort",title:"UserSort",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,c={unversionedId:"enums/user-sort",id:"enums/user-sort",title:"UserSort",description:"User sort enums",source:"@site/examples/schema/enums/user-sort.mdx",sourceDirName:"enums",slug:"/enums/user-sort",permalink:"/schema/enums/user-sort",draft:!1,tags:[],version:"current",frontMatter:{id:"user-sort",title:"UserSort",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},i={},d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>UserSort.<b>ID</b></code>",id:"code-style-fontweight-normal-usersortbidbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>UserSort.<b>ID_DESC</b></code>",id:"code-style-fontweight-normal-usersortbid_descbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>UserSort.<b>USERNAME</b></code>",id:"code-style-fontweight-normal-usersortbusernamebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>UserSort.<b>USERNAME_DESC</b></code>",id:"code-style-fontweight-normal-usersortbusername_descbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>UserSort.<b>WATCHED_TIME</b></code>",id:"code-style-fontweight-normal-usersortbwatched_timebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>UserSort.<b>WATCHED_TIME_DESC</b></code>",id:"code-style-fontweight-normal-usersortbwatched_time_descbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>UserSort.<b>CHAPTERS_READ</b></code>",id:"code-style-fontweight-normal-usersortbchapters_readbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>UserSort.<b>CHAPTERS_READ_DESC</b></code>",id:"code-style-fontweight-normal-usersortbchapters_read_descbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>UserSort.<b>SEARCH_MATCH</b></code>",id:"code-style-fontweight-normal-usersortbsearch_matchbcode",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:u,SpecifiedBy:m,Badge:b};function p(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"User sort enums"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum UserSort {\n  ID\n  ID_DESC\n  USERNAME\n  USERNAME_DESC\n  WATCHED_TIME\n  WATCHED_TIME_DESC\n  CHAPTERS_READ\n  CHAPTERS_READ_DESC\n  SEARCH_MATCH\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-usersortbidbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserSort.",(0,l.kt)("b",null,"ID")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-usersortbid_descbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserSort.",(0,l.kt)("b",null,"ID_DESC")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-usersortbusernamebcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserSort.",(0,l.kt)("b",null,"USERNAME")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-usersortbusername_descbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserSort.",(0,l.kt)("b",null,"USERNAME_DESC")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-usersortbwatched_timebcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserSort.",(0,l.kt)("b",null,"WATCHED_TIME")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-usersortbwatched_time_descbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserSort.",(0,l.kt)("b",null,"WATCHED_TIME_DESC")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-usersortbchapters_readbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserSort.",(0,l.kt)("b",null,"CHAPTERS_READ")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-usersortbchapters_read_descbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserSort.",(0,l.kt)("b",null,"CHAPTERS_READ_DESC")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-usersortbsearch_matchbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserSort.",(0,l.kt)("b",null,"SEARCH_MATCH")))),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/schema/queries/follower"},(0,l.kt)("inlineCode",{parentName:"a"},"Follower"))," ",(0,l.kt)(b,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/queries/following"},(0,l.kt)("inlineCode",{parentName:"a"},"Following"))," ",(0,l.kt)(b,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/queries/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,l.kt)(b,{class:"secondary",text:"query",mdxType:"Badge"})))}p.isMDXComponent=!0}}]);