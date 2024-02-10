"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9207],{9391:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>u,Bullet:()=>r,Details:()=>h,SpecifiedBy:()=>f,assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>l,toc:()=>b});var a=n(5893),t=n(1151),i=n(7294);const d={pagination_next:null,pagination_prev:null,id:"staff-submission",title:"StaffSubmission"},o=void 0,l={id:"types/objects/staff-submission",title:"StaffSubmission",description:"A submission for a staff that features in an anime or manga",source:"@site/examples/default/types/objects/staff-submission.mdx",sourceDirName:"types/objects",slug:"/types/objects/staff-submission",permalink:"/examples/default/types/objects/staff-submission",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"staff-submission",title:"StaffSubmission"},sidebar:"schemaSidebar"},c={},r=()=>{const e={span:"span",...(0,t.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},f=e=>{const s={a:"a",...(0,t.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const s={span:"span",...(0,t.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>StaffSubmission.<b>id</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"staffsubmissionidint--",level:4},{value:'<code>StaffSubmission.<b>staff</b></code><Bullet></Bullet><code>Staff</code> <Badge class="badge badge--secondary"></Badge>',id:"staffsubmissionstaffstaff-",level:4},{value:'<code>StaffSubmission.<b>submission</b></code><Bullet></Bullet><code>Staff</code> <Badge class="badge badge--secondary"></Badge>',id:"staffsubmissionsubmissionstaff-",level:4},{value:'<code>StaffSubmission.<b>submitter</b></code><Bullet></Bullet><code>User</code> <Badge class="badge badge--secondary"></Badge>',id:"staffsubmissionsubmitteruser-",level:4},{value:'<code>StaffSubmission.<b>assignee</b></code><Bullet></Bullet><code>User</code> <Badge class="badge badge--secondary"></Badge>',id:"staffsubmissionassigneeuser-",level:4},{value:'<code>StaffSubmission.<b>status</b></code><Bullet></Bullet><code>SubmissionStatus</code> <Badge class="badge badge--secondary"></Badge>',id:"staffsubmissionstatussubmissionstatus-",level:4},{value:'<code>StaffSubmission.<b>notes</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"staffsubmissionnotesstring-",level:4},{value:'<code>StaffSubmission.<b>source</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"staffsubmissionsourcestring-",level:4},{value:'<code>StaffSubmission.<b>locked</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"staffsubmissionlockedboolean-",level:4},{value:'<code>StaffSubmission.<b>createdAt</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"staffsubmissioncreatedatint-",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:s,children:n,startOpen:d=!1})=>{const o={details:"details",summary:"summary",...(0,t.a)()},[l,c]=(0,i.useState)(d);return(0,a.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:s}),l&&n]})};function x(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Head:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n,{children:[(0,a.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,a.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,a.jsx)(s.p,{children:"A submission for a staff that features in an anime or manga"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"type StaffSubmission {\n  id: Int!\n  staff: Staff\n  submission: Staff\n  submitter: User\n  assignee: User\n  status: SubmissionStatus\n  notes: String\n  source: String\n  locked: Boolean\n  createdAt: Int\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"staffsubmissionidint--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StaffSubmission.",(0,a.jsx)("b",{children:"id"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(s.code,{children:"Int!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"The id of the submission"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"staffsubmissionstaffstaff-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StaffSubmission.",(0,a.jsx)("b",{children:"staff"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/objects/staff",children:(0,a.jsx)(s.code,{children:"Staff"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Staff that the submission is referencing"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"staffsubmissionsubmissionstaff-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StaffSubmission.",(0,a.jsx)("b",{children:"submission"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/objects/staff",children:(0,a.jsx)(s.code,{children:"Staff"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"The staff submission changes"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"staffsubmissionsubmitteruser-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StaffSubmission.",(0,a.jsx)("b",{children:"submitter"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/objects/user",children:(0,a.jsx)(s.code,{children:"User"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Submitter for the submission"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"staffsubmissionassigneeuser-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StaffSubmission.",(0,a.jsx)("b",{children:"assignee"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/objects/user",children:(0,a.jsx)(s.code,{children:"User"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Data Mod assigned to handle the submission"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"staffsubmissionstatussubmissionstatus-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StaffSubmission.",(0,a.jsx)("b",{children:"status"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/enums/submission-status",children:(0,a.jsx)(s.code,{children:"SubmissionStatus"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Status of the submission"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"staffsubmissionnotesstring-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StaffSubmission.",(0,a.jsx)("b",{children:"notes"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/string",children:(0,a.jsx)(s.code,{children:"String"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Inner details of submission status"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"staffsubmissionsourcestring-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StaffSubmission.",(0,a.jsx)("b",{children:"source"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/string",children:(0,a.jsx)(s.code,{children:"String"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(s.h4,{id:"staffsubmissionlockedboolean-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StaffSubmission.",(0,a.jsx)("b",{children:"locked"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,a.jsx)(s.code,{children:"Boolean"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Whether the submission is locked"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"staffsubmissioncreatedatint-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StaffSubmission.",(0,a.jsx)("b",{children:"createdAt"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(s.code,{children:"Int"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.blockquote,{children:"\n"}),"\n",(0,a.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/examples/default/types/objects/character-submission-edge",children:(0,a.jsx)(s.code,{children:"CharacterSubmissionEdge"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/objects/internal-page",children:(0,a.jsx)(s.code,{children:"InternalPage"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function m(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>d});var a=n(7294);const t={},i=a.createContext(t);function d(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);