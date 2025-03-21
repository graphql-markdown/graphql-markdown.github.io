"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["8455"],{72733:function(e,t,l){l.r(t),l.d(t,{Bullet:()=>o,SpecifiedBy:()=>y,Badge:()=>x,default:()=>p,frontMatter:()=>n,metadata:()=>s,Details:()=>h,assets:()=>r,toc:()=>b,contentTitle:()=>c});var s=JSON.parse('{"id":"types/objects/activity-reply","title":"ActivityReply","description":"Replay to an activity item","source":"@site/examples/default/types/objects/activity-reply.mdx","sourceDirName":"types/objects","slug":"/types/objects/activity-reply","permalink":"/examples/default/types/objects/activity-reply","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"activity-reply","title":"ActivityReply"},"sidebar":"defaultSidebar","previous":{"title":"ActivityReplySubscribedNotification","permalink":"/examples/default/types/objects/activity-reply-subscribed-notification"},"next":{"title":"AiringNotification","permalink":"/examples/default/types/objects/airing-notification"}}'),a=l("85893"),i=l("50065"),d=l("67294");let n={id:"activity-reply",title:"ActivityReply"},c=void 0,r={},o=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25CF\xa0"})}),y=e=>(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),x=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:t,children:l,startOpen:s=!1})=>{let[i,n]=(0,d.useState)(s);return(0,a.jsxs)("details",{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)("summary",{onClick:e=>{e.preventDefault(),n(e=>!e)},style:{listStyle:"none"},children:i?e:t}),i&&l]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>ActivityReply.<b>id</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary badge--non_null"></Badge> <Badge class="badge badge--secondary "></Badge>',id:"activityreplyidint--",level:4},{value:'<code>ActivityReply.<b>userId</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary "></Badge>',id:"activityreplyuseridint-",level:4},{value:'<code>ActivityReply.<b>activityId</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary "></Badge>',id:"activityreplyactivityidint-",level:4},{value:'<code>ActivityReply.<b>text</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary "></Badge>',id:"activityreplytextstring-",level:4},{value:'<code>ActivityReply.text.<b>asHtml</b></code><Bullet></Bullet><code><b>Boolean</b></code> <Badge class="badge badge--secondary "></Badge>',id:"activityreplytextashtmlboolean-",level:5},{value:'<code>ActivityReply.<b>likeCount</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary badge--non_null"></Badge> <Badge class="badge badge--secondary "></Badge>',id:"activityreplylikecountint--",level:4},{value:'<code>ActivityReply.<b>isLiked</b></code><Bullet></Bullet><code><b>Boolean</b></code> <Badge class="badge badge--secondary "></Badge>',id:"activityreplyislikedboolean-",level:4},{value:'<code>ActivityReply.<b>createdAt</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary badge--non_null"></Badge> <Badge class="badge badge--secondary "></Badge>',id:"activityreplycreatedatint--",level:4},{value:'<code>ActivityReply.<b>user</b></code><Bullet></Bullet><code><b>User</b></code> <Badge class="badge badge--secondary "></Badge>',id:"activityreplyuseruser-",level:4},{value:'<code>ActivityReply.<b>likes</b></code><Bullet></Bullet><code><b>[User]</b></code> <Badge class="badge badge--secondary "></Badge> <Badge class="badge badge--secondary "></Badge>',id:"activityreplylikesuser--",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}];function j(e){let t={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Head:l}=t;return l||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l,{children:[(0,a.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,a.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,a.jsx)(t.p,{children:"Replay to an activity item"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type ActivityReply {\n  id: Int!\n  userId: Int\n  activityId: Int\n  text(asHtml: Boolean): String\n  likeCount: Int!\n  isLiked: Boolean\n  createdAt: Int!\n  user: User\n  likes: [User]\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"activityreplyidint--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReply.",(0,a.jsx)("b",{children:"id"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"Int!"})})})," ",(0,a.jsx)(x,{class:"badge badge--secondary badge--non_null",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"The id of the reply"}),"\n",(0,a.jsxs)(t.h4,{id:"activityreplyuseridint-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReply.",(0,a.jsx)("b",{children:"userId"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"Int"})})})," ",(0,a.jsx)(x,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"The id of the replies creator"}),"\n",(0,a.jsxs)(t.h4,{id:"activityreplyactivityidint-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReply.",(0,a.jsx)("b",{children:"activityId"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"Int"})})})," ",(0,a.jsx)(x,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"The id of the parent activity"}),"\n",(0,a.jsxs)(t.h4,{id:"activityreplytextstring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReply.",(0,a.jsx)("b",{children:"text"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/string",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"String"})})})," ",(0,a.jsx)(x,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"The reply text"}),"\n",(0,a.jsxs)(t.h5,{id:"activityreplytextashtmlboolean-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReply.text.",(0,a.jsx)("b",{children:"asHtml"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/boolean",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"Boolean"})})})," ",(0,a.jsx)(x,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"Return the string in pre-parsed html instead of markdown"}),"\n",(0,a.jsxs)(t.h4,{id:"activityreplylikecountint--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReply.",(0,a.jsx)("b",{children:"likeCount"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"Int!"})})})," ",(0,a.jsx)(x,{class:"badge badge--secondary badge--non_null",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"The amount of likes the reply has"}),"\n",(0,a.jsxs)(t.h4,{id:"activityreplyislikedboolean-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReply.",(0,a.jsx)("b",{children:"isLiked"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/boolean",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"Boolean"})})})," ",(0,a.jsx)(x,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"If the currently authenticated user liked the reply"}),"\n",(0,a.jsxs)(t.h4,{id:"activityreplycreatedatint--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReply.",(0,a.jsx)("b",{children:"createdAt"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"Int!"})})})," ",(0,a.jsx)(x,{class:"badge badge--secondary badge--non_null",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"The time the reply was created at"}),"\n",(0,a.jsxs)(t.h4,{id:"activityreplyuseruser-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReply.",(0,a.jsx)("b",{children:"user"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/objects/user",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"User"})})})," ",(0,a.jsx)(x,{class:"badge badge--secondary ",text:"object"})]}),"\n",(0,a.jsx)(t.p,{children:"The user who created reply"}),"\n",(0,a.jsxs)(t.h4,{id:"activityreplylikesuser--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivityReply.",(0,a.jsx)("b",{children:"likes"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/objects/user",children:(0,a.jsx)("code",{style:{fontWeight:"normal"},children:(0,a.jsx)("b",{children:"[User]"})})})," ",(0,a.jsx)(x,{class:"badge badge--secondary ",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary ",text:"object"})]}),"\n",(0,a.jsx)(t.p,{children:"The users who liked the reply"}),"\n",(0,a.jsx)(t.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/examples/default/operations/queries/activity-reply",children:(0,a.jsx)(t.code,{children:"ActivityReply"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary badge--relation",text:"query"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/operations/mutations/save-activity-reply",children:(0,a.jsx)(t.code,{children:"SaveActivityReply"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary badge--relation",text:"mutation"})]}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/examples/default/types/objects/internal-page",children:(0,a.jsx)(t.code,{children:"InternalPage"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary badge--relation",text:"object"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/objects/list-activity",children:(0,a.jsx)(t.code,{children:"ListActivity"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary badge--relation",text:"object"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/objects/message-activity",children:(0,a.jsx)(t.code,{children:"MessageActivity"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary badge--relation",text:"object"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/objects/page",children:(0,a.jsx)(t.code,{children:"Page"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary badge--relation",text:"object"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/examples/default/types/objects/text-activity",children:(0,a.jsx)(t.code,{children:"TextActivity"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary badge--relation",text:"object"})]}),"\n",(0,a.jsx)(t.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/examples/default/types/unions/likeable-union",children:(0,a.jsx)(t.code,{children:"LikeableUnion"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary badge--relation",text:"union"})]})]})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}},50065:function(e,t,l){l.d(t,{Z:function(){return n},a:function(){return d}});var s=l(67294);let a={},i=s.createContext(a);function d(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);