"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6390],{4137:(e,t,a)=>{a.d(t,{Zo:()=>f,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},f=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},i="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,f=d(e,["components","mdxType","originalType","parentName"]),i=c(a),u=r,g=i["".concat(s,".").concat(u)]||i[u]||p[u]||o;return a?n.createElement(g,l(l({ref:t},f),{},{components:a})):n.createElement(g,l({ref:t},f))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[i]="string"==typeof e?e:r,l[1]=d;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3385:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>f,Details:()=>g,SpecifiedBy:()=>i,assets:()=>c,contentTitle:()=>d,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=a(7462),r=a(7294),o=a(4137);const l={id:"staff-edge",title:"StaffEdge",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},d=void 0,s={unversionedId:"objects/staff-edge",id:"objects/staff-edge",title:"StaffEdge",description:"Staff connection edge",source:"@site/examples/default/objects/staff-edge.mdx",sourceDirName:"objects",slug:"/objects/staff-edge",permalink:"/examples/default/objects/staff-edge",draft:!1,tags:[],version:"current",frontMatter:{id:"staff-edge",title:"StaffEdge",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},f=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),i=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>StaffEdge.<b>node</b></code><Bullet /><code>Staff</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-staffedgebnodebcodestaff-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffEdge.<b>id</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffedgebidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffEdge.<b>role</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffedgebrolebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffEdge.<b>favouriteOrder</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffedgebfavouriteorderbcodeint-",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:d=!1}=e;const[s,c]=(0,r.useState)(d);return(0,o.kt)("details",(0,n.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&l)},m={Bullet:f,SpecifiedBy:i,Badge:p,toc:u,Details:g};function b(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Staff connection edge"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type StaffEdge {\n  node: Staff\n  id: Int\n  role: String\n  favouriteOrder: Int\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-staffedgebnodebcodestaff-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StaffEdge.",(0,o.kt)("b",null,"node"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/objects/staff"},(0,o.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-staffedgebidbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StaffEdge.",(0,o.kt)("b",null,"id"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The id of the connection")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-staffedgebrolebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StaffEdge.",(0,o.kt)("b",null,"role"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The role of the staff member in the production of the media")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-staffedgebfavouriteorderbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StaffEdge.",(0,o.kt)("b",null,"favouriteOrder"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The order the staff should be displayed from the users favourites")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/examples/default/objects/media-submission-comparison"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaSubmissionComparison"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/examples/default/objects/staff-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"StaffConnection"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);