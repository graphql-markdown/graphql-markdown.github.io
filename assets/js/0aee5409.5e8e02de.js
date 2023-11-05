"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2279],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||p;return r?a.createElement(k,l(l({ref:t},u),{},{components:r})):a.createElement(k,l({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,l=new Array(p);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<p;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2609:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(4137));const p={title:"guard",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},l=void 0,i={unversionedId:"graphql/guard",id:"graphql/guard",title:"guard",description:"Custom GraphQL type guards and property guards.",source:"@site/api/graphql/guard.md",sourceDirName:"graphql",slug:"/graphql/guard",permalink:"/api/graphql/guard",draft:!1,tags:[],version:"current",frontMatter:{title:"guard",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},o={},s=[{value:"instanceOf()",id:"instanceof",level:2},{value:"Type parameters",id:"type-parameters",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Source",id:"source",level:3},{value:"isDeprecated()",id:"isdeprecated",level:2},{value:"Type parameters",id:"type-parameters-1",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Source",id:"source-1",level:3},{value:"isGraphQLFieldType()",id:"isgraphqlfieldtype",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Source",id:"source-2",level:3},{value:"isOperation()",id:"isoperation",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Source",id:"source-3",level:3}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Custom GraphQL type guards and property guards."),(0,n.kt)("h2",{id:"instanceof"},"instanceOf()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"instanceOf<T>(obj, type): obj is T\n")),(0,n.kt)("p",null,"Checks if a GraphQL named type is of generic type ",(0,n.kt)("inlineCode",{parentName:"p"},"T"),"."),(0,n.kt)("h3",{id:"type-parameters"},"Type parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"T")),(0,n.kt)("p",null,"a GraphQL type to check against, eg ",(0,n.kt)("inlineCode",{parentName:"p"},"GraphQLObjectType"),"."),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"obj"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"unknown")),(0,n.kt)("p",null,"a GraphQL named type from the GraphQL schema."),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"type"),": () => ",(0,n.kt)("inlineCode",{parentName:"p"},"T")),(0,n.kt)("p",null,"the GraphQL type ",(0,n.kt)("inlineCode",{parentName:"p"},"T"),"."),(0,n.kt)("h3",{id:"source"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/3ba4bcf/packages/graphql/src/guard.ts#L52"},"packages/graphql/src/guard.ts:52")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"isdeprecated"},"isDeprecated()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"isDeprecated<T>(obj): obj is DeprecatedType<T>\n")),(0,n.kt)("p",null,"Checks if a GraphQL named type is deprecated."),(0,n.kt)("h3",{id:"type-parameters-1"},"Type parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"T")),(0,n.kt)("p",null,"a GraphQL type to check against, eg ",(0,n.kt)("inlineCode",{parentName:"p"},"GraphQLObjectType"),"."),(0,n.kt)("h3",{id:"parameters-1"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"obj"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"T")),(0,n.kt)("p",null,"an instance of ",(0,n.kt)("inlineCode",{parentName:"p"},"T"),"."),(0,n.kt)("h3",{id:"source-1"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/3ba4bcf/packages/graphql/src/guard.ts#L70"},"packages/graphql/src/guard.ts:70")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"isgraphqlfieldtype"},"isGraphQLFieldType()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"isGraphQLFieldType(type): type is GraphQLField<unknown, unknown, unknown>\n")),(0,n.kt)("p",null,"Checks if a GraphQL named type is of type ",(0,n.kt)("inlineCode",{parentName:"p"},"GraphQLField"),"."),(0,n.kt)("h3",{id:"parameters-2"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"type"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"unknown")),(0,n.kt)("p",null,"a GraphQL type."),(0,n.kt)("h3",{id:"source-2"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/3ba4bcf/packages/graphql/src/guard.ts#L33"},"packages/graphql/src/guard.ts:33")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"isoperation"},"isOperation()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"isOperation(type): type is GraphQLOperationType\n")),(0,n.kt)("p",null,"Checks if a GraphQL type a GraphQL operation (query, mutation, subscription)."),(0,n.kt)("h3",{id:"parameters-3"},"Parameters"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("strong",{parentName:"p"},"type"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"unknown")),(0,n.kt)("p",null,"a GraphQL type."),(0,n.kt)("h3",{id:"source-3"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/3ba4bcf/packages/graphql/src/guard.ts#L85"},"packages/graphql/src/guard.ts:85")))}c.isMDXComponent=!0}}]);