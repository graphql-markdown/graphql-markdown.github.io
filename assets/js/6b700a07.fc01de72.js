"use strict";(self.webpackChunkgraphql_markdown_website=self.webpackChunkgraphql_markdown_website||[]).push([[2764],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),c=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),s=a,f=u["".concat(m,".").concat(s)]||u[s]||p[s]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9494:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var r=n(7462),a=n(7294),o=n(3905);const i={id:"department-information",title:"DepartmentInformation",hide_table_of_contents:!1},l=void 0,m={unversionedId:"common/objects/department-information",id:"common/objects/department-information",title:"DepartmentInformation",description:"No description",source:"@site/examples/group-by/common/objects/department-information.mdx",sourceDirName:"common/objects",slug:"/common/objects/department-information",permalink:"/group-by/common/objects/department-information",draft:!1,tags:[],version:"current",frontMatter:{id:"department-information",title:"DepartmentInformation",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Objects",permalink:"/group-by/category/objects"},next:{title:"Semester",permalink:"/group-by/common/objects/semester"}},c={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code><Bullet /><code>ID!</code>",id:"idid",level:4},{value:"<code>email</code><Bullet /><code>EmailAddress</code>",id:"emailemailaddress",level:4},{value:"<code>number</code><Bullet /><code>PhoneNumber</code>",id:"numberphonenumber",level:4},{value:"<code>departmentOpenTime</code><Bullet /><code>Time</code>",id:"departmentopentimetime",level:4},{value:"<code>departmentCloseTime</code><Bullet /><code>Time</code>",id:"departmentclosetimetime",level:4},{value:"<code>website</code><Bullet /><code>URL</code>",id:"websiteurl",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:"<code>Record</code>",id:"record",level:4}],p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:p,SpecifiedBy:u,Badge:s};function b(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type DepartmentInformation implements Record {\n  id: ID!\n  email: EmailAddress\n  number: PhoneNumber\n  departmentOpenTime: Time\n  departmentCloseTime: Time\n  website: URL\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"idid"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"id")),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/group-by/common/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"emailemailaddress"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"email")),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/group-by/common/scalars/email-address"},(0,o.kt)("inlineCode",{parentName:"a"},"EmailAddress"))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"numberphonenumber"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"number")),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/group-by/common/scalars/phone-number"},(0,o.kt)("inlineCode",{parentName:"a"},"PhoneNumber"))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"departmentopentimetime"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"departmentOpenTime")),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/group-by/common/scalars/time"},(0,o.kt)("inlineCode",{parentName:"a"},"Time"))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"departmentclosetimetime"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"departmentCloseTime")),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/group-by/common/scalars/time"},(0,o.kt)("inlineCode",{parentName:"a"},"Time"))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"websiteurl"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"website")),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/group-by/common/scalars/url"},(0,o.kt)("inlineCode",{parentName:"a"},"URL"))),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"record"},(0,o.kt)("a",{parentName:"h4",href:"/group-by/common/interfaces/record"},(0,o.kt)("inlineCode",{parentName:"a"},"Record"))),(0,o.kt)("blockquote",null))}b.isMDXComponent=!0}}]);