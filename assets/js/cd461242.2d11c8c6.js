"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9340],{4137:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var r=i.createContext({}),d=function(e){var t=i.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return i.createElement(r.Provider,{value:t},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),y=d(a),f=n,u=y["".concat(r,".").concat(f)]||y[f]||p[f]||o;return a?i.createElement(u,l(l({ref:t},s),{},{components:a})):i.createElement(u,l({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=f;var c={};for(var r in t)hasOwnProperty.call(t,r)&&(c[r]=t[r]);c.originalType=e,c[y]="string"==typeof e?e:n,l[1]=c;for(var d=2;d<o;d++)l[d]=a[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}f.displayName="MDXCreateElement"},1966:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>u,SpecifiedBy:()=>y,assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>f});var i=a(7462),n=a(7294),o=a(4137);const l={id:"activity-reply-notification",title:"ActivityReplyNotification",hide_table_of_contents:!1},c=void 0,r={unversionedId:"objects/activity-reply-notification",id:"objects/activity-reply-notification",title:"ActivityReplyNotification",description:"Notification for when a user replies to the authenticated users activity",source:"@site/examples/default/objects/activity-reply-notification.mdx",sourceDirName:"objects",slug:"/objects/activity-reply-notification",permalink:"/examples/default/objects/activity-reply-notification",draft:!1,tags:[],version:"current",frontMatter:{id:"activity-reply-notification",title:"ActivityReplyNotification",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ActivityReplyLikeNotification",permalink:"/examples/default/objects/activity-reply-like-notification"},next:{title:"ActivityReplySubscribedNotification",permalink:"/examples/default/objects/activity-reply-subscribed-notification"}},d={},s=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),y=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplyNotification.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplynotificationbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplyNotification.<b>userId</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplynotificationbuseridbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplyNotification.<b>type</b></code><Bullet /><code>NotificationType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-activityreplynotificationbtypebcodenotificationtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplyNotification.<b>activityId</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplynotificationbactivityidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplyNotification.<b>context</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplynotificationbcontextbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplyNotification.<b>createdAt</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplynotificationbcreatedatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplyNotification.<b>activity</b></code><Bullet /><code>ActivityUnion</code> <Badge class="badge badge--secondary" text="union"/>',id:"code-style-fontweight-normal-activityreplynotificationbactivitybcodeactivityunion-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReplyNotification.<b>user</b></code><Bullet /><code>User</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-activityreplynotificationbuserbcodeuser-",level:4},{value:"Implemented By",id:"implemented-by",level:3}],u=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:c=!1}=e;const[r,d]=(0,n.useState)(c);return(0,o.kt)("details",(0,i.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},r?t:a),r&&l)},b={Bullet:s,SpecifiedBy:y,Badge:p,toc:f,Details:u};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("meta",{name:"googlebot",content:"noindex"}),(0,o.kt)("meta",{charset:"utf-8"})),(0,o.kt)("p",null,"Notification for when a user replies to the authenticated users activity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type ActivityReplyNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  activityId: Int!\n  context: String\n  createdAt: Int\n  activity: ActivityUnion\n  user: User\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplynotificationbidbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplyNotification.",(0,o.kt)("b",null,"id"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The id of the Notification")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplynotificationbuseridbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplyNotification.",(0,o.kt)("b",null,"userId"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The id of the user who replied to the activity")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplynotificationbtypebcodenotificationtype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplyNotification.",(0,o.kt)("b",null,"type"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/enums/notification-type"},(0,o.kt)("inlineCode",{parentName:"a"},"NotificationType"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The type of notification")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplynotificationbactivityidbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplyNotification.",(0,o.kt)("b",null,"activityId"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The id of the activity which was replied too")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplynotificationbcontextbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplyNotification.",(0,o.kt)("b",null,"context"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The notification context text")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplynotificationbcreatedatbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplyNotification.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The time the notification was created at")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplynotificationbactivitybcodeactivityunion-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplyNotification.",(0,o.kt)("b",null,"activity"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/unions/activity-union"},(0,o.kt)("inlineCode",{parentName:"a"},"ActivityUnion"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The liked activity")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityreplynotificationbuserbcodeuser-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityReplyNotification.",(0,o.kt)("b",null,"user"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The user who replied to the activity")),(0,o.kt)("h3",{id:"implemented-by"},"Implemented By"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/examples/default/unions/notification-union"},(0,o.kt)("inlineCode",{parentName:"a"},"NotificationUnion"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);