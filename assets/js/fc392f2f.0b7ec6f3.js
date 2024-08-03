"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[8910],{68233:(e,i,s)=>{s.r(i),s.d(i,{Badge:()=>_,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>h,assets:()=>a,contentTitle:()=>n,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>S});var t=s(74848),d=s(28453),r=s(96540);const l={pagination_next:null,pagination_prev:null,id:"media-list-sort",title:"MediaListSort"},n=void 0,o={id:"types/enums/media-list-sort",title:"MediaListSort",description:"Media list sort enums",source:"@site/examples/default/types/enums/media-list-sort.mdx",sourceDirName:"types/enums",slug:"/types/enums/media-list-sort",permalink:"/examples/default/types/enums/media-list-sort",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"media-list-sort",title:"MediaListSort"},sidebar:"defaultSidebar"},a={},c=()=>{const e={span:"span",...(0,d.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const i={a:"a",...(0,d.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(i.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},_=e=>{const i={span:"span",...(0,d.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(i.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:i,children:s,startOpen:l=!1})=>{const n={details:"details",summary:"summary",...(0,d.R)()},[o,a]=(0,r.useState)(l);return(0,t.jsxs)(n.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(n.summary,{onClick:e=>{e.preventDefault(),a((e=>!e))},style:{listStyle:"none"},children:o?e:i}),o&&s]})},S=[{value:"Values",id:"values",level:3},{value:"<code>MediaListSort.<b>MEDIA_ID</b></code>",id:"medialistsortmedia_id",level:4},{value:"<code>MediaListSort.<b>MEDIA_ID_DESC</b></code>",id:"medialistsortmedia_id_desc",level:4},{value:"<code>MediaListSort.<b>SCORE</b></code>",id:"medialistsortscore",level:4},{value:"<code>MediaListSort.<b>SCORE_DESC</b></code>",id:"medialistsortscore_desc",level:4},{value:"<code>MediaListSort.<b>STATUS</b></code>",id:"medialistsortstatus",level:4},{value:"<code>MediaListSort.<b>STATUS_DESC</b></code>",id:"medialistsortstatus_desc",level:4},{value:"<code>MediaListSort.<b>PROGRESS</b></code>",id:"medialistsortprogress",level:4},{value:"<code>MediaListSort.<b>PROGRESS_DESC</b></code>",id:"medialistsortprogress_desc",level:4},{value:"<code>MediaListSort.<b>PROGRESS_VOLUMES</b></code>",id:"medialistsortprogress_volumes",level:4},{value:"<code>MediaListSort.<b>PROGRESS_VOLUMES_DESC</b></code>",id:"medialistsortprogress_volumes_desc",level:4},{value:"<code>MediaListSort.<b>REPEAT</b></code>",id:"medialistsortrepeat",level:4},{value:"<code>MediaListSort.<b>REPEAT_DESC</b></code>",id:"medialistsortrepeat_desc",level:4},{value:"<code>MediaListSort.<b>PRIORITY</b></code>",id:"medialistsortpriority",level:4},{value:"<code>MediaListSort.<b>PRIORITY_DESC</b></code>",id:"medialistsortpriority_desc",level:4},{value:"<code>MediaListSort.<b>STARTED_ON</b></code>",id:"medialistsortstarted_on",level:4},{value:"<code>MediaListSort.<b>STARTED_ON_DESC</b></code>",id:"medialistsortstarted_on_desc",level:4},{value:"<code>MediaListSort.<b>FINISHED_ON</b></code>",id:"medialistsortfinished_on",level:4},{value:"<code>MediaListSort.<b>FINISHED_ON_DESC</b></code>",id:"medialistsortfinished_on_desc",level:4},{value:"<code>MediaListSort.<b>ADDED_TIME</b></code>",id:"medialistsortadded_time",level:4},{value:"<code>MediaListSort.<b>ADDED_TIME_DESC</b></code>",id:"medialistsortadded_time_desc",level:4},{value:"<code>MediaListSort.<b>UPDATED_TIME</b></code>",id:"medialistsortupdated_time",level:4},{value:"<code>MediaListSort.<b>UPDATED_TIME_DESC</b></code>",id:"medialistsortupdated_time_desc",level:4},{value:"<code>MediaListSort.<b>MEDIA_TITLE_ROMAJI</b></code>",id:"medialistsortmedia_title_romaji",level:4},{value:"<code>MediaListSort.<b>MEDIA_TITLE_ROMAJI_DESC</b></code>",id:"medialistsortmedia_title_romaji_desc",level:4},{value:"<code>MediaListSort.<b>MEDIA_TITLE_ENGLISH</b></code>",id:"medialistsortmedia_title_english",level:4},{value:"<code>MediaListSort.<b>MEDIA_TITLE_ENGLISH_DESC</b></code>",id:"medialistsortmedia_title_english_desc",level:4},{value:"<code>MediaListSort.<b>MEDIA_TITLE_NATIVE</b></code>",id:"medialistsortmedia_title_native",level:4},{value:"<code>MediaListSort.<b>MEDIA_TITLE_NATIVE_DESC</b></code>",id:"medialistsortmedia_title_native_desc",level:4},{value:"<code>MediaListSort.<b>MEDIA_POPULARITY</b></code>",id:"medialistsortmedia_popularity",level:4},{value:"<code>MediaListSort.<b>MEDIA_POPULARITY_DESC</b></code>",id:"medialistsortmedia_popularity_desc",level:4},{value:"Member Of",id:"member-of",level:3}];function E(e){const i={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components},{Head:s}=i;return s||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s,{children:[(0,t.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,t.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,t.jsx)(i.p,{children:"Media list sort enums"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-graphql",children:"enum MediaListSort {\n  MEDIA_ID\n  MEDIA_ID_DESC\n  SCORE\n  SCORE_DESC\n  STATUS\n  STATUS_DESC\n  PROGRESS\n  PROGRESS_DESC\n  PROGRESS_VOLUMES\n  PROGRESS_VOLUMES_DESC\n  REPEAT\n  REPEAT_DESC\n  PRIORITY\n  PRIORITY_DESC\n  STARTED_ON\n  STARTED_ON_DESC\n  FINISHED_ON\n  FINISHED_ON_DESC\n  ADDED_TIME\n  ADDED_TIME_DESC\n  UPDATED_TIME\n  UPDATED_TIME_DESC\n  MEDIA_TITLE_ROMAJI\n  MEDIA_TITLE_ROMAJI_DESC\n  MEDIA_TITLE_ENGLISH\n  MEDIA_TITLE_ENGLISH_DESC\n  MEDIA_TITLE_NATIVE\n  MEDIA_TITLE_NATIVE_DESC\n  MEDIA_POPULARITY\n  MEDIA_POPULARITY_DESC\n}\n"})}),"\n",(0,t.jsx)(i.h3,{id:"values",children:"Values"}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortmedia_id",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"MEDIA_ID"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortmedia_id_desc",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"MEDIA_ID_DESC"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortscore",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"SCORE"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortscore_desc",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"SCORE_DESC"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortstatus",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"STATUS"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortstatus_desc",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"STATUS_DESC"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortprogress",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"PROGRESS"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortprogress_desc",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"PROGRESS_DESC"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortprogress_volumes",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"PROGRESS_VOLUMES"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortprogress_volumes_desc",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"PROGRESS_VOLUMES_DESC"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortrepeat",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"REPEAT"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortrepeat_desc",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"REPEAT_DESC"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortpriority",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"PRIORITY"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortpriority_desc",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"PRIORITY_DESC"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortstarted_on",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"STARTED_ON"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortstarted_on_desc",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"STARTED_ON_DESC"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortfinished_on",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"FINISHED_ON"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortfinished_on_desc",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"FINISHED_ON_DESC"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortadded_time",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"ADDED_TIME"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortadded_time_desc",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"ADDED_TIME_DESC"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortupdated_time",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"UPDATED_TIME"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortupdated_time_desc",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"UPDATED_TIME_DESC"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortmedia_title_romaji",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"MEDIA_TITLE_ROMAJI"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortmedia_title_romaji_desc",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"MEDIA_TITLE_ROMAJI_DESC"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortmedia_title_english",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"MEDIA_TITLE_ENGLISH"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortmedia_title_english_desc",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"MEDIA_TITLE_ENGLISH_DESC"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortmedia_title_native",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"MEDIA_TITLE_NATIVE"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortmedia_title_native_desc",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"MEDIA_TITLE_NATIVE_DESC"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortmedia_popularity",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"MEDIA_POPULARITY"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"medialistsortmedia_popularity_desc",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaListSort.",(0,t.jsx)("b",{children:"MEDIA_POPULARITY_DESC"})]})})}),"\n",(0,t.jsx)(i.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"/examples/default/operations/queries/media-list",children:(0,t.jsx)(i.code,{children:"MediaList"})})," ",(0,t.jsx)(_,{class:"badge badge--secondary",text:"query"}),(0,t.jsx)(c,{}),(0,t.jsx)(i.a,{href:"/examples/default/operations/queries/media-list-collection",children:(0,t.jsx)(i.code,{children:"MediaListCollection"})})," ",(0,t.jsx)(_,{class:"badge badge--secondary",text:"query"})]})]})}function x(e={}){const{wrapper:i}={...(0,d.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(E,{...e})}):E(e)}},28453:(e,i,s)=>{s.d(i,{R:()=>l,x:()=>n});var t=s(96540);const d={},r=t.createContext(d);function l(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function n(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);