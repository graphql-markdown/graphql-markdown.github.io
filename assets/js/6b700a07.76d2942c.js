"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2764],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,b=m["".concat(i,".").concat(u)]||m[u]||p[u]||o;return a?n.createElement(b,l(l({ref:t},c),{},{components:a})):n.createElement(b,l({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[m]="string"==typeof e?e:r,l[1]=d;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6957:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(7462),r=a(7294),o=a(4137);const l={id:"department-information",title:"DepartmentInformation",hide_table_of_contents:!1},d=void 0,i={unversionedId:"common/objects/department-information",id:"common/objects/department-information",title:"DepartmentInformation",description:"No description",source:"@site/examples/group-by/common/objects/department-information.mdx",sourceDirName:"common/objects",slug:"/common/objects/department-information",permalink:"/examples/group-by/common/objects/department-information",draft:!1,tags:[],version:"current",frontMatter:{id:"department-information",title:"DepartmentInformation",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Course",permalink:"/examples/group-by/common/objects/course"},next:{title:"Semester",permalink:"/examples/group-by/common/objects/semester"}},s={},c=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),u=[{value:"Directives",id:"directives",level:3},{value:"<code>auth</code>",id:"auth",level:4},{value:"Fields",id:"fields",level:3},{value:'<code>id</code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"idid--",level:4},{value:'<code>uuid</code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/> <Badge class="badge badge--danger" text="BETA"/>',id:"uuidstring--",level:4},{value:'<code>email</code><Bullet /><code>EmailAddress</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"emailemailaddress-",level:4},{value:'<code>number</code><Bullet /><code>PhoneNumber</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"numberphonenumber-",level:4},{value:'<code>departmentOpenTime</code><Bullet /><code>Time</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"departmentopentimetime-",level:4},{value:'<code>departmentCloseTime</code><Bullet /><code>Time</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"departmentclosetimetime-",level:4},{value:'<code>website</code><Bullet /><code>URL</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"websiteurl-",level:4},{value:'<code>employees</code><Bullet /><code>[String!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"employeesstring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Record</code> <Badge class="badge badge--secondary" text="interface"/>',id:"record-",level:4}],b=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:d=!1}=e;const[i,s]=(0,r.useState)(d);return(0,o.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&l)},g={Bullet:c,SpecifiedBy:m,Badge:p,toc:u,Details:b};function k(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(p,{class:"badge badge--secondary",text:"@auth",mdxType:"Badge"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type DepartmentInformation implements Record {\n  id: ID!\n  uuid: String\n  email: EmailAddress\n  number: PhoneNumber\n  departmentOpenTime: Time\n  departmentCloseTime: Time\n  website: URL\n  employees(\n    skip: Int\n  ): [String!]!\n}\n")),(0,o.kt)("h3",{id:"directives"},"Directives"),(0,o.kt)("h4",{id:"auth"},(0,o.kt)("a",{parentName:"h4",href:"/examples/group-by/common/directives/auth"},(0,o.kt)("inlineCode",{parentName:"a"},"auth"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This requires the current user to be in ",(0,o.kt)("inlineCode",{parentName:"p"},"ADMIN")," role.")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"idid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"id")),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/group-by/common/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"uuidstring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"uuid")),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/group-by/common/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--danger",text:"BETA",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"emailemailaddress-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"email")),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/group-by/common/scalars/email-address"},(0,o.kt)("inlineCode",{parentName:"a"},"EmailAddress"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"numberphonenumber-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"number")),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/group-by/common/scalars/phone-number"},(0,o.kt)("inlineCode",{parentName:"a"},"PhoneNumber"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"departmentopentimetime-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"departmentOpenTime")),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/group-by/common/scalars/time"},(0,o.kt)("inlineCode",{parentName:"a"},"Time"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"departmentclosetimetime-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"departmentCloseTime")),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/group-by/common/scalars/time"},(0,o.kt)("inlineCode",{parentName:"a"},"Time"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"websiteurl-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"website")),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/group-by/common/scalars/url"},(0,o.kt)("inlineCode",{parentName:"a"},"URL"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"employeesstring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"employees")),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/group-by/common/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"[String!]!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("h5",{parentName:"blockquote",id:"skipint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"skip")),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/examples/group-by/common/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"}))),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"record-"},(0,o.kt)("a",{parentName:"h4",href:"/examples/group-by/common/interfaces/record"},(0,o.kt)("inlineCode",{parentName:"a"},"Record"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}k.isMDXComponent=!0}}]);