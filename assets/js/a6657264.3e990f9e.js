"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[4295],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},827:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"activity-reply",title:"ActivityReply"},c=void 0,s={unversionedId:"schema/objects/activity-reply",id:"schema/objects/activity-reply",title:"ActivityReply",description:"Replay to an activity item",source:"@site/docs/schema/objects/activity-reply.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/activity-reply",permalink:"/schema/objects/activity-reply",tags:[],version:"current",frontMatter:{id:"activity-reply",title:"ActivityReply"},sidebar:"basic",previous:{title:"ActivityReplySubscribedNotification",permalink:"/schema/objects/activity-reply-subscribed-notification"},next:{title:"AiringNotification",permalink:"/schema/objects/airing-notification"}},d={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>userId</code> (<code>Int</code>)",id:"userid-int",level:4},{value:"<code>activityId</code> (<code>Int</code>)",id:"activityid-int",level:4},{value:"<code>text</code> (<code>String</code>)",id:"text-string",level:4},{value:"<code>likeCount</code> (<code>Int</code>)",id:"likecount-int",level:4},{value:"<code>isLiked</code> (<code>Boolean</code>)",id:"isliked-boolean",level:4},{value:"<code>createdAt</code> (<code>Int</code>)",id:"createdat-int",level:4},{value:"<code>user</code> (<code>User</code>)",id:"user-user",level:4},{value:"<code>likes</code> (<code>User</code>)",id:"likes-user",level:4}],u={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Replay to an activity item"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type ActivityReply {\n  id: Int!\n  userId: Int\n  activityId: Int\n  text(asHtml: Boolean): String\n  likeCount: Int!\n  isLiked: Boolean\n  createdAt: Int!\n  user: User\n  likes: [User]\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"The id of the reply"),(0,a.kt)("h4",{id:"userid-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"userId")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"The id of the replies creator"),(0,a.kt)("h4",{id:"activityid-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"activityId")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"The id of the parent activity"),(0,a.kt)("h4",{id:"text-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"text")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"The reply text"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"ashtml-boolean"},(0,a.kt)("inlineCode",{parentName:"h5"},"asHtml")," (",(0,a.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,a.kt)("p",null,"Return the string in pre-parsed html instead of markdown"),(0,a.kt)("h4",{id:"likecount-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"likeCount")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"The amount of likes the reply has"),(0,a.kt)("h4",{id:"isliked-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"isLiked")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,a.kt)("p",null,"If the currently authenticated user liked the reply"),(0,a.kt)("h4",{id:"createdat-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"The time the reply was created at"),(0,a.kt)("h4",{id:"user-user"},(0,a.kt)("inlineCode",{parentName:"h4"},"user")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,a.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,a.kt)("p",null,"The user who created reply"),(0,a.kt)("h4",{id:"likes-user"},(0,a.kt)("inlineCode",{parentName:"h4"},"likes")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,a.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,a.kt)("p",null,"The users who liked the reply"))}m.isMDXComponent=!0}}]);