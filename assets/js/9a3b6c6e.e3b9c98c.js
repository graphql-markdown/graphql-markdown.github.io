"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[681],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,v=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(v,o(o({ref:t},d),{},{components:n})):a.createElement(v,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5056:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],c={id:"save-message-activity",title:"SaveMessageActivity",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,l={unversionedId:"schema/mutations/save-message-activity",id:"schema/mutations/save-message-activity",title:"SaveMessageActivity",description:"Create or update message activity for the currently authenticated user",source:"@site/docs/schema/mutations/save-message-activity.mdx",sourceDirName:"schema/mutations",slug:"/schema/mutations/save-message-activity",permalink:"/schema/mutations/save-message-activity",draft:!1,tags:[],version:"current",frontMatter:{id:"save-message-activity",title:"SaveMessageActivity",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},d={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>message</code> (<code>String</code>)",id:"message-string",level:4},{value:"<code>recipientId</code> (<code>Int</code>)",id:"recipientid-int",level:4},{value:"<code>private</code> (<code>Boolean</code>)",id:"private-boolean",level:4},{value:"<code>locked</code> (<code>Boolean</code>)",id:"locked-boolean",level:4},{value:"<code>asMod</code> (<code>Boolean</code>)",id:"asmod-boolean",level:4},{value:"Type",id:"type",level:3},{value:"<code>MessageActivity</code>",id:"messageactivity",level:4}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Create or update message activity for the currently authenticated user"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"SaveMessageActivity(\n  id: Int\n  message: String\n  recipientId: Int\n  private: Boolean\n  locked: Boolean\n  asMod: Boolean\n): MessageActivity\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The activity id, required for updating"),(0,i.kt)("h4",{id:"message-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"message")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The activity message text"),(0,i.kt)("h4",{id:"recipientid-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"recipientId")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The id of the user the message is being sent to"),(0,i.kt)("h4",{id:"private-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"private")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the activity should be private"),(0,i.kt)("h4",{id:"locked-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"locked")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the activity should be locked. (Mod Only)"),(0,i.kt)("h4",{id:"asmod-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"asMod")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the message should be sent from the Moderator account (Mod Only)"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"messageactivity"},(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/message-activity"},(0,i.kt)("inlineCode",{parentName:"a"},"MessageActivity"))),(0,i.kt)("p",null,"User message activity"))}m.isMDXComponent=!0}}]);