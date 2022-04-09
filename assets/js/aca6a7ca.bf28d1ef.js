"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[9864],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),y=i,m=d["".concat(c,".").concat(y)]||d[y]||s[y]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3914:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"delete-activity-reply",title:"DeleteActivityReply"},c=void 0,u={unversionedId:"schema/mutations/delete-activity-reply",id:"schema/mutations/delete-activity-reply",title:"DeleteActivityReply",description:"Delete an activity reply of the authenticated users",source:"@site/docs/schema/mutations/delete-activity-reply.mdx",sourceDirName:"schema/mutations",slug:"/schema/mutations/delete-activity-reply",permalink:"/schema/mutations/delete-activity-reply",tags:[],version:"current",frontMatter:{id:"delete-activity-reply",title:"DeleteActivityReply"},sidebar:"basic",previous:{title:"StaffNameInput",permalink:"/schema/inputs/staff-name-input"},next:{title:"DeleteActivity",permalink:"/schema/mutations/delete-activity"}},p={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"Type",id:"type",level:3},{value:"<code>Deleted</code>",id:"deleted",level:4}],d={toc:s};function y(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Delete an activity reply of the authenticated users"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"DeleteActivityReply(\n  id: Int\n): Deleted\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"id-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"The id of the reply to delete"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"deleted"},(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/deleted"},(0,a.kt)("inlineCode",{parentName:"a"},"Deleted"))),(0,a.kt)("p",null,"Deleted data type"))}y.isMDXComponent=!0}}]);