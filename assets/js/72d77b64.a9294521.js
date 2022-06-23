"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[3505],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),p=n,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return r?a.createElement(f,c(c({ref:t},u),{},{components:r})):a.createElement(f,c({ref:t},u))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5565:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={id:"character-submission-edge",title:"CharacterSubmissionEdge",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},c=void 0,i={unversionedId:"schema/objects/character-submission-edge",id:"schema/objects/character-submission-edge",title:"CharacterSubmissionEdge",description:"CharacterSubmission connection edge",source:"@site/docs/schema/objects/character-submission-edge.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/character-submission-edge",permalink:"/schema/objects/character-submission-edge",draft:!1,tags:[],version:"current",frontMatter:{id:"character-submission-edge",title:"CharacterSubmissionEdge",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},s={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>node</code> (<code>CharacterSubmission</code>)",id:"node-charactersubmission",level:4},{value:"<code>role</code> (<code>CharacterRole</code>)",id:"role-characterrole",level:4},{value:"<code>voiceActors</code> (<code>[Staff]</code>)",id:"voiceactors-staff",level:4},{value:"<code>submittedVoiceActors</code> (<code>[StaffSubmission]</code>)",id:"submittedvoiceactors-staffsubmission",level:4}],u={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"CharacterSubmission connection edge"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type CharacterSubmissionEdge {\n  node: CharacterSubmission\n  role: CharacterRole\n  voiceActors: [Staff]\n  submittedVoiceActors: [StaffSubmission]\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"node-charactersubmission"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"node"))," (",(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/character-submission"},(0,n.kt)("inlineCode",{parentName:"a"},"CharacterSubmission")),")"),(0,n.kt)("h4",{id:"role-characterrole"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"role"))," (",(0,n.kt)("a",{parentName:"h4",href:"/schema/enums/character-role"},(0,n.kt)("inlineCode",{parentName:"a"},"CharacterRole")),")"),(0,n.kt)("p",null,"The characters role in the media"),(0,n.kt)("h4",{id:"voiceactors-staff"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"voiceActors"))," (",(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,n.kt)("inlineCode",{parentName:"a"},"[Staff]")),")"),(0,n.kt)("p",null,"The voice actors of the character"),(0,n.kt)("h4",{id:"submittedvoiceactors-staffsubmission"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"submittedVoiceActors"))," (",(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/staff-submission"},(0,n.kt)("inlineCode",{parentName:"a"},"[StaffSubmission]")),")"),(0,n.kt)("p",null,"The submitted voice actors of the character"))}d.isMDXComponent=!0}}]);