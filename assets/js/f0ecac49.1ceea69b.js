"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[8943],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var m=n.createContext({}),c=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(m.Provider,{value:t},e.children)},i="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,m=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),i=c(a),u=o,h=i["".concat(m,".").concat(u)]||i[u]||p[u]||r;return a?n.createElement(h,l(l({ref:t},s),{},{components:a})):n.createElement(h,l({ref:t},s))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var d={};for(var m in t)hasOwnProperty.call(t,m)&&(d[m]=t[m]);d.originalType=e,d[i]="string"==typeof e?e:o,l[1]=d;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2257:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>h,SpecifiedBy:()=>i,assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>u});var n=a(7462),o=a(7294),r=a(3905);const l={id:"save-thread-comment",title:"SaveThreadComment",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},d=void 0,m={unversionedId:"mutations/save-thread-comment",id:"mutations/save-thread-comment",title:"SaveThreadComment",description:"Create or update a thread comment",source:"@site/examples/default/mutations/save-thread-comment.mdx",sourceDirName:"mutations",slug:"/mutations/save-thread-comment",permalink:"/examples/default/mutations/save-thread-comment",draft:!1,tags:[],version:"current",frontMatter:{id:"save-thread-comment",title:"SaveThreadComment",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},s=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),i=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SaveThreadComment.<b>id</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-savethreadcommentbidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveThreadComment.<b>threadId</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-savethreadcommentbthreadidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveThreadComment.<b>parentCommentId</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-savethreadcommentbparentcommentidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveThreadComment.<b>comment</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-savethreadcommentbcommentbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveThreadComment.<b>locked</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-savethreadcommentblockedbcodeboolean-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ThreadComment</code> <Badge class="badge badge--secondary" text="object"/>',id:"threadcomment-",level:4}],h=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:d=!1}=e;const[m,c]=(0,o.useState)(d);return(0,r.kt)("details",(0,n.Z)({},m?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},m?t:a),m&&l)},b={Bullet:s,SpecifiedBy:i,Badge:p,toc:u,Details:h};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Create or update a thread comment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"SaveThreadComment(\n  id: Int\n  threadId: Int\n  parentCommentId: Int\n  comment: String\n  locked: Boolean\n): ThreadComment\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-savethreadcommentbidbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SaveThreadComment.",(0,r.kt)("b",null,"id"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The comment id, required for updating")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-savethreadcommentbthreadidbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SaveThreadComment.",(0,r.kt)("b",null,"threadId"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The id of thread the comment belongs to")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-savethreadcommentbparentcommentidbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SaveThreadComment.",(0,r.kt)("b",null,"parentCommentId"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The id of thread comment to reply to")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-savethreadcommentbcommentbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SaveThreadComment.",(0,r.kt)("b",null,"comment"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The comment markdown text")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-savethreadcommentblockedbcodeboolean-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SaveThreadComment.",(0,r.kt)("b",null,"locked"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the comment tree should be locked. (Mod Only)")),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"threadcomment-"},(0,r.kt)("a",{parentName:"h4",href:"/examples/default/objects/thread-comment"},(0,r.kt)("inlineCode",{parentName:"a"},"ThreadComment"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Forum Thread Comment")))}g.isMDXComponent=!0}}]);