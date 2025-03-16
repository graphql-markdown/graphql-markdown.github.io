"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["1355"],{26726:function(e,s,d){d.r(s),d.d(s,{default:()=>o,frontMatter:()=>t,metadata:()=>l,assets:()=>c,toc:()=>m,contentTitle:()=>r});var l=JSON.parse('{"id":"types/objects/report","title":"report","description":"No description","source":"@site/examples/default/types/objects/report.md","sourceDirName":"types/objects","slug":"/types/objects/report","permalink":"/examples/default/types/objects/report","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"related-media-addition-notification","permalink":"/examples/default/types/objects/related-media-addition-notification"},"next":{"title":"review-connection","permalink":"/examples/default/types/objects/review-connection"}}'),a=d("85893"),n=d("50065");let t={},r=void 0,c={},m=[{value:"Fields",id:"fields",level:3},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Report.</code><code class="gqlmd-mdx-entity-name">id</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span> <mark class="gqlmd-mdx-badge">non-null</mark> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"reportidint-non-null-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Report.</code><code class="gqlmd-mdx-entity-name">reporter</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">User</code></span> <mark class="gqlmd-mdx-badge">object</mark>',id:"reportreporteruser-object",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Report.</code><code class="gqlmd-mdx-entity-name">reported</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">User</code></span> <mark class="gqlmd-mdx-badge">object</mark>',id:"reportreporteduser-object",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Report.</code><code class="gqlmd-mdx-entity-name">reason</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"reportreasonstring-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Report.</code><code class="gqlmd-mdx-entity-name">createdAt</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"reportcreatedatint-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Report.</code><code class="gqlmd-mdx-entity-name">cleared</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"reportclearedboolean-scalar",level:4},{value:"Member Of",id:"member-of",level:3}];function i(e){let s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Head:d}=s;return d||function(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(d,{children:[(0,a.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,a.jsx)("meta",{charset:"utf-8"})]}),"\n",(0,a.jsx)(s.p,{children:"No description"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"type Report {\n  id: Int!\n  reporter: User\n  reported: User\n  reason: String\n  createdAt: Int\n  cleared: Boolean\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"reportidint-non-null-scalar",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,a.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"Report."}),(0,a.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"id"})]})}),(0,a.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,a.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Int!"})})})," ",(0,a.jsx)("mark",{class:"gqlmd-mdx-badge",children:"non-null"})," ",(0,a.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,a.jsxs)(s.h4,{id:"reportreporteruser-object",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,a.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"Report."}),(0,a.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"reporter"})]})}),(0,a.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,a.jsx)(s.a,{href:"/examples/default/types/objects/user",children:(0,a.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,a.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"User"})})})," ",(0,a.jsx)("mark",{class:"gqlmd-mdx-badge",children:"object"})]}),"\n",(0,a.jsxs)(s.h4,{id:"reportreporteduser-object",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,a.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"Report."}),(0,a.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"reported"})]})}),(0,a.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,a.jsx)(s.a,{href:"/examples/default/types/objects/user",children:(0,a.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,a.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"User"})})})," ",(0,a.jsx)("mark",{class:"gqlmd-mdx-badge",children:"object"})]}),"\n",(0,a.jsxs)(s.h4,{id:"reportreasonstring-scalar",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,a.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"Report."}),(0,a.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"reason"})]})}),(0,a.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/string",children:(0,a.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,a.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"String"})})})," ",(0,a.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,a.jsxs)(s.h4,{id:"reportcreatedatint-scalar",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,a.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"Report."}),(0,a.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"createdAt"})]})}),(0,a.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,a.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Int"})})})," ",(0,a.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,a.jsx)(s.p,{children:"When the entry data was created"}),"\n",(0,a.jsxs)(s.h4,{id:"reportclearedboolean-scalar",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,a.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"Report."}),(0,a.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"cleared"})]})}),(0,a.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,a.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,a.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Boolean"})})})," ",(0,a.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,a.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/examples/default/types/objects/internal-page",children:(0,a.jsx)(s.code,{children:"InternalPage"})})," ",(0,a.jsx)("mark",{class:"gqlmd-mdx-badge",children:"object"})]})]})}function o(e={}){let{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},50065:function(e,s,d){d.d(s,{Z:function(){return r},a:function(){return t}});var l=d(67294);let a={},n=l.createContext(a);function t(e){let s=l.useContext(n);return l.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),l.createElement(n.Provider,{value:s},e.children)}}}]);