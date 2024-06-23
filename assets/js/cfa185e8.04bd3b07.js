"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3524],{22964:(e,t,i)=>{i.r(t),i.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>g,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>r,toc:()=>b});var n=i(74848),s=i(28453),o=i(96540);const a={pagination_next:null,pagination_prev:null,id:"toggle-activity-subscription",title:"ToggleActivitySubscription"},c=void 0,r={id:"api/mutations/toggle-activity-subscription",title:"ToggleActivitySubscription",description:"Toggle the subscription of an activity item",source:"@site/examples/default/api/mutations/toggle-activity-subscription.mdx",sourceDirName:"api/mutations",slug:"/api/mutations/toggle-activity-subscription",permalink:"/examples/default/api/mutations/toggle-activity-subscription",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"toggle-activity-subscription",title:"ToggleActivitySubscription"},sidebar:"schemaSidebar"},l={},d=()=>{const e={span:"span",...(0,s.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,s.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,s.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:t,children:i,startOpen:a=!1})=>{const c={details:"details",summary:"summary",...(0,s.R)()},[r,l]=(0,o.useState)(a);return(0,n.jsxs)(c.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&i]})},b=[{value:"Arguments",id:"arguments",level:3},{value:'<code>ToggleActivitySubscription.<b>activityId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"toggleactivitysubscriptionactivityidint-",level:4},{value:'<code>ToggleActivitySubscription.<b>subscribe</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"toggleactivitysubscriptionsubscribeboolean-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ActivityUnion</code> <Badge class="badge badge--secondary"></Badge>',id:"activityunion-",level:4}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i,{children:[(0,n.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,n.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,n.jsx)(t.p,{children:"Toggle the subscription of an activity item"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"ToggleActivitySubscription(\n  activityId: Int\n  subscribe: Boolean\n): ActivityUnion\n"})}),"\n",(0,n.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(t.h4,{id:"toggleactivitysubscriptionactivityidint-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ToggleActivitySubscription.",(0,n.jsx)("b",{children:"activityId"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(t.code,{children:"Int"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The id of the activity to un/subscribe"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"toggleactivitysubscriptionsubscribeboolean-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ToggleActivitySubscription.",(0,n.jsx)("b",{children:"subscribe"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/boolean",children:(0,n.jsx)(t.code,{children:"Boolean"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Whether to subscribe or unsubscribe from the activity"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(t.h4,{id:"activityunion-",children:[(0,n.jsx)(t.a,{href:"/examples/default/types/unions/activity-union",children:(0,n.jsx)(t.code,{children:"ActivityUnion"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"union"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Activity union type"}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>c});var n=i(96540);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);