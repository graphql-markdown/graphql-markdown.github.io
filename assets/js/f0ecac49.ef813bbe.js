"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[8943],{1686:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>h,Bullet:()=>i,Details:()=>u,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>x});var a=n(5893),d=n(1151),s=n(7294);const r={id:"save-thread-comment",title:"SaveThreadComment",hide_table_of_contents:!1},o=void 0,c={id:"mutations/save-thread-comment",title:"SaveThreadComment",description:"Create or update a thread comment",source:"@site/examples/default/mutations/save-thread-comment.mdx",sourceDirName:"mutations",slug:"/mutations/save-thread-comment",permalink:"/examples/default/mutations/save-thread-comment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"save-thread-comment",title:"SaveThreadComment",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SaveTextActivity",permalink:"/examples/default/mutations/save-text-activity"},next:{title:"SaveThread",permalink:"/examples/default/mutations/save-thread"}},l={},i=()=>{const e={span:"span",...(0,d.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const t={a:"a",...(0,d.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,d.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},x=[{value:"Arguments",id:"arguments",level:3},{value:'<code>SaveThreadComment.<b>id</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"savethreadcommentidint-",level:4},{value:'<code>SaveThreadComment.<b>threadId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"savethreadcommentthreadidint-",level:4},{value:'<code>SaveThreadComment.<b>parentCommentId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"savethreadcommentparentcommentidint-",level:4},{value:'<code>SaveThreadComment.<b>comment</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"savethreadcommentcommentstring-",level:4},{value:'<code>SaveThreadComment.<b>locked</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"savethreadcommentlockedboolean-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ThreadComment</code> <Badge class="badge badge--secondary"></Badge>',id:"threadcomment-",level:4}],u=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{const o={details:"details",summary:"summary",...(0,d.a)()},[c,l]=(0,s.useState)(r);return(0,a.jsxs)(o.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(o.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&n]})};function j(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.a)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n,{children:[(0,a.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,a.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,a.jsx)(t.p,{children:"Create or update a thread comment"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"SaveThreadComment(\n  id: Int\n  threadId: Int\n  parentCommentId: Int\n  comment: String\n  locked: Boolean\n): ThreadComment\n"})}),"\n",(0,a.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(t.h4,{id:"savethreadcommentidint-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveThreadComment.",(0,a.jsx)("b",{children:"id"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/examples/default/scalars/int",children:(0,a.jsx)(t.code,{children:"Int"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The comment id, required for updating"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"savethreadcommentthreadidint-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveThreadComment.",(0,a.jsx)("b",{children:"threadId"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/examples/default/scalars/int",children:(0,a.jsx)(t.code,{children:"Int"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The id of thread the comment belongs to"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"savethreadcommentparentcommentidint-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveThreadComment.",(0,a.jsx)("b",{children:"parentCommentId"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/examples/default/scalars/int",children:(0,a.jsx)(t.code,{children:"Int"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The id of thread comment to reply to"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"savethreadcommentcommentstring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveThreadComment.",(0,a.jsx)("b",{children:"comment"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/examples/default/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The comment markdown text"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"savethreadcommentlockedboolean-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveThreadComment.",(0,a.jsx)("b",{children:"locked"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/examples/default/scalars/boolean",children:(0,a.jsx)(t.code,{children:"Boolean"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"If the comment tree should be locked. (Mod Only)"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,a.jsxs)(t.h4,{id:"threadcomment-",children:[(0,a.jsx)(t.a,{href:"/examples/default/objects/thread-comment",children:(0,a.jsx)(t.code,{children:"ThreadComment"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Forum Thread Comment"}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var a=n(7294);const d={},s=a.createContext(d);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);