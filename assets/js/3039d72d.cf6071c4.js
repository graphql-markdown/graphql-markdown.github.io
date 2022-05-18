"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[7915],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4973:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={id:"score-format",title:"ScoreFormat",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,u={unversionedId:"schema/enums/score-format",id:"schema/enums/score-format",title:"ScoreFormat",description:"Media list scoring type",source:"@site/docs/schema/enums/score-format.mdx",sourceDirName:"schema/enums",slug:"/schema/enums/score-format",permalink:"/schema/enums/score-format",draft:!1,tags:[],version:"current",frontMatter:{id:"score-format",title:"ScoreFormat",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},p={},s=[{value:"Values",id:"values",level:3},{value:"<code>POINT_100</code>",id:"point_100",level:4},{value:"<code>POINT_10_DECIMAL</code>",id:"point_10_decimal",level:4},{value:"<code>POINT_10</code>",id:"point_10",level:4},{value:"<code>POINT_5</code>",id:"point_5",level:4},{value:"<code>POINT_3</code>",id:"point_3",level:4}],m={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Media list scoring type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ScoreFormat {\n  POINT_100\n  POINT_10_DECIMAL\n  POINT_10\n  POINT_5\n  POINT_3\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"point_100"},(0,a.kt)("inlineCode",{parentName:"h4"},"POINT_100")),(0,a.kt)("p",null,"An integer from 0-100"),(0,a.kt)("h4",{id:"point_10_decimal"},(0,a.kt)("inlineCode",{parentName:"h4"},"POINT_10_DECIMAL")),(0,a.kt)("p",null,"A float from 0-10 with 1 decimal place"),(0,a.kt)("h4",{id:"point_10"},(0,a.kt)("inlineCode",{parentName:"h4"},"POINT_10")),(0,a.kt)("p",null,"An integer from 0-10"),(0,a.kt)("h4",{id:"point_5"},(0,a.kt)("inlineCode",{parentName:"h4"},"POINT_5")),(0,a.kt)("p",null,"An integer from 0-5. Should be represented in Stars"),(0,a.kt)("h4",{id:"point_3"},(0,a.kt)("inlineCode",{parentName:"h4"},"POINT_3")),(0,a.kt)("p",null,"An integer from 0-3. Should be represented in Smileys. 0 =",">"," No Score, 1 =",">"," :(, 2 =",">"," :|, 3 =",">"," :)"))}d.isMDXComponent=!0}}]);