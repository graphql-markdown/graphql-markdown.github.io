"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[4708],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,h=d["".concat(i,".").concat(u)]||d[u]||p[u]||l;return a?r.createElement(h,c(c({ref:t},m),{},{components:a})):r.createElement(h,c({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:n,c[1]=o;for(var s=2;s<l;s++)c[s]=a[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9428:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>d,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>c,metadata:()=>i,toc:()=>m});var r=a(7462),n=a(7294),l=a(3905);const c={id:"character-name-input",title:"CharacterNameInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,i={unversionedId:"inputs/character-name-input",id:"inputs/character-name-input",title:"CharacterNameInput",description:"The names of the character",source:"@site/examples/schema/inputs/character-name-input.mdx",sourceDirName:"inputs",slug:"/inputs/character-name-input",permalink:"/schema/inputs/character-name-input",draft:!1,tags:[],version:"current",frontMatter:{id:"character-name-input",title:"CharacterNameInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},s={},m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterNameInput.<b>first</b></code><Bullet /><code>String</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characternameinputbfirstbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterNameInput.<b>middle</b></code><Bullet /><code>String</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characternameinputbmiddlebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterNameInput.<b>last</b></code><Bullet /><code>String</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characternameinputblastbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterNameInput.<b>native</b></code><Bullet /><code>String</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characternameinputbnativebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterNameInput.<b>alternative</b></code><Bullet /><code>[String]</code> <Badge className="secondary" text="list"/> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characternameinputbalternativebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterNameInput.<b>alternativeSpoiler</b></code><Bullet /><code>[String]</code> <Badge className="secondary" text="list"/> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-characternameinputbalternativespoilerbcodestring--",level:4}],d=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.className},e.text)),h={toc:m,Bullet:d,SpecifiedBy:p,Badge:u};function g(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The names of the character"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input CharacterNameInput {\n  first: String\n  middle: String\n  last: String\n  native: String\n  alternative: [String]\n  alternativeSpoiler: [String]\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-characternameinputbfirstbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CharacterNameInput.",(0,l.kt)("b",null,"first"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The character's given name")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-characternameinputbmiddlebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CharacterNameInput.",(0,l.kt)("b",null,"middle"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The character's middle name")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-characternameinputblastbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CharacterNameInput.",(0,l.kt)("b",null,"last"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The character's surname")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-characternameinputbnativebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CharacterNameInput.",(0,l.kt)("b",null,"native"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The character's full name in their native language")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-characternameinputbalternativebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CharacterNameInput.",(0,l.kt)("b",null,"alternative"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,l.kt)(u,{className:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Other names the character might be referred by")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-characternameinputbalternativespoilerbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CharacterNameInput.",(0,l.kt)("b",null,"alternativeSpoiler"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,l.kt)(u,{className:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Other names the character might be referred to as but are spoilers")))}g.isMDXComponent=!0}}]);