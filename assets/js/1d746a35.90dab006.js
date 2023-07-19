"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9763],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),f=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=f(e.components);return n.createElement(c.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),i=f(a),u=r,p=i["".concat(c,".").concat(u)]||i[u]||m[u]||l;return a?n.createElement(p,o(o({ref:t},d),{},{components:a})):n.createElement(p,o({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[i]="string"==typeof e?e:r,o[1]=s;for(var f=2;f<l;f++)o[f]=a[f];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5802:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>p,SpecifiedBy:()=>i,assets:()=>f,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=a(7462),r=a(7294),l=a(4137);const o={id:"staff-stats",title:"StaffStats",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},s=void 0,c={unversionedId:"objects/staff-stats",id:"objects/staff-stats",title:"StaffStats",description:"User's staff statistics",source:"@site/examples/default/objects/staff-stats.mdx",sourceDirName:"objects",slug:"/objects/staff-stats",permalink:"/examples/default/objects/staff-stats",draft:!1,tags:[],version:"current",frontMatter:{id:"staff-stats",title:"StaffStats",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},f={},d=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),i=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>StaffStats.<b>staff</b></code><Bullet /><code>Staff</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-staffstatsbstaffbcodestaff-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffStats.<b>amount</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffstatsbamountbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffStats.<b>meanScore</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffstatsbmeanscorebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffStats.<b>timeWatched</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffstatsbtimewatchedbcodeint-",level:4},{value:"Member of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:s=!1}=e;const[c,f]=(0,r.useState)(s);return(0,l.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),f((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&o)},b={Bullet:d,SpecifiedBy:i,Badge:m,toc:u,Details:p};function g(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"User's staff statistics"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type StaffStats {\n  staff: Staff\n  amount: Int\n  meanScore: Int\n  timeWatched: Int\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffstatsbstaffbcodestaff-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"StaffStats.",(0,l.kt)("b",null,"staff"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/objects/staff"},(0,l.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffstatsbamountbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"StaffStats.",(0,l.kt)("b",null,"amount"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffstatsbmeanscorebcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"StaffStats.",(0,l.kt)("b",null,"meanScore"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-staffstatsbtimewatchedbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"StaffStats.",(0,l.kt)("b",null,"timeWatched"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The amount of time in minutes the staff member has been watched by the user")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/user-stats"},(0,l.kt)("inlineCode",{parentName:"a"},"UserStats"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);