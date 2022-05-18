"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[5284],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=u(n),m=s,p=f["".concat(c,".").concat(m)]||f[m]||d[m]||r;return n?a.createElement(p,i(i({ref:t},l),{},{components:n})):a.createElement(p,i({ref:t},l))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7752:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var a=n(7462),s=n(3366),r=(n(7294),n(3905)),i=["components"],o={id:"staff-submission",title:"StaffSubmission",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},c=void 0,u={unversionedId:"schema/objects/staff-submission",id:"schema/objects/staff-submission",title:"StaffSubmission",description:"A submission for a staff that features in an anime or manga",source:"@site/docs/schema/objects/staff-submission.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/staff-submission",permalink:"/schema/objects/staff-submission",draft:!1,tags:[],version:"current",frontMatter:{id:"staff-submission",title:"StaffSubmission",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},l={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>staff</code> (<code>Staff</code>)",id:"staff-staff",level:4},{value:"<code>submission</code> (<code>Staff</code>)",id:"submission-staff",level:4},{value:"<code>submitter</code> (<code>User</code>)",id:"submitter-user",level:4},{value:"<code>assignee</code> (<code>User</code>)",id:"assignee-user",level:4},{value:"<code>status</code> (<code>SubmissionStatus</code>)",id:"status-submissionstatus",level:4},{value:"<code>notes</code> (<code>String</code>)",id:"notes-string",level:4},{value:"<code>source</code> (<code>String</code>)",id:"source-string",level:4},{value:"<code>locked</code> (<code>Boolean</code>)",id:"locked-boolean",level:4},{value:"<code>createdAt</code> (<code>Int</code>)",id:"createdat-int",level:4}],f={toc:d};function m(e){var t=e.components,n=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A submission for a staff that features in an anime or manga"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type StaffSubmission {\n  id: Int!\n  staff: Staff\n  submission: Staff\n  submitter: User\n  assignee: User\n  status: SubmissionStatus\n  notes: String\n  source: String\n  locked: Boolean\n  createdAt: Int\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"id-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The id of the submission"),(0,r.kt)("h4",{id:"staff-staff"},(0,r.kt)("inlineCode",{parentName:"h4"},"staff")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,r.kt)("inlineCode",{parentName:"a"},"Staff")),")"),(0,r.kt)("p",null,"Staff that the submission is referencing"),(0,r.kt)("h4",{id:"submission-staff"},(0,r.kt)("inlineCode",{parentName:"h4"},"submission")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,r.kt)("inlineCode",{parentName:"a"},"Staff")),")"),(0,r.kt)("p",null,"The staff submission changes"),(0,r.kt)("h4",{id:"submitter-user"},(0,r.kt)("inlineCode",{parentName:"h4"},"submitter")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,r.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,r.kt)("p",null,"Submitter for the submission"),(0,r.kt)("h4",{id:"assignee-user"},(0,r.kt)("inlineCode",{parentName:"h4"},"assignee")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,r.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,r.kt)("p",null,"Data Mod assigned to handle the submission"),(0,r.kt)("h4",{id:"status-submissionstatus"},(0,r.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/submission-status"},(0,r.kt)("inlineCode",{parentName:"a"},"SubmissionStatus")),")"),(0,r.kt)("p",null,"Status of the submission"),(0,r.kt)("h4",{id:"notes-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"notes")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Inner details of submission status"),(0,r.kt)("h4",{id:"source-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"source")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("h4",{id:"locked-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"locked")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("p",null,"Whether the submission is locked"),(0,r.kt)("h4",{id:"createdat-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))}m.isMDXComponent=!0}}]);