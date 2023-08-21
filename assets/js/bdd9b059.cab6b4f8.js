"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[5127],{4137:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>b});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(o),f=n,b=c["".concat(s,".").concat(f)]||c[f]||m[f]||l;return o?r.createElement(b,a(a({ref:t},u),{},{components:o})):r.createElement(b,a({ref:t},u))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,a=new Array(l);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,a[1]=i;for(var d=2;d<l;d++)a[d]=o[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},6796:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>m,Bullet:()=>u,Details:()=>b,SpecifiedBy:()=>c,assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>f});var r=o(7462),n=o(7294),l=o(4137);const a={id:"studio-sort",title:"StudioSort",hide_table_of_contents:!1},i=void 0,s={unversionedId:"enums/studio-sort",id:"enums/studio-sort",title:"StudioSort",description:"Studio sort enums",source:"@site/examples/default/enums/studio-sort.mdx",sourceDirName:"enums",slug:"/enums/studio-sort",permalink:"/examples/default/enums/studio-sort",draft:!1,tags:[],version:"current",frontMatter:{id:"studio-sort",title:"StudioSort",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"StaffSort",permalink:"/examples/default/enums/staff-sort"},next:{title:"SubmissionSort",permalink:"/examples/default/enums/submission-sort"}},d={},u=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),f=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>StudioSort.<b>ID</b></code>",id:"code-style-fontweight-normal-studiosortbidbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>StudioSort.<b>ID_DESC</b></code>",id:"code-style-fontweight-normal-studiosortbid_descbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>StudioSort.<b>NAME</b></code>",id:"code-style-fontweight-normal-studiosortbnamebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>StudioSort.<b>NAME_DESC</b></code>",id:"code-style-fontweight-normal-studiosortbname_descbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>StudioSort.<b>SEARCH_MATCH</b></code>",id:"code-style-fontweight-normal-studiosortbsearch_matchbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>StudioSort.<b>FAVOURITES</b></code>",id:"code-style-fontweight-normal-studiosortbfavouritesbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>StudioSort.<b>FAVOURITES_DESC</b></code>",id:"code-style-fontweight-normal-studiosortbfavourites_descbcode",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:o,children:a,startOpen:i=!1}=e;const[s,d]=(0,n.useState)(i);return(0,l.kt)("details",(0,r.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},s?t:o),s&&a)},p={Bullet:u,SpecifiedBy:c,Badge:m,toc:f,Details:b};function h(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Studio sort enums"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum StudioSort {\n  ID\n  ID_DESC\n  NAME\n  NAME_DESC\n  SEARCH_MATCH\n  FAVOURITES\n  FAVOURITES_DESC\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-studiosortbidbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"StudioSort.",(0,l.kt)("b",null,"ID")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-studiosortbid_descbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"StudioSort.",(0,l.kt)("b",null,"ID_DESC")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-studiosortbnamebcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"StudioSort.",(0,l.kt)("b",null,"NAME")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-studiosortbname_descbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"StudioSort.",(0,l.kt)("b",null,"NAME_DESC")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-studiosortbsearch_matchbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"StudioSort.",(0,l.kt)("b",null,"SEARCH_MATCH")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-studiosortbfavouritesbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"StudioSort.",(0,l.kt)("b",null,"FAVOURITES")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-studiosortbfavourites_descbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"StudioSort.",(0,l.kt)("b",null,"FAVOURITES_DESC")))),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/examples/default/queries/studio"},(0,l.kt)("inlineCode",{parentName:"a"},"Studio"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"query",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);