"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9020],{718:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>m,Bullet:()=>c,Details:()=>p,SpecifiedBy:()=>u,assets:()=>r,contentTitle:()=>d,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var n=s(5893),l=s(1151),a=s(7294);const i={id:"delete-custom-list",title:"DeleteCustomList",hide_table_of_contents:!1},d=void 0,o={id:"mutations/delete-custom-list",title:"DeleteCustomList",description:"Delete a custom list and remove the list entries from it",source:"@site/examples/default/mutations/delete-custom-list.mdx",sourceDirName:"mutations",slug:"/mutations/delete-custom-list",permalink:"/examples/default/mutations/delete-custom-list",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"delete-custom-list",title:"DeleteCustomList",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DeleteActivity",permalink:"/examples/default/mutations/delete-activity"},next:{title:"DeleteMediaListEntry",permalink:"/examples/default/mutations/delete-media-list-entry"}},r={},c=()=>{const e={span:"span",...(0,l.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,l.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const t={span:"span",...(0,l.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>DeleteCustomList.<b>customList</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"deletecustomlistcustomliststring-",level:4},{value:'<code>DeleteCustomList.<b>type</b></code><Bullet></Bullet><code>MediaType</code> <Badge class="badge badge--secondary"></Badge>',id:"deletecustomlisttypemediatype-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Deleted</code> <Badge class="badge badge--secondary"></Badge>',id:"deleted-",level:4}],p=({dataOpen:e,dataClose:t,children:s,startOpen:i=!1})=>{const d={details:"details",summary:"summary",...(0,l.a)()},[o,r]=(0,a.useState)(i);return(0,n.jsxs)(d.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(d.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&s]})};function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s,{children:[(0,n.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,n.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,n.jsx)(t.p,{children:"Delete a custom list and remove the list entries from it"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"DeleteCustomList(\n  customList: String\n  type: MediaType\n): Deleted\n"})}),"\n",(0,n.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(t.h4,{id:"deletecustomlistcustomliststring-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["DeleteCustomList.",(0,n.jsx)("b",{children:"customList"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/examples/default/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The name of the custom list to delete"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"deletecustomlisttypemediatype-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["DeleteCustomList.",(0,n.jsx)("b",{children:"type"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/examples/default/enums/media-type",children:(0,n.jsx)(t.code,{children:"MediaType"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The media list type of the custom list"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(t.h4,{id:"deleted-",children:[(0,n.jsx)(t.a,{href:"/examples/default/objects/deleted",children:(0,n.jsx)(t.code,{children:"Deleted"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Deleted data type"}),"\n"]})]})}function f(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>i});var n=s(7294);const l={},a=n.createContext(l);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);