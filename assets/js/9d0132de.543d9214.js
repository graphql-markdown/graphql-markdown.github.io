"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[3291],{3905:function(e,n,i){i.d(n,{Zo:function(){return m},kt:function(){return p}});var t=i(7294);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function s(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?s(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function r(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)i=s[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)i=s[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var d=t.createContext({}),c=function(e){var n=t.useContext(d),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},m=function(e){var n=c(e.components);return t.createElement(d.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,s=e.originalType,d=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=c(i),p=a,h=u["".concat(d,".").concat(p)]||u[p]||l[p]||s;return i?t.createElement(h,o(o({ref:n},m),{},{components:i})):t.createElement(h,o({ref:n},m))}));function p(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=i.length,o=new Array(s);o[0]=u;var r={};for(var d in n)hasOwnProperty.call(n,d)&&(r[d]=n[d]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var c=2;c<s;c++)o[c]=i[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,i)}u.displayName="MDXCreateElement"},9271:function(e,n,i){i.r(n),i.d(n,{assets:function(){return m},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return l}});var t=i(7462),a=i(3366),s=(i(7294),i(3905)),o=["components"],r={id:"media-submission",title:"MediaSubmission"},d=void 0,c={unversionedId:"schema/objects/media-submission",id:"schema/objects/media-submission",title:"MediaSubmission",description:"Media submission",source:"@site/docs/schema/objects/media-submission.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/media-submission",permalink:"/schema/objects/media-submission",tags:[],version:"current",frontMatter:{id:"media-submission",title:"MediaSubmission"},sidebar:"basic",previous:{title:"MediaSubmissionEdge",permalink:"/schema/objects/media-submission-edge"},next:{title:"MediaTag",permalink:"/schema/objects/media-tag"}},m={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>submitter</code> (<code>User</code>)",id:"submitter-user",level:4},{value:"<code>assignee</code> (<code>User</code>)",id:"assignee-user",level:4},{value:"<code>status</code> (<code>SubmissionStatus</code>)",id:"status-submissionstatus",level:4},{value:"<code>submitterStats</code> (<code>Json</code>)",id:"submitterstats-json",level:4},{value:"<code>notes</code> (<code>String</code>)",id:"notes-string",level:4},{value:"<code>source</code> (<code>String</code>)",id:"source-string",level:4},{value:"<code>changes</code> (<code>String</code>)",id:"changes-string",level:4},{value:"<code>locked</code> (<code>Boolean</code>)",id:"locked-boolean",level:4},{value:"<code>media</code> (<code>Media</code>)",id:"media-media",level:4},{value:"<code>submission</code> (<code>Media</code>)",id:"submission-media",level:4},{value:"<code>characters</code> (<code>MediaSubmissionComparison</code>)",id:"characters-mediasubmissioncomparison",level:4},{value:"<code>staff</code> (<code>MediaSubmissionComparison</code>)",id:"staff-mediasubmissioncomparison",level:4},{value:"<code>studios</code> (<code>MediaSubmissionComparison</code>)",id:"studios-mediasubmissioncomparison",level:4},{value:"<code>relations</code> (<code>MediaEdge</code>)",id:"relations-mediaedge",level:4},{value:"<code>externalLinks</code> (<code>MediaSubmissionComparison</code>)",id:"externallinks-mediasubmissioncomparison",level:4},{value:"<code>createdAt</code> (<code>Int</code>)",id:"createdat-int",level:4}],u={toc:l};function p(e){var n=e.components,i=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,t.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Media submission"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaSubmission {\n  id: Int!\n  submitter: User\n  assignee: User\n  status: SubmissionStatus\n  submitterStats: Json\n  notes: String\n  source: String\n  changes: [String]\n  locked: Boolean\n  media: Media\n  submission: Media\n  characters: [MediaSubmissionComparison]\n  staff: [MediaSubmissionComparison]\n  studios: [MediaSubmissionComparison]\n  relations: [MediaEdge]\n  externalLinks: [MediaSubmissionComparison]\n  createdAt: Int\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"id-int"},(0,s.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,s.kt)("p",null,"The id of the submission"),(0,s.kt)("h4",{id:"submitter-user"},(0,s.kt)("inlineCode",{parentName:"h4"},"submitter")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,s.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,s.kt)("p",null,"User submitter of the submission"),(0,s.kt)("h4",{id:"assignee-user"},(0,s.kt)("inlineCode",{parentName:"h4"},"assignee")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,s.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,s.kt)("p",null,"Data Mod assigned to handle the submission"),(0,s.kt)("h4",{id:"status-submissionstatus"},(0,s.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/enums/submission-status"},(0,s.kt)("inlineCode",{parentName:"a"},"SubmissionStatus")),")"),(0,s.kt)("p",null,"Status of the submission"),(0,s.kt)("h4",{id:"submitterstats-json"},(0,s.kt)("inlineCode",{parentName:"h4"},"submitterStats")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/json"},(0,s.kt)("inlineCode",{parentName:"a"},"Json")),")"),(0,s.kt)("h4",{id:"notes-string"},(0,s.kt)("inlineCode",{parentName:"h4"},"notes")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,s.kt)("h4",{id:"source-string"},(0,s.kt)("inlineCode",{parentName:"h4"},"source")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,s.kt)("h4",{id:"changes-string"},(0,s.kt)("inlineCode",{parentName:"h4"},"changes")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,s.kt)("h4",{id:"locked-boolean"},(0,s.kt)("inlineCode",{parentName:"h4"},"locked")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,s.kt)("p",null,"Whether the submission is locked"),(0,s.kt)("h4",{id:"media-media"},(0,s.kt)("inlineCode",{parentName:"h4"},"media")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,s.kt)("inlineCode",{parentName:"a"},"Media")),")"),(0,s.kt)("h4",{id:"submission-media"},(0,s.kt)("inlineCode",{parentName:"h4"},"submission")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,s.kt)("inlineCode",{parentName:"a"},"Media")),")"),(0,s.kt)("h4",{id:"characters-mediasubmissioncomparison"},(0,s.kt)("inlineCode",{parentName:"h4"},"characters")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/media-submission-comparison"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaSubmissionComparison")),")"),(0,s.kt)("h4",{id:"staff-mediasubmissioncomparison"},(0,s.kt)("inlineCode",{parentName:"h4"},"staff")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/media-submission-comparison"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaSubmissionComparison")),")"),(0,s.kt)("h4",{id:"studios-mediasubmissioncomparison"},(0,s.kt)("inlineCode",{parentName:"h4"},"studios")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/media-submission-comparison"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaSubmissionComparison")),")"),(0,s.kt)("h4",{id:"relations-mediaedge"},(0,s.kt)("inlineCode",{parentName:"h4"},"relations")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/media-edge"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaEdge")),")"),(0,s.kt)("h4",{id:"externallinks-mediasubmissioncomparison"},(0,s.kt)("inlineCode",{parentName:"h4"},"externalLinks")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/media-submission-comparison"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaSubmissionComparison")),")"),(0,s.kt)("h4",{id:"createdat-int"},(0,s.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"))}p.isMDXComponent=!0}}]);