"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[8146],{93788:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var s=r(74848),i=r(28453);const a={title:"guard",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},d=void 0,l={id:"graphql/guard",title:"guard",description:"Custom GraphQL type guards and property guards.",source:"@site/api/graphql/guard.md",sourceDirName:"graphql",slug:"/graphql/guard",permalink:"/api/graphql/guard",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"guard",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},t={},p=[{value:"instanceOf()",id:"instanceof",level:2},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Defined in",id:"defined-in",level:3},{value:"isApiType()",id:"isapitype",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Defined in",id:"defined-in-1",level:3},{value:"isDeprecated()",id:"isdeprecated",level:2},{value:"Type Parameters",id:"type-parameters-1",level:3},{value:"Parameters",id:"parameters-2",level:3},{value:"Returns",id:"returns-2",level:3},{value:"Defined in",id:"defined-in-2",level:3},{value:"isGraphQLFieldType()",id:"isgraphqlfieldtype",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Returns",id:"returns-3",level:3},{value:"Defined in",id:"defined-in-3",level:3},{value:"isOperation()",id:"isoperation",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"Returns",id:"returns-4",level:3},{value:"Defined in",id:"defined-in-4",level:3},{value:"isSystemType()",id:"issystemtype",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"Returns",id:"returns-5",level:3},{value:"Defined in",id:"defined-in-5",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Custom GraphQL type guards and property guards."}),"\n",(0,s.jsx)(n.h2,{id:"instanceof",children:"instanceOf()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function instanceOf<T>(obj, type): obj is T\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Checks if a GraphQL named type is of generic type ",(0,s.jsx)(n.code,{children:"T"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"T"})]}),"\n",(0,s.jsxs)(n.p,{children:["a GraphQL type to check against, eg ",(0,s.jsx)(n.code,{children:"GraphQLObjectType"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"obj"}),": ",(0,s.jsx)(n.code,{children:"unknown"})]}),"\n",(0,s.jsx)(n.p,{children:"a GraphQL named type from the GraphQL schema."}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"type"})]}),"\n",(0,s.jsxs)(n.p,{children:["the GraphQL type ",(0,s.jsx)(n.code,{children:"T"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"obj is T"})}),"\n",(0,s.jsx)(n.h3,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/graphql/src/guard.ts:57"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"isapitype",children:"isApiType()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function isApiType(type): boolean\n"})}),"\n",(0,s.jsx)(n.p,{children:"Checks if a type belongs to API (operation related)."}),"\n",(0,s.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"type"}),": ",(0,s.jsx)(n.code,{children:"unknown"})]}),"\n",(0,s.jsx)(n.p,{children:"a GraphQL type."}),"\n",(0,s.jsx)(n.h3,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"boolean"})}),"\n",(0,s.jsx)(n.h3,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/graphql/src/guard.ts:100"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"isdeprecated",children:"isDeprecated()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function isDeprecated<T>(obj): obj is DeprecatedType<T>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Checks if a GraphQL named type is deprecated."}),"\n",(0,s.jsx)(n.h3,{id:"type-parameters-1",children:"Type Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"T"})]}),"\n",(0,s.jsxs)(n.p,{children:["a GraphQL type to check against, eg ",(0,s.jsx)(n.code,{children:"GraphQLObjectType"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"obj"}),": ",(0,s.jsx)(n.code,{children:"T"})]}),"\n",(0,s.jsxs)(n.p,{children:["an instance of ",(0,s.jsx)(n.code,{children:"T"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"obj is DeprecatedType<T>"})}),"\n",(0,s.jsx)(n.h3,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/graphql/src/guard.ts:75"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"isgraphqlfieldtype",children:"isGraphQLFieldType()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function isGraphQLFieldType(type): type is GraphQLField<unknown, unknown, unknown>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Checks if a GraphQL named type is of type ",(0,s.jsx)(n.code,{children:"GraphQLField"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"type"}),": ",(0,s.jsx)(n.code,{children:"unknown"})]}),"\n",(0,s.jsx)(n.p,{children:"a GraphQL type."}),"\n",(0,s.jsx)(n.h3,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"type is GraphQLField<unknown, unknown, unknown>"})}),"\n",(0,s.jsx)(n.h3,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/graphql/src/guard.ts:38"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"isoperation",children:"isOperation()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function isOperation(type): type is GraphQLOperationType\n"})}),"\n",(0,s.jsx)(n.p,{children:"Checks if a GraphQL type a GraphQL operation (query, mutation, subscription)."}),"\n",(0,s.jsx)(n.h3,{id:"parameters-4",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"type"}),": ",(0,s.jsx)(n.code,{children:"unknown"})]}),"\n",(0,s.jsx)(n.p,{children:"a GraphQL type."}),"\n",(0,s.jsx)(n.h3,{id:"returns-4",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"type is GraphQLOperationType"})}),"\n",(0,s.jsx)(n.h3,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/graphql/src/guard.ts:90"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"issystemtype",children:"isSystemType()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function isSystemType(type): boolean\n"})}),"\n",(0,s.jsx)(n.p,{children:"Checks if a type belongs to schema (schema type definition excluding operations related types)."}),"\n",(0,s.jsx)(n.h3,{id:"parameters-5",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"type"}),": ",(0,s.jsx)(n.code,{children:"unknown"})]}),"\n",(0,s.jsx)(n.p,{children:"a GraphQL type."}),"\n",(0,s.jsx)(n.h3,{id:"returns-5",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"boolean"})}),"\n",(0,s.jsx)(n.h3,{id:"defined-in-5",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/graphql/src/guard.ts:113"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var s=r(96540);const i={},a=s.createContext(i);function d(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);