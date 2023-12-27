"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6469],{3807:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>u,Bullet:()=>l,Details:()=>g,SpecifiedBy:()=>h,assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>d,metadata:()=>o,toc:()=>x});var n=s(5893),t=s(1151),r=s(7294);const d={pagination_next:null,pagination_prev:null,id:"favourites",title:"Favourites"},c=void 0,o={id:"objects/favourites",title:"Favourites",description:"User's favourite anime, manga, characters, staff & studios",source:"@site/examples/default/objects/favourites.mdx",sourceDirName:"objects",slug:"/objects/favourites",permalink:"/examples/default/objects/favourites",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"favourites",title:"Favourites"},sidebar:"schemaSidebar"},i={},l=()=>{const e={span:"span",...(0,t.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const a={a:"a",...(0,t.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const a={span:"span",...(0,t.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.span,{className:e.class,children:e.text})})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>Favourites.<b>anime</b></code><Bullet></Bullet><code>MediaConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritesanimemediaconnection-",level:4},{value:'<code>Favourites.anime.<b>page</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritesanimepageint-",level:5},{value:'<code>Favourites.anime.<b>perPage</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritesanimeperpageint-",level:5},{value:'<code>Favourites.<b>manga</b></code><Bullet></Bullet><code>MediaConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritesmangamediaconnection-",level:4},{value:'<code>Favourites.manga.<b>page</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritesmangapageint-",level:5},{value:'<code>Favourites.manga.<b>perPage</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritesmangaperpageint-",level:5},{value:'<code>Favourites.<b>characters</b></code><Bullet></Bullet><code>CharacterConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritescharacterscharacterconnection-",level:4},{value:'<code>Favourites.characters.<b>page</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritescharacterspageint-",level:5},{value:'<code>Favourites.characters.<b>perPage</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritescharactersperpageint-",level:5},{value:'<code>Favourites.<b>staff</b></code><Bullet></Bullet><code>StaffConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritesstaffstaffconnection-",level:4},{value:'<code>Favourites.staff.<b>page</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritesstaffpageint-",level:5},{value:'<code>Favourites.staff.<b>perPage</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritesstaffperpageint-",level:5},{value:'<code>Favourites.<b>studios</b></code><Bullet></Bullet><code>StudioConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritesstudiosstudioconnection-",level:4},{value:'<code>Favourites.studios.<b>page</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritesstudiospageint-",level:5},{value:'<code>Favourites.studios.<b>perPage</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"favouritesstudiosperpageint-",level:5},{value:"Returned by",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}],g=({dataOpen:e,dataClose:a,children:s,startOpen:d=!1})=>{const c={details:"details",summary:"summary",...(0,t.a)()},[o,i]=(0,r.useState)(d);return(0,n.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(c.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:a}),o&&s]})};function j(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Head:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s,{children:[(0,n.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,n.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n","\n",(0,n.jsx)(a.p,{children:"User's favourite anime, manga, characters, staff & studios"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"type Favourites {\n  anime(page: Int, perPage: Int): MediaConnection\n  manga(page: Int, perPage: Int): MediaConnection\n  characters(page: Int, perPage: Int): CharacterConnection\n  staff(page: Int, perPage: Int): StaffConnection\n  studios(page: Int, perPage: Int): StudioConnection\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(a.h4,{id:"favouritesanimemediaconnection-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.",(0,n.jsx)("b",{children:"anime"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/examples/default/objects/media-connection",children:(0,n.jsx)(a.code,{children:"MediaConnection"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Favourite anime"}),"\n",(0,n.jsxs)(a.h5,{id:"favouritesanimepageint-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.anime.",(0,n.jsx)("b",{children:"page"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/examples/default/scalars/int",children:(0,n.jsx)(a.code,{children:"Int"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(a.p,{children:"The page number"}),"\n"]}),"\n",(0,n.jsxs)(a.h5,{id:"favouritesanimeperpageint-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.anime.",(0,n.jsx)("b",{children:"perPage"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/examples/default/scalars/int",children:(0,n.jsx)(a.code,{children:"Int"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"The amount of entries per page, max 25"}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"favouritesmangamediaconnection-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.",(0,n.jsx)("b",{children:"manga"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/examples/default/objects/media-connection",children:(0,n.jsx)(a.code,{children:"MediaConnection"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Favourite manga"}),"\n",(0,n.jsxs)(a.h5,{id:"favouritesmangapageint-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.manga.",(0,n.jsx)("b",{children:"page"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/examples/default/scalars/int",children:(0,n.jsx)(a.code,{children:"Int"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(a.p,{children:"The page number"}),"\n"]}),"\n",(0,n.jsxs)(a.h5,{id:"favouritesmangaperpageint-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.manga.",(0,n.jsx)("b",{children:"perPage"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/examples/default/scalars/int",children:(0,n.jsx)(a.code,{children:"Int"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"The amount of entries per page, max 25"}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"favouritescharacterscharacterconnection-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.",(0,n.jsx)("b",{children:"characters"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/examples/default/objects/character-connection",children:(0,n.jsx)(a.code,{children:"CharacterConnection"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Favourite characters"}),"\n",(0,n.jsxs)(a.h5,{id:"favouritescharacterspageint-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.characters.",(0,n.jsx)("b",{children:"page"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/examples/default/scalars/int",children:(0,n.jsx)(a.code,{children:"Int"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(a.p,{children:"The page number"}),"\n"]}),"\n",(0,n.jsxs)(a.h5,{id:"favouritescharactersperpageint-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.characters.",(0,n.jsx)("b",{children:"perPage"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/examples/default/scalars/int",children:(0,n.jsx)(a.code,{children:"Int"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"The amount of entries per page, max 25"}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"favouritesstaffstaffconnection-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.",(0,n.jsx)("b",{children:"staff"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/examples/default/objects/staff-connection",children:(0,n.jsx)(a.code,{children:"StaffConnection"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Favourite staff"}),"\n",(0,n.jsxs)(a.h5,{id:"favouritesstaffpageint-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.staff.",(0,n.jsx)("b",{children:"page"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/examples/default/scalars/int",children:(0,n.jsx)(a.code,{children:"Int"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(a.p,{children:"The page number"}),"\n"]}),"\n",(0,n.jsxs)(a.h5,{id:"favouritesstaffperpageint-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.staff.",(0,n.jsx)("b",{children:"perPage"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/examples/default/scalars/int",children:(0,n.jsx)(a.code,{children:"Int"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"The amount of entries per page, max 25"}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"favouritesstudiosstudioconnection-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.",(0,n.jsx)("b",{children:"studios"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/examples/default/objects/studio-connection",children:(0,n.jsx)(a.code,{children:"StudioConnection"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Favourite studios"}),"\n",(0,n.jsxs)(a.h5,{id:"favouritesstudiospageint-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.studios.",(0,n.jsx)("b",{children:"page"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/examples/default/scalars/int",children:(0,n.jsx)(a.code,{children:"Int"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(a.p,{children:"The page number"}),"\n"]}),"\n",(0,n.jsxs)(a.h5,{id:"favouritesstudiosperpageint-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Favourites.studios.",(0,n.jsx)("b",{children:"perPage"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/examples/default/scalars/int",children:(0,n.jsx)(a.code,{children:"Int"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"The amount of entries per page, max 25"}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/examples/default/mutations/toggle-favourite",children:(0,n.jsx)(a.code,{children:"ToggleFavourite"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"mutation"}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/examples/default/mutations/update-favourite-order",children:(0,n.jsx)(a.code,{children:"UpdateFavouriteOrder"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"mutation"})]}),"\n",(0,n.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/examples/default/objects/user",children:(0,n.jsx)(a.code,{children:"User"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},1151:(e,a,s)=>{s.d(a,{Z:()=>c,a:()=>d});var n=s(7294);const t={},r=n.createContext(t);function d(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);