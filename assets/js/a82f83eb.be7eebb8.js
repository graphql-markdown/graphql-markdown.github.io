"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[9955],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(t),p=a,h=m["".concat(c,".").concat(p)]||m[p]||s[p]||i;return t?r.createElement(h,o(o({ref:n},d),{},{components:t})):r.createElement(h,o({ref:n},d))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2116:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={id:"media-format",title:"MediaFormat",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},c=void 0,u={unversionedId:"schema/enums/media-format",id:"schema/enums/media-format",title:"MediaFormat",description:"The format the media was released in",source:"@site/docs/schema/enums/media-format.mdx",sourceDirName:"schema/enums",slug:"/schema/enums/media-format",permalink:"/schema/enums/media-format",draft:!1,tags:[],version:"current",frontMatter:{id:"media-format",title:"MediaFormat",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},d={},s=[{value:"Values",id:"values",level:3},{value:"<code>TV</code>",id:"tv",level:4},{value:"<code>TV_SHORT</code>",id:"tv_short",level:4},{value:"<code>MOVIE</code>",id:"movie",level:4},{value:"<code>SPECIAL</code>",id:"special",level:4},{value:"<code>OVA</code>",id:"ova",level:4},{value:"<code>ONA</code>",id:"ona",level:4},{value:"<code>MUSIC</code>",id:"music",level:4},{value:"<code>MANGA</code>",id:"manga",level:4},{value:"<code>NOVEL</code>",id:"novel",level:4},{value:"<code>ONE_SHOT</code>",id:"one_shot",level:4}],m={toc:s};function p(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The format the media was released in"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum MediaFormat {\n  TV\n  TV_SHORT\n  MOVIE\n  SPECIAL\n  OVA\n  ONA\n  MUSIC\n  MANGA\n  NOVEL\n  ONE_SHOT\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"tv"},(0,i.kt)("inlineCode",{parentName:"h4"},"TV")),(0,i.kt)("p",null,"Anime broadcast on television"),(0,i.kt)("h4",{id:"tv_short"},(0,i.kt)("inlineCode",{parentName:"h4"},"TV_SHORT")),(0,i.kt)("p",null,"Anime which are under 15 minutes in length and broadcast on television"),(0,i.kt)("h4",{id:"movie"},(0,i.kt)("inlineCode",{parentName:"h4"},"MOVIE")),(0,i.kt)("p",null,"Anime movies with a theatrical release"),(0,i.kt)("h4",{id:"special"},(0,i.kt)("inlineCode",{parentName:"h4"},"SPECIAL")),(0,i.kt)("p",null,"Special episodes that have been included in DVD/Blu-ray releases, picture dramas, pilots, etc"),(0,i.kt)("h4",{id:"ova"},(0,i.kt)("inlineCode",{parentName:"h4"},"OVA")),(0,i.kt)("p",null,"(Original Video Animation) Anime that have been released directly on DVD/Blu-ray without originally going through a theatrical release or television broadcast"),(0,i.kt)("h4",{id:"ona"},(0,i.kt)("inlineCode",{parentName:"h4"},"ONA")),(0,i.kt)("p",null,"(Original Net Animation) Anime that have been originally released online or are only available through streaming services."),(0,i.kt)("h4",{id:"music"},(0,i.kt)("inlineCode",{parentName:"h4"},"MUSIC")),(0,i.kt)("p",null,"Short anime released as a music video"),(0,i.kt)("h4",{id:"manga"},(0,i.kt)("inlineCode",{parentName:"h4"},"MANGA")),(0,i.kt)("p",null,"Professionally published manga with more than one chapter"),(0,i.kt)("h4",{id:"novel"},(0,i.kt)("inlineCode",{parentName:"h4"},"NOVEL")),(0,i.kt)("p",null,"Written books released as a series of light novels"),(0,i.kt)("h4",{id:"one_shot"},(0,i.kt)("inlineCode",{parentName:"h4"},"ONE_SHOT")),(0,i.kt)("p",null,"Manga with just one chapter"))}p.isMDXComponent=!0}}]);