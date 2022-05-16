"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[6617],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||i;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5363:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return h}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],d={id:"thread",title:"Thread"},l=void 0,c={unversionedId:"schema/objects/thread",id:"schema/objects/thread",title:"Thread",description:"Forum Thread",source:"@site/docs/schema/objects/thread.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/thread",permalink:"/schema/objects/thread",draft:!1,tags:[],version:"current",frontMatter:{id:"thread",title:"Thread"},sidebar:"basic",previous:{title:"ThreadLikeNotification",permalink:"/schema/objects/thread-like-notification"},next:{title:"UserActivityHistory",permalink:"/schema/objects/user-activity-history"}},s={},h=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>title</code> (<code>String</code>)",id:"title-string",level:4},{value:"<code>body</code> (<code>String</code>)",id:"body-string",level:4},{value:"<code>userId</code> (<code>Int</code>)",id:"userid-int",level:4},{value:"<code>replyUserId</code> (<code>Int</code>)",id:"replyuserid-int",level:4},{value:"<code>replyCommentId</code> (<code>Int</code>)",id:"replycommentid-int",level:4},{value:"<code>replyCount</code> (<code>Int</code>)",id:"replycount-int",level:4},{value:"<code>viewCount</code> (<code>Int</code>)",id:"viewcount-int",level:4},{value:"<code>isLocked</code> (<code>Boolean</code>)",id:"islocked-boolean",level:4},{value:"<code>isSticky</code> (<code>Boolean</code>)",id:"issticky-boolean",level:4},{value:"<code>isSubscribed</code> (<code>Boolean</code>)",id:"issubscribed-boolean",level:4},{value:"<code>likeCount</code> (<code>Int</code>)",id:"likecount-int",level:4},{value:"<code>isLiked</code> (<code>Boolean</code>)",id:"isliked-boolean",level:4},{value:"<code>repliedAt</code> (<code>Int</code>)",id:"repliedat-int",level:4},{value:"<code>createdAt</code> (<code>Int</code>)",id:"createdat-int",level:4},{value:"<code>updatedAt</code> (<code>Int</code>)",id:"updatedat-int",level:4},{value:"<code>user</code> (<code>User</code>)",id:"user-user",level:4},{value:"<code>replyUser</code> (<code>User</code>)",id:"replyuser-user",level:4},{value:"<code>likes</code> (<code>User</code>)",id:"likes-user",level:4},{value:"<code>siteUrl</code> (<code>String</code>)",id:"siteurl-string",level:4},{value:"<code>categories</code> (<code>ThreadCategory</code>)",id:"categories-threadcategory",level:4},{value:"<code>mediaCategories</code> (<code>Media</code>)",id:"mediacategories-media",level:4}],u={toc:h};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Forum Thread"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Thread {\n  id: Int!\n  title: String\n  body(asHtml: Boolean): String\n  userId: Int!\n  replyUserId: Int\n  replyCommentId: Int\n  replyCount: Int\n  viewCount: Int\n  isLocked: Boolean\n  isSticky: Boolean\n  isSubscribed: Boolean\n  likeCount: Int!\n  isLiked: Boolean\n  repliedAt: Int\n  createdAt: Int!\n  updatedAt: Int!\n  user: User\n  replyUser: User\n  likes: [User]\n  siteUrl: String\n  categories: [ThreadCategory]\n  mediaCategories: [Media]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The id of the thread"),(0,i.kt)("h4",{id:"title-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"title")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The title of the thread"),(0,i.kt)("h4",{id:"body-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"body")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The text body of the thread (Markdown)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"ashtml-boolean"},(0,i.kt)("inlineCode",{parentName:"h5"},"asHtml")," (",(0,i.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,i.kt)("p",null,"Return the string in pre-parsed html instead of markdown"),(0,i.kt)("h4",{id:"userid-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"userId")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The id of the thread owner user"),(0,i.kt)("h4",{id:"replyuserid-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"replyUserId")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The id of the user who most recently commented on the thread"),(0,i.kt)("h4",{id:"replycommentid-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"replyCommentId")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The id of the most recent comment on the thread"),(0,i.kt)("h4",{id:"replycount-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"replyCount")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The number of comments on the thread"),(0,i.kt)("h4",{id:"viewcount-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"viewCount")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The number of times users have viewed the thread"),(0,i.kt)("h4",{id:"islocked-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isLocked")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the thread is locked and can receive comments"),(0,i.kt)("h4",{id:"issticky-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isSticky")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the thread is stickied and should be displayed at the top of the page"),(0,i.kt)("h4",{id:"issubscribed-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isSubscribed")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the currently authenticated user is subscribed to the thread"),(0,i.kt)("h4",{id:"likecount-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"likeCount")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The amount of likes the thread has"),(0,i.kt)("h4",{id:"isliked-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isLiked")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the currently authenticated user liked the thread"),(0,i.kt)("h4",{id:"repliedat-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"repliedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The time of the last reply"),(0,i.kt)("h4",{id:"createdat-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The time of the thread creation"),(0,i.kt)("h4",{id:"updatedat-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The time of the thread last update"),(0,i.kt)("h4",{id:"user-user"},(0,i.kt)("inlineCode",{parentName:"h4"},"user")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,i.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,i.kt)("p",null,"The owner of the thread"),(0,i.kt)("h4",{id:"replyuser-user"},(0,i.kt)("inlineCode",{parentName:"h4"},"replyUser")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,i.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,i.kt)("p",null,"The user to last reply to the thread"),(0,i.kt)("h4",{id:"likes-user"},(0,i.kt)("inlineCode",{parentName:"h4"},"likes")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,i.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,i.kt)("p",null,"The users who liked the thread"),(0,i.kt)("h4",{id:"siteurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"siteUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The url for the thread page on the AniList website"),(0,i.kt)("h4",{id:"categories-threadcategory"},(0,i.kt)("inlineCode",{parentName:"h4"},"categories")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/thread-category"},(0,i.kt)("inlineCode",{parentName:"a"},"ThreadCategory")),")"),(0,i.kt)("p",null,"The categories of the thread"),(0,i.kt)("h4",{id:"mediacategories-media"},(0,i.kt)("inlineCode",{parentName:"h4"},"mediaCategories")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,i.kt)("inlineCode",{parentName:"a"},"Media")),")"),(0,i.kt)("p",null,"The media categories of the thread"))}p.isMDXComponent=!0}}]);