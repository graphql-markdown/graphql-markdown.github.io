"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[232],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(a),g=r,m=p["".concat(c,".").concat(g)]||p[g]||u[g]||l;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6303:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var n=a(7462),r=a(7294),l=a(4137);const i={id:"weighted-gpa",title:"WeightedGPA",hide_table_of_contents:!1},o=void 0,c={unversionedId:"grade/queries/weighted-gpa",id:"grade/queries/weighted-gpa",title:"WeightedGPA",description:"No description",source:"@site/examples/group-by/grade/queries/weighted-gpa.mdx",sourceDirName:"grade/queries",slug:"/grade/queries/weighted-gpa",permalink:"/examples/group-by/grade/queries/weighted-gpa",draft:!1,tags:[],version:"current",frontMatter:{id:"weighted-gpa",title:"WeightedGPA",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UnWeightedGPA",permalink:"/examples/group-by/grade/queries/un-weighted-gpa"},next:{title:"Schema Documentation",permalink:"/examples/group-by/"}},s={},d=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),g=[{value:"Directives",id:"directives",level:3},{value:"<code>complexity</code>",id:"complexity",level:4},{value:"Arguments",id:"arguments",level:3},{value:'<code>input</code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"inputstring-",level:4},{value:'<code>skip</code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"skipint--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"int-",level:4}],m=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:o=!1}=e;const[c,s]=(0,r.useState)(o);return(0,l.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&i)},y={Bullet:d,SpecifiedBy:p,Badge:u,toc:g,Details:m};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(u,{class:"badge badge--secondary",text:"@complexity",mdxType:"Badge"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"WeightedGPA(\n  input: String\n  skip: Int!\n): Int\n")),(0,l.kt)("h3",{id:"directives"},"Directives"),(0,l.kt)("h4",{id:"complexity"},(0,l.kt)("a",{parentName:"h4",href:"/examples/group-by/common/directives/complexity"},(0,l.kt)("inlineCode",{parentName:"a"},"complexity"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This has an additional cost of ",(0,l.kt)("inlineCode",{parentName:"p"},"3")," points.")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"inputstring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"input")),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/group-by/common/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"skipint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"skip")),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/group-by/common/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"int-"},(0,l.kt)("a",{parentName:"h4",href:"/examples/group-by/common/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Int")," scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.")))}k.isMDXComponent=!0}}]);