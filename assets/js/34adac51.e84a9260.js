"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[362],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>f});var i=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var r=i.createContext({}),d=function(e){var t=i.useContext(r),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},m=function(e){var t=d(e.components);return i.createElement(r.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},y=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,r=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=d(o),y=n,f=p["".concat(r,".").concat(y)]||p[y]||s[y]||a;return o?i.createElement(f,l(l({ref:t},m),{},{components:o})):i.createElement(f,l({ref:t},m))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=y;var c={};for(var r in t)hasOwnProperty.call(t,r)&&(c[r]=t[r]);c.originalType=e,c[p]="string"==typeof e?e:n,l[1]=c;for(var d=2;d<a;d++)l[d]=o[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,o)}y.displayName="MDXCreateElement"},9415:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>y,Bullet:()=>p,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>l,metadata:()=>r,toc:()=>m});var i=o(7462),n=o(7294),a=o(3905);const l={id:"notification-type",title:"NotificationType",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},c=void 0,r={unversionedId:"enums/notification-type",id:"enums/notification-type",title:"NotificationType",description:"Notification type enum",source:"@site/examples/schema/enums/notification-type.mdx",sourceDirName:"enums",slug:"/enums/notification-type",permalink:"/schema/enums/notification-type",draft:!1,tags:[],version:"current",frontMatter:{id:"notification-type",title:"NotificationType",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>NotificationType.<b>ACTIVITY_MESSAGE</b></code>",id:"code-style-fontweight-normal-notificationtypebactivity_messagebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>NotificationType.<b>ACTIVITY_REPLY</b></code>",id:"code-style-fontweight-normal-notificationtypebactivity_replybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>NotificationType.<b>FOLLOWING</b></code>",id:"code-style-fontweight-normal-notificationtypebfollowingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>NotificationType.<b>ACTIVITY_MENTION</b></code>",id:"code-style-fontweight-normal-notificationtypebactivity_mentionbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>NotificationType.<b>THREAD_COMMENT_MENTION</b></code>",id:"code-style-fontweight-normal-notificationtypebthread_comment_mentionbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>NotificationType.<b>THREAD_SUBSCRIBED</b></code>",id:"code-style-fontweight-normal-notificationtypebthread_subscribedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>NotificationType.<b>THREAD_COMMENT_REPLY</b></code>",id:"code-style-fontweight-normal-notificationtypebthread_comment_replybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>NotificationType.<b>AIRING</b></code>",id:"code-style-fontweight-normal-notificationtypebairingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>NotificationType.<b>ACTIVITY_LIKE</b></code>",id:"code-style-fontweight-normal-notificationtypebactivity_likebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>NotificationType.<b>ACTIVITY_REPLY_LIKE</b></code>",id:"code-style-fontweight-normal-notificationtypebactivity_reply_likebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>NotificationType.<b>THREAD_LIKE</b></code>",id:"code-style-fontweight-normal-notificationtypebthread_likebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>NotificationType.<b>THREAD_COMMENT_LIKE</b></code>",id:"code-style-fontweight-normal-notificationtypebthread_comment_likebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>NotificationType.<b>ACTIVITY_REPLY_SUBSCRIBED</b></code>",id:"code-style-fontweight-normal-notificationtypebactivity_reply_subscribedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>NotificationType.<b>RELATED_MEDIA_ADDITION</b></code>",id:"code-style-fontweight-normal-notificationtypebrelated_media_additionbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>NotificationType.<b>MEDIA_DATA_CHANGE</b></code>",id:"code-style-fontweight-normal-notificationtypebmedia_data_changebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>NotificationType.<b>MEDIA_MERGE</b></code>",id:"code-style-fontweight-normal-notificationtypebmedia_mergebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>NotificationType.<b>MEDIA_DELETION</b></code>",id:"code-style-fontweight-normal-notificationtypebmedia_deletionbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,a.kt)(n.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(n.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,a.kt)(n.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:m,Bullet:p,SpecifiedBy:s,Badge:y};function k(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Notification type enum"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum NotificationType {\n  ACTIVITY_MESSAGE\n  ACTIVITY_REPLY\n  FOLLOWING\n  ACTIVITY_MENTION\n  THREAD_COMMENT_MENTION\n  THREAD_SUBSCRIBED\n  THREAD_COMMENT_REPLY\n  AIRING\n  ACTIVITY_LIKE\n  ACTIVITY_REPLY_LIKE\n  THREAD_LIKE\n  THREAD_COMMENT_LIKE\n  ACTIVITY_REPLY_SUBSCRIBED\n  RELATED_MEDIA_ADDITION\n  MEDIA_DATA_CHANGE\n  MEDIA_MERGE\n  MEDIA_DELETION\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-notificationtypebactivity_messagebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"NotificationType.",(0,a.kt)("b",null,"ACTIVITY_MESSAGE")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A user has sent you message")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-notificationtypebactivity_replybcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"NotificationType.",(0,a.kt)("b",null,"ACTIVITY_REPLY")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A user has replied to your activity")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-notificationtypebfollowingbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"NotificationType.",(0,a.kt)("b",null,"FOLLOWING")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A user has followed you")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-notificationtypebactivity_mentionbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"NotificationType.",(0,a.kt)("b",null,"ACTIVITY_MENTION")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A user has mentioned you in their activity")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-notificationtypebthread_comment_mentionbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"NotificationType.",(0,a.kt)("b",null,"THREAD_COMMENT_MENTION")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A user has mentioned you in a forum comment")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-notificationtypebthread_subscribedbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"NotificationType.",(0,a.kt)("b",null,"THREAD_SUBSCRIBED")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A user has commented in one of your subscribed forum threads")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-notificationtypebthread_comment_replybcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"NotificationType.",(0,a.kt)("b",null,"THREAD_COMMENT_REPLY")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A user has replied to your forum comment")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-notificationtypebairingbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"NotificationType.",(0,a.kt)("b",null,"AIRING")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"An anime you are currently watching has aired")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-notificationtypebactivity_likebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"NotificationType.",(0,a.kt)("b",null,"ACTIVITY_LIKE")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A user has liked your activity")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-notificationtypebactivity_reply_likebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"NotificationType.",(0,a.kt)("b",null,"ACTIVITY_REPLY_LIKE")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A user has liked your activity reply")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-notificationtypebthread_likebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"NotificationType.",(0,a.kt)("b",null,"THREAD_LIKE")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A user has liked your forum thread")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-notificationtypebthread_comment_likebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"NotificationType.",(0,a.kt)("b",null,"THREAD_COMMENT_LIKE")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A user has liked your forum comment")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-notificationtypebactivity_reply_subscribedbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"NotificationType.",(0,a.kt)("b",null,"ACTIVITY_REPLY_SUBSCRIBED")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A user has replied to activity you have also replied to")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-notificationtypebrelated_media_additionbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"NotificationType.",(0,a.kt)("b",null,"RELATED_MEDIA_ADDITION")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A new anime or manga has been added to the site where its related media is on the user's list")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-notificationtypebmedia_data_changebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"NotificationType.",(0,a.kt)("b",null,"MEDIA_DATA_CHANGE")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"An anime or manga has had a data change that affects how a user may track it in their lists")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-notificationtypebmedia_mergebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"NotificationType.",(0,a.kt)("b",null,"MEDIA_MERGE")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Anime or manga entries on the user's list have been merged into a single entry")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-notificationtypebmedia_deletionbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"NotificationType.",(0,a.kt)("b",null,"MEDIA_DELETION")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"An anime or manga on the user's list has been deleted from the site")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/schema/objects/activity-like-notification"},(0,a.kt)("inlineCode",{parentName:"a"},"ActivityLikeNotification"))," ",(0,a.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/schema/objects/activity-mention-notification"},(0,a.kt)("inlineCode",{parentName:"a"},"ActivityMentionNotification"))," ",(0,a.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/schema/objects/activity-message-notification"},(0,a.kt)("inlineCode",{parentName:"a"},"ActivityMessageNotification"))," ",(0,a.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/schema/objects/activity-reply-like-notification"},(0,a.kt)("inlineCode",{parentName:"a"},"ActivityReplyLikeNotification"))," ",(0,a.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/schema/objects/activity-reply-notification"},(0,a.kt)("inlineCode",{parentName:"a"},"ActivityReplyNotification"))," ",(0,a.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/schema/objects/activity-reply-subscribed-notification"},(0,a.kt)("inlineCode",{parentName:"a"},"ActivityReplySubscribedNotification"))," ",(0,a.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/schema/objects/airing-notification"},(0,a.kt)("inlineCode",{parentName:"a"},"AiringNotification"))," ",(0,a.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/schema/objects/following-notification"},(0,a.kt)("inlineCode",{parentName:"a"},"FollowingNotification"))," ",(0,a.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/schema/objects/media-data-change-notification"},(0,a.kt)("inlineCode",{parentName:"a"},"MediaDataChangeNotification"))," ",(0,a.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/schema/objects/media-deletion-notification"},(0,a.kt)("inlineCode",{parentName:"a"},"MediaDeletionNotification"))," ",(0,a.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/schema/objects/media-merge-notification"},(0,a.kt)("inlineCode",{parentName:"a"},"MediaMergeNotification"))," ",(0,a.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/schema/queries/notification"},(0,a.kt)("inlineCode",{parentName:"a"},"Notification"))," ",(0,a.kt)(y,{class:"secondary",text:"query",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/schema/objects/notification-option"},(0,a.kt)("inlineCode",{parentName:"a"},"NotificationOption"))," ",(0,a.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/schema/inputs/notification-option-input"},(0,a.kt)("inlineCode",{parentName:"a"},"NotificationOptionInput"))," ",(0,a.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/schema/objects/related-media-addition-notification"},(0,a.kt)("inlineCode",{parentName:"a"},"RelatedMediaAdditionNotification"))," ",(0,a.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/schema/objects/thread-comment-like-notification"},(0,a.kt)("inlineCode",{parentName:"a"},"ThreadCommentLikeNotification"))," ",(0,a.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/schema/objects/thread-comment-mention-notification"},(0,a.kt)("inlineCode",{parentName:"a"},"ThreadCommentMentionNotification"))," ",(0,a.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/schema/objects/thread-comment-reply-notification"},(0,a.kt)("inlineCode",{parentName:"a"},"ThreadCommentReplyNotification"))," ",(0,a.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/schema/objects/thread-comment-subscribed-notification"},(0,a.kt)("inlineCode",{parentName:"a"},"ThreadCommentSubscribedNotification"))," ",(0,a.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/schema/objects/thread-like-notification"},(0,a.kt)("inlineCode",{parentName:"a"},"ThreadLikeNotification"))," ",(0,a.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);