"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[4706],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=s(a),u=i,m=p["".concat(c,".").concat(u)]||p[u]||y[u]||o;return a?n.createElement(m,l(l({ref:t},d),{},{components:a})):n.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,l=new Array(o);l[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[p]="string"==typeof e?e:i,l[1]=r;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9506:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=a(7462),i=a(7294),o=a(4137);const l={id:"activity-union",title:"ActivityUnion",hide_table_of_contents:!1},r=void 0,c={unversionedId:"unions/activity-union",id:"unions/activity-union",title:"ActivityUnion",description:"Activity union type",source:"@site/examples/default/unions/activity-union.mdx",sourceDirName:"unions",slug:"/unions/activity-union",permalink:"/examples/default/unions/activity-union",draft:!1,tags:[],version:"current",frontMatter:{id:"activity-union",title:"ActivityUnion",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"String",permalink:"/examples/default/scalars/string"},next:{title:"LikeableUnion",permalink:"/examples/default/unions/likeable-union"}},s={},d=()=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(i.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),u=[{value:"Possible types",id:"possible-types",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityUnion.<b>TextActivity</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-activityunionbtextactivitybcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityUnion.<b>ListActivity</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-activityunionblistactivitybcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityUnion.<b>MessageActivity</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-activityunionbmessageactivitybcode-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:r=!1}=e;const[c,s]=(0,i.useState)(r);return(0,o.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&l)},b={Bullet:d,SpecifiedBy:p,Badge:y,toc:u,Details:m};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("meta",{name:"googlebot",content:"noindex"}),(0,o.kt)("meta",{charset:"utf-8"})),(0,o.kt)("p",null,"Activity union type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"union ActivityUnion = TextActivity | ListActivity | MessageActivity\n")),(0,o.kt)("h3",{id:"possible-types"},"Possible types"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityunionbtextactivitybcode-"},(0,o.kt)("a",{parentName:"h4",href:"/examples/default/objects/text-activity"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityUnion.",(0,o.kt)("b",null,"TextActivity")))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"User text activity")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityunionblistactivitybcode-"},(0,o.kt)("a",{parentName:"h4",href:"/examples/default/objects/list-activity"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityUnion.",(0,o.kt)("b",null,"ListActivity")))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"User list activity (anime & manga updates)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-activityunionbmessageactivitybcode-"},(0,o.kt)("a",{parentName:"h4",href:"/examples/default/objects/message-activity"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ActivityUnion.",(0,o.kt)("b",null,"MessageActivity")))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"User message activity")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/examples/default/queries/activity"},(0,o.kt)("inlineCode",{parentName:"a"},"Activity"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"query",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/examples/default/mutations/toggle-activity-pin"},(0,o.kt)("inlineCode",{parentName:"a"},"ToggleActivityPin"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/examples/default/mutations/toggle-activity-subscription"},(0,o.kt)("inlineCode",{parentName:"a"},"ToggleActivitySubscription"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})),(0,o.kt)("h3",{id:"member-of"},"Member Of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-like-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"ActivityLikeNotification"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-mention-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"ActivityMentionNotification"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-reply-like-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"ActivityReplyLikeNotification"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-reply-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"ActivityReplyNotification"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-reply-subscribed-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"ActivityReplySubscribedNotification"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/examples/default/objects/internal-page"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalPage"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/examples/default/objects/page"},(0,o.kt)("inlineCode",{parentName:"a"},"Page"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);