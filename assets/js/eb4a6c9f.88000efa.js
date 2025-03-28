"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["3462"],{61618:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>d,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>s});var i=JSON.parse('{"id":"printer-legacy/badge","title":"badge","description":"Module for handling GraphQL type badges in MDX documentation.","source":"@site/api/printer-legacy/badge.md","sourceDirName":"printer-legacy","slug":"/printer-legacy/badge","permalink":"/api/printer-legacy/badge","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"badge","pagination_prev":null,"pagination_next":null,"toc_max_heading_level":2},"sidebar":"defaultSidebar"}'),t=r("85893"),a=r("50065");let d={title:"badge",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},s=void 0,l={},c=[{value:"CSS_BADGE_CLASSNAME",id:"css_badge_classname",level:2},{value:"Type declaration",id:"type-declaration",level:3},{value:"DEPRECATED",id:"deprecated",level:4},{value:"NON_NULL",id:"non_null",level:4},{value:"RELATION",id:"relation",level:4},{value:"getTypeBadges()",id:"gettypebadges",level:2},{value:"Parameters",id:"parameters",level:3},{value:"type",id:"type",level:4},{value:"groups?",id:"groups",level:4},{value:"Returns",id:"returns",level:3},{value:"printBadge()",id:"printbadge",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"badge",id:"badge",level:4},{value:"options",id:"options",level:4},{value:"Returns",id:"returns-1",level:3},{value:"printBadges()",id:"printbadges",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"type",id:"type-1",level:4},{value:"options",id:"options-1",level:4},{value:"Returns",id:"returns-2",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Module for handling GraphQL type badges in MDX documentation.\nProvides functionality to generate and format badges for different GraphQL types\nand their properties like deprecation status, nullability, and relationships."}),"\n",(0,t.jsx)(n.h2,{id:"css_badge_classname",children:"CSS_BADGE_CLASSNAME"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const CSS_BADGE_CLASSNAME: object;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Defined in: badge.ts:31"}),"\n",(0,t.jsx)(n.h3,{id:"type-declaration",children:"Type declaration"}),"\n",(0,t.jsx)(n.h4,{id:"deprecated",children:"DEPRECATED"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'DEPRECATED: string = "DEPRECATED";\n'})}),"\n",(0,t.jsx)(n.h4,{id:"non_null",children:"NON_NULL"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'NON_NULL: string = "NON_NULL";\n'})}),"\n",(0,t.jsx)(n.h4,{id:"relation",children:"RELATION"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'RELATION: string = "RELATION";\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"gettypebadges",children:"getTypeBadges()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function getTypeBadges(type, groups?): Badge[]\n"})}),"\n",(0,t.jsx)(n.p,{children:"Defined in: badge.ts:43"}),"\n",(0,t.jsx)(n.p,{children:"Gets an array of badges for a given GraphQL type."}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.h4,{id:"type",children:"type"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"unknown"})}),"\n",(0,t.jsx)(n.p,{children:"The GraphQL type to generate badges for"}),"\n",(0,t.jsx)(n.h4,{id:"groups",children:"groups?"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Maybe"}),"<",(0,t.jsx)(n.code,{children:"Partial"}),"<",(0,t.jsx)(n.code,{children:"Record"}),"<",(0,t.jsx)(n.code,{children:"SchemaEntity"}),", ",(0,t.jsx)(n.code,{children:"Record"}),"<",(0,t.jsx)(n.code,{children:"string"}),", ",(0,t.jsx)(n.code,{children:"Maybe"}),"<",(0,t.jsx)(n.code,{children:"string"}),">>>>>"]}),"\n",(0,t.jsx)(n.p,{children:"Optional map of schema entities to their groups"}),"\n",(0,t.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Badge"}),"[]"]}),"\n",(0,t.jsx)(n.p,{children:"Array of Badge objects containing text and optional classnames"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"printbadge",children:"printBadge()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function printBadge(badge, options): MDXString\n"})}),"\n",(0,t.jsx)(n.p,{children:"Defined in: badge.ts:97"}),"\n",(0,t.jsx)(n.p,{children:"Formats a single badge into MDX string format."}),"\n",(0,t.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsx)(n.h4,{id:"badge",children:"badge"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Badge"})}),"\n",(0,t.jsx)(n.p,{children:"The badge object containing text and optional classname"}),"\n",(0,t.jsx)(n.h4,{id:"options",children:"options"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"PrintTypeOptions"})}),"\n",(0,t.jsx)(n.p,{children:"Options for printing/formatting the badge"}),"\n",(0,t.jsx)(n.h3,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"MDXString"})}),"\n",(0,t.jsx)(n.p,{children:"Formatted MDX string representation of the badge"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"printbadges",children:"printBadges()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function printBadges(type, options): string | MDXString\n"})}),"\n",(0,t.jsx)(n.p,{children:"Defined in: badge.ts:115"}),"\n",(0,t.jsx)(n.p,{children:"Generates and formats all applicable badges for a GraphQL type."}),"\n",(0,t.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsx)(n.h4,{id:"type-1",children:"type"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"unknown"})}),"\n",(0,t.jsx)(n.p,{children:"The GraphQL type to generate badges for"}),"\n",(0,t.jsx)(n.h4,{id:"options-1",children:"options"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"PrintTypeOptions"})}),"\n",(0,t.jsx)(n.p,{children:"Options for printing/formatting the badges"}),"\n",(0,t.jsx)(n.h3,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"MDXString"})]}),"\n",(0,t.jsx)(n.p,{children:"Formatted MDX string containing all badges, or empty string if no badges or badges disabled"})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return d}});var i=r(67294);let t={},a=i.createContext(t);function d(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);