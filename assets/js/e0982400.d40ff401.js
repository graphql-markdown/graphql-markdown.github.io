"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[5797],{69713:(e,n,r)=>{r.r(n),r.d(n,{Badge:()=>h,Bullet:()=>d,Details:()=>p,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var t=r(74848),o=r(28453),s=r(96540);const a={pagination_next:null,pagination_prev:null,id:"score-format",title:"ScoreFormat"},c=void 0,l={id:"types/enums/score-format",title:"ScoreFormat",description:"Media list scoring type",source:"@site/examples/default/types/enums/score-format.mdx",sourceDirName:"types/enums",slug:"/types/enums/score-format",permalink:"/examples/default/types/enums/score-format",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"score-format",title:"ScoreFormat"},sidebar:"schemaSidebar"},i={},d=()=>{const e={span:"span",...(0,o.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const n={a:"a",...(0,o.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,o.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:n,children:r,startOpen:a=!1})=>{const c={details:"details",summary:"summary",...(0,o.R)()},[l,i]=(0,s.useState)(a);return(0,t.jsxs)(c.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(c.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&r]})},u=[{value:"Values",id:"values",level:3},{value:"<code>ScoreFormat.<b>POINT_100</b></code>",id:"scoreformatpoint_100",level:4},{value:"<code>ScoreFormat.<b>POINT_10_DECIMAL</b></code>",id:"scoreformatpoint_10_decimal",level:4},{value:"<code>ScoreFormat.<b>POINT_10</b></code>",id:"scoreformatpoint_10",level:4},{value:"<code>ScoreFormat.<b>POINT_5</b></code>",id:"scoreformatpoint_5",level:4},{value:"<code>ScoreFormat.<b>POINT_3</b></code>",id:"scoreformatpoint_3",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r,{children:[(0,t.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,t.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,t.jsx)(n.p,{children:"Media list scoring type"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"enum ScoreFormat {\n  POINT_100\n  POINT_10_DECIMAL\n  POINT_10\n  POINT_5\n  POINT_3\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,t.jsx)(n.h4,{id:"scoreformatpoint_100",children:(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ScoreFormat.",(0,t.jsx)("b",{children:"POINT_100"})]})})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"An integer from 0-100"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"scoreformatpoint_10_decimal",children:(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ScoreFormat.",(0,t.jsx)("b",{children:"POINT_10_DECIMAL"})]})})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"A float from 0-10 with 1 decimal place"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"scoreformatpoint_10",children:(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ScoreFormat.",(0,t.jsx)("b",{children:"POINT_10"})]})})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"An integer from 0-10"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"scoreformatpoint_5",children:(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ScoreFormat.",(0,t.jsx)("b",{children:"POINT_5"})]})})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"An integer from 0-5. Should be represented in Stars"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"scoreformatpoint_3",children:(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ScoreFormat.",(0,t.jsx)("b",{children:"POINT_3"})]})})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"An integer from 0-3. Should be represented in Smileys. 0 => No Score, 1 => :(, 2 => :|, 3 => :)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/examples/default/types/objects/media-list-options",children:(0,t.jsx)(n.code,{children:"MediaListOptions"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(d,{}),(0,t.jsx)(n.a,{href:"/examples/default/api/mutations/update-user",children:(0,t.jsx)(n.code,{children:"UpdateUser"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"mutation"})]})]})}function f(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var t=r(96540);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);