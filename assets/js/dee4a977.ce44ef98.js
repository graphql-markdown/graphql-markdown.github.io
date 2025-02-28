"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3505],{47409:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>u,Bullet:()=>l,Details:()=>x,SpecifiedBy:()=>h,assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>g});var t=s(74848),n=s(28453),d=s(96540);const r={id:"favourites",title:"Favourites"},c=void 0,o={id:"types/objects/favourites",title:"Favourites",description:"User's favourite anime, manga, characters, staff & studios",source:"@site/examples/default/types/objects/favourites.mdx",sourceDirName:"types/objects",slug:"/types/objects/favourites",permalink:"/examples/default/types/objects/favourites",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"favourites",title:"Favourites"},sidebar:"defaultSidebar",previous:{title:"Deleted",permalink:"/examples/default/types/objects/deleted"},next:{title:"FollowingNotification",permalink:"/examples/default/types/objects/following-notification"}},i={},l=()=>{const e={span:"span",...(0,n.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const a={a:"a",...(0,n.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const a={span:"span",...(0,n.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:a,children:s,startOpen:r=!1})=>{const c={details:"details",summary:"summary",...(0,n.R)()},[o,i]=(0,d.useState)(r);return(0,t.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(c.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:a}),o&&s]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>Favourites.<b>anime</b></code><Bullet></Bullet><code>MediaConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritesanimemediaconnection-",level:4},{value:'<code>Favourites.anime.<b>page</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritesanimepageint-",level:5},{value:'<code>Favourites.anime.<b>perPage</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritesanimeperpageint-",level:5},{value:'<code>Favourites.<b>manga</b></code><Bullet></Bullet><code>MediaConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritesmangamediaconnection-",level:4},{value:'<code>Favourites.manga.<b>page</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritesmangapageint-",level:5},{value:'<code>Favourites.manga.<b>perPage</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritesmangaperpageint-",level:5},{value:'<code>Favourites.<b>characters</b></code><Bullet></Bullet><code>CharacterConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritescharacterscharacterconnection-",level:4},{value:'<code>Favourites.characters.<b>page</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritescharacterspageint-",level:5},{value:'<code>Favourites.characters.<b>perPage</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritescharactersperpageint-",level:5},{value:'<code>Favourites.<b>staff</b></code><Bullet></Bullet><code>StaffConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritesstaffstaffconnection-",level:4},{value:'<code>Favourites.staff.<b>page</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritesstaffpageint-",level:5},{value:'<code>Favourites.staff.<b>perPage</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritesstaffperpageint-",level:5},{value:'<code>Favourites.<b>studios</b></code><Bullet></Bullet><code>StudioConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritesstudiosstudioconnection-",level:4},{value:'<code>Favourites.studios.<b>page</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritesstudiospageint-",level:5},{value:'<code>Favourites.studios.<b>perPage</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritesstudiosperpageint-",level:5},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}];function f(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Head:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s,{children:[(0,t.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,t.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,t.jsx)(a.p,{children:"User's favourite anime, manga, characters, staff & studios"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-graphql",children:"type Favourites {\n  anime(page: Int, perPage: Int): MediaConnection\n  manga(page: Int, perPage: Int): MediaConnection\n  characters(page: Int, perPage: Int): CharacterConnection\n  staff(page: Int, perPage: Int): StaffConnection\n  studios(page: Int, perPage: Int): StudioConnection\n}\n"})}),"\n",(0,t.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(a.h4,{id:"favouritesanimemediaconnection-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.",(0,t.jsx)("b",{children:"anime"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/examples/default/types/objects/media-connection",children:(0,t.jsx)(a.code,{children:"MediaConnection"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Favourite anime"}),"\n",(0,t.jsxs)(a.h5,{id:"favouritesanimepageint-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.anime.",(0,t.jsx)("b",{children:"page"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(a.code,{children:"Int"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"The page number"}),"\n",(0,t.jsxs)(a.h5,{id:"favouritesanimeperpageint-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.anime.",(0,t.jsx)("b",{children:"perPage"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(a.code,{children:"Int"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"The amount of entries per page, max 25"}),"\n",(0,t.jsxs)(a.h4,{id:"favouritesmangamediaconnection-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.",(0,t.jsx)("b",{children:"manga"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/examples/default/types/objects/media-connection",children:(0,t.jsx)(a.code,{children:"MediaConnection"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Favourite manga"}),"\n",(0,t.jsxs)(a.h5,{id:"favouritesmangapageint-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.manga.",(0,t.jsx)("b",{children:"page"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(a.code,{children:"Int"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"The page number"}),"\n",(0,t.jsxs)(a.h5,{id:"favouritesmangaperpageint-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.manga.",(0,t.jsx)("b",{children:"perPage"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(a.code,{children:"Int"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"The amount of entries per page, max 25"}),"\n",(0,t.jsxs)(a.h4,{id:"favouritescharacterscharacterconnection-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.",(0,t.jsx)("b",{children:"characters"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/examples/default/types/objects/character-connection",children:(0,t.jsx)(a.code,{children:"CharacterConnection"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Favourite characters"}),"\n",(0,t.jsxs)(a.h5,{id:"favouritescharacterspageint-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.characters.",(0,t.jsx)("b",{children:"page"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(a.code,{children:"Int"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"The page number"}),"\n",(0,t.jsxs)(a.h5,{id:"favouritescharactersperpageint-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.characters.",(0,t.jsx)("b",{children:"perPage"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(a.code,{children:"Int"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"The amount of entries per page, max 25"}),"\n",(0,t.jsxs)(a.h4,{id:"favouritesstaffstaffconnection-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.",(0,t.jsx)("b",{children:"staff"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/examples/default/types/objects/staff-connection",children:(0,t.jsx)(a.code,{children:"StaffConnection"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Favourite staff"}),"\n",(0,t.jsxs)(a.h5,{id:"favouritesstaffpageint-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.staff.",(0,t.jsx)("b",{children:"page"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(a.code,{children:"Int"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"The page number"}),"\n",(0,t.jsxs)(a.h5,{id:"favouritesstaffperpageint-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.staff.",(0,t.jsx)("b",{children:"perPage"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(a.code,{children:"Int"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"The amount of entries per page, max 25"}),"\n",(0,t.jsxs)(a.h4,{id:"favouritesstudiosstudioconnection-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.",(0,t.jsx)("b",{children:"studios"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/examples/default/types/objects/studio-connection",children:(0,t.jsx)(a.code,{children:"StudioConnection"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Favourite studios"}),"\n",(0,t.jsxs)(a.h5,{id:"favouritesstudiospageint-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.studios.",(0,t.jsx)("b",{children:"page"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(a.code,{children:"Int"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"The page number"}),"\n",(0,t.jsxs)(a.h5,{id:"favouritesstudiosperpageint-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.studios.",(0,t.jsx)("b",{children:"perPage"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,t.jsx)(a.code,{children:"Int"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"The amount of entries per page, max 25"}),"\n",(0,t.jsx)(a.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/examples/default/operations/mutations/toggle-favourite",children:(0,t.jsx)(a.code,{children:"ToggleFavourite"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"mutation"}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/examples/default/operations/mutations/update-favourite-order",children:(0,t.jsx)(a.code,{children:"UpdateFavouriteOrder"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"mutation"})]}),"\n",(0,t.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/examples/default/types/objects/user",children:(0,t.jsx)(a.code,{children:"User"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},28453:(e,a,s)=>{s.d(a,{R:()=>r,x:()=>c});var t=s(96540);const n={},d=t.createContext(n);function r(e){const a=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(d.Provider,{value:a},e.children)}}}]);