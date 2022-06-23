"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[5159],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),y=r,m=u["".concat(c,".").concat(y)]||u[y]||s[y]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3272:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={id:"save-activity-reply",title:"SaveActivityReply",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,l={unversionedId:"schema/mutations/save-activity-reply",id:"schema/mutations/save-activity-reply",title:"SaveActivityReply",description:"Create or update an activity reply",source:"@site/docs/schema/mutations/save-activity-reply.mdx",sourceDirName:"schema/mutations",slug:"/schema/mutations/save-activity-reply",permalink:"/schema/mutations/save-activity-reply",draft:!1,tags:[],version:"current",frontMatter:{id:"save-activity-reply",title:"SaveActivityReply",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},c={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>activityId</code> (<code>Int</code>)",id:"activityid-int",level:4},{value:"<code>text</code> (<code>String</code>)",id:"text-string",level:4},{value:"<code>asMod</code> (<code>Boolean</code>)",id:"asmod-boolean",level:4},{value:"Type",id:"type",level:3},{value:"<code>ActivityReply</code>",id:"activityreply",level:4}],d={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Create or update an activity reply"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"SaveActivityReply(\n  id: Int\n  activityId: Int\n  text: String\n  asMod: Boolean\n): ActivityReply\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"id-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The activity reply id, required for updating"),(0,r.kt)("h4",{id:"activityid-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"activityId"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The id of the parent activity being replied to"),(0,r.kt)("h4",{id:"text-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"text"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"The reply text"),(0,r.kt)("h4",{id:"asmod-boolean"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"asMod"))," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("p",null,"If the reply should be sent from the Moderator account (Mod Only)"),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"activityreply"},(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/activity-reply"},(0,r.kt)("inlineCode",{parentName:"a"},"ActivityReply"))),(0,r.kt)("p",null,"Replay to an activity item"))}s.isMDXComponent=!0}}]);