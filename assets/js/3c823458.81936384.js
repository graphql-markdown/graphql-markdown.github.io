"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6747],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(a),b=o,h=m["".concat(i,".").concat(b)]||m[b]||u[b]||n;return a?r.createElement(h,c(c({ref:t},d),{},{components:a})):r.createElement(h,c({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,c=new Array(n);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<n;l++)c[l]=a[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},4173:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>m,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=a(7462),o=a(7294),n=a(3905);const c={id:"character-submission-edge",title:"CharacterSubmissionEdge",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,i={unversionedId:"objects/character-submission-edge",id:"objects/character-submission-edge",title:"CharacterSubmissionEdge",description:"CharacterSubmission connection edge",source:"@site/examples/schema/objects/character-submission-edge.mdx",sourceDirName:"objects",slug:"/objects/character-submission-edge",permalink:"/schema/objects/character-submission-edge",draft:!1,tags:[],version:"current",frontMatter:{id:"character-submission-edge",title:"CharacterSubmissionEdge",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},l={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterSubmissionEdge.<b>node</b></code><Bullet /><code>CharacterSubmission</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-charactersubmissionedgebnodebcodecharactersubmission-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterSubmissionEdge.<b>role</b></code><Bullet /><code>CharacterRole</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-charactersubmissionedgebrolebcodecharacterrole-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterSubmissionEdge.<b>voiceActors</b></code><Bullet /><code>[Staff]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-charactersubmissionedgebvoiceactorsbcodestaff--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterSubmissionEdge.<b>submittedVoiceActors</b></code><Bullet /><code>[StaffSubmission]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-charactersubmissionedgebsubmittedvoiceactorsbcodestaffsubmission--",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{className:"badge badge--"+e.class},e.text)),h={toc:d,Bullet:m,SpecifiedBy:u,Badge:b};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"CharacterSubmission connection edge"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type CharacterSubmissionEdge {\n  node: CharacterSubmission\n  role: CharacterRole\n  voiceActors: [Staff]\n  submittedVoiceActors: [StaffSubmission]\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-charactersubmissionedgebnodebcodecharactersubmission-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"CharacterSubmissionEdge.",(0,n.kt)("b",null,"node"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/character-submission"},(0,n.kt)("inlineCode",{parentName:"a"},"CharacterSubmission"))," ",(0,n.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-charactersubmissionedgebrolebcodecharacterrole-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"CharacterSubmissionEdge.",(0,n.kt)("b",null,"role"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/enums/character-role"},(0,n.kt)("inlineCode",{parentName:"a"},"CharacterRole"))," ",(0,n.kt)(b,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The characters role in the media")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-charactersubmissionedgebvoiceactorsbcodestaff--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"CharacterSubmissionEdge.",(0,n.kt)("b",null,"voiceActors"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,n.kt)("inlineCode",{parentName:"a"},"[Staff]"))," ",(0,n.kt)(b,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The voice actors of the character")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-charactersubmissionedgebsubmittedvoiceactorsbcodestaffsubmission--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"CharacterSubmissionEdge.",(0,n.kt)("b",null,"submittedVoiceActors"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/staff-submission"},(0,n.kt)("inlineCode",{parentName:"a"},"[StaffSubmission]"))," ",(0,n.kt)(b,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The submitted voice actors of the character")),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/schema/objects/character-submission-connection"},(0,n.kt)("inlineCode",{parentName:"a"},"CharacterSubmissionConnection"))," ",(0,n.kt)(b,{className:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);