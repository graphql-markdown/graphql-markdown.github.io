"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["2844"],{60096:function(e,t,l){l.r(t),l.d(t,{Bullet:()=>c,SpecifiedBy:()=>g,Badge:()=>u,default:()=>x,frontMatter:()=>o,metadata:()=>n,Details:()=>p,assets:()=>d,toc:()=>h,contentTitle:()=>r});var n=JSON.parse('{"id":"operations/mutations/toggle-like","title":"ToggleLike","description":"Add or remove a like from a likeable type.","source":"@site/examples/default/operations/mutations/toggle-like.mdx","sourceDirName":"operations/mutations","slug":"/operations/mutations/toggle-like","permalink":"/examples/default/operations/mutations/toggle-like","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"toggle-like","title":"ToggleLike"},"sidebar":"defaultSidebar","previous":{"title":"ToggleLikeV2","permalink":"/examples/default/operations/mutations/toggle-like-v2"},"next":{"title":"ToggleThreadSubscription","permalink":"/examples/default/operations/mutations/toggle-thread-subscription"}}'),s=l("85893"),a=l("50065"),i=l("67294");let o={id:"toggle-like",title:"ToggleLike"},r=void 0,d={},c=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25CF\xa0"})}),g=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),p=({dataOpen:e,dataClose:t,children:l,startOpen:n=!1})=>{let[a,o]=(0,i.useState)(n);return(0,s.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),o(e=>!e)},style:{listStyle:"none"},children:a?e:t}),a&&l]})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>ToggleLike.<b>id</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary"></Badge>',id:"togglelikeidint-",level:4},{value:'<code>ToggleLike.<b>type</b></code><Bullet></Bullet><code><b>LikeableType</b></code> <Badge class="badge badge--secondary"></Badge>',id:"toggleliketypelikeabletype-",level:4},{value:"Type",id:"type",level:3},{value:'<code><b>User</b></code> <Badge class="badge badge--secondary"></Badge>',id:"user-",level:4}];function m(e){let t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Head:l}=t;return l||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l,{children:[(0,s.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,s.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,s.jsx)(t.p,{children:"Add or remove a like from a likeable type.\nReturns all the users who liked the same model"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"ToggleLike(\n  id: Int\n  type: LikeableType\n): [User]\n"})}),"\n",(0,s.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(t.h4,{id:"togglelikeidint-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ToggleLike.",(0,s.jsx)("b",{children:"id"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,s.jsx)("code",{style:{fontWeight:"normal"},children:(0,s.jsx)("b",{children:"Int"})})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.p,{children:"The id of the likeable type"}),"\n",(0,s.jsxs)(t.h4,{id:"toggleliketypelikeabletype-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ToggleLike.",(0,s.jsx)("b",{children:"type"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(t.a,{href:"/examples/default/types/enums/likeable-type",children:(0,s.jsx)("code",{style:{fontWeight:"normal"},children:(0,s.jsx)("b",{children:"LikeableType"})})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsx)(t.p,{children:"The type of model to be un/liked"}),"\n",(0,s.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,s.jsxs)(t.h4,{id:"user-",children:[(0,s.jsx)(t.a,{href:"/examples/default/types/objects/user",children:(0,s.jsx)("code",{style:{fontWeight:"normal"},children:(0,s.jsx)("b",{children:"User"})})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(t.p,{children:"A user"})]})}function x(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},50065:function(e,t,l){l.d(t,{Z:function(){return o},a:function(){return i}});var n=l(67294);let s={},a=n.createContext(s);function i(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);