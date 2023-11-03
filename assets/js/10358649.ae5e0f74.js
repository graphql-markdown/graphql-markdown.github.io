"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[64],{1091:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>h,Bullet:()=>o,Details:()=>j,SpecifiedBy:()=>x,assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>y});var l=s(5893),a=s(1151),d=s(7294);const i={id:"activity-reply",title:"ActivityReply",hide_table_of_contents:!1},c=void 0,n={id:"objects/activity-reply",title:"ActivityReply",description:"Replay to an activity item",source:"@site/examples/default/objects/activity-reply.mdx",sourceDirName:"objects",slug:"/objects/activity-reply",permalink:"/examples/default/objects/activity-reply",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"activity-reply",title:"ActivityReply",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ActivityReplySubscribedNotification",permalink:"/examples/default/objects/activity-reply-subscribed-notification"},next:{title:"AiringNotification",permalink:"/examples/default/objects/airing-notification"}},r={},o=()=>{const e={span:"span",...(0,a.a)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},x=e=>{const t={a:"a",...(0,a.a)()};return(0,l.jsxs)(l.Fragment,{children:["Specification",(0,l.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,a.a)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(t.span,{className:e.class,children:e.text})})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>ActivityReply.<b>id</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activityreplyidint--",level:4},{value:'<code>ActivityReply.<b>userId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"activityreplyuseridint-",level:4},{value:'<code>ActivityReply.<b>activityId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"activityreplyactivityidint-",level:4},{value:'<code>ActivityReply.<b>text</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"activityreplytextstring-",level:4},{value:'<code>ActivityReply.text.<b>asHtml</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"activityreplytextashtmlboolean-",level:5},{value:'<code>ActivityReply.<b>likeCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activityreplylikecountint--",level:4},{value:'<code>ActivityReply.<b>isLiked</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"activityreplyislikedboolean-",level:4},{value:'<code>ActivityReply.<b>createdAt</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activityreplycreatedatint--",level:4},{value:'<code>ActivityReply.<b>user</b></code><Bullet></Bullet><code>User</code> <Badge class="badge badge--secondary"></Badge>',id:"activityreplyuseruser-",level:4},{value:'<code>ActivityReply.<b>likes</b></code><Bullet></Bullet><code>[User]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activityreplylikesuser--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}],j=({dataOpen:e,dataClose:t,children:s,startOpen:i=!1})=>{const c={details:"details",summary:"summary",...(0,a.a)()},[n,r]=(0,d.useState)(i);return(0,l.jsxs)(c.details,{...n?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,l.jsx)(c.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:n?e:t}),n&&s]})};function b(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s,{children:[(0,l.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,l.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,l.jsx)(t.p,{children:"Replay to an activity item"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-graphql",children:"type ActivityReply {\n  id: Int!\n  userId: Int\n  activityId: Int\n  text(asHtml: Boolean): String\n  likeCount: Int!\n  isLiked: Boolean\n  createdAt: Int!\n  user: User\n  likes: [User]\n}\n"})}),"\n",(0,l.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,l.jsxs)(t.h4,{id:"activityreplyidint--",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReply.",(0,l.jsx)("b",{children:"id"})]})}),(0,l.jsx)(o,{}),(0,l.jsx)(t.a,{href:"/examples/default/scalars/int",children:(0,l.jsx)(t.code,{children:"Int!"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"The id of the reply"}),"\n"]}),"\n",(0,l.jsxs)(t.h4,{id:"activityreplyuseridint-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReply.",(0,l.jsx)("b",{children:"userId"})]})}),(0,l.jsx)(o,{}),(0,l.jsx)(t.a,{href:"/examples/default/scalars/int",children:(0,l.jsx)(t.code,{children:"Int"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"The id of the replies creator"}),"\n"]}),"\n",(0,l.jsxs)(t.h4,{id:"activityreplyactivityidint-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReply.",(0,l.jsx)("b",{children:"activityId"})]})}),(0,l.jsx)(o,{}),(0,l.jsx)(t.a,{href:"/examples/default/scalars/int",children:(0,l.jsx)(t.code,{children:"Int"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"The id of the parent activity"}),"\n"]}),"\n",(0,l.jsxs)(t.h4,{id:"activityreplytextstring-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReply.",(0,l.jsx)("b",{children:"text"})]})}),(0,l.jsx)(o,{}),(0,l.jsx)(t.a,{href:"/examples/default/scalars/string",children:(0,l.jsx)(t.code,{children:"String"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"The reply text"}),"\n",(0,l.jsxs)(t.h5,{id:"activityreplytextashtmlboolean-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReply.text.",(0,l.jsx)("b",{children:"asHtml"})]})}),(0,l.jsx)(o,{}),(0,l.jsx)(t.a,{href:"/examples/default/scalars/boolean",children:(0,l.jsx)(t.code,{children:"Boolean"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsx)(t.p,{children:"Return the string in pre-parsed html instead of markdown"}),"\n"]}),"\n",(0,l.jsxs)(t.h4,{id:"activityreplylikecountint--",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReply.",(0,l.jsx)("b",{children:"likeCount"})]})}),(0,l.jsx)(o,{}),(0,l.jsx)(t.a,{href:"/examples/default/scalars/int",children:(0,l.jsx)(t.code,{children:"Int!"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"The amount of likes the reply has"}),"\n"]}),"\n",(0,l.jsxs)(t.h4,{id:"activityreplyislikedboolean-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReply.",(0,l.jsx)("b",{children:"isLiked"})]})}),(0,l.jsx)(o,{}),(0,l.jsx)(t.a,{href:"/examples/default/scalars/boolean",children:(0,l.jsx)(t.code,{children:"Boolean"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"If the currently authenticated user liked the reply"}),"\n"]}),"\n",(0,l.jsxs)(t.h4,{id:"activityreplycreatedatint--",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReply.",(0,l.jsx)("b",{children:"createdAt"})]})}),(0,l.jsx)(o,{}),(0,l.jsx)(t.a,{href:"/examples/default/scalars/int",children:(0,l.jsx)(t.code,{children:"Int!"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"The time the reply was created at"}),"\n"]}),"\n",(0,l.jsxs)(t.h4,{id:"activityreplyuseruser-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReply.",(0,l.jsx)("b",{children:"user"})]})}),(0,l.jsx)(o,{}),(0,l.jsx)(t.a,{href:"/examples/default/objects/user",children:(0,l.jsx)(t.code,{children:"User"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"The user who created reply"}),"\n"]}),"\n",(0,l.jsxs)(t.h4,{id:"activityreplylikesuser--",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReply.",(0,l.jsx)("b",{children:"likes"})]})}),(0,l.jsx)(o,{}),(0,l.jsx)(t.a,{href:"/examples/default/objects/user",children:(0,l.jsx)(t.code,{children:"[User]"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"The users who liked the reply"}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.a,{href:"/examples/default/queries/activity-reply",children:(0,l.jsx)(t.code,{children:"ActivityReply"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"query"}),(0,l.jsx)(o,{}),(0,l.jsx)(t.a,{href:"/examples/default/mutations/save-activity-reply",children:(0,l.jsx)(t.code,{children:"SaveActivityReply"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"mutation"})]}),"\n",(0,l.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.a,{href:"/examples/default/objects/internal-page",children:(0,l.jsx)(t.code,{children:"InternalPage"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,l.jsx)(o,{}),(0,l.jsx)(t.a,{href:"/examples/default/objects/list-activity",children:(0,l.jsx)(t.code,{children:"ListActivity"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,l.jsx)(o,{}),(0,l.jsx)(t.a,{href:"/examples/default/objects/message-activity",children:(0,l.jsx)(t.code,{children:"MessageActivity"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,l.jsx)(o,{}),(0,l.jsx)(t.a,{href:"/examples/default/objects/page",children:(0,l.jsx)(t.code,{children:"Page"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,l.jsx)(o,{}),(0,l.jsx)(t.a,{href:"/examples/default/objects/text-activity",children:(0,l.jsx)(t.code,{children:"TextActivity"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,l.jsx)(t.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.a,{href:"/examples/default/unions/likeable-union",children:(0,l.jsx)(t.code,{children:"LikeableUnion"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"union"})]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(b,{...e})}):b(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>i});var l=s(7294);const a={},d=l.createContext(a);function i(e){const t=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),l.createElement(d.Provider,{value:t},e.children)}}}]);