"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3224],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>k});var a=s(7294);function o(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){o(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function l(e,t){if(null==e)return{};var s,a,o=function(e,t){if(null==e)return{};var s,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||(o[s]=e[s]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var d=a.createContext({}),r=function(e){var t=a.useContext(d),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},c=function(e){var t=r(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var s=e.components,o=e.mdxType,n=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=r(s),u=o,k=m["".concat(d,".").concat(u)]||m[u]||b[u]||n;return s?a.createElement(k,i(i({ref:t},c),{},{components:s})):a.createElement(k,i({ref:t},c))}));function k(e,t){var s=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=s.length,i=new Array(n);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var r=2;r<n;r++)i[r]=s[r];return a.createElement.apply(null,i)}return a.createElement.apply(null,s)}u.displayName="MDXCreateElement"},2413:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>b,Bullet:()=>c,Details:()=>k,SpecifiedBy:()=>m,assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var a=s(7462),o=s(7294),n=s(3905);const i={id:"media-submission",title:"MediaSubmission",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,d={unversionedId:"objects/media-submission",id:"objects/media-submission",title:"MediaSubmission",description:"Media submission",source:"@site/examples/schema/objects/media-submission.mdx",sourceDirName:"objects",slug:"/objects/media-submission",permalink:"/schema/objects/media-submission",draft:!1,tags:[],version:"current",frontMatter:{id:"media-submission",title:"MediaSubmission",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},r={},c=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediasubmissionbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>submitter</b></code><Bullet /><code>User</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionbsubmitterbcodeuser-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>assignee</b></code><Bullet /><code>User</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionbassigneebcodeuser-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>status</b></code><Bullet /><code>SubmissionStatus</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-mediasubmissionbstatusbcodesubmissionstatus-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>submitterStats</b></code><Bullet /><code>Json</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediasubmissionbsubmitterstatsbcodejson-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>notes</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediasubmissionbnotesbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>source</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediasubmissionbsourcebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>changes</b></code><Bullet /><code>[String]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediasubmissionbchangesbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>locked</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediasubmissionblockedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>media</b></code><Bullet /><code>Media</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionbmediabcodemedia-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>submission</b></code><Bullet /><code>Media</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionbsubmissionbcodemedia-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>characters</b></code><Bullet /><code>[MediaSubmissionComparison]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionbcharactersbcodemediasubmissioncomparison--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>staff</b></code><Bullet /><code>[MediaSubmissionComparison]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionbstaffbcodemediasubmissioncomparison--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>studios</b></code><Bullet /><code>[MediaSubmissionComparison]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionbstudiosbcodemediasubmissioncomparison--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>relations</b></code><Bullet /><code>[MediaEdge]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionbrelationsbcodemediaedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>externalLinks</b></code><Bullet /><code>[MediaSubmissionComparison]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-mediasubmissionbexternallinksbcodemediasubmissioncomparison--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MediaSubmission.<b>createdAt</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-mediasubmissionbcreatedatbcodeint-",level:4},{value:"Member of",id:"member-of",level:3}],k=e=>{let{dataOpen:t,dataClose:s,children:i,startOpen:l=!1}=e;const[d,r]=(0,o.useState)(l);return(0,n.kt)("details",(0,a.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"}},d?t:s),d&&i)},h={Bullet:c,SpecifiedBy:m,Badge:b,toc:u,Details:k};function p(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Media submission"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaSubmission {\n  id: Int!\n  submitter: User\n  assignee: User\n  status: SubmissionStatus\n  submitterStats: Json\n  notes: String\n  source: String\n  changes: [String]\n  locked: Boolean\n  media: Media\n  submission: Media\n  characters: [MediaSubmissionComparison]\n  staff: [MediaSubmissionComparison]\n  studios: [MediaSubmissionComparison]\n  relations: [MediaEdge]\n  externalLinks: [MediaSubmissionComparison]\n  createdAt: Int\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbidbcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"id"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,n.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The id of the submission")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbsubmitterbcodeuser-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"submitter"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,n.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,n.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"User submitter of the submission")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbassigneebcodeuser-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"assignee"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,n.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,n.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Data Mod assigned to handle the submission")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbstatusbcodesubmissionstatus-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"status"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/enums/submission-status"},(0,n.kt)("inlineCode",{parentName:"a"},"SubmissionStatus"))," ",(0,n.kt)(b,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Status of the submission")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbsubmitterstatsbcodejson-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"submitterStats"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/json"},(0,n.kt)("inlineCode",{parentName:"a"},"Json"))," ",(0,n.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbnotesbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"notes"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbsourcebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"source"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbchangesbcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"changes"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,n.kt)(b,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionblockedbcodeboolean-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"locked"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,n.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Whether the submission is locked")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbmediabcodemedia-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"media"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,n.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,n.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbsubmissionbcodemedia-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"submission"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,n.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,n.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbcharactersbcodemediasubmissioncomparison--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"characters"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/media-submission-comparison"},(0,n.kt)("inlineCode",{parentName:"a"},"[MediaSubmissionComparison]"))," ",(0,n.kt)(b,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbstaffbcodemediasubmissioncomparison--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"staff"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/media-submission-comparison"},(0,n.kt)("inlineCode",{parentName:"a"},"[MediaSubmissionComparison]"))," ",(0,n.kt)(b,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbstudiosbcodemediasubmissioncomparison--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"studios"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/media-submission-comparison"},(0,n.kt)("inlineCode",{parentName:"a"},"[MediaSubmissionComparison]"))," ",(0,n.kt)(b,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbrelationsbcodemediaedge--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"relations"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/media-edge"},(0,n.kt)("inlineCode",{parentName:"a"},"[MediaEdge]"))," ",(0,n.kt)(b,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbexternallinksbcodemediasubmissioncomparison--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"externalLinks"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/media-submission-comparison"},(0,n.kt)("inlineCode",{parentName:"a"},"[MediaSubmissionComparison]"))," ",(0,n.kt)(b,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-mediasubmissionbcreatedatbcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MediaSubmission.",(0,n.kt)("b",null,"createdAt"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/schema/objects/internal-page"},(0,n.kt)("inlineCode",{parentName:"a"},"InternalPage"))," ",(0,n.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})))}p.isMDXComponent=!0}}]);