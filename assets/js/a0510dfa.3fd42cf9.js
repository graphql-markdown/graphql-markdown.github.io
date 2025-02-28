"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[1637],{56963:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>p,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>r,default:()=>j,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var a=t(74848),n=t(28453),d=t(96540);const i={id:"update-user",title:"UpdateUser"},r=void 0,l={id:"operations/mutations/update-user",title:"UpdateUser",description:"No description",source:"@site/examples/default/operations/mutations/update-user.mdx",sourceDirName:"operations/mutations",slug:"/operations/mutations/update-user",permalink:"/examples/default/operations/mutations/update-user",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"update-user",title:"UpdateUser"},sidebar:"defaultSidebar",previous:{title:"UpdateMediaListEntries",permalink:"/examples/default/operations/mutations/update-media-list-entries"},next:{title:"ActivityReply",permalink:"/examples/default/operations/queries/activity-reply"}},o={},c=()=>{const e={span:"span",...(0,n.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const s={a:"a",...(0,n.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const s={span:"span",...(0,n.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:s,children:t,startOpen:i=!1})=>{const r={details:"details",summary:"summary",...(0,n.R)()},[l,o]=(0,d.useState)(i);return(0,a.jsxs)(r.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(r.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:l?e:s}),l&&t]})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>UpdateUser.<b>about</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"updateuseraboutstring-",level:4},{value:'<code>UpdateUser.<b>titleLanguage</b></code><Bullet></Bullet><code>UserTitleLanguage</code> <Badge class="badge badge--secondary"></Badge>',id:"updateusertitlelanguageusertitlelanguage-",level:4},{value:'<code>UpdateUser.<b>displayAdultContent</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"updateuserdisplayadultcontentboolean-",level:4},{value:'<code>UpdateUser.<b>airingNotifications</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"updateuserairingnotificationsboolean-",level:4},{value:'<code>UpdateUser.<b>scoreFormat</b></code><Bullet></Bullet><code>ScoreFormat</code> <Badge class="badge badge--secondary"></Badge>',id:"updateuserscoreformatscoreformat-",level:4},{value:'<code>UpdateUser.<b>rowOrder</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"updateuserroworderstring-",level:4},{value:'<code>UpdateUser.<b>profileColor</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"updateuserprofilecolorstring-",level:4},{value:'<code>UpdateUser.<b>donatorBadge</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"updateuserdonatorbadgestring-",level:4},{value:'<code>UpdateUser.<b>notificationOptions</b></code><Bullet></Bullet><code>[NotificationOptionInput]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updateusernotificationoptionsnotificationoptioninput--",level:4},{value:'<code>UpdateUser.<b>timezone</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"updateusertimezonestring-",level:4},{value:'<code>UpdateUser.<b>activityMergeTime</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"updateuseractivitymergetimeint-",level:4},{value:'<code>UpdateUser.<b>animeListOptions</b></code><Bullet></Bullet><code>MediaListOptionsInput</code> <Badge class="badge badge--secondary"></Badge>',id:"updateuseranimelistoptionsmedialistoptionsinput-",level:4},{value:'<code>UpdateUser.<b>mangaListOptions</b></code><Bullet></Bullet><code>MediaListOptionsInput</code> <Badge class="badge badge--secondary"></Badge>',id:"updateusermangalistoptionsmedialistoptionsinput-",level:4},{value:'<code>UpdateUser.<b>staffNameLanguage</b></code><Bullet></Bullet><code>UserStaffNameLanguage</code> <Badge class="badge badge--secondary"></Badge>',id:"updateuserstaffnamelanguageuserstaffnamelanguage-",level:4},{value:'<code>UpdateUser.<b>restrictMessagesToFollowing</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"updateuserrestrictmessagestofollowingboolean-",level:4},{value:'<code>UpdateUser.<b>disabledListActivity</b></code><Bullet></Bullet><code>[ListActivityOptionInput]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updateuserdisabledlistactivitylistactivityoptioninput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>User</code> <Badge class="badge badge--secondary"></Badge>',id:"user-",level:4}];function x(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Head:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t,{children:[(0,a.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,a.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,a.jsx)(s.p,{children:"No description"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"UpdateUser(\n  about: String\n  titleLanguage: UserTitleLanguage\n  displayAdultContent: Boolean\n  airingNotifications: Boolean\n  scoreFormat: ScoreFormat\n  rowOrder: String\n  profileColor: String\n  donatorBadge: String\n  notificationOptions: [NotificationOptionInput]\n  timezone: String\n  activityMergeTime: Int\n  animeListOptions: MediaListOptionsInput\n  mangaListOptions: MediaListOptionsInput\n  staffNameLanguage: UserStaffNameLanguage\n  restrictMessagesToFollowing: Boolean\n  disabledListActivity: [ListActivityOptionInput]\n): User\n"})}),"\n",(0,a.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(s.h4,{id:"updateuseraboutstring-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateUser.",(0,a.jsx)("b",{children:"about"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/string",children:(0,a.jsx)(s.code,{children:"String"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.p,{children:"User's about/bio text"}),"\n",(0,a.jsxs)(s.h4,{id:"updateusertitlelanguageusertitlelanguage-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateUser.",(0,a.jsx)("b",{children:"titleLanguage"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/enums/user-title-language",children:(0,a.jsx)(s.code,{children:"UserTitleLanguage"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(s.p,{children:"User's title language"}),"\n",(0,a.jsxs)(s.h4,{id:"updateuserdisplayadultcontentboolean-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateUser.",(0,a.jsx)("b",{children:"displayAdultContent"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,a.jsx)(s.code,{children:"Boolean"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.p,{children:"If the user should see media marked as adult-only"}),"\n",(0,a.jsxs)(s.h4,{id:"updateuserairingnotificationsboolean-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateUser.",(0,a.jsx)("b",{children:"airingNotifications"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,a.jsx)(s.code,{children:"Boolean"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.p,{children:"If the user should get notifications when a show they are watching aires"}),"\n",(0,a.jsxs)(s.h4,{id:"updateuserscoreformatscoreformat-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateUser.",(0,a.jsx)("b",{children:"scoreFormat"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/enums/score-format",children:(0,a.jsx)(s.code,{children:"ScoreFormat"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(s.p,{children:"The user's list scoring system"}),"\n",(0,a.jsxs)(s.h4,{id:"updateuserroworderstring-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateUser.",(0,a.jsx)("b",{children:"rowOrder"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/string",children:(0,a.jsx)(s.code,{children:"String"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.p,{children:"The user's default list order"}),"\n",(0,a.jsxs)(s.h4,{id:"updateuserprofilecolorstring-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateUser.",(0,a.jsx)("b",{children:"profileColor"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/string",children:(0,a.jsx)(s.code,{children:"String"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.p,{children:"Profile highlight color"}),"\n",(0,a.jsxs)(s.h4,{id:"updateuserdonatorbadgestring-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateUser.",(0,a.jsx)("b",{children:"donatorBadge"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/string",children:(0,a.jsx)(s.code,{children:"String"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.p,{children:"Profile highlight color"}),"\n",(0,a.jsxs)(s.h4,{id:"updateusernotificationoptionsnotificationoptioninput--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateUser.",(0,a.jsx)("b",{children:"notificationOptions"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/inputs/notification-option-input",children:(0,a.jsx)(s.code,{children:"[NotificationOptionInput]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsx)(s.p,{children:"Notification options"}),"\n",(0,a.jsxs)(s.h4,{id:"updateusertimezonestring-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateUser.",(0,a.jsx)("b",{children:"timezone"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/string",children:(0,a.jsx)(s.code,{children:"String"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.p,{children:["Timezone offset format: -?HH",":MM"]}),"\n",(0,a.jsxs)(s.h4,{id:"updateuseractivitymergetimeint-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateUser.",(0,a.jsx)("b",{children:"activityMergeTime"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/int",children:(0,a.jsx)(s.code,{children:"Int"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.p,{children:"Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always."}),"\n",(0,a.jsxs)(s.h4,{id:"updateuseranimelistoptionsmedialistoptionsinput-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateUser.",(0,a.jsx)("b",{children:"animeListOptions"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/inputs/media-list-options-input",children:(0,a.jsx)(s.code,{children:"MediaListOptionsInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsx)(s.p,{children:"The user's anime list options"}),"\n",(0,a.jsxs)(s.h4,{id:"updateusermangalistoptionsmedialistoptionsinput-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateUser.",(0,a.jsx)("b",{children:"mangaListOptions"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/inputs/media-list-options-input",children:(0,a.jsx)(s.code,{children:"MediaListOptionsInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsx)(s.p,{children:"The user's anime list options"}),"\n",(0,a.jsxs)(s.h4,{id:"updateuserstaffnamelanguageuserstaffnamelanguage-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateUser.",(0,a.jsx)("b",{children:"staffNameLanguage"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/enums/user-staff-name-language",children:(0,a.jsx)(s.code,{children:"UserStaffNameLanguage"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(s.p,{children:"The language the user wants to see staff and character names in"}),"\n",(0,a.jsxs)(s.h4,{id:"updateuserrestrictmessagestofollowingboolean-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateUser.",(0,a.jsx)("b",{children:"restrictMessagesToFollowing"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/scalars/boolean",children:(0,a.jsx)(s.code,{children:"Boolean"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.p,{children:"Only allow messages from other users the user follows"}),"\n",(0,a.jsxs)(s.h4,{id:"updateuserdisabledlistactivitylistactivityoptioninput--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateUser.",(0,a.jsx)("b",{children:"disabledListActivity"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(s.a,{href:"/examples/default/types/inputs/list-activity-option-input",children:(0,a.jsx)(s.code,{children:"[ListActivityOptionInput]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,a.jsxs)(s.h4,{id:"user-",children:[(0,a.jsx)(s.a,{href:"/examples/default/types/objects/user",children:(0,a.jsx)(s.code,{children:"User"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(s.p,{children:"A user"})]})}function j(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>r});var a=t(96540);const n={},d=a.createContext(n);function i(e){const s=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(d.Provider,{value:s},e.children)}}}]);