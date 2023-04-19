"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[8366],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>p});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(a),g=o,p=m["".concat(d,".").concat(g)]||m[g]||f[g]||i;return a?n.createElement(p,r(r({ref:t},s),{},{components:a})):n.createElement(p,r({ref:t},s))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=g;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},485:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>f,Bullet:()=>s,Details:()=>p,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>r,metadata:()=>d,toc:()=>g});var n=a(7462),o=a(7294),i=a(3905);const r={id:"media-merge-notification",title:"MediaMergeNotification",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},l=void 0,d={unversionedId:"objects/media-merge-notification",id:"objects/media-merge-notification",title:"MediaMergeNotification",description:"Notification for when a media entry is merged into another for a user who had it on their list",source:"@site/examples/schema/objects/media-merge-notification.mdx",sourceDirName:"objects",slug:"/objects/media-merge-notification",permalink:"/schema/objects/media-merge-notification",draft:!1,tags:[],version:"current",frontMatter:{id:"media-merge-notification",title:"MediaMergeNotification",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},s=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MediaMergeNotification.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediamergenotificationbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaMergeNotification.<b>type</b></code><Bullet /><code>NotificationType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-mediamergenotificationbtypebcodenotificationtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaMergeNotification.<b>mediaId</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediamergenotificationbmediaidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaMergeNotification.<b>deletedMediaTitles</b></code><Bullet /><code>[String]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediamergenotificationbdeletedmediatitlesbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaMergeNotification.<b>context</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediamergenotificationbcontextbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaMergeNotification.<b>reason</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediamergenotificationbreasonbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaMergeNotification.<b>createdAt</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediamergenotificationbcreatedatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaMergeNotification.<b>media</b></code><Bullet /><code>Media</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediamergenotificationbmediabcodemedia-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:l=!1}=e;const[d,c]=(0,o.useState)(l);return(0,i.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&r)},u={Bullet:s,SpecifiedBy:m,Badge:f,toc:g,Details:p};function y(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Notification for when a media entry is merged into another for a user who had it on their list"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaMergeNotification {\n  id: Int!\n  type: NotificationType\n  mediaId: Int!\n  deletedMediaTitles: [String]\n  context: String\n  reason: String\n  createdAt: Int\n  media: Media\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-mediamergenotificationbidbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"MediaMergeNotification.",(0,i.kt)("b",null,"id"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,i.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The id of the Notification")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-mediamergenotificationbtypebcodenotificationtype-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"MediaMergeNotification.",(0,i.kt)("b",null,"type"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,i.kt)("inlineCode",{parentName:"a"},"NotificationType"))," ",(0,i.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The type of notification")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-mediamergenotificationbmediaidbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"MediaMergeNotification.",(0,i.kt)("b",null,"mediaId"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,i.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The id of the media that was merged into")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-mediamergenotificationbdeletedmediatitlesbcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"MediaMergeNotification.",(0,i.kt)("b",null,"deletedMediaTitles"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,i.kt)(f,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The title of the deleted media")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-mediamergenotificationbcontextbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"MediaMergeNotification.",(0,i.kt)("b",null,"context"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The reason for the media data change")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-mediamergenotificationbreasonbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"MediaMergeNotification.",(0,i.kt)("b",null,"reason"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The reason for the media merge")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-mediamergenotificationbcreatedatbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"MediaMergeNotification.",(0,i.kt)("b",null,"createdAt"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The time the notification was created at")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-mediamergenotificationbmediabcodemedia-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"MediaMergeNotification.",(0,i.kt)("b",null,"media"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,i.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,i.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The media that was merged into")),(0,i.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/schema/unions/notification-union"},(0,i.kt)("inlineCode",{parentName:"a"},"NotificationUnion"))," ",(0,i.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);