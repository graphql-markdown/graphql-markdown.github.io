"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[8645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},y=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),y=o,g=p["".concat(l,".").concat(y)]||p[y]||d[y]||r;return n?i.createElement(g,a(a({ref:t},u),{},{components:n})):i.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<r;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}y.displayName="MDXCreateElement"},6295:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>p,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>c,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=n(7462),o=n(7294),r=n(3905);const a={id:"toggle-activity-subscription",title:"ToggleActivitySubscription",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},c=void 0,l={unversionedId:"mutations/toggle-activity-subscription",id:"mutations/toggle-activity-subscription",title:"ToggleActivitySubscription",description:"Toggle the subscription of an activity item",source:"@site/examples/schema/mutations/toggle-activity-subscription.mdx",sourceDirName:"mutations",slug:"/mutations/toggle-activity-subscription",permalink:"/schema/mutations/toggle-activity-subscription",draft:!1,tags:[],version:"current",frontMatter:{id:"toggle-activity-subscription",title:"ToggleActivitySubscription",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},s={},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ToggleActivitySubscription.<b>activityId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-toggleactivitysubscriptionbactivityidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ToggleActivitySubscription.<b>subscribe</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-toggleactivitysubscriptionbsubscribebcodeboolean-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ActivityUnion</code> <Badge class="secondary" text="union"/>',id:"activityunion-",level:4}],p=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:u,Bullet:p,SpecifiedBy:d,Badge:y};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Toggle the subscription of an activity item"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"ToggleActivitySubscription(\n  activityId: Int\n  subscribe: Boolean\n): ActivityUnion\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-toggleactivitysubscriptionbactivityidbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ToggleActivitySubscription.",(0,r.kt)("b",null,"activityId"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The id of the activity to un/subscribe")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-toggleactivitysubscriptionbsubscribebcodeboolean-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ToggleActivitySubscription.",(0,r.kt)("b",null,"subscribe"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Whether to subscribe or unsubscribe from the activity")),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"activityunion-"},(0,r.kt)("a",{parentName:"h4",href:"/schema/unions/activity-union"},(0,r.kt)("inlineCode",{parentName:"a"},"ActivityUnion"))," ",(0,r.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Activity union type")))}b.isMDXComponent=!0}}]);