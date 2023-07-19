"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[5979],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(a),g=n,u=m["".concat(i,".").concat(g)]||m[g]||p[g]||l;return a?r.createElement(u,o(o({ref:t},d),{},{components:a})):r.createElement(u,o({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=g;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:n,o[1]=c;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6672:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>c,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var r=a(7462),n=a(7294),l=a(4137);const o={id:"character-image",title:"CharacterImage",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},c=void 0,i={unversionedId:"objects/character-image",id:"objects/character-image",title:"CharacterImage",description:"No description",source:"@site/examples/default/objects/character-image.mdx",sourceDirName:"objects",slug:"/objects/character-image",permalink:"/examples/default/objects/character-image",draft:!1,tags:[],version:"current",frontMatter:{id:"character-image",title:"CharacterImage",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},s={},d=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterImage.<b>large</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterimageblargebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterImage.<b>medium</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-characterimagebmediumbcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:c=!1}=e;const[i,s]=(0,n.useState)(c);return(0,l.kt)("details",(0,r.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&o)},f={Bullet:d,SpecifiedBy:m,Badge:p,toc:g,Details:u};function b(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type CharacterImage {\n  large: String\n  medium: String\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-characterimageblargebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CharacterImage.",(0,l.kt)("b",null,"large"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The character's image of media at its largest size")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-characterimagebmediumbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CharacterImage.",(0,l.kt)("b",null,"medium"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The character's image of media at medium size")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/character"},(0,l.kt)("inlineCode",{parentName:"a"},"Character"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);