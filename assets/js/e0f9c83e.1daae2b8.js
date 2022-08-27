"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[1263],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>p});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),u=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,s=t.originalType,l=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=u(a),p=r,b=m["".concat(l,".").concat(p)]||m[p]||d[p]||s;return a?n.createElement(b,i(i({ref:e},c),{},{components:a})):n.createElement(b,i({ref:e},c))}));function p(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<s;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4703:(t,e,a)=>{a.r(e),a.d(e,{Badge:()=>p,Bullet:()=>d,SpecifiedBy:()=>m,assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=a(7294),s=a(3905);const i={id:"status-distribution",title:"StatusDistribution",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,l={unversionedId:"schema/objects/status-distribution",id:"schema/objects/status-distribution",title:"StatusDistribution",description:"The distribution of the watching/reading status of media or a user's list",source:"@site/docs/schema/objects/status-distribution.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/status-distribution",permalink:"/schema/objects/status-distribution",draft:!1,tags:[],version:"current",frontMatter:{id:"status-distribution",title:"StatusDistribution",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},u={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>StatusDistribution.<b>status</b></code><Bullet /><code>MediaListStatus</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-statusdistributionbstatusbcodemedialiststatus-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatusDistribution.<b>amount</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-statusdistributionbamountbcodeint-",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=t=>(0,s.kt)(r.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),p=t=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{class:"badge badge--"+t.class},t.text)),b={toc:c,Bullet:d,SpecifiedBy:m,Badge:p};function f(t){let{components:e,...a}=t;return(0,s.kt)("wrapper",(0,n.Z)({},b,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The distribution of the watching/reading status of media or a user's list"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type StatusDistribution {\n  status: MediaListStatus\n  amount: Int\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statusdistributionbstatusbcodemedialiststatus-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatusDistribution.",(0,s.kt)("b",null,"status"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-status"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaListStatus"))," ",(0,s.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The day the activity took place (Unix timestamp)")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statusdistributionbamountbcodeint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatusDistribution.",(0,s.kt)("b",null,"amount"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The amount of entries with this status")),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-stats"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaStats"))," ",(0,s.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-stats"},(0,s.kt)("inlineCode",{parentName:"a"},"UserStats"))," ",(0,s.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);