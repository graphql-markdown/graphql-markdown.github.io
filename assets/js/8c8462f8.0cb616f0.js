"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[3814],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9489:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"staff-name-input",title:"StaffNameInput"},s=void 0,c={unversionedId:"schema/inputs/staff-name-input",id:"schema/inputs/staff-name-input",title:"StaffNameInput",description:"The names of the staff member",source:"@site/docs/schema/inputs/staff-name-input.mdx",sourceDirName:"schema/inputs",slug:"/schema/inputs/staff-name-input",permalink:"/schema/inputs/staff-name-input",draft:!1,tags:[],version:"current",frontMatter:{id:"staff-name-input",title:"StaffNameInput"},sidebar:"basic",previous:{title:"NotificationOptionInput",permalink:"/schema/inputs/notification-option-input"},next:{title:"DeleteActivityReply",permalink:"/schema/mutations/delete-activity-reply"}},u={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>first</code> (<code>String</code>)",id:"first-string",level:4},{value:"<code>middle</code> (<code>String</code>)",id:"middle-string",level:4},{value:"<code>last</code> (<code>String</code>)",id:"last-string",level:4},{value:"<code>native</code> (<code>String</code>)",id:"native-string",level:4},{value:"<code>alternative</code> (<code>String</code>)",id:"alternative-string",level:4}],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The names of the staff member"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input StaffNameInput {\n  first: String\n  middle: String\n  last: String\n  native: String\n  alternative: [String]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"first-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"first")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The person's given name"),(0,i.kt)("h4",{id:"middle-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"middle")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The person's middle name"),(0,i.kt)("h4",{id:"last-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"last")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The person's surname"),(0,i.kt)("h4",{id:"native-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"native")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The person's full name in their native language"),(0,i.kt)("h4",{id:"alternative-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"alternative")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Other names the character might be referred by"))}m.isMDXComponent=!0}}]);