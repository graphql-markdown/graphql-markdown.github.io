"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[5044],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),s=c(n),u=o,f=s["".concat(p,".").concat(u)]||s[u]||d[u]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:o,i[1]=m;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>m,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={id:"department-information",title:"DepartmentInformation",hide_table_of_contents:!1},i=void 0,m={unversionedId:"group-by/common/objects/department-information",id:"group-by/common/objects/department-information",title:"DepartmentInformation",description:"No description",source:"@site/docs/group-by/common/objects/department-information.mdx",sourceDirName:"group-by/common/objects",slug:"/group-by/common/objects/department-information",permalink:"/group-by/common/objects/department-information",draft:!1,tags:[],version:"current",frontMatter:{id:"department-information",title:"DepartmentInformation",hide_table_of_contents:!1},sidebar:"group",previous:{title:"Roles",permalink:"/group-by/common/enums/roles"},next:{title:"Semester",permalink:"/group-by/common/objects/semester"}},p={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>email</code> (<code>EmailAddress</code>)",id:"email-emailaddress",level:4},{value:"<code>number</code> (<code>PhoneNumber</code>)",id:"number-phonenumber",level:4},{value:"<code>departmentOpenTime</code> (<code>Time</code>)",id:"departmentopentime-time",level:4},{value:"<code>departmentCloseTime</code> (<code>Time</code>)",id:"departmentclosetime-time",level:4}],l={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type DepartmentInformation {\n  email: EmailAddress\n  number: PhoneNumber\n  departmentOpenTime: Time\n  departmentCloseTime: Time\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"email-emailaddress"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"email"))," (",(0,o.kt)("a",{parentName:"h4",href:"/group-by/common/scalars/email-address"},(0,o.kt)("inlineCode",{parentName:"a"},"EmailAddress")),")"),(0,o.kt)("h4",{id:"number-phonenumber"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"number"))," (",(0,o.kt)("a",{parentName:"h4",href:"/group-by/common/scalars/phone-number"},(0,o.kt)("inlineCode",{parentName:"a"},"PhoneNumber")),")"),(0,o.kt)("h4",{id:"departmentopentime-time"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"departmentOpenTime"))," (",(0,o.kt)("a",{parentName:"h4",href:"/group-by/common/scalars/time"},(0,o.kt)("inlineCode",{parentName:"a"},"Time")),")"),(0,o.kt)("h4",{id:"departmentclosetime-time"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"departmentCloseTime"))," (",(0,o.kt)("a",{parentName:"h4",href:"/group-by/common/scalars/time"},(0,o.kt)("inlineCode",{parentName:"a"},"Time")),")"))}d.isMDXComponent=!0}}]);