"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7726],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},b="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=l(a),m=o,f=b["".concat(i,".").concat(m)]||b[m]||u[m]||n;return a?r.createElement(f,s(s({ref:t},d),{},{components:a})):r.createElement(f,s({ref:t},d))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[b]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<n;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8361:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>b,assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var r=a(7462),o=a(7294),n=a(4137);const s={id:"character-submission-edge",title:"CharacterSubmissionEdge",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},c=void 0,i={unversionedId:"objects/character-submission-edge",id:"objects/character-submission-edge",title:"CharacterSubmissionEdge",description:"CharacterSubmission connection edge",source:"@site/examples/default/objects/character-submission-edge.mdx",sourceDirName:"objects",slug:"/objects/character-submission-edge",permalink:"/examples/default/objects/character-submission-edge",draft:!1,tags:[],version:"current",frontMatter:{id:"character-submission-edge",title:"CharacterSubmissionEdge",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},l={},d=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterSubmissionEdge.<b>node</b></code><Bullet /><code>CharacterSubmission</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-charactersubmissionedgebnodebcodecharactersubmission-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterSubmissionEdge.<b>role</b></code><Bullet /><code>CharacterRole</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-charactersubmissionedgebrolebcodecharacterrole-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterSubmissionEdge.<b>voiceActors</b></code><Bullet /><code>[Staff]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-charactersubmissionedgebvoiceactorsbcodestaff--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CharacterSubmissionEdge.<b>submittedVoiceActors</b></code><Bullet /><code>[StaffSubmission]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-charactersubmissionedgebsubmittedvoiceactorsbcodestaffsubmission--",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:a,children:s,startOpen:c=!1}=e;const[i,l]=(0,o.useState)(c);return(0,n.kt)("details",(0,r.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&s)},g={Bullet:d,SpecifiedBy:b,Badge:u,toc:m,Details:f};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"CharacterSubmission connection edge"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type CharacterSubmissionEdge {\n  node: CharacterSubmission\n  role: CharacterRole\n  voiceActors: [Staff]\n  submittedVoiceActors: [StaffSubmission]\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-charactersubmissionedgebnodebcodecharactersubmission-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"CharacterSubmissionEdge.",(0,n.kt)("b",null,"node"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/objects/character-submission"},(0,n.kt)("inlineCode",{parentName:"a"},"CharacterSubmission"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-charactersubmissionedgebrolebcodecharacterrole-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"CharacterSubmissionEdge.",(0,n.kt)("b",null,"role"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/enums/character-role"},(0,n.kt)("inlineCode",{parentName:"a"},"CharacterRole"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The characters role in the media")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-charactersubmissionedgebvoiceactorsbcodestaff--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"CharacterSubmissionEdge.",(0,n.kt)("b",null,"voiceActors"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/objects/staff"},(0,n.kt)("inlineCode",{parentName:"a"},"[Staff]"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The voice actors of the character")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-charactersubmissionedgebsubmittedvoiceactorsbcodestaffsubmission--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"CharacterSubmissionEdge.",(0,n.kt)("b",null,"submittedVoiceActors"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/objects/staff-submission"},(0,n.kt)("inlineCode",{parentName:"a"},"[StaffSubmission]"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The submitted voice actors of the character")),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/character-submission-connection"},(0,n.kt)("inlineCode",{parentName:"a"},"CharacterSubmissionConnection"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}p.isMDXComponent=!0}}]);