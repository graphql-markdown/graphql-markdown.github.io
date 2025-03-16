"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["9270"],{18604:function(e,a,s){s.r(a),s.d(a,{default:()=>x,frontMatter:()=>t,metadata:()=>d,assets:()=>r,toc:()=>i,contentTitle:()=>c});var d=JSON.parse('{"id":"operations/queries/character","title":"character","description":"Character query","source":"@site/examples/default/operations/queries/character.md","sourceDirName":"operations/queries","slug":"/operations/queries/character","permalink":"/examples/default/operations/queries/character","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"ani-chart-user","permalink":"/examples/default/operations/queries/ani-chart-user"},"next":{"title":"external-link-source-collection","permalink":"/examples/default/operations/queries/external-link-source-collection"}}'),l=s("85893"),n=s("50065");let t={},c=void 0,r={},i=[{value:"Arguments",id:"arguments",level:3},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Character.</code><code class="gqlmd-mdx-entity-name">id</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"characteridint-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Character.</code><code class="gqlmd-mdx-entity-name">isBirthday</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"characterisbirthdayboolean-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Character.</code><code class="gqlmd-mdx-entity-name">search</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"charactersearchstring-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Character.</code><code class="gqlmd-mdx-entity-name">id_not</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"characterid_notint-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Character.</code><code class="gqlmd-mdx-entity-name">id_in</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Int]</code></span> <mark class="gqlmd-mdx-badge">list</mark> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"characterid_inint-list-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Character.</code><code class="gqlmd-mdx-entity-name">id_not_in</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Int]</code></span> <mark class="gqlmd-mdx-badge">list</mark> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"characterid_not_inint-list-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Character.</code><code class="gqlmd-mdx-entity-name">sort</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CharacterSort]</code></span> <mark class="gqlmd-mdx-badge">list</mark> <mark class="gqlmd-mdx-badge">enum</mark>',id:"charactersortcharactersort-list-enum",level:4},{value:"Type",id:"type",level:3},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Character</code></span> <mark class="gqlmd-mdx-badge">object</mark>',id:"character-object",level:4}];function m(e){let a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Head:s}=a;return s||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s,{children:[(0,l.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,l.jsx)("meta",{charset:"utf-8"})]}),"\n",(0,l.jsx)(a.p,{children:"Character query"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-graphql",children:"Character(\n  id: Int\n  isBirthday: Boolean\n  search: String\n  id_not: Int\n  id_in: [Int]\n  id_not_in: [Int]\n  sort: [CharacterSort]\n): Character\n"})}),"\n",(0,l.jsx)(a.h3,{id:"arguments",children:"Arguments"}),"\n",(0,l.jsxs)(a.h4,{id:"characteridint-scalar",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,l.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"Character."}),(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"id"})]})}),(0,l.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,l.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,l.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Int"})})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,l.jsx)(a.p,{children:"Filter by character id"}),"\n",(0,l.jsxs)(a.h4,{id:"characterisbirthdayboolean-scalar",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,l.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"Character."}),(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"isBirthday"})]})}),(0,l.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,l.jsx)(a.a,{href:"/examples/default/types/scalars/boolean",children:(0,l.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Boolean"})})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,l.jsx)(a.p,{children:"Filter by character by if its their birthday today"}),"\n",(0,l.jsxs)(a.h4,{id:"charactersearchstring-scalar",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,l.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"Character."}),(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"search"})]})}),(0,l.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,l.jsx)(a.a,{href:"/examples/default/types/scalars/string",children:(0,l.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"String"})})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,l.jsx)(a.p,{children:"Filter by search query"}),"\n",(0,l.jsxs)(a.h4,{id:"characterid_notint-scalar",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,l.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"Character."}),(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"id_not"})]})}),(0,l.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,l.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,l.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Int"})})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,l.jsx)(a.p,{children:"Filter by character id"}),"\n",(0,l.jsxs)(a.h4,{id:"characterid_inint-list-scalar",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,l.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"Character."}),(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"id_in"})]})}),(0,l.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,l.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,l.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"[Int]"})})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"list"})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,l.jsx)(a.p,{children:"Filter by character id"}),"\n",(0,l.jsxs)(a.h4,{id:"characterid_not_inint-list-scalar",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,l.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"Character."}),(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"id_not_in"})]})}),(0,l.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,l.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,l.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"[Int]"})})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"list"})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,l.jsx)(a.p,{children:"Filter by character id"}),"\n",(0,l.jsxs)(a.h4,{id:"charactersortcharactersort-list-enum",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,l.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"Character."}),(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"sort"})]})}),(0,l.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,l.jsx)(a.a,{href:"/examples/default/types/enums/character-sort",children:(0,l.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"[CharacterSort]"})})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"list"})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"enum"})]}),"\n",(0,l.jsx)(a.p,{children:"The order the results will be returned in"}),"\n",(0,l.jsx)(a.h3,{id:"type",children:"Type"}),"\n",(0,l.jsxs)(a.h4,{id:"character-object",children:[(0,l.jsx)(a.a,{href:"/examples/default/types/objects/character",children:(0,l.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Character"})})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"object"})]}),"\n",(0,l.jsx)(a.p,{children:"A character that features in an anime or manga"})]})}function x(e={}){let{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}},50065:function(e,a,s){s.d(a,{Z:function(){return c},a:function(){return t}});var d=s(67294);let l={},n=d.createContext(l);function t(e){let a=d.useContext(n);return d.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),d.createElement(n.Provider,{value:a},e.children)}}}]);