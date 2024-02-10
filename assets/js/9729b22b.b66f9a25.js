"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7434],{3888:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>h,Bullet:()=>r,Details:()=>x,SpecifiedBy:()=>g,assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>v});var t=a(5893),n=a(1151),i=a(7294);const c={pagination_next:null,pagination_prev:null,id:"save-message-activity",title:"SaveMessageActivity"},l=void 0,d={id:"api/mutations/save-message-activity",title:"SaveMessageActivity",description:"Create or update message activity for the currently authenticated user",source:"@site/examples/default/api/mutations/save-message-activity.mdx",sourceDirName:"api/mutations",slug:"/api/mutations/save-message-activity",permalink:"/examples/default/api/mutations/save-message-activity",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"save-message-activity",title:"SaveMessageActivity"},sidebar:"schemaSidebar"},o={},r=()=>{const e={span:"span",...(0,n.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const s={a:"a",...(0,n.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const s={span:"span",...(0,n.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.span,{className:e.class,children:e.text})})},v=[{value:"Arguments",id:"arguments",level:3},{value:'<code>SaveMessageActivity.<b>id</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"savemessageactivityidint-",level:4},{value:'<code>SaveMessageActivity.<b>message</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"savemessageactivitymessagestring-",level:4},{value:'<code>SaveMessageActivity.<b>recipientId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"savemessageactivityrecipientidint-",level:4},{value:'<code>SaveMessageActivity.<b>private</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"savemessageactivityprivateboolean-",level:4},{value:'<code>SaveMessageActivity.<b>locked</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"savemessageactivitylockedboolean-",level:4},{value:'<code>SaveMessageActivity.<b>asMod</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"savemessageactivityasmodboolean-",level:4},{value:"Type",id:"type",level:3},{value:'<code>MessageActivity</code> <Badge class="badge badge--secondary"></Badge>',id:"messageactivity-",level:4}],x=({dataOpen:e,dataClose:s,children:a,startOpen:c=!1})=>{const l={details:"details",summary:"summary",...(0,n.a)()},[d,o]=(0,i.useState)(c);return(0,t.jsxs)(l.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(l.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:d?e:s}),d&&a]})};function u(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Head:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,t.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,t.jsx)(s.p,{children:"Create or update message activity for the currently authenticated user"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"SaveMessageActivity(\n  id: Int\n  message: String\n  recipientId: Int\n  private: Boolean\n  locked: Boolean\n  asMod: Boolean\n): MessageActivity\n"})}),"\n",(0,t.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(s.h4,{id:"savemessageactivityidint-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveMessageActivity.",(0,t.jsx)("b",{children:"id"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(s.code,{children:"Int"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"The activity id, required for updating"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"savemessageactivitymessagestring-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveMessageActivity.",(0,t.jsx)("b",{children:"message"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/string",children:(0,t.jsx)(s.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"The activity message text"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"savemessageactivityrecipientidint-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveMessageActivity.",(0,t.jsx)("b",{children:"recipientId"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(s.code,{children:"Int"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"The id of the user the message is being sent to"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"savemessageactivityprivateboolean-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveMessageActivity.",(0,t.jsx)("b",{children:"private"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,t.jsx)(s.code,{children:"Boolean"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"If the activity should be private"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"savemessageactivitylockedboolean-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveMessageActivity.",(0,t.jsx)("b",{children:"locked"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,t.jsx)(s.code,{children:"Boolean"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"If the activity should be locked. (Mod Only)"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"savemessageactivityasmodboolean-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SaveMessageActivity.",(0,t.jsx)("b",{children:"asMod"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,t.jsx)(s.code,{children:"Boolean"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"If the message should be sent from the Moderator account (Mod Only)"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,t.jsxs)(s.h4,{id:"messageactivity-",children:[(0,t.jsx)(s.a,{href:"/examples/default/types/objects/message-activity",children:(0,t.jsx)(s.code,{children:"MessageActivity"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"User message activity"}),"\n"]})]})}function m(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},1151:(e,s,a)=>{a.d(s,{Z:()=>l,a:()=>c});var t=a(7294);const n={},i=t.createContext(n);function c(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);