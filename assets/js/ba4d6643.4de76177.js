"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3831],{7283:(e,s,d)=>{d.r(s),d.d(s,{Badge:()=>x,Bullet:()=>r,Details:()=>h,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>j});var a=d(74848),t=d(28453),n=d(96540);const i={pagination_next:null,pagination_prev:null,id:"studio",title:"Studio"},o=void 0,l={id:"types/objects/studio",title:"Studio",description:"Animation or production company",source:"@site/examples/default/types/objects/studio.mdx",sourceDirName:"types/objects",slug:"/types/objects/studio",permalink:"/examples/default/types/objects/studio",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"studio",title:"Studio"},sidebar:"schemaSidebar"},c={},r=()=>{const e={span:"span",...(0,t.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const s={a:"a",...(0,t.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const s={span:"span",...(0,t.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:s,children:d,startOpen:i=!1})=>{const o={details:"details",summary:"summary",...(0,t.R)()},[l,c]=(0,n.useState)(i);return(0,a.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:s}),l&&d]})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>Studio.<b>id</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"studioidint--",level:4},{value:'<code>Studio.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"studionamestring--",level:4},{value:'<code>Studio.<b>isAnimationStudio</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"studioisanimationstudioboolean--",level:4},{value:'<code>Studio.<b>media</b></code><Bullet></Bullet><code>MediaConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"studiomediamediaconnection-",level:4},{value:'<code>Studio.media.<b>sort</b></code><Bullet></Bullet><code>[MediaSort]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"studiomediasortmediasort--",level:5},{value:'<code>Studio.media.<b>isMain</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"studiomediaismainboolean-",level:5},{value:'<code>Studio.media.<b>onList</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"studiomediaonlistboolean-",level:5},{value:'<code>Studio.media.<b>page</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"studiomediapageint-",level:5},{value:'<code>Studio.media.<b>perPage</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"studiomediaperpageint-",level:5},{value:'<code>Studio.<b>siteUrl</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"studiositeurlstring-",level:4},{value:'<code>Studio.<b>isFavourite</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"studioisfavouriteboolean--",level:4},{value:'<code>Studio.<b>favourites</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"studiofavouritesint-",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}];function g(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,t.R)(),...e.components},{Head:d}=s;return d||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(d,{children:[(0,a.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,a.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,a.jsx)(s.p,{children:"Animation or production company"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"type Studio {\n  id: Int!\n  name: String!\n  isAnimationStudio: Boolean!\n  media(\n    sort: [MediaSort]\n    isMain: Boolean\n    onList: Boolean\n    page: Int\n    perPage: Int\n  ): MediaConnection\n  siteUrl: String\n  isFavourite: Boolean!\n  favourites: Int\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"studioidint--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Studio.",(0,a.jsx)("b",{children:"id"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(s.code,{children:"Int!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.p,{children:"The id of the studio"}),"\n",(0,a.jsxs)(s.h4,{id:"studionamestring--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Studio.",(0,a.jsx)("b",{children:"name"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/string",children:(0,a.jsx)(s.code,{children:"String!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.p,{children:"The name of the studio"}),"\n",(0,a.jsxs)(s.h4,{id:"studioisanimationstudioboolean--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Studio.",(0,a.jsx)("b",{children:"isAnimationStudio"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,a.jsx)(s.code,{children:"Boolean!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.p,{children:"If the studio is an animation studio or a different kind of company"}),"\n",(0,a.jsxs)(s.h4,{id:"studiomediamediaconnection-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Studio.",(0,a.jsx)("b",{children:"media"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/objects/media-connection",children:(0,a.jsx)(s.code,{children:"MediaConnection"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(s.p,{children:"The media the studio has worked on"}),"\n",(0,a.jsxs)(s.h5,{id:"studiomediasortmediasort--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Studio.media.",(0,a.jsx)("b",{children:"sort"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/enums/media-sort",children:(0,a.jsx)(s.code,{children:"[MediaSort]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(s.p,{children:"The order the results will be returned in"}),"\n",(0,a.jsxs)(s.h5,{id:"studiomediaismainboolean-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Studio.media.",(0,a.jsx)("b",{children:"isMain"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,a.jsx)(s.code,{children:"Boolean"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.p,{children:"If the studio was the primary animation studio of the media"}),"\n",(0,a.jsxs)(s.h5,{id:"studiomediaonlistboolean-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Studio.media.",(0,a.jsx)("b",{children:"onList"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,a.jsx)(s.code,{children:"Boolean"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.h5,{id:"studiomediapageint-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Studio.media.",(0,a.jsx)("b",{children:"page"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(s.code,{children:"Int"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.p,{children:"The page"}),"\n",(0,a.jsxs)(s.h5,{id:"studiomediaperpageint-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Studio.media.",(0,a.jsx)("b",{children:"perPage"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(s.code,{children:"Int"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.p,{children:"The amount of entries per page, max 25"}),"\n",(0,a.jsxs)(s.h4,{id:"studiositeurlstring-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Studio.",(0,a.jsx)("b",{children:"siteUrl"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/string",children:(0,a.jsx)(s.code,{children:"String"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.p,{children:"The url for the studio page on the AniList website"}),"\n",(0,a.jsxs)(s.h4,{id:"studioisfavouriteboolean--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Studio.",(0,a.jsx)("b",{children:"isFavourite"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,a.jsx)(s.code,{children:"Boolean!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.p,{children:"If the studio is marked as favourite by the currently authenticated user"}),"\n",(0,a.jsxs)(s.h4,{id:"studiofavouritesint-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Studio.",(0,a.jsx)("b",{children:"favourites"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(s.code,{children:"Int"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.p,{children:"The amount of user's who have favourited the studio"}),"\n",(0,a.jsx)(s.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/examples/default/api/queries/studio",children:(0,a.jsx)(s.code,{children:"Studio"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"query"})]}),"\n",(0,a.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/examples/default/types/objects/internal-page",children:(0,a.jsx)(s.code,{children:"InternalPage"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/objects/media-submission-edge",children:(0,a.jsx)(s.code,{children:"MediaSubmissionEdge"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/objects/page",children:(0,a.jsx)(s.code,{children:"Page"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/objects/revision-history",children:(0,a.jsx)(s.code,{children:"RevisionHistory"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/objects/studio-connection",children:(0,a.jsx)(s.code,{children:"StudioConnection"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/objects/studio-edge",children:(0,a.jsx)(s.code,{children:"StudioEdge"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/objects/studio-stats",children:(0,a.jsx)(s.code,{children:"StudioStats"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(r,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/objects/user-studio-statistic",children:(0,a.jsx)(s.code,{children:"UserStudioStatistic"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},28453:(e,s,d)=>{d.d(s,{R:()=>i,x:()=>o});var a=d(96540);const t={},n=a.createContext(t);function i(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);