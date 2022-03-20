"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[6568],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(m,c(c({ref:n},p),{},{components:t})):r.createElement(m,c({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5463:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),c=["components"],a={id:"review-connection",title:"ReviewConnection"},s=void 0,l={unversionedId:"schema/objects/review-connection",id:"schema/objects/review-connection",title:"ReviewConnection",description:"No description",source:"@site/docs/schema/objects/review-connection.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/review-connection",permalink:"/schema/objects/review-connection",tags:[],version:"current",frontMatter:{id:"review-connection",title:"ReviewConnection"},sidebar:"basic",previous:{title:"Report",permalink:"/schema/objects/report"},next:{title:"ReviewEdge",permalink:"/schema/objects/review-edge"}},p={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>edges</code> (<code>ReviewEdge</code>)",id:"edges-reviewedge",level:4},{value:"<code>nodes</code> (<code>Review</code>)",id:"nodes-review",level:4},{value:"<code>pageInfo</code> (<code>PageInfo</code>)",id:"pageinfo-pageinfo",level:4}],d={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type ReviewConnection {\n  edges: [ReviewEdge]\n  nodes: [Review]\n  pageInfo: PageInfo\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"edges-reviewedge"},(0,i.kt)("inlineCode",{parentName:"h4"},"edges")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/review-edge"},(0,i.kt)("inlineCode",{parentName:"a"},"ReviewEdge")),")"),(0,i.kt)("h4",{id:"nodes-review"},(0,i.kt)("inlineCode",{parentName:"h4"},"nodes")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/review"},(0,i.kt)("inlineCode",{parentName:"a"},"Review")),")"),(0,i.kt)("h4",{id:"pageinfo-pageinfo"},(0,i.kt)("inlineCode",{parentName:"h4"},"pageInfo")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/page-info"},(0,i.kt)("inlineCode",{parentName:"a"},"PageInfo")),")"),(0,i.kt)("p",null,"The pagination information"))}f.isMDXComponent=!0}}]);