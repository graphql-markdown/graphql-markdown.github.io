"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[1415],{30109:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>p,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=s(74848),r=s(28453),n=s(96540);const o={id:"staff-role-type",title:"StaffRoleType"},l=void 0,c={id:"types/objects/staff-role-type",title:"StaffRoleType",description:"Voice actor role for a character",source:"@site/examples/default/types/objects/staff-role-type.mdx",sourceDirName:"types/objects",slug:"/types/objects/staff-role-type",permalink:"/examples/default/types/objects/staff-role-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"staff-role-type",title:"StaffRoleType"},sidebar:"defaultSidebar",previous:{title:"StaffName",permalink:"/examples/default/types/objects/staff-name"},next:{title:"StaffStats",permalink:"/examples/default/types/objects/staff-stats"}},d={},i=()=>{const e={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},f=e=>{const t={a:"a",...(0,r.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:s,startOpen:o=!1})=>{const l={details:"details",summary:"summary",...(0,r.R)()},[c,d]=(0,n.useState)(o);return(0,a.jsxs)(l.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(l.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&s]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>StaffRoleType.<b>voiceActor</b></code><Bullet></Bullet><code>Staff</code> <Badge class="badge badge--secondary"></Badge>',id:"staffroletypevoiceactorstaff-",level:4},{value:'<code>StaffRoleType.<b>roleNotes</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"staffroletyperolenotesstring-",level:4},{value:'<code>StaffRoleType.<b>dubGroup</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"staffroletypedubgroupstring-",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s,{children:[(0,a.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,a.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,a.jsx)(t.p,{children:"Voice actor role for a character"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type StaffRoleType {\n  voiceActor: Staff\n  roleNotes: String\n  dubGroup: String\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"staffroletypevoiceactorstaff-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StaffRoleType.",(0,a.jsx)("b",{children:"voiceActor"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/objects/staff",children:(0,a.jsx)(t.code,{children:"Staff"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(t.p,{children:"The voice actors of the character"}),"\n",(0,a.jsxs)(t.h4,{id:"staffroletyperolenotesstring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StaffRoleType.",(0,a.jsx)("b",{children:"roleNotes"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"Notes regarding the VA's role for the character"}),"\n",(0,a.jsxs)(t.h4,{id:"staffroletypedubgroupstring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StaffRoleType.",(0,a.jsx)("b",{children:"dubGroup"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant."}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/examples/default/types/objects/character-edge",children:(0,a.jsx)(t.code,{children:"CharacterEdge"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/objects/media-edge",children:(0,a.jsx)(t.code,{children:"MediaEdge"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>l});var a=s(96540);const r={},n=a.createContext(r);function o(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);