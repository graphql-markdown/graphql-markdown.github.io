"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[8773],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=l.createContext({}),d=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return l.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(n),k=a,m=u["".concat(c,".").concat(k)]||u[k]||p[k]||r;return n?l.createElement(m,o(o({ref:t},s),{},{components:n})):l.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<r;d++)o[d]=n[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3530:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>k});var l=n(7462),a=n(7294),r=n(3905);const o={id:"external-link-source-collection",title:"ExternalLinkSourceCollection",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},i=void 0,c={unversionedId:"queries/external-link-source-collection",id:"queries/external-link-source-collection",title:"ExternalLinkSourceCollection",description:"ExternalLinkSource collection query",source:"@site/examples/default/queries/external-link-source-collection.mdx",sourceDirName:"queries",slug:"/queries/external-link-source-collection",permalink:"/examples/default/queries/external-link-source-collection",draft:!1,tags:[],version:"current",frontMatter:{id:"external-link-source-collection",title:"ExternalLinkSourceCollection",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},s=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),k=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ExternalLinkSourceCollection.<b>id</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-externallinksourcecollectionbidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ExternalLinkSourceCollection.<b>type</b></code><Bullet /><code>ExternalLinkType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-externallinksourcecollectionbtypebcodeexternallinktype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ExternalLinkSourceCollection.<b>mediaType</b></code><Bullet /><code>ExternalLinkMediaType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-externallinksourcecollectionbmediatypebcodeexternallinkmediatype-",level:4},{value:"Type",id:"type",level:3},{value:'<code>MediaExternalLink</code> <Badge class="badge badge--secondary" text="object"/>',id:"mediaexternallink-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:i=!1}=e;const[c,d]=(0,a.useState)(i);return(0,r.kt)("details",(0,l.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&o)},y={Bullet:s,SpecifiedBy:u,Badge:p,toc:k,Details:m};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ExternalLinkSource collection query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"ExternalLinkSourceCollection(\n  id: Int\n  type: ExternalLinkType\n  mediaType: ExternalLinkMediaType\n): [MediaExternalLink]\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-externallinksourcecollectionbidbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ExternalLinkSourceCollection.",(0,r.kt)("b",null,"id"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Filter by the link id")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-externallinksourcecollectionbtypebcodeexternallinktype-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ExternalLinkSourceCollection.",(0,r.kt)("b",null,"type"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/enums/external-link-type"},(0,r.kt)("inlineCode",{parentName:"a"},"ExternalLinkType"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-externallinksourcecollectionbmediatypebcodeexternallinkmediatype-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ExternalLinkSourceCollection.",(0,r.kt)("b",null,"mediaType"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/enums/external-link-media-type"},(0,r.kt)("inlineCode",{parentName:"a"},"ExternalLinkMediaType"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"mediaexternallink-"},(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/media-external-link"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaExternalLink"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"An external link to another site related to the media or staff member")))}f.isMDXComponent=!0}}]);