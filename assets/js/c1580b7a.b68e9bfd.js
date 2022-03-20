"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[3186],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return y}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),y=i,d=m["".concat(u,".").concat(y)]||m[y]||p[y]||a;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2281:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={id:"activity-type",title:"ActivityType"},u=void 0,l={unversionedId:"schema/enums/activity-type",id:"schema/enums/activity-type",title:"ActivityType",description:"Activity type enum.",source:"@site/docs/schema/enums/activity-type.mdx",sourceDirName:"schema/enums",slug:"/schema/enums/activity-type",permalink:"/schema/enums/activity-type",tags:[],version:"current",frontMatter:{id:"activity-type",title:"ActivityType"},sidebar:"basic",previous:{title:"ActivitySort",permalink:"/schema/enums/activity-sort"},next:{title:"AiringSort",permalink:"/schema/enums/airing-sort"}},s={},p=[{value:"Values",id:"values",level:3},{value:"<code>TEXT</code>",id:"text",level:4},{value:"<code>ANIME_LIST</code>",id:"anime_list",level:4},{value:"<code>MANGA_LIST</code>",id:"manga_list",level:4},{value:"<code>MESSAGE</code>",id:"message",level:4},{value:"<code>MEDIA_LIST</code>",id:"media_list",level:4}],m={toc:p};function y(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Activity type enum."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ActivityType {\n  TEXT\n  ANIME_LIST\n  MANGA_LIST\n  MESSAGE\n  MEDIA_LIST\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"text"},(0,a.kt)("inlineCode",{parentName:"h4"},"TEXT")),(0,a.kt)("p",null,"A text activity"),(0,a.kt)("h4",{id:"anime_list"},(0,a.kt)("inlineCode",{parentName:"h4"},"ANIME_LIST")),(0,a.kt)("p",null,"A anime list update activity"),(0,a.kt)("h4",{id:"manga_list"},(0,a.kt)("inlineCode",{parentName:"h4"},"MANGA_LIST")),(0,a.kt)("p",null,"A manga list update activity"),(0,a.kt)("h4",{id:"message"},(0,a.kt)("inlineCode",{parentName:"h4"},"MESSAGE")),(0,a.kt)("p",null,"A text message activity sent to another user"),(0,a.kt)("h4",{id:"media_list"},(0,a.kt)("inlineCode",{parentName:"h4"},"MEDIA_LIST")),(0,a.kt)("p",null,"Anime & Manga list update, only used in query arguments"))}y.isMDXComponent=!0}}]);