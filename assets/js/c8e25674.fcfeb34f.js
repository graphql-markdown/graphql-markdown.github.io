"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["4754"],{86258:function(e,t,n){n.r(t),n.d(t,{Bullet:()=>i,SpecifiedBy:()=>m,Badge:()=>h,default:()=>b,frontMatter:()=>o,metadata:()=>a,Details:()=>x,assets:()=>c,toc:()=>u,contentTitle:()=>l});var a=JSON.parse('{"id":"operations/mutations/save-thread-comment","title":"SaveThreadComment","description":"Create or update a thread comment","source":"@site/examples/default/operations/mutations/save-thread-comment.mdx","sourceDirName":"operations/mutations","slug":"/operations/mutations/save-thread-comment","permalink":"/examples/default/operations/mutations/save-thread-comment","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"save-thread-comment","title":"SaveThreadComment"},"sidebar":"defaultSidebar","previous":{"title":"SaveTextActivity","permalink":"/examples/default/operations/mutations/save-text-activity"},"next":{"title":"SaveThread","permalink":"/examples/default/operations/mutations/save-thread"}}'),d=n("85893"),r=n("50065"),s=n("67294");let o={id:"save-thread-comment",title:"SaveThreadComment"},l=void 0,c={},i=()=>(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25CF\xa0"})}),m=e=>(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("span",{className:e.class,children:e.text})}),x=({dataOpen:e,dataClose:t,children:n,startOpen:a=!1})=>{let[r,o]=(0,s.useState)(a);return(0,d.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)("summary",{onClick:e=>{e.preventDefault(),o(e=>!e)},style:{listStyle:"none"},children:r?e:t}),r&&n]})},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code>SaveThreadComment.<b>id</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary"></Badge>',id:"savethreadcommentidint-",level:4},{value:'<code>SaveThreadComment.<b>threadId</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary"></Badge>',id:"savethreadcommentthreadidint-",level:4},{value:'<code>SaveThreadComment.<b>parentCommentId</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary"></Badge>',id:"savethreadcommentparentcommentidint-",level:4},{value:'<code>SaveThreadComment.<b>comment</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary"></Badge>',id:"savethreadcommentcommentstring-",level:4},{value:'<code>SaveThreadComment.<b>locked</b></code><Bullet></Bullet><code><b>Boolean</b></code> <Badge class="badge badge--secondary"></Badge>',id:"savethreadcommentlockedboolean-",level:4},{value:"Type",id:"type",level:3},{value:'<code><b>ThreadComment</b></code> <Badge class="badge badge--secondary"></Badge>',id:"threadcomment-",level:4}];function p(e){let t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Head:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n,{children:[(0,d.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,d.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,d.jsx)(t.p,{children:"Create or update a thread comment"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-graphql",children:"SaveThreadComment(\n  id: Int\n  threadId: Int\n  parentCommentId: Int\n  comment: String\n  locked: Boolean\n): ThreadComment\n"})}),"\n",(0,d.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,d.jsxs)(t.h4,{id:"savethreadcommentidint-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveThreadComment.",(0,d.jsx)("b",{children:"id"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)("code",{style:{fontWeight:"normal"},children:(0,d.jsx)("b",{children:"Int"})})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"The comment id, required for updating"}),"\n",(0,d.jsxs)(t.h4,{id:"savethreadcommentthreadidint-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveThreadComment.",(0,d.jsx)("b",{children:"threadId"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)("code",{style:{fontWeight:"normal"},children:(0,d.jsx)("b",{children:"Int"})})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"The id of thread the comment belongs to"}),"\n",(0,d.jsxs)(t.h4,{id:"savethreadcommentparentcommentidint-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveThreadComment.",(0,d.jsx)("b",{children:"parentCommentId"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)("code",{style:{fontWeight:"normal"},children:(0,d.jsx)("b",{children:"Int"})})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"The id of thread comment to reply to"}),"\n",(0,d.jsxs)(t.h4,{id:"savethreadcommentcommentstring-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveThreadComment.",(0,d.jsx)("b",{children:"comment"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/string",children:(0,d.jsx)("code",{style:{fontWeight:"normal"},children:(0,d.jsx)("b",{children:"String"})})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"The comment markdown text"}),"\n",(0,d.jsxs)(t.h4,{id:"savethreadcommentlockedboolean-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveThreadComment.",(0,d.jsx)("b",{children:"locked"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/boolean",children:(0,d.jsx)("code",{style:{fontWeight:"normal"},children:(0,d.jsx)("b",{children:"Boolean"})})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"If the comment tree should be locked. (Mod Only)"}),"\n",(0,d.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,d.jsxs)(t.h4,{id:"threadcomment-",children:[(0,d.jsx)(t.a,{href:"/examples/default/types/objects/thread-comment",children:(0,d.jsx)("code",{style:{fontWeight:"normal"},children:(0,d.jsx)("b",{children:"ThreadComment"})})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(t.p,{children:"Forum Thread Comment"})]})}function b(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(p,{...e})}):p(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return s}});var a=n(67294);let d={},r=a.createContext(d);function s(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);