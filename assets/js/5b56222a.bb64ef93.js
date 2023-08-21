"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9664],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=o.createContext({}),d=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=d(a),g=n,m=p["".concat(i,".").concat(g)]||p[g]||u[g]||l;return a?o.createElement(m,s(s({ref:t},c),{},{components:a})):o.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=g;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[p]="string"==typeof e?e:n,s[1]=r;for(var d=2;d<l;d++)s[d]=a[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4782:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>r,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>g});var o=a(7462),n=a(7294),l=a(4137);const s={id:"user-options",title:"UserOptions",hide_table_of_contents:!1},r=void 0,i={unversionedId:"objects/user-options",id:"objects/user-options",title:"UserOptions",description:"A user's general options",source:"@site/examples/default/objects/user-options.mdx",sourceDirName:"objects",slug:"/objects/user-options",permalink:"/examples/default/objects/user-options",draft:!1,tags:[],version:"current",frontMatter:{id:"user-options",title:"UserOptions",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UserModData",permalink:"/examples/default/objects/user-mod-data"},next:{title:"UserPreviousName",permalink:"/examples/default/objects/user-previous-name"}},d={},c=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UserOptions.<b>titleLanguage</b></code><Bullet /><code>UserTitleLanguage</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-useroptionsbtitlelanguagebcodeusertitlelanguage-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserOptions.<b>displayAdultContent</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-useroptionsbdisplayadultcontentbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserOptions.<b>airingNotifications</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-useroptionsbairingnotificationsbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserOptions.<b>profileColor</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-useroptionsbprofilecolorbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserOptions.<b>notificationOptions</b></code><Bullet /><code>[NotificationOption]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-useroptionsbnotificationoptionsbcodenotificationoption--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserOptions.<b>timezone</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-useroptionsbtimezonebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserOptions.<b>activityMergeTime</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-useroptionsbactivitymergetimebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserOptions.<b>staffNameLanguage</b></code><Bullet /><code>UserStaffNameLanguage</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-useroptionsbstaffnamelanguagebcodeuserstaffnamelanguage-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserOptions.<b>restrictMessagesToFollowing</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-useroptionsbrestrictmessagestofollowingbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserOptions.<b>disabledListActivity</b></code><Bullet /><code>[ListActivityOption]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-useroptionsbdisabledlistactivitybcodelistactivityoption--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:s,startOpen:r=!1}=e;const[i,d]=(0,n.useState)(r);return(0,l.kt)("details",(0,o.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&s)},b={Bullet:c,SpecifiedBy:p,Badge:u,toc:g,Details:m};function f(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,o.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A user's general options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserOptions {\n  titleLanguage: UserTitleLanguage\n  displayAdultContent: Boolean\n  airingNotifications: Boolean\n  profileColor: String\n  notificationOptions: [NotificationOption]\n  timezone: String\n  activityMergeTime: Int\n  staffNameLanguage: UserStaffNameLanguage\n  restrictMessagesToFollowing: Boolean\n  disabledListActivity: [ListActivityOption]\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-useroptionsbtitlelanguagebcodeusertitlelanguage-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserOptions.",(0,l.kt)("b",null,"titleLanguage"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/enums/user-title-language"},(0,l.kt)("inlineCode",{parentName:"a"},"UserTitleLanguage"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The language the user wants to see media titles in")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-useroptionsbdisplayadultcontentbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserOptions.",(0,l.kt)("b",null,"displayAdultContent"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Whether the user has enabled viewing of 18+ content")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-useroptionsbairingnotificationsbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserOptions.",(0,l.kt)("b",null,"airingNotifications"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Whether the user receives notifications when a show they are watching aires")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-useroptionsbprofilecolorbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserOptions.",(0,l.kt)("b",null,"profileColor"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Profile highlight color (blue, purple, pink, orange, red, green, gray)")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-useroptionsbnotificationoptionsbcodenotificationoption--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserOptions.",(0,l.kt)("b",null,"notificationOptions"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/objects/notification-option"},(0,l.kt)("inlineCode",{parentName:"a"},"[NotificationOption]"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Notification options")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-useroptionsbtimezonebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserOptions.",(0,l.kt)("b",null,"timezone"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The user's timezone offset (Auth user only)")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-useroptionsbactivitymergetimebcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserOptions.",(0,l.kt)("b",null,"activityMergeTime"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-useroptionsbstaffnamelanguagebcodeuserstaffnamelanguage-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserOptions.",(0,l.kt)("b",null,"staffNameLanguage"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/enums/user-staff-name-language"},(0,l.kt)("inlineCode",{parentName:"a"},"UserStaffNameLanguage"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The language the user wants to see staff and character names in")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-useroptionsbrestrictmessagestofollowingbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserOptions.",(0,l.kt)("b",null,"restrictMessagesToFollowing"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Whether the user only allow messages from users they follow")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-useroptionsbdisabledlistactivitybcodelistactivityoption--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserOptions.",(0,l.kt)("b",null,"disabledListActivity"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/objects/list-activity-option"},(0,l.kt)("inlineCode",{parentName:"a"},"[ListActivityOption]"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The list activity types the user has disabled from being created from list updates")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);