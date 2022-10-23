"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9741],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(a),m=i,u=d["".concat(l,".").concat(m)]||d[m]||y[m]||r;return a?n.createElement(u,o(o({ref:t},p),{},{components:a})):n.createElement(u,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5721:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>y,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>c,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),i=a(7294),r=a(3905);const o={id:"activity-union",title:"ActivityUnion",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},c=void 0,l={unversionedId:"unions/activity-union",id:"unions/activity-union",title:"ActivityUnion",description:"Activity union type",source:"@site/examples/schema/unions/activity-union.mdx",sourceDirName:"unions",slug:"/unions/activity-union",permalink:"/schema/unions/activity-union",draft:!1,tags:[],version:"current",frontMatter:{id:"activity-union",title:"ActivityUnion",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},s={},p=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>TextActivity</code> <Badge class="secondary" text="object"/>',id:"textactivity-",level:4},{value:'<code>ListActivity</code> <Badge class="secondary" text="object"/>',id:"listactivity-",level:4},{value:'<code>MessageActivity</code> <Badge class="secondary" text="object"/>',id:"messageactivity-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],y=()=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,r.kt)(i.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),u={toc:p,Bullet:y,SpecifiedBy:d,Badge:m};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Activity union type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"union ActivityUnion = TextActivity | ListActivity | MessageActivity\n")),(0,r.kt)("h3",{id:"possible-types"},"Possible types"),(0,r.kt)("h4",{id:"textactivity-"},(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/text-activity"},(0,r.kt)("inlineCode",{parentName:"a"},"TextActivity"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"User text activity")),(0,r.kt)("h4",{id:"listactivity-"},(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/list-activity"},(0,r.kt)("inlineCode",{parentName:"a"},"ListActivity"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"User list activity (anime & manga updates)")),(0,r.kt)("h4",{id:"messageactivity-"},(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/message-activity"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageActivity"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"User message activity")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/schema/queries/activity"},(0,r.kt)("inlineCode",{parentName:"a"},"Activity"))," ",(0,r.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/mutations/toggle-activity-pin"},(0,r.kt)("inlineCode",{parentName:"a"},"ToggleActivityPin"))," ",(0,r.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/mutations/toggle-activity-subscription"},(0,r.kt)("inlineCode",{parentName:"a"},"ToggleActivitySubscription"))," ",(0,r.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/schema/objects/activity-like-notification"},(0,r.kt)("inlineCode",{parentName:"a"},"ActivityLikeNotification"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/activity-mention-notification"},(0,r.kt)("inlineCode",{parentName:"a"},"ActivityMentionNotification"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/activity-reply-like-notification"},(0,r.kt)("inlineCode",{parentName:"a"},"ActivityReplyLikeNotification"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/activity-reply-notification"},(0,r.kt)("inlineCode",{parentName:"a"},"ActivityReplyNotification"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/activity-reply-subscribed-notification"},(0,r.kt)("inlineCode",{parentName:"a"},"ActivityReplySubscribedNotification"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/internal-page"},(0,r.kt)("inlineCode",{parentName:"a"},"InternalPage"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/page"},(0,r.kt)("inlineCode",{parentName:"a"},"Page"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);