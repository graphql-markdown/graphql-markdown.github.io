"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3660],{1602:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>g,Bullet:()=>i,Details:()=>b,SpecifiedBy:()=>m,assets:()=>t,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>x});var d=s(4848),n=s(8453),c=s(6540);const r={id:"department-information",title:"DepartmentInformation"},l=void 0,o={id:"common/objects/department-information",title:"DepartmentInformation",description:"No description",source:"@site/examples/group-by/common/objects/department-information.mdx",sourceDirName:"common/objects",slug:"/common/objects/department-information",permalink:"/examples/group-by/common/objects/department-information",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"department-information",title:"DepartmentInformation"},sidebar:"schemaSidebar",previous:{title:"Course",permalink:"/examples/group-by/common/objects/course"},next:{title:"Semester",permalink:"/examples/group-by/common/objects/semester"}},t={},i=()=>{const e={span:"span",...(0,n.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const a={a:"a",...(0,n.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const a={span:"span",...(0,n.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.span,{className:e.class,children:e.text})})},x=[{value:"Directives",id:"directives",level:3},{value:"<code>auth</code>",id:"auth",level:4},{value:"Fields",id:"fields",level:3},{value:'<code>id</code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"idid---",level:4},{value:'<code>uuid</code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--danger"></Badge>',id:"uuidstring---",level:4},{value:'<code>email</code><Bullet></Bullet><code>EmailAddress</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"emailemailaddress--",level:4},{value:'<code>number</code><Bullet></Bullet><code>PhoneNumber</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"numberphonenumber--",level:4},{value:'<code>departmentOpenTime</code><Bullet></Bullet><code>Time</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"departmentopentimetime--",level:4},{value:'<code>departmentCloseTime</code><Bullet></Bullet><code>Time</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"departmentclosetimetime--",level:4},{value:'<code>website</code><Bullet></Bullet><code>URL</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"websiteurl--",level:4},{value:'<code>employees</code><Bullet></Bullet><code>[String!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"employeesstring---",level:4},{value:'<code>skip</code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"skipint--",level:5},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Record</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"record--",level:4},{value:"Example",id:"example",level:3}],b=({dataOpen:e,dataClose:a,children:s,startOpen:r=!1})=>{const l={details:"details",summary:"summary",...(0,n.R)()},[o,t]=(0,c.useState)(r);return(0,d.jsxs)(l.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(l.summary,{onClick:e=>{e.preventDefault(),t((e=>!e))},style:{listStyle:"none"},children:o?e:a}),o&&s]})};function h(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g,{class:"badge badge--secondary",text:"@auth"}),"\n",(0,d.jsx)(a.p,{children:"No description"}),"\n",(0,d.jsxs)(a.p,{children:["This requires the current user to be in ",(0,d.jsx)(a.code,{children:"ADMIN"})," role."]}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-graphql",children:"type DepartmentInformation implements Record {\n  id: ID!\n  uuid: String\n  email: EmailAddress\n  number: PhoneNumber\n  departmentOpenTime: Time\n  departmentCloseTime: Time\n  website: URL\n  employees(\n    skip: Int\n  ): [String!]!\n}\n"})}),"\n",(0,d.jsx)(a.h3,{id:"directives",children:"Directives"}),"\n",(0,d.jsx)(a.h4,{id:"auth",children:(0,d.jsx)(a.a,{href:"/examples/group-by/common/directives/auth",children:(0,d.jsx)(a.code,{children:"auth"})})}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsxs)(a.p,{children:["This requires the current user to be in ",(0,d.jsx)(a.code,{children:"ADMIN"})," role."]}),"\n"]}),"\n",(0,d.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(a.h4,{id:"idid---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsx)(a.code,{children:"id"})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/examples/group-by/common/scalars/id",children:(0,d.jsx)(a.code,{children:"ID!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"uuidstring---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsx)(a.code,{children:"uuid"})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/examples/group-by/common/scalars/string",children:(0,d.jsx)(a.code,{children:"String"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"common"})," ",(0,d.jsx)(g,{class:"badge badge--danger",text:"BETA"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"emailemailaddress--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsx)(a.code,{children:"email"})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/examples/group-by/common/scalars/email-address",children:(0,d.jsx)(a.code,{children:"EmailAddress"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"numberphonenumber--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsx)(a.code,{children:"number"})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/examples/group-by/common/scalars/phone-number",children:(0,d.jsx)(a.code,{children:"PhoneNumber"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"departmentopentimetime--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsx)(a.code,{children:"departmentOpenTime"})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/examples/group-by/common/scalars/time",children:(0,d.jsx)(a.code,{children:"Time"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"departmentclosetimetime--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsx)(a.code,{children:"departmentCloseTime"})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/examples/group-by/common/scalars/time",children:(0,d.jsx)(a.code,{children:"Time"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"websiteurl--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsx)(a.code,{children:"website"})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/examples/group-by/common/scalars/url",children:(0,d.jsx)(a.code,{children:"URL"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"employeesstring---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsx)(a.code,{children:"employees"})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/examples/group-by/common/scalars/string",children:(0,d.jsx)(a.code,{children:"[String!]!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsxs)(a.h5,{id:"skipint--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsx)(a.code,{children:"skip"})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/examples/group-by/common/scalars/int",children:(0,d.jsx)(a.code,{children:"Int"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"common"})]}),"\n"]}),"\n",(0,d.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,d.jsxs)(a.h4,{id:"record--",children:[(0,d.jsx)(a.a,{href:"/examples/group-by/common/interfaces/record",children:(0,d.jsx)(a.code,{children:"Record"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"interface"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"common"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsx)(a.h3,{id:"example",children:"Example"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-graphql",children:'{\n  "id": 1,\n  "uuid": "9c5b94b1-35ad-49bb-b118-8e8fc24abf80",\n  "email": "john.doe@corp.com",\n  "number": "1-234-4567",\n  "departmentOpenTime": "01:02:23.453",\n  "departmentCloseTime": "01:02:23.453",\n  "website": "https://tools.ietf.org/html/rfc3986",\n  "employees": [\n    "John Doe"\n  ]\n}\n'})})]})}function u(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},8453:(e,a,s)=>{s.d(a,{R:()=>r,x:()=>l});var d=s(6540);const n={},c=d.createContext(n);function r(e){const a=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),d.createElement(c.Provider,{value:a},e.children)}}}]);