"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[1146],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=s(a),f=r,h=p["".concat(c,".").concat(f)]||p[f]||l[f]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4422:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return l}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],d={id:"update-favourite-order",title:"UpdateFavouriteOrder",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},c=void 0,s={unversionedId:"schema/mutations/update-favourite-order",id:"schema/mutations/update-favourite-order",title:"UpdateFavouriteOrder",description:"Update the order favourites are displayed in",source:"@site/docs/schema/mutations/update-favourite-order.mdx",sourceDirName:"schema/mutations",slug:"/schema/mutations/update-favourite-order",permalink:"/schema/mutations/update-favourite-order",draft:!1,tags:[],version:"current",frontMatter:{id:"update-favourite-order",title:"UpdateFavouriteOrder",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},u={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>animeIds</code> (<code>Int</code>)",id:"animeids-int",level:4},{value:"<code>mangaIds</code> (<code>Int</code>)",id:"mangaids-int",level:4},{value:"<code>characterIds</code> (<code>Int</code>)",id:"characterids-int",level:4},{value:"<code>staffIds</code> (<code>Int</code>)",id:"staffids-int",level:4},{value:"<code>studioIds</code> (<code>Int</code>)",id:"studioids-int",level:4},{value:"<code>animeOrder</code> (<code>Int</code>)",id:"animeorder-int",level:4},{value:"<code>mangaOrder</code> (<code>Int</code>)",id:"mangaorder-int",level:4},{value:"<code>characterOrder</code> (<code>Int</code>)",id:"characterorder-int",level:4},{value:"<code>staffOrder</code> (<code>Int</code>)",id:"stafforder-int",level:4},{value:"<code>studioOrder</code> (<code>Int</code>)",id:"studioorder-int",level:4},{value:"Type",id:"type",level:3},{value:"<code>Favourites</code>",id:"favourites",level:4}],p={toc:l};function f(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Update the order favourites are displayed in"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"UpdateFavouriteOrder(\n  animeIds: [Int]\n  mangaIds: [Int]\n  characterIds: [Int]\n  staffIds: [Int]\n  studioIds: [Int]\n  animeOrder: [Int]\n  mangaOrder: [Int]\n  characterOrder: [Int]\n  staffOrder: [Int]\n  studioOrder: [Int]\n): Favourites\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"animeids-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"animeIds"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The id of the anime to un/favourite"),(0,i.kt)("h4",{id:"mangaids-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"mangaIds"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The id of the manga to un/favourite"),(0,i.kt)("h4",{id:"characterids-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"characterIds"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The id of the character to un/favourite"),(0,i.kt)("h4",{id:"staffids-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"staffIds"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The id of the staff to un/favourite"),(0,i.kt)("h4",{id:"studioids-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"studioIds"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The id of the studio to un/favourite"),(0,i.kt)("h4",{id:"animeorder-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"animeOrder"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"List of integers which the anime should be ordered by (Asc)"),(0,i.kt)("h4",{id:"mangaorder-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"mangaOrder"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"List of integers which the manga should be ordered by (Asc)"),(0,i.kt)("h4",{id:"characterorder-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"characterOrder"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"List of integers which the character should be ordered by (Asc)"),(0,i.kt)("h4",{id:"stafforder-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"staffOrder"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"List of integers which the staff should be ordered by (Asc)"),(0,i.kt)("h4",{id:"studioorder-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"studioOrder"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"List of integers which the studio should be ordered by (Asc)"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"favourites"},(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/favourites"},(0,i.kt)("inlineCode",{parentName:"a"},"Favourites"))),(0,i.kt)("p",null,"User's favourite anime, manga, characters, staff & studios"))}f.isMDXComponent=!0}}]);