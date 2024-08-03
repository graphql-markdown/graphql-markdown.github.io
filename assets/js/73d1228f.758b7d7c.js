"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3146],{77780:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>h,Bullet:()=>o,Details:()=>x,SpecifiedBy:()=>g,assets:()=>r,contentTitle:()=>l,default:()=>j,frontMatter:()=>c,metadata:()=>n,toc:()=>y});var t=a(74848),i=a(28453),d=a(96540);const c={pagination_next:null,pagination_prev:null,id:"message-activity",title:"MessageActivity"},l=void 0,n={id:"types/objects/message-activity",title:"MessageActivity",description:"User message activity",source:"@site/examples/default/types/objects/message-activity.mdx",sourceDirName:"types/objects",slug:"/types/objects/message-activity",permalink:"/examples/default/types/objects/message-activity",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"message-activity",title:"MessageActivity"},sidebar:"schemaSidebar"},r={},o=()=>{const e={span:"span",...(0,i.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const s={a:"a",...(0,i.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const s={span:"span",...(0,i.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:s,children:a,startOpen:c=!1})=>{const l={details:"details",summary:"summary",...(0,i.R)()},[n,r]=(0,d.useState)(c);return(0,t.jsxs)(l.details,{...n?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(l.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:n?e:s}),n&&a]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>MessageActivity.<b>id</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"messageactivityidint--",level:4},{value:'<code>MessageActivity.<b>recipientId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"messageactivityrecipientidint-",level:4},{value:'<code>MessageActivity.<b>messengerId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"messageactivitymessengeridint-",level:4},{value:'<code>MessageActivity.<b>type</b></code><Bullet></Bullet><code>ActivityType</code> <Badge class="badge badge--secondary"></Badge>',id:"messageactivitytypeactivitytype-",level:4},{value:'<code>MessageActivity.<b>replyCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"messageactivityreplycountint--",level:4},{value:'<code>MessageActivity.<b>message</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"messageactivitymessagestring-",level:4},{value:'<code>MessageActivity.message.<b>asHtml</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"messageactivitymessageashtmlboolean-",level:5},{value:'<code>MessageActivity.<b>isLocked</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"messageactivityislockedboolean-",level:4},{value:'<code>MessageActivity.<b>isSubscribed</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"messageactivityissubscribedboolean-",level:4},{value:'<code>MessageActivity.<b>likeCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"messageactivitylikecountint--",level:4},{value:'<code>MessageActivity.<b>isLiked</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"messageactivityislikedboolean-",level:4},{value:'<code>MessageActivity.<b>isPrivate</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"messageactivityisprivateboolean-",level:4},{value:'<code>MessageActivity.<b>siteUrl</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"messageactivitysiteurlstring-",level:4},{value:'<code>MessageActivity.<b>createdAt</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"messageactivitycreatedatint--",level:4},{value:'<code>MessageActivity.<b>recipient</b></code><Bullet></Bullet><code>User</code> <Badge class="badge badge--secondary"></Badge>',id:"messageactivityrecipientuser-",level:4},{value:'<code>MessageActivity.<b>messenger</b></code><Bullet></Bullet><code>User</code> <Badge class="badge badge--secondary"></Badge>',id:"messageactivitymessengeruser-",level:4},{value:'<code>MessageActivity.<b>replies</b></code><Bullet></Bullet><code>[ActivityReply]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"messageactivityrepliesactivityreply--",level:4},{value:'<code>MessageActivity.<b>likes</b></code><Bullet></Bullet><code>[User]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"messageactivitylikesuser--",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}];function b(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Head:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,t.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,t.jsx)(s.p,{children:"User message activity"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"type MessageActivity {\n  id: Int!\n  recipientId: Int\n  messengerId: Int\n  type: ActivityType\n  replyCount: Int!\n  message(asHtml: Boolean): String\n  isLocked: Boolean\n  isSubscribed: Boolean\n  likeCount: Int!\n  isLiked: Boolean\n  isPrivate: Boolean\n  siteUrl: String\n  createdAt: Int!\n  recipient: User\n  messenger: User\n  replies: [ActivityReply]\n  likes: [User]\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(s.h4,{id:"messageactivityidint--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MessageActivity.",(0,t.jsx)("b",{children:"id"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(s.code,{children:"Int!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"The id of the activity"}),"\n",(0,t.jsxs)(s.h4,{id:"messageactivityrecipientidint-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MessageActivity.",(0,t.jsx)("b",{children:"recipientId"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(s.code,{children:"Int"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"The user id of the activity's recipient"}),"\n",(0,t.jsxs)(s.h4,{id:"messageactivitymessengeridint-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MessageActivity.",(0,t.jsx)("b",{children:"messengerId"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(s.code,{children:"Int"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"The user id of the activity's sender"}),"\n",(0,t.jsxs)(s.h4,{id:"messageactivitytypeactivitytype-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MessageActivity.",(0,t.jsx)("b",{children:"type"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/enums/activity-type",children:(0,t.jsx)(s.code,{children:"ActivityType"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsx)(s.p,{children:"The type of the activity"}),"\n",(0,t.jsxs)(s.h4,{id:"messageactivityreplycountint--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MessageActivity.",(0,t.jsx)("b",{children:"replyCount"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(s.code,{children:"Int!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"The number of activity replies"}),"\n",(0,t.jsxs)(s.h4,{id:"messageactivitymessagestring-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MessageActivity.",(0,t.jsx)("b",{children:"message"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/string",children:(0,t.jsx)(s.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"The message text (Markdown)"}),"\n",(0,t.jsxs)(s.h5,{id:"messageactivitymessageashtmlboolean-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MessageActivity.message.",(0,t.jsx)("b",{children:"asHtml"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,t.jsx)(s.code,{children:"Boolean"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"Return the string in pre-parsed html instead of markdown"}),"\n",(0,t.jsxs)(s.h4,{id:"messageactivityislockedboolean-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MessageActivity.",(0,t.jsx)("b",{children:"isLocked"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,t.jsx)(s.code,{children:"Boolean"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"If the activity is locked and can receive replies"}),"\n",(0,t.jsxs)(s.h4,{id:"messageactivityissubscribedboolean-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MessageActivity.",(0,t.jsx)("b",{children:"isSubscribed"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,t.jsx)(s.code,{children:"Boolean"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"If the currently authenticated user is subscribed to the activity"}),"\n",(0,t.jsxs)(s.h4,{id:"messageactivitylikecountint--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MessageActivity.",(0,t.jsx)("b",{children:"likeCount"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(s.code,{children:"Int!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"The amount of likes the activity has"}),"\n",(0,t.jsxs)(s.h4,{id:"messageactivityislikedboolean-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MessageActivity.",(0,t.jsx)("b",{children:"isLiked"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,t.jsx)(s.code,{children:"Boolean"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"If the currently authenticated user liked the activity"}),"\n",(0,t.jsxs)(s.h4,{id:"messageactivityisprivateboolean-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MessageActivity.",(0,t.jsx)("b",{children:"isPrivate"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,t.jsx)(s.code,{children:"Boolean"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"If the message is private and only viewable to the sender and recipients"}),"\n",(0,t.jsxs)(s.h4,{id:"messageactivitysiteurlstring-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MessageActivity.",(0,t.jsx)("b",{children:"siteUrl"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/string",children:(0,t.jsx)(s.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"The url for the activity page on the AniList website"}),"\n",(0,t.jsxs)(s.h4,{id:"messageactivitycreatedatint--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MessageActivity.",(0,t.jsx)("b",{children:"createdAt"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(s.code,{children:"Int!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"The time the activity was created at"}),"\n",(0,t.jsxs)(s.h4,{id:"messageactivityrecipientuser-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MessageActivity.",(0,t.jsx)("b",{children:"recipient"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/objects/user",children:(0,t.jsx)(s.code,{children:"User"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(s.p,{children:"The user who the activity message was sent to"}),"\n",(0,t.jsxs)(s.h4,{id:"messageactivitymessengeruser-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MessageActivity.",(0,t.jsx)("b",{children:"messenger"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/objects/user",children:(0,t.jsx)(s.code,{children:"User"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(s.p,{children:"The user who sent the activity message"}),"\n",(0,t.jsxs)(s.h4,{id:"messageactivityrepliesactivityreply--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MessageActivity.",(0,t.jsx)("b",{children:"replies"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/objects/activity-reply",children:(0,t.jsx)(s.code,{children:"[ActivityReply]"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(s.p,{children:"The written replies to the activity"}),"\n",(0,t.jsxs)(s.h4,{id:"messageactivitylikesuser--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MessageActivity.",(0,t.jsx)("b",{children:"likes"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/objects/user",children:(0,t.jsx)(s.code,{children:"[User]"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(s.p,{children:"The users who liked the activity"}),"\n",(0,t.jsx)(s.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/examples/default/api/mutations/save-message-activity",children:(0,t.jsx)(s.code,{children:"SaveMessageActivity"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"mutation"})]}),"\n",(0,t.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/examples/default/types/objects/activity-message-notification",children:(0,t.jsx)(s.code,{children:"ActivityMessageNotification"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(s.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/examples/default/types/unions/activity-union",children:(0,t.jsx)(s.code,{children:"ActivityUnion"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"union"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/unions/likeable-union",children:(0,t.jsx)(s.code,{children:"LikeableUnion"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"union"})]})]})}function j(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},28453:(e,s,a)=>{a.d(s,{R:()=>c,x:()=>l});var t=a(96540);const i={},d=t.createContext(i);function c(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);