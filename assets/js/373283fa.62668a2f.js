"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[3217],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>p});var a=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,a,o=function(e,t){if(null==e)return{};var i,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):c(c({},t),e)),i},s=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),f=d(i),p=o,u=f["".concat(l,".").concat(p)]||f[p]||m[p]||n;return i?a.createElement(u,c(c({ref:t},s),{},{components:i})):a.createElement(u,c({ref:t},s))}));function p(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,c=new Array(n);c[0]=f;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,c[1]=r;for(var d=2;d<n;d++)c[d]=i[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,i)}f.displayName="MDXCreateElement"},8094:(e,t,i)=>{i.r(t),i.d(t,{Badge:()=>p,Bullet:()=>m,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>r,default:()=>k,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var a=i(7462),o=i(7294),n=i(3905);const c={id:"notification-union",title:"NotificationUnion",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},r=void 0,l={unversionedId:"schema/unions/notification-union",id:"schema/unions/notification-union",title:"NotificationUnion",description:"Notification union type",source:"@site/docs/schema/unions/notification-union.mdx",sourceDirName:"schema/unions",slug:"/schema/unions/notification-union",permalink:"/schema/unions/notification-union",draft:!1,tags:[],version:"current",frontMatter:{id:"notification-union",title:"NotificationUnion",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},d={},s=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>AiringNotification</code> <Badge class="secondary" text="object"/>',id:"airingnotification-",level:4},{value:'<code>FollowingNotification</code> <Badge class="secondary" text="object"/>',id:"followingnotification-",level:4},{value:'<code>ActivityMessageNotification</code> <Badge class="secondary" text="object"/>',id:"activitymessagenotification-",level:4},{value:'<code>ActivityMentionNotification</code> <Badge class="secondary" text="object"/>',id:"activitymentionnotification-",level:4},{value:'<code>ActivityReplyNotification</code> <Badge class="secondary" text="object"/>',id:"activityreplynotification-",level:4},{value:'<code>ActivityReplySubscribedNotification</code> <Badge class="secondary" text="object"/>',id:"activityreplysubscribednotification-",level:4},{value:'<code>ActivityLikeNotification</code> <Badge class="secondary" text="object"/>',id:"activitylikenotification-",level:4},{value:'<code>ActivityReplyLikeNotification</code> <Badge class="secondary" text="object"/>',id:"activityreplylikenotification-",level:4},{value:'<code>ThreadCommentMentionNotification</code> <Badge class="secondary" text="object"/>',id:"threadcommentmentionnotification-",level:4},{value:'<code>ThreadCommentReplyNotification</code> <Badge class="secondary" text="object"/>',id:"threadcommentreplynotification-",level:4},{value:'<code>ThreadCommentSubscribedNotification</code> <Badge class="secondary" text="object"/>',id:"threadcommentsubscribednotification-",level:4},{value:'<code>ThreadCommentLikeNotification</code> <Badge class="secondary" text="object"/>',id:"threadcommentlikenotification-",level:4},{value:'<code>ThreadLikeNotification</code> <Badge class="secondary" text="object"/>',id:"threadlikenotification-",level:4},{value:'<code>RelatedMediaAdditionNotification</code> <Badge class="secondary" text="object"/>',id:"relatedmediaadditionnotification-",level:4},{value:'<code>MediaDataChangeNotification</code> <Badge class="secondary" text="object"/>',id:"mediadatachangenotification-",level:4},{value:'<code>MediaMergeNotification</code> <Badge class="secondary" text="object"/>',id:"mediamergenotification-",level:4},{value:'<code>MediaDeletionNotification</code> <Badge class="secondary" text="object"/>',id:"mediadeletionnotification-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],m=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{class:"badge badge--"+e.class},e.text)),u={toc:s,Bullet:m,SpecifiedBy:f,Badge:p};function k(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Notification union type"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"union NotificationUnion =\n    AiringNotification\n  | FollowingNotification\n  | ActivityMessageNotification\n  | ActivityMentionNotification\n  | ActivityReplyNotification\n  | ActivityReplySubscribedNotification\n  | ActivityLikeNotification\n  | ActivityReplyLikeNotification\n  | ThreadCommentMentionNotification\n  | ThreadCommentReplyNotification\n  | ThreadCommentSubscribedNotification\n  | ThreadCommentLikeNotification\n  | ThreadLikeNotification\n  | RelatedMediaAdditionNotification\n  | MediaDataChangeNotification\n  | MediaMergeNotification\n  | MediaDeletionNotification\n")),(0,n.kt)("h3",{id:"possible-types"},"Possible types"),(0,n.kt)("h4",{id:"airingnotification-"},(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/airing-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"AiringNotification"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Notification for when an episode of anime airs")),(0,n.kt)("h4",{id:"followingnotification-"},(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/following-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"FollowingNotification"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Notification for when the authenticated user is followed by another user")),(0,n.kt)("h4",{id:"activitymessagenotification-"},(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/activity-message-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"ActivityMessageNotification"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Notification for when a user is send an activity message")),(0,n.kt)("h4",{id:"activitymentionnotification-"},(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/activity-mention-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"ActivityMentionNotification"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Notification for when authenticated user is @ mentioned in activity or reply")),(0,n.kt)("h4",{id:"activityreplynotification-"},(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/activity-reply-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"ActivityReplyNotification"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Notification for when a user replies to the authenticated users activity")),(0,n.kt)("h4",{id:"activityreplysubscribednotification-"},(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/activity-reply-subscribed-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"ActivityReplySubscribedNotification"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Notification for when a user replies to activity the authenticated user has replied to")),(0,n.kt)("h4",{id:"activitylikenotification-"},(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/activity-like-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"ActivityLikeNotification"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Notification for when a activity is liked")),(0,n.kt)("h4",{id:"activityreplylikenotification-"},(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/activity-reply-like-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"ActivityReplyLikeNotification"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Notification for when a activity reply is liked")),(0,n.kt)("h4",{id:"threadcommentmentionnotification-"},(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/thread-comment-mention-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"ThreadCommentMentionNotification"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Notification for when authenticated user is @ mentioned in a forum thread comment")),(0,n.kt)("h4",{id:"threadcommentreplynotification-"},(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/thread-comment-reply-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"ThreadCommentReplyNotification"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Notification for when a user replies to your forum thread comment")),(0,n.kt)("h4",{id:"threadcommentsubscribednotification-"},(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/thread-comment-subscribed-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"ThreadCommentSubscribedNotification"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Notification for when a user replies to a subscribed forum thread")),(0,n.kt)("h4",{id:"threadcommentlikenotification-"},(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/thread-comment-like-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"ThreadCommentLikeNotification"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Notification for when a thread comment is liked")),(0,n.kt)("h4",{id:"threadlikenotification-"},(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/thread-like-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"ThreadLikeNotification"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Notification for when a thread is liked")),(0,n.kt)("h4",{id:"relatedmediaadditionnotification-"},(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/related-media-addition-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"RelatedMediaAdditionNotification"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Notification for when new media is added to the site")),(0,n.kt)("h4",{id:"mediadatachangenotification-"},(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/media-data-change-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"MediaDataChangeNotification"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Notification for when a media entry's data was changed in a significant way impacting users' list tracking")),(0,n.kt)("h4",{id:"mediamergenotification-"},(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/media-merge-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"MediaMergeNotification"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Notification for when a media entry is merged into another for a user who had it on their list")),(0,n.kt)("h4",{id:"mediadeletionnotification-"},(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/media-deletion-notification"},(0,n.kt)("inlineCode",{parentName:"a"},"MediaDeletionNotification"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Notification for when a media tracked in a user's list is deleted from the site")),(0,n.kt)("h3",{id:"returned-by"},"Returned by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/schema/queries/notification"},(0,n.kt)("inlineCode",{parentName:"a"},"Notification"))," ",(0,n.kt)(p,{class:"secondary",text:"query",mdxType:"Badge"})),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/schema/objects/internal-page"},(0,n.kt)("inlineCode",{parentName:"a"},"InternalPage"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/schema/objects/page"},(0,n.kt)("inlineCode",{parentName:"a"},"Page"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);