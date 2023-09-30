"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7034],{4137:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},d=Object.keys(e);for(r=0;r<d.length;r++)a=d[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)a=d[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,d=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=l(a),g=n,u=m["".concat(c,".").concat(g)]||m[g]||p[g]||d;return a?r.createElement(u,o(o({ref:t},i),{},{components:a})):r.createElement(u,o({ref:t},i))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var d=a.length,o=new Array(d);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<d;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4567:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>i,Details:()=>u,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>g});var r=a(7462),n=a(7294),d=a(4137);const o={id:"semester",title:"Semester",hide_table_of_contents:!1},s=void 0,c={unversionedId:"common/objects/semester",id:"common/objects/semester",title:"Semester",description:"No description",source:"@site/examples/group-by/common/objects/semester.mdx",sourceDirName:"common/objects",slug:"/common/objects/semester",permalink:"/examples/group-by/common/objects/semester",draft:!1,tags:[],version:"current",frontMatter:{id:"semester",title:"Semester",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DepartmentInformation",permalink:"/examples/group-by/common/objects/department-information"},next:{title:"Queries",permalink:"/examples/group-by/category/queries"}},l={},i=()=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,d.kt)(n.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code>id</code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/> <Badge class="badge badge--secondary" text="common"/>',id:"idid---",level:4},{value:'<code>startDate</code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/> <Badge class="badge badge--secondary" text="common"/>',id:"startdatedate--",level:4},{value:'<code>endDate</code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/> <Badge class="badge badge--secondary" text="common"/>',id:"enddatedate--",level:4},{value:'<code>courses</code><Bullet /><code>[Course!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/> <Badge class="badge badge--secondary" text="common"/> <Badge class="badge badge--secondary" text="@complexity"/> <Badge class="badge badge--secondary" text="@auth"/>',id:"coursescourse-----",level:4},{value:'<code>withdrawDate</code><Bullet /><code>Date</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="scalar"/> <Badge class="badge badge--secondary" text="common"/>',id:"withdrawdatedate---",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Record</code> <Badge class="badge badge--secondary" text="interface"/> <Badge class="badge badge--secondary" text="common"/>',id:"record--",level:4}],u=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:s=!1}=e;const[c,l]=(0,n.useState)(s);return(0,d.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&o)},b={Bullet:i,SpecifiedBy:m,Badge:p,toc:g,Details:u};function y(e){let{components:t,...a}=e;return(0,d.kt)("wrapper",(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"No description"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type Semester implements Record {\n  id: ID!\n  startDate: Date\n  withdrawDate: Date @deprecated\n  endDate: Date\n  courses: [Course!]!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"idid---"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("inlineCode",{parentName:"a"},"id")),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/group-by/common/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"common",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"startdatedate--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("inlineCode",{parentName:"a"},"startDate")),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/group-by/common/scalars/date"},(0,d.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"common",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"enddatedate--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("inlineCode",{parentName:"a"},"endDate")),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/group-by/common/scalars/date"},(0,d.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"common",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"coursescourse-----"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("inlineCode",{parentName:"a"},"courses")),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/group-by/common/objects/course"},(0,d.kt)("inlineCode",{parentName:"a"},"[Course!]!"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"common",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"@complexity",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"@auth",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Courses for the semester."),(0,d.kt)("p",{parentName:"blockquote"},"This has an additional cost of ",(0,d.kt)("inlineCode",{parentName:"p"},"2")," points."),(0,d.kt)("p",{parentName:"blockquote"},"This requires the current user to be in ",(0,d.kt)("inlineCode",{parentName:"p"},"ADMIN")," role.")),(0,d.kt)(u,{dataOpen:(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{className:"deprecated"},"Hide deprecated")),dataClose:(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{className:"deprecated"},"Show deprecated")),mdxType:"Details"},(0,d.kt)("h4",{id:"withdrawdatedate---"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("inlineCode",{parentName:"a"},"withdrawDate")),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/group-by/common/scalars/date"},(0,d.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,d.kt)(p,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"common",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,d.kt)("p",{parentName:"admonition"},"No longer supported")))),(0,d.kt)("h3",{id:"interfaces"},"Interfaces"),(0,d.kt)("h4",{id:"record--"},(0,d.kt)("a",{parentName:"h4",href:"/examples/group-by/common/interfaces/record"},(0,d.kt)("inlineCode",{parentName:"a"},"Record"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"common",mdxType:"Badge"})),(0,d.kt)("blockquote",null))}y.isMDXComponent=!0}}]);