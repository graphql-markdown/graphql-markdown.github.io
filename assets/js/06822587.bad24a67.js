"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[7010],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,y=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return n?o.createElement(y,r(r({ref:t},u),{},{components:n})):o.createElement(y,r({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<a;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8151:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>f,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=n(7462),i=n(7294),a=n(3905);const r={id:"notification",title:"Notification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},c=void 0,l={unversionedId:"schema/queries/notification",id:"schema/queries/notification",title:"Notification",description:"Notification query",source:"@site/docs/schema/queries/notification.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/notification",permalink:"/schema/queries/notification",draft:!1,tags:[],version:"current",frontMatter:{id:"notification",title:"Notification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},s={},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Notification.<b>type</b></code><Bullet /><code>NotificationType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-notificationbtypebcodenotificationtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Notification.<b>resetNotificationCount</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-notificationbresetnotificationcountbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Notification.<b>type_in</b></code><Bullet /><code>[NotificationType]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-notificationbtype_inbcodenotificationtype--",level:4},{value:"Type",id:"type",level:3},{value:'<code>NotificationUnion</code> <Badge class="secondary" text="union"/>',id:"notificationunion-",level:4}],f=()=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(i.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:u,Bullet:f,SpecifiedBy:p,Badge:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Notification query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"Notification(\n  type: NotificationType\n  resetNotificationCount: Boolean\n  type_in: [NotificationType]\n): NotificationUnion\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-notificationbtypebcodenotificationtype-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"Notification.",(0,a.kt)("b",null,"type"))),(0,a.kt)(f,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,a.kt)("inlineCode",{parentName:"a"},"NotificationType"))," ",(0,a.kt)(d,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Filter by the type of notifications")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-notificationbresetnotificationcountbcodeboolean-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"Notification.",(0,a.kt)("b",null,"resetNotificationCount"))),(0,a.kt)(f,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,a.kt)(d,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Reset the unread notification count to 0 on load")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-notificationbtype_inbcodenotificationtype--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"Notification.",(0,a.kt)("b",null,"type_in"))),(0,a.kt)(f,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,a.kt)("inlineCode",{parentName:"a"},"[NotificationType]"))," ",(0,a.kt)(d,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(d,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Filter by the type of notifications")),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"notificationunion-"},(0,a.kt)("a",{parentName:"h4",href:"/schema/unions/notification-union"},(0,a.kt)("inlineCode",{parentName:"a"},"NotificationUnion"))," ",(0,a.kt)(d,{class:"secondary",text:"union",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Notification union type")))}m.isMDXComponent=!0}}]);