"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3542],{6079:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>o,Details:()=>v,SpecifiedBy:()=>x,assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>r,toc:()=>h});var n=a(4848),i=a(8453),s=a(6540);const c={pagination_next:null,pagination_prev:null,id:"save-text-activity",title:"SaveTextActivity"},l=void 0,r={id:"api/mutations/save-text-activity",title:"SaveTextActivity",description:"Create or update text activity for the currently authenticated user",source:"@site/examples/default/api/mutations/save-text-activity.mdx",sourceDirName:"api/mutations",slug:"/api/mutations/save-text-activity",permalink:"/examples/default/api/mutations/save-text-activity",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"save-text-activity",title:"SaveTextActivity"},sidebar:"schemaSidebar"},d={},o=()=>{const e={span:"span",...(0,i.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},x=e=>{const t={a:"a",...(0,i.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,i.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>SaveTextActivity.<b>id</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"savetextactivityidint-",level:4},{value:'<code>SaveTextActivity.<b>text</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"savetextactivitytextstring-",level:4},{value:'<code>SaveTextActivity.<b>locked</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"savetextactivitylockedboolean-",level:4},{value:"Type",id:"type",level:3},{value:'<code>TextActivity</code> <Badge class="badge badge--secondary"></Badge>',id:"textactivity-",level:4}],v=({dataOpen:e,dataClose:t,children:a,startOpen:c=!1})=>{const l={details:"details",summary:"summary",...(0,i.R)()},[r,d]=(0,s.useState)(c);return(0,n.jsxs)(l.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(l.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&a]})};function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Head:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a,{children:[(0,n.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,n.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,n.jsx)(t.p,{children:"Create or update text activity for the currently authenticated user"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"SaveTextActivity(\n  id: Int\n  text: String\n  locked: Boolean\n): TextActivity\n"})}),"\n",(0,n.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(t.h4,{id:"savetextactivityidint-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveTextActivity.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(t.code,{children:"Int"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The activity's id, required for updating"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"savetextactivitytextstring-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveTextActivity.",(0,n.jsx)("b",{children:"text"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The activity text"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"savetextactivitylockedboolean-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveTextActivity.",(0,n.jsx)("b",{children:"locked"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/boolean",children:(0,n.jsx)(t.code,{children:"Boolean"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"If the activity should be locked. (Mod Only)"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(t.h4,{id:"textactivity-",children:[(0,n.jsx)(t.a,{href:"/examples/default/types/objects/text-activity",children:(0,n.jsx)(t.code,{children:"TextActivity"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"User text activity"}),"\n"]})]})}function y(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>c,x:()=>l});var n=a(6540);const i={},s=n.createContext(i);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);