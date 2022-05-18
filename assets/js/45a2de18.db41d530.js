"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[3716],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(g,r(r({ref:t},d),{},{components:n})):a.createElement(g,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9897:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={id:"update-user",title:"UpdateUser",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,c={unversionedId:"schema/mutations/update-user",id:"schema/mutations/update-user",title:"UpdateUser",description:"No description",source:"@site/docs/schema/mutations/update-user.mdx",sourceDirName:"schema/mutations",slug:"/schema/mutations/update-user",permalink:"/schema/mutations/update-user",draft:!1,tags:[],version:"current",frontMatter:{id:"update-user",title:"UpdateUser",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},d={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>about</code> (<code>String</code>)",id:"about-string",level:4},{value:"<code>titleLanguage</code> (<code>UserTitleLanguage</code>)",id:"titlelanguage-usertitlelanguage",level:4},{value:"<code>displayAdultContent</code> (<code>Boolean</code>)",id:"displayadultcontent-boolean",level:4},{value:"<code>airingNotifications</code> (<code>Boolean</code>)",id:"airingnotifications-boolean",level:4},{value:"<code>scoreFormat</code> (<code>ScoreFormat</code>)",id:"scoreformat-scoreformat",level:4},{value:"<code>rowOrder</code> (<code>String</code>)",id:"roworder-string",level:4},{value:"<code>profileColor</code> (<code>String</code>)",id:"profilecolor-string",level:4},{value:"<code>donatorBadge</code> (<code>String</code>)",id:"donatorbadge-string",level:4},{value:"<code>notificationOptions</code> (<code>NotificationOptionInput</code>)",id:"notificationoptions-notificationoptioninput",level:4},{value:"<code>timezone</code> (<code>String</code>)",id:"timezone-string",level:4},{value:"<code>activityMergeTime</code> (<code>Int</code>)",id:"activitymergetime-int",level:4},{value:"<code>animeListOptions</code> (<code>MediaListOptionsInput</code>)",id:"animelistoptions-medialistoptionsinput",level:4},{value:"<code>mangaListOptions</code> (<code>MediaListOptionsInput</code>)",id:"mangalistoptions-medialistoptionsinput",level:4},{value:"<code>staffNameLanguage</code> (<code>UserStaffNameLanguage</code>)",id:"staffnamelanguage-userstaffnamelanguage",level:4},{value:"<code>restrictMessagesToFollowing</code> (<code>Boolean</code>)",id:"restrictmessagestofollowing-boolean",level:4},{value:"<code>disabledListActivity</code> (<code>ListActivityOptionInput</code>)",id:"disabledlistactivity-listactivityoptioninput",level:4},{value:"Type",id:"type",level:3},{value:"<code>User</code>",id:"user",level:4}],p={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"UpdateUser(\n  about: String\n  titleLanguage: UserTitleLanguage\n  displayAdultContent: Boolean\n  airingNotifications: Boolean\n  scoreFormat: ScoreFormat\n  rowOrder: String\n  profileColor: String\n  donatorBadge: String\n  notificationOptions: [NotificationOptionInput]\n  timezone: String\n  activityMergeTime: Int\n  animeListOptions: MediaListOptionsInput\n  mangaListOptions: MediaListOptionsInput\n  staffNameLanguage: UserStaffNameLanguage\n  restrictMessagesToFollowing: Boolean\n  disabledListActivity: [ListActivityOptionInput]\n): User\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"about-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"about")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"User's about/bio text"),(0,o.kt)("h4",{id:"titlelanguage-usertitlelanguage"},(0,o.kt)("inlineCode",{parentName:"h4"},"titleLanguage")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/user-title-language"},(0,o.kt)("inlineCode",{parentName:"a"},"UserTitleLanguage")),")"),(0,o.kt)("p",null,"User's title language"),(0,o.kt)("h4",{id:"displayadultcontent-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"displayAdultContent")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("p",null,"If the user should see media marked as adult-only"),(0,o.kt)("h4",{id:"airingnotifications-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"airingNotifications")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("p",null,"If the user should get notifications when a show they are watching aires"),(0,o.kt)("h4",{id:"scoreformat-scoreformat"},(0,o.kt)("inlineCode",{parentName:"h4"},"scoreFormat")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/score-format"},(0,o.kt)("inlineCode",{parentName:"a"},"ScoreFormat")),")"),(0,o.kt)("p",null,"The user's list scoring system"),(0,o.kt)("h4",{id:"roworder-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"rowOrder")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"The user's default list order"),(0,o.kt)("h4",{id:"profilecolor-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"profileColor")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"Profile highlight color"),(0,o.kt)("h4",{id:"donatorbadge-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"donatorBadge")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"Profile highlight color"),(0,o.kt)("h4",{id:"notificationoptions-notificationoptioninput"},(0,o.kt)("inlineCode",{parentName:"h4"},"notificationOptions")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/inputs/notification-option-input"},(0,o.kt)("inlineCode",{parentName:"a"},"NotificationOptionInput")),")"),(0,o.kt)("p",null,"Notification options"),(0,o.kt)("h4",{id:"timezone-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"timezone")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"Timezone offset format: -?HH:MM"),(0,o.kt)("h4",{id:"activitymergetime-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"activityMergeTime")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always."),(0,o.kt)("h4",{id:"animelistoptions-medialistoptionsinput"},(0,o.kt)("inlineCode",{parentName:"h4"},"animeListOptions")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/inputs/media-list-options-input"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaListOptionsInput")),")"),(0,o.kt)("p",null,"The user's anime list options"),(0,o.kt)("h4",{id:"mangalistoptions-medialistoptionsinput"},(0,o.kt)("inlineCode",{parentName:"h4"},"mangaListOptions")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/inputs/media-list-options-input"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaListOptionsInput")),")"),(0,o.kt)("p",null,"The user's anime list options"),(0,o.kt)("h4",{id:"staffnamelanguage-userstaffnamelanguage"},(0,o.kt)("inlineCode",{parentName:"h4"},"staffNameLanguage")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/user-staff-name-language"},(0,o.kt)("inlineCode",{parentName:"a"},"UserStaffNameLanguage")),")"),(0,o.kt)("p",null,"The language the user wants to see staff and character names in"),(0,o.kt)("h4",{id:"restrictmessagestofollowing-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"restrictMessagesToFollowing")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("p",null,"Only allow messages from other users the user follows"),(0,o.kt)("h4",{id:"disabledlistactivity-listactivityoptioninput"},(0,o.kt)("inlineCode",{parentName:"h4"},"disabledListActivity")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/inputs/list-activity-option-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ListActivityOptionInput")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"user"},(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User"))),(0,o.kt)("p",null,"A user"))}m.isMDXComponent=!0}}]);