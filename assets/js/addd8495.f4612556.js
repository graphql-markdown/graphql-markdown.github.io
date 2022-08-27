"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[9805],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>p});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=s(o),p=a,m=u["".concat(c,".").concat(p)]||u[p]||f[p]||i;return o?n.createElement(m,l(l({ref:t},d),{},{components:o})):n.createElement(m,l({ref:t},d))}));function p(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,l=new Array(i);l[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var s=2;s<i;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},5939:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>p,Bullet:()=>f,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=o(7462),a=o(7294),i=o(3905);const l={id:"following-notification",title:"FollowingNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},r=void 0,c={unversionedId:"schema/objects/following-notification",id:"schema/objects/following-notification",title:"FollowingNotification",description:"Notification for when the authenticated user is followed by another user",source:"@site/docs/schema/objects/following-notification.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/following-notification",permalink:"/schema/objects/following-notification",draft:!1,tags:[],version:"current",frontMatter:{id:"following-notification",title:"FollowingNotification",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FollowingNotification.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-followingnotificationbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FollowingNotification.<b>userId</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-followingnotificationbuseridbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FollowingNotification.<b>type</b></code><Bullet /><code>NotificationType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-followingnotificationbtypebcodenotificationtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FollowingNotification.<b>context</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-followingnotificationbcontextbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FollowingNotification.<b>createdAt</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-followingnotificationbcreatedatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FollowingNotification.<b>user</b></code><Bullet /><code>User</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-followingnotificationbuserbcodeuser-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],f=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:f,SpecifiedBy:u,Badge:p};function g(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Notification for when the authenticated user is followed by another user"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type FollowingNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  context: String\n  createdAt: Int\n  user: User\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-followingnotificationbidbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"FollowingNotification.",(0,i.kt)("b",null,"id"))),(0,i.kt)(f,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,i.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The id of the Notification")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-followingnotificationbuseridbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"FollowingNotification.",(0,i.kt)("b",null,"userId"))),(0,i.kt)(f,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,i.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The id of the user who followed the authenticated user")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-followingnotificationbtypebcodenotificationtype-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"FollowingNotification.",(0,i.kt)("b",null,"type"))),(0,i.kt)(f,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,i.kt)("inlineCode",{parentName:"a"},"NotificationType"))," ",(0,i.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The type of notification")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-followingnotificationbcontextbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"FollowingNotification.",(0,i.kt)("b",null,"context"))),(0,i.kt)(f,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The notification context text")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-followingnotificationbcreatedatbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"FollowingNotification.",(0,i.kt)("b",null,"createdAt"))),(0,i.kt)(f,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The time the notification was created at")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-followingnotificationbuserbcodeuser-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"FollowingNotification.",(0,i.kt)("b",null,"user"))),(0,i.kt)(f,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,i.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,i.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The liked activity")),(0,i.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/schema/unions/notification-union"},(0,i.kt)("inlineCode",{parentName:"a"},"NotificationUnion"))," ",(0,i.kt)(p,{class:"secondary",text:"union",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);