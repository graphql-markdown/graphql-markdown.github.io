"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7196],{81632:(e,a,r)=>{r.r(a),r.d(a,{Badge:()=>g,Bullet:()=>i,Details:()=>x,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>l,default:()=>b,frontMatter:()=>t,metadata:()=>n,toc:()=>f});var c=r(74848),d=r(28453),s=r(96540);const t={pagination_next:null,pagination_prev:null,id:"character-edge",title:"CharacterEdge"},l=void 0,n={id:"types/objects/character-edge",title:"CharacterEdge",description:"Character connection edge",source:"@site/examples/default/types/objects/character-edge.mdx",sourceDirName:"types/objects",slug:"/types/objects/character-edge",permalink:"/examples/default/types/objects/character-edge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"character-edge",title:"CharacterEdge"},sidebar:"schemaSidebar"},o={},i=()=>{const e={span:"span",...(0,d.R)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const a={a:"a",...(0,d.R)()};return(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const a={span:"span",...(0,d.R)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(a.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:a,children:r,startOpen:t=!1})=>{const l={details:"details",summary:"summary",...(0,d.R)()},[n,o]=(0,s.useState)(t);return(0,c.jsxs)(l.details,{...n?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)(l.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:n?e:a}),n&&r]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>CharacterEdge.<b>node</b></code><Bullet></Bullet><code>Character</code> <Badge class="badge badge--secondary"></Badge>',id:"characteredgenodecharacter-",level:4},{value:'<code>CharacterEdge.<b>id</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"characteredgeidint-",level:4},{value:'<code>CharacterEdge.<b>role</b></code><Bullet></Bullet><code>CharacterRole</code> <Badge class="badge badge--secondary"></Badge>',id:"characteredgerolecharacterrole-",level:4},{value:'<code>CharacterEdge.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"characteredgenamestring-",level:4},{value:'<code>CharacterEdge.<b>voiceActors</b></code><Bullet></Bullet><code>[Staff]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"characteredgevoiceactorsstaff--",level:4},{value:'<code>CharacterEdge.voiceActors.<b>language</b></code><Bullet></Bullet><code>StaffLanguage</code> <Badge class="badge badge--secondary"></Badge>',id:"characteredgevoiceactorslanguagestafflanguage-",level:5},{value:'<code>CharacterEdge.voiceActors.<b>sort</b></code><Bullet></Bullet><code>[StaffSort]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"characteredgevoiceactorssortstaffsort--",level:5},{value:'<code>CharacterEdge.<b>voiceActorRoles</b></code><Bullet></Bullet><code>[StaffRoleType]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"characteredgevoiceactorrolesstaffroletype--",level:4},{value:'<code>CharacterEdge.voiceActorRoles.<b>language</b></code><Bullet></Bullet><code>StaffLanguage</code> <Badge class="badge badge--secondary"></Badge>',id:"characteredgevoiceactorroleslanguagestafflanguage-",level:5},{value:'<code>CharacterEdge.voiceActorRoles.<b>sort</b></code><Bullet></Bullet><code>[StaffSort]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"characteredgevoiceactorrolessortstaffsort--",level:5},{value:'<code>CharacterEdge.<b>media</b></code><Bullet></Bullet><code>[Media]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"characteredgemediamedia--",level:4},{value:'<code>CharacterEdge.<b>favouriteOrder</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"characteredgefavouriteorderint-",level:4},{value:"Member Of",id:"member-of",level:3}];function j(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,d.R)(),...e.components},{Head:r}=a;return r||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r,{children:[(0,c.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,c.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,c.jsx)(a.p,{children:"Character connection edge"}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-graphql",children:"type CharacterEdge {\n  node: Character\n  id: Int\n  role: CharacterRole\n  name: String\n  voiceActors(language: StaffLanguage, sort: [StaffSort]): [Staff]\n  voiceActorRoles(language: StaffLanguage, sort: [StaffSort]): [StaffRoleType]\n  media: [Media]\n  favouriteOrder: Int\n}\n"})}),"\n",(0,c.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(a.h4,{id:"characteredgenodecharacter-",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CharacterEdge.",(0,c.jsx)("b",{children:"node"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(a.a,{href:"/examples/default/types/objects/character",children:(0,c.jsx)(a.code,{children:"Character"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsxs)(a.h4,{id:"characteredgeidint-",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CharacterEdge.",(0,c.jsx)("b",{children:"id"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,c.jsx)(a.code,{children:"Int"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(a.p,{children:"The id of the connection"}),"\n",(0,c.jsxs)(a.h4,{id:"characteredgerolecharacterrole-",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CharacterEdge.",(0,c.jsx)("b",{children:"role"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(a.a,{href:"/examples/default/types/enums/character-role",children:(0,c.jsx)(a.code,{children:"CharacterRole"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,c.jsx)(a.p,{children:"The characters role in the media"}),"\n",(0,c.jsxs)(a.h4,{id:"characteredgenamestring-",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CharacterEdge.",(0,c.jsx)("b",{children:"name"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(a.a,{href:"/examples/default/types/scalars/string",children:(0,c.jsx)(a.code,{children:"String"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(a.p,{children:"Media specific character name"}),"\n",(0,c.jsxs)(a.h4,{id:"characteredgevoiceactorsstaff--",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CharacterEdge.",(0,c.jsx)("b",{children:"voiceActors"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(a.a,{href:"/examples/default/types/objects/staff",children:(0,c.jsx)(a.code,{children:"[Staff]"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsx)(a.p,{children:"The voice actors of the character"}),"\n",(0,c.jsxs)(a.h5,{id:"characteredgevoiceactorslanguagestafflanguage-",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CharacterEdge.voiceActors.",(0,c.jsx)("b",{children:"language"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(a.a,{href:"/examples/default/types/enums/staff-language",children:(0,c.jsx)(a.code,{children:"StaffLanguage"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,c.jsxs)(a.h5,{id:"characteredgevoiceactorssortstaffsort--",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CharacterEdge.voiceActors.",(0,c.jsx)("b",{children:"sort"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(a.a,{href:"/examples/default/types/enums/staff-sort",children:(0,c.jsx)(a.code,{children:"[StaffSort]"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,c.jsxs)(a.h4,{id:"characteredgevoiceactorrolesstaffroletype--",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CharacterEdge.",(0,c.jsx)("b",{children:"voiceActorRoles"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(a.a,{href:"/examples/default/types/objects/staff-role-type",children:(0,c.jsx)(a.code,{children:"[StaffRoleType]"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsx)(a.p,{children:"The voice actors of the character with role date"}),"\n",(0,c.jsxs)(a.h5,{id:"characteredgevoiceactorroleslanguagestafflanguage-",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CharacterEdge.voiceActorRoles.",(0,c.jsx)("b",{children:"language"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(a.a,{href:"/examples/default/types/enums/staff-language",children:(0,c.jsx)(a.code,{children:"StaffLanguage"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,c.jsxs)(a.h5,{id:"characteredgevoiceactorrolessortstaffsort--",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CharacterEdge.voiceActorRoles.",(0,c.jsx)("b",{children:"sort"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(a.a,{href:"/examples/default/types/enums/staff-sort",children:(0,c.jsx)(a.code,{children:"[StaffSort]"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,c.jsxs)(a.h4,{id:"characteredgemediamedia--",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CharacterEdge.",(0,c.jsx)("b",{children:"media"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(a.a,{href:"/examples/default/types/objects/media",children:(0,c.jsx)(a.code,{children:"[Media]"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsx)(a.p,{children:"The media the character is in"}),"\n",(0,c.jsxs)(a.h4,{id:"characteredgefavouriteorderint-",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CharacterEdge.",(0,c.jsx)("b",{children:"favouriteOrder"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,c.jsx)(a.code,{children:"Int"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(a.p,{children:"The order the character should be displayed from the users favourites"}),"\n",(0,c.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,c.jsxs)(a.p,{children:[(0,c.jsx)(a.a,{href:"/examples/default/types/objects/character-connection",children:(0,c.jsx)(a.code,{children:"CharacterConnection"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,c.jsx)(a,{...e,children:(0,c.jsx)(j,{...e})}):j(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>t,x:()=>l});var c=r(96540);const d={},s=c.createContext(d);function t(e){const a=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),c.createElement(s.Provider,{value:a},e.children)}}}]);