"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["9322"],{14846:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>i,assets:()=>d,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"graphql/guard","title":"guard","description":"Custom GraphQL type guards and property guards.","source":"@site/api/graphql/guard.md","sourceDirName":"graphql","slug":"/graphql/guard","permalink":"/api/graphql/guard","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"guard","pagination_prev":null,"pagination_next":null,"toc_max_heading_level":2},"sidebar":"defaultSidebar"}'),s=r("85893"),a=r("50065");let t={title:"guard",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},l=void 0,d={},c=[{value:"executableDirectiveLocation()",id:"executabledirectivelocation",level:2},{value:"Parameters",id:"parameters",level:3},{value:"directive",id:"directive",level:4},{value:"Returns",id:"returns",level:3},{value:"instanceOf()",id:"instanceof",level:2},{value:"Type Parameters",id:"type-parameters",level:3},{value:"T",id:"t",level:4},{value:"Parameters",id:"parameters-1",level:3},{value:"obj",id:"obj",level:4},{value:"type",id:"type",level:4},{value:"Returns",id:"returns-1",level:3},{value:"isApiType()",id:"isapitype",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"type",id:"type-1",level:4},{value:"Returns",id:"returns-2",level:3},{value:"isDeprecated()",id:"isdeprecated",level:2},{value:"Type Parameters",id:"type-parameters-1",level:3},{value:"T",id:"t-1",level:4},{value:"Parameters",id:"parameters-3",level:3},{value:"obj",id:"obj-1",level:4},{value:"Returns",id:"returns-3",level:3},{value:"isGraphQLFieldType()",id:"isgraphqlfieldtype",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"type",id:"type-2",level:4},{value:"Returns",id:"returns-4",level:3},{value:"isOperation()",id:"isoperation",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"type",id:"type-3",level:4},{value:"Returns",id:"returns-5",level:3},{value:"isSystemType()",id:"issystemtype",level:2},{value:"Parameters",id:"parameters-6",level:3},{value:"type",id:"type-4",level:4},{value:"Returns",id:"returns-6",level:3},{value:"typeSystemDirectiveLocation()",id:"typesystemdirectivelocation",level:2},{value:"Parameters",id:"parameters-7",level:3},{value:"directive",id:"directive-1",level:4},{value:"Returns",id:"returns-7",level:3}];function p(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Custom GraphQL type guards and property guards."}),"\n",(0,s.jsx)(n.h2,{id:"executabledirectivelocation",children:"executableDirectiveLocation()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function executableDirectiveLocation(directive): boolean\n"})}),"\n",(0,s.jsx)(n.p,{children:"Defined in: packages/graphql/src/guard.ts:104"}),"\n",(0,s.jsx)(n.p,{children:"Checks if a directive is executable (related to operations)."}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.h4,{id:"directive",children:"directive"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GraphQLDirective"})}),"\n",(0,s.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"boolean"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"instanceof",children:"instanceOf()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function instanceOf<T>(obj, type): obj is () => T\n"})}),"\n",(0,s.jsx)(n.p,{children:"Defined in: packages/graphql/src/guard.ts:58"}),"\n",(0,s.jsxs)(n.p,{children:["Checks if a GraphQL named type is of generic type ",(0,s.jsx)(n.code,{children:"T"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,s.jsx)(n.h4,{id:"t",children:"T"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"T"})}),"\n",(0,s.jsxs)(n.p,{children:["a GraphQL type to check against, eg ",(0,s.jsx)(n.code,{children:"GraphQLObjectType"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsx)(n.h4,{id:"obj",children:"obj"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"unknown"})}),"\n",(0,s.jsx)(n.p,{children:"a GraphQL named type from the GraphQL schema."}),"\n",(0,s.jsx)(n.h4,{id:"type",children:"type"}),"\n",(0,s.jsxs)(n.p,{children:["() => ",(0,s.jsx)(n.code,{children:"T"})]}),"\n",(0,s.jsxs)(n.p,{children:["the GraphQL type ",(0,s.jsx)(n.code,{children:"T"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"obj is () => T"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"isapitype",children:"isApiType()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function isApiType(type): boolean\n"})}),"\n",(0,s.jsx)(n.p,{children:"Defined in: packages/graphql/src/guard.ts:140"}),"\n",(0,s.jsx)(n.p,{children:"Checks if a type belongs to API (operation related)."}),"\n",(0,s.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsx)(n.h4,{id:"type-1",children:"type"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"unknown"})}),"\n",(0,s.jsx)(n.p,{children:"a GraphQL type."}),"\n",(0,s.jsx)(n.h3,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"boolean"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"isdeprecated",children:"isDeprecated()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function isDeprecated<T>(obj): obj is DeprecatedType<T>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Defined in: packages/graphql/src/guard.ts:79"}),"\n",(0,s.jsx)(n.p,{children:"Checks if a GraphQL named type is deprecated."}),"\n",(0,s.jsx)(n.h3,{id:"type-parameters-1",children:"Type Parameters"}),"\n",(0,s.jsx)(n.h4,{id:"t-1",children:"T"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"T"})}),"\n",(0,s.jsxs)(n.p,{children:["a GraphQL type to check against, eg ",(0,s.jsx)(n.code,{children:"GraphQLObjectType"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsx)(n.h4,{id:"obj-1",children:"obj"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"T"})}),"\n",(0,s.jsxs)(n.p,{children:["an instance of ",(0,s.jsx)(n.code,{children:"T"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"obj is DeprecatedType<T>"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"isgraphqlfieldtype",children:"isGraphQLFieldType()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function isGraphQLFieldType(type): type is GraphQLField<unknown, unknown, unknown>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Defined in: packages/graphql/src/guard.ts:39"}),"\n",(0,s.jsxs)(n.p,{children:["Checks if a GraphQL named type is of type ",(0,s.jsx)(n.code,{children:"GraphQLField"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters-4",children:"Parameters"}),"\n",(0,s.jsx)(n.h4,{id:"type-2",children:"type"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"unknown"})}),"\n",(0,s.jsx)(n.p,{children:"a GraphQL type."}),"\n",(0,s.jsx)(n.h3,{id:"returns-4",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"type is GraphQLField<unknown, unknown, unknown>"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"isoperation",children:"isOperation()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function isOperation(type): type is GraphQLOperationType\n"})}),"\n",(0,s.jsx)(n.p,{children:"Defined in: packages/graphql/src/guard.ts:94"}),"\n",(0,s.jsx)(n.p,{children:"Checks if a GraphQL type a GraphQL operation (query, mutation, subscription)."}),"\n",(0,s.jsx)(n.h3,{id:"parameters-5",children:"Parameters"}),"\n",(0,s.jsx)(n.h4,{id:"type-3",children:"type"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"unknown"})}),"\n",(0,s.jsx)(n.p,{children:"a GraphQL type."}),"\n",(0,s.jsx)(n.h3,{id:"returns-5",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"type is GraphQLOperationType"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"issystemtype",children:"isSystemType()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function isSystemType(type): boolean\n"})}),"\n",(0,s.jsx)(n.p,{children:"Defined in: packages/graphql/src/guard.ts:153"}),"\n",(0,s.jsx)(n.p,{children:"Checks if a type belongs to schema (schema type definition excluding operations related types)."}),"\n",(0,s.jsx)(n.h3,{id:"parameters-6",children:"Parameters"}),"\n",(0,s.jsx)(n.h4,{id:"type-4",children:"type"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"unknown"})}),"\n",(0,s.jsx)(n.p,{children:"a GraphQL type."}),"\n",(0,s.jsx)(n.h3,{id:"returns-6",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"boolean"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"typesystemdirectivelocation",children:"typeSystemDirectiveLocation()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function typeSystemDirectiveLocation(directive): boolean\n"})}),"\n",(0,s.jsx)(n.p,{children:"Defined in: packages/graphql/src/guard.ts:127"}),"\n",(0,s.jsx)(n.p,{children:"Checks if a directive is system (related to schema definition)."}),"\n",(0,s.jsx)(n.h3,{id:"parameters-7",children:"Parameters"}),"\n",(0,s.jsx)(n.h4,{id:"directive-1",children:"directive"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GraphQLDirective"})}),"\n",(0,s.jsx)(n.h3,{id:"returns-7",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"boolean"})})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return t}});var i=r(67294);let s={},a=i.createContext(s);function t(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);