"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[268],{4137:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>u});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var r=a.createContext({}),d=function(e){var t=a.useContext(r),i=t;return e&&(i="function"==typeof e?e(t):c(c({},t),e)),i},s=function(e){var t=d(e.components);return a.createElement(r.Provider,{value:t},e.children)},b="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=d(i),p=n,u=b["".concat(r,".").concat(p)]||b[p]||y[p]||o;return i?a.createElement(u,c(c({ref:t},s),{},{components:i})):a.createElement(u,c({ref:t},s))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,c=new Array(o);c[0]=p;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[b]="string"==typeof e?e:n,c[1]=l;for(var d=2;d<o;d++)c[d]=i[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},8106:(e,t,i)=>{i.r(t),i.d(t,{Badge:()=>y,Bullet:()=>s,Details:()=>u,SpecifiedBy:()=>b,assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>p});var a=i(7462),n=i(7294),o=i(4137);const c={id:"activity-reply-subscribed-notification",title:"ActivityReplySubscribedNotification",hide_table_of_contents:!1},l=void 0,r={unversionedId:"objects/activity-reply-subscribed-notification",id:"objects/activity-reply-subscribed-notification",title:"ActivityReplySubscribedNotification",description:"Notification for when a user replies to activity the authenticated user has replied to",source:"@site/examples/default/objects/activity-reply-subscribed-notification.mdx",sourceDirName:"objects",slug:"/objects/activity-reply-subscribed-notification",permalink:"/examples/default/objects/activity-reply-subscribed-notification",draft:!1,tags:[],version:"current",frontMatter:{id:"activity-reply-subscribed-notification",title:"ActivityReplySubscribedNotification",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ActivityReplyNotification",permalink:"/examples/default/objects/activity-reply-notification"},next:{title:"ActivityReply",permalink:"/examples/default/objects/activity-reply"}},d={},s=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplySubscribedNotification.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplysubscribednotificationbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplySubscribedNotification.<b>userId</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplysubscribednotificationbuseridbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplySubscribedNotification.<b>type</b></code><Bullet /><code>NotificationType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-activityreplysubscribednotificationbtypebcodenotificationtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplySubscribedNotification.<b>activityId</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplysubscribednotificationbactivityidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplySubscribedNotification.<b>context</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplysubscribednotificationbcontextbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplySubscribedNotification.<b>createdAt</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplysubscribednotificationbcreatedatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplySubscribedNotification.<b>activity</b></code><Bullet /><code>ActivityUnion</code> <Badge class="badge badge--secondary" text="union"/>',id:"code-style-fontweight-normal-activityreplysubscribednotificationbactivitybcodeactivityunion-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplySubscribedNotification.<b>user</b></code><Bullet /><code>User</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-activityreplysubscribednotificationbuserbcodeuser-",level:4},{value:"Implemented By",id:"implemented-by",level:3}],u=e=>{let{dataOpen:t,dataClose:i,children:c,startOpen:l=!1}=e;const[r,d]=(0,n.useState)(l);return(0,o.kt)("details",(0,a.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},r?t:i),r&&c)},f={Bullet:s,SpecifiedBy:b,Badge:y,toc:p,Details:u};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("meta",{name:"googlebot",content:"noindex"}),(0,o.kt)("meta",{charset:"utf-8"})),(0,o.kt)("p",null,"Notification for when a user replies to activity the authenticated user has replied to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type ActivityReplySubscribedNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  activityId: Int!\n  context: String\n  createdAt: Int\n  activity: ActivityUnion\n  user: User\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplysubscribednotificationbidbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplySubscribedNotification.",(0,o.kt)("b",null,"id"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The id of the Notification")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplysubscribednotificationbuseridbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplySubscribedNotification.",(0,o.kt)("b",null,"userId"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The id of the user who replied to the activity")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplysubscribednotificationbtypebcodenotificationtype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplySubscribedNotification.",(0,o.kt)("b",null,"type"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/enums/notification-type"},(0,o.kt)("inlineCode",{parentName:"a"},"NotificationType"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The type of notification")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplysubscribednotificationbactivityidbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplySubscribedNotification.",(0,o.kt)("b",null,"activityId"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The id of the activity which was replied too")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplysubscribednotificationbcontextbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplySubscribedNotification.",(0,o.kt)("b",null,"context"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The notification context text")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplysubscribednotificationbcreatedatbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplySubscribedNotification.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The time the notification was created at")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplysubscribednotificationbactivitybcodeactivityunion-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplySubscribedNotification.",(0,o.kt)("b",null,"activity"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/unions/activity-union"},(0,o.kt)("inlineCode",{parentName:"a"},"ActivityUnion"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The liked activity")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplysubscribednotificationbuserbcodeuser-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplySubscribedNotification.",(0,o.kt)("b",null,"user"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The user who replied to the activity")),(0,o.kt)("h3",{id:"implemented-by"},"Implemented By"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/examples/default/unions/notification-union"},(0,o.kt)("inlineCode",{parentName:"a"},"NotificationUnion"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);