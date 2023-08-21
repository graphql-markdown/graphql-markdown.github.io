"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[1417],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,m=d["".concat(p,".").concat(g)]||d[g]||s[g]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(4137));const o={pagination_prev:null,pagination_next:null},i="Documentation categories",c={unversionedId:"advanced/group-by-directive",id:"advanced/group-by-directive",title:"Documentation categories",description:"You can group the documentation to provide for an easier user experience to navigate. This is accomplished by adding a directive to all the types you want to have grouped.",source:"@site/docs/advanced/group-by-directive.md",sourceDirName:"advanced",slug:"/advanced/group-by-directive",permalink:"/docs/advanced/group-by-directive",draft:!1,editUrl:"https://github.com/graphql-markdown/graphql-markdown/tree/main/docs/advanced/group-by-directive.md",tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null},sidebar:"defaultSidebar"},p={},l=[{value:"Usage",id:"usage",level:2}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"documentation-categories"},"Documentation categories"),(0,a.kt)("p",null,"You can group the documentation to provide for an easier user experience to navigate. This is accomplished by adding a directive to all the types you want to have grouped."),(0,a.kt)("p",null,"For example, we have two mutations called ",(0,a.kt)("inlineCode",{parentName:"p"},"addCourse")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"dropCourse"),", and we want to group them under a category called ",(0,a.kt)("inlineCode",{parentName:"p"},"Courses"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type Mutation {\n  AddCourse(input: String): String\n}\n\ntype Mutation {\n  DropCourse(input: String): String\n}\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"We can accomplish this by adding a directive called ",(0,a.kt)("inlineCode",{parentName:"p"},"doc")," with a field ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," to each mutation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'type Mutation {\n  AddCourse(input: String): String @doc(category: "Course")\n}\n\ntype Mutation {\n  DropCourse(input: String): String @doc(category: "Course")\n}\n')),(0,a.kt)("p",null,"We can add a fallback option called ",(0,a.kt)("inlineCode",{parentName:"p"},"Common")," which is for types that we don't explicitly add a directive to."),(0,a.kt)("p",null,"It can be set either with the command line flag ",(0,a.kt)("inlineCode",{parentName:"p"},"--groupByDirective"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'npx docusaurus graphql-to-doc --groupByDirective "@doc(category|=Common)"\n')),(0,a.kt)("p",null,"or the plugin configuration ",(0,a.kt)("inlineCode",{parentName:"p"},"groupByDirective"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{6-10}","{6-10}":!0},'plugins: [\n  [\n    "@graphql-markdown/docusaurus",\n    {\n      // ... other options\n      groupByDirective: {\n        directive: "doc",\n        field: "category",\n        fallback: "Common", // default is Miscellaneous\n      }\n    },\n  ],\n],\n')))}d.isMDXComponent=!0}}]);