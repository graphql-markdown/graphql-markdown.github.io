"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7299],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=d(t),f=a,u=s["".concat(l,".").concat(f)]||s[f]||p[f]||c;return t?o.createElement(u,r(r({ref:n},m),{},{components:t})):o.createElement(u,r({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,r=new Array(c);r[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[s]="string"==typeof e?e:a,r[1]=i;for(var d=2;d<c;d++)r[d]=t[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4912:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>f,Bullet:()=>s,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var o=t(7462),a=t(7294),c=t(3905);const r={id:"recommendation-connection",title:"RecommendationConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,l={unversionedId:"objects/recommendation-connection",id:"objects/recommendation-connection",title:"RecommendationConnection",description:"No description",source:"@site/examples/schema/objects/recommendation-connection.mdx",sourceDirName:"objects",slug:"/objects/recommendation-connection",permalink:"/schema/objects/recommendation-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"recommendation-connection",title:"RecommendationConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RecommendationConnection.<b>edges</b></code><Bullet /><code>[RecommendationEdge]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-recommendationconnectionbedgesbcoderecommendationedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RecommendationConnection.<b>nodes</b></code><Bullet /><code>[Recommendation]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-recommendationconnectionbnodesbcoderecommendation--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RecommendationConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-recommendationconnectionbpageinfobcodepageinfo-",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(a.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:m,Bullet:s,SpecifiedBy:p,Badge:f};function g(e){let{components:n,...t}=e;return(0,c.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type RecommendationConnection {\n  edges: [RecommendationEdge]\n  nodes: [Recommendation]\n  pageInfo: PageInfo\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-recommendationconnectionbedgesbcoderecommendationedge--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"RecommendationConnection.",(0,c.kt)("b",null,"edges"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/schema/objects/recommendation-edge"},(0,c.kt)("inlineCode",{parentName:"a"},"[RecommendationEdge]"))," ",(0,c.kt)(f,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-recommendationconnectionbnodesbcoderecommendation--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"RecommendationConnection.",(0,c.kt)("b",null,"nodes"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/schema/objects/recommendation"},(0,c.kt)("inlineCode",{parentName:"a"},"[Recommendation]"))," ",(0,c.kt)(f,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-recommendationconnectionbpageinfobcodepageinfo-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"RecommendationConnection.",(0,c.kt)("b",null,"pageInfo"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/schema/objects/page-info"},(0,c.kt)("inlineCode",{parentName:"a"},"PageInfo"))," ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The pagination information")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/schema/objects/media"},(0,c.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);