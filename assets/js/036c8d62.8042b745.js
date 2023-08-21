"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[852],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,g=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return a?r.createElement(g,l(l({ref:t},c),{},{components:a})):r.createElement(g,l({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2689:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var r=a(7462),n=a(7294),o=a(4137);const l={id:"update-grade",title:"UpdateGrade",hide_table_of_contents:!1},i=void 0,d={unversionedId:"grade/mutations/update-grade",id:"grade/mutations/update-grade",title:"UpdateGrade",description:"No description",source:"@site/examples/group-by/grade/mutations/update-grade.mdx",sourceDirName:"grade/mutations",slug:"/grade/mutations/update-grade",permalink:"/examples/group-by/grade/mutations/update-grade",draft:!1,tags:[],version:"current",frontMatter:{id:"update-grade",title:"UpdateGrade",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UpdateGPA",permalink:"/examples/group-by/grade/mutations/update-gpa"},next:{title:"Queries",permalink:"/examples/group-by/category/queries-2"}},s={},c=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Directives",id:"directives",level:3},{value:"<code>auth</code>",id:"auth",level:4},{value:"Arguments",id:"arguments",level:3},{value:'<code>input</code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/> <Badge class="badge badge--secondary" text="common"/>',id:"inputstring--",level:4},{value:"Type",id:"type",level:3},{value:'<code>String</code> <Badge class="badge badge--secondary" text="scalar"/> <Badge class="badge badge--secondary" text="common"/>',id:"string--",level:4}],g=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:i=!1}=e;const[d,s]=(0,n.useState)(i);return(0,o.kt)("details",(0,r.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&l)},y={Bullet:c,SpecifiedBy:p,Badge:u,toc:m,Details:g};function b(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u,{class:"badge badge--secondary",text:"@auth",mdxType:"Badge"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("p",null,"This requires the current user to be in ",(0,o.kt)("inlineCode",{parentName:"p"},"ADMIN")," role."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"UpdateGrade(\n  input: String\n): String\n")),(0,o.kt)("h3",{id:"directives"},"Directives"),(0,o.kt)("h4",{id:"auth"},(0,o.kt)("a",{parentName:"h4",href:"/examples/group-by/common/directives/auth"},(0,o.kt)("inlineCode",{parentName:"a"},"auth"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This requires the current user to be in ",(0,o.kt)("inlineCode",{parentName:"p"},"ADMIN")," role.")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"inputstring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"input")),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/group-by/common/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"common",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"string--"},(0,o.kt)("a",{parentName:"h4",href:"/examples/group-by/common/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"common",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.")))}b.isMDXComponent=!0}}]);