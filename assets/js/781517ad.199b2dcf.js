"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[6219],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),d=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=d(n),p=a,h=s["".concat(m,".").concat(p)]||s[p]||u[p]||o;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},677:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return m},default:function(){return p},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={id:"save-thread-comment",title:"SaveThreadComment"},m=void 0,d={unversionedId:"schema/mutations/save-thread-comment",id:"schema/mutations/save-thread-comment",title:"SaveThreadComment",description:"Create or update a thread comment",source:"@site/docs/schema/mutations/save-thread-comment.mdx",sourceDirName:"schema/mutations",slug:"/schema/mutations/save-thread-comment",permalink:"/schema/mutations/save-thread-comment",draft:!1,tags:[],version:"current",frontMatter:{id:"save-thread-comment",title:"SaveThreadComment"},sidebar:"basic",previous:{title:"SaveTextActivity",permalink:"/schema/mutations/save-text-activity"},next:{title:"SaveThread",permalink:"/schema/mutations/save-thread"}},l={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>threadId</code> (<code>Int</code>)",id:"threadid-int",level:4},{value:"<code>parentCommentId</code> (<code>Int</code>)",id:"parentcommentid-int",level:4},{value:"<code>comment</code> (<code>String</code>)",id:"comment-string",level:4},{value:"<code>locked</code> (<code>Boolean</code>)",id:"locked-boolean",level:4},{value:"Type",id:"type",level:3},{value:"<code>ThreadComment</code>",id:"threadcomment",level:4}],s={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create or update a thread comment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"SaveThreadComment(\n  id: Int\n  threadId: Int\n  parentCommentId: Int\n  comment: String\n  locked: Boolean\n): ThreadComment\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"id-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The comment id, required for updating"),(0,o.kt)("h4",{id:"threadid-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"threadId")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The id of thread the comment belongs to"),(0,o.kt)("h4",{id:"parentcommentid-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"parentCommentId")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The id of thread comment to reply to"),(0,o.kt)("h4",{id:"comment-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"comment")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"The comment markdown text"),(0,o.kt)("h4",{id:"locked-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"locked")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("p",null,"If the comment tree should be locked. (Mod Only)"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"threadcomment"},(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/thread-comment"},(0,o.kt)("inlineCode",{parentName:"a"},"ThreadComment"))),(0,o.kt)("p",null,"Forum Thread Comment"))}p.isMDXComponent=!0}}]);