"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[3505],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,p=d["".concat(s,".").concat(f)]||d[f]||m[f]||a;return r?n.createElement(p,c(c({ref:t},l),{},{components:r})):n.createElement(p,c({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5565:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={id:"character-submission-edge",title:"CharacterSubmissionEdge"},s=void 0,u={unversionedId:"schema/objects/character-submission-edge",id:"schema/objects/character-submission-edge",title:"CharacterSubmissionEdge",description:"CharacterSubmission connection edge",source:"@site/docs/schema/objects/character-submission-edge.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/character-submission-edge",permalink:"/schema/objects/character-submission-edge",draft:!1,tags:[],version:"current",frontMatter:{id:"character-submission-edge",title:"CharacterSubmissionEdge"},sidebar:"basic",previous:{title:"CharacterSubmissionConnection",permalink:"/schema/objects/character-submission-connection"},next:{title:"CharacterSubmission",permalink:"/schema/objects/character-submission"}},l={},m=[{value:"Fields",id:"fields",level:3},{value:"<code>node</code> (<code>CharacterSubmission</code>)",id:"node-charactersubmission",level:4},{value:"<code>role</code> (<code>CharacterRole</code>)",id:"role-characterrole",level:4},{value:"<code>voiceActors</code> (<code>Staff</code>)",id:"voiceactors-staff",level:4},{value:"<code>submittedVoiceActors</code> (<code>StaffSubmission</code>)",id:"submittedvoiceactors-staffsubmission",level:4}],d={toc:m};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"CharacterSubmission connection edge"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type CharacterSubmissionEdge {\n  node: CharacterSubmission\n  role: CharacterRole\n  voiceActors: [Staff]\n  submittedVoiceActors: [StaffSubmission]\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"node-charactersubmission"},(0,a.kt)("inlineCode",{parentName:"h4"},"node")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/character-submission"},(0,a.kt)("inlineCode",{parentName:"a"},"CharacterSubmission")),")"),(0,a.kt)("h4",{id:"role-characterrole"},(0,a.kt)("inlineCode",{parentName:"h4"},"role")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/enums/character-role"},(0,a.kt)("inlineCode",{parentName:"a"},"CharacterRole")),")"),(0,a.kt)("p",null,"The characters role in the media"),(0,a.kt)("h4",{id:"voiceactors-staff"},(0,a.kt)("inlineCode",{parentName:"h4"},"voiceActors")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,a.kt)("inlineCode",{parentName:"a"},"Staff")),")"),(0,a.kt)("p",null,"The voice actors of the character"),(0,a.kt)("h4",{id:"submittedvoiceactors-staffsubmission"},(0,a.kt)("inlineCode",{parentName:"h4"},"submittedVoiceActors")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/staff-submission"},(0,a.kt)("inlineCode",{parentName:"a"},"StaffSubmission")),")"),(0,a.kt)("p",null,"The submitted voice actors of the character"))}f.isMDXComponent=!0}}]);