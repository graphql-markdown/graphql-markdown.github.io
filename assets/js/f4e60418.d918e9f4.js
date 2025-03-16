"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["3328"],{24162:function(e,a,s){s.r(a),s.d(a,{default:()=>x,frontMatter:()=>t,metadata:()=>d,assets:()=>r,toc:()=>m,contentTitle:()=>n});var d=JSON.parse('{"id":"types/objects/character-edge","title":"character-edge","description":"Character connection edge","source":"@site/examples/default/types/objects/character-edge.md","sourceDirName":"types/objects","slug":"/types/objects/character-edge","permalink":"/examples/default/types/objects/character-edge","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"character-connection","permalink":"/examples/default/types/objects/character-connection"},"next":{"title":"character-image","permalink":"/examples/default/types/objects/character-image"}}'),l=s("85893"),c=s("50065");let t={},n=void 0,r={},m=[{value:"Fields",id:"fields",level:3},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CharacterEdge.</code><code class="gqlmd-mdx-entity-name">node</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Character</code></span> <mark class="gqlmd-mdx-badge">object</mark>',id:"characteredgenodecharacter-object",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CharacterEdge.</code><code class="gqlmd-mdx-entity-name">id</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"characteredgeidint-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CharacterEdge.</code><code class="gqlmd-mdx-entity-name">role</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CharacterRole</code></span> <mark class="gqlmd-mdx-badge">enum</mark>',id:"characteredgerolecharacterrole-enum",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CharacterEdge.</code><code class="gqlmd-mdx-entity-name">name</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"characteredgenamestring-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CharacterEdge.</code><code class="gqlmd-mdx-entity-name">voiceActors</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Staff]</code></span> <mark class="gqlmd-mdx-badge">list</mark> <mark class="gqlmd-mdx-badge">object</mark>',id:"characteredgevoiceactorsstaff-list-object",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CharacterEdge.voiceActors.</code><code class="gqlmd-mdx-entity-name">language</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StaffLanguage</code></span> <mark class="gqlmd-mdx-badge">enum</mark>',id:"characteredgevoiceactorslanguagestafflanguage-enum",level:5},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CharacterEdge.voiceActors.</code><code class="gqlmd-mdx-entity-name">sort</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[StaffSort]</code></span> <mark class="gqlmd-mdx-badge">list</mark> <mark class="gqlmd-mdx-badge">enum</mark>',id:"characteredgevoiceactorssortstaffsort-list-enum",level:5},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CharacterEdge.</code><code class="gqlmd-mdx-entity-name">voiceActorRoles</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[StaffRoleType]</code></span> <mark class="gqlmd-mdx-badge">list</mark> <mark class="gqlmd-mdx-badge">object</mark>',id:"characteredgevoiceactorrolesstaffroletype-list-object",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CharacterEdge.voiceActorRoles.</code><code class="gqlmd-mdx-entity-name">language</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StaffLanguage</code></span> <mark class="gqlmd-mdx-badge">enum</mark>',id:"characteredgevoiceactorroleslanguagestafflanguage-enum",level:5},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CharacterEdge.voiceActorRoles.</code><code class="gqlmd-mdx-entity-name">sort</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[StaffSort]</code></span> <mark class="gqlmd-mdx-badge">list</mark> <mark class="gqlmd-mdx-badge">enum</mark>',id:"characteredgevoiceactorrolessortstaffsort-list-enum",level:5},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CharacterEdge.</code><code class="gqlmd-mdx-entity-name">media</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Media]</code></span> <mark class="gqlmd-mdx-badge">list</mark> <mark class="gqlmd-mdx-badge">object</mark>',id:"characteredgemediamedia-list-object",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CharacterEdge.</code><code class="gqlmd-mdx-entity-name">favouriteOrder</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"characteredgefavouriteorderint-scalar",level:4},{value:"Member Of",id:"member-of",level:3}];function i(e){let a={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,c.a)(),...e.components},{Head:s}=a;return s||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s,{children:[(0,l.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,l.jsx)("meta",{charset:"utf-8"})]}),"\n",(0,l.jsx)(a.p,{children:"Character connection edge"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-graphql",children:"type CharacterEdge {\n  node: Character\n  id: Int\n  role: CharacterRole\n  name: String\n  voiceActors(language: StaffLanguage, sort: [StaffSort]): [Staff]\n  voiceActorRoles(language: StaffLanguage, sort: [StaffSort]): [StaffRoleType]\n  media: [Media]\n  favouriteOrder: Int\n}\n"})}),"\n",(0,l.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,l.jsxs)(a.h4,{id:"characteredgenodecharacter-object",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,l.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"CharacterEdge."}),(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"node"})]})}),(0,l.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,l.jsx)(a.a,{href:"/examples/default/types/objects/character",children:(0,l.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Character"})})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"object"})]}),"\n",(0,l.jsxs)(a.h4,{id:"characteredgeidint-scalar",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,l.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"CharacterEdge."}),(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"id"})]})}),(0,l.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,l.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,l.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Int"})})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,l.jsx)(a.p,{children:"The id of the connection"}),"\n",(0,l.jsxs)(a.h4,{id:"characteredgerolecharacterrole-enum",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,l.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"CharacterEdge."}),(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"role"})]})}),(0,l.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,l.jsx)(a.a,{href:"/examples/default/types/enums/character-role",children:(0,l.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"CharacterRole"})})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"enum"})]}),"\n",(0,l.jsx)(a.p,{children:"The characters role in the media"}),"\n",(0,l.jsxs)(a.h4,{id:"characteredgenamestring-scalar",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,l.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"CharacterEdge."}),(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"name"})]})}),(0,l.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,l.jsx)(a.a,{href:"/examples/default/types/scalars/string",children:(0,l.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"String"})})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,l.jsx)(a.p,{children:"Media specific character name"}),"\n",(0,l.jsxs)(a.h4,{id:"characteredgevoiceactorsstaff-list-object",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,l.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"CharacterEdge."}),(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"voiceActors"})]})}),(0,l.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,l.jsx)(a.a,{href:"/examples/default/types/objects/staff",children:(0,l.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"[Staff]"})})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"list"})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"object"})]}),"\n",(0,l.jsx)(a.p,{children:"The voice actors of the character"}),"\n",(0,l.jsxs)(a.h5,{id:"characteredgevoiceactorslanguagestafflanguage-enum",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,l.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"CharacterEdge.voiceActors."}),(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"language"})]})}),(0,l.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,l.jsx)(a.a,{href:"/examples/default/types/enums/staff-language",children:(0,l.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"StaffLanguage"})})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"enum"})]}),"\n",(0,l.jsxs)(a.h5,{id:"characteredgevoiceactorssortstaffsort-list-enum",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,l.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"CharacterEdge.voiceActors."}),(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"sort"})]})}),(0,l.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,l.jsx)(a.a,{href:"/examples/default/types/enums/staff-sort",children:(0,l.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"[StaffSort]"})})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"list"})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"enum"})]}),"\n",(0,l.jsxs)(a.h4,{id:"characteredgevoiceactorrolesstaffroletype-list-object",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,l.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"CharacterEdge."}),(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"voiceActorRoles"})]})}),(0,l.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,l.jsx)(a.a,{href:"/examples/default/types/objects/staff-role-type",children:(0,l.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"[StaffRoleType]"})})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"list"})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"object"})]}),"\n",(0,l.jsx)(a.p,{children:"The voice actors of the character with role date"}),"\n",(0,l.jsxs)(a.h5,{id:"characteredgevoiceactorroleslanguagestafflanguage-enum",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,l.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"CharacterEdge.voiceActorRoles."}),(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"language"})]})}),(0,l.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,l.jsx)(a.a,{href:"/examples/default/types/enums/staff-language",children:(0,l.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"StaffLanguage"})})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"enum"})]}),"\n",(0,l.jsxs)(a.h5,{id:"characteredgevoiceactorrolessortstaffsort-list-enum",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,l.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"CharacterEdge.voiceActorRoles."}),(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"sort"})]})}),(0,l.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,l.jsx)(a.a,{href:"/examples/default/types/enums/staff-sort",children:(0,l.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"[StaffSort]"})})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"list"})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"enum"})]}),"\n",(0,l.jsxs)(a.h4,{id:"characteredgemediamedia-list-object",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,l.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"CharacterEdge."}),(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"media"})]})}),(0,l.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,l.jsx)(a.a,{href:"/examples/default/types/objects/media",children:(0,l.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"[Media]"})})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"list"})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"object"})]}),"\n",(0,l.jsx)(a.p,{children:"The media the character is in"}),"\n",(0,l.jsxs)(a.h4,{id:"characteredgefavouriteorderint-scalar",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,l.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"CharacterEdge."}),(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"favouriteOrder"})]})}),(0,l.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,l.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,l.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Int"})})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,l.jsx)(a.p,{children:"The order the character should be displayed from the users favourites"}),"\n",(0,l.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.a,{href:"/examples/default/types/objects/character-connection",children:(0,l.jsx)(a.code,{children:"CharacterConnection"})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"object"})]})]})}function x(e={}){let{wrapper:a}={...(0,c.a)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(i,{...e})}):i(e)}},50065:function(e,a,s){s.d(a,{Z:function(){return n},a:function(){return t}});var d=s(67294);let l={},c=d.createContext(l);function t(e){let a=d.useContext(c);return d.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),d.createElement(c.Provider,{value:a},e.children)}}}]);