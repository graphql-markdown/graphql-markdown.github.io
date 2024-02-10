"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[4782],{7302:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>x,Bullet:()=>o,Details:()=>g,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>n,default:()=>b,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var d=t(5893),a=t(1151),i=t(7294);const l={pagination_next:null,pagination_prev:null,id:"media-list",title:"MediaList"},n=void 0,r={id:"api/queries/media-list",title:"MediaList",description:"Media list query",source:"@site/examples/default/api/queries/media-list.mdx",sourceDirName:"api/queries",slug:"/api/queries/media-list",permalink:"/examples/default/api/queries/media-list",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"media-list",title:"MediaList"},sidebar:"schemaSidebar"},c={},o=()=>{const e={span:"span",...(0,a.a)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,a.a)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const s={span:"span",...(0,a.a)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s.span,{className:e.class,children:e.text})})},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code>MediaList.<b>id</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistidint-",level:4},{value:'<code>MediaList.<b>userId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistuseridint-",level:4},{value:'<code>MediaList.<b>userName</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistusernamestring-",level:4},{value:'<code>MediaList.<b>type</b></code><Bullet></Bullet><code>MediaType</code> <Badge class="badge badge--secondary"></Badge>',id:"medialisttypemediatype-",level:4},{value:'<code>MediaList.<b>status</b></code><Bullet></Bullet><code>MediaListStatus</code> <Badge class="badge badge--secondary"></Badge>',id:"medialiststatusmedialiststatus-",level:4},{value:'<code>MediaList.<b>mediaId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistmediaidint-",level:4},{value:'<code>MediaList.<b>isFollowing</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistisfollowingboolean-",level:4},{value:'<code>MediaList.<b>notes</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistnotesstring-",level:4},{value:'<code>MediaList.<b>startedAt</b></code><Bullet></Bullet><code>FuzzyDateInt</code> <Badge class="badge badge--secondary"></Badge>',id:"medialiststartedatfuzzydateint-",level:4},{value:'<code>MediaList.<b>completedAt</b></code><Bullet></Bullet><code>FuzzyDateInt</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcompletedatfuzzydateint-",level:4},{value:'<code>MediaList.<b>compareWithAuthList</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcomparewithauthlistboolean-",level:4},{value:'<code>MediaList.<b>userId_in</b></code><Bullet></Bullet><code>[Int]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"medialistuserid_inint--",level:4},{value:'<code>MediaList.<b>status_in</b></code><Bullet></Bullet><code>[MediaListStatus]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"medialiststatus_inmedialiststatus--",level:4},{value:'<code>MediaList.<b>status_not_in</b></code><Bullet></Bullet><code>[MediaListStatus]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"medialiststatus_not_inmedialiststatus--",level:4},{value:'<code>MediaList.<b>status_not</b></code><Bullet></Bullet><code>MediaListStatus</code> <Badge class="badge badge--secondary"></Badge>',id:"medialiststatus_notmedialiststatus-",level:4},{value:'<code>MediaList.<b>mediaId_in</b></code><Bullet></Bullet><code>[Int]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"medialistmediaid_inint--",level:4},{value:'<code>MediaList.<b>mediaId_not_in</b></code><Bullet></Bullet><code>[Int]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"medialistmediaid_not_inint--",level:4},{value:'<code>MediaList.<b>notes_like</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistnotes_likestring-",level:4},{value:'<code>MediaList.<b>startedAt_greater</b></code><Bullet></Bullet><code>FuzzyDateInt</code> <Badge class="badge badge--secondary"></Badge>',id:"medialiststartedat_greaterfuzzydateint-",level:4},{value:'<code>MediaList.<b>startedAt_lesser</b></code><Bullet></Bullet><code>FuzzyDateInt</code> <Badge class="badge badge--secondary"></Badge>',id:"medialiststartedat_lesserfuzzydateint-",level:4},{value:'<code>MediaList.<b>startedAt_like</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"medialiststartedat_likestring-",level:4},{value:'<code>MediaList.<b>completedAt_greater</b></code><Bullet></Bullet><code>FuzzyDateInt</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcompletedat_greaterfuzzydateint-",level:4},{value:'<code>MediaList.<b>completedAt_lesser</b></code><Bullet></Bullet><code>FuzzyDateInt</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcompletedat_lesserfuzzydateint-",level:4},{value:'<code>MediaList.<b>completedAt_like</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcompletedat_likestring-",level:4},{value:'<code>MediaList.<b>sort</b></code><Bullet></Bullet><code>[MediaListSort]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"medialistsortmedialistsort--",level:4},{value:"Type",id:"type",level:3},{value:'<code>MediaList</code> <Badge class="badge badge--secondary"></Badge>',id:"medialist-",level:4}],g=({dataOpen:e,dataClose:s,children:t,startOpen:l=!1})=>{const n={details:"details",summary:"summary",...(0,a.a)()},[r,c]=(0,i.useState)(l);return(0,d.jsxs)(n.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(n.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:r?e:s}),r&&t]})};function j(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Head:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t,{children:[(0,d.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,d.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,d.jsx)(s.p,{children:"Media list query"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-graphql",children:"MediaList(\n  id: Int\n  userId: Int\n  userName: String\n  type: MediaType\n  status: MediaListStatus\n  mediaId: Int\n  isFollowing: Boolean\n  notes: String\n  startedAt: FuzzyDateInt\n  completedAt: FuzzyDateInt\n  compareWithAuthList: Boolean\n  userId_in: [Int]\n  status_in: [MediaListStatus]\n  status_not_in: [MediaListStatus]\n  status_not: MediaListStatus\n  mediaId_in: [Int]\n  mediaId_not_in: [Int]\n  notes_like: String\n  startedAt_greater: FuzzyDateInt\n  startedAt_lesser: FuzzyDateInt\n  startedAt_like: String\n  completedAt_greater: FuzzyDateInt\n  completedAt_lesser: FuzzyDateInt\n  completedAt_like: String\n  sort: [MediaListSort]\n): MediaList\n"})}),"\n",(0,d.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,d.jsxs)(s.h4,{id:"medialistidint-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,d.jsx)("b",{children:"id"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(s.code,{children:"Int"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter by a list entry's id"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"medialistuseridint-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,d.jsx)("b",{children:"userId"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(s.code,{children:"Int"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter by a user's id"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"medialistusernamestring-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,d.jsx)("b",{children:"userName"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/string",children:(0,d.jsx)(s.code,{children:"String"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter by a user's name"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"medialisttypemediatype-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,d.jsx)("b",{children:"type"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/types/enums/media-type",children:(0,d.jsx)(s.code,{children:"MediaType"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter by the list entries media type"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"medialiststatusmedialiststatus-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,d.jsx)("b",{children:"status"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/types/enums/media-list-status",children:(0,d.jsx)(s.code,{children:"MediaListStatus"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter by the watching/reading status"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"medialistmediaidint-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,d.jsx)("b",{children:"mediaId"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(s.code,{children:"Int"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter by the media id of the list entry"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"medialistisfollowingboolean-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,d.jsx)("b",{children:"isFollowing"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,d.jsx)(s.code,{children:"Boolean"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter list entries to users who are being followed by the authenticated user"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"medialistnotesstring-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,d.jsx)("b",{children:"notes"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/string",children:(0,d.jsx)(s.code,{children:"String"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter by note words and #tags"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"medialiststartedatfuzzydateint-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,d.jsx)("b",{children:"startedAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/fuzzy-date-int",children:(0,d.jsx)(s.code,{children:"FuzzyDateInt"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter by the date the user started the media"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"medialistcompletedatfuzzydateint-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,d.jsx)("b",{children:"completedAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/fuzzy-date-int",children:(0,d.jsx)(s.code,{children:"FuzzyDateInt"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter by the date the user completed the media"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"medialistcomparewithauthlistboolean-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,d.jsx)("b",{children:"compareWithAuthList"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,d.jsx)(s.code,{children:"Boolean"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Limit to only entries also on the auth user's list. Requires user id or name arguments."}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"medialistuserid_inint--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,d.jsx)("b",{children:"userId_in"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(s.code,{children:"[Int]"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter by a user's id"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"medialiststatus_inmedialiststatus--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,d.jsx)("b",{children:"status_in"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/types/enums/media-list-status",children:(0,d.jsx)(s.code,{children:"[MediaListStatus]"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter by the watching/reading status"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"medialiststatus_not_inmedialiststatus--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,d.jsx)("b",{children:"status_not_in"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/types/enums/media-list-status",children:(0,d.jsx)(s.code,{children:"[MediaListStatus]"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter by the watching/reading status"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"medialiststatus_notmedialiststatus-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,d.jsx)("b",{children:"status_not"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/types/enums/media-list-status",children:(0,d.jsx)(s.code,{children:"MediaListStatus"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter by the watching/reading status"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"medialistmediaid_inint--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,d.jsx)("b",{children:"mediaId_in"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(s.code,{children:"[Int]"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter by the media id of the list entry"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"medialistmediaid_not_inint--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,d.jsx)("b",{children:"mediaId_not_in"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(s.code,{children:"[Int]"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter by the media id of the list entry"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"medialistnotes_likestring-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,d.jsx)("b",{children:"notes_like"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/string",children:(0,d.jsx)(s.code,{children:"String"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter by note words and #tags"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"medialiststartedat_greaterfuzzydateint-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,d.jsx)("b",{children:"startedAt_greater"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/fuzzy-date-int",children:(0,d.jsx)(s.code,{children:"FuzzyDateInt"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter by the date the user started the media"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"medialiststartedat_lesserfuzzydateint-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,d.jsx)("b",{children:"startedAt_lesser"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/fuzzy-date-int",children:(0,d.jsx)(s.code,{children:"FuzzyDateInt"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter by the date the user started the media"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"medialiststartedat_likestring-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,d.jsx)("b",{children:"startedAt_like"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/string",children:(0,d.jsx)(s.code,{children:"String"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter by the date the user started the media"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"medialistcompletedat_greaterfuzzydateint-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,d.jsx)("b",{children:"completedAt_greater"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/fuzzy-date-int",children:(0,d.jsx)(s.code,{children:"FuzzyDateInt"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter by the date the user completed the media"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"medialistcompletedat_lesserfuzzydateint-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,d.jsx)("b",{children:"completedAt_lesser"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/fuzzy-date-int",children:(0,d.jsx)(s.code,{children:"FuzzyDateInt"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter by the date the user completed the media"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"medialistcompletedat_likestring-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,d.jsx)("b",{children:"completedAt_like"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/types/scalars/string",children:(0,d.jsx)(s.code,{children:"String"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Filter by the date the user completed the media"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"medialistsortmedialistsort--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,d.jsx)("b",{children:"sort"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/examples/default/types/enums/media-list-sort",children:(0,d.jsx)(s.code,{children:"[MediaListSort]"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"The order the results will be returned in"}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,d.jsxs)(s.h4,{id:"medialist-",children:[(0,d.jsx)(s.a,{href:"/examples/default/types/objects/media-list",children:(0,d.jsx)(s.code,{children:"MediaList"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"List of anime or manga"}),"\n"]})]})}function b(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>n,a:()=>l});var d=t(7294);const a={},i=d.createContext(a);function l(e){const s=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),d.createElement(i.Provider,{value:s},e.children)}}}]);