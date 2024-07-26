"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9361],{27917:(e,s,i)=>{i.r(s),i.d(s,{Badge:()=>x,Bullet:()=>l,Details:()=>j,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>a,default:()=>b,frontMatter:()=>d,metadata:()=>o,toc:()=>y});var n=i(74848),t=i(28453),r=i(96540);const d={pagination_next:null,pagination_prev:null,id:"revision-history",title:"RevisionHistory"},a=void 0,o={id:"types/objects/revision-history",title:"RevisionHistory",description:"Feed of mod edit activity",source:"@site/examples/default/types/objects/revision-history.mdx",sourceDirName:"types/objects",slug:"/types/objects/revision-history",permalink:"/examples/default/types/objects/revision-history",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"revision-history",title:"RevisionHistory"},sidebar:"defaultSidebar"},c={},l=()=>{const e={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,t.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const s={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.span,{className:e.class,children:e.text})})},j=({dataOpen:e,dataClose:s,children:i,startOpen:d=!1})=>{const a={details:"details",summary:"summary",...(0,t.R)()},[o,c]=(0,r.useState)(d);return(0,n.jsxs)(a.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(a.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:s}),o&&i]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>RevisionHistory.<b>id</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"revisionhistoryidint--",level:4},{value:'<code>RevisionHistory.<b>action</b></code><Bullet></Bullet><code>RevisionHistoryAction</code> <Badge class="badge badge--secondary"></Badge>',id:"revisionhistoryactionrevisionhistoryaction-",level:4},{value:'<code>RevisionHistory.<b>changes</b></code><Bullet></Bullet><code>Json</code> <Badge class="badge badge--secondary"></Badge>',id:"revisionhistorychangesjson-",level:4},{value:'<code>RevisionHistory.<b>user</b></code><Bullet></Bullet><code>User</code> <Badge class="badge badge--secondary"></Badge>',id:"revisionhistoryuseruser-",level:4},{value:'<code>RevisionHistory.<b>media</b></code><Bullet></Bullet><code>Media</code> <Badge class="badge badge--secondary"></Badge>',id:"revisionhistorymediamedia-",level:4},{value:'<code>RevisionHistory.<b>character</b></code><Bullet></Bullet><code>Character</code> <Badge class="badge badge--secondary"></Badge>',id:"revisionhistorycharactercharacter-",level:4},{value:'<code>RevisionHistory.<b>staff</b></code><Bullet></Bullet><code>Staff</code> <Badge class="badge badge--secondary"></Badge>',id:"revisionhistorystaffstaff-",level:4},{value:'<code>RevisionHistory.<b>studio</b></code><Bullet></Bullet><code>Studio</code> <Badge class="badge badge--secondary"></Badge>',id:"revisionhistorystudiostudio-",level:4},{value:'<code>RevisionHistory.<b>externalLink</b></code><Bullet></Bullet><code>MediaExternalLink</code> <Badge class="badge badge--secondary"></Badge>',id:"revisionhistoryexternallinkmediaexternallink-",level:4},{value:'<code>RevisionHistory.<b>createdAt</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"revisionhistorycreatedatint-",level:4},{value:"Member Of",id:"member-of",level:3}];function f(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components},{Head:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i,{children:[(0,n.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,n.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,n.jsx)(s.p,{children:"Feed of mod edit activity"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"type RevisionHistory {\n  id: Int!\n  action: RevisionHistoryAction\n  changes: Json\n  user: User\n  media: Media\n  character: Character\n  staff: Staff\n  studio: Studio\n  externalLink: MediaExternalLink\n  createdAt: Int\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(s.h4,{id:"revisionhistoryidint--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RevisionHistory.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(s.code,{children:"Int!"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.p,{children:"The id of the media"}),"\n",(0,n.jsxs)(s.h4,{id:"revisionhistoryactionrevisionhistoryaction-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RevisionHistory.",(0,n.jsx)("b",{children:"action"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"/examples/default/types/enums/revision-history-action",children:(0,n.jsx)(s.code,{children:"RevisionHistoryAction"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(s.p,{children:"The action taken on the objects"}),"\n",(0,n.jsxs)(s.h4,{id:"revisionhistorychangesjson-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RevisionHistory.",(0,n.jsx)("b",{children:"changes"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"/examples/default/types/scalars/json",children:(0,n.jsx)(s.code,{children:"Json"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.p,{children:"A JSON object of the fields that changed"}),"\n",(0,n.jsxs)(s.h4,{id:"revisionhistoryuseruser-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RevisionHistory.",(0,n.jsx)("b",{children:"user"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"/examples/default/types/objects/user",children:(0,n.jsx)(s.code,{children:"User"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(s.p,{children:"The user who made the edit to the object"}),"\n",(0,n.jsxs)(s.h4,{id:"revisionhistorymediamedia-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RevisionHistory.",(0,n.jsx)("b",{children:"media"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"/examples/default/types/objects/media",children:(0,n.jsx)(s.code,{children:"Media"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(s.p,{children:"The media the mod feed entry references"}),"\n",(0,n.jsxs)(s.h4,{id:"revisionhistorycharactercharacter-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RevisionHistory.",(0,n.jsx)("b",{children:"character"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"/examples/default/types/objects/character",children:(0,n.jsx)(s.code,{children:"Character"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(s.p,{children:"The character the mod feed entry references"}),"\n",(0,n.jsxs)(s.h4,{id:"revisionhistorystaffstaff-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RevisionHistory.",(0,n.jsx)("b",{children:"staff"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"/examples/default/types/objects/staff",children:(0,n.jsx)(s.code,{children:"Staff"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(s.p,{children:"The staff member the mod feed entry references"}),"\n",(0,n.jsxs)(s.h4,{id:"revisionhistorystudiostudio-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RevisionHistory.",(0,n.jsx)("b",{children:"studio"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"/examples/default/types/objects/studio",children:(0,n.jsx)(s.code,{children:"Studio"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(s.p,{children:"The studio the mod feed entry references"}),"\n",(0,n.jsxs)(s.h4,{id:"revisionhistoryexternallinkmediaexternallink-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RevisionHistory.",(0,n.jsx)("b",{children:"externalLink"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"/examples/default/types/objects/media-external-link",children:(0,n.jsx)(s.code,{children:"MediaExternalLink"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(s.p,{children:"The external link source the mod feed entry references"}),"\n",(0,n.jsxs)(s.h4,{id:"revisionhistorycreatedatint-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RevisionHistory.",(0,n.jsx)("b",{children:"createdAt"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(s.code,{children:"Int"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.p,{children:"When the mod feed entry was created"}),"\n",(0,n.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/examples/default/types/objects/internal-page",children:(0,n.jsx)(s.code,{children:"InternalPage"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>d,x:()=>a});var n=i(96540);const t={},r=n.createContext(t);function d(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);