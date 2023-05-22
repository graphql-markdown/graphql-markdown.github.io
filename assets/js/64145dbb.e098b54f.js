"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,g=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return n?a.createElement(g,l(l({ref:t},h),{},{components:n})):a.createElement(g,l({ref:t},h))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3199:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>h,Details:()=>g,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(7462),r=n(7294),i=n(3905);const l={id:"update-ani-chart-highlights",title:"UpdateAniChartHighlights",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},o=void 0,s={unversionedId:"mutations/update-ani-chart-highlights",id:"mutations/update-ani-chart-highlights",title:"UpdateAniChartHighlights",description:"No description",source:"@site/examples/default/mutations/update-ani-chart-highlights.mdx",sourceDirName:"mutations",slug:"/mutations/update-ani-chart-highlights",permalink:"/examples/default/mutations/update-ani-chart-highlights",draft:!1,tags:[],version:"current",frontMatter:{id:"update-ani-chart-highlights",title:"UpdateAniChartHighlights",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},h=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateAniChartHighlights.<b>highlights</b></code><Bullet /><code>[AniChartHighlightInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updateanicharthighlightsbhighlightsbcodeanicharthighlightinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Json</code> <Badge class="secondary" text="scalar"/>',id:"json-",level:4}],g=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:o=!1}=e;const[s,c]=(0,r.useState)(o);return(0,i.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&l)},m={Bullet:h,SpecifiedBy:p,Badge:u,toc:d,Details:g};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"UpdateAniChartHighlights(\n  highlights: [AniChartHighlightInput]\n): Json\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-updateanicharthighlightsbhighlightsbcodeanicharthighlightinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"UpdateAniChartHighlights.",(0,i.kt)("b",null,"highlights"))),(0,i.kt)(h,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/examples/default/inputs/ani-chart-highlight-input"},(0,i.kt)("inlineCode",{parentName:"a"},"[AniChartHighlightInput]"))," ",(0,i.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"json-"},(0,i.kt)("a",{parentName:"h4",href:"/examples/default/scalars/json"},(0,i.kt)("inlineCode",{parentName:"a"},"Json"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null))}f.isMDXComponent=!0}}]);