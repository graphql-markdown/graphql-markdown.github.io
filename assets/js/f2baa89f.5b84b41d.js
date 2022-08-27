"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[8589],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>u});var i=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var r=i.createContext({}),d=function(t){var e=i.useContext(r),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},s=function(t){var e=d(t.components);return i.createElement(r.Provider,{value:e},t.children)},y={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,r=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=d(n),u=o,f=m["".concat(r,".").concat(u)]||m[u]||y[u]||a;return n?i.createElement(f,c(c({ref:e},s),{},{components:n})):i.createElement(f,c({ref:e},s))}));function u(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var r in e)hasOwnProperty.call(e,r)&&(l[r]=e[r]);l.originalType=t,l.mdxType="string"==typeof t?t:o,c[1]=l;for(var d=2;d<a;d++)c[d]=n[d];return i.createElement.apply(null,c)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1365:(t,e,n)=>{n.r(e),n.d(e,{Badge:()=>u,Bullet:()=>y,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>s});var i=n(7462),o=n(7294),a=n(3905);const c={id:"activity-mention-notification",title:"ActivityMentionNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,r={unversionedId:"schema/objects/activity-mention-notification",id:"schema/objects/activity-mention-notification",title:"ActivityMentionNotification",description:"Notification for when authenticated user is @ mentioned in activity or reply",source:"@site/docs/schema/objects/activity-mention-notification.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/activity-mention-notification",permalink:"/schema/objects/activity-mention-notification",draft:!1,tags:[],version:"current",frontMatter:{id:"activity-mention-notification",title:"ActivityMentionNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityMentionNotification.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitymentionnotificationbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityMentionNotification.<b>userId</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitymentionnotificationbuseridbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityMentionNotification.<b>type</b></code><Bullet /><code>NotificationType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-activitymentionnotificationbtypebcodenotificationtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityMentionNotification.<b>activityId</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitymentionnotificationbactivityidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityMentionNotification.<b>context</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitymentionnotificationbcontextbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityMentionNotification.<b>createdAt</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitymentionnotificationbcreatedatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityMentionNotification.<b>activity</b></code><Bullet /><code>ActivityUnion</code> <Badge class="secondary" text="union"/>',id:"code-style-fontweight-normal-activitymentionnotificationbactivitybcodeactivityunion-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityMentionNotification.<b>user</b></code><Bullet /><code>User</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-activitymentionnotificationbuserbcodeuser-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],y=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=t=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),u=t=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+t.class},t.text)),f={toc:s,Bullet:y,SpecifiedBy:m,Badge:u};function p(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,i.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Notification for when authenticated user is @ mentioned in activity or reply"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type ActivityMentionNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  activityId: Int!\n  context: String\n  createdAt: Int\n  activity: ActivityUnion\n  user: User\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-activitymentionnotificationbidbcodeint--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ActivityMentionNotification.",(0,a.kt)("b",null,"id"))),(0,a.kt)(y,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The id of the Notification")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-activitymentionnotificationbuseridbcodeint--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ActivityMentionNotification.",(0,a.kt)("b",null,"userId"))),(0,a.kt)(y,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The id of the user who mentioned the authenticated user")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-activitymentionnotificationbtypebcodenotificationtype-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ActivityMentionNotification.",(0,a.kt)("b",null,"type"))),(0,a.kt)(y,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,a.kt)("inlineCode",{parentName:"a"},"NotificationType"))," ",(0,a.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The type of notification")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-activitymentionnotificationbactivityidbcodeint--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ActivityMentionNotification.",(0,a.kt)("b",null,"activityId"))),(0,a.kt)(y,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The id of the activity where mentioned")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-activitymentionnotificationbcontextbcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ActivityMentionNotification.",(0,a.kt)("b",null,"context"))),(0,a.kt)(y,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The notification context text")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-activitymentionnotificationbcreatedatbcodeint-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ActivityMentionNotification.",(0,a.kt)("b",null,"createdAt"))),(0,a.kt)(y,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The time the notification was created at")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-activitymentionnotificationbactivitybcodeactivityunion-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ActivityMentionNotification.",(0,a.kt)("b",null,"activity"))),(0,a.kt)(y,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/unions/activity-union"},(0,a.kt)("inlineCode",{parentName:"a"},"ActivityUnion"))," ",(0,a.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The liked activity")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-activitymentionnotificationbuserbcodeuser-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ActivityMentionNotification.",(0,a.kt)("b",null,"user"))),(0,a.kt)(y,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,a.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The user who mentioned the authenticated user")),(0,a.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/schema/unions/notification-union"},(0,a.kt)("inlineCode",{parentName:"a"},"NotificationUnion"))," ",(0,a.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"})))}p.isMDXComponent=!0}}]);