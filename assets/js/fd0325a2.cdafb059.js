"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[6244],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),f=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=f(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=f(n),p=r,d=m["".concat(i,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(d,s(s({ref:t},l),{},{components:n})):a.createElement(d,s({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var f=2;f<o;f++)s[f]=n[f];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9436:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],c={id:"staff-stats",title:"StaffStats"},i=void 0,f={unversionedId:"schema/objects/staff-stats",id:"schema/objects/staff-stats",title:"StaffStats",description:"User's staff statistics",source:"@site/docs/schema/objects/staff-stats.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/staff-stats",permalink:"/schema/objects/staff-stats",draft:!1,tags:[],version:"current",frontMatter:{id:"staff-stats",title:"StaffStats"},sidebar:"basic",previous:{title:"StaffRoleType",permalink:"/schema/objects/staff-role-type"},next:{title:"StaffSubmission",permalink:"/schema/objects/staff-submission"}},l={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>staff</code> (<code>Staff</code>)",id:"staff-staff",level:4},{value:"<code>amount</code> (<code>Int</code>)",id:"amount-int",level:4},{value:"<code>meanScore</code> (<code>Int</code>)",id:"meanscore-int",level:4},{value:"<code>timeWatched</code> (<code>Int</code>)",id:"timewatched-int",level:4}],m={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"User's staff statistics"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type StaffStats {\n  staff: Staff\n  amount: Int\n  meanScore: Int\n  timeWatched: Int\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"staff-staff"},(0,o.kt)("inlineCode",{parentName:"h4"},"staff")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,o.kt)("inlineCode",{parentName:"a"},"Staff")),")"),(0,o.kt)("h4",{id:"amount-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"amount")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("h4",{id:"meanscore-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"meanScore")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("h4",{id:"timewatched-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"timeWatched")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The amount of time in minutes the staff member has been watched by the user"))}p.isMDXComponent=!0}}]);