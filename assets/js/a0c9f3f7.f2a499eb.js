"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=i,m=s["".concat(p,".").concat(d)]||s[d]||f[d]||a;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1023:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>s,SpecifiedBy:()=>f,assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var o=n(7462),i=n(7294),a=n(3905);const r={id:"notification-option-input",title:"NotificationOptionInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,p={unversionedId:"inputs/notification-option-input",id:"inputs/notification-option-input",title:"NotificationOptionInput",description:"Notification option input",source:"@site/examples/schema/inputs/notification-option-input.mdx",sourceDirName:"inputs",slug:"/inputs/notification-option-input",permalink:"/schema/inputs/notification-option-input",draft:!1,tags:[],version:"current",frontMatter:{id:"notification-option-input",title:"NotificationOptionInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>NotificationOptionInput.<b>type</b></code><Bullet /><code>NotificationType</code> <Badge className="secondary" text="enum"/>',id:"code-style-fontweight-normal-notificationoptioninputbtypebcodenotificationtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>NotificationOptionInput.<b>enabled</b></code><Bullet /><code>Boolean</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-notificationoptioninputbenabledbcodeboolean-",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,a.kt)(i.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.className},e.text)),m={toc:u,Bullet:s,SpecifiedBy:f,Badge:d};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Notification option input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input NotificationOptionInput {\n  type: NotificationType\n  enabled: Boolean\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-notificationoptioninputbtypebcodenotificationtype-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"NotificationOptionInput.",(0,a.kt)("b",null,"type"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,a.kt)("inlineCode",{parentName:"a"},"NotificationType"))," ",(0,a.kt)(d,{className:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The type of notification")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-notificationoptioninputbenabledbcodeboolean-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"NotificationOptionInput.",(0,a.kt)("b",null,"enabled"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,a.kt)(d,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Whether this type of notification is enabled")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/schema/mutations/update-user"},(0,a.kt)("inlineCode",{parentName:"a"},"UpdateUser"))," ",(0,a.kt)(d,{className:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);