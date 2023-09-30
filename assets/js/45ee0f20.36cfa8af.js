"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[8619],{4137:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var s=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,s,o=function(e,t){if(null==e)return{};var a,s,o={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=s.createContext({}),r=function(e){var t=s.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=r(e.components);return s.createElement(l.Provider,{value:t},e.children)},c="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),c=r(a),u=o,g=c["".concat(l,".").concat(u)]||c[u]||b[u]||n;return a?s.createElement(g,i(i({ref:t},m),{},{components:a})):s.createElement(g,i({ref:t},m))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[c]="string"==typeof e?e:o,i[1]=d;for(var r=2;r<n;r++)i[r]=a[r];return s.createElement.apply(null,i)}return s.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4205:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>m,Details:()=>g,SpecifiedBy:()=>c,assets:()=>r,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var s=a(7462),o=a(7294),n=a(4137);const i={id:"media-submission",title:"MediaSubmission",hide_table_of_contents:!1},d=void 0,l={unversionedId:"objects/media-submission",id:"objects/media-submission",title:"MediaSubmission",description:"Media submission",source:"@site/examples/default/objects/media-submission.mdx",sourceDirName:"objects",slug:"/objects/media-submission",permalink:"/examples/default/objects/media-submission",draft:!1,tags:[],version:"current",frontMatter:{id:"media-submission",title:"MediaSubmission",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MediaSubmissionEdge",permalink:"/examples/default/objects/media-submission-edge"},next:{title:"MediaTag",permalink:"/examples/default/objects/media-tag"}},r={},m=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediasubmissionbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>submitter</b></code><Bullet /><code>User</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionbsubmitterbcodeuser-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>assignee</b></code><Bullet /><code>User</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionbassigneebcodeuser-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>status</b></code><Bullet /><code>SubmissionStatus</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-mediasubmissionbstatusbcodesubmissionstatus-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>submitterStats</b></code><Bullet /><code>Json</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediasubmissionbsubmitterstatsbcodejson-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>notes</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediasubmissionbnotesbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>source</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediasubmissionbsourcebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>changes</b></code><Bullet /><code>[String]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediasubmissionbchangesbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>locked</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediasubmissionblockedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>media</b></code><Bullet /><code>Media</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionbmediabcodemedia-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>submission</b></code><Bullet /><code>Media</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionbsubmissionbcodemedia-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>characters</b></code><Bullet /><code>[MediaSubmissionComparison]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionbcharactersbcodemediasubmissioncomparison--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>staff</b></code><Bullet /><code>[MediaSubmissionComparison]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionbstaffbcodemediasubmissioncomparison--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>studios</b></code><Bullet /><code>[MediaSubmissionComparison]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionbstudiosbcodemediasubmissioncomparison--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>relations</b></code><Bullet /><code>[MediaEdge]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionbrelationsbcodemediaedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>externalLinks</b></code><Bullet /><code>[MediaSubmissionComparison]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionbexternallinksbcodemediasubmissioncomparison--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>createdAt</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediasubmissionbcreatedatbcodeint-",level:4},{value:"Member Of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:d=!1}=e;const[l,r]=(0,o.useState)(d);return(0,n.kt)("details",(0,s.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"}},l?t:a),l&&i)},k={Bullet:m,SpecifiedBy:c,Badge:b,toc:u,Details:g};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"googlebot",content:"noindex"}),(0,n.kt)("meta",{charset:"utf-8"})),(0,n.kt)("p",null,"Media submission"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaSubmission {\n  id: Int!\n  submitter: User\n  assignee: User\n  status: SubmissionStatus\n  submitterStats: Json\n  notes: String\n  source: String\n  changes: [String]\n  locked: Boolean\n  media: Media\n  submission: Media\n  characters: [MediaSubmissionComparison]\n  staff: [MediaSubmissionComparison]\n  studios: [MediaSubmissionComparison]\n  relations: [MediaEdge]\n  externalLinks: [MediaSubmissionComparison]\n  createdAt: Int\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbidbcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"id"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The id of the submission")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbsubmitterbcodeuser-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"submitter"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/objects/user"},(0,n.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"User submitter of the submission")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbassigneebcodeuser-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"assignee"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/objects/user"},(0,n.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Data Mod assigned to handle the submission")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbstatusbcodesubmissionstatus-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"status"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/enums/submission-status"},(0,n.kt)("inlineCode",{parentName:"a"},"SubmissionStatus"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Status of the submission")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbsubmitterstatsbcodejson-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"submitterStats"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/scalars/json"},(0,n.kt)("inlineCode",{parentName:"a"},"Json"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbnotesbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"notes"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbsourcebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"source"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbchangesbcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"changes"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionblockedbcodeboolean-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"locked"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Whether the submission is locked")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbmediabcodemedia-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"media"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/objects/media"},(0,n.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbsubmissionbcodemedia-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"submission"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/objects/media"},(0,n.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbcharactersbcodemediasubmissioncomparison--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"characters"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/objects/media-submission-comparison"},(0,n.kt)("inlineCode",{parentName:"a"},"[MediaSubmissionComparison]"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbstaffbcodemediasubmissioncomparison--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"staff"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/objects/media-submission-comparison"},(0,n.kt)("inlineCode",{parentName:"a"},"[MediaSubmissionComparison]"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbstudiosbcodemediasubmissioncomparison--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"studios"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/objects/media-submission-comparison"},(0,n.kt)("inlineCode",{parentName:"a"},"[MediaSubmissionComparison]"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbrelationsbcodemediaedge--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"relations"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/objects/media-edge"},(0,n.kt)("inlineCode",{parentName:"a"},"[MediaEdge]"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbexternallinksbcodemediasubmissioncomparison--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"externalLinks"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/objects/media-submission-comparison"},(0,n.kt)("inlineCode",{parentName:"a"},"[MediaSubmissionComparison]"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbcreatedatbcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"createdAt"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"member-of"},"Member Of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/examples/default/objects/internal-page"},(0,n.kt)("inlineCode",{parentName:"a"},"InternalPage"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}p.isMDXComponent=!0}}]);