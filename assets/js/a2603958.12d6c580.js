"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[1137],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),p=a,g=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5646:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],c={id:"media-cover-image",title:"MediaCoverImage",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,s={unversionedId:"schema/objects/media-cover-image",id:"schema/objects/media-cover-image",title:"MediaCoverImage",description:"No description",source:"@site/docs/schema/objects/media-cover-image.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/media-cover-image",permalink:"/schema/objects/media-cover-image",draft:!1,tags:[],version:"current",frontMatter:{id:"media-cover-image",title:"MediaCoverImage",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},u={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>extraLarge</code> (<code>String</code>)",id:"extralarge-string",level:4},{value:"<code>large</code> (<code>String</code>)",id:"large-string",level:4},{value:"<code>medium</code> (<code>String</code>)",id:"medium-string",level:4},{value:"<code>color</code> (<code>String</code>)",id:"color-string",level:4}],m={toc:d};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaCoverImage {\n  extraLarge: String\n  large: String\n  medium: String\n  color: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"extralarge-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"extraLarge")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The cover image url of the media at its largest size. If this size isn't available, large will be provided instead."),(0,i.kt)("h4",{id:"large-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"large")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The cover image url of the media at a large size"),(0,i.kt)("h4",{id:"medium-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"medium")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The cover image url of the media at medium size"),(0,i.kt)("h4",{id:"color-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"color")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Average #hex color of cover image"))}p.isMDXComponent=!0}}]);