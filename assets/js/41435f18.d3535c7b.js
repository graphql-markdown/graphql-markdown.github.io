"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[2411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=l.createContext({}),s=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return l.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,k=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?l.createElement(k,o(o({ref:t},u),{},{components:n})):l.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7151:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var l=n(7462),r=n(7294),a=n(3905);const o={id:"external-link-source-collection",title:"ExternalLinkSourceCollection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,c={unversionedId:"schema/queries/external-link-source-collection",id:"schema/queries/external-link-source-collection",title:"ExternalLinkSourceCollection",description:"ExternalLinkSource collection query",source:"@site/docs/schema/queries/external-link-source-collection.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/external-link-source-collection",permalink:"/schema/queries/external-link-source-collection",draft:!1,tags:[],version:"current",frontMatter:{id:"external-link-source-collection",title:"ExternalLinkSourceCollection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},s={},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ExternalLinkSourceCollection.<b>id</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-externallinksourcecollectionbidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ExternalLinkSourceCollection.<b>type</b></code><Bullet /><code>ExternalLinkType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-externallinksourcecollectionbtypebcodeexternallinktype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ExternalLinkSourceCollection.<b>mediaType</b></code><Bullet /><code>ExternalLinkMediaType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-externallinksourcecollectionbmediatypebcodeexternallinkmediatype-",level:4},{value:"Type",id:"type",level:3},{value:'<code>MediaExternalLink</code> <Badge class="secondary" text="object"/>',id:"mediaexternallink-",level:4}],d=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),k={toc:u,Bullet:d,SpecifiedBy:p,Badge:m};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ExternalLinkSource collection query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"ExternalLinkSourceCollection(\n  id: Int\n  type: ExternalLinkType\n  mediaType: ExternalLinkMediaType\n): [MediaExternalLink]\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-externallinksourcecollectionbidbcodeint-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ExternalLinkSourceCollection.",(0,a.kt)("b",null,"id"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Filter by the link id")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-externallinksourcecollectionbtypebcodeexternallinktype-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ExternalLinkSourceCollection.",(0,a.kt)("b",null,"type"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/enums/external-link-type"},(0,a.kt)("inlineCode",{parentName:"a"},"ExternalLinkType"))," ",(0,a.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-externallinksourcecollectionbmediatypebcodeexternallinkmediatype-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ExternalLinkSourceCollection.",(0,a.kt)("b",null,"mediaType"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/enums/external-link-media-type"},(0,a.kt)("inlineCode",{parentName:"a"},"ExternalLinkMediaType"))," ",(0,a.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"mediaexternallink-"},(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/media-external-link"},(0,a.kt)("inlineCode",{parentName:"a"},"MediaExternalLink"))," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"An external link to another site related to the media or staff member")))}y.isMDXComponent=!0}}]);