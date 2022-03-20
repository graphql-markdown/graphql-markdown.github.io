"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[505],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||s;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},242:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return m}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),i=["components"],a={id:"submission-status",title:"SubmissionStatus"},u=void 0,c={unversionedId:"schema/enums/submission-status",id:"schema/enums/submission-status",title:"SubmissionStatus",description:"Submission status",source:"@site/docs/schema/enums/submission-status.mdx",sourceDirName:"schema/enums",slug:"/schema/enums/submission-status",permalink:"/schema/enums/submission-status",tags:[],version:"current",frontMatter:{id:"submission-status",title:"SubmissionStatus"},sidebar:"basic",previous:{title:"SubmissionSort",permalink:"/schema/enums/submission-sort"},next:{title:"ThreadCommentSort",permalink:"/schema/enums/thread-comment-sort"}},l={},m=[{value:"Values",id:"values",level:3},{value:"<code>PENDING</code>",id:"pending",level:4},{value:"<code>REJECTED</code>",id:"rejected",level:4},{value:"<code>PARTIALLY_ACCEPTED</code>",id:"partially_accepted",level:4},{value:"<code>ACCEPTED</code>",id:"accepted",level:4}],p={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Submission status"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SubmissionStatus {\n  PENDING\n  REJECTED\n  PARTIALLY_ACCEPTED\n  ACCEPTED\n}\n")),(0,s.kt)("h3",{id:"values"},"Values"),(0,s.kt)("h4",{id:"pending"},(0,s.kt)("inlineCode",{parentName:"h4"},"PENDING")),(0,s.kt)("h4",{id:"rejected"},(0,s.kt)("inlineCode",{parentName:"h4"},"REJECTED")),(0,s.kt)("h4",{id:"partially_accepted"},(0,s.kt)("inlineCode",{parentName:"h4"},"PARTIALLY_ACCEPTED")),(0,s.kt)("h4",{id:"accepted"},(0,s.kt)("inlineCode",{parentName:"h4"},"ACCEPTED")))}d.isMDXComponent=!0}}]);