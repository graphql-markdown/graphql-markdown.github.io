"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6081],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var s=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var r=s.createContext({}),d=function(e){var t=s.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return s.createElement(r.Provider,{value:t},e.children)},f="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=d(a),u=n,m=f["".concat(r,".").concat(u)]||f[u]||b[u]||o;return a?s.createElement(m,l(l({ref:t},c),{},{components:a})):s.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i[f]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return s.createElement.apply(null,l)}return s.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7634:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var s=a(7462),n=a(7294),o=a(4137);const l={id:"staff-submission",title:"StaffSubmission",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},i=void 0,r={unversionedId:"objects/staff-submission",id:"objects/staff-submission",title:"StaffSubmission",description:"A submission for a staff that features in an anime or manga",source:"@site/examples/default/objects/staff-submission.mdx",sourceDirName:"objects",slug:"/objects/staff-submission",permalink:"/examples/default/objects/staff-submission",draft:!1,tags:[],version:"current",frontMatter:{id:"staff-submission",title:"StaffSubmission",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},c=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>StaffSubmission.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffsubmissionbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffSubmission.<b>staff</b></code><Bullet /><code>Staff</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-staffsubmissionbstaffbcodestaff-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffSubmission.<b>submission</b></code><Bullet /><code>Staff</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-staffsubmissionbsubmissionbcodestaff-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffSubmission.<b>submitter</b></code><Bullet /><code>User</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-staffsubmissionbsubmitterbcodeuser-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffSubmission.<b>assignee</b></code><Bullet /><code>User</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-staffsubmissionbassigneebcodeuser-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffSubmission.<b>status</b></code><Bullet /><code>SubmissionStatus</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-staffsubmissionbstatusbcodesubmissionstatus-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffSubmission.<b>notes</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffsubmissionbnotesbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffSubmission.<b>source</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffsubmissionbsourcebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffSubmission.<b>locked</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffsubmissionblockedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffSubmission.<b>createdAt</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffsubmissionbcreatedatbcodeint-",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:i=!1}=e;const[r,d]=(0,n.useState)(i);return(0,o.kt)("details",(0,s.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},r?t:a),r&&l)},g={Bullet:c,SpecifiedBy:f,Badge:b,toc:u,Details:m};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,s.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A submission for a staff that features in an anime or manga"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type StaffSubmission {\n  id: Int!\n  staff: Staff\n  submission: Staff\n  submitter: User\n  assignee: User\n  status: SubmissionStatus\n  notes: String\n  source: String\n  locked: Boolean\n  createdAt: Int\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-staffsubmissionbidbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StaffSubmission.",(0,o.kt)("b",null,"id"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The id of the submission")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-staffsubmissionbstaffbcodestaff-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StaffSubmission.",(0,o.kt)("b",null,"staff"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/objects/staff"},(0,o.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Staff that the submission is referencing")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-staffsubmissionbsubmissionbcodestaff-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StaffSubmission.",(0,o.kt)("b",null,"submission"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/objects/staff"},(0,o.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The staff submission changes")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-staffsubmissionbsubmitterbcodeuser-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StaffSubmission.",(0,o.kt)("b",null,"submitter"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Submitter for the submission")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-staffsubmissionbassigneebcodeuser-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StaffSubmission.",(0,o.kt)("b",null,"assignee"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Data Mod assigned to handle the submission")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-staffsubmissionbstatusbcodesubmissionstatus-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StaffSubmission.",(0,o.kt)("b",null,"status"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/enums/submission-status"},(0,o.kt)("inlineCode",{parentName:"a"},"SubmissionStatus"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Status of the submission")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-staffsubmissionbnotesbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StaffSubmission.",(0,o.kt)("b",null,"notes"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Inner details of submission status")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-staffsubmissionbsourcebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StaffSubmission.",(0,o.kt)("b",null,"source"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-staffsubmissionblockedbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StaffSubmission.",(0,o.kt)("b",null,"locked"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Whether the submission is locked")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-staffsubmissionbcreatedatbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StaffSubmission.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/examples/default/objects/character-submission-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"CharacterSubmissionEdge"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/examples/default/objects/internal-page"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalPage"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}p.isMDXComponent=!0}}]);