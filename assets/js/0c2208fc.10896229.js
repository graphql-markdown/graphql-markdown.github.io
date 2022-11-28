"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[3393],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7885:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=r(7462),a=r(7294),o=r(3905);const l={id:"semester",title:"Semester",hide_table_of_contents:!1},i=void 0,c={unversionedId:"group-by/common/objects/semester",id:"group-by/common/objects/semester",title:"Semester",description:"No description",source:"@site/docs/group-by/common/objects/semester.mdx",sourceDirName:"group-by/common/objects",slug:"/group-by/common/objects/semester",permalink:"/group-by/common/objects/semester",draft:!1,tags:[],version:"current",frontMatter:{id:"semester",title:"Semester",hide_table_of_contents:!1},sidebar:"group",previous:{title:"DepartmentInformation",permalink:"/group-by/common/objects/department-information"},next:{title:"Queries",permalink:"/category/queries"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code><Bullet /><code>ID!</code>",id:"idid",level:4},{value:"<code>startDate</code><Bullet /><code>Date</code>",id:"startdatedate",level:4},{value:"<code>withdrawDate</code><Bullet /><code>Date</code>",id:"withdrawdatedate",level:4},{value:"<code>endDate</code><Bullet /><code>Date</code>",id:"enddatedate",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:"<code>Record</code>",id:"record",level:4}],p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:p,SpecifiedBy:u,Badge:m};function k(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Semester implements Record {\n  id: ID!\n  startDate: Date\n  withdrawDate: Date\n  endDate: Date\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"idid"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"id")),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/group-by/common/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"startdatedate"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"startDate")),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/group-by/common/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date"))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"withdrawdatedate"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"withdrawDate")),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/group-by/common/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date"))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"enddatedate"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"endDate")),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/group-by/common/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date"))),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"record"},(0,o.kt)("a",{parentName:"h4",href:"/group-by/common/interfaces/record"},(0,o.kt)("inlineCode",{parentName:"a"},"Record"))),(0,o.kt)("blockquote",null))}k.isMDXComponent=!0}}]);