"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6907],{4137:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),m=c(a),h=n,u=m["".concat(s,".").concat(h)]||m[h]||b[h]||o;return a?r.createElement(u,l(l({ref:t},i),{},{components:a})):r.createElement(u,l({ref:t},i))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=h;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[m]="string"==typeof e?e:n,l[1]=d;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8731:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>i,Details:()=>u,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>h});var r=a(7462),n=a(7294),o=a(4137);const l={id:"save-thread",title:"SaveThread",hide_table_of_contents:!1},d=void 0,s={unversionedId:"mutations/save-thread",id:"mutations/save-thread",title:"SaveThread",description:"Create or update a forum thread",source:"@site/examples/default/mutations/save-thread.mdx",sourceDirName:"mutations",slug:"/mutations/save-thread",permalink:"/examples/default/mutations/save-thread",draft:!1,tags:[],version:"current",frontMatter:{id:"save-thread",title:"SaveThread",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SaveThreadComment",permalink:"/examples/default/mutations/save-thread-comment"},next:{title:"ToggleActivityPin",permalink:"/examples/default/mutations/toggle-activity-pin"}},c={},i=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),h=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SaveThread.<b>id</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-savethreadbidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveThread.<b>title</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-savethreadbtitlebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveThread.<b>body</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-savethreadbbodybcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveThread.<b>categories</b></code><Bullet /><code>[Int]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-savethreadbcategoriesbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveThread.<b>mediaCategories</b></code><Bullet /><code>[Int]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-savethreadbmediacategoriesbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveThread.<b>sticky</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-savethreadbstickybcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveThread.<b>locked</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-savethreadblockedbcodeboolean-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Thread</code> <Badge class="badge badge--secondary" text="object"/>',id:"thread-",level:4}],u=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:d=!1}=e;const[s,c]=(0,n.useState)(d);return(0,o.kt)("details",(0,r.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&l)},g={Bullet:i,SpecifiedBy:m,Badge:b,toc:h,Details:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create or update a forum thread"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"SaveThread(\n  id: Int\n  title: String\n  body: String\n  categories: [Int]\n  mediaCategories: [Int]\n  sticky: Boolean\n  locked: Boolean\n): Thread\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-savethreadbidbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SaveThread.",(0,o.kt)("b",null,"id"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The thread id, required for updating")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-savethreadbtitlebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SaveThread.",(0,o.kt)("b",null,"title"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The title of the thread")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-savethreadbbodybcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SaveThread.",(0,o.kt)("b",null,"body"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The main text body of the thread")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-savethreadbcategoriesbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SaveThread.",(0,o.kt)("b",null,"categories"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Forum categories the thread should be within")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-savethreadbmediacategoriesbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SaveThread.",(0,o.kt)("b",null,"mediaCategories"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Media related to the contents of the thread")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-savethreadbstickybcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SaveThread.",(0,o.kt)("b",null,"sticky"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the thread should be stickied. (Mod Only)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-savethreadblockedbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SaveThread.",(0,o.kt)("b",null,"locked"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the thread should be locked. (Mod Only)")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"thread-"},(0,o.kt)("a",{parentName:"h4",href:"/examples/default/objects/thread"},(0,o.kt)("inlineCode",{parentName:"a"},"Thread"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Forum Thread")))}p.isMDXComponent=!0}}]);