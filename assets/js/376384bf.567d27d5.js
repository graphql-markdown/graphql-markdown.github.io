"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7331],{4137:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),d=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=d(e.components);return o.createElement(i.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(n),u=r,f=s["".concat(i,".").concat(u)]||s[u]||p[u]||a;return n?o.createElement(f,c(c({ref:t},m),{},{components:n})):o.createElement(f,c({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:r,c[1]=l;for(var d=2;d<a;d++)c[d]=n[d];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},885:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>m,Details:()=>f,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var o=n(7462),r=n(7294),a=n(4137);const c={id:"recommendation-edge",title:"RecommendationEdge",hide_table_of_contents:!1},l=void 0,i={unversionedId:"objects/recommendation-edge",id:"objects/recommendation-edge",title:"RecommendationEdge",description:"Recommendation connection edge",source:"@site/examples/default/objects/recommendation-edge.mdx",sourceDirName:"objects",slug:"/objects/recommendation-edge",permalink:"/examples/default/objects/recommendation-edge",draft:!1,tags:[],version:"current",frontMatter:{id:"recommendation-edge",title:"RecommendationEdge",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"RecommendationConnection",permalink:"/examples/default/objects/recommendation-connection"},next:{title:"Recommendation",permalink:"/examples/default/objects/recommendation"}},d={},m=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RecommendationEdge.<b>node</b></code><Bullet /><code>Recommendation</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-recommendationedgebnodebcoderecommendation-",level:4},{value:"Member Of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:l=!1}=e;const[i,d]=(0,r.useState)(l);return(0,a.kt)("details",(0,o.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&c)},b={Bullet:m,SpecifiedBy:s,Badge:p,toc:u,Details:f};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("meta",{name:"googlebot",content:"noindex"}),(0,a.kt)("meta",{charset:"utf-8"})),(0,a.kt)("p",null,"Recommendation connection edge"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type RecommendationEdge {\n  node: Recommendation\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-recommendationedgebnodebcoderecommendation-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RecommendationEdge.",(0,a.kt)("b",null,"node"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/examples/default/objects/recommendation"},(0,a.kt)("inlineCode",{parentName:"a"},"Recommendation"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member Of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/examples/default/objects/recommendation-connection"},(0,a.kt)("inlineCode",{parentName:"a"},"RecommendationConnection"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);