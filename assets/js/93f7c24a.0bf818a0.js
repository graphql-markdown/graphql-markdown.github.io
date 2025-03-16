"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["6883"],{65275:function(e,s,d){d.r(s),d.d(s,{Bullet:()=>o,SpecifiedBy:()=>h,Badge:()=>x,default:()=>m,frontMatter:()=>n,metadata:()=>a,Details:()=>b,assets:()=>c,toc:()=>j,contentTitle:()=>r});var a=JSON.parse('{"id":"types/objects/media-list","title":"MediaList","description":"List of anime or manga","source":"@site/examples/default/types/objects/media-list.mdx","sourceDirName":"types/objects","slug":"/types/objects/media-list","permalink":"/examples/default/types/objects/media-list","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"media-list","title":"MediaList"},"sidebar":"defaultSidebar","previous":{"title":"MediaListTypeOptions","permalink":"/examples/default/types/objects/media-list-type-options"},"next":{"title":"MediaMergeNotification","permalink":"/examples/default/types/objects/media-merge-notification"}}'),t=d("85893"),l=d("50065"),i=d("67294");let n={id:"media-list",title:"MediaList"},r=void 0,c={},o=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25CF\xa0"})}),h=e=>(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),x=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:e.class,children:e.text})}),b=({dataOpen:e,dataClose:s,children:d,startOpen:a=!1})=>{let[l,n]=(0,i.useState)(a);return(0,t.jsxs)("details",{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)("summary",{onClick:e=>{e.preventDefault(),n(e=>!e)},style:{listStyle:"none"},children:l?e:s}),l&&d]})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>MediaList.<b>id</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"medialistidint--",level:4},{value:'<code>MediaList.<b>userId</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"medialistuseridint--",level:4},{value:'<code>MediaList.<b>mediaId</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"medialistmediaidint--",level:4},{value:'<code>MediaList.<b>status</b></code><Bullet></Bullet><code><b>MediaListStatus</b></code> <Badge class="badge badge--secondary"></Badge>',id:"medialiststatusmedialiststatus-",level:4},{value:'<code>MediaList.<b>score</b></code><Bullet></Bullet><code><b>Float</b></code> <Badge class="badge badge--secondary"></Badge>',id:"medialistscorefloat-",level:4},{value:'<code>MediaList.score.<b>format</b></code><Bullet></Bullet><code><b>ScoreFormat</b></code> <Badge class="badge badge--secondary"></Badge>',id:"medialistscoreformatscoreformat-",level:5},{value:'<code>MediaList.<b>progress</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary"></Badge>',id:"medialistprogressint-",level:4},{value:'<code>MediaList.<b>progressVolumes</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary"></Badge>',id:"medialistprogressvolumesint-",level:4},{value:'<code>MediaList.<b>repeat</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary"></Badge>',id:"medialistrepeatint-",level:4},{value:'<code>MediaList.<b>priority</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary"></Badge>',id:"medialistpriorityint-",level:4},{value:'<code>MediaList.<b>private</b></code><Bullet></Bullet><code><b>Boolean</b></code> <Badge class="badge badge--secondary"></Badge>',id:"medialistprivateboolean-",level:4},{value:'<code>MediaList.<b>notes</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary"></Badge>',id:"medialistnotesstring-",level:4},{value:'<code>MediaList.<b>hiddenFromStatusLists</b></code><Bullet></Bullet><code><b>Boolean</b></code> <Badge class="badge badge--secondary"></Badge>',id:"medialisthiddenfromstatuslistsboolean-",level:4},{value:'<code>MediaList.<b>customLists</b></code><Bullet></Bullet><code><b>Json</b></code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcustomlistsjson-",level:4},{value:'<code>MediaList.customLists.<b>asArray</b></code><Bullet></Bullet><code><b>Boolean</b></code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcustomlistsasarrayboolean-",level:5},{value:'<code>MediaList.<b>advancedScores</b></code><Bullet></Bullet><code><b>Json</b></code> <Badge class="badge badge--secondary"></Badge>',id:"medialistadvancedscoresjson-",level:4},{value:'<code>MediaList.<b>startedAt</b></code><Bullet></Bullet><code><b>FuzzyDate</b></code> <Badge class="badge badge--secondary"></Badge>',id:"medialiststartedatfuzzydate-",level:4},{value:'<code>MediaList.<b>completedAt</b></code><Bullet></Bullet><code><b>FuzzyDate</b></code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcompletedatfuzzydate-",level:4},{value:'<code>MediaList.<b>updatedAt</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary"></Badge>',id:"medialistupdatedatint-",level:4},{value:'<code>MediaList.<b>createdAt</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary"></Badge>',id:"medialistcreatedatint-",level:4},{value:'<code>MediaList.<b>media</b></code><Bullet></Bullet><code><b>Media</b></code> <Badge class="badge badge--secondary"></Badge>',id:"medialistmediamedia-",level:4},{value:'<code>MediaList.<b>user</b></code><Bullet></Bullet><code><b>User</b></code> <Badge class="badge badge--secondary"></Badge>',id:"medialistuseruser-",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}];function g(e){let s={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,l.a)(),...e.components},{Head:d}=s;return d||function(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(d,{children:[(0,t.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,t.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,t.jsx)(s.p,{children:"List of anime or manga"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"type MediaList {\n  id: Int!\n  userId: Int!\n  mediaId: Int!\n  status: MediaListStatus\n  score(format: ScoreFormat): Float\n  progress: Int\n  progressVolumes: Int\n  repeat: Int\n  priority: Int\n  private: Boolean\n  notes: String\n  hiddenFromStatusLists: Boolean\n  customLists(asArray: Boolean): Json\n  advancedScores: Json\n  startedAt: FuzzyDate\n  completedAt: FuzzyDate\n  updatedAt: Int\n  createdAt: Int\n  media: Media\n  user: User\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(s.h4,{id:"medialistidint--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,t.jsx)("b",{children:"id"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"Int!"})})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"The id of the list entry"}),"\n",(0,t.jsxs)(s.h4,{id:"medialistuseridint--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,t.jsx)("b",{children:"userId"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"Int!"})})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"The id of the user owner of the list entry"}),"\n",(0,t.jsxs)(s.h4,{id:"medialistmediaidint--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,t.jsx)("b",{children:"mediaId"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"Int!"})})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"The id of the media"}),"\n",(0,t.jsxs)(s.h4,{id:"medialiststatusmedialiststatus-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,t.jsx)("b",{children:"status"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/enums/media-list-status",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"MediaListStatus"})})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsx)(s.p,{children:"The watching/reading status"}),"\n",(0,t.jsxs)(s.h4,{id:"medialistscorefloat-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,t.jsx)("b",{children:"score"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/float",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"Float"})})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"The score of the entry"}),"\n",(0,t.jsxs)(s.h5,{id:"medialistscoreformatscoreformat-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.score.",(0,t.jsx)("b",{children:"format"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/enums/score-format",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"ScoreFormat"})})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsx)(s.p,{children:"Force the score to be returned in the provided format type."}),"\n",(0,t.jsxs)(s.h4,{id:"medialistprogressint-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,t.jsx)("b",{children:"progress"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"Int"})})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"The amount of episodes/chapters consumed by the user"}),"\n",(0,t.jsxs)(s.h4,{id:"medialistprogressvolumesint-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,t.jsx)("b",{children:"progressVolumes"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"Int"})})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"The amount of volumes read by the user"}),"\n",(0,t.jsxs)(s.h4,{id:"medialistrepeatint-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,t.jsx)("b",{children:"repeat"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"Int"})})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"The amount of times the user has rewatched/read the media"}),"\n",(0,t.jsxs)(s.h4,{id:"medialistpriorityint-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,t.jsx)("b",{children:"priority"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"Int"})})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"Priority of planning"}),"\n",(0,t.jsxs)(s.h4,{id:"medialistprivateboolean-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,t.jsx)("b",{children:"private"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"Boolean"})})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"If the entry should only be visible to authenticated user"}),"\n",(0,t.jsxs)(s.h4,{id:"medialistnotesstring-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,t.jsx)("b",{children:"notes"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/string",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"String"})})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"Text notes"}),"\n",(0,t.jsxs)(s.h4,{id:"medialisthiddenfromstatuslistsboolean-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,t.jsx)("b",{children:"hiddenFromStatusLists"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"Boolean"})})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"If the entry shown be hidden from non-custom lists"}),"\n",(0,t.jsxs)(s.h4,{id:"medialistcustomlistsjson-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,t.jsx)("b",{children:"customLists"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/json",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"Json"})})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"Map of booleans for which custom lists the entry are in"}),"\n",(0,t.jsxs)(s.h5,{id:"medialistcustomlistsasarrayboolean-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.customLists.",(0,t.jsx)("b",{children:"asArray"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"Boolean"})})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"Change return structure to an array of objects"}),"\n",(0,t.jsxs)(s.h4,{id:"medialistadvancedscoresjson-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,t.jsx)("b",{children:"advancedScores"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/json",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"Json"})})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"Map of advanced scores with name keys"}),"\n",(0,t.jsxs)(s.h4,{id:"medialiststartedatfuzzydate-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,t.jsx)("b",{children:"startedAt"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/objects/fuzzy-date",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"FuzzyDate"})})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(s.p,{children:"When the entry was started by the user"}),"\n",(0,t.jsxs)(s.h4,{id:"medialistcompletedatfuzzydate-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,t.jsx)("b",{children:"completedAt"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/objects/fuzzy-date",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"FuzzyDate"})})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(s.p,{children:"When the entry was completed by the user"}),"\n",(0,t.jsxs)(s.h4,{id:"medialistupdatedatint-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,t.jsx)("b",{children:"updatedAt"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"Int"})})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"When the entry data was last updated"}),"\n",(0,t.jsxs)(s.h4,{id:"medialistcreatedatint-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,t.jsx)("b",{children:"createdAt"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"Int"})})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"When the entry data was created"}),"\n",(0,t.jsxs)(s.h4,{id:"medialistmediamedia-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,t.jsx)("b",{children:"media"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/objects/media",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"Media"})})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(s.h4,{id:"medialistuseruser-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaList.",(0,t.jsx)("b",{children:"user"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/objects/user",children:(0,t.jsx)("code",{style:{fontWeight:"normal"},children:(0,t.jsx)("b",{children:"User"})})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(s.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/examples/default/operations/queries/media-list",children:(0,t.jsx)(s.code,{children:"MediaList"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"query"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/operations/mutations/save-media-list-entry",children:(0,t.jsx)(s.code,{children:"SaveMediaListEntry"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"mutation"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/operations/mutations/update-media-list-entries",children:(0,t.jsx)(s.code,{children:"UpdateMediaListEntries"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"mutation"})]}),"\n",(0,t.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/examples/default/types/objects/internal-page",children:(0,t.jsx)(s.code,{children:"InternalPage"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/objects/media",children:(0,t.jsx)(s.code,{children:"Media"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/objects/media-list-collection",children:(0,t.jsx)(s.code,{children:"MediaListCollection"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/objects/media-list-group",children:(0,t.jsx)(s.code,{children:"MediaListGroup"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/examples/default/types/objects/page",children:(0,t.jsx)(s.code,{children:"Page"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function m(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},50065:function(e,s,d){d.d(s,{Z:function(){return n},a:function(){return i}});var a=d(67294);let t={},l=a.createContext(t);function i(e){let s=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(l.Provider,{value:s},e.children)}}}]);