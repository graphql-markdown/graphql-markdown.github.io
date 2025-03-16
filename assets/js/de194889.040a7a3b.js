"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["8868"],{78122:function(e,s,d){d.r(s),d.d(s,{default:()=>o,frontMatter:()=>n,metadata:()=>a,assets:()=>t,toc:()=>r,contentTitle:()=>c});var a=JSON.parse('{"id":"common/objects/semester","title":"semester","description":"No description","source":"@site/examples/group-by/common/objects/semester.md","sourceDirName":"common/objects","slug":"/common/objects/semester","permalink":"/examples/group-by/common/objects/semester","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"department-information","permalink":"/examples/group-by/common/objects/department-information"},"next":{"title":"Queries","permalink":"/examples/group-by/category/queries"}}'),l=d("85893"),m=d("50065");let n={},c=void 0,t={},r=[{value:"Fields",id:"fields",level:3},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Semester.</code><code class="gqlmd-mdx-entity-name">id</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span> <mark class="gqlmd-mdx-badge">non-null</mark> <mark class="gqlmd-mdx-badge">scalar</mark> <mark class="gqlmd-mdx-badge">common</mark>',id:"semesteridid-non-null-scalar-common",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Semester.</code><code class="gqlmd-mdx-entity-name">startDate</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Date</code></span> <mark class="gqlmd-mdx-badge">scalar</mark> <mark class="gqlmd-mdx-badge">common</mark>',id:"semesterstartdatedate-scalar-common",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Semester.</code><code class="gqlmd-mdx-entity-name">endDate</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Date</code></span> <mark class="gqlmd-mdx-badge">scalar</mark> <mark class="gqlmd-mdx-badge">common</mark>',id:"semesterenddatedate-scalar-common",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Semester.</code><code class="gqlmd-mdx-entity-name">courses</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Course!]!</code></span> <mark class="gqlmd-mdx-badge">non-null</mark> <mark class="gqlmd-mdx-badge">object</mark> <mark class="gqlmd-mdx-badge">common</mark> <mark class="gqlmd-mdx-badge">@complexity</mark> <mark class="gqlmd-mdx-badge">@auth</mark>',id:"semestercoursescourse-non-null-object-common-complexity-auth",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Semester.</code><code class="gqlmd-mdx-entity-name">withdrawDate</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Date</code></span> <mark class="gqlmd-mdx-badge">deprecated</mark> <mark class="gqlmd-mdx-badge">scalar</mark> <mark class="gqlmd-mdx-badge">common</mark>',id:"semesterwithdrawdatedate-deprecated-scalar-common",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Record</code></span> <mark class="gqlmd-mdx-badge">interface</mark> <mark class="gqlmd-mdx-badge">common</mark>',id:"record-interface-common",level:4},{value:"Example",id:"example",level:3}];function i(e){let s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,m.a)(),...e.components},{Details:d}=s;return d||function(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.p,{children:"No description"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-graphql",children:"type Semester implements Record {\n  id: ID!\n  startDate: Date\n  withdrawDate: Date @deprecated\n  endDate: Date\n  courses: [Course!]!\n}\n"})}),"\n",(0,l.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,l.jsxs)(s.h4,{id:"semesteridid-non-null-scalar-common",children:[(0,l.jsx)(s.a,{href:"#",children:(0,l.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,l.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"Semester."}),(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"id"})]})}),(0,l.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,l.jsx)(s.a,{href:"/examples/group-by/common/scalars/id",children:(0,l.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"ID!"})})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"non-null"})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"common"})]}),"\n",(0,l.jsxs)(s.h4,{id:"semesterstartdatedate-scalar-common",children:[(0,l.jsx)(s.a,{href:"#",children:(0,l.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,l.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"Semester."}),(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"startDate"})]})}),(0,l.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,l.jsx)(s.a,{href:"/examples/group-by/common/scalars/date",children:(0,l.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Date"})})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"common"})]}),"\n",(0,l.jsxs)(s.h4,{id:"semesterenddatedate-scalar-common",children:[(0,l.jsx)(s.a,{href:"#",children:(0,l.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,l.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"Semester."}),(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"endDate"})]})}),(0,l.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,l.jsx)(s.a,{href:"/examples/group-by/common/scalars/date",children:(0,l.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Date"})})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"common"})]}),"\n",(0,l.jsxs)(s.h4,{id:"semestercoursescourse-non-null-object-common-complexity-auth",children:[(0,l.jsx)(s.a,{href:"#",children:(0,l.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,l.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"Semester."}),(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"courses"})]})}),(0,l.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,l.jsx)(s.a,{href:"/examples/group-by/common/objects/course",children:(0,l.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"[Course!]!"})})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"non-null"})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"object"})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"common"})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"@complexity"})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"@auth"})]}),"\n",(0,l.jsx)(s.p,{children:"Courses for the semester."}),"\n",(0,l.jsxs)(s.p,{children:["This has an additional cost of ",(0,l.jsx)(s.code,{children:"2"})," points."]}),"\n",(0,l.jsxs)(s.p,{children:["This requires the current user to be in ",(0,l.jsx)(s.code,{children:"ADMIN"})," role."]}),"\n",(0,l.jsxs)(d,{class:"gqlmd-mdx-details",children:[(0,l.jsx)("summary",{class:"gqlmd-mdx-details-summary",children:(0,l.jsx)("span",{className:"gqlmd-mdx-details-summary-open",children:"DEPRECATED"})}),(0,l.jsxs)(s.h4,{id:"semesterwithdrawdatedate-deprecated-scalar-common",children:[(0,l.jsx)(s.a,{href:"#",children:(0,l.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,l.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"Semester."}),(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"withdrawDate"})]})}),(0,l.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,l.jsx)(s.a,{href:"/examples/group-by/common/scalars/date",children:(0,l.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Date"})})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"deprecated"})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"common"})]}),(0,l.jsxs)("fieldset",{class:"gqlmd-mdx-admonition-fieldset",children:[(0,l.jsxs)("legend",{class:"gqlmd-mdx-admonition-legend",children:[(0,l.jsx)("span",{class:"gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning",children:"\u26A0\uFE0F"})," ",(0,l.jsx)(s.strong,{children:"DEPRECATED"})]}),(0,l.jsx)("span",{children:(0,l.jsx)(s.p,{children:"No longer supported"})})]})]}),"\n",(0,l.jsx)(s.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,l.jsxs)(s.h4,{id:"record-interface-common",children:[(0,l.jsx)(s.a,{href:"/examples/group-by/common/interfaces/record",children:(0,l.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,l.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Record"})})})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"interface"})," ",(0,l.jsx)("mark",{class:"gqlmd-mdx-badge",children:"common"})]}),"\n",(0,l.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-graphql",children:'{\n  "id": 1,\n  "startDate": "1970-01-01",\n  "courses": [\n    {\n      "title": "GraphQL Markdown"\n    }\n  ]\n}\n'})})]})}function o(e={}){let{wrapper:s}={...(0,m.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(i,{...e})}):i(e)}},50065:function(e,s,d){d.d(s,{Z:function(){return c},a:function(){return n}});var a=d(67294);let l={},m=a.createContext(l);function n(e){let s=a.useContext(m);return a.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:n(e.components),a.createElement(m.Provider,{value:s},e.children)}}}]);