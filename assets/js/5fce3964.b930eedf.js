"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[3301],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),f=d(n),p=o,u=f["".concat(c,".").concat(p)]||f[p]||m[p]||a;return n?i.createElement(u,l(l({ref:t},s),{},{components:n})):i.createElement(u,l({ref:t},s))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var d=2;d<a;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1925:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>m,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>r,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var i=n(7462),o=n(7294),a=n(3905);const l={id:"media-deletion-notification",title:"MediaDeletionNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},r=void 0,c={unversionedId:"schema/objects/media-deletion-notification",id:"schema/objects/media-deletion-notification",title:"MediaDeletionNotification",description:"Notification for when a media tracked in a user's list is deleted from the site",source:"@site/docs/schema/objects/media-deletion-notification.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/media-deletion-notification",permalink:"/schema/objects/media-deletion-notification",draft:!1,tags:[],version:"current",frontMatter:{id:"media-deletion-notification",title:"MediaDeletionNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MediaDeletionNotification.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediadeletionnotificationbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaDeletionNotification.<b>type</b></code><Bullet /><code>NotificationType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-mediadeletionnotificationbtypebcodenotificationtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaDeletionNotification.<b>deletedMediaTitle</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediadeletionnotificationbdeletedmediatitlebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaDeletionNotification.<b>context</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediadeletionnotificationbcontextbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaDeletionNotification.<b>reason</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediadeletionnotificationbreasonbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaDeletionNotification.<b>createdAt</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediadeletionnotificationbcreatedatbcodeint-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],m=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),u={toc:s,Bullet:m,SpecifiedBy:f,Badge:p};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Notification for when a media tracked in a user's list is deleted from the site"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaDeletionNotification {\n  id: Int!\n  type: NotificationType\n  deletedMediaTitle: String\n  context: String\n  reason: String\n  createdAt: Int\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-mediadeletionnotificationbidbcodeint--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"MediaDeletionNotification.",(0,a.kt)("b",null,"id"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,a.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The id of the Notification")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-mediadeletionnotificationbtypebcodenotificationtype-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"MediaDeletionNotification.",(0,a.kt)("b",null,"type"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,a.kt)("inlineCode",{parentName:"a"},"NotificationType"))," ",(0,a.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The type of notification")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-mediadeletionnotificationbdeletedmediatitlebcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"MediaDeletionNotification.",(0,a.kt)("b",null,"deletedMediaTitle"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The title of the deleted media")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-mediadeletionnotificationbcontextbcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"MediaDeletionNotification.",(0,a.kt)("b",null,"context"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The reason for the media deletion")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-mediadeletionnotificationbreasonbcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"MediaDeletionNotification.",(0,a.kt)("b",null,"reason"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The reason for the media deletion")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-mediadeletionnotificationbcreatedatbcodeint-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"MediaDeletionNotification.",(0,a.kt)("b",null,"createdAt"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,a.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The time the notification was created at")),(0,a.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/schema/unions/notification-union"},(0,a.kt)("inlineCode",{parentName:"a"},"NotificationUnion"))," ",(0,a.kt)(p,{class:"secondary",text:"union",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);