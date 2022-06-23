"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[6397],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,k=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={id:"site-statistics",title:"SiteStatistics",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,p={unversionedId:"schema/objects/site-statistics",id:"schema/objects/site-statistics",title:"SiteStatistics",description:"No description",source:"@site/docs/schema/objects/site-statistics.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/site-statistics",permalink:"/schema/objects/site-statistics",draft:!1,tags:[],version:"current",frontMatter:{id:"site-statistics",title:"SiteStatistics",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},l={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>users</code> (<code>SiteTrendConnection</code>)",id:"users-sitetrendconnection",level:4},{value:"<code>anime</code> (<code>SiteTrendConnection</code>)",id:"anime-sitetrendconnection",level:4},{value:"<code>manga</code> (<code>SiteTrendConnection</code>)",id:"manga-sitetrendconnection",level:4},{value:"<code>characters</code> (<code>SiteTrendConnection</code>)",id:"characters-sitetrendconnection",level:4},{value:"<code>staff</code> (<code>SiteTrendConnection</code>)",id:"staff-sitetrendconnection",level:4},{value:"<code>studios</code> (<code>SiteTrendConnection</code>)",id:"studios-sitetrendconnection",level:4},{value:"<code>reviews</code> (<code>SiteTrendConnection</code>)",id:"reviews-sitetrendconnection",level:4}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type SiteStatistics {\n  users(sort: [SiteTrendSort], page: Int, perPage: Int): SiteTrendConnection\n  anime(sort: [SiteTrendSort], page: Int, perPage: Int): SiteTrendConnection\n  manga(sort: [SiteTrendSort], page: Int, perPage: Int): SiteTrendConnection\n  characters(\n    sort: [SiteTrendSort]\n    page: Int\n    perPage: Int\n  ): SiteTrendConnection\n  staff(sort: [SiteTrendSort], page: Int, perPage: Int): SiteTrendConnection\n  studios(sort: [SiteTrendSort], page: Int, perPage: Int): SiteTrendConnection\n  reviews(sort: [SiteTrendSort], page: Int, perPage: Int): SiteTrendConnection\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"users-sitetrendconnection"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"users"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/site-trend-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"SiteTrendConnection")),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"sort-sitetrendsort"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"sort"))," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/enums/site-trend-sort"},(0,r.kt)("inlineCode",{parentName:"a"},"[SiteTrendSort]")),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"page-int"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"page"))," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"perpage-int"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"perPage"))," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The amount of entries per page, max 25"),(0,r.kt)("h4",{id:"anime-sitetrendconnection"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"anime"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/site-trend-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"SiteTrendConnection")),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"sort-sitetrendsort-1"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"sort"))," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/enums/site-trend-sort"},(0,r.kt)("inlineCode",{parentName:"a"},"[SiteTrendSort]")),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"page-int-1"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"page"))," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"perpage-int-1"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"perPage"))," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The amount of entries per page, max 25"),(0,r.kt)("h4",{id:"manga-sitetrendconnection"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"manga"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/site-trend-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"SiteTrendConnection")),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"sort-sitetrendsort-2"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"sort"))," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/enums/site-trend-sort"},(0,r.kt)("inlineCode",{parentName:"a"},"[SiteTrendSort]")),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"page-int-2"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"page"))," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"perpage-int-2"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"perPage"))," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The amount of entries per page, max 25"),(0,r.kt)("h4",{id:"characters-sitetrendconnection"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"characters"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/site-trend-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"SiteTrendConnection")),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"sort-sitetrendsort-3"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"sort"))," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/enums/site-trend-sort"},(0,r.kt)("inlineCode",{parentName:"a"},"[SiteTrendSort]")),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"page-int-3"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"page"))," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"perpage-int-3"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"perPage"))," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The amount of entries per page, max 25"),(0,r.kt)("h4",{id:"staff-sitetrendconnection"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"staff"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/site-trend-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"SiteTrendConnection")),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"sort-sitetrendsort-4"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"sort"))," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/enums/site-trend-sort"},(0,r.kt)("inlineCode",{parentName:"a"},"[SiteTrendSort]")),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"page-int-4"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"page"))," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"perpage-int-4"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"perPage"))," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The amount of entries per page, max 25"),(0,r.kt)("h4",{id:"studios-sitetrendconnection"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"studios"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/site-trend-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"SiteTrendConnection")),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"sort-sitetrendsort-5"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"sort"))," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/enums/site-trend-sort"},(0,r.kt)("inlineCode",{parentName:"a"},"[SiteTrendSort]")),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"page-int-5"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"page"))," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"perpage-int-5"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"perPage"))," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The amount of entries per page, max 25"),(0,r.kt)("h4",{id:"reviews-sitetrendconnection"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"reviews"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/site-trend-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"SiteTrendConnection")),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"sort-sitetrendsort-6"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"sort"))," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/enums/site-trend-sort"},(0,r.kt)("inlineCode",{parentName:"a"},"[SiteTrendSort]")),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"page-int-6"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"page"))," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"perpage-int-6"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"perPage"))," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The amount of entries per page, max 25"))}c.isMDXComponent=!0}}]);