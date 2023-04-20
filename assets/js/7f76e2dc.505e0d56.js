"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3962],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,b=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<s;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9337:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(7462),r=a(7294),s=a(3905);const i={id:"media-stats",title:"MediaStats",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,l={unversionedId:"objects/media-stats",id:"objects/media-stats",title:"MediaStats",description:"A media's statistics",source:"@site/examples/schema/objects/media-stats.mdx",sourceDirName:"objects",slug:"/objects/media-stats",permalink:"/schema/objects/media-stats",draft:!1,tags:[],version:"current",frontMatter:{id:"media-stats",title:"MediaStats",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},c=()=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,s.kt)(r.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MediaStats.<b>scoreDistribution</b></code><Bullet /><code>[ScoreDistribution]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediastatsbscoredistributionbcodescoredistribution--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaStats.<b>statusDistribution</b></code><Bullet /><code>[StatusDistribution]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediastatsbstatusdistributionbcodestatusdistribution--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaStats.<b>airingProgression</b></code><Bullet /><code>[AiringProgression]</code> <Badge class="secondary" text="deprecated"/> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediastatsbairingprogressionbcodeairingprogression---",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:o=!1}=e;const[l,d]=(0,r.useState)(o);return(0,s.kt)("details",(0,n.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},l?t:a),l&&i)},g={Bullet:c,SpecifiedBy:u,Badge:p,toc:m,Details:b};function y(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"A media's statistics"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaStats {\n  scoreDistribution: [ScoreDistribution]\n  statusDistribution: [StatusDistribution]\n  airingProgression: [AiringProgression]\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-mediastatsbscoredistributionbcodescoredistribution--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaStats.",(0,s.kt)("b",null,"scoreDistribution"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/score-distribution"},(0,s.kt)("inlineCode",{parentName:"a"},"[ScoreDistribution]"))," ",(0,s.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-mediastatsbstatusdistributionbcodestatusdistribution--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaStats.",(0,s.kt)("b",null,"statusDistribution"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/status-distribution"},(0,s.kt)("inlineCode",{parentName:"a"},"[StatusDistribution]"))," ",(0,s.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)(b,{dataOpen:(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{className:"deprecated"},"Hide deprecated")),dataClose:(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{className:"deprecated"},"Show deprecated")),mdxType:"Details"},(0,s.kt)("h4",{id:"code-style-fontweight-normal-mediastatsbairingprogressionbcodeairingprogression---"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaStats.",(0,s.kt)("b",null,"airingProgression"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/airing-progression"},(0,s.kt)("inlineCode",{parentName:"a"},"[AiringProgression]"))," ",(0,s.kt)(p,{class:"secondary",text:"deprecated",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)(p,{class:"warning",text:"DEPRECATED: Replaced by MediaTrends",mdxType:"Badge"}))),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media"},(0,s.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,s.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);