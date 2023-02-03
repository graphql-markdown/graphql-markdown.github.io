"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3465],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var r=o.createContext({}),c=function(e){var t=o.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(r.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,r=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),y=n,u=p["".concat(r,".").concat(y)]||p[y]||m[y]||s;return a?o.createElement(u,l(l({ref:t},d),{},{components:a})):o.createElement(u,l({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=y;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<s;c++)l[c]=a[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}y.displayName="MDXCreateElement"},5915:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var o=a(7462),n=a(7294),s=a(3905);const l={id:"media-list-type-options",title:"MediaListTypeOptions",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,r={unversionedId:"objects/media-list-type-options",id:"objects/media-list-type-options",title:"MediaListTypeOptions",description:"A user's list options for anime or manga lists",source:"@site/examples/schema/objects/media-list-type-options.mdx",sourceDirName:"objects",slug:"/objects/media-list-type-options",permalink:"/schema/objects/media-list-type-options",draft:!1,tags:[],version:"current",frontMatter:{id:"media-list-type-options",title:"MediaListTypeOptions",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListTypeOptions.<b>sectionOrder</b></code><Bullet /><code>[String]</code> <Badge className="secondary" text="list"/> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialisttypeoptionsbsectionorderbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListTypeOptions.<b>splitCompletedSectionByFormat</b></code><Bullet /><code>Boolean</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialisttypeoptionsbsplitcompletedsectionbyformatbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListTypeOptions.<b>theme</b></code><Bullet /><code>Json</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialisttypeoptionsbthemebcodejson-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListTypeOptions.<b>customLists</b></code><Bullet /><code>[String]</code> <Badge className="secondary" text="list"/> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialisttypeoptionsbcustomlistsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListTypeOptions.<b>advancedScoring</b></code><Bullet /><code>[String]</code> <Badge className="secondary" text="list"/> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialisttypeoptionsbadvancedscoringbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaListTypeOptions.<b>advancedScoringEnabled</b></code><Bullet /><code>Boolean</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-medialisttypeoptionsbadvancedscoringenabledbcodeboolean-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,s.kt)(n.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:d,Bullet:p,SpecifiedBy:m,Badge:y};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"A user's list options for anime or manga lists"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaListTypeOptions {\n  sectionOrder: [String]\n  splitCompletedSectionByFormat: Boolean\n  theme: Json\n  customLists: [String]\n  advancedScoring: [String]\n  advancedScoringEnabled: Boolean\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialisttypeoptionsbsectionorderbcodestring--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaListTypeOptions.",(0,s.kt)("b",null,"sectionOrder"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,s.kt)(y,{className:"secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(y,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The order each list should be displayed in")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialisttypeoptionsbsplitcompletedsectionbyformatbcodeboolean-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaListTypeOptions.",(0,s.kt)("b",null,"splitCompletedSectionByFormat"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,s.kt)(y,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"If the completed sections of the list should be separated by format")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialisttypeoptionsbthemebcodejson-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaListTypeOptions.",(0,s.kt)("b",null,"theme"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/json"},(0,s.kt)("inlineCode",{parentName:"a"},"Json"))," ",(0,s.kt)(y,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The list theme options")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialisttypeoptionsbcustomlistsbcodestring--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaListTypeOptions.",(0,s.kt)("b",null,"customLists"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,s.kt)(y,{className:"secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(y,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The names of the user's custom lists")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialisttypeoptionsbadvancedscoringbcodestring--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaListTypeOptions.",(0,s.kt)("b",null,"advancedScoring"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,s.kt)(y,{className:"secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(y,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The names of the user's advanced scoring sections")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-medialisttypeoptionsbadvancedscoringenabledbcodeboolean-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MediaListTypeOptions.",(0,s.kt)("b",null,"advancedScoringEnabled"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,s.kt)(y,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"If advanced scoring is enabled")),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-list-options"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaListOptions"))," ",(0,s.kt)(y,{className:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);