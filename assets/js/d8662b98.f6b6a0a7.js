"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[807],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=s(a),u=n,p=h["".concat(i,".").concat(u)]||h[u]||m[u]||c;return a?r.createElement(p,o(o({ref:t},d),{},{components:a})):r.createElement(p,o({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[h]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<c;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9719:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>p,SpecifiedBy:()=>h,assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(7462),n=a(7294),c=a(3905);const o={id:"character",title:"Character",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},l=void 0,i={unversionedId:"queries/character",id:"queries/character",title:"Character",description:"Character query",source:"@site/examples/schema/queries/character.mdx",sourceDirName:"queries",slug:"/queries/character",permalink:"/schema/queries/character",draft:!1,tags:[],version:"current",frontMatter:{id:"character",title:"Character",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},s={},d=()=>(0,c.kt)(n.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),h=e=>(0,c.kt)(n.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,c.kt)(n.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>id</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>isBirthday</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbisbirthdaybcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>search</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbsearchbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>id_not</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbid_notbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>id_in</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbid_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>id_not_in</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterbid_not_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Character.<b>sort</b></code><Bullet /><code>[CharacterSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-characterbsortbcodecharactersort--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Character</code> <Badge class="secondary" text="object"/>',id:"character-",level:4}],p=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:l=!1}=e;const[i,s]=(0,n.useState)(l);return(0,c.kt)("details",(0,r.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,c.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&o)},y={Bullet:d,SpecifiedBy:h,Badge:m,toc:u,Details:p};function k(e){let{components:t,...a}=e;return(0,c.kt)("wrapper",(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Character query"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"Character(\n  id: Int\n  isBirthday: Boolean\n  search: String\n  id_not: Int\n  id_in: [Int]\n  id_not_in: [Int]\n  sort: [CharacterSort]\n): Character\n")),(0,c.kt)("h3",{id:"arguments"},"Arguments"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-characterbidbcodeint-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,c.kt)("b",null,"id"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,c.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Filter by character id")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-characterbisbirthdaybcodeboolean-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,c.kt)("b",null,"isBirthday"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,c.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,c.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Filter by character by if its their birthday today")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-characterbsearchbcodestring-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,c.kt)("b",null,"search"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,c.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Filter by search query")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-characterbid_notbcodeint-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,c.kt)("b",null,"id_not"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,c.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Filter by character id")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-characterbid_inbcodeint--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,c.kt)("b",null,"id_in"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,c.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Filter by character id")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-characterbid_not_inbcodeint--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,c.kt)("b",null,"id_not_in"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,c.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Filter by character id")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-characterbsortbcodecharactersort--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"Character.",(0,c.kt)("b",null,"sort"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/schema/enums/character-sort"},(0,c.kt)("inlineCode",{parentName:"a"},"[CharacterSort]"))," ",(0,c.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The order the results will be returned in")),(0,c.kt)("h3",{id:"type"},"Type"),(0,c.kt)("h4",{id:"character-"},(0,c.kt)("a",{parentName:"h4",href:"/schema/objects/character"},(0,c.kt)("inlineCode",{parentName:"a"},"Character"))," ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"A character that features in an anime or manga")))}k.isMDXComponent=!0}}]);