"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[8415],{4137:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(a),h=n,u=m["".concat(p,".").concat(h)]||m[h]||c[h]||l;return a?r.createElement(u,o(o({ref:t},s),{},{components:a})):r.createElement(u,o({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3720:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=a(7462),n=(a(7294),a(4137));const l={title:"loader",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},o=void 0,i={unversionedId:"graphql/loader",id:"graphql/loader",title:"loader",description:"Library for GraphQL schema loading and loaders config processing.",source:"@site/api/graphql/loader.md",sourceDirName:"graphql",slug:"/graphql/loader",permalink:"/api/graphql/loader",draft:!1,tags:[],version:"current",frontMatter:{title:"loader",pagination_prev:null,pagination_next:null,toc_max_heading_level:2},sidebar:"defaultSidebar"},p={},d=[{value:"getDocumentLoaders",id:"getdocumentloaders",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Throws",id:"throws",level:3},{value:"Example",id:"example",level:3},{value:"Defined In",id:"defined-in",level:3},{value:"loadSchema",id:"loadschema",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"Defined In",id:"defined-in-1",level:3}],s={toc:d};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Library for GraphQL schema loading and ",(0,n.kt)("inlineCode",{parentName:"p"},"loaders")," config processing."),(0,n.kt)("h2",{id:"getdocumentloaders"},"getDocumentLoaders"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"getDocumentLoaders(loadersList): Promise< Maybe< LoadSchemaOptions > >\n")),(0,n.kt)("p",null,"Asynchronously returns a valid loaders list for ",(0,n.kt)("a",{parentName:"p",href:"/api/graphql/loader#loadschema"},"loadSchema")," based on the plugin config.\nImport each loader package, and instantiate a loader object."),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"loadersList")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Maybe"),"\\< ",(0,n.kt)("inlineCode",{parentName:"td"},"LoaderOption")," ",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the list of loaders defined in the plugin config.")))),(0,n.kt)("h3",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"\\< ",(0,n.kt)("inlineCode",{parentName:"p"},"Maybe"),"\\< ",(0,n.kt)("inlineCode",{parentName:"p"},"LoadSchemaOptions")," ",">"," ",">"),(0,n.kt)("p",null,"a list of loader objects."),(0,n.kt)("h3",{id:"throws"},"Throws"),(0,n.kt)("p",null,"an ",(0,n.kt)("inlineCode",{parentName:"p"},"Error")," if no loader has been loaded, or if an error occurred while importing loaders."),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { getDocumentLoaders, loadSchema } from "@graphql-markdown/utils/graphql"\n\nconst loaderList = {\n  GraphQLFileLoader: "@graphql-tools/graphql-file-loader",\n};\n\nconst loaders = await getDocumentLoaders(loaderList);\n\nconst schema = await loadSchema("schema.graphql", {\n  loaders,\n  rootTypes: { query: "Root", subscription: "" },\n});\n')),(0,n.kt)("h3",{id:"defined-in"},"Defined In"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/4b6fd2a/packages/graphql/src/loader.ts#L106"},"packages/graphql/src/loader.ts:106")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"loadschema"},"loadSchema"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"loadSchema(schemaLocation, options): Promise< GraphQLSchema >\n")),(0,n.kt)("p",null,"Wrapper method for ",(0,n.kt)("inlineCode",{parentName:"p"},"@graphql-tools/load.loadSchema")," to load asynchronously a GraphQL Schema from a source.\nThe wrapper will load the schema using the loader declared in ",(0,n.kt)("inlineCode",{parentName:"p"},"options"),".\nIf ",(0,n.kt)("inlineCode",{parentName:"p"},"rootTypes")," is set in the options, then the schema root types will be overridden to generate custom GraphQL schema."),(0,n.kt)("h3",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"schemaLocation")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"the schema location pointer matching the loader.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"options")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"BuildSchemaOptions")," & ",(0,n.kt)("inlineCode",{parentName:"td"},"GraphQLParseOptions")," & ","{","} & ","{","} & ","{","} & ",(0,n.kt)("inlineCode",{parentName:"td"},"Partial"),"\\< ",(0,n.kt)("inlineCode",{parentName:"td"},"IExecutableSchemaDefinition"),"\\< ",(0,n.kt)("inlineCode",{parentName:"td"},"any")," ",">"," ",">"," & ","{","} & ","{",(0,n.kt)("inlineCode",{parentName:"td"},"rootTypes"),": ",(0,n.kt)("inlineCode",{parentName:"td"},"Partial"),"\\< ",(0,n.kt)("inlineCode",{parentName:"td"},"Record"),"\\< ",(0,n.kt)("inlineCode",{parentName:"td"},"OperationTypeNode"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"string")," ",">"," ",">",";}"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the schema ",(0,n.kt)("inlineCode",{parentName:"td"},"loaders"),", and optional ",(0,n.kt)("inlineCode",{parentName:"td"},"rootTypes")," override.")))),(0,n.kt)("h3",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"\\< ",(0,n.kt)("inlineCode",{parentName:"p"},"GraphQLSchema")," ",">"),(0,n.kt)("p",null,"a GraphQL schema."),(0,n.kt)("h3",{id:"example-1"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { loadSchema } from "@graphql-markdown/utils/graphql"\n\nconst schema = await loadSchema("schema.graphql", {\n  loaders: [new GraphQLFileLoader()],\n  rootTypes: { query: "Root", subscription: "" },\n});\n')),(0,n.kt)("h3",{id:"defined-in-1"},"Defined In"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-markdown/graphql-markdown/blob/4b6fd2a/packages/graphql/src/loader.ts#L41"},"packages/graphql/src/loader.ts:41")))}m.isMDXComponent=!0}}]);