"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["1194"],{94:function(e,a,s){s.r(a),s.d(a,{default:()=>o,frontMatter:()=>l,metadata:()=>d,assets:()=>c,toc:()=>r,contentTitle:()=>m});var d=JSON.parse('{"id":"operations/mutations/save-thread-comment","title":"save-thread-comment","description":"Create or update a thread comment","source":"@site/examples/default/operations/mutations/save-thread-comment.md","sourceDirName":"operations/mutations","slug":"/operations/mutations/save-thread-comment","permalink":"/examples/default/operations/mutations/save-thread-comment","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"save-text-activity","permalink":"/examples/default/operations/mutations/save-text-activity"},"next":{"title":"save-thread","permalink":"/examples/default/operations/mutations/save-thread"}}'),n=s("85893"),t=s("50065");let l={},m=void 0,c={},r=[{value:"Arguments",id:"arguments",level:3},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaveThreadComment.</code><code class="gqlmd-mdx-entity-name">id</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"savethreadcommentidint-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaveThreadComment.</code><code class="gqlmd-mdx-entity-name">threadId</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"savethreadcommentthreadidint-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaveThreadComment.</code><code class="gqlmd-mdx-entity-name">parentCommentId</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"savethreadcommentparentcommentidint-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaveThreadComment.</code><code class="gqlmd-mdx-entity-name">comment</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"savethreadcommentcommentstring-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaveThreadComment.</code><code class="gqlmd-mdx-entity-name">locked</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"savethreadcommentlockedboolean-scalar",level:4},{value:"Type",id:"type",level:3},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ThreadComment</code></span> <mark class="gqlmd-mdx-badge">object</mark>',id:"threadcomment-object",level:4}];function i(e){let a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Head:s}=a;return s||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s,{children:[(0,n.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,n.jsx)("meta",{charset:"utf-8"})]}),"\n",(0,n.jsx)(a.p,{children:"Create or update a thread comment"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"SaveThreadComment(\n  id: Int\n  threadId: Int\n  parentCommentId: Int\n  comment: String\n  locked: Boolean\n): ThreadComment\n"})}),"\n",(0,n.jsx)(a.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(a.h4,{id:"savethreadcommentidint-scalar",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,n.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"SaveThreadComment."}),(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"id"})]})}),(0,n.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,n.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Int"})})})," ",(0,n.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,n.jsx)(a.p,{children:"The comment id, required for updating"}),"\n",(0,n.jsxs)(a.h4,{id:"savethreadcommentthreadidint-scalar",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,n.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"SaveThreadComment."}),(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"threadId"})]})}),(0,n.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,n.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Int"})})})," ",(0,n.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,n.jsx)(a.p,{children:"The id of thread the comment belongs to"}),"\n",(0,n.jsxs)(a.h4,{id:"savethreadcommentparentcommentidint-scalar",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,n.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"SaveThreadComment."}),(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"parentCommentId"})]})}),(0,n.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,n.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Int"})})})," ",(0,n.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,n.jsx)(a.p,{children:"The id of thread comment to reply to"}),"\n",(0,n.jsxs)(a.h4,{id:"savethreadcommentcommentstring-scalar",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,n.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"SaveThreadComment."}),(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"comment"})]})}),(0,n.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,n.jsx)(a.a,{href:"/examples/default/types/scalars/string",children:(0,n.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"String"})})})," ",(0,n.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,n.jsx)(a.p,{children:"The comment markdown text"}),"\n",(0,n.jsxs)(a.h4,{id:"savethreadcommentlockedboolean-scalar",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,n.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"SaveThreadComment."}),(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"locked"})]})}),(0,n.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,n.jsx)(a.a,{href:"/examples/default/types/scalars/boolean",children:(0,n.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Boolean"})})})," ",(0,n.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,n.jsx)(a.p,{children:"If the comment tree should be locked. (Mod Only)"}),"\n",(0,n.jsx)(a.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(a.h4,{id:"threadcomment-object",children:[(0,n.jsx)(a.a,{href:"/examples/default/types/objects/thread-comment",children:(0,n.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"ThreadComment"})})})," ",(0,n.jsx)("mark",{class:"gqlmd-mdx-badge",children:"object"})]}),"\n",(0,n.jsx)(a.p,{children:"Forum Thread Comment"})]})}function o(e={}){let{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},50065:function(e,a,s){s.d(a,{Z:function(){return m},a:function(){return l}});var d=s(67294);let n={},t=d.createContext(n);function l(e){let a=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function m(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),d.createElement(t.Provider,{value:a},e.children)}}}]);