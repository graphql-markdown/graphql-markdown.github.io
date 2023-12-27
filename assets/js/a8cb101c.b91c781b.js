"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[734],{3619:(e,s,r)=>{r.r(s),r.d(s,{Badge:()=>h,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>d,default:()=>b,frontMatter:()=>l,metadata:()=>o,toc:()=>x});var n=r(5893),a=r(1151),t=r(7294);const l={pagination_next:null,pagination_prev:null,id:"user",title:"User"},d=void 0,o={id:"queries/user",title:"User",description:"User query",source:"@site/examples/default/queries/user.mdx",sourceDirName:"queries",slug:"/queries/user",permalink:"/examples/default/queries/user",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"user",title:"User"},sidebar:"schemaSidebar"},c={},i=()=>{const e={span:"span",...(0,a.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const s={a:"a",...(0,a.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const s={span:"span",...(0,a.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.span,{className:e.class,children:e.text})})},x=[{value:"Arguments",id:"arguments",level:3},{value:'<code>User.<b>id</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"useridint-",level:4},{value:'<code>User.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"usernamestring-",level:4},{value:'<code>User.<b>isModerator</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"userismoderatorboolean-",level:4},{value:'<code>User.<b>search</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"usersearchstring-",level:4},{value:'<code>User.<b>sort</b></code><Bullet></Bullet><code>[UserSort]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"usersortusersort--",level:4},{value:"Type",id:"type",level:3},{value:'<code>User</code> <Badge class="badge badge--secondary"></Badge>',id:"user-",level:4}],g=({dataOpen:e,dataClose:s,children:r,startOpen:l=!1})=>{const d={details:"details",summary:"summary",...(0,a.a)()},[o,c]=(0,t.useState)(l);return(0,n.jsxs)(d.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(d.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:s}),o&&r]})};function j(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Head:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r,{children:[(0,n.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,n.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,n.jsx)(s.p,{children:"User query"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"User(\n  id: Int\n  name: String\n  isModerator: Boolean\n  search: String\n  sort: [UserSort]\n): User\n"})}),"\n",(0,n.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(s.h4,{id:"useridint-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/examples/default/scalars/int",children:(0,n.jsx)(s.code,{children:"Int"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Filter by the user id"}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"usernamestring-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"name"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/examples/default/scalars/string",children:(0,n.jsx)(s.code,{children:"String"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Filter by the name of the user"}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"userismoderatorboolean-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"isModerator"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/examples/default/scalars/boolean",children:(0,n.jsx)(s.code,{children:"Boolean"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Filter to moderators only if true"}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"usersearchstring-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"search"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/examples/default/scalars/string",children:(0,n.jsx)(s.code,{children:"String"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Filter by search query"}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"usersortusersort--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,n.jsx)("b",{children:"sort"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/examples/default/enums/user-sort",children:(0,n.jsx)(s.code,{children:"[UserSort]"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"The order the results will be returned in"}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(s.h4,{id:"user-",children:[(0,n.jsx)(s.a,{href:"/examples/default/objects/user",children:(0,n.jsx)(s.code,{children:"User"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"A user"}),"\n"]})]})}function b(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},1151:(e,s,r)=>{r.d(s,{Z:()=>d,a:()=>l});var n=r(7294);const a={},t=n.createContext(a);function l(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);