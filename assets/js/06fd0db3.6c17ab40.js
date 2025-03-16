"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["3401"],{84483:function(e,a,r){r.r(a),r.d(a,{Bullet:()=>o,SpecifiedBy:()=>h,Badge:()=>x,default:()=>f,frontMatter:()=>n,metadata:()=>t,Details:()=>b,assets:()=>i,toc:()=>j,contentTitle:()=>l});var t=JSON.parse('{"id":"types/objects/media-character","title":"MediaCharacter","description":"Internal - Media characters separated","source":"@site/examples/default/types/objects/media-character.mdx","sourceDirName":"types/objects","slug":"/types/objects/media-character","permalink":"/examples/default/types/objects/media-character","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"media-character","title":"MediaCharacter"},"sidebar":"defaultSidebar","previous":{"title":"ListScoreStats","permalink":"/examples/default/types/objects/list-score-stats"},"next":{"title":"MediaConnection","permalink":"/examples/default/types/objects/media-connection"}}'),c=r("85893"),s=r("50065"),d=r("67294");let n={id:"media-character",title:"MediaCharacter"},l=void 0,i={},o=()=>(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25CF\xa0"})}),h=e=>(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),x=e=>(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{className:e.class,children:e.text})}),b=({dataOpen:e,dataClose:a,children:r,startOpen:t=!1})=>{let[s,n]=(0,d.useState)(t);return(0,c.jsxs)("details",{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)("summary",{onClick:e=>{e.preventDefault(),n(e=>!e)},style:{listStyle:"none"},children:s?e:a}),s&&r]})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>MediaCharacter.<b>id</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary"></Badge>',id:"mediacharacteridint-",level:4},{value:'<code>MediaCharacter.<b>role</b></code><Bullet></Bullet><code><b>CharacterRole</b></code> <Badge class="badge badge--secondary"></Badge>',id:"mediacharacterrolecharacterrole-",level:4},{value:'<code>MediaCharacter.<b>roleNotes</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary"></Badge>',id:"mediacharacterrolenotesstring-",level:4},{value:'<code>MediaCharacter.<b>dubGroup</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary"></Badge>',id:"mediacharacterdubgroupstring-",level:4},{value:'<code>MediaCharacter.<b>characterName</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary"></Badge>',id:"mediacharactercharacternamestring-",level:4},{value:'<code>MediaCharacter.<b>character</b></code><Bullet></Bullet><code><b>Character</b></code> <Badge class="badge badge--secondary"></Badge>',id:"mediacharactercharactercharacter-",level:4},{value:'<code>MediaCharacter.<b>voiceActor</b></code><Bullet></Bullet><code><b>Staff</b></code> <Badge class="badge badge--secondary"></Badge>',id:"mediacharactervoiceactorstaff-",level:4},{value:"Member Of",id:"member-of",level:3}];function m(e){let a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Head:r}=a;return r||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r,{children:[(0,c.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,c.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,c.jsx)(a.p,{children:"Internal - Media characters separated"}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-graphql",children:"type MediaCharacter {\n  id: Int\n  role: CharacterRole\n  roleNotes: String\n  dubGroup: String\n  characterName: String\n  character: Character\n  voiceActor: Staff\n}\n"})}),"\n",(0,c.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(a.h4,{id:"mediacharacteridint-",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaCharacter.",(0,c.jsx)("b",{children:"id"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,c.jsx)("code",{style:{fontWeight:"normal"},children:(0,c.jsx)("b",{children:"Int"})})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(a.p,{children:"The id of the connection"}),"\n",(0,c.jsxs)(a.h4,{id:"mediacharacterrolecharacterrole-",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaCharacter.",(0,c.jsx)("b",{children:"role"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(a.a,{href:"/examples/default/types/enums/character-role",children:(0,c.jsx)("code",{style:{fontWeight:"normal"},children:(0,c.jsx)("b",{children:"CharacterRole"})})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,c.jsx)(a.p,{children:"The characters role in the media"}),"\n",(0,c.jsxs)(a.h4,{id:"mediacharacterrolenotesstring-",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaCharacter.",(0,c.jsx)("b",{children:"roleNotes"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(a.a,{href:"/examples/default/types/scalars/string",children:(0,c.jsx)("code",{style:{fontWeight:"normal"},children:(0,c.jsx)("b",{children:"String"})})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(a.h4,{id:"mediacharacterdubgroupstring-",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaCharacter.",(0,c.jsx)("b",{children:"dubGroup"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(a.a,{href:"/examples/default/types/scalars/string",children:(0,c.jsx)("code",{style:{fontWeight:"normal"},children:(0,c.jsx)("b",{children:"String"})})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(a.h4,{id:"mediacharactercharacternamestring-",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaCharacter.",(0,c.jsx)("b",{children:"characterName"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(a.a,{href:"/examples/default/types/scalars/string",children:(0,c.jsx)("code",{style:{fontWeight:"normal"},children:(0,c.jsx)("b",{children:"String"})})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(a.p,{children:"Media specific character name"}),"\n",(0,c.jsxs)(a.h4,{id:"mediacharactercharactercharacter-",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaCharacter.",(0,c.jsx)("b",{children:"character"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(a.a,{href:"/examples/default/types/objects/character",children:(0,c.jsx)("code",{style:{fontWeight:"normal"},children:(0,c.jsx)("b",{children:"Character"})})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsx)(a.p,{children:"The characters in the media voiced by the parent actor"}),"\n",(0,c.jsxs)(a.h4,{id:"mediacharactervoiceactorstaff-",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaCharacter.",(0,c.jsx)("b",{children:"voiceActor"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(a.a,{href:"/examples/default/types/objects/staff",children:(0,c.jsx)("code",{style:{fontWeight:"normal"},children:(0,c.jsx)("b",{children:"Staff"})})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsx)(a.p,{children:"The voice actor of the character"}),"\n",(0,c.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,c.jsxs)(a.p,{children:[(0,c.jsx)(a.a,{href:"/examples/default/types/objects/media-submission-comparison",children:(0,c.jsx)(a.code,{children:"MediaSubmissionComparison"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){let{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,c.jsx)(a,{...e,children:(0,c.jsx)(m,{...e})}):m(e)}},50065:function(e,a,r){r.d(a,{Z:function(){return n},a:function(){return d}});var t=r(67294);let c={},s=t.createContext(c);function d(e){let a=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);