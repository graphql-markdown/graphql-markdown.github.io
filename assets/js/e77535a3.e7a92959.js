"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["9408"],{96394:function(e,t,n){n.r(t),n.d(t,{Bullet:()=>i,SpecifiedBy:()=>h,Badge:()=>m,default:()=>p,frontMatter:()=>o,metadata:()=>r,Details:()=>u,assets:()=>c,toc:()=>x,contentTitle:()=>l});var r=JSON.parse('{"id":"operations/queries/thread-comment","title":"ThreadComment","description":"Comment query","source":"@site/examples/default/operations/queries/thread-comment.mdx","sourceDirName":"operations/queries","slug":"/operations/queries/thread-comment","permalink":"/examples/default/operations/queries/thread-comment","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"thread-comment","title":"ThreadComment"},"sidebar":"defaultSidebar","previous":{"title":"Studio","permalink":"/examples/default/operations/queries/studio"},"next":{"title":"Thread","permalink":"/examples/default/operations/queries/thread"}}'),d=n("85893"),a=n("50065"),s=n("67294");let o={id:"thread-comment",title:"ThreadComment"},l=void 0,c={},i=()=>(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25CF\xa0"})}),h=e=>(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),m=e=>(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("span",{className:e.class,children:e.text})}),u=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{let[a,o]=(0,s.useState)(r);return(0,d.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)("summary",{onClick:e=>{e.preventDefault(),o(e=>!e)},style:{listStyle:"none"},children:a?e:t}),a&&n]})},x=[{value:"Arguments",id:"arguments",level:3},{value:'<code>ThreadComment.<b>id</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentidint-",level:4},{value:'<code>ThreadComment.<b>threadId</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentthreadidint-",level:4},{value:'<code>ThreadComment.<b>userId</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentuseridint-",level:4},{value:'<code>ThreadComment.<b>sort</b></code><Bullet></Bullet><code><b>[ThreadCommentSort]</b></code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"threadcommentsortthreadcommentsort--",level:4},{value:"Type",id:"type",level:3},{value:'<code><b>ThreadComment</b></code> <Badge class="badge badge--secondary"></Badge>',id:"threadcomment-",level:4}];function b(e){let t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Head:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n,{children:[(0,d.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,d.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,d.jsx)(t.p,{children:"Comment query"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-graphql",children:"ThreadComment(\n  id: Int\n  threadId: Int\n  userId: Int\n  sort: [ThreadCommentSort]\n): [ThreadComment]\n"})}),"\n",(0,d.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,d.jsxs)(t.h4,{id:"threadcommentidint-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadComment.",(0,d.jsx)("b",{children:"id"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)("code",{style:{fontWeight:"normal"},children:(0,d.jsx)("b",{children:"Int"})})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter by the comment id"}),"\n",(0,d.jsxs)(t.h4,{id:"threadcommentthreadidint-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadComment.",(0,d.jsx)("b",{children:"threadId"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)("code",{style:{fontWeight:"normal"},children:(0,d.jsx)("b",{children:"Int"})})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter by the thread id"}),"\n",(0,d.jsxs)(t.h4,{id:"threadcommentuseridint-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadComment.",(0,d.jsx)("b",{children:"userId"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)("code",{style:{fontWeight:"normal"},children:(0,d.jsx)("b",{children:"Int"})})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter by the user id of the comment's creator"}),"\n",(0,d.jsxs)(t.h4,{id:"threadcommentsortthreadcommentsort--",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreadComment.",(0,d.jsx)("b",{children:"sort"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/enums/thread-comment-sort",children:(0,d.jsx)("code",{style:{fontWeight:"normal"},children:(0,d.jsx)("b",{children:"[ThreadCommentSort]"})})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsx)(t.p,{children:"The order the results will be returned in"}),"\n",(0,d.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,d.jsxs)(t.h4,{id:"threadcomment-",children:[(0,d.jsx)(t.a,{href:"/examples/default/types/objects/thread-comment",children:(0,d.jsx)("code",{style:{fontWeight:"normal"},children:(0,d.jsx)("b",{children:"ThreadComment"})})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(t.p,{children:"Forum Thread Comment"})]})}function p(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(b,{...e})}):b(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return s}});var r=n(67294);let d={},a=r.createContext(d);function s(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);