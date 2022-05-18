"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[2302],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),m=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=m(n),p=a,h=s["".concat(d,".").concat(p)]||s[p]||u[p]||o;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8434:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={id:"thread-comment",title:"ThreadComment",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,m={unversionedId:"schema/queries/thread-comment",id:"schema/queries/thread-comment",title:"ThreadComment",description:"Comment query",source:"@site/docs/schema/queries/thread-comment.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/thread-comment",permalink:"/schema/queries/thread-comment",draft:!1,tags:[],version:"current",frontMatter:{id:"thread-comment",title:"ThreadComment",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},l={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>threadId</code> (<code>Int</code>)",id:"threadid-int",level:4},{value:"<code>userId</code> (<code>Int</code>)",id:"userid-int",level:4},{value:"<code>sort</code> (<code>ThreadCommentSort</code>)",id:"sort-threadcommentsort",level:4},{value:"Type",id:"type",level:3},{value:"<code>ThreadComment</code>",id:"threadcomment",level:4}],s={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Comment query"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"ThreadComment(\n  id: Int\n  threadId: Int\n  userId: Int\n  sort: [ThreadCommentSort]\n): [ThreadComment]\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"id-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"Filter by the comment id"),(0,o.kt)("h4",{id:"threadid-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"threadId")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"Filter by the thread id"),(0,o.kt)("h4",{id:"userid-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"userId")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"Filter by the user id of the comment's creator"),(0,o.kt)("h4",{id:"sort-threadcommentsort"},(0,o.kt)("inlineCode",{parentName:"h4"},"sort")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/thread-comment-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"ThreadCommentSort")),")"),(0,o.kt)("p",null,"The order the results will be returned in"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"threadcomment"},(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/thread-comment"},(0,o.kt)("inlineCode",{parentName:"a"},"ThreadComment"))),(0,o.kt)("p",null,"Forum Thread Comment"))}p.isMDXComponent=!0}}]);