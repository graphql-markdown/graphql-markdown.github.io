"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3790],{99356:(e,d,a)=>{a.r(d),a.d(d,{Badge:()=>x,Bullet:()=>o,Details:()=>g,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>j});var n=a(74848),s=a(28453),r=a(96540);const t={pagination_next:null,pagination_prev:null,id:"media-trend",title:"MediaTrend"},l=void 0,i={id:"operations/queries/media-trend",title:"MediaTrend",description:"Media Trend query",source:"@site/examples/default/operations/queries/media-trend.mdx",sourceDirName:"operations/queries",slug:"/operations/queries/media-trend",permalink:"/examples/default/operations/queries/media-trend",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"media-trend",title:"MediaTrend"},sidebar:"defaultSidebar"},c={},o=()=>{const e={span:"span",...(0,s.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const d={a:"a",...(0,s.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(d.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const d={span:"span",...(0,s.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(d.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:d,children:a,startOpen:t=!1})=>{const l={details:"details",summary:"summary",...(0,s.R)()},[i,c]=(0,r.useState)(t);return(0,n.jsxs)(l.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:d}),i&&a]})},j=[{value:"Arguments",id:"arguments",level:3},{value:'<code>MediaTrend.<b>mediaId</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"mediatrendmediaidint-",level:4},{value:'<code>MediaTrend.<b>date</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"mediatrenddateint-",level:4},{value:'<code>MediaTrend.<b>trending</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"mediatrendtrendingint-",level:4},{value:'<code>MediaTrend.<b>averageScore</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"mediatrendaveragescoreint-",level:4},{value:'<code>MediaTrend.<b>popularity</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"mediatrendpopularityint-",level:4},{value:'<code>MediaTrend.<b>episode</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"mediatrendepisodeint-",level:4},{value:'<code>MediaTrend.<b>releasing</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"mediatrendreleasingboolean-",level:4},{value:'<code>MediaTrend.<b>mediaId_not</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"mediatrendmediaid_notint-",level:4},{value:'<code>MediaTrend.<b>mediaId_in</b></code><Bullet></Bullet><code>[Int]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"mediatrendmediaid_inint--",level:4},{value:'<code>MediaTrend.<b>mediaId_not_in</b></code><Bullet></Bullet><code>[Int]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"mediatrendmediaid_not_inint--",level:4},{value:'<code>MediaTrend.<b>date_greater</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"mediatrenddate_greaterint-",level:4},{value:'<code>MediaTrend.<b>date_lesser</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"mediatrenddate_lesserint-",level:4},{value:'<code>MediaTrend.<b>trending_greater</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"mediatrendtrending_greaterint-",level:4},{value:'<code>MediaTrend.<b>trending_lesser</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"mediatrendtrending_lesserint-",level:4},{value:'<code>MediaTrend.<b>trending_not</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"mediatrendtrending_notint-",level:4},{value:'<code>MediaTrend.<b>averageScore_greater</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"mediatrendaveragescore_greaterint-",level:4},{value:'<code>MediaTrend.<b>averageScore_lesser</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"mediatrendaveragescore_lesserint-",level:4},{value:'<code>MediaTrend.<b>averageScore_not</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"mediatrendaveragescore_notint-",level:4},{value:'<code>MediaTrend.<b>popularity_greater</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"mediatrendpopularity_greaterint-",level:4},{value:'<code>MediaTrend.<b>popularity_lesser</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"mediatrendpopularity_lesserint-",level:4},{value:'<code>MediaTrend.<b>popularity_not</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"mediatrendpopularity_notint-",level:4},{value:'<code>MediaTrend.<b>episode_greater</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"mediatrendepisode_greaterint-",level:4},{value:'<code>MediaTrend.<b>episode_lesser</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"mediatrendepisode_lesserint-",level:4},{value:'<code>MediaTrend.<b>episode_not</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"mediatrendepisode_notint-",level:4},{value:'<code>MediaTrend.<b>sort</b></code><Bullet></Bullet><code>[MediaTrendSort]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"mediatrendsortmediatrendsort--",level:4},{value:"Type",id:"type",level:3},{value:'<code>MediaTrend</code> <Badge class="badge badge--secondary"></Badge>',id:"mediatrend-",level:4}];function b(e){const d={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Head:a}=d;return a||function(e,d){throw new Error("Expected "+(d?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a,{children:[(0,n.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,n.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,n.jsx)(d.p,{children:"Media Trend query"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-graphql",children:"MediaTrend(\n  mediaId: Int\n  date: Int\n  trending: Int\n  averageScore: Int\n  popularity: Int\n  episode: Int\n  releasing: Boolean\n  mediaId_not: Int\n  mediaId_in: [Int]\n  mediaId_not_in: [Int]\n  date_greater: Int\n  date_lesser: Int\n  trending_greater: Int\n  trending_lesser: Int\n  trending_not: Int\n  averageScore_greater: Int\n  averageScore_lesser: Int\n  averageScore_not: Int\n  popularity_greater: Int\n  popularity_lesser: Int\n  popularity_not: Int\n  episode_greater: Int\n  episode_lesser: Int\n  episode_not: Int\n  sort: [MediaTrendSort]\n): MediaTrend\n"})}),"\n",(0,n.jsx)(d.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(d.h4,{id:"mediatrendmediaidint-",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTrend.",(0,n.jsx)("b",{children:"mediaId"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(d.code,{children:"Int"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(d.p,{children:"Filter by the media id"}),"\n",(0,n.jsxs)(d.h4,{id:"mediatrenddateint-",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTrend.",(0,n.jsx)("b",{children:"date"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(d.code,{children:"Int"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(d.p,{children:"Filter by date"}),"\n",(0,n.jsxs)(d.h4,{id:"mediatrendtrendingint-",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTrend.",(0,n.jsx)("b",{children:"trending"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(d.code,{children:"Int"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(d.p,{children:"Filter by trending amount"}),"\n",(0,n.jsxs)(d.h4,{id:"mediatrendaveragescoreint-",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTrend.",(0,n.jsx)("b",{children:"averageScore"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(d.code,{children:"Int"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(d.p,{children:"Filter by score"}),"\n",(0,n.jsxs)(d.h4,{id:"mediatrendpopularityint-",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTrend.",(0,n.jsx)("b",{children:"popularity"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(d.code,{children:"Int"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(d.p,{children:"Filter by popularity"}),"\n",(0,n.jsxs)(d.h4,{id:"mediatrendepisodeint-",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTrend.",(0,n.jsx)("b",{children:"episode"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(d.code,{children:"Int"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(d.p,{children:"Filter by episode number"}),"\n",(0,n.jsxs)(d.h4,{id:"mediatrendreleasingboolean-",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTrend.",(0,n.jsx)("b",{children:"releasing"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/examples/default/types/scalars/boolean",children:(0,n.jsx)(d.code,{children:"Boolean"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(d.p,{children:"Filter to stats recorded while the media was releasing"}),"\n",(0,n.jsxs)(d.h4,{id:"mediatrendmediaid_notint-",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTrend.",(0,n.jsx)("b",{children:"mediaId_not"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(d.code,{children:"Int"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(d.p,{children:"Filter by the media id"}),"\n",(0,n.jsxs)(d.h4,{id:"mediatrendmediaid_inint--",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTrend.",(0,n.jsx)("b",{children:"mediaId_in"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(d.code,{children:"[Int]"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(d.p,{children:"Filter by the media id"}),"\n",(0,n.jsxs)(d.h4,{id:"mediatrendmediaid_not_inint--",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTrend.",(0,n.jsx)("b",{children:"mediaId_not_in"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(d.code,{children:"[Int]"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(d.p,{children:"Filter by the media id"}),"\n",(0,n.jsxs)(d.h4,{id:"mediatrenddate_greaterint-",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTrend.",(0,n.jsx)("b",{children:"date_greater"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(d.code,{children:"Int"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(d.p,{children:"Filter by date"}),"\n",(0,n.jsxs)(d.h4,{id:"mediatrenddate_lesserint-",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTrend.",(0,n.jsx)("b",{children:"date_lesser"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(d.code,{children:"Int"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(d.p,{children:"Filter by date"}),"\n",(0,n.jsxs)(d.h4,{id:"mediatrendtrending_greaterint-",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTrend.",(0,n.jsx)("b",{children:"trending_greater"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(d.code,{children:"Int"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(d.p,{children:"Filter by trending amount"}),"\n",(0,n.jsxs)(d.h4,{id:"mediatrendtrending_lesserint-",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTrend.",(0,n.jsx)("b",{children:"trending_lesser"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(d.code,{children:"Int"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(d.p,{children:"Filter by trending amount"}),"\n",(0,n.jsxs)(d.h4,{id:"mediatrendtrending_notint-",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTrend.",(0,n.jsx)("b",{children:"trending_not"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(d.code,{children:"Int"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(d.p,{children:"Filter by trending amount"}),"\n",(0,n.jsxs)(d.h4,{id:"mediatrendaveragescore_greaterint-",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTrend.",(0,n.jsx)("b",{children:"averageScore_greater"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(d.code,{children:"Int"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(d.p,{children:"Filter by score"}),"\n",(0,n.jsxs)(d.h4,{id:"mediatrendaveragescore_lesserint-",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTrend.",(0,n.jsx)("b",{children:"averageScore_lesser"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(d.code,{children:"Int"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(d.p,{children:"Filter by score"}),"\n",(0,n.jsxs)(d.h4,{id:"mediatrendaveragescore_notint-",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTrend.",(0,n.jsx)("b",{children:"averageScore_not"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(d.code,{children:"Int"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(d.p,{children:"Filter by score"}),"\n",(0,n.jsxs)(d.h4,{id:"mediatrendpopularity_greaterint-",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTrend.",(0,n.jsx)("b",{children:"popularity_greater"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(d.code,{children:"Int"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(d.p,{children:"Filter by popularity"}),"\n",(0,n.jsxs)(d.h4,{id:"mediatrendpopularity_lesserint-",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTrend.",(0,n.jsx)("b",{children:"popularity_lesser"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(d.code,{children:"Int"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(d.p,{children:"Filter by popularity"}),"\n",(0,n.jsxs)(d.h4,{id:"mediatrendpopularity_notint-",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTrend.",(0,n.jsx)("b",{children:"popularity_not"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(d.code,{children:"Int"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(d.p,{children:"Filter by popularity"}),"\n",(0,n.jsxs)(d.h4,{id:"mediatrendepisode_greaterint-",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTrend.",(0,n.jsx)("b",{children:"episode_greater"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(d.code,{children:"Int"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(d.p,{children:"Filter by episode number"}),"\n",(0,n.jsxs)(d.h4,{id:"mediatrendepisode_lesserint-",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTrend.",(0,n.jsx)("b",{children:"episode_lesser"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(d.code,{children:"Int"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(d.p,{children:"Filter by episode number"}),"\n",(0,n.jsxs)(d.h4,{id:"mediatrendepisode_notint-",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTrend.",(0,n.jsx)("b",{children:"episode_not"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/examples/default/types/scalars/int",children:(0,n.jsx)(d.code,{children:"Int"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(d.p,{children:"Filter by episode number"}),"\n",(0,n.jsxs)(d.h4,{id:"mediatrendsortmediatrendsort--",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTrend.",(0,n.jsx)("b",{children:"sort"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/examples/default/types/enums/media-trend-sort",children:(0,n.jsx)(d.code,{children:"[MediaTrendSort]"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(d.p,{children:"The order the results will be returned in"}),"\n",(0,n.jsx)(d.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(d.h4,{id:"mediatrend-",children:[(0,n.jsx)(d.a,{href:"/examples/default/types/objects/media-trend",children:(0,n.jsx)(d.code,{children:"MediaTrend"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(d.p,{children:"Daily media statistics"})]})}function p(e={}){const{wrapper:d}={...(0,s.R)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},28453:(e,d,a)=>{a.d(d,{R:()=>t,x:()=>l});var n=a(96540);const s={},r=n.createContext(s);function t(e){const d=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(r.Provider,{value:d},e.children)}}}]);