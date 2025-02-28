"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3580],{18896:(e,t,i)=>{i.r(t),i.d(t,{Badge:()=>f,Bullet:()=>r,Details:()=>x,SpecifiedBy:()=>h,assets:()=>l,contentTitle:()=>s,default:()=>j,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var d=i(74848),a=i(28453),n=i(96540);const o={id:"related-media-addition-notification",title:"RelatedMediaAdditionNotification"},s=void 0,c={id:"types/objects/related-media-addition-notification",title:"RelatedMediaAdditionNotification",description:"Notification for when new media is added to the site",source:"@site/examples/default/types/objects/related-media-addition-notification.mdx",sourceDirName:"types/objects",slug:"/types/objects/related-media-addition-notification",permalink:"/examples/default/types/objects/related-media-addition-notification",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"related-media-addition-notification",title:"RelatedMediaAdditionNotification"},sidebar:"defaultSidebar",previous:{title:"Recommendation",permalink:"/examples/default/types/objects/recommendation"},next:{title:"Report",permalink:"/examples/default/types/objects/report"}},l={},r=()=>{const e={span:"span",...(0,a.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const t={a:"a",...(0,a.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const t={span:"span",...(0,a.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(t.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:t,children:i,startOpen:o=!1})=>{const s={details:"details",summary:"summary",...(0,a.R)()},[c,l]=(0,n.useState)(o);return(0,d.jsxs)(s.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(s.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&i]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>RelatedMediaAdditionNotification.<b>id</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"relatedmediaadditionnotificationidint--",level:4},{value:'<code>RelatedMediaAdditionNotification.<b>type</b></code><Bullet></Bullet><code>NotificationType</code> <Badge class="badge badge--secondary"></Badge>',id:"relatedmediaadditionnotificationtypenotificationtype-",level:4},{value:'<code>RelatedMediaAdditionNotification.<b>mediaId</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"relatedmediaadditionnotificationmediaidint--",level:4},{value:'<code>RelatedMediaAdditionNotification.<b>context</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"relatedmediaadditionnotificationcontextstring-",level:4},{value:'<code>RelatedMediaAdditionNotification.<b>createdAt</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"relatedmediaadditionnotificationcreatedatint-",level:4},{value:'<code>RelatedMediaAdditionNotification.<b>media</b></code><Bullet></Bullet><code>Media</code> <Badge class="badge badge--secondary"></Badge>',id:"relatedmediaadditionnotificationmediamedia-",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function p(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(i,{children:[(0,d.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,d.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,d.jsx)(t.p,{children:"Notification for when new media is added to the site"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-graphql",children:"type RelatedMediaAdditionNotification {\n  id: Int!\n  type: NotificationType\n  mediaId: Int!\n  context: String\n  createdAt: Int\n  media: Media\n}\n"})}),"\n",(0,d.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(t.h4,{id:"relatedmediaadditionnotificationidint--",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["RelatedMediaAdditionNotification.",(0,d.jsx)("b",{children:"id"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(t.code,{children:"Int!"})})," ",(0,d.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"The id of the Notification"}),"\n",(0,d.jsxs)(t.h4,{id:"relatedmediaadditionnotificationtypenotificationtype-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["RelatedMediaAdditionNotification.",(0,d.jsx)("b",{children:"type"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/enums/notification-type",children:(0,d.jsx)(t.code,{children:"NotificationType"})})," ",(0,d.jsx)(f,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsx)(t.p,{children:"The type of notification"}),"\n",(0,d.jsxs)(t.h4,{id:"relatedmediaadditionnotificationmediaidint--",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["RelatedMediaAdditionNotification.",(0,d.jsx)("b",{children:"mediaId"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(t.code,{children:"Int!"})})," ",(0,d.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"The id of the new media"}),"\n",(0,d.jsxs)(t.h4,{id:"relatedmediaadditionnotificationcontextstring-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["RelatedMediaAdditionNotification.",(0,d.jsx)("b",{children:"context"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/string",children:(0,d.jsx)(t.code,{children:"String"})})," ",(0,d.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"The notification context text"}),"\n",(0,d.jsxs)(t.h4,{id:"relatedmediaadditionnotificationcreatedatint-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["RelatedMediaAdditionNotification.",(0,d.jsx)("b",{children:"createdAt"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(t.code,{children:"Int"})})," ",(0,d.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"The time the notification was created at"}),"\n",(0,d.jsxs)(t.h4,{id:"relatedmediaadditionnotificationmediamedia-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["RelatedMediaAdditionNotification.",(0,d.jsx)("b",{children:"media"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/objects/media",children:(0,d.jsx)(t.code,{children:"Media"})})," ",(0,d.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(t.p,{children:"The associated media of the airing schedule"}),"\n",(0,d.jsx)(t.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.a,{href:"/examples/default/types/unions/notification-union",children:(0,d.jsx)(t.code,{children:"NotificationUnion"})})," ",(0,d.jsx)(f,{class:"badge badge--secondary",text:"union"})]})]})}function j(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(p,{...e})}):p(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>s});var d=i(96540);const a={},n=d.createContext(a);function o(e){const t=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),d.createElement(n.Provider,{value:t},e.children)}}}]);