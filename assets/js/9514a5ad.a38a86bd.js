"use strict";(self.webpackChunkgraphql_markdown_website=self.webpackChunkgraphql_markdown_website||[]).push([[2318],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=o.createContext({}),d=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,g=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return a?o.createElement(g,r(r({ref:t},c),{},{components:a})):o.createElement(g,r({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var d=2;d<l;d++)r[d]=a[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8778:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=a(7462),n=a(7294),l=a(3905);const r={id:"update-user",title:"UpdateUser",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,i={unversionedId:"mutations/update-user",id:"mutations/update-user",title:"UpdateUser",description:"No description",source:"@site/examples/schema/mutations/update-user.mdx",sourceDirName:"mutations",slug:"/mutations/update-user",permalink:"/schema/mutations/update-user",draft:!1,tags:[],version:"current",frontMatter:{id:"update-user",title:"UpdateUser",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},c=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateUser.<b>about</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateuserbaboutbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateUser.<b>titleLanguage</b></code><Bullet /><code>UserTitleLanguage</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-updateuserbtitlelanguagebcodeusertitlelanguage-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateUser.<b>displayAdultContent</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateuserbdisplayadultcontentbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateUser.<b>airingNotifications</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateuserbairingnotificationsbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateUser.<b>scoreFormat</b></code><Bullet /><code>ScoreFormat</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-updateuserbscoreformatbcodescoreformat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateUser.<b>rowOrder</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateuserbroworderbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateUser.<b>profileColor</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateuserbprofilecolorbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateUser.<b>donatorBadge</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateuserbdonatorbadgebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateUser.<b>notificationOptions</b></code><Bullet /><code>[NotificationOptionInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updateuserbnotificationoptionsbcodenotificationoptioninput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateUser.<b>timezone</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateuserbtimezonebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateUser.<b>activityMergeTime</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateuserbactivitymergetimebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateUser.<b>animeListOptions</b></code><Bullet /><code>MediaListOptionsInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updateuserbanimelistoptionsbcodemedialistoptionsinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateUser.<b>mangaListOptions</b></code><Bullet /><code>MediaListOptionsInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updateuserbmangalistoptionsbcodemedialistoptionsinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateUser.<b>staffNameLanguage</b></code><Bullet /><code>UserStaffNameLanguage</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-updateuserbstaffnamelanguagebcodeuserstaffnamelanguage-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateUser.<b>restrictMessagesToFollowing</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateuserbrestrictmessagestofollowingbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateUser.<b>disabledListActivity</b></code><Bullet /><code>[ListActivityOptionInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updateuserbdisabledlistactivitybcodelistactivityoptioninput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>User</code> <Badge class="secondary" text="object"/>',id:"user-",level:4}],u=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),g={toc:c,Bullet:u,SpecifiedBy:p,Badge:m};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,o.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"UpdateUser(\n  about: String\n  titleLanguage: UserTitleLanguage\n  displayAdultContent: Boolean\n  airingNotifications: Boolean\n  scoreFormat: ScoreFormat\n  rowOrder: String\n  profileColor: String\n  donatorBadge: String\n  notificationOptions: [NotificationOptionInput]\n  timezone: String\n  activityMergeTime: Int\n  animeListOptions: MediaListOptionsInput\n  mangaListOptions: MediaListOptionsInput\n  staffNameLanguage: UserStaffNameLanguage\n  restrictMessagesToFollowing: Boolean\n  disabledListActivity: [ListActivityOptionInput]\n): User\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updateuserbaboutbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateUser.",(0,l.kt)("b",null,"about"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"User's about/bio text")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updateuserbtitlelanguagebcodeusertitlelanguage-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateUser.",(0,l.kt)("b",null,"titleLanguage"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/enums/user-title-language"},(0,l.kt)("inlineCode",{parentName:"a"},"UserTitleLanguage"))," ",(0,l.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"User's title language")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updateuserbdisplayadultcontentbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateUser.",(0,l.kt)("b",null,"displayAdultContent"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the user should see media marked as adult-only")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updateuserbairingnotificationsbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateUser.",(0,l.kt)("b",null,"airingNotifications"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the user should get notifications when a show they are watching aires")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updateuserbscoreformatbcodescoreformat-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateUser.",(0,l.kt)("b",null,"scoreFormat"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/enums/score-format"},(0,l.kt)("inlineCode",{parentName:"a"},"ScoreFormat"))," ",(0,l.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The user's list scoring system")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updateuserbroworderbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateUser.",(0,l.kt)("b",null,"rowOrder"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The user's default list order")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updateuserbprofilecolorbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateUser.",(0,l.kt)("b",null,"profileColor"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Profile highlight color")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updateuserbdonatorbadgebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateUser.",(0,l.kt)("b",null,"donatorBadge"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Profile highlight color")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updateuserbnotificationoptionsbcodenotificationoptioninput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateUser.",(0,l.kt)("b",null,"notificationOptions"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/inputs/notification-option-input"},(0,l.kt)("inlineCode",{parentName:"a"},"[NotificationOptionInput]"))," ",(0,l.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Notification options")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updateuserbtimezonebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateUser.",(0,l.kt)("b",null,"timezone"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Timezone offset format: -?HH:MM")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updateuserbactivitymergetimebcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateUser.",(0,l.kt)("b",null,"activityMergeTime"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updateuserbanimelistoptionsbcodemedialistoptionsinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateUser.",(0,l.kt)("b",null,"animeListOptions"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/inputs/media-list-options-input"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaListOptionsInput"))," ",(0,l.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The user's anime list options")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updateuserbmangalistoptionsbcodemedialistoptionsinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateUser.",(0,l.kt)("b",null,"mangaListOptions"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/inputs/media-list-options-input"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaListOptionsInput"))," ",(0,l.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The user's anime list options")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updateuserbstaffnamelanguagebcodeuserstaffnamelanguage-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateUser.",(0,l.kt)("b",null,"staffNameLanguage"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/enums/user-staff-name-language"},(0,l.kt)("inlineCode",{parentName:"a"},"UserStaffNameLanguage"))," ",(0,l.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The language the user wants to see staff and character names in")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updateuserbrestrictmessagestofollowingbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateUser.",(0,l.kt)("b",null,"restrictMessagesToFollowing"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Only allow messages from other users the user follows")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-updateuserbdisabledlistactivitybcodelistactivityoptioninput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UpdateUser.",(0,l.kt)("b",null,"disabledListActivity"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/inputs/list-activity-option-input"},(0,l.kt)("inlineCode",{parentName:"a"},"[ListActivityOptionInput]"))," ",(0,l.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"user-"},(0,l.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A user")))}k.isMDXComponent=!0}}]);