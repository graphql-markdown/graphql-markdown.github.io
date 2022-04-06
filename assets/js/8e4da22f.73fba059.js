"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[6897],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},320:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"media-external-link",title:"MediaExternalLink"},c=void 0,s={unversionedId:"schema/objects/media-external-link",id:"schema/objects/media-external-link",title:"MediaExternalLink",description:"An external link to another site related to the media or staff member",source:"@site/docs/schema/objects/media-external-link.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/media-external-link",permalink:"/schema/objects/media-external-link",tags:[],version:"current",frontMatter:{id:"media-external-link",title:"MediaExternalLink"},sidebar:"basic",previous:{title:"MediaEdge",permalink:"/schema/objects/media-edge"},next:{title:"MediaListCollection",permalink:"/schema/objects/media-list-collection"}},d={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>url</code> (<code>String</code>)",id:"url-string",level:4},{value:"<code>site</code> (<code>String</code>)",id:"site-string",level:4},{value:"<code>siteId</code> (<code>Int</code>)",id:"siteid-int",level:4},{value:"<code>type</code> (<code>ExternalLinkType</code>)",id:"type-externallinktype",level:4},{value:"<code>language</code> (<code>String</code>)",id:"language-string",level:4},{value:"<code>color</code> (<code>String</code>)",id:"color-string",level:4},{value:"<code>icon</code> (<code>String</code>)",id:"icon-string",level:4},{value:"<code>notes</code> (<code>String</code>)",id:"notes-string",level:4},{value:"<code>isDisabled</code> (<code>Boolean</code>)",id:"isdisabled-boolean",level:4}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An external link to another site related to the media or staff member"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaExternalLink {\n  id: Int!\n  url: String\n  site: String!\n  siteId: Int\n  type: ExternalLinkType\n  language: String\n  color: String\n  icon: String\n  notes: String\n  isDisabled: Boolean\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The id of the external link"),(0,i.kt)("h4",{id:"url-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"url")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The url of the external link or base url of link source"),(0,i.kt)("h4",{id:"site-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"site")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The links website site name"),(0,i.kt)("h4",{id:"siteid-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"siteId")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The links website site id"),(0,i.kt)("h4",{id:"type-externallinktype"},(0,i.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/external-link-type"},(0,i.kt)("inlineCode",{parentName:"a"},"ExternalLinkType")),")"),(0,i.kt)("h4",{id:"language-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"language")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Language the site content is in. See Staff language field for values."),(0,i.kt)("h4",{id:"color-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"color")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"icon-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"icon")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The icon image url of the site. Not available for all links. Transparent PNG 64x64"),(0,i.kt)("h4",{id:"notes-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"notes")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"isdisabled-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isDisabled")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))}m.isMDXComponent=!0}}]);