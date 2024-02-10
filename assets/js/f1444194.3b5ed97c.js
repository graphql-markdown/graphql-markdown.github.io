"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[628],{4329:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>r,Details:()=>v,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var i=a(5893),n=a(1151),s=a(7294);const l={pagination_next:null,pagination_prev:null,id:"save-list-activity",title:"SaveListActivity"},c=void 0,o={id:"api/mutations/save-list-activity",title:"SaveListActivity",description:"Update list activity (Mod Only)",source:"@site/examples/default/api/mutations/save-list-activity.mdx",sourceDirName:"api/mutations",slug:"/api/mutations/save-list-activity",permalink:"/examples/default/api/mutations/save-list-activity",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"save-list-activity",title:"SaveListActivity"},sidebar:"schemaSidebar"},d={},r=()=>{const e={span:"span",...(0,n.a)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,n.a)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,n.a)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{className:e.class,children:e.text})})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>SaveListActivity.<b>id</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"savelistactivityidint-",level:4},{value:'<code>SaveListActivity.<b>locked</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"savelistactivitylockedboolean-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ListActivity</code> <Badge class="badge badge--secondary"></Badge>',id:"listactivity-",level:4}],v=({dataOpen:e,dataClose:t,children:a,startOpen:l=!1})=>{const c={details:"details",summary:"summary",...(0,n.a)()},[o,d]=(0,s.useState)(l);return(0,i.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(c.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&a]})};function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Head:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a,{children:[(0,i.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,i.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,i.jsx)(t.p,{children:"Update list activity (Mod Only)"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"SaveListActivity(\n  id: Int\n  locked: Boolean\n): ListActivity\n"})}),"\n",(0,i.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,i.jsxs)(t.h4,{id:"savelistactivityidint-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveListActivity.",(0,i.jsx)("b",{children:"id"})]})}),(0,i.jsx)(r,{}),(0,i.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,i.jsx)(t.code,{children:"Int"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"The activity's id, required for updating"}),"\n"]}),"\n",(0,i.jsxs)(t.h4,{id:"savelistactivitylockedboolean-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveListActivity.",(0,i.jsx)("b",{children:"locked"})]})}),(0,i.jsx)(r,{}),(0,i.jsx)(t.a,{href:"/examples/default/types/scalars/boolean",children:(0,i.jsx)(t.code,{children:"Boolean"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"If the activity should be locked. (Mod Only)"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,i.jsxs)(t.h4,{id:"listactivity-",children:[(0,i.jsx)(t.a,{href:"/examples/default/types/objects/list-activity",children:(0,i.jsx)(t.code,{children:"ListActivity"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"User list activity (anime & manga updates)"}),"\n"]})]})}function y(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>c,a:()=>l});var i=a(7294);const n={},s=i.createContext(n);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);