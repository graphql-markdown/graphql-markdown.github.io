"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9228],{3905:(t,e,i)=>{i.d(e,{Zo:()=>s,kt:()=>f});var n=i(7294);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e){if(null==t)return{};var i,n,a=function(t,e){if(null==t)return{};var i,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||(a[i]=t[i]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}var r=n.createContext({}),d=function(t){var e=n.useContext(r),i=e;return t&&(i="function"==typeof t?t(e):c(c({},e),t)),i},s=function(t){var e=d(t.components);return n.createElement(r.Provider,{value:e},t.children)},y={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var i=t.components,a=t.mdxType,o=t.originalType,r=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),p=d(i),f=a,u=p["".concat(r,".").concat(f)]||p[f]||y[f]||o;return i?n.createElement(u,c(c({ref:e},s),{},{components:i})):n.createElement(u,c({ref:e},s))}));function f(t,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=i.length,c=new Array(o);c[0]=p;var l={};for(var r in e)hasOwnProperty.call(e,r)&&(l[r]=e[r]);l.originalType=t,l.mdxType="string"==typeof t?t:a,c[1]=l;for(var d=2;d<o;d++)c[d]=i[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},2525:(t,e,i)=>{i.r(e),i.d(e,{Badge:()=>f,Bullet:()=>y,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>s});var n=i(7462),a=i(7294),o=i(3905);const c={id:"activity-reply-notification",title:"ActivityReplyNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,r={unversionedId:"objects/activity-reply-notification",id:"objects/activity-reply-notification",title:"ActivityReplyNotification",description:"Notification for when a user replies to the authenticated users activity",source:"@site/examples/schema/objects/activity-reply-notification.mdx",sourceDirName:"objects",slug:"/objects/activity-reply-notification",permalink:"/schema/objects/activity-reply-notification",draft:!1,tags:[],version:"current",frontMatter:{id:"activity-reply-notification",title:"ActivityReplyNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplyNotification.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplynotificationbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplyNotification.<b>userId</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplynotificationbuseridbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplyNotification.<b>type</b></code><Bullet /><code>NotificationType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-activityreplynotificationbtypebcodenotificationtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplyNotification.<b>activityId</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplynotificationbactivityidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplyNotification.<b>context</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplynotificationbcontextbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplyNotification.<b>createdAt</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplynotificationbcreatedatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplyNotification.<b>activity</b></code><Bullet /><code>ActivityUnion</code> <Badge class="secondary" text="union"/>',id:"code-style-fontweight-normal-activityreplynotificationbactivitybcodeactivityunion-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplyNotification.<b>user</b></code><Bullet /><code>User</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-activityreplynotificationbuserbcodeuser-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],y=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=t=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),f=t=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+t.class},t.text)),u={toc:s,Bullet:y,SpecifiedBy:p,Badge:f};function m(t){let{components:e,...i}=t;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Notification for when a user replies to the authenticated users activity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type ActivityReplyNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  activityId: Int!\n  context: String\n  createdAt: Int\n  activity: ActivityUnion\n  user: User\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplynotificationbidbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplyNotification.",(0,o.kt)("b",null,"id"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The id of the Notification")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplynotificationbuseridbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplyNotification.",(0,o.kt)("b",null,"userId"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The id of the user who replied to the activity")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplynotificationbtypebcodenotificationtype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplyNotification.",(0,o.kt)("b",null,"type"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,o.kt)("inlineCode",{parentName:"a"},"NotificationType"))," ",(0,o.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The type of notification")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplynotificationbactivityidbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplyNotification.",(0,o.kt)("b",null,"activityId"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The id of the activity which was replied too")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplynotificationbcontextbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplyNotification.",(0,o.kt)("b",null,"context"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The notification context text")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplynotificationbcreatedatbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplyNotification.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The time the notification was created at")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplynotificationbactivitybcodeactivityunion-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplyNotification.",(0,o.kt)("b",null,"activity"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/unions/activity-union"},(0,o.kt)("inlineCode",{parentName:"a"},"ActivityUnion"))," ",(0,o.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The liked activity")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplynotificationbuserbcodeuser-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplyNotification.",(0,o.kt)("b",null,"user"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The user who replied to the activity")),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/schema/unions/notification-union"},(0,o.kt)("inlineCode",{parentName:"a"},"NotificationUnion"))," ",(0,o.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);