"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2348],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},f=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),d=i(n),u=o,m=d["".concat(s,".").concat(u)]||d[u]||p[u]||r;return n?a.createElement(m,l(l({ref:t},f),{},{components:n})):a.createElement(m,l({ref:t},f))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:o,l[1]=c;for(var i=2;i<r;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1082:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>f,Details:()=>m,SpecifiedBy:()=>d,assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(7462),o=n(7294),r=n(3905);const l={id:"staff-connection",title:"StaffConnection",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},c=void 0,s={unversionedId:"objects/staff-connection",id:"objects/staff-connection",title:"StaffConnection",description:"No description",source:"@site/examples/default/objects/staff-connection.mdx",sourceDirName:"objects",slug:"/objects/staff-connection",permalink:"/examples/default/objects/staff-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"staff-connection",title:"StaffConnection",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},i={},f=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>StaffConnection.<b>edges</b></code><Bullet /><code>[StaffEdge]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-staffconnectionbedgesbcodestaffedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffConnection.<b>nodes</b></code><Bullet /><code>[Staff]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-staffconnectionbnodesbcodestaff--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-staffconnectionbpageinfobcodepageinfo-",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:c=!1}=e;const[s,i]=(0,o.useState)(c);return(0,r.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&l)},b={Bullet:f,SpecifiedBy:d,Badge:p,toc:u,Details:m};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type StaffConnection {\n  edges: [StaffEdge]\n  nodes: [Staff]\n  pageInfo: PageInfo\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-staffconnectionbedgesbcodestaffedge--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"StaffConnection.",(0,r.kt)("b",null,"edges"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/staff-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"[StaffEdge]"))," ",(0,r.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-staffconnectionbnodesbcodestaff--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"StaffConnection.",(0,r.kt)("b",null,"nodes"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/staff"},(0,r.kt)("inlineCode",{parentName:"a"},"[Staff]"))," ",(0,r.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-staffconnectionbpageinfobcodepageinfo-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"StaffConnection.",(0,r.kt)("b",null,"pageInfo"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/page-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PageInfo"))," ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The pagination information")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/examples/default/objects/favourites"},(0,r.kt)("inlineCode",{parentName:"a"},"Favourites"))," ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/examples/default/objects/media"},(0,r.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);