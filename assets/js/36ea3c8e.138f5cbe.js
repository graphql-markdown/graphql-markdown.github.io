"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[879],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)o=s[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)o=s[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var r=a.createContext({}),d=function(e){var t=a.useContext(r),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=d(e.components);return a.createElement(r.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(o),u=n,h=m["".concat(r,".").concat(u)]||m[u]||p[u]||s;return o?a.createElement(h,i(i({ref:t},c),{},{components:o})):a.createElement(h,i({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,i=new Array(s);i[0]=u;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<s;d++)i[d]=o[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},2929:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>u,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=o(7462),n=o(7294),s=o(3905);const i={id:"media-list-options",title:"MediaListOptions",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,r={unversionedId:"objects/media-list-options",id:"objects/media-list-options",title:"MediaListOptions",description:"A user's list options",source:"@site/examples/schema/objects/media-list-options.mdx",sourceDirName:"objects",slug:"/objects/media-list-options",permalink:"/schema/objects/media-list-options",draft:!1,tags:[],version:"current",frontMatter:{id:"media-list-options",title:"MediaListOptions",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListOptions.<b>scoreFormat</b></code><Bullet /><code>ScoreFormat</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-medialistoptionsbscoreformatbcodescoreformat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListOptions.<b>rowOrder</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistoptionsbroworderbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListOptions.<b>useLegacyLists</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistoptionsbuselegacylistsbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListOptions.<b>animeList</b></code><Bullet /><code>MediaListTypeOptions</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-medialistoptionsbanimelistbcodemedialisttypeoptions-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListOptions.<b>mangaList</b></code><Bullet /><code>MediaListTypeOptions</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-medialistoptionsbmangalistbcodemedialisttypeoptions-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListOptions.<b>sharedTheme</b></code><Bullet /><code>Json</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistoptionsbsharedthemebcodejson-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListOptions.<b>sharedThemeEnabled</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialistoptionsbsharedthemeenabledbcodeboolean-",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,s.kt)(n.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{class:"badge badge--"+e.class},e.text)),h={toc:c,Bullet:m,SpecifiedBy:p,Badge:u};function b(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"A user's list options"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaListOptions {\n  scoreFormat: ScoreFormat\n  rowOrder: String\n  useLegacyLists: Boolean\n  animeList: MediaListTypeOptions\n  mangaList: MediaListTypeOptions\n  sharedTheme: Json\n  sharedThemeEnabled: Boolean\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistoptionsbscoreformatbcodescoreformat-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaListOptions.",(0,s.kt)("b",null,"scoreFormat"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/enums/score-format"},(0,s.kt)("inlineCode",{parentName:"a"},"ScoreFormat"))," ",(0,s.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The score format the user is using for media lists")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistoptionsbroworderbcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaListOptions.",(0,s.kt)("b",null,"rowOrder"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The default order list rows should be displayed in")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistoptionsbuselegacylistsbcodeboolean-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaListOptions.",(0,s.kt)("b",null,"useLegacyLists"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,s.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistoptionsbanimelistbcodemedialisttypeoptions-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaListOptions.",(0,s.kt)("b",null,"animeList"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/media-list-type-options"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaListTypeOptions"))," ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The user's anime list options")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistoptionsbmangalistbcodemedialisttypeoptions-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaListOptions.",(0,s.kt)("b",null,"mangaList"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/media-list-type-options"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaListTypeOptions"))," ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The user's manga list options")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistoptionsbsharedthemebcodejson-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaListOptions.",(0,s.kt)("b",null,"sharedTheme"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/json"},(0,s.kt)("inlineCode",{parentName:"a"},"Json"))," ",(0,s.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The list theme options for both lists")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialistoptionsbsharedthemeenabledbcodeboolean-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaListOptions.",(0,s.kt)("b",null,"sharedThemeEnabled"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,s.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"If the shared theme should be used instead of the individual list themes")),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user"},(0,s.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);