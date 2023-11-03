"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[295],{4645:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>r,Details:()=>h,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var i=t(5893),o=t(1151),a=t(7294);const s={id:"notification",title:"Notification",hide_table_of_contents:!1},c=void 0,l={id:"queries/notification",title:"Notification",description:"Notification query",source:"@site/examples/default/queries/notification.mdx",sourceDirName:"queries",slug:"/queries/notification",permalink:"/examples/default/queries/notification",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"notification",title:"Notification",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Media",permalink:"/examples/default/queries/media"},next:{title:"Page",permalink:"/examples/default/queries/page"}},d={},r=()=>{const e={span:"span",...(0,o.a)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},f=e=>{const n={a:"a",...(0,o.a)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,o.a)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.span,{className:e.class,children:e.text})})},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code>Notification.<b>type</b></code><Bullet></Bullet><code>NotificationType</code> <Badge class="badge badge--secondary"></Badge>',id:"notificationtypenotificationtype-",level:4},{value:'<code>Notification.<b>resetNotificationCount</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"notificationresetnotificationcountboolean-",level:4},{value:'<code>Notification.<b>type_in</b></code><Bullet></Bullet><code>[NotificationType]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"notificationtype_innotificationtype--",level:4},{value:"Type",id:"type",level:3},{value:'<code>NotificationUnion</code> <Badge class="badge badge--secondary"></Badge>',id:"notificationunion-",level:4}],h=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const c={details:"details",summary:"summary",...(0,o.a)()},[l,d]=(0,a.useState)(s);return(0,i.jsxs)(c.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(c.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&t]})};function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t,{children:[(0,i.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,i.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,i.jsx)(n.p,{children:"Notification query"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"Notification(\n  type: NotificationType\n  resetNotificationCount: Boolean\n  type_in: [NotificationType]\n): NotificationUnion\n"})}),"\n",(0,i.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,i.jsxs)(n.h4,{id:"notificationtypenotificationtype-",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["Notification.",(0,i.jsx)("b",{children:"type"})]})}),(0,i.jsx)(r,{}),(0,i.jsx)(n.a,{href:"/examples/default/enums/notification-type",children:(0,i.jsx)(n.code,{children:"NotificationType"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Filter by the type of notifications"}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"notificationresetnotificationcountboolean-",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["Notification.",(0,i.jsx)("b",{children:"resetNotificationCount"})]})}),(0,i.jsx)(r,{}),(0,i.jsx)(n.a,{href:"/examples/default/scalars/boolean",children:(0,i.jsx)(n.code,{children:"Boolean"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Reset the unread notification count to 0 on load"}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"notificationtype_innotificationtype--",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["Notification.",(0,i.jsx)("b",{children:"type_in"})]})}),(0,i.jsx)(r,{}),(0,i.jsx)(n.a,{href:"/examples/default/enums/notification-type",children:(0,i.jsx)(n.code,{children:"[NotificationType]"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Filter by the type of notifications"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,i.jsxs)(n.h4,{id:"notificationunion-",children:[(0,i.jsx)(n.a,{href:"/examples/default/unions/notification-union",children:(0,i.jsx)(n.code,{children:"NotificationUnion"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"union"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Notification union type"}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var i=t(7294);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);