"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[5048],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),f=a,h=d["".concat(l,".").concat(f)]||d[f]||s[f]||o;return t?r.createElement(h,c(c({ref:n},u),{},{components:t})):r.createElement(h,c({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9762:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),c=["components"],i={id:"character-connection",title:"CharacterConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,p={unversionedId:"schema/objects/character-connection",id:"schema/objects/character-connection",title:"CharacterConnection",description:"No description",source:"@site/docs/schema/objects/character-connection.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/character-connection",permalink:"/schema/objects/character-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"character-connection",title:"CharacterConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},u={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>edges</code> (<code>[CharacterEdge]</code>)",id:"edges-characteredge",level:4},{value:"<code>nodes</code> (<code>[Character]</code>)",id:"nodes-character",level:4},{value:"<code>pageInfo</code> (<code>PageInfo</code>)",id:"pageinfo-pageinfo",level:4}],d={toc:s};function f(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type CharacterConnection {\n  edges: [CharacterEdge]\n  nodes: [Character]\n  pageInfo: PageInfo\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"edges-characteredge"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"edges"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/character-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"[CharacterEdge]")),")"),(0,o.kt)("h4",{id:"nodes-character"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"nodes"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/character"},(0,o.kt)("inlineCode",{parentName:"a"},"[Character]")),")"),(0,o.kt)("h4",{id:"pageinfo-pageinfo"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"pageInfo"))," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/page-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PageInfo")),")"),(0,o.kt)("p",null,"The pagination information"))}f.isMDXComponent=!0}}]);