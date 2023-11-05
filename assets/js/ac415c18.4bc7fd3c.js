"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[620],{7273:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>o,Details:()=>v,SpecifiedBy:()=>x,assets:()=>r,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var n=a(5893),s=a(1151),i=a(7294);const c={id:"save-text-activity",title:"SaveTextActivity",hide_table_of_contents:!1},l=void 0,d={id:"mutations/save-text-activity",title:"SaveTextActivity",description:"Create or update text activity for the currently authenticated user",source:"@site/examples/default/mutations/save-text-activity.mdx",sourceDirName:"mutations",slug:"/mutations/save-text-activity",permalink:"/examples/default/mutations/save-text-activity",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"save-text-activity",title:"SaveTextActivity",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SaveReview",permalink:"/examples/default/mutations/save-review"},next:{title:"SaveThreadComment",permalink:"/examples/default/mutations/save-thread-comment"}},r={},o=()=>{const e={span:"span",...(0,s.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},x=e=>{const t={a:"a",...(0,s.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,s.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>SaveTextActivity.<b>id</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"savetextactivityidint-",level:4},{value:'<code>SaveTextActivity.<b>text</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"savetextactivitytextstring-",level:4},{value:'<code>SaveTextActivity.<b>locked</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"savetextactivitylockedboolean-",level:4},{value:"Type",id:"type",level:3},{value:'<code>TextActivity</code> <Badge class="badge badge--secondary"></Badge>',id:"textactivity-",level:4}],v=({dataOpen:e,dataClose:t,children:a,startOpen:c=!1})=>{const l={details:"details",summary:"summary",...(0,s.a)()},[d,r]=(0,i.useState)(c);return(0,n.jsxs)(l.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(l.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:d?e:t}),d&&a]})};function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Head:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a,{children:[(0,n.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,n.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,n.jsx)(t.p,{children:"Create or update text activity for the currently authenticated user"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"SaveTextActivity(\n  id: Int\n  text: String\n  locked: Boolean\n): TextActivity\n"})}),"\n",(0,n.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(t.h4,{id:"savetextactivityidint-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveTextActivity.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/examples/default/scalars/int",children:(0,n.jsx)(t.code,{children:"Int"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The activity's id, required for updating"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"savetextactivitytextstring-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveTextActivity.",(0,n.jsx)("b",{children:"text"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/examples/default/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The activity text"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"savetextactivitylockedboolean-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveTextActivity.",(0,n.jsx)("b",{children:"locked"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/examples/default/scalars/boolean",children:(0,n.jsx)(t.code,{children:"Boolean"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"If the activity should be locked. (Mod Only)"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(t.h4,{id:"textactivity-",children:[(0,n.jsx)(t.a,{href:"/examples/default/objects/text-activity",children:(0,n.jsx)(t.code,{children:"TextActivity"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"User text activity"}),"\n"]})]})}function y(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>c});var n=a(7294);const s={},i=n.createContext(s);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);