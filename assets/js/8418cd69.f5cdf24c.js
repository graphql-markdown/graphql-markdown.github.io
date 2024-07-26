"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3802],{38236:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>u,Bullet:()=>r,Details:()=>x,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>n,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var l=s(74848),a=s(28453),d=s(96540);const i={pagination_next:null,pagination_prev:null,id:"media-list-collection",title:"MediaListCollection"},n=void 0,c={id:"api/queries/media-list-collection",title:"MediaListCollection",description:"Media list collection query, provides list pre-grouped by status & custom lists. User ID and Media Type arguments required.",source:"@site/examples/default/api/queries/media-list-collection.mdx",sourceDirName:"api/queries",slug:"/api/queries/media-list-collection",permalink:"/examples/default/api/queries/media-list-collection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"media-list-collection",title:"MediaListCollection"},sidebar:"defaultSidebar"},o={},r=()=>{const e={span:"span",...(0,a.R)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const t={a:"a",...(0,a.R)()};return(0,l.jsxs)(l.Fragment,{children:["Specification",(0,l.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,a.R)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(t.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:t,children:s,startOpen:i=!1})=>{const n={details:"details",summary:"summary",...(0,a.R)()},[c,o]=(0,d.useState)(i);return(0,l.jsxs)(n.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,l.jsx)(n.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&s]})},g=[{value:"Arguments",id:"arguments",level:3},{value:'<code>MediaListCollection.<b>userId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcollectionuseridint-",level:4},{value:'<code>MediaListCollection.<b>userName</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcollectionusernamestring-",level:4},{value:'<code>MediaListCollection.<b>type</b></code><Bullet></Bullet><code>MediaType</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcollectiontypemediatype-",level:4},{value:'<code>MediaListCollection.<b>status</b></code><Bullet></Bullet><code>MediaListStatus</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcollectionstatusmedialiststatus-",level:4},{value:'<code>MediaListCollection.<b>notes</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcollectionnotesstring-",level:4},{value:'<code>MediaListCollection.<b>startedAt</b></code><Bullet></Bullet><code>FuzzyDateInt</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcollectionstartedatfuzzydateint-",level:4},{value:'<code>MediaListCollection.<b>completedAt</b></code><Bullet></Bullet><code>FuzzyDateInt</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcollectioncompletedatfuzzydateint-",level:4},{value:'<code>MediaListCollection.<b>forceSingleCompletedList</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcollectionforcesinglecompletedlistboolean-",level:4},{value:'<code>MediaListCollection.<b>chunk</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcollectionchunkint-",level:4},{value:'<code>MediaListCollection.<b>perChunk</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcollectionperchunkint-",level:4},{value:'<code>MediaListCollection.<b>status_in</b></code><Bullet></Bullet><code>[MediaListStatus]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"medialistcollectionstatus_inmedialiststatus--",level:4},{value:'<code>MediaListCollection.<b>status_not_in</b></code><Bullet></Bullet><code>[MediaListStatus]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"medialistcollectionstatus_not_inmedialiststatus--",level:4},{value:'<code>MediaListCollection.<b>status_not</b></code><Bullet></Bullet><code>MediaListStatus</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcollectionstatus_notmedialiststatus-",level:4},{value:'<code>MediaListCollection.<b>notes_like</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcollectionnotes_likestring-",level:4},{value:'<code>MediaListCollection.<b>startedAt_greater</b></code><Bullet></Bullet><code>FuzzyDateInt</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcollectionstartedat_greaterfuzzydateint-",level:4},{value:'<code>MediaListCollection.<b>startedAt_lesser</b></code><Bullet></Bullet><code>FuzzyDateInt</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcollectionstartedat_lesserfuzzydateint-",level:4},{value:'<code>MediaListCollection.<b>startedAt_like</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcollectionstartedat_likestring-",level:4},{value:'<code>MediaListCollection.<b>completedAt_greater</b></code><Bullet></Bullet><code>FuzzyDateInt</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcollectioncompletedat_greaterfuzzydateint-",level:4},{value:'<code>MediaListCollection.<b>completedAt_lesser</b></code><Bullet></Bullet><code>FuzzyDateInt</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcollectioncompletedat_lesserfuzzydateint-",level:4},{value:'<code>MediaListCollection.<b>completedAt_like</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcollectioncompletedat_likestring-",level:4},{value:'<code>MediaListCollection.<b>sort</b></code><Bullet></Bullet><code>[MediaListSort]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"medialistcollectionsortmedialistsort--",level:4},{value:"Type",id:"type",level:3},{value:'<code>MediaListCollection</code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcollection-",level:4}];function m(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s,{children:[(0,l.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,l.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,l.jsx)(t.p,{children:"Media list collection query, provides list pre-grouped by status & custom lists. User ID and Media Type arguments required."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-graphql",children:"MediaListCollection(\n  userId: Int\n  userName: String\n  type: MediaType\n  status: MediaListStatus\n  notes: String\n  startedAt: FuzzyDateInt\n  completedAt: FuzzyDateInt\n  forceSingleCompletedList: Boolean\n  chunk: Int\n  perChunk: Int\n  status_in: [MediaListStatus]\n  status_not_in: [MediaListStatus]\n  status_not: MediaListStatus\n  notes_like: String\n  startedAt_greater: FuzzyDateInt\n  startedAt_lesser: FuzzyDateInt\n  startedAt_like: String\n  completedAt_greater: FuzzyDateInt\n  completedAt_lesser: FuzzyDateInt\n  completedAt_like: String\n  sort: [MediaListSort]\n): MediaListCollection\n"})}),"\n",(0,l.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,l.jsxs)(t.h4,{id:"medialistcollectionuseridint-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListCollection.",(0,l.jsx)("b",{children:"userId"})]})}),(0,l.jsx)(r,{}),(0,l.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,l.jsx)(t.code,{children:"Int"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsx)(t.p,{children:"Filter by a user's id"}),"\n",(0,l.jsxs)(t.h4,{id:"medialistcollectionusernamestring-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListCollection.",(0,l.jsx)("b",{children:"userName"})]})}),(0,l.jsx)(r,{}),(0,l.jsx)(t.a,{href:"/examples/default/types/scalars/string",children:(0,l.jsx)(t.code,{children:"String"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsx)(t.p,{children:"Filter by a user's name"}),"\n",(0,l.jsxs)(t.h4,{id:"medialistcollectiontypemediatype-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListCollection.",(0,l.jsx)("b",{children:"type"})]})}),(0,l.jsx)(r,{}),(0,l.jsx)(t.a,{href:"/examples/default/types/enums/media-type",children:(0,l.jsx)(t.code,{children:"MediaType"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,l.jsx)(t.p,{children:"Filter by the list entries media type"}),"\n",(0,l.jsxs)(t.h4,{id:"medialistcollectionstatusmedialiststatus-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListCollection.",(0,l.jsx)("b",{children:"status"})]})}),(0,l.jsx)(r,{}),(0,l.jsx)(t.a,{href:"/examples/default/types/enums/media-list-status",children:(0,l.jsx)(t.code,{children:"MediaListStatus"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,l.jsx)(t.p,{children:"Filter by the watching/reading status"}),"\n",(0,l.jsxs)(t.h4,{id:"medialistcollectionnotesstring-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListCollection.",(0,l.jsx)("b",{children:"notes"})]})}),(0,l.jsx)(r,{}),(0,l.jsx)(t.a,{href:"/examples/default/types/scalars/string",children:(0,l.jsx)(t.code,{children:"String"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsx)(t.p,{children:"Filter by note words and #tags"}),"\n",(0,l.jsxs)(t.h4,{id:"medialistcollectionstartedatfuzzydateint-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListCollection.",(0,l.jsx)("b",{children:"startedAt"})]})}),(0,l.jsx)(r,{}),(0,l.jsx)(t.a,{href:"/examples/default/types/scalars/fuzzy-date-int",children:(0,l.jsx)(t.code,{children:"FuzzyDateInt"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsx)(t.p,{children:"Filter by the date the user started the media"}),"\n",(0,l.jsxs)(t.h4,{id:"medialistcollectioncompletedatfuzzydateint-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListCollection.",(0,l.jsx)("b",{children:"completedAt"})]})}),(0,l.jsx)(r,{}),(0,l.jsx)(t.a,{href:"/examples/default/types/scalars/fuzzy-date-int",children:(0,l.jsx)(t.code,{children:"FuzzyDateInt"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsx)(t.p,{children:"Filter by the date the user completed the media"}),"\n",(0,l.jsxs)(t.h4,{id:"medialistcollectionforcesinglecompletedlistboolean-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListCollection.",(0,l.jsx)("b",{children:"forceSingleCompletedList"})]})}),(0,l.jsx)(r,{}),(0,l.jsx)(t.a,{href:"/examples/default/types/scalars/boolean",children:(0,l.jsx)(t.code,{children:"Boolean"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsx)(t.p,{children:"Always return completed list entries in one group, overriding the user's split completed option."}),"\n",(0,l.jsxs)(t.h4,{id:"medialistcollectionchunkint-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListCollection.",(0,l.jsx)("b",{children:"chunk"})]})}),(0,l.jsx)(r,{}),(0,l.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,l.jsx)(t.code,{children:"Int"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsx)(t.p,{children:"Which chunk of list entries to load"}),"\n",(0,l.jsxs)(t.h4,{id:"medialistcollectionperchunkint-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListCollection.",(0,l.jsx)("b",{children:"perChunk"})]})}),(0,l.jsx)(r,{}),(0,l.jsx)(t.a,{href:"/examples/default/types/scalars/int",children:(0,l.jsx)(t.code,{children:"Int"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsx)(t.p,{children:"The amount of entries per chunk, max 500"}),"\n",(0,l.jsxs)(t.h4,{id:"medialistcollectionstatus_inmedialiststatus--",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListCollection.",(0,l.jsx)("b",{children:"status_in"})]})}),(0,l.jsx)(r,{}),(0,l.jsx)(t.a,{href:"/examples/default/types/enums/media-list-status",children:(0,l.jsx)(t.code,{children:"[MediaListStatus]"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,l.jsx)(t.p,{children:"Filter by the watching/reading status"}),"\n",(0,l.jsxs)(t.h4,{id:"medialistcollectionstatus_not_inmedialiststatus--",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListCollection.",(0,l.jsx)("b",{children:"status_not_in"})]})}),(0,l.jsx)(r,{}),(0,l.jsx)(t.a,{href:"/examples/default/types/enums/media-list-status",children:(0,l.jsx)(t.code,{children:"[MediaListStatus]"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,l.jsx)(t.p,{children:"Filter by the watching/reading status"}),"\n",(0,l.jsxs)(t.h4,{id:"medialistcollectionstatus_notmedialiststatus-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListCollection.",(0,l.jsx)("b",{children:"status_not"})]})}),(0,l.jsx)(r,{}),(0,l.jsx)(t.a,{href:"/examples/default/types/enums/media-list-status",children:(0,l.jsx)(t.code,{children:"MediaListStatus"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,l.jsx)(t.p,{children:"Filter by the watching/reading status"}),"\n",(0,l.jsxs)(t.h4,{id:"medialistcollectionnotes_likestring-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListCollection.",(0,l.jsx)("b",{children:"notes_like"})]})}),(0,l.jsx)(r,{}),(0,l.jsx)(t.a,{href:"/examples/default/types/scalars/string",children:(0,l.jsx)(t.code,{children:"String"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsx)(t.p,{children:"Filter by note words and #tags"}),"\n",(0,l.jsxs)(t.h4,{id:"medialistcollectionstartedat_greaterfuzzydateint-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListCollection.",(0,l.jsx)("b",{children:"startedAt_greater"})]})}),(0,l.jsx)(r,{}),(0,l.jsx)(t.a,{href:"/examples/default/types/scalars/fuzzy-date-int",children:(0,l.jsx)(t.code,{children:"FuzzyDateInt"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsx)(t.p,{children:"Filter by the date the user started the media"}),"\n",(0,l.jsxs)(t.h4,{id:"medialistcollectionstartedat_lesserfuzzydateint-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListCollection.",(0,l.jsx)("b",{children:"startedAt_lesser"})]})}),(0,l.jsx)(r,{}),(0,l.jsx)(t.a,{href:"/examples/default/types/scalars/fuzzy-date-int",children:(0,l.jsx)(t.code,{children:"FuzzyDateInt"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsx)(t.p,{children:"Filter by the date the user started the media"}),"\n",(0,l.jsxs)(t.h4,{id:"medialistcollectionstartedat_likestring-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListCollection.",(0,l.jsx)("b",{children:"startedAt_like"})]})}),(0,l.jsx)(r,{}),(0,l.jsx)(t.a,{href:"/examples/default/types/scalars/string",children:(0,l.jsx)(t.code,{children:"String"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsx)(t.p,{children:"Filter by the date the user started the media"}),"\n",(0,l.jsxs)(t.h4,{id:"medialistcollectioncompletedat_greaterfuzzydateint-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListCollection.",(0,l.jsx)("b",{children:"completedAt_greater"})]})}),(0,l.jsx)(r,{}),(0,l.jsx)(t.a,{href:"/examples/default/types/scalars/fuzzy-date-int",children:(0,l.jsx)(t.code,{children:"FuzzyDateInt"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsx)(t.p,{children:"Filter by the date the user completed the media"}),"\n",(0,l.jsxs)(t.h4,{id:"medialistcollectioncompletedat_lesserfuzzydateint-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListCollection.",(0,l.jsx)("b",{children:"completedAt_lesser"})]})}),(0,l.jsx)(r,{}),(0,l.jsx)(t.a,{href:"/examples/default/types/scalars/fuzzy-date-int",children:(0,l.jsx)(t.code,{children:"FuzzyDateInt"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsx)(t.p,{children:"Filter by the date the user completed the media"}),"\n",(0,l.jsxs)(t.h4,{id:"medialistcollectioncompletedat_likestring-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListCollection.",(0,l.jsx)("b",{children:"completedAt_like"})]})}),(0,l.jsx)(r,{}),(0,l.jsx)(t.a,{href:"/examples/default/types/scalars/string",children:(0,l.jsx)(t.code,{children:"String"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsx)(t.p,{children:"Filter by the date the user completed the media"}),"\n",(0,l.jsxs)(t.h4,{id:"medialistcollectionsortmedialistsort--",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListCollection.",(0,l.jsx)("b",{children:"sort"})]})}),(0,l.jsx)(r,{}),(0,l.jsx)(t.a,{href:"/examples/default/types/enums/media-list-sort",children:(0,l.jsx)(t.code,{children:"[MediaListSort]"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,l.jsx)(t.p,{children:"The order the results will be returned in"}),"\n",(0,l.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,l.jsxs)(t.h4,{id:"medialistcollection-",children:[(0,l.jsx)(t.a,{href:"/examples/default/types/objects/media-list-collection",children:(0,l.jsx)(t.code,{children:"MediaListCollection"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,l.jsx)(t.p,{children:"List of anime or manga"})]})}function j(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>n});var l=s(96540);const a={},d=l.createContext(a);function i(e){const t=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),l.createElement(d.Provider,{value:t},e.children)}}}]);