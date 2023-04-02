"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[8914],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,u=p["".concat(i,".").concat(f)]||p[f]||m[f]||o;return n?a.createElement(u,c(c({ref:t},d),{},{components:n})):a.createElement(u,c({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3962:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>c,metadata:()=>i,toc:()=>f});var a=n(7462),r=n(7294),o=n(3905);const c={id:"character-connection",title:"CharacterConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,i={unversionedId:"objects/character-connection",id:"objects/character-connection",title:"CharacterConnection",description:"No description",source:"@site/examples/schema/objects/character-connection.mdx",sourceDirName:"objects",slug:"/objects/character-connection",permalink:"/schema/objects/character-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"character-connection",title:"CharacterConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},s={},d=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterConnection.<b>edges</b></code><Bullet /><code>[CharacterEdge]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-characterconnectionbedgesbcodecharacteredge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterConnection.<b>nodes</b></code><Bullet /><code>[Character]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-characterconnectionbnodesbcodecharacter--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-characterconnectionbpageinfobcodepageinfo-",level:4},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:l=!1}=e;const[i,s]=(0,r.useState)(l);return(0,o.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&c)},h={Bullet:d,SpecifiedBy:p,Badge:m,toc:f,Details:u};function b(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type CharacterConnection {\n  edges: [CharacterEdge]\n  nodes: [Character]\n  pageInfo: PageInfo\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-characterconnectionbedgesbcodecharacteredge--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CharacterConnection.",(0,o.kt)("b",null,"edges"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/character-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"[CharacterEdge]"))," ",(0,o.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-characterconnectionbnodesbcodecharacter--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CharacterConnection.",(0,o.kt)("b",null,"nodes"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/character"},(0,o.kt)("inlineCode",{parentName:"a"},"[Character]"))," ",(0,o.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-characterconnectionbpageinfobcodepageinfo-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CharacterConnection.",(0,o.kt)("b",null,"pageInfo"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/page-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PageInfo"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The pagination information")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/schema/objects/favourites"},(0,o.kt)("inlineCode",{parentName:"a"},"Favourites"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/objects/media"},(0,o.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/objects/staff"},(0,o.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);