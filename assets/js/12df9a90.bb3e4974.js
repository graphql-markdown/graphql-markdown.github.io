"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[5156],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,k=u["".concat(c,".").concat(h)]||u[h]||p[h]||r;return n?i.createElement(k,o(o({ref:t},s),{},{components:n})):i.createElement(k,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7551:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"text-activity",title:"TextActivity",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},c=void 0,d={unversionedId:"schema/objects/text-activity",id:"schema/objects/text-activity",title:"TextActivity",description:"User text activity",source:"@site/docs/schema/objects/text-activity.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/text-activity",permalink:"/schema/objects/text-activity",draft:!1,tags:[],version:"current",frontMatter:{id:"text-activity",title:"TextActivity",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},s={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>userId</code> (<code>Int</code>)",id:"userid-int",level:4},{value:"<code>type</code> (<code>ActivityType</code>)",id:"type-activitytype",level:4},{value:"<code>replyCount</code> (<code>Int</code>)",id:"replycount-int",level:4},{value:"<code>text</code> (<code>String</code>)",id:"text-string",level:4},{value:"<code>siteUrl</code> (<code>String</code>)",id:"siteurl-string",level:4},{value:"<code>isLocked</code> (<code>Boolean</code>)",id:"islocked-boolean",level:4},{value:"<code>isSubscribed</code> (<code>Boolean</code>)",id:"issubscribed-boolean",level:4},{value:"<code>likeCount</code> (<code>Int</code>)",id:"likecount-int",level:4},{value:"<code>isLiked</code> (<code>Boolean</code>)",id:"isliked-boolean",level:4},{value:"<code>isPinned</code> (<code>Boolean</code>)",id:"ispinned-boolean",level:4},{value:"<code>createdAt</code> (<code>Int</code>)",id:"createdat-int",level:4},{value:"<code>user</code> (<code>User</code>)",id:"user-user",level:4},{value:"<code>replies</code> (<code>ActivityReply</code>)",id:"replies-activityreply",level:4},{value:"<code>likes</code> (<code>User</code>)",id:"likes-user",level:4}],u={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"User text activity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type TextActivity {\n  id: Int!\n  userId: Int\n  type: ActivityType\n  replyCount: Int!\n  text(asHtml: Boolean): String\n  siteUrl: String\n  isLocked: Boolean\n  isSubscribed: Boolean\n  likeCount: Int!\n  isLiked: Boolean\n  isPinned: Boolean\n  createdAt: Int!\n  user: User\n  replies: [ActivityReply]\n  likes: [User]\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"id-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The id of the activity"),(0,r.kt)("h4",{id:"userid-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"userId")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The user id of the activity's creator"),(0,r.kt)("h4",{id:"type-activitytype"},(0,r.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/activity-type"},(0,r.kt)("inlineCode",{parentName:"a"},"ActivityType")),")"),(0,r.kt)("p",null,"The type of activity"),(0,r.kt)("h4",{id:"replycount-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"replyCount")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The number of activity replies"),(0,r.kt)("h4",{id:"text-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"text")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"The status text (Markdown)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"ashtml-boolean"},(0,r.kt)("inlineCode",{parentName:"h5"},"asHtml")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,r.kt)("p",null,"Return the string in pre-parsed html instead of markdown"),(0,r.kt)("h4",{id:"siteurl-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"siteUrl")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"The url for the activity page on the AniList website"),(0,r.kt)("h4",{id:"islocked-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"isLocked")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("p",null,"If the activity is locked and can receive replies"),(0,r.kt)("h4",{id:"issubscribed-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"isSubscribed")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("p",null,"If the currently authenticated user is subscribed to the activity"),(0,r.kt)("h4",{id:"likecount-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"likeCount")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The amount of likes the activity has"),(0,r.kt)("h4",{id:"isliked-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"isLiked")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("p",null,"If the currently authenticated user liked the activity"),(0,r.kt)("h4",{id:"ispinned-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"isPinned")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("p",null,"If the activity is pinned to the top of the users activity feed"),(0,r.kt)("h4",{id:"createdat-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The time the activity was created at"),(0,r.kt)("h4",{id:"user-user"},(0,r.kt)("inlineCode",{parentName:"h4"},"user")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,r.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,r.kt)("p",null,"The user who created the activity"),(0,r.kt)("h4",{id:"replies-activityreply"},(0,r.kt)("inlineCode",{parentName:"h4"},"replies")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/activity-reply"},(0,r.kt)("inlineCode",{parentName:"a"},"ActivityReply")),")"),(0,r.kt)("p",null,"The written replies to the activity"),(0,r.kt)("h4",{id:"likes-user"},(0,r.kt)("inlineCode",{parentName:"h4"},"likes")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,r.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,r.kt)("p",null,"The users who liked the activity"))}h.isMDXComponent=!0}}]);