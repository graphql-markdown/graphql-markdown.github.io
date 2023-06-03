"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7034],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},i=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=c(a),u=n,g=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return a?r.createElement(g,d(d({ref:t},i),{},{components:a})):r.createElement(g,d({ref:t},i))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,d=new Array(o);d[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,d[1]=l;for(var c=2;c<o;c++)d[c]=a[c];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2515:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>d,metadata:()=>s,toc:()=>u});var r=a(7462),n=a(7294),o=a(3905);const d={id:"semester",title:"Semester",hide_table_of_contents:!1},l=void 0,s={unversionedId:"common/objects/semester",id:"common/objects/semester",title:"Semester",description:"No description",source:"@site/examples/group-by/common/objects/semester.mdx",sourceDirName:"common/objects",slug:"/common/objects/semester",permalink:"/examples/group-by/common/objects/semester",draft:!1,tags:[],version:"current",frontMatter:{id:"semester",title:"Semester",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DepartmentInformation",permalink:"/examples/group-by/common/objects/department-information"},next:{title:"Queries",permalink:"/examples/group-by/category/queries"}},c={},i=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code>id</code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"idid--",level:4},{value:'<code>startDate</code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"startdatedate-",level:4},{value:'<code>endDate</code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"enddatedate-",level:4},{value:'<code>courses</code><Bullet /><code>[Course!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/> <Badge class="badge badge--secondary" text="@auth"/> <Badge class="badge badge--secondary" text="@complexity"/>',id:"coursescourse----",level:4},{value:'<code>withdrawDate</code><Bullet /><code>Date</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"withdrawdatedate--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Record</code> <Badge class="badge badge--secondary" text="interface"/>',id:"record-",level:4}],g=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:l=!1}=e;const[s,c]=(0,n.useState)(l);return(0,o.kt)("details",(0,r.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&d)},b={Bullet:i,SpecifiedBy:p,Badge:m,toc:u,Details:g};function k(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Semester implements Record {\n  id: ID!\n  startDate: Date\n  withdrawDate: Date @deprecated\n  endDate: Date\n  courses: [Course!]!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"idid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"id")),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/group-by/common/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"startdatedate-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"startDate")),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/group-by/common/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"enddatedate-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"endDate")),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/group-by/common/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"coursescourse----"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"courses")),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/group-by/common/objects/course"},(0,o.kt)("inlineCode",{parentName:"a"},"[Course!]!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"@auth",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"@complexity",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Courses for the semester."),(0,o.kt)("p",{parentName:"blockquote"},"This requires the current user to be in ",(0,o.kt)("inlineCode",{parentName:"p"},"ADMIN")," role."),(0,o.kt)("p",{parentName:"blockquote"},"This has an additional cost of ",(0,o.kt)("inlineCode",{parentName:"p"},"2")," points.")),(0,o.kt)(g,{dataOpen:(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:"deprecated"},"Hide deprecated")),dataClose:(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:"deprecated"},"Show deprecated")),mdxType:"Details"},(0,o.kt)("h4",{id:"withdrawdatedate--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"withdrawDate")),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/group-by/common/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,o.kt)(m,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"No longer supported")))),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"record-"},(0,o.kt)("a",{parentName:"h4",href:"/examples/group-by/common/interfaces/record"},(0,o.kt)("inlineCode",{parentName:"a"},"Record"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}k.isMDXComponent=!0}}]);