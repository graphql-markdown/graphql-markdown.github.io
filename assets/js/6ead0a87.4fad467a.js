"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[5685],{2689:(e,d,a)=>{a.r(d),a.d(d,{Badge:()=>x,Bullet:()=>i,Details:()=>b,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>n,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>j});var s=a(74848),t=a(28453),l=a(96540);const r={pagination_next:null,pagination_prev:null,id:"thread",title:"Thread"},n=void 0,c={id:"types/objects/thread",title:"Thread",description:"Forum Thread",source:"@site/examples/default/types/objects/thread.mdx",sourceDirName:"types/objects",slug:"/types/objects/thread",permalink:"/examples/default/types/objects/thread",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"thread",title:"Thread"},sidebar:"schemaSidebar"},o={},i=()=>{const e={span:"span",...(0,t.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const d={a:"a",...(0,t.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(d.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const d={span:"span",...(0,t.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(d.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:d,children:a,startOpen:r=!1})=>{const n={details:"details",summary:"summary",...(0,t.R)()},[c,o]=(0,l.useState)(r);return(0,s.jsxs)(n.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(n.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:c?e:d}),c&&a]})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>Thread.<b>id</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"threadidint--",level:4},{value:'<code>Thread.<b>title</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"threadtitlestring-",level:4},{value:'<code>Thread.<b>body</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"threadbodystring-",level:4},{value:'<code>Thread.body.<b>asHtml</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"threadbodyashtmlboolean-",level:5},{value:'<code>Thread.<b>userId</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"threaduseridint--",level:4},{value:'<code>Thread.<b>replyUserId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"threadreplyuseridint-",level:4},{value:'<code>Thread.<b>replyCommentId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"threadreplycommentidint-",level:4},{value:'<code>Thread.<b>replyCount</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"threadreplycountint-",level:4},{value:'<code>Thread.<b>viewCount</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"threadviewcountint-",level:4},{value:'<code>Thread.<b>isLocked</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"threadislockedboolean-",level:4},{value:'<code>Thread.<b>isSticky</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"threadisstickyboolean-",level:4},{value:'<code>Thread.<b>isSubscribed</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"threadissubscribedboolean-",level:4},{value:'<code>Thread.<b>likeCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"threadlikecountint--",level:4},{value:'<code>Thread.<b>isLiked</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"threadislikedboolean-",level:4},{value:'<code>Thread.<b>repliedAt</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"threadrepliedatint-",level:4},{value:'<code>Thread.<b>createdAt</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"threadcreatedatint--",level:4},{value:'<code>Thread.<b>updatedAt</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"threadupdatedatint--",level:4},{value:'<code>Thread.<b>user</b></code><Bullet></Bullet><code>User</code> <Badge class="badge badge--secondary"></Badge>',id:"threaduseruser-",level:4},{value:'<code>Thread.<b>replyUser</b></code><Bullet></Bullet><code>User</code> <Badge class="badge badge--secondary"></Badge>',id:"threadreplyuseruser-",level:4},{value:'<code>Thread.<b>likes</b></code><Bullet></Bullet><code>[User]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"threadlikesuser--",level:4},{value:'<code>Thread.<b>siteUrl</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"threadsiteurlstring-",level:4},{value:'<code>Thread.<b>categories</b></code><Bullet></Bullet><code>[ThreadCategory]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"threadcategoriesthreadcategory--",level:4},{value:'<code>Thread.<b>mediaCategories</b></code><Bullet></Bullet><code>[Media]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"threadmediacategoriesmedia--",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}];function g(e){const d={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,t.R)(),...e.components},{Head:a}=d;return a||function(e,d){throw new Error("Expected "+(d?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a,{children:[(0,s.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,s.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,s.jsx)(d.p,{children:"Forum Thread"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-graphql",children:"type Thread {\n  id: Int!\n  title: String\n  body(asHtml: Boolean): String\n  userId: Int!\n  replyUserId: Int\n  replyCommentId: Int\n  replyCount: Int\n  viewCount: Int\n  isLocked: Boolean\n  isSticky: Boolean\n  isSubscribed: Boolean\n  likeCount: Int!\n  isLiked: Boolean\n  repliedAt: Int\n  createdAt: Int!\n  updatedAt: Int!\n  user: User\n  replyUser: User\n  likes: [User]\n  siteUrl: String\n  categories: [ThreadCategory]\n  mediaCategories: [Media]\n}\n"})}),"\n",(0,s.jsx)(d.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(d.h4,{id:"threadidint--",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Thread.",(0,s.jsx)("b",{children:"id"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,s.jsx)(d.code,{children:"Int!"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(d.p,{children:"The id of the thread"}),"\n",(0,s.jsxs)(d.h4,{id:"threadtitlestring-",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Thread.",(0,s.jsx)("b",{children:"title"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/scalars/string",children:(0,s.jsx)(d.code,{children:"String"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(d.p,{children:"The title of the thread"}),"\n",(0,s.jsxs)(d.h4,{id:"threadbodystring-",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Thread.",(0,s.jsx)("b",{children:"body"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/scalars/string",children:(0,s.jsx)(d.code,{children:"String"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(d.p,{children:"The text body of the thread (Markdown)"}),"\n",(0,s.jsxs)(d.h5,{id:"threadbodyashtmlboolean-",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Thread.body.",(0,s.jsx)("b",{children:"asHtml"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/scalars/boolean",children:(0,s.jsx)(d.code,{children:"Boolean"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(d.p,{children:"Return the string in pre-parsed html instead of markdown"}),"\n",(0,s.jsxs)(d.h4,{id:"threaduseridint--",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Thread.",(0,s.jsx)("b",{children:"userId"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,s.jsx)(d.code,{children:"Int!"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(d.p,{children:"The id of the thread owner user"}),"\n",(0,s.jsxs)(d.h4,{id:"threadreplyuseridint-",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Thread.",(0,s.jsx)("b",{children:"replyUserId"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,s.jsx)(d.code,{children:"Int"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(d.p,{children:"The id of the user who most recently commented on the thread"}),"\n",(0,s.jsxs)(d.h4,{id:"threadreplycommentidint-",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Thread.",(0,s.jsx)("b",{children:"replyCommentId"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,s.jsx)(d.code,{children:"Int"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(d.p,{children:"The id of the most recent comment on the thread"}),"\n",(0,s.jsxs)(d.h4,{id:"threadreplycountint-",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Thread.",(0,s.jsx)("b",{children:"replyCount"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,s.jsx)(d.code,{children:"Int"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(d.p,{children:"The number of comments on the thread"}),"\n",(0,s.jsxs)(d.h4,{id:"threadviewcountint-",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Thread.",(0,s.jsx)("b",{children:"viewCount"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,s.jsx)(d.code,{children:"Int"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(d.p,{children:"The number of times users have viewed the thread"}),"\n",(0,s.jsxs)(d.h4,{id:"threadislockedboolean-",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Thread.",(0,s.jsx)("b",{children:"isLocked"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/scalars/boolean",children:(0,s.jsx)(d.code,{children:"Boolean"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(d.p,{children:"If the thread is locked and can receive comments"}),"\n",(0,s.jsxs)(d.h4,{id:"threadisstickyboolean-",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Thread.",(0,s.jsx)("b",{children:"isSticky"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/scalars/boolean",children:(0,s.jsx)(d.code,{children:"Boolean"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(d.p,{children:"If the thread is stickied and should be displayed at the top of the page"}),"\n",(0,s.jsxs)(d.h4,{id:"threadissubscribedboolean-",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Thread.",(0,s.jsx)("b",{children:"isSubscribed"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/scalars/boolean",children:(0,s.jsx)(d.code,{children:"Boolean"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(d.p,{children:"If the currently authenticated user is subscribed to the thread"}),"\n",(0,s.jsxs)(d.h4,{id:"threadlikecountint--",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Thread.",(0,s.jsx)("b",{children:"likeCount"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,s.jsx)(d.code,{children:"Int!"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(d.p,{children:"The amount of likes the thread has"}),"\n",(0,s.jsxs)(d.h4,{id:"threadislikedboolean-",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Thread.",(0,s.jsx)("b",{children:"isLiked"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/scalars/boolean",children:(0,s.jsx)(d.code,{children:"Boolean"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(d.p,{children:"If the currently authenticated user liked the thread"}),"\n",(0,s.jsxs)(d.h4,{id:"threadrepliedatint-",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Thread.",(0,s.jsx)("b",{children:"repliedAt"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,s.jsx)(d.code,{children:"Int"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(d.p,{children:"The time of the last reply"}),"\n",(0,s.jsxs)(d.h4,{id:"threadcreatedatint--",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Thread.",(0,s.jsx)("b",{children:"createdAt"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,s.jsx)(d.code,{children:"Int!"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(d.p,{children:"The time of the thread creation"}),"\n",(0,s.jsxs)(d.h4,{id:"threadupdatedatint--",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Thread.",(0,s.jsx)("b",{children:"updatedAt"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,s.jsx)(d.code,{children:"Int!"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(d.p,{children:"The time of the thread last update"}),"\n",(0,s.jsxs)(d.h4,{id:"threaduseruser-",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Thread.",(0,s.jsx)("b",{children:"user"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/objects/user",children:(0,s.jsx)(d.code,{children:"User"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(d.p,{children:"The owner of the thread"}),"\n",(0,s.jsxs)(d.h4,{id:"threadreplyuseruser-",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Thread.",(0,s.jsx)("b",{children:"replyUser"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/objects/user",children:(0,s.jsx)(d.code,{children:"User"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(d.p,{children:"The user to last reply to the thread"}),"\n",(0,s.jsxs)(d.h4,{id:"threadlikesuser--",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Thread.",(0,s.jsx)("b",{children:"likes"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/objects/user",children:(0,s.jsx)(d.code,{children:"[User]"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(d.p,{children:"The users who liked the thread"}),"\n",(0,s.jsxs)(d.h4,{id:"threadsiteurlstring-",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Thread.",(0,s.jsx)("b",{children:"siteUrl"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/scalars/string",children:(0,s.jsx)(d.code,{children:"String"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(d.p,{children:"The url for the thread page on the AniList website"}),"\n",(0,s.jsxs)(d.h4,{id:"threadcategoriesthreadcategory--",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Thread.",(0,s.jsx)("b",{children:"categories"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/objects/thread-category",children:(0,s.jsx)(d.code,{children:"[ThreadCategory]"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(d.p,{children:"The categories of the thread"}),"\n",(0,s.jsxs)(d.h4,{id:"threadmediacategoriesmedia--",children:[(0,s.jsx)(d.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Thread.",(0,s.jsx)("b",{children:"mediaCategories"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/objects/media",children:(0,s.jsx)(d.code,{children:"[Media]"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(d.p,{children:"The media categories of the thread"}),"\n",(0,s.jsx)(d.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.a,{href:"/examples/default/api/mutations/save-thread",children:(0,s.jsx)(d.code,{children:"SaveThread"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"mutation"}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/api/queries/thread",children:(0,s.jsx)(d.code,{children:"Thread"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"query"}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/api/mutations/toggle-thread-subscription",children:(0,s.jsx)(d.code,{children:"ToggleThreadSubscription"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"mutation"})]}),"\n",(0,s.jsx)(d.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.a,{href:"/examples/default/types/objects/internal-page",children:(0,s.jsx)(d.code,{children:"InternalPage"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/objects/page",children:(0,s.jsx)(d.code,{children:"Page"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/objects/thread-comment",children:(0,s.jsx)(d.code,{children:"ThreadComment"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/objects/thread-comment-like-notification",children:(0,s.jsx)(d.code,{children:"ThreadCommentLikeNotification"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/objects/thread-comment-mention-notification",children:(0,s.jsx)(d.code,{children:"ThreadCommentMentionNotification"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/objects/thread-comment-reply-notification",children:(0,s.jsx)(d.code,{children:"ThreadCommentReplyNotification"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/objects/thread-comment-subscribed-notification",children:(0,s.jsx)(d.code,{children:"ThreadCommentSubscribedNotification"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(d.a,{href:"/examples/default/types/objects/thread-like-notification",children:(0,s.jsx)(d.code,{children:"ThreadLikeNotification"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(d.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.a,{href:"/examples/default/types/unions/likeable-union",children:(0,s.jsx)(d.code,{children:"LikeableUnion"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"union"})]})]})}function u(e={}){const{wrapper:d}={...(0,t.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},28453:(e,d,a)=>{a.d(d,{R:()=>r,x:()=>n});var s=a(96540);const t={},l=s.createContext(t);function r(e){const d=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function n(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:d},e.children)}}}]);