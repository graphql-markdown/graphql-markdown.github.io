"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[4710],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=r.createContext({}),l=function(e){var t=r.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(f.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,f=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),p=a,m=u["".concat(f,".").concat(p)]||u[p]||s[p]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var f in t)hasOwnProperty.call(t,f)&&(c[f]=t[f]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4833:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return f},default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={id:"staff-edge",title:"StaffEdge",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},f=void 0,l={unversionedId:"schema/objects/staff-edge",id:"schema/objects/staff-edge",title:"StaffEdge",description:"Staff connection edge",source:"@site/docs/schema/objects/staff-edge.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/staff-edge",permalink:"/schema/objects/staff-edge",draft:!1,tags:[],version:"current",frontMatter:{id:"staff-edge",title:"StaffEdge",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},d={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>node</code> (<code>Staff</code>)",id:"node-staff",level:4},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>role</code> (<code>String</code>)",id:"role-string",level:4},{value:"<code>favouriteOrder</code> (<code>Int</code>)",id:"favouriteorder-int",level:4}],u={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Staff connection edge"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type StaffEdge {\n  node: Staff\n  id: Int\n  role: String\n  favouriteOrder: Int\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"node-staff"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"node"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,o.kt)("inlineCode",{parentName:"a"},"Staff")),")"),(0,o.kt)("h4",{id:"id-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The id of the connection"),(0,o.kt)("h4",{id:"role-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"role"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"The role of the staff member in the production of the media"),(0,o.kt)("h4",{id:"favouriteorder-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"favouriteOrder"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The order the staff should be displayed from the users favourites"))}p.isMDXComponent=!0}}]);