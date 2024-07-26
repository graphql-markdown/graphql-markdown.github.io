"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7292],{18115:(e,t,i)=>{i.r(t),i.d(t,{Badge:()=>h,Bullet:()=>o,Details:()=>x,SpecifiedBy:()=>y,assets:()=>r,contentTitle:()=>c,default:()=>j,frontMatter:()=>n,metadata:()=>l,toc:()=>g});var d=i(74848),s=i(28453),a=i(96540);const n={pagination_next:null,pagination_prev:null,id:"activity",title:"Activity"},c=void 0,l={id:"api/queries/activity",title:"Activity",description:"Activity query",source:"@site/examples/default/api/queries/activity.mdx",sourceDirName:"api/queries",slug:"/api/queries/activity",permalink:"/examples/default/api/queries/activity",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"activity",title:"Activity"},sidebar:"defaultSidebar"},r={},o=()=>{const e={span:"span",...(0,s.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},y=e=>{const t={a:"a",...(0,s.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,s.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(t.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:t,children:i,startOpen:n=!1})=>{const c={details:"details",summary:"summary",...(0,s.R)()},[l,r]=(0,a.useState)(n);return(0,d.jsxs)(c.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(c.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&i]})},g=[{value:"Arguments",id:"arguments",level:3},{value:'<code>Activity.<b>id</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"activityidint-",level:4},{value:'<code>Activity.<b>userId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"activityuseridint-",level:4},{value:'<code>Activity.<b>messengerId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"activitymessengeridint-",level:4},{value:'<code>Activity.<b>mediaId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"activitymediaidint-",level:4},{value:'<code>Activity.<b>type</b></code><Bullet></Bullet><code>ActivityType</code> <Badge class="badge badge--secondary"></Badge>',id:"activitytypeactivitytype-",level:4},{value:'<code>Activity.<b>isFollowing</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"activityisfollowingboolean-",level:4},{value:'<code>Activity.<b>hasReplies</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"activityhasrepliesboolean-",level:4},{value:'<code>Activity.<b>hasRepliesOrTypeText</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"activityhasrepliesortypetextboolean-",level:4},{value:'<code>Activity.<b>createdAt</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"activitycreatedatint-",level:4},{value:'<code>Activity.<b>id_not</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"activityid_notint-",level:4},{value:'<code>Activity.<b>id_in</b></code><Bullet></Bullet><code>[Int]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activityid_inint--",level:4},{value:'<code>Activity.<b>id_not_in</b></code><Bullet></Bullet><code>[Int]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activityid_not_inint--",level:4},{value:'<code>Activity.<b>userId_not</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"activityuserid_notint-",level:4},{value:'<code>Activity.<b>userId_in</b></code><Bullet></Bullet><code>[Int]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activityuserid_inint--",level:4},{value:'<code>Activity.<b>userId_not_in</b></code><Bullet></Bullet><code>[Int]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activityuserid_not_inint--",level:4},{value:'<code>Activity.<b>messengerId_not</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"activitymessengerid_notint-",level:4},{value:'<code>Activity.<b>messengerId_in</b></code><Bullet></Bullet><code>[Int]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activitymessengerid_inint--",level:4},{value:'<code>Activity.<b>messengerId_not_in</b></code><Bullet></Bullet><code>[Int]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activitymessengerid_not_inint--",level:4},{value:'<code>Activity.<b>mediaId_not</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"activitymediaid_notint-",level:4},{value:'<code>Activity.<b>mediaId_in</b></code><Bullet></Bullet><code>[Int]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activitymediaid_inint--",level:4},{value:'<code>Activity.<b>mediaId_not_in</b></code><Bullet></Bullet><code>[Int]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activitymediaid_not_inint--",level:4},{value:'<code>Activity.<b>type_not</b></code><Bullet></Bullet><code>ActivityType</code> <Badge class="badge badge--secondary"></Badge>',id:"activitytype_notactivitytype-",level:4},{value:'<code>Activity.<b>type_in</b></code><Bullet></Bullet><code>[ActivityType]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activitytype_inactivitytype--",level:4},{value:'<code>Activity.<b>type_not_in</b></code><Bullet></Bullet><code>[ActivityType]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activitytype_not_inactivitytype--",level:4},{value:'<code>Activity.<b>createdAt_greater</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"activitycreatedat_greaterint-",level:4},{value:'<code>Activity.<b>createdAt_lesser</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"activitycreatedat_lesserint-",level:4},{value:'<code>Activity.<b>sort</b></code><Bullet></Bullet><code>[ActivitySort]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activitysortactivitysort--",level:4},{value:"Type",id:"type",level:3},{value:'<code>ActivityUnion</code> <Badge class="badge badge--secondary"></Badge>',id:"activityunion-",level:4}];function b(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(i,{children:[(0,d.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,d.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,d.jsx)(t.p,{children:"Activity query"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-graphql",children:"Activity(\n  id: Int\n  userId: Int\n  messengerId: Int\n  mediaId: Int\n  type: ActivityType\n  isFollowing: Boolean\n  hasReplies: Boolean\n  hasRepliesOrTypeText: Boolean\n  createdAt: Int\n  id_not: Int\n  id_in: [Int]\n  id_not_in: [Int]\n  userId_not: Int\n  userId_in: [Int]\n  userId_not_in: [Int]\n  messengerId_not: Int\n  messengerId_in: [Int]\n  messengerId_not_in: [Int]\n  mediaId_not: Int\n  mediaId_in: [Int]\n  mediaId_not_in: [Int]\n  type_not: ActivityType\n  type_in: [ActivityType]\n  type_not_in: [ActivityType]\n  createdAt_greater: Int\n  createdAt_lesser: Int\n  sort: [ActivitySort]\n): ActivityUnion\n"})}),"\n",(0,d.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,d.jsxs)(t.h4,{id:"activityidint-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"id"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(t.code,{children:"Int"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter by the activity id"}),"\n",(0,d.jsxs)(t.h4,{id:"activityuseridint-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"userId"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(t.code,{children:"Int"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter by the owner user id"}),"\n",(0,d.jsxs)(t.h4,{id:"activitymessengeridint-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"messengerId"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(t.code,{children:"Int"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter by the id of the user who sent a message"}),"\n",(0,d.jsxs)(t.h4,{id:"activitymediaidint-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"mediaId"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(t.code,{children:"Int"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter by the associated media id of the activity"}),"\n",(0,d.jsxs)(t.h4,{id:"activitytypeactivitytype-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"type"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/enums/activity-type",children:(0,d.jsx)(t.code,{children:"ActivityType"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter by the type of activity"}),"\n",(0,d.jsxs)(t.h4,{id:"activityisfollowingboolean-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"isFollowing"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/boolean",children:(0,d.jsx)(t.code,{children:"Boolean"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter activity to users who are being followed by the authenticated user"}),"\n",(0,d.jsxs)(t.h4,{id:"activityhasrepliesboolean-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"hasReplies"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/boolean",children:(0,d.jsx)(t.code,{children:"Boolean"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter activity to only activity with replies"}),"\n",(0,d.jsxs)(t.h4,{id:"activityhasrepliesortypetextboolean-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"hasRepliesOrTypeText"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/boolean",children:(0,d.jsx)(t.code,{children:"Boolean"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter activity to only activity with replies or is of type text"}),"\n",(0,d.jsxs)(t.h4,{id:"activitycreatedatint-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"createdAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(t.code,{children:"Int"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter by the time the activity was created"}),"\n",(0,d.jsxs)(t.h4,{id:"activityid_notint-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"id_not"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(t.code,{children:"Int"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter by the activity id"}),"\n",(0,d.jsxs)(t.h4,{id:"activityid_inint--",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"id_in"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(t.code,{children:"[Int]"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter by the activity id"}),"\n",(0,d.jsxs)(t.h4,{id:"activityid_not_inint--",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"id_not_in"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(t.code,{children:"[Int]"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter by the activity id"}),"\n",(0,d.jsxs)(t.h4,{id:"activityuserid_notint-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"userId_not"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(t.code,{children:"Int"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter by the owner user id"}),"\n",(0,d.jsxs)(t.h4,{id:"activityuserid_inint--",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"userId_in"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(t.code,{children:"[Int]"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter by the owner user id"}),"\n",(0,d.jsxs)(t.h4,{id:"activityuserid_not_inint--",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"userId_not_in"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(t.code,{children:"[Int]"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter by the owner user id"}),"\n",(0,d.jsxs)(t.h4,{id:"activitymessengerid_notint-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"messengerId_not"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(t.code,{children:"Int"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter by the id of the user who sent a message"}),"\n",(0,d.jsxs)(t.h4,{id:"activitymessengerid_inint--",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"messengerId_in"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(t.code,{children:"[Int]"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter by the id of the user who sent a message"}),"\n",(0,d.jsxs)(t.h4,{id:"activitymessengerid_not_inint--",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"messengerId_not_in"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(t.code,{children:"[Int]"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter by the id of the user who sent a message"}),"\n",(0,d.jsxs)(t.h4,{id:"activitymediaid_notint-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"mediaId_not"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(t.code,{children:"Int"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter by the associated media id of the activity"}),"\n",(0,d.jsxs)(t.h4,{id:"activitymediaid_inint--",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"mediaId_in"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(t.code,{children:"[Int]"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter by the associated media id of the activity"}),"\n",(0,d.jsxs)(t.h4,{id:"activitymediaid_not_inint--",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"mediaId_not_in"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(t.code,{children:"[Int]"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter by the associated media id of the activity"}),"\n",(0,d.jsxs)(t.h4,{id:"activitytype_notactivitytype-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"type_not"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/enums/activity-type",children:(0,d.jsx)(t.code,{children:"ActivityType"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter by the type of activity"}),"\n",(0,d.jsxs)(t.h4,{id:"activitytype_inactivitytype--",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"type_in"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/enums/activity-type",children:(0,d.jsx)(t.code,{children:"[ActivityType]"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter by the type of activity"}),"\n",(0,d.jsxs)(t.h4,{id:"activitytype_not_inactivitytype--",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"type_not_in"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/enums/activity-type",children:(0,d.jsx)(t.code,{children:"[ActivityType]"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter by the type of activity"}),"\n",(0,d.jsxs)(t.h4,{id:"activitycreatedat_greaterint-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"createdAt_greater"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(t.code,{children:"Int"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter by the time the activity was created"}),"\n",(0,d.jsxs)(t.h4,{id:"activitycreatedat_lesserint-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"createdAt_lesser"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(t.code,{children:"Int"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.p,{children:"Filter by the time the activity was created"}),"\n",(0,d.jsxs)(t.h4,{id:"activitysortactivitysort--",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Activity.",(0,d.jsx)("b",{children:"sort"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(t.a,{href:"/examples/default/types/enums/activity-sort",children:(0,d.jsx)(t.code,{children:"[ActivitySort]"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsx)(t.p,{children:"The order the results will be returned in"}),"\n",(0,d.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,d.jsxs)(t.h4,{id:"activityunion-",children:[(0,d.jsx)(t.a,{href:"/examples/default/types/unions/activity-union",children:(0,d.jsx)(t.code,{children:"ActivityUnion"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"union"})]}),"\n",(0,d.jsx)(t.p,{children:"Activity union type"})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(b,{...e})}):b(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>c});var d=i(96540);const s={},a=d.createContext(s);function n(e){const t=d.useContext(a);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),d.createElement(a.Provider,{value:t},e.children)}}}]);