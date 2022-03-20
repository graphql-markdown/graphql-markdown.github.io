"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[7631],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,m=u["".concat(l,".").concat(p)]||u[p]||f[p]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6591:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={id:"staff",title:"Staff"},l=void 0,s={unversionedId:"schema/queries/staff",id:"schema/queries/staff",title:"Staff",description:"Staff query",source:"@site/docs/schema/queries/staff.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/staff",permalink:"/schema/queries/staff",tags:[],version:"current",frontMatter:{id:"staff",title:"Staff"},sidebar:"basic",previous:{title:"SiteStatistics",permalink:"/schema/queries/site-statistics"},next:{title:"Studio",permalink:"/schema/queries/studio"}},d={},f=[{value:"Arguments",id:"arguments",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>isBirthday</code> (<code>Boolean</code>)",id:"isbirthday-boolean",level:4},{value:"<code>search</code> (<code>String</code>)",id:"search-string",level:4},{value:"<code>id_not</code> (<code>Int</code>)",id:"id_not-int",level:4},{value:"<code>id_in</code> (<code>Int</code>)",id:"id_in-int",level:4},{value:"<code>id_not_in</code> (<code>Int</code>)",id:"id_not_in-int",level:4},{value:"<code>sort</code> (<code>StaffSort</code>)",id:"sort-staffsort",level:4},{value:"Type",id:"type",level:3},{value:"<code>Staff</code>",id:"staff",level:4}],u={toc:f};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Staff query"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"Staff(\n  id: Int\n  isBirthday: Boolean\n  search: String\n  id_not: Int\n  id_in: [Int]\n  id_not_in: [Int]\n  sort: [StaffSort]\n): Staff\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Filter by the staff id"),(0,i.kt)("h4",{id:"isbirthday-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isBirthday")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"Filter by staff by if its their birthday today"),(0,i.kt)("h4",{id:"search-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"search")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Filter by search query"),(0,i.kt)("h4",{id:"id_not-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id_not")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Filter by the staff id"),(0,i.kt)("h4",{id:"id_in-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id_in")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Filter by the staff id"),(0,i.kt)("h4",{id:"id_not_in-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id_not_in")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Filter by the staff id"),(0,i.kt)("h4",{id:"sort-staffsort"},(0,i.kt)("inlineCode",{parentName:"h4"},"sort")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/staff-sort"},(0,i.kt)("inlineCode",{parentName:"a"},"StaffSort")),")"),(0,i.kt)("p",null,"The order the results will be returned in"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"staff"},(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,i.kt)("inlineCode",{parentName:"a"},"Staff"))),(0,i.kt)("p",null,"Voice actors or production staff"))}p.isMDXComponent=!0}}]);