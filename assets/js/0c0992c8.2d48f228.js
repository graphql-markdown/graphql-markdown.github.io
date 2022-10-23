"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2231],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=o.createContext({}),r=function(e){var t=o.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=r(e.components);return o.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=r(a),u=n,f=b["".concat(d,".").concat(u)]||b[u]||m[u]||i;return a?o.createElement(f,s(s({ref:t},c),{},{components:a})):o.createElement(f,s({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=b;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var r=2;r<i;r++)s[r]=a[r];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}b.displayName="MDXCreateElement"},827:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>m,SpecifiedBy:()=>b,assets:()=>r,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=a(7462),n=a(7294),i=a(3905);const s={id:"media-submission-edge",title:"MediaSubmissionEdge",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,d={unversionedId:"objects/media-submission-edge",id:"objects/media-submission-edge",title:"MediaSubmissionEdge",description:"No description",source:"@site/examples/schema/objects/media-submission-edge.mdx",sourceDirName:"objects",slug:"/objects/media-submission-edge",permalink:"/schema/objects/media-submission-edge",draft:!1,tags:[],version:"current",frontMatter:{id:"media-submission-edge",title:"MediaSubmissionEdge",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},r={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmissionEdge.<b>id</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediasubmissionedgebidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmissionEdge.<b>characterRole</b></code><Bullet /><code>CharacterRole</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-mediasubmissionedgebcharacterrolebcodecharacterrole-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmissionEdge.<b>staffRole</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediasubmissionedgebstaffrolebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmissionEdge.<b>roleNotes</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediasubmissionedgebrolenotesbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmissionEdge.<b>dubGroup</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediasubmissionedgebdubgroupbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmissionEdge.<b>characterName</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediasubmissionedgebcharacternamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmissionEdge.<b>isMain</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediasubmissionedgebismainbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmissionEdge.<b>character</b></code><Bullet /><code>Character</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionedgebcharacterbcodecharacter-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmissionEdge.<b>characterSubmission</b></code><Bullet /><code>Character</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionedgebcharactersubmissionbcodecharacter-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmissionEdge.<b>voiceActor</b></code><Bullet /><code>Staff</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionedgebvoiceactorbcodestaff-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmissionEdge.<b>voiceActorSubmission</b></code><Bullet /><code>Staff</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionedgebvoiceactorsubmissionbcodestaff-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmissionEdge.<b>staff</b></code><Bullet /><code>Staff</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionedgebstaffbcodestaff-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmissionEdge.<b>staffSubmission</b></code><Bullet /><code>Staff</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionedgebstaffsubmissionbcodestaff-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmissionEdge.<b>studio</b></code><Bullet /><code>Studio</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionedgebstudiobcodestudio-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmissionEdge.<b>externalLink</b></code><Bullet /><code>MediaExternalLink</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionedgebexternallinkbcodemediaexternallink-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmissionEdge.<b>media</b></code><Bullet /><code>Media</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionedgebmediabcodemedia-",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,i.kt)(n.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:m,SpecifiedBy:b,Badge:u};function g(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaSubmissionEdge {\n  id: Int\n  characterRole: CharacterRole\n  staffRole: String\n  roleNotes: String\n  dubGroup: String\n  characterName: String\n  isMain: Boolean\n  character: Character\n  characterSubmission: Character\n  voiceActor: Staff\n  voiceActorSubmission: Staff\n  staff: Staff\n  staffSubmission: Staff\n  studio: Studio\n  externalLink: MediaExternalLink\n  media: Media\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionedgebidbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmissionEdge.",(0,i.kt)("b",null,"id"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The id of the direct submission")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionedgebcharacterrolebcodecharacterrole-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmissionEdge.",(0,i.kt)("b",null,"characterRole"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/character-role"},(0,i.kt)("inlineCode",{parentName:"a"},"CharacterRole"))," ",(0,i.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionedgebstaffrolebcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmissionEdge.",(0,i.kt)("b",null,"staffRole"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionedgebrolenotesbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmissionEdge.",(0,i.kt)("b",null,"roleNotes"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionedgebdubgroupbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmissionEdge.",(0,i.kt)("b",null,"dubGroup"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionedgebcharacternamebcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmissionEdge.",(0,i.kt)("b",null,"characterName"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionedgebismainbcodeboolean-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmissionEdge.",(0,i.kt)("b",null,"isMain"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionedgebcharacterbcodecharacter-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmissionEdge.",(0,i.kt)("b",null,"character"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/character"},(0,i.kt)("inlineCode",{parentName:"a"},"Character"))," ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionedgebcharactersubmissionbcodecharacter-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmissionEdge.",(0,i.kt)("b",null,"characterSubmission"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/character"},(0,i.kt)("inlineCode",{parentName:"a"},"Character"))," ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionedgebvoiceactorbcodestaff-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmissionEdge.",(0,i.kt)("b",null,"voiceActor"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,i.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionedgebvoiceactorsubmissionbcodestaff-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmissionEdge.",(0,i.kt)("b",null,"voiceActorSubmission"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,i.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionedgebstaffbcodestaff-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmissionEdge.",(0,i.kt)("b",null,"staff"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,i.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionedgebstaffsubmissionbcodestaff-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmissionEdge.",(0,i.kt)("b",null,"staffSubmission"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,i.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionedgebstudiobcodestudio-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmissionEdge.",(0,i.kt)("b",null,"studio"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/studio"},(0,i.kt)("inlineCode",{parentName:"a"},"Studio"))," ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionedgebexternallinkbcodemediaexternallink-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmissionEdge.",(0,i.kt)("b",null,"externalLink"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/media-external-link"},(0,i.kt)("inlineCode",{parentName:"a"},"MediaExternalLink"))," ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionedgebmediabcodemedia-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmissionEdge.",(0,i.kt)("b",null,"media"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,i.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/schema/objects/media-submission-comparison"},(0,i.kt)("inlineCode",{parentName:"a"},"MediaSubmissionComparison"))," ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);