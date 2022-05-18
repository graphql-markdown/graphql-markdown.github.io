"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[3291],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return p}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),c=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return i.createElement(d.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,d=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=c(t),p=a,h=u["".concat(d,".").concat(p)]||u[p]||l[p]||s;return t?i.createElement(h,o(o({ref:n},m),{},{components:t})):i.createElement(h,o({ref:n},m))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=u;var r={};for(var d in n)hasOwnProperty.call(n,d)&&(r[d]=n[d]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var c=2;c<s;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9271:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return l}});var i=t(7462),a=t(3366),s=(t(7294),t(3905)),o=["components"],r={id:"media-submission",title:"MediaSubmission",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,c={unversionedId:"schema/objects/media-submission",id:"schema/objects/media-submission",title:"MediaSubmission",description:"Media submission",source:"@site/docs/schema/objects/media-submission.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/media-submission",permalink:"/schema/objects/media-submission",draft:!1,tags:[],version:"current",frontMatter:{id:"media-submission",title:"MediaSubmission",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},m={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>submitter</code> (<code>User</code>)",id:"submitter-user",level:4},{value:"<code>assignee</code> (<code>User</code>)",id:"assignee-user",level:4},{value:"<code>status</code> (<code>SubmissionStatus</code>)",id:"status-submissionstatus",level:4},{value:"<code>submitterStats</code> (<code>Json</code>)",id:"submitterstats-json",level:4},{value:"<code>notes</code> (<code>String</code>)",id:"notes-string",level:4},{value:"<code>source</code> (<code>String</code>)",id:"source-string",level:4},{value:"<code>changes</code> (<code>String</code>)",id:"changes-string",level:4},{value:"<code>locked</code> (<code>Boolean</code>)",id:"locked-boolean",level:4},{value:"<code>media</code> (<code>Media</code>)",id:"media-media",level:4},{value:"<code>submission</code> (<code>Media</code>)",id:"submission-media",level:4},{value:"<code>characters</code> (<code>MediaSubmissionComparison</code>)",id:"characters-mediasubmissioncomparison",level:4},{value:"<code>staff</code> (<code>MediaSubmissionComparison</code>)",id:"staff-mediasubmissioncomparison",level:4},{value:"<code>studios</code> (<code>MediaSubmissionComparison</code>)",id:"studios-mediasubmissioncomparison",level:4},{value:"<code>relations</code> (<code>MediaEdge</code>)",id:"relations-mediaedge",level:4},{value:"<code>externalLinks</code> (<code>MediaSubmissionComparison</code>)",id:"externallinks-mediasubmissioncomparison",level:4},{value:"<code>createdAt</code> (<code>Int</code>)",id:"createdat-int",level:4}],u={toc:l};function p(e){var n=e.components,t=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Media submission"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaSubmission {\n  id: Int!\n  submitter: User\n  assignee: User\n  status: SubmissionStatus\n  submitterStats: Json\n  notes: String\n  source: String\n  changes: [String]\n  locked: Boolean\n  media: Media\n  submission: Media\n  characters: [MediaSubmissionComparison]\n  staff: [MediaSubmissionComparison]\n  studios: [MediaSubmissionComparison]\n  relations: [MediaEdge]\n  externalLinks: [MediaSubmissionComparison]\n  createdAt: Int\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"id-int"},(0,s.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,s.kt)("p",null,"The id of the submission"),(0,s.kt)("h4",{id:"submitter-user"},(0,s.kt)("inlineCode",{parentName:"h4"},"submitter")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,s.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,s.kt)("p",null,"User submitter of the submission"),(0,s.kt)("h4",{id:"assignee-user"},(0,s.kt)("inlineCode",{parentName:"h4"},"assignee")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,s.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,s.kt)("p",null,"Data Mod assigned to handle the submission"),(0,s.kt)("h4",{id:"status-submissionstatus"},(0,s.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/enums/submission-status"},(0,s.kt)("inlineCode",{parentName:"a"},"SubmissionStatus")),")"),(0,s.kt)("p",null,"Status of the submission"),(0,s.kt)("h4",{id:"submitterstats-json"},(0,s.kt)("inlineCode",{parentName:"h4"},"submitterStats")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/json"},(0,s.kt)("inlineCode",{parentName:"a"},"Json")),")"),(0,s.kt)("h4",{id:"notes-string"},(0,s.kt)("inlineCode",{parentName:"h4"},"notes")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,s.kt)("h4",{id:"source-string"},(0,s.kt)("inlineCode",{parentName:"h4"},"source")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,s.kt)("h4",{id:"changes-string"},(0,s.kt)("inlineCode",{parentName:"h4"},"changes")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,s.kt)("h4",{id:"locked-boolean"},(0,s.kt)("inlineCode",{parentName:"h4"},"locked")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,s.kt)("p",null,"Whether the submission is locked"),(0,s.kt)("h4",{id:"media-media"},(0,s.kt)("inlineCode",{parentName:"h4"},"media")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,s.kt)("inlineCode",{parentName:"a"},"Media")),")"),(0,s.kt)("h4",{id:"submission-media"},(0,s.kt)("inlineCode",{parentName:"h4"},"submission")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,s.kt)("inlineCode",{parentName:"a"},"Media")),")"),(0,s.kt)("h4",{id:"characters-mediasubmissioncomparison"},(0,s.kt)("inlineCode",{parentName:"h4"},"characters")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/media-submission-comparison"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaSubmissionComparison")),")"),(0,s.kt)("h4",{id:"staff-mediasubmissioncomparison"},(0,s.kt)("inlineCode",{parentName:"h4"},"staff")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/media-submission-comparison"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaSubmissionComparison")),")"),(0,s.kt)("h4",{id:"studios-mediasubmissioncomparison"},(0,s.kt)("inlineCode",{parentName:"h4"},"studios")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/media-submission-comparison"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaSubmissionComparison")),")"),(0,s.kt)("h4",{id:"relations-mediaedge"},(0,s.kt)("inlineCode",{parentName:"h4"},"relations")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/media-edge"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaEdge")),")"),(0,s.kt)("h4",{id:"externallinks-mediasubmissioncomparison"},(0,s.kt)("inlineCode",{parentName:"h4"},"externalLinks")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/media-submission-comparison"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaSubmissionComparison")),")"),(0,s.kt)("h4",{id:"createdat-int"},(0,s.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"))}p.isMDXComponent=!0}}]);