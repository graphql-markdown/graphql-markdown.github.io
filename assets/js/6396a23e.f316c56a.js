"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2796],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>p});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var r=n.createContext({}),d=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(r.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(a),h=i,p=m["".concat(r,".").concat(h)]||m[h]||f[h]||o;return a?n.createElement(p,c(c({ref:t},s),{},{components:a})):n.createElement(p,c({ref:t},s))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,c=new Array(o);c[0]=h;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[m]="string"==typeof e?e:i,c[1]=l;for(var d=2;d<o;d++)c[d]=a[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4447:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>h,Bullet:()=>m,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>r,toc:()=>s});var n=a(7462),i=a(7294),o=a(3905);const c={id:"media-data-change-notification",title:"MediaDataChangeNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,r={unversionedId:"objects/media-data-change-notification",id:"objects/media-data-change-notification",title:"MediaDataChangeNotification",description:"Notification for when a media entry's data was changed in a significant way impacting users' list tracking",source:"@site/examples/schema/objects/media-data-change-notification.mdx",sourceDirName:"objects",slug:"/objects/media-data-change-notification",permalink:"/schema/objects/media-data-change-notification",draft:!1,tags:[],version:"current",frontMatter:{id:"media-data-change-notification",title:"MediaDataChangeNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MediaDataChangeNotification.<b>id</b></code><Bullet /><code>Int!</code> <Badge className="secondary" text="non-null"/> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediadatachangenotificationbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaDataChangeNotification.<b>type</b></code><Bullet /><code>NotificationType</code> <Badge className="secondary" text="enum"/>',id:"code-style-fontweight-normal-mediadatachangenotificationbtypebcodenotificationtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaDataChangeNotification.<b>mediaId</b></code><Bullet /><code>Int!</code> <Badge className="secondary" text="non-null"/> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediadatachangenotificationbmediaidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaDataChangeNotification.<b>context</b></code><Bullet /><code>String</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediadatachangenotificationbcontextbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaDataChangeNotification.<b>reason</b></code><Bullet /><code>String</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediadatachangenotificationbreasonbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaDataChangeNotification.<b>createdAt</b></code><Bullet /><code>Int</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediadatachangenotificationbcreatedatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaDataChangeNotification.<b>media</b></code><Bullet /><code>Media</code> <Badge className="secondary" text="object"/>',id:"code-style-fontweight-normal-mediadatachangenotificationbmediabcodemedia-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],m=()=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,o.kt)(i.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),p={toc:s,Bullet:m,SpecifiedBy:f,Badge:h};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Notification for when a media entry's data was changed in a significant way impacting users' list tracking"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaDataChangeNotification {\n  id: Int!\n  type: NotificationType\n  mediaId: Int!\n  context: String\n  reason: String\n  createdAt: Int\n  media: Media\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-mediadatachangenotificationbidbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MediaDataChangeNotification.",(0,o.kt)("b",null,"id"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(h,{className:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The id of the Notification")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-mediadatachangenotificationbtypebcodenotificationtype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MediaDataChangeNotification.",(0,o.kt)("b",null,"type"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,o.kt)("inlineCode",{parentName:"a"},"NotificationType"))," ",(0,o.kt)(h,{className:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The type of notification")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-mediadatachangenotificationbmediaidbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MediaDataChangeNotification.",(0,o.kt)("b",null,"mediaId"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(h,{className:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The id of the media that received data changes")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-mediadatachangenotificationbcontextbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MediaDataChangeNotification.",(0,o.kt)("b",null,"context"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The reason for the media data change")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-mediadatachangenotificationbreasonbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MediaDataChangeNotification.",(0,o.kt)("b",null,"reason"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The reason for the media data change")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-mediadatachangenotificationbcreatedatbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MediaDataChangeNotification.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(h,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The time the notification was created at")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-mediadatachangenotificationbmediabcodemedia-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MediaDataChangeNotification.",(0,o.kt)("b",null,"media"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,o.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,o.kt)(h,{className:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The media that received data changes")),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/schema/unions/notification-union"},(0,o.kt)("inlineCode",{parentName:"a"},"NotificationUnion"))," ",(0,o.kt)(h,{className:"secondary",text:"union",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);