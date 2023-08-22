"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=i,g=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={id:"custom-directive",pagination_prev:null,pagination_next:null},o="Custom schema directives handling",l={unversionedId:"advanced/custom-directive",id:"advanced/custom-directive",title:"Custom schema directives handling",description:"For directives applied to the schema, you can select which ones to be rendered for the types or in the locations they are declared. Information about the custom directives includes a custom description.",source:"@site/docs/advanced/custom-directive.md",sourceDirName:"advanced",slug:"/advanced/custom-directive",permalink:"/docs/advanced/custom-directive",draft:!1,editUrl:"https://github.com/graphql-markdown/graphql-markdown/tree/main/docs/advanced/custom-directive.md",tags:[],version:"current",frontMatter:{id:"custom-directive",pagination_prev:null,pagination_next:null},sidebar:"defaultSidebar"},c={},p=[{value:"Usage",id:"usage",level:2},{value:"<code>descriptor</code>",id:"descriptor",level:3},{value:"<code>tag</code>",id:"tag",level:3},{value:"Wildcard",id:"wildcard",level:3},{value:"Helpers",id:"helpers",level:2},{value:"<code>directiveDescriptor</code>",id:"directivedescriptor",level:3},{value:"<code>tagDescriptor</code>",id:"tagdescriptor",level:3},{value:"<code>getTypeDirectiveArgValue</code>",id:"gettypedirectiveargvalue",level:3},{value:"<code>getTypeDirectiveValues</code>",id:"gettypedirectivevalues",level:3}],d={toc:p};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"custom-schema-directives-handling"},"Custom schema directives handling"),(0,i.kt)("p",null,"For directives applied to the schema, you can select which ones to be rendered for the types or in the locations they are declared. Information about the custom directives includes a custom description."),(0,i.kt)("p",null,"For example, we have one query called ",(0,i.kt)("inlineCode",{parentName:"p"},"searchRole"),", and we want to limit access to ",(0,i.kt)("inlineCode",{parentName:"p"},"ADMIN")," user roles only."),(0,i.kt)("p",null,"We can accomplish this by adding a directive called ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," with an argument ",(0,i.kt)("inlineCode",{parentName:"p"},"requires")," to the query."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @auth(\n  requires: Roles = ADMIN\n) on OBJECT | FIELD_DEFINITION\n\nenum Roles {\n  ADMIN\n  USER\n}\n\ntype Query {\n  searchRole(roles: [Roles!]! = [ADMIN]): Int! @auth\n}\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Add the option ",(0,i.kt)("a",{parentName:"p",href:"/docs/settings#customdirective"},(0,i.kt)("inlineCode",{parentName:"a"},"customDirective"))," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"@graphql-markdown/docusaurus")," configuration."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"descriptor")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tag")," functions receives 2 arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"directive")," of type ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/graphql/graphql-js/blob/main/src/type/directives.ts"},(0,i.kt)("inlineCode",{parentName:"a"},"GraphQLDirective"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node")," of type ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/graphql/graphql-js/blob/main/src/type/definition.ts"},(0,i.kt)("inlineCode",{parentName:"a"},"GraphQLNamedType"))," or ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/graphql/graphql-js/blob/main/src/language/ast.ts"},(0,i.kt)("inlineCode",{parentName:"a"},"ASTNode")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'type CustomDirective = {\n  [name: string | "*"]: CustomDirectiveOptions | undefined\n}\n\ntype CustomDirectiveOptions = { \n  descriptor: DescriptorFunction?\n  tag: TagFunction?\n}\n\ntype DescriptorFunction = (directive: GraphQLDirective, node: GraphQLNamedType | ASTNode) => string;\n\ntype tagFunction = (directive: GraphQLDirective, node: GraphQLNamedType | ASTNode) => Tag;\n\ntype Tag = { text: string, classname: string };\n')),(0,i.kt)("h3",{id:"descriptor"},(0,i.kt)("inlineCode",{parentName:"h3"},"descriptor")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"descriptor")," allows rendering custom directive description applicable to entities."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{8-13}","{8-13}":!0},'plugins: [\n  [\n    "@graphql-markdown/docusaurus",\n    {\n      // ... other options\n      customDirective: {\n        auth: {\n          descriptor: (directive, node) =>\n            directiveDescriptor(\n              directive,\n              node,\n              "This requires the current user to be in `${requires}` role.",\n            ),\n        }\n        // ... other custom directive options\n      },\n    },\n  ],\n],\n')),(0,i.kt)("h3",{id:"tag"},(0,i.kt)("inlineCode",{parentName:"h3"},"tag")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"tag")," allows rendering custom badges (tags) based on custom directive applicable to entities."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{8}","{8}":!0},'plugins: [\n  [\n    "@graphql-markdown/docusaurus",\n    {\n      // ... other options\n      customDirective: {\n        beta: {\n          tag: (directive, node) => ({ text: directive.name, classname: "badge--info" }),\n        }\n        // ... other custom directive options\n      },\n    },\n  ],\n],\n')),(0,i.kt)("h3",{id:"wildcard"},"Wildcard"),(0,i.kt)("p",null,"You can use ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},'"*"')," as wildcard")," for the directive name. This will allow all directives not declared with their name under ",(0,i.kt)("inlineCode",{parentName:"p"},"customDirective")," to be handled by the wildcard ",(0,i.kt)("inlineCode",{parentName:"p"},"descriptor")," and/or ",(0,i.kt)("inlineCode",{parentName:"p"},"tag"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{11-14}","{11-14}":!0},'const { helper } = require("@graphql-markdown/utils");\n\n//...//\n\nplugins: [\n  [\n    "@graphql-markdown/docusaurus",\n    {\n      // ... other options\n      customDirective: {\n        "*": {\n          descriptor: helper.directiveDescriptor,\n          tag: helper.tagDescriptor,\n        },\n        // ... optionally specific custom directive options\n      },\n    },\n  ],\n],\n')),(0,i.kt)("h2",{id:"helpers"},"Helpers"),(0,i.kt)("p",null,"The package ",(0,i.kt)("inlineCode",{parentName:"p"},"@graphql-markdown/utils")," provides few helper functions to quick start:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const { \n  helper: { directiveDescriptor, tagDescriptor },\n  graphql: { getTypeDirectiveArgValue, getTypeDirectiveValues } \n} = require("@graphql-markdown/utils");\n')),(0,i.kt)("h3",{id:"directivedescriptor"},(0,i.kt)("inlineCode",{parentName:"h3"},"directiveDescriptor")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/utils/src/helper.js"},(0,i.kt)("inlineCode",{parentName:"a"},"helper.directiveDescriptor(directive: GraphQLDirective, node: GraphQLNamedType | ASTNode, template: String?): String"))," interpolates a template-like string using a directive arguments values. It returns the directive description, if ",(0,i.kt)("inlineCode",{parentName:"p"},"template")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,i.kt)("h3",{id:"tagdescriptor"},(0,i.kt)("inlineCode",{parentName:"h3"},"tagDescriptor")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/main/packages/utils/src/helper.js"},(0,i.kt)("inlineCode",{parentName:"a"},"helper.tagDescriptor(directive: GraphQLDirective, node: GraphQLNamedType | ASTNode, classname: String?): String"))," returns the directive name, with ",(0,i.kt)("inlineCode",{parentName:"p"},"classname")," defaulted to ",(0,i.kt)("inlineCode",{parentName:"p"},"badge--secondary"),"."),(0,i.kt)("h3",{id:"gettypedirectiveargvalue"},(0,i.kt)("inlineCode",{parentName:"h3"},"getTypeDirectiveArgValue")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphql.getTypeDirectiveArgValue(directive: GraphQLDirective, node: GraphQLNamedType | ASTNode, arg: String): Any")," returns the value of a specific directive argument by name."),(0,i.kt)("h3",{id:"gettypedirectivevalues"},(0,i.kt)("inlineCode",{parentName:"h3"},"getTypeDirectiveValues")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphql.getTypeDirectiveValues(directive: GraphQLDirective, node: GraphQLNamedType | ASTNode): { [arg: string]: Any }")," returns a map of directive arguments and their values."))}s.isMDXComponent=!0}}]);