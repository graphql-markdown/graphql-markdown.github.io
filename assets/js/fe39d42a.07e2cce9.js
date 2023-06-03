"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,y=p["".concat(c,".").concat(u)]||p[u]||f[u]||i;return n?o.createElement(y,r(r({ref:t},s),{},{components:n})):o.createElement(y,r({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7542:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>s,Details:()=>y,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var o=n(7462),a=n(7294),i=n(3905);const r={id:"notification",title:"Notification",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},l=void 0,c={unversionedId:"queries/notification",id:"queries/notification",title:"Notification",description:"Notification query",source:"@site/examples/default/queries/notification.mdx",sourceDirName:"queries",slug:"/queries/notification",permalink:"/examples/default/queries/notification",draft:!1,tags:[],version:"current",frontMatter:{id:"notification",title:"Notification",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},s=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Notification.<b>type</b></code><Bullet /><code>NotificationType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-notificationbtypebcodenotificationtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Notification.<b>resetNotificationCount</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-notificationbresetnotificationcountbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Notification.<b>type_in</b></code><Bullet /><code>[NotificationType]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-notificationbtype_inbcodenotificationtype--",level:4},{value:"Type",id:"type",level:3},{value:'<code>NotificationUnion</code> <Badge class="badge badge--secondary" text="union"/>',id:"notificationunion-",level:4}],y=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:l=!1}=e;const[c,d]=(0,a.useState)(l);return(0,i.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&r)},m={Bullet:s,SpecifiedBy:p,Badge:f,toc:u,Details:y};function b(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Notification query"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"Notification(\n  type: NotificationType\n  resetNotificationCount: Boolean\n  type_in: [NotificationType]\n): NotificationUnion\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-notificationbtypebcodenotificationtype-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"Notification.",(0,i.kt)("b",null,"type"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/examples/default/enums/notification-type"},(0,i.kt)("inlineCode",{parentName:"a"},"NotificationType"))," ",(0,i.kt)(f,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter by the type of notifications")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-notificationbresetnotificationcountbcodeboolean-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"Notification.",(0,i.kt)("b",null,"resetNotificationCount"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,i.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Reset the unread notification count to 0 on load")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-notificationbtype_inbcodenotificationtype--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"Notification.",(0,i.kt)("b",null,"type_in"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/examples/default/enums/notification-type"},(0,i.kt)("inlineCode",{parentName:"a"},"[NotificationType]"))," ",(0,i.kt)(f,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(f,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter by the type of notifications")),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"notificationunion-"},(0,i.kt)("a",{parentName:"h4",href:"/examples/default/unions/notification-union"},(0,i.kt)("inlineCode",{parentName:"a"},"NotificationUnion"))," ",(0,i.kt)(f,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Notification union type")))}b.isMDXComponent=!0}}]);