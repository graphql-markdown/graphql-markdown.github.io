"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["308"],{96328:function(e,s,l){l.r(s),l.d(s,{default:()=>x,frontMatter:()=>n,metadata:()=>t,assets:()=>i,toc:()=>m,contentTitle:()=>c});var t=JSON.parse('{"id":"types/objects/text-activity","title":"text-activity","description":"User text activity","source":"@site/examples/default/types/objects/text-activity.md","sourceDirName":"types/objects","slug":"/types/objects/text-activity","permalink":"/examples/default/types/objects/text-activity","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"tag-stats","permalink":"/examples/default/types/objects/tag-stats"},"next":{"title":"thread-category","permalink":"/examples/default/types/objects/thread-category"}}'),d=l("85893"),a=l("50065");let n={},c=void 0,i={},m=[{value:"Fields",id:"fields",level:3},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TextActivity.</code><code class="gqlmd-mdx-entity-name">id</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span> <mark class="gqlmd-mdx-badge">non-null</mark> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"textactivityidint-non-null-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TextActivity.</code><code class="gqlmd-mdx-entity-name">userId</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"textactivityuseridint-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TextActivity.</code><code class="gqlmd-mdx-entity-name">type</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ActivityType</code></span> <mark class="gqlmd-mdx-badge">enum</mark>',id:"textactivitytypeactivitytype-enum",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TextActivity.</code><code class="gqlmd-mdx-entity-name">replyCount</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span> <mark class="gqlmd-mdx-badge">non-null</mark> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"textactivityreplycountint-non-null-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TextActivity.</code><code class="gqlmd-mdx-entity-name">text</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"textactivitytextstring-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TextActivity.text.</code><code class="gqlmd-mdx-entity-name">asHtml</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"textactivitytextashtmlboolean-scalar",level:5},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TextActivity.</code><code class="gqlmd-mdx-entity-name">siteUrl</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"textactivitysiteurlstring-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TextActivity.</code><code class="gqlmd-mdx-entity-name">isLocked</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"textactivityislockedboolean-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TextActivity.</code><code class="gqlmd-mdx-entity-name">isSubscribed</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"textactivityissubscribedboolean-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TextActivity.</code><code class="gqlmd-mdx-entity-name">likeCount</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span> <mark class="gqlmd-mdx-badge">non-null</mark> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"textactivitylikecountint-non-null-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TextActivity.</code><code class="gqlmd-mdx-entity-name">isLiked</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"textactivityislikedboolean-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TextActivity.</code><code class="gqlmd-mdx-entity-name">isPinned</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"textactivityispinnedboolean-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TextActivity.</code><code class="gqlmd-mdx-entity-name">createdAt</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span> <mark class="gqlmd-mdx-badge">non-null</mark> <mark class="gqlmd-mdx-badge">scalar</mark>',id:"textactivitycreatedatint-non-null-scalar",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TextActivity.</code><code class="gqlmd-mdx-entity-name">user</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">User</code></span> <mark class="gqlmd-mdx-badge">object</mark>',id:"textactivityuseruser-object",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TextActivity.</code><code class="gqlmd-mdx-entity-name">replies</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ActivityReply]</code></span> <mark class="gqlmd-mdx-badge">list</mark> <mark class="gqlmd-mdx-badge">object</mark>',id:"textactivityrepliesactivityreply-list-object",level:4},{value:'<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TextActivity.</code><code class="gqlmd-mdx-entity-name">likes</code></span><span class="gqlmd-mdx-bullet">\xa0\u25CF\xa0</span><span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[User]</code></span> <mark class="gqlmd-mdx-badge">list</mark> <mark class="gqlmd-mdx-badge">object</mark>',id:"textactivitylikesuser-list-object",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Implemented By",id:"implemented-by",level:3}];function r(e){let s={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Head:l}=s;return l||function(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(l,{children:[(0,d.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,d.jsx)("meta",{charset:"utf-8"})]}),"\n",(0,d.jsx)(s.p,{children:"User text activity"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-graphql",children:"type TextActivity {\n  id: Int!\n  userId: Int\n  type: ActivityType\n  replyCount: Int!\n  text(asHtml: Boolean): String\n  siteUrl: String\n  isLocked: Boolean\n  isSubscribed: Boolean\n  likeCount: Int!\n  isLiked: Boolean\n  isPinned: Boolean\n  createdAt: Int!\n  user: User\n  replies: [ActivityReply]\n  likes: [User]\n}\n"})}),"\n",(0,d.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(s.h4,{id:"textactivityidint-non-null-scalar",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,d.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"TextActivity."}),(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"id"})]})}),(0,d.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Int!"})})})," ",(0,d.jsx)("mark",{class:"gqlmd-mdx-badge",children:"non-null"})," ",(0,d.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,d.jsx)(s.p,{children:"The id of the activity"}),"\n",(0,d.jsxs)(s.h4,{id:"textactivityuseridint-scalar",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,d.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"TextActivity."}),(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"userId"})]})}),(0,d.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Int"})})})," ",(0,d.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,d.jsx)(s.p,{children:"The user id of the activity's creator"}),"\n",(0,d.jsxs)(s.h4,{id:"textactivitytypeactivitytype-enum",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,d.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"TextActivity."}),(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"type"})]})}),(0,d.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,d.jsx)(s.a,{href:"/examples/default/types/enums/activity-type",children:(0,d.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"ActivityType"})})})," ",(0,d.jsx)("mark",{class:"gqlmd-mdx-badge",children:"enum"})]}),"\n",(0,d.jsx)(s.p,{children:"The type of activity"}),"\n",(0,d.jsxs)(s.h4,{id:"textactivityreplycountint-non-null-scalar",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,d.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"TextActivity."}),(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"replyCount"})]})}),(0,d.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Int!"})})})," ",(0,d.jsx)("mark",{class:"gqlmd-mdx-badge",children:"non-null"})," ",(0,d.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,d.jsx)(s.p,{children:"The number of activity replies"}),"\n",(0,d.jsxs)(s.h4,{id:"textactivitytextstring-scalar",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,d.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"TextActivity."}),(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"text"})]})}),(0,d.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/string",children:(0,d.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"String"})})})," ",(0,d.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,d.jsx)(s.p,{children:"The status text (Markdown)"}),"\n",(0,d.jsxs)(s.h5,{id:"textactivitytextashtmlboolean-scalar",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,d.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"TextActivity.text."}),(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"asHtml"})]})}),(0,d.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,d.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Boolean"})})})," ",(0,d.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,d.jsx)(s.p,{children:"Return the string in pre-parsed html instead of markdown"}),"\n",(0,d.jsxs)(s.h4,{id:"textactivitysiteurlstring-scalar",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,d.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"TextActivity."}),(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"siteUrl"})]})}),(0,d.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/string",children:(0,d.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"String"})})})," ",(0,d.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,d.jsx)(s.p,{children:"The url for the activity page on the AniList website"}),"\n",(0,d.jsxs)(s.h4,{id:"textactivityislockedboolean-scalar",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,d.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"TextActivity."}),(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"isLocked"})]})}),(0,d.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,d.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Boolean"})})})," ",(0,d.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,d.jsx)(s.p,{children:"If the activity is locked and can receive replies"}),"\n",(0,d.jsxs)(s.h4,{id:"textactivityissubscribedboolean-scalar",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,d.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"TextActivity."}),(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"isSubscribed"})]})}),(0,d.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,d.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Boolean"})})})," ",(0,d.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,d.jsx)(s.p,{children:"If the currently authenticated user is subscribed to the activity"}),"\n",(0,d.jsxs)(s.h4,{id:"textactivitylikecountint-non-null-scalar",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,d.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"TextActivity."}),(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"likeCount"})]})}),(0,d.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Int!"})})})," ",(0,d.jsx)("mark",{class:"gqlmd-mdx-badge",children:"non-null"})," ",(0,d.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,d.jsx)(s.p,{children:"The amount of likes the activity has"}),"\n",(0,d.jsxs)(s.h4,{id:"textactivityislikedboolean-scalar",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,d.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"TextActivity."}),(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"isLiked"})]})}),(0,d.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,d.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Boolean"})})})," ",(0,d.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,d.jsx)(s.p,{children:"If the currently authenticated user liked the activity"}),"\n",(0,d.jsxs)(s.h4,{id:"textactivityispinnedboolean-scalar",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,d.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"TextActivity."}),(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"isPinned"})]})}),(0,d.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,d.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Boolean"})})})," ",(0,d.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,d.jsx)(s.p,{children:"If the activity is pinned to the top of the users activity feed"}),"\n",(0,d.jsxs)(s.h4,{id:"textactivitycreatedatint-non-null-scalar",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,d.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"TextActivity."}),(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"createdAt"})]})}),(0,d.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"Int!"})})})," ",(0,d.jsx)("mark",{class:"gqlmd-mdx-badge",children:"non-null"})," ",(0,d.jsx)("mark",{class:"gqlmd-mdx-badge",children:"scalar"})]}),"\n",(0,d.jsx)(s.p,{children:"The time the activity was created at"}),"\n",(0,d.jsxs)(s.h4,{id:"textactivityuseruser-object",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,d.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"TextActivity."}),(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"user"})]})}),(0,d.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,d.jsx)(s.a,{href:"/examples/default/types/objects/user",children:(0,d.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"User"})})})," ",(0,d.jsx)("mark",{class:"gqlmd-mdx-badge",children:"object"})]}),"\n",(0,d.jsx)(s.p,{children:"The user who created the activity"}),"\n",(0,d.jsxs)(s.h4,{id:"textactivityrepliesactivityreply-list-object",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,d.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"TextActivity."}),(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"replies"})]})}),(0,d.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,d.jsx)(s.a,{href:"/examples/default/types/objects/activity-reply",children:(0,d.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"[ActivityReply]"})})})," ",(0,d.jsx)("mark",{class:"gqlmd-mdx-badge",children:"list"})," ",(0,d.jsx)("mark",{class:"gqlmd-mdx-badge",children:"object"})]}),"\n",(0,d.jsx)(s.p,{children:"The written replies to the activity"}),"\n",(0,d.jsxs)(s.h4,{id:"textactivitylikesuser-list-object",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("span",{class:"gqlmd-mdx-entity",children:[(0,d.jsx)("code",{class:"gqlmd-mdx-entity-parent",children:"TextActivity."}),(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"likes"})]})}),(0,d.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,d.jsx)(s.a,{href:"/examples/default/types/objects/user",children:(0,d.jsx)("span",{class:"gqlmd-mdx-entity",children:(0,d.jsx)("code",{class:"gqlmd-mdx-entity-name",children:"[User]"})})})," ",(0,d.jsx)("mark",{class:"gqlmd-mdx-badge",children:"list"})," ",(0,d.jsx)("mark",{class:"gqlmd-mdx-badge",children:"object"})]}),"\n",(0,d.jsx)(s.p,{children:"The users who liked the activity"}),"\n",(0,d.jsx)(s.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/examples/default/operations/mutations/save-text-activity",children:(0,d.jsx)(s.code,{children:"SaveTextActivity"})})," ",(0,d.jsx)("mark",{class:"gqlmd-mdx-badge",children:"mutation"})]}),"\n",(0,d.jsx)(s.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/examples/default/types/unions/activity-union",children:(0,d.jsx)(s.code,{children:"ActivityUnion"})})," ",(0,d.jsx)("mark",{class:"gqlmd-mdx-badge",children:"union"}),(0,d.jsx)("span",{class:"gqlmd-mdx-bullet",children:"\xa0\u25CF\xa0"}),(0,d.jsx)(s.a,{href:"/examples/default/types/unions/likeable-union",children:(0,d.jsx)(s.code,{children:"LikeableUnion"})})," ",(0,d.jsx)("mark",{class:"gqlmd-mdx-badge",children:"union"})]})]})}function x(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(r,{...e})}):r(e)}},50065:function(e,s,l){l.d(s,{Z:function(){return c},a:function(){return n}});var t=l(67294);let d={},a=t.createContext(d);function n(e){let s=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);