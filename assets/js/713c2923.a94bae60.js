"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[9083],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=s(a),u=i,m=h["".concat(c,".").concat(u)]||h[u]||p[u]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7971:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const r={id:"list-activity",title:"ListActivity",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,l={unversionedId:"schema/objects/list-activity",id:"schema/objects/list-activity",title:"ListActivity",description:"User list activity (anime & manga updates)",source:"@site/docs/schema/objects/list-activity.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/list-activity",permalink:"/schema/objects/list-activity",draft:!1,tags:[],version:"current",frontMatter:{id:"list-activity",title:"ListActivity",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},c={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int!</code>)",id:"id-int",level:4},{value:"<code>userId</code> (<code>Int</code>)",id:"userid-int",level:4},{value:"<code>type</code> (<code>ActivityType</code>)",id:"type-activitytype",level:4},{value:"<code>replyCount</code> (<code>Int!</code>)",id:"replycount-int",level:4},{value:"<code>status</code> (<code>String</code>)",id:"status-string",level:4},{value:"<code>progress</code> (<code>String</code>)",id:"progress-string",level:4},{value:"<code>isLocked</code> (<code>Boolean</code>)",id:"islocked-boolean",level:4},{value:"<code>isSubscribed</code> (<code>Boolean</code>)",id:"issubscribed-boolean",level:4},{value:"<code>likeCount</code> (<code>Int!</code>)",id:"likecount-int",level:4},{value:"<code>isLiked</code> (<code>Boolean</code>)",id:"isliked-boolean",level:4},{value:"<code>isPinned</code> (<code>Boolean</code>)",id:"ispinned-boolean",level:4},{value:"<code>siteUrl</code> (<code>String</code>)",id:"siteurl-string",level:4},{value:"<code>createdAt</code> (<code>Int!</code>)",id:"createdat-int",level:4},{value:"<code>user</code> (<code>User</code>)",id:"user-user",level:4},{value:"<code>media</code> (<code>Media</code>)",id:"media-media",level:4},{value:"<code>replies</code> (<code>[ActivityReply]</code>)",id:"replies-activityreply",level:4},{value:"<code>likes</code> (<code>[User]</code>)",id:"likes-user",level:4}],d={toc:s};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"User list activity (anime & manga updates)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type ListActivity {\n  id: Int!\n  userId: Int\n  type: ActivityType\n  replyCount: Int!\n  status: String\n  progress: String\n  isLocked: Boolean\n  isSubscribed: Boolean\n  likeCount: Int!\n  isLiked: Boolean\n  isPinned: Boolean\n  siteUrl: String\n  createdAt: Int!\n  user: User\n  media: Media\n  replies: [ActivityReply]\n  likes: [User]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The id of the activity"),(0,i.kt)("h4",{id:"userid-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"userId"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The user id of the activity's creator"),(0,i.kt)("h4",{id:"type-activitytype"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"type"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/activity-type"},(0,i.kt)("inlineCode",{parentName:"a"},"ActivityType")),")"),(0,i.kt)("p",null,"The type of activity"),(0,i.kt)("h4",{id:"replycount-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"replyCount"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The number of activity replies"),(0,i.kt)("h4",{id:"status-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"status"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The list item's textual status"),(0,i.kt)("h4",{id:"progress-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"progress"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The list progress made"),(0,i.kt)("h4",{id:"islocked-boolean"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"isLocked"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the activity is locked and can receive replies"),(0,i.kt)("h4",{id:"issubscribed-boolean"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"isSubscribed"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the currently authenticated user is subscribed to the activity"),(0,i.kt)("h4",{id:"likecount-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"likeCount"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The amount of likes the activity has"),(0,i.kt)("h4",{id:"isliked-boolean"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"isLiked"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the currently authenticated user liked the activity"),(0,i.kt)("h4",{id:"ispinned-boolean"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"isPinned"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the activity is pinned to the top of the users activity feed"),(0,i.kt)("h4",{id:"siteurl-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"siteUrl"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The url for the activity page on the AniList website"),(0,i.kt)("h4",{id:"createdat-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"createdAt"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The time the activity was created at"),(0,i.kt)("h4",{id:"user-user"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"user"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,i.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,i.kt)("p",null,"The owner of the activity"),(0,i.kt)("h4",{id:"media-media"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"media"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,i.kt)("inlineCode",{parentName:"a"},"Media")),")"),(0,i.kt)("p",null,"The associated media to the activity update"),(0,i.kt)("h4",{id:"replies-activityreply"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"replies"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/activity-reply"},(0,i.kt)("inlineCode",{parentName:"a"},"[ActivityReply]")),")"),(0,i.kt)("p",null,"The written replies to the activity"),(0,i.kt)("h4",{id:"likes-user"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"likes"))," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,i.kt)("inlineCode",{parentName:"a"},"[User]")),")"),(0,i.kt)("p",null,"The users who liked the activity"))}p.isMDXComponent=!0}}]);