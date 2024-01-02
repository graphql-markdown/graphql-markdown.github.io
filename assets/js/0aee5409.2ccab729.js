"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2279],{7002:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>c});var a=n(5893),s=n(1151);const i={title:"guard",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},d=void 0,t={id:"graphql/guard",title:"guard",description:"Custom GraphQL type guards and property guards.",source:"@site/api/graphql/guard.md",sourceDirName:"graphql",slug:"/graphql/guard",permalink:"/api/graphql/guard",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"guard",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},l={},c=[{value:"instanceOf()",id:"instanceof",level:2},{value:"Type parameters",id:"type-parameters",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Source",id:"source",level:3},{value:"isDeprecated()",id:"isdeprecated",level:2},{value:"Type parameters",id:"type-parameters-1",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Source",id:"source-1",level:3},{value:"isGraphQLFieldType()",id:"isgraphqlfieldtype",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Returns",id:"returns-2",level:3},{value:"Source",id:"source-2",level:3},{value:"isOperation()",id:"isoperation",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Returns",id:"returns-3",level:3},{value:"Source",id:"source-3",level:3}];function p(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"Custom GraphQL type guards and property guards."}),"\n",(0,a.jsx)(r.h2,{id:"instanceof",children:"instanceOf()"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-ts",children:"instanceOf<T>(obj, type): obj is T\n"})}),"\n",(0,a.jsxs)(r.p,{children:["Checks if a GraphQL named type is of generic type ",(0,a.jsx)(r.code,{children:"T"}),"."]}),"\n",(0,a.jsx)(r.h3,{id:"type-parameters",children:"Type parameters"}),"\n",(0,a.jsxs)(r.p,{children:["\u2022 ",(0,a.jsx)(r.strong,{children:"T"})]}),"\n",(0,a.jsxs)(r.p,{children:["a GraphQL type to check against, eg ",(0,a.jsx)(r.code,{children:"GraphQLObjectType"}),"."]}),"\n",(0,a.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(r.p,{children:["\u2022 ",(0,a.jsx)(r.strong,{children:"obj"}),": ",(0,a.jsx)(r.code,{children:"unknown"})]}),"\n",(0,a.jsx)(r.p,{children:"a GraphQL named type from the GraphQL schema."}),"\n",(0,a.jsxs)(r.p,{children:["\u2022 ",(0,a.jsx)(r.strong,{children:"type"}),": () => ",(0,a.jsx)(r.code,{children:"T"})]}),"\n",(0,a.jsxs)(r.p,{children:["the GraphQL type ",(0,a.jsx)(r.code,{children:"T"}),"."]}),"\n",(0,a.jsx)(r.h3,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.code,{children:"obj is T"})}),"\n",(0,a.jsx)(r.h3,{id:"source",children:"Source"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/aad769d/packages/graphql/src/guard.ts#L52",children:"packages/graphql/src/guard.ts:52"})}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"isdeprecated",children:"isDeprecated()"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-ts",children:"isDeprecated<T>(obj): obj is DeprecatedType<T>\n"})}),"\n",(0,a.jsx)(r.p,{children:"Checks if a GraphQL named type is deprecated."}),"\n",(0,a.jsx)(r.h3,{id:"type-parameters-1",children:"Type parameters"}),"\n",(0,a.jsxs)(r.p,{children:["\u2022 ",(0,a.jsx)(r.strong,{children:"T"})]}),"\n",(0,a.jsxs)(r.p,{children:["a GraphQL type to check against, eg ",(0,a.jsx)(r.code,{children:"GraphQLObjectType"}),"."]}),"\n",(0,a.jsx)(r.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,a.jsxs)(r.p,{children:["\u2022 ",(0,a.jsx)(r.strong,{children:"obj"}),": ",(0,a.jsx)(r.code,{children:"T"})]}),"\n",(0,a.jsxs)(r.p,{children:["an instance of ",(0,a.jsx)(r.code,{children:"T"}),"."]}),"\n",(0,a.jsx)(r.h3,{id:"returns-1",children:"Returns"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.code,{children:"obj is DeprecatedType<T>"})}),"\n",(0,a.jsx)(r.h3,{id:"source-1",children:"Source"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/aad769d/packages/graphql/src/guard.ts#L70",children:"packages/graphql/src/guard.ts:70"})}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"isgraphqlfieldtype",children:"isGraphQLFieldType()"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-ts",children:"isGraphQLFieldType(type): type is GraphQLField<unknown, unknown, unknown>\n"})}),"\n",(0,a.jsxs)(r.p,{children:["Checks if a GraphQL named type is of type ",(0,a.jsx)(r.code,{children:"GraphQLField"}),"."]}),"\n",(0,a.jsx)(r.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,a.jsxs)(r.p,{children:["\u2022 ",(0,a.jsx)(r.strong,{children:"type"}),": ",(0,a.jsx)(r.code,{children:"unknown"})]}),"\n",(0,a.jsx)(r.p,{children:"a GraphQL type."}),"\n",(0,a.jsx)(r.h3,{id:"returns-2",children:"Returns"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.code,{children:"type is GraphQLField<unknown, unknown, unknown>"})}),"\n",(0,a.jsx)(r.h3,{id:"source-2",children:"Source"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/aad769d/packages/graphql/src/guard.ts#L33",children:"packages/graphql/src/guard.ts:33"})}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"isoperation",children:"isOperation()"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-ts",children:"isOperation(type): type is GraphQLOperationType\n"})}),"\n",(0,a.jsx)(r.p,{children:"Checks if a GraphQL type a GraphQL operation (query, mutation, subscription)."}),"\n",(0,a.jsx)(r.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,a.jsxs)(r.p,{children:["\u2022 ",(0,a.jsx)(r.strong,{children:"type"}),": ",(0,a.jsx)(r.code,{children:"unknown"})]}),"\n",(0,a.jsx)(r.p,{children:"a GraphQL type."}),"\n",(0,a.jsx)(r.h3,{id:"returns-3",children:"Returns"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.code,{children:"type is GraphQLOperationType"})}),"\n",(0,a.jsx)(r.h3,{id:"source-3",children:"Source"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.a,{href:"https://github.com/graphql-markdown/graphql-markdown/blob/aad769d/packages/graphql/src/guard.ts#L85",children:"packages/graphql/src/guard.ts:85"})})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>t,a:()=>d});var a=n(7294);const s={},i=a.createContext(s);function d(e){const r=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(i.Provider,{value:r},e.children)}}}]);