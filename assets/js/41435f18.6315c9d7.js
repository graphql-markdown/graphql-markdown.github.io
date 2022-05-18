"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[2411],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(t),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||i;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=s;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7151:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),l=["components"],o={id:"external-link-source-collection",title:"ExternalLinkSourceCollection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},c=void 0,u={unversionedId:"schema/queries/external-link-source-collection",id:"schema/queries/external-link-source-collection",title:"ExternalLinkSourceCollection",description:"ExternalLinkSource collection query",source:"@site/docs/schema/queries/external-link-source-collection.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/external-link-source-collection",permalink:"/schema/queries/external-link-source-collection",draft:!1,tags:[],version:"current",frontMatter:{id:"external-link-source-collection",title:"ExternalLinkSourceCollection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},p={},d=[{value:"Arguments",id:"arguments",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>type</code> (<code>ExternalLinkType</code>)",id:"type-externallinktype",level:4},{value:"<code>mediaType</code> (<code>ExternalLinkMediaType</code>)",id:"mediatype-externallinkmediatype",level:4},{value:"Type",id:"type",level:3},{value:"<code>MediaExternalLink</code>",id:"mediaexternallink",level:4}],s={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ExternalLinkSource collection query"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"ExternalLinkSourceCollection(\n  id: Int\n  type: ExternalLinkType\n  mediaType: ExternalLinkMediaType\n): [MediaExternalLink]\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Filter by the link id"),(0,i.kt)("h4",{id:"type-externallinktype"},(0,i.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/external-link-type"},(0,i.kt)("inlineCode",{parentName:"a"},"ExternalLinkType")),")"),(0,i.kt)("h4",{id:"mediatype-externallinkmediatype"},(0,i.kt)("inlineCode",{parentName:"h4"},"mediaType")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/external-link-media-type"},(0,i.kt)("inlineCode",{parentName:"a"},"ExternalLinkMediaType")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"mediaexternallink"},(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/media-external-link"},(0,i.kt)("inlineCode",{parentName:"a"},"MediaExternalLink"))),(0,i.kt)("p",null,"An external link to another site related to the media or staff member"))}m.isMDXComponent=!0}}]);