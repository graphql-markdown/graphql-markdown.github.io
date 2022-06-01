"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[2886],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return g}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(t),g=o,m=f["".concat(c,".").concat(g)]||f[g]||s[g]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3141:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],u={id:"group-by",slug:"/group-by",title:"Schema Documentation",sidebar_position:1,hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,sidebar_class_name:"navbar__toggle"},c=void 0,p={unversionedId:"group-by/group-by",id:"group-by/group-by",title:"Schema Documentation",description:"This is an example of documentation with grouping by GraphQL directive using the groupByDirective option (see documentation):",source:"@site/docs/group-by/groups.md",sourceDirName:"group-by",slug:"/group-by",permalink:"/group-by",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"group-by",slug:"/group-by",title:"Schema Documentation",sidebar_position:1,hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,sidebar_class_name:"navbar__toggle"},sidebar:"group"},l={},s=[],f={toc:s};function g(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is an example of documentation with grouping by GraphQL directive using the ",(0,a.kt)("inlineCode",{parentName:"p"},"groupByDirective")," option (see ",(0,a.kt)("a",{parentName:"p",href:"/#about-groupbydirective"},"documentation"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": "data/schema_with_grouping.graphql",\n  "rootPath": "./docs",\n  "baseURL": "group-by",\n  "linkRoot": "/",\n  "homepage": "data/groups.md",\n  "groupByDirective": {\n    "directive": "doc",\n    "field": "category",\n    "fallback": "Common"\n  }\n}\n')),(0,a.kt)("small",null,(0,a.kt)("i",null,"Generated on 6/1/2022, 6:38:38 PM.")))}g.isMDXComponent=!0}}]);