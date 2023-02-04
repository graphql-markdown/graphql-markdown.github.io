"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[5942],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>g});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(o),m=a,g=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return o?n.createElement(g,s(s({ref:t},d),{},{components:o})):n.createElement(g,s({ref:t},d))}));function g(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=o.length,s=new Array(l);s[0]=m;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[p]="string"==typeof e?e:a,s[1]=r;for(var c=2;c<l;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1749:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>r,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=o(7462),a=o(7294),l=o(3905);const s={id:"user-options",title:"UserOptions",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},r=void 0,i={unversionedId:"objects/user-options",id:"objects/user-options",title:"UserOptions",description:"A user's general options",source:"@site/examples/schema/objects/user-options.mdx",sourceDirName:"objects",slug:"/objects/user-options",permalink:"/schema/objects/user-options",draft:!1,tags:[],version:"current",frontMatter:{id:"user-options",title:"UserOptions",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UserOptions.<b>titleLanguage</b></code><Bullet /><code>UserTitleLanguage</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-useroptionsbtitlelanguagebcodeusertitlelanguage-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserOptions.<b>displayAdultContent</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-useroptionsbdisplayadultcontentbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserOptions.<b>airingNotifications</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-useroptionsbairingnotificationsbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserOptions.<b>profileColor</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-useroptionsbprofilecolorbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserOptions.<b>notificationOptions</b></code><Bullet /><code>[NotificationOption]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-useroptionsbnotificationoptionsbcodenotificationoption--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserOptions.<b>timezone</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-useroptionsbtimezonebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserOptions.<b>activityMergeTime</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-useroptionsbactivitymergetimebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserOptions.<b>staffNameLanguage</b></code><Bullet /><code>UserStaffNameLanguage</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-useroptionsbstaffnamelanguagebcodeuserstaffnamelanguage-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserOptions.<b>restrictMessagesToFollowing</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-useroptionsbrestrictmessagestofollowingbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserOptions.<b>disabledListActivity</b></code><Bullet /><code>[ListActivityOption]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-useroptionsbdisabledlistactivitybcodelistactivityoption--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:d,Bullet:p,SpecifiedBy:u,Badge:m};function f(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,n.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A user's general options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserOptions {\n  titleLanguage: UserTitleLanguage\n  displayAdultContent: Boolean\n  airingNotifications: Boolean\n  profileColor: String\n  notificationOptions: [NotificationOption]\n  timezone: String\n  activityMergeTime: Int\n  staffNameLanguage: UserStaffNameLanguage\n  restrictMessagesToFollowing: Boolean\n  disabledListActivity: [ListActivityOption]\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-useroptionsbtitlelanguagebcodeusertitlelanguage-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserOptions.",(0,l.kt)("b",null,"titleLanguage"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/enums/user-title-language"},(0,l.kt)("inlineCode",{parentName:"a"},"UserTitleLanguage"))," ",(0,l.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The language the user wants to see media titles in")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-useroptionsbdisplayadultcontentbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserOptions.",(0,l.kt)("b",null,"displayAdultContent"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Whether the user has enabled viewing of 18+ content")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-useroptionsbairingnotificationsbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserOptions.",(0,l.kt)("b",null,"airingNotifications"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Whether the user receives notifications when a show they are watching aires")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-useroptionsbprofilecolorbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserOptions.",(0,l.kt)("b",null,"profileColor"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Profile highlight color (blue, purple, pink, orange, red, green, gray)")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-useroptionsbnotificationoptionsbcodenotificationoption--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserOptions.",(0,l.kt)("b",null,"notificationOptions"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/objects/notification-option"},(0,l.kt)("inlineCode",{parentName:"a"},"[NotificationOption]"))," ",(0,l.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Notification options")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-useroptionsbtimezonebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserOptions.",(0,l.kt)("b",null,"timezone"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The user's timezone offset (Auth user only)")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-useroptionsbactivitymergetimebcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserOptions.",(0,l.kt)("b",null,"activityMergeTime"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-useroptionsbstaffnamelanguagebcodeuserstaffnamelanguage-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserOptions.",(0,l.kt)("b",null,"staffNameLanguage"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/enums/user-staff-name-language"},(0,l.kt)("inlineCode",{parentName:"a"},"UserStaffNameLanguage"))," ",(0,l.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The language the user wants to see staff and character names in")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-useroptionsbrestrictmessagestofollowingbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserOptions.",(0,l.kt)("b",null,"restrictMessagesToFollowing"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Whether the user only allow messages from users they follow")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-useroptionsbdisabledlistactivitybcodelistactivityoption--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserOptions.",(0,l.kt)("b",null,"disabledListActivity"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/objects/list-activity-option"},(0,l.kt)("inlineCode",{parentName:"a"},"[ListActivityOption]"))," ",(0,l.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The list activity types the user has disabled from being created from list updates")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/schema/objects/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);