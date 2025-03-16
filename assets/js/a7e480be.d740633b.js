"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["6537"],{48590:function(e,t,i){i.r(t),i.d(t,{default:()=>o,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>r,contentTitle:()=>a});var s=JSON.parse('{"id":"types/objects/activity-reply-subscribed-notification","title":"activity-reply-subscribed-notification","description":"Notification for when a user replies to activity the authenticated user has replied to","source":"@site/examples/default/types/objects/activity-reply-subscribed-notification.md","sourceDirName":"types/objects","slug":"/types/objects/activity-reply-subscribed-notification","permalink":"/examples/default/types/objects/activity-reply-subscribed-notification","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"activity-reply-notification","permalink":"/examples/default/types/objects/activity-reply-notification"},"next":{"title":"activity-reply","permalink":"/examples/default/types/objects/activity-reply"}}'),n=i("85893"),d=i("50065");let l={},a=void 0,c={},r=[{value:"Fields",id:"fields",level:3},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ActivityReplySubscribedNotification.</code><code class="gqlmd-mdx-entity-name">id</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span> <mark class="gqlmd-mdx-badge">non-null</mark> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"activityreplysubscribednotificationidint-non-null-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ActivityReplySubscribedNotification.</code><code class="gqlmd-mdx-entity-name">userId</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span> <mark class="gqlmd-mdx-badge">non-null</mark> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"activityreplysubscribednotificationuseridint-non-null-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ActivityReplySubscribedNotification.</code><code class="gqlmd-mdx-entity-name">type</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">NotificationType</code></span> <mark class="gqlmd-mdx-badge">enum</mark>',id:"activityreplysubscribednotificationtypenotificationtype-enum",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ActivityReplySubscribedNotification.</code><code class="gqlmd-mdx-entity-name">activityId</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span> <mark class="gqlmd-mdx-badge">non-null</mark> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"activityreplysubscribednotificationactivityidint-non-null-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ActivityReplySubscribedNotification.</code><code class="gqlmd-mdx-entity-name">context</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"activityreplysubscribednotificationcontextstring-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ActivityReplySubscribedNotification.</code><code class="gqlmd-mdx-entity-name">createdAt</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"activityreplysubscribednotificationcreatedatint-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ActivityReplySubscribedNotification.</code><code class="gqlmd-mdx-entity-name">activity</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ActivityUnion</code></span> <mark class="gqlmd-mdx-badge">union</mark>',id:"activityreplysubscribednotificationactivityactivityunion-union",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ActivityReplySubscribedNotification.</code><code class="gqlmd-mdx-entity-name">user</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">User</code></span> <mark class="gqlmd-mdx-badge">object</mark>',id:"activityreplysubscribednotificationuseruser-object",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function m(e){let t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.a)(),...e.components},{Head:i}=t;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i,{children:[(0,n.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,n.jsx)("meta",{charset:"utf-8"})]}),"\n",(0,n.jsx)(t.p,{children:"Notification for when a user replies to activity the authenticated user has replied to"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type ActivityReplySubscribedNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  activityId: Int!\n  context: String\n  createdAt: Int\n  activity: ActivityUnion\n  user: User\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"activityreplysubscribednotificationidint-non-null-scalar",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,n.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"ActivityReplySubscribedNotification."}),(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"id"})]})}),(0,n.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Int!"})})})," ",(0,n.jsx)("mark",{class:"gqlmd-mdx-badge",children:"non-null"})," ",(0,n.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"The id of the Notification"}),"\n",(0,n.jsxs)(t.h4,{id:"activityreplysubscribednotificationuseridint-non-null-scalar",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,n.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"ActivityReplySubscribedNotification."}),(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"userId"})]})}),(0,n.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Int!"})})})," ",(0,n.jsx)("mark",{class:"gqlmd-mdx-badge",children:"non-null"})," ",(0,n.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"The id of the user who replied to the activity"}),"\n",(0,n.jsxs)(t.h4,{id:"activityreplysubscribednotificationtypenotificationtype-enum",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,n.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"ActivityReplySubscribedNotification."}),(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"type"})]})}),(0,n.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,n.jsx)(t.a,{href:"/examples/default/types/enums/notification-type",children:(0,n.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"NotificationType"})})})," ",(0,n.jsx)("mark",{class:"gqlmd-mdx-badge",children:"enum"})]}),"\n",(0,n.jsx)(t.p,{children:"The type of notification"}),"\n",(0,n.jsxs)(t.h4,{id:"activityreplysubscribednotificationactivityidint-non-null-scalar",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,n.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"ActivityReplySubscribedNotification."}),(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"activityId"})]})}),(0,n.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Int!"})})})," ",(0,n.jsx)("mark",{class:"gqlmd-mdx-badge",children:"non-null"})," ",(0,n.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"The id of the activity which was replied too"}),"\n",(0,n.jsxs)(t.h4,{id:"activityreplysubscribednotificationcontextstring-scalar",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,n.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"ActivityReplySubscribedNotification."}),(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"context"})]})}),(0,n.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/string",children:(0,n.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"String"})})})," ",(0,n.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"The notification context text"}),"\n",(0,n.jsxs)(t.h4,{id:"activityreplysubscribednotificationcreatedatint-scalar",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,n.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"ActivityReplySubscribedNotification."}),(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"createdAt"})]})}),(0,n.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,n.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Int"})})})," ",(0,n.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"The time the notification was created at"}),"\n",(0,n.jsxs)(t.h4,{id:"activityreplysubscribednotificationactivityactivityunion-union",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,n.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"ActivityReplySubscribedNotification."}),(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"activity"})]})}),(0,n.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,n.jsx)(t.a,{href:"/examples/default/types/unions/activity-union",children:(0,n.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"ActivityUnion"})})})," ",(0,n.jsx)("mark",{class:"gqlmd-mdx-badge",children:"union"})]}),"\n",(0,n.jsx)(t.p,{children:"The liked activity"}),"\n",(0,n.jsxs)(t.h4,{id:"activityreplysubscribednotificationuseruser-object",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,n.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"ActivityReplySubscribedNotification."}),(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"user"})]})}),(0,n.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,n.jsx)(t.a,{href:"/examples/default/types/objects/user",children:(0,n.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,n.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"User"})})})," ",(0,n.jsx)("mark",{class:"gqlmd-mdx-badge",children:"object"})]}),"\n",(0,n.jsx)(t.p,{children:"The user who replied to the activity"}),"\n",(0,n.jsx)(t.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/examples/default/types/unions/notification-union",children:(0,n.jsx)(t.code,{children:"NotificationUnion"})})," ",(0,n.jsx)("mark",{class:"gqlmd-mdx-badge",children:"union"})]})]})}function o(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return a},a:function(){return l}});var s=i(67294);let n={},d=s.createContext(n);function l(e){let t=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);