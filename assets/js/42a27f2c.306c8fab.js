"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["5234"],{92042:function(e,s,r){r.r(s),r.d(s,{Bullet:()=>c,SpecifiedBy:()=>h,Badge:()=>u,default:()=>j,frontMatter:()=>d,metadata:()=>n,Details:()=>x,assets:()=>i,toc:()=>g,contentTitle:()=>o});var n=JSON.parse('{"id":"operations/queries/user","title":"User","description":"User query","source":"@site/examples/default/operations/queries/user.mdx","sourceDirName":"operations/queries","slug":"/operations/queries/user","permalink":"/examples/default/operations/queries/user","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"user","title":"User"},"sidebar":"defaultSidebar","previous":{"title":"Thread","permalink":"/examples/default/operations/queries/thread"},"next":{"title":"Viewer","permalink":"/examples/default/operations/queries/viewer"}}'),t=r("85893"),a=r("50065"),l=r("67294");let d={id:"user",title:"User"},o=void 0,i={},c=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25CF\xa0"})}),h=e=>(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:e.class,children:e.text})}),x=({dataOpen:e,dataClose:s,children:r,startOpen:n=!1})=>{let[a,d]=(0,l.useState)(n);return(0,t.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)("summary",{onClick:e=>{e.preventDefault(),d(e=>!e)},style:{listStyle:"none"},children:a?e:s}),a&&r]})},g=[{value:"Arguments",id:"arguments",level:3},{value:'<code>User.<b>id</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary "></Badge>',id:"useridint-",level:4},{value:'<code>User.<b>name</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary "></Badge>',id:"usernamestring-",level:4},{value:'<code>User.<b>isModerator</b></code><Bullet></Bullet><code><b>Boolean</b></code> <Badge class="badge badge--secondary "></Badge>',id:"userismoderatorboolean-",level:4},{value:'<code>User.<b>search</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary "></Badge>',id:"usersearchstring-",level:4},{value:'<code>User.<b>sort</b></code><Bullet></Bullet><code><b>[UserSort]</b></code> <Badge class="badge badge--secondary "></Badge> <Badge class="badge badge--secondary "></Badge>',id:"usersortusersort--",level:4},{value:"Type",id:"type",level:3},{value:'<code><b>User</b></code> <Badge class="badge badge--secondary "></Badge>',id:"user-",level:4}];function b(e){let s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Head:r}=s;return r||function(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r,{children:[(0,t.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,t.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,t.jsx)(s.p,{children:"User query"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"User(\n  id: Int\n  name: String\n  isModerator: Boolean\n  search: String\n  sort: [UserSort]\n): User\n"})}),"\n",(0,t.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(s.h4,{id:"useridint-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,t.jsx)("b",{children:"id"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"Int"})})})," ",(0,t.jsx)(u,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"Filter by the user id"}),"\n",(0,t.jsxs)(s.h4,{id:"usernamestring-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,t.jsx)("b",{children:"name"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/string",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"String"})})})," ",(0,t.jsx)(u,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"Filter by the name of the user"}),"\n",(0,t.jsxs)(s.h4,{id:"userismoderatorboolean-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,t.jsx)("b",{children:"isModerator"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"Boolean"})})})," ",(0,t.jsx)(u,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"Filter to moderators only if true"}),"\n",(0,t.jsxs)(s.h4,{id:"usersearchstring-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,t.jsx)("b",{children:"search"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/string",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"String"})})})," ",(0,t.jsx)(u,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"Filter by search query"}),"\n",(0,t.jsxs)(s.h4,{id:"usersortusersort--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,t.jsx)("b",{children:"sort"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/enums/user-sort",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"[UserSort]"})})})," ",(0,t.jsx)(u,{class:"badge badge--secondary ",text:"list"})," ",(0,t.jsx)(u,{class:"badge badge--secondary ",text:"enum"})]}),"\n",(0,t.jsx)(s.p,{children:"The order the results will be returned in"}),"\n",(0,t.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,t.jsxs)(s.h4,{id:"user-",children:[(0,t.jsx)(s.a,{href:"/examples/default/types/objects/user",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"User"})})})," ",(0,t.jsx)(u,{class:"badge badge--secondary ",text:"object"})]}),"\n",(0,t.jsx)(s.p,{children:"A user"})]})}function j(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},50065:function(e,s,r){r.d(s,{Z:function(){return d},a:function(){return l}});var n=r(67294);let t={},a=n.createContext(t);function l(e){let s=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);