"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[4504],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>b});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):c(c({},t),e)),i},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),y=s(i),u=a,b=y["".concat(l,".").concat(u)]||y[u]||p[u]||o;return i?n.createElement(b,c(c({ref:t},d),{},{components:i})):n.createElement(b,c({ref:t},d))}));function b(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,c=new Array(o);c[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[y]="string"==typeof e?e:a,c[1]=r;for(var s=2;s<o;s++)c[s]=i[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},2182:(e,t,i)=>{i.r(t),i.d(t,{Badge:()=>u,Bullet:()=>y,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>r,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=i(7462),a=i(7294),o=i(3905);const c={id:"activity-reply-subscribed-notification",title:"ActivityReplySubscribedNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},r=void 0,l={unversionedId:"objects/activity-reply-subscribed-notification",id:"objects/activity-reply-subscribed-notification",title:"ActivityReplySubscribedNotification",description:"Notification for when a user replies to activity the authenticated user has replied to",source:"@site/examples/schema/objects/activity-reply-subscribed-notification.mdx",sourceDirName:"objects",slug:"/objects/activity-reply-subscribed-notification",permalink:"/schema/objects/activity-reply-subscribed-notification",draft:!1,tags:[],version:"current",frontMatter:{id:"activity-reply-subscribed-notification",title:"ActivityReplySubscribedNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplySubscribedNotification.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplysubscribednotificationbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplySubscribedNotification.<b>userId</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplysubscribednotificationbuseridbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplySubscribedNotification.<b>type</b></code><Bullet /><code>NotificationType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-activityreplysubscribednotificationbtypebcodenotificationtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplySubscribedNotification.<b>activityId</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplysubscribednotificationbactivityidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplySubscribedNotification.<b>context</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplysubscribednotificationbcontextbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplySubscribedNotification.<b>createdAt</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplysubscribednotificationbcreatedatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplySubscribedNotification.<b>activity</b></code><Bullet /><code>ActivityUnion</code> <Badge class="secondary" text="union"/>',id:"code-style-fontweight-normal-activityreplysubscribednotificationbactivitybcodeactivityunion-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplySubscribedNotification.<b>user</b></code><Bullet /><code>User</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-activityreplysubscribednotificationbuserbcodeuser-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],y=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:d,Bullet:y,SpecifiedBy:p,Badge:u};function f(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Notification for when a user replies to activity the authenticated user has replied to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type ActivityReplySubscribedNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  activityId: Int!\n  context: String\n  createdAt: Int\n  activity: ActivityUnion\n  user: User\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplysubscribednotificationbidbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplySubscribedNotification.",(0,o.kt)("b",null,"id"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The id of the Notification")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplysubscribednotificationbuseridbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplySubscribedNotification.",(0,o.kt)("b",null,"userId"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The id of the user who replied to the activity")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplysubscribednotificationbtypebcodenotificationtype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplySubscribedNotification.",(0,o.kt)("b",null,"type"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,o.kt)("inlineCode",{parentName:"a"},"NotificationType"))," ",(0,o.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The type of notification")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplysubscribednotificationbactivityidbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplySubscribedNotification.",(0,o.kt)("b",null,"activityId"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The id of the activity which was replied too")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplysubscribednotificationbcontextbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplySubscribedNotification.",(0,o.kt)("b",null,"context"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The notification context text")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplysubscribednotificationbcreatedatbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplySubscribedNotification.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The time the notification was created at")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplysubscribednotificationbactivitybcodeactivityunion-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplySubscribedNotification.",(0,o.kt)("b",null,"activity"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/unions/activity-union"},(0,o.kt)("inlineCode",{parentName:"a"},"ActivityUnion"))," ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The liked activity")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplysubscribednotificationbuserbcodeuser-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplySubscribedNotification.",(0,o.kt)("b",null,"user"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The user who replied to the activity")),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/schema/unions/notification-union"},(0,o.kt)("inlineCode",{parentName:"a"},"NotificationUnion"))," ",(0,o.kt)(u,{className:"secondary",text:"union",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);