"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[8117],{3476:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>h,Bullet:()=>o,Details:()=>y,SpecifiedBy:()=>x,assets:()=>r,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>n,toc:()=>b});var a=s(74848),i=s(28453),d=s(96540);const l={id:"text-activity",title:"TextActivity"},c=void 0,n={id:"types/objects/text-activity",title:"TextActivity",description:"User text activity",source:"@site/examples/default/types/objects/text-activity.mdx",sourceDirName:"types/objects",slug:"/types/objects/text-activity",permalink:"/examples/default/types/objects/text-activity",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"text-activity",title:"TextActivity"},sidebar:"defaultSidebar",previous:{title:"TagStats",permalink:"/examples/default/types/objects/tag-stats"},next:{title:"ThreadCategory",permalink:"/examples/default/types/objects/thread-category"}},r={},o=()=>{const e={span:"span",...(0,i.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},x=e=>{const t={a:"a",...(0,i.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,i.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:t,children:s,startOpen:l=!1})=>{const c={details:"details",summary:"summary",...(0,i.R)()},[n,r]=(0,d.useState)(l);return(0,a.jsxs)(c.details,{...n?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(c.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:n?e:t}),n&&s]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>TextActivity.<b>id</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"textactivityidint--",level:4},{value:'<code>TextActivity.<b>userId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"textactivityuseridint-",level:4},{value:'<code>TextActivity.<b>type</b></code><Bullet></Bullet><code>ActivityType</code> <Badge class="badge badge--secondary"></Badge>',id:"textactivitytypeactivitytype-",level:4},{value:'<code>TextActivity.<b>replyCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"textactivityreplycountint--",level:4},{value:'<code>TextActivity.<b>text</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"textactivitytextstring-",level:4},{value:'<code>TextActivity.text.<b>asHtml</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"textactivitytextashtmlboolean-",level:5},{value:'<code>TextActivity.<b>siteUrl</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"textactivitysiteurlstring-",level:4},{value:'<code>TextActivity.<b>isLocked</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"textactivityislockedboolean-",level:4},{value:'<code>TextActivity.<b>isSubscribed</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"textactivityissubscribedboolean-",level:4},{value:'<code>TextActivity.<b>likeCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"textactivitylikecountint--",level:4},{value:'<code>TextActivity.<b>isLiked</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"textactivityislikedboolean-",level:4},{value:'<code>TextActivity.<b>isPinned</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"textactivityispinnedboolean-",level:4},{value:'<code>TextActivity.<b>createdAt</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"textactivitycreatedatint--",level:4},{value:'<code>TextActivity.<b>user</b></code><Bullet></Bullet><code>User</code> <Badge class="badge badge--secondary"></Badge>',id:"textactivityuseruser-",level:4},{value:'<code>TextActivity.<b>replies</b></code><Bullet></Bullet><code>[ActivityReply]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"textactivityrepliesactivityreply--",level:4},{value:'<code>TextActivity.<b>likes</b></code><Bullet></Bullet><code>[User]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"textactivitylikesuser--",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Implemented By",id:"implemented-by",level:3}];function j(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s,{children:[(0,a.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,a.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,a.jsx)(t.p,{children:"User text activity"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type TextActivity {\n  id: Int!\n  userId: Int\n  type: ActivityType\n  replyCount: Int!\n  text(asHtml: Boolean): String\n  siteUrl: String\n  isLocked: Boolean\n  isSubscribed: Boolean\n  likeCount: Int!\n  isLiked: Boolean\n  isPinned: Boolean\n  createdAt: Int!\n  user: User\n  replies: [ActivityReply]\n  likes: [User]\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"textactivityidint--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TextActivity.",(0,a.jsx)("b",{children:"id"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(t.code,{children:"Int!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"The id of the activity"}),"\n",(0,a.jsxs)(t.h4,{id:"textactivityuseridint-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TextActivity.",(0,a.jsx)("b",{children:"userId"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(t.code,{children:"Int"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"The user id of the activity's creator"}),"\n",(0,a.jsxs)(t.h4,{id:"textactivitytypeactivitytype-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TextActivity.",(0,a.jsx)("b",{children:"type"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/enums/activity-type",children:(0,a.jsx)(t.code,{children:"ActivityType"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(t.p,{children:"The type of activity"}),"\n",(0,a.jsxs)(t.h4,{id:"textactivityreplycountint--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TextActivity.",(0,a.jsx)("b",{children:"replyCount"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(t.code,{children:"Int!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"The number of activity replies"}),"\n",(0,a.jsxs)(t.h4,{id:"textactivitytextstring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TextActivity.",(0,a.jsx)("b",{children:"text"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"The status text (Markdown)"}),"\n",(0,a.jsxs)(t.h5,{id:"textactivitytextashtmlboolean-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TextActivity.text.",(0,a.jsx)("b",{children:"asHtml"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/boolean",children:(0,a.jsx)(t.code,{children:"Boolean"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"Return the string in pre-parsed html instead of markdown"}),"\n",(0,a.jsxs)(t.h4,{id:"textactivitysiteurlstring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TextActivity.",(0,a.jsx)("b",{children:"siteUrl"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"The url for the activity page on the AniList website"}),"\n",(0,a.jsxs)(t.h4,{id:"textactivityislockedboolean-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TextActivity.",(0,a.jsx)("b",{children:"isLocked"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/boolean",children:(0,a.jsx)(t.code,{children:"Boolean"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"If the activity is locked and can receive replies"}),"\n",(0,a.jsxs)(t.h4,{id:"textactivityissubscribedboolean-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TextActivity.",(0,a.jsx)("b",{children:"isSubscribed"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/boolean",children:(0,a.jsx)(t.code,{children:"Boolean"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"If the currently authenticated user is subscribed to the activity"}),"\n",(0,a.jsxs)(t.h4,{id:"textactivitylikecountint--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TextActivity.",(0,a.jsx)("b",{children:"likeCount"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(t.code,{children:"Int!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"The amount of likes the activity has"}),"\n",(0,a.jsxs)(t.h4,{id:"textactivityislikedboolean-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TextActivity.",(0,a.jsx)("b",{children:"isLiked"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/boolean",children:(0,a.jsx)(t.code,{children:"Boolean"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"If the currently authenticated user liked the activity"}),"\n",(0,a.jsxs)(t.h4,{id:"textactivityispinnedboolean-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TextActivity.",(0,a.jsx)("b",{children:"isPinned"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/boolean",children:(0,a.jsx)(t.code,{children:"Boolean"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"If the activity is pinned to the top of the users activity feed"}),"\n",(0,a.jsxs)(t.h4,{id:"textactivitycreatedatint--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TextActivity.",(0,a.jsx)("b",{children:"createdAt"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(t.code,{children:"Int!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"The time the activity was created at"}),"\n",(0,a.jsxs)(t.h4,{id:"textactivityuseruser-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TextActivity.",(0,a.jsx)("b",{children:"user"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/objects/user",children:(0,a.jsx)(t.code,{children:"User"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(t.p,{children:"The user who created the activity"}),"\n",(0,a.jsxs)(t.h4,{id:"textactivityrepliesactivityreply--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TextActivity.",(0,a.jsx)("b",{children:"replies"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/objects/activity-reply",children:(0,a.jsx)(t.code,{children:"[ActivityReply]"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(t.p,{children:"The written replies to the activity"}),"\n",(0,a.jsxs)(t.h4,{id:"textactivitylikesuser--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TextActivity.",(0,a.jsx)("b",{children:"likes"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/objects/user",children:(0,a.jsx)(t.code,{children:"[User]"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(t.p,{children:"The users who liked the activity"}),"\n",(0,a.jsx)(t.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/examples/default/operations/mutations/save-text-activity",children:(0,a.jsx)(t.code,{children:"SaveTextActivity"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"mutation"})]}),"\n",(0,a.jsx)(t.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/examples/default/types/unions/activity-union",children:(0,a.jsx)(t.code,{children:"ActivityUnion"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"union"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/unions/likeable-union",children:(0,a.jsx)(t.code,{children:"LikeableUnion"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"union"})]})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>c});var a=s(96540);const i={},d=a.createContext(i);function l(e){const t=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(d.Provider,{value:t},e.children)}}}]);