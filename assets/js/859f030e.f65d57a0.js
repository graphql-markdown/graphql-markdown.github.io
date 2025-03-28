"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["6180"],{5944:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>i,assets:()=>s,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"docusaurus/mdx","title":"mdx","description":"formatMDXAdmonition()","source":"@site/api/docusaurus/mdx.md","sourceDirName":"docusaurus","slug":"/docusaurus/mdx","permalink":"/api/docusaurus/mdx","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"mdx","pagination_prev":null,"pagination_next":null,"toc_max_heading_level":2},"sidebar":"defaultSidebar"}'),t=r("85893"),a=r("50065");let d={title:"mdx",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},l=void 0,s={},c=[{value:"formatMDXAdmonition()",id:"formatmdxadmonition",level:2},{value:"Parameters",id:"parameters",level:3},{value:"param",id:"param",level:4},{value:"meta",id:"meta",level:4},{value:"Returns",id:"returns",level:3},{value:"formatMDXBadge()",id:"formatmdxbadge",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"__namedParameters",id:"__namedparameters",level:4},{value:"Returns",id:"returns-1",level:3},{value:"formatMDXBullet()",id:"formatmdxbullet",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"text",id:"text",level:4},{value:"Returns",id:"returns-2",level:3},{value:"formatMDXDetails()",id:"formatmdxdetails",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"param",id:"param-1",level:4},{value:"Returns",id:"returns-3",level:3},{value:"formatMDXLink()",id:"formatmdxlink",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"__namedParameters",id:"__namedparameters-1",level:4},{value:"Returns",id:"returns-4",level:3},{value:"formatMDXNameEntity()",id:"formatmdxnameentity",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"name",id:"name",level:4},{value:"parentType?",id:"parenttype",level:4},{value:"Returns",id:"returns-5",level:3},{value:"formatMDXSpecifiedByLink()",id:"formatmdxspecifiedbylink",level:2},{value:"Parameters",id:"parameters-6",level:3},{value:"url",id:"url",level:4},{value:"Returns",id:"returns-6",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"formatmdxadmonition",children:"formatMDXAdmonition()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function formatMDXAdmonition(param, meta): MDXString\n"})}),"\n",(0,t.jsx)(n.p,{children:"Defined in: mdx/index.ts:40"}),"\n",(0,t.jsx)(n.p,{children:"Formats an admonition block in MDX format"}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.h4,{id:"param",children:"param"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"AdmonitionType"})}),"\n",(0,t.jsx)(n.p,{children:"The admonition configuration object"}),"\n",(0,t.jsx)(n.h4,{id:"meta",children:"meta"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Maybe"}),"<",(0,t.jsx)(n.code,{children:"MetaOptions"}),">"]}),"\n",(0,t.jsx)(n.p,{children:"Optional metadata for generator configuration"}),"\n",(0,t.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"MDXString"})}),"\n",(0,t.jsx)(n.p,{children:"Formatted MDX string for the admonition"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"formatmdxbadge",children:"formatMDXBadge()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function formatMDXBadge(__namedParameters): MDXString\n"})}),"\n",(0,t.jsx)(n.p,{children:"Defined in: mdx/index.ts:28"}),"\n",(0,t.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsx)(n.h4,{id:"__namedparameters",children:"__namedParameters"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Badge"})}),"\n",(0,t.jsx)(n.h3,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"MDXString"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"formatmdxbullet",children:"formatMDXBullet()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function formatMDXBullet(text): MDXString\n"})}),"\n",(0,t.jsx)(n.p,{children:"Defined in: mdx/index.ts:57"}),"\n",(0,t.jsx)(n.p,{children:"Creates a bullet point element in MDX format"}),"\n",(0,t.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsx)(n.h4,{id:"text",children:"text"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"string"})," = ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.p,{children:"Optional text to append after the bullet point"}),"\n",(0,t.jsx)(n.h3,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"MDXString"})}),"\n",(0,t.jsx)(n.p,{children:"Formatted MDX string for the bullet point"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"formatmdxdetails",children:"formatMDXDetails()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function formatMDXDetails(param): MDXString\n"})}),"\n",(0,t.jsx)(n.p,{children:"Defined in: mdx/index.ts:66"}),"\n",(0,t.jsx)(n.p,{children:"Creates a collapsible details section in MDX format"}),"\n",(0,t.jsx)(n.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,t.jsx)(n.h4,{id:"param-1",children:"param"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"CollapsibleOption"})}),"\n",(0,t.jsx)(n.p,{children:"The collapsible section configuration"}),"\n",(0,t.jsx)(n.h3,{id:"returns-3",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"MDXString"})}),"\n",(0,t.jsx)(n.p,{children:"Formatted MDX string for the collapsible section"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"formatmdxlink",children:"formatMDXLink()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function formatMDXLink(__namedParameters): TypeLink\n"})}),"\n",(0,t.jsx)(n.p,{children:"Defined in: mdx/index.ts:96"}),"\n",(0,t.jsx)(n.h3,{id:"parameters-4",children:"Parameters"}),"\n",(0,t.jsx)(n.h4,{id:"__namedparameters-1",children:"__namedParameters"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"TypeLink"})}),"\n",(0,t.jsx)(n.h3,{id:"returns-4",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"TypeLink"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"formatmdxnameentity",children:"formatMDXNameEntity()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function formatMDXNameEntity(name, parentType?): MDXString\n"})}),"\n",(0,t.jsx)(n.p,{children:"Defined in: mdx/index.ts:88"}),"\n",(0,t.jsx)(n.p,{children:"Formats a name entity with optional parent type"}),"\n",(0,t.jsx)(n.h3,{id:"parameters-5",children:"Parameters"}),"\n",(0,t.jsx)(n.h4,{id:"name",children:"name"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"string"})}),"\n",(0,t.jsx)(n.p,{children:"The name to format"}),"\n",(0,t.jsx)(n.h4,{id:"parenttype",children:"parentType?"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Maybe"}),"<",(0,t.jsx)(n.code,{children:"string"}),">"]}),"\n",(0,t.jsx)(n.p,{children:"Optional parent type to prefix the name"}),"\n",(0,t.jsx)(n.h3,{id:"returns-5",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"MDXString"})}),"\n",(0,t.jsx)(n.p,{children:"Formatted MDX string for the name entity"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"formatmdxspecifiedbylink",children:"formatMDXSpecifiedByLink()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function formatMDXSpecifiedByLink(url): MDXString\n"})}),"\n",(0,t.jsx)(n.p,{children:"Defined in: mdx/index.ts:78"}),"\n",(0,t.jsx)(n.p,{children:"Creates a link to the specification documentation"}),"\n",(0,t.jsx)(n.h3,{id:"parameters-6",children:"Parameters"}),"\n",(0,t.jsx)(n.h4,{id:"url",children:"url"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"string"})}),"\n",(0,t.jsx)(n.p,{children:"The URL to the specification"}),"\n",(0,t.jsx)(n.h3,{id:"returns-6",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"MDXString"})}),"\n",(0,t.jsx)(n.p,{children:"Formatted MDX string for the specification link"})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return d}});var i=r(67294);let t={},a=i.createContext(t);function d(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);