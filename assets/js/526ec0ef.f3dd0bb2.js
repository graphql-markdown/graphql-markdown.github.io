"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[5274],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6770:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={id:"media-tag-collection",title:"MediaTagCollection"},l=void 0,u={unversionedId:"schema/queries/media-tag-collection",id:"schema/queries/media-tag-collection",title:"MediaTagCollection",description:"Collection of all the possible media tags",source:"@site/docs/schema/queries/media-tag-collection.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/media-tag-collection",permalink:"/schema/queries/media-tag-collection",tags:[],version:"current",frontMatter:{id:"media-tag-collection",title:"MediaTagCollection"},sidebar:"basic",previous:{title:"MediaList",permalink:"/schema/queries/media-list"},next:{title:"MediaTrend",permalink:"/schema/queries/media-trend"}},s={},d=[{value:"Arguments",id:"arguments",level:3},{value:"<code>status</code> (<code>Int</code>)",id:"status-int",level:4},{value:"Type",id:"type",level:3},{value:"<code>MediaTag</code>",id:"mediatag",level:4}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Collection of all the possible media tags"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"MediaTagCollection(\n  status: Int\n): [MediaTag]\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"status-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Mod Only"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"mediatag"},(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/media-tag"},(0,i.kt)("inlineCode",{parentName:"a"},"MediaTag"))),(0,i.kt)("p",null,"A tag that describes a theme or element of the media"))}m.isMDXComponent=!0}}]);