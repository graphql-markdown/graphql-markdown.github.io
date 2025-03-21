"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["2029"],{46860:function(e,t,a){a.r(t),a.d(t,{Bullet:()=>o,SpecifiedBy:()=>y,Badge:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>i,Details:()=>h,assets:()=>d,toc:()=>v,contentTitle:()=>c});var i=JSON.parse('{"id":"operations/mutations/save-activity-reply","title":"SaveActivityReply","description":"Create or update an activity reply","source":"@site/examples/default/operations/mutations/save-activity-reply.mdx","sourceDirName":"operations/mutations","slug":"/operations/mutations/save-activity-reply","permalink":"/examples/default/operations/mutations/save-activity-reply","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"save-activity-reply","title":"SaveActivityReply"},"sidebar":"defaultSidebar","previous":{"title":"RateReview","permalink":"/examples/default/operations/mutations/rate-review"},"next":{"title":"SaveListActivity","permalink":"/examples/default/operations/mutations/save-list-activity"}}'),n=a("85893"),l=a("50065"),s=a("67294");let r={id:"save-activity-reply",title:"SaveActivityReply"},c=void 0,d={},o=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25CF\xa0"})}),y=e=>(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:t,children:a,startOpen:i=!1})=>{let[l,r]=(0,s.useState)(i);return(0,n.jsxs)("details",{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)("summary",{onClick:e=>{e.preventDefault(),r(e=>!e)},style:{listStyle:"none"},children:l?e:t}),l&&a]})},v=[{value:"Arguments",id:"arguments",level:3},{value:'<code>SaveActivityReply.<b>id</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary "></Badge>',id:"saveactivityreplyidint-",level:4},{value:'<code>SaveActivityReply.<b>activityId</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary "></Badge>',id:"saveactivityreplyactivityidint-",level:4},{value:'<code>SaveActivityReply.<b>text</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary "></Badge>',id:"saveactivityreplytextstring-",level:4},{value:'<code>SaveActivityReply.<b>asMod</b></code><Bullet></Bullet><code><b>Boolean</b></code> <Badge class="badge badge--secondary "></Badge>',id:"saveactivityreplyasmodboolean-",level:4},{value:"Type",id:"type",level:3},{value:'<code><b>ActivityReply</b></code> <Badge class="badge badge--secondary "></Badge>',id:"activityreply-",level:4}];function x(e){let t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...e.components},{Head:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a,{children:[(0,n.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,n.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,n.jsx)(t.p,{children:"Create or update an activity reply"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"SaveActivityReply(\n  id: Int\n  activityId: Int\n  text: String\n  asMod: Boolean\n): ActivityReply\n"})}),"\n",(0,n.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(t.h4,{id:"saveactivityreplyidint-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveActivityReply.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)("code",{style:{fontWeight:"normal"},children:(0,n.jsx)("b",{children:"Int"})})})," ",(0,n.jsx)(p,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"The activity reply id, required for updating"}),"\n",(0,n.jsxs)(t.h4,{id:"saveactivityreplyactivityidint-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveActivityReply.",(0,n.jsx)("b",{children:"activityId"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)("code",{style:{fontWeight:"normal"},children:(0,n.jsx)("b",{children:"Int"})})})," ",(0,n.jsx)(p,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"The id of the parent activity being replied to"}),"\n",(0,n.jsxs)(t.h4,{id:"saveactivityreplytextstring-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveActivityReply.",(0,n.jsx)("b",{children:"text"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/string",children:(0,n.jsx)("code",{style:{fontWeight:"normal"},children:(0,n.jsx)("b",{children:"String"})})})," ",(0,n.jsx)(p,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"The reply text"}),"\n",(0,n.jsxs)(t.h4,{id:"saveactivityreplyasmodboolean-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveActivityReply.",(0,n.jsx)("b",{children:"asMod"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/boolean",children:(0,n.jsx)("code",{style:{fontWeight:"normal"},children:(0,n.jsx)("b",{children:"Boolean"})})})," ",(0,n.jsx)(p,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"If the reply should be sent from the Moderator account (Mod Only)"}),"\n",(0,n.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(t.h4,{id:"activityreply-",children:[(0,n.jsx)(t.a,{href:"/examples/default/types/objects/activity-reply",children:(0,n.jsx)("code",{style:{fontWeight:"normal"},children:(0,n.jsx)("b",{children:"ActivityReply"})})})," ",(0,n.jsx)(p,{class:"badge badge--secondary ",text:"object"})]}),"\n",(0,n.jsx)(t.p,{children:"Replay to an activity item"})]})}function u(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},50065:function(e,t,a){a.d(t,{Z:function(){return r},a:function(){return s}});var i=a(67294);let n={},l=i.createContext(n);function s(e){let t=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);