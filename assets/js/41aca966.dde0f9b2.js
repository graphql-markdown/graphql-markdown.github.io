"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[1102],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>x});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},o="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,d=e.originalType,i=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),o=p(a),k=l,x=o["".concat(i,".").concat(k)]||o[k]||c[k]||d;return a?n.createElement(x,s(s({ref:t},m),{},{components:a})):n.createElement(x,s({ref:t},m))}));function x(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var d=a.length,s=new Array(d);s[0]=k;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[o]="string"==typeof e?e:l,s[1]=r;for(var p=2;p<d;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},496:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>c,Bullet:()=>m,Details:()=>x,SpecifiedBy:()=>o,assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>k});var n=a(7462),l=a(7294),d=a(3905);const s={id:"int",title:"Int",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},r=void 0,i={unversionedId:"scalars/int",id:"scalars/int",title:"Int",description:"The Int scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",source:"@site/examples/default/scalars/int.mdx",sourceDirName:"scalars",slug:"/scalars/int",permalink:"/examples/default/scalars/int",draft:!1,tags:[],version:"current",frontMatter:{id:"int",title:"Int",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},p={},m=()=>(0,d.kt)(l.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),o=e=>(0,d.kt)(l.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,d.kt)(l.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.class},e.text)),k=[{value:"Member of",id:"member-of",level:3}],x=e=>{let{dataOpen:t,dataClose:a,children:s,startOpen:r=!1}=e;const[i,p]=(0,l.useState)(r);return(0,d.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&s)},y={Bullet:m,SpecifiedBy:o,Badge:c,toc:k,Details:x};function u(e){let{components:t,...a}=e;return(0,d.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"The ",(0,d.kt)("inlineCode",{parentName:"p"},"Int")," scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar Int\n")),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/activity"},(0,d.kt)("inlineCode",{parentName:"a"},"Activity"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-like-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ActivityLikeNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-mention-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ActivityMentionNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-message-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ActivityMessageNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-reply"},(0,d.kt)("inlineCode",{parentName:"a"},"ActivityReply"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/activity-reply"},(0,d.kt)("inlineCode",{parentName:"a"},"ActivityReply"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-reply-like-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ActivityReplyLikeNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-reply-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ActivityReplyNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-reply-subscribed-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ActivityReplySubscribedNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/airing-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"AiringNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/airing-progression"},(0,d.kt)("inlineCode",{parentName:"a"},"AiringProgression"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/airing-schedule"},(0,d.kt)("inlineCode",{parentName:"a"},"AiringSchedule"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/airing-schedule"},(0,d.kt)("inlineCode",{parentName:"a"},"AiringSchedule"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/airing-schedule-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"AiringScheduleEdge"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/inputs/airing-schedule-input"},(0,d.kt)("inlineCode",{parentName:"a"},"AiringScheduleInput"))," ",(0,d.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/inputs/ani-chart-highlight-input"},(0,d.kt)("inlineCode",{parentName:"a"},"AniChartHighlightInput"))," ",(0,d.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/character"},(0,d.kt)("inlineCode",{parentName:"a"},"Character"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/character"},(0,d.kt)("inlineCode",{parentName:"a"},"Character"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/character-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"CharacterEdge"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/character-submission"},(0,d.kt)("inlineCode",{parentName:"a"},"CharacterSubmission"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/delete-activity"},(0,d.kt)("inlineCode",{parentName:"a"},"DeleteActivity"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/delete-activity-reply"},(0,d.kt)("inlineCode",{parentName:"a"},"DeleteActivityReply"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/delete-media-list-entry"},(0,d.kt)("inlineCode",{parentName:"a"},"DeleteMediaListEntry"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/delete-review"},(0,d.kt)("inlineCode",{parentName:"a"},"DeleteReview"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/delete-thread"},(0,d.kt)("inlineCode",{parentName:"a"},"DeleteThread"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/delete-thread-comment"},(0,d.kt)("inlineCode",{parentName:"a"},"DeleteThreadComment"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/external-link-source-collection"},(0,d.kt)("inlineCode",{parentName:"a"},"ExternalLinkSourceCollection"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/follower"},(0,d.kt)("inlineCode",{parentName:"a"},"Follower"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/following"},(0,d.kt)("inlineCode",{parentName:"a"},"Following"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/following-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"FollowingNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/format-stats"},(0,d.kt)("inlineCode",{parentName:"a"},"FormatStats"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/fuzzy-date"},(0,d.kt)("inlineCode",{parentName:"a"},"FuzzyDate"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/inputs/fuzzy-date-input"},(0,d.kt)("inlineCode",{parentName:"a"},"FuzzyDateInput"))," ",(0,d.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/genre-stats"},(0,d.kt)("inlineCode",{parentName:"a"},"GenreStats"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/like"},(0,d.kt)("inlineCode",{parentName:"a"},"Like"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/list-activity"},(0,d.kt)("inlineCode",{parentName:"a"},"ListActivity"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/list-score-stats"},(0,d.kt)("inlineCode",{parentName:"a"},"ListScoreStats"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media"},(0,d.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/media"},(0,d.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-character"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaCharacter"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-data-change-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaDataChangeNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-deletion-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaDeletionNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaEdge"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-external-link"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaExternalLink"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/inputs/media-external-link-input"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaExternalLinkInput"))," ",(0,d.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-list"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaList"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/media-list"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaList"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/media-list-collection"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaListCollection"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-merge-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaMergeNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-rank"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaRank"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-submission"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaSubmission"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-submission-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaSubmissionEdge"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-tag"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaTag"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/media-tag-collection"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaTagCollection"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-trend"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaTrend"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/media-trend"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaTrend"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/message-activity"},(0,d.kt)("inlineCode",{parentName:"a"},"MessageActivity"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/mod-action"},(0,d.kt)("inlineCode",{parentName:"a"},"ModAction"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/page"},(0,d.kt)("inlineCode",{parentName:"a"},"Page"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/page-info"},(0,d.kt)("inlineCode",{parentName:"a"},"PageInfo"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/rate-review"},(0,d.kt)("inlineCode",{parentName:"a"},"RateReview"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/recommendation"},(0,d.kt)("inlineCode",{parentName:"a"},"Recommendation"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/recommendation"},(0,d.kt)("inlineCode",{parentName:"a"},"Recommendation"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/related-media-addition-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"RelatedMediaAdditionNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/report"},(0,d.kt)("inlineCode",{parentName:"a"},"Report"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/review"},(0,d.kt)("inlineCode",{parentName:"a"},"Review"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/review"},(0,d.kt)("inlineCode",{parentName:"a"},"Review"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/revision-history"},(0,d.kt)("inlineCode",{parentName:"a"},"RevisionHistory"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-activity-reply"},(0,d.kt)("inlineCode",{parentName:"a"},"SaveActivityReply"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-list-activity"},(0,d.kt)("inlineCode",{parentName:"a"},"SaveListActivity"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-media-list-entry"},(0,d.kt)("inlineCode",{parentName:"a"},"SaveMediaListEntry"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-message-activity"},(0,d.kt)("inlineCode",{parentName:"a"},"SaveMessageActivity"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-recommendation"},(0,d.kt)("inlineCode",{parentName:"a"},"SaveRecommendation"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-review"},(0,d.kt)("inlineCode",{parentName:"a"},"SaveReview"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-text-activity"},(0,d.kt)("inlineCode",{parentName:"a"},"SaveTextActivity"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-thread"},(0,d.kt)("inlineCode",{parentName:"a"},"SaveThread"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-thread-comment"},(0,d.kt)("inlineCode",{parentName:"a"},"SaveThreadComment"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/score-distribution"},(0,d.kt)("inlineCode",{parentName:"a"},"ScoreDistribution"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/site-trend"},(0,d.kt)("inlineCode",{parentName:"a"},"SiteTrend"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/staff"},(0,d.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/staff"},(0,d.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/staff-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"StaffEdge"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/staff-stats"},(0,d.kt)("inlineCode",{parentName:"a"},"StaffStats"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/staff-submission"},(0,d.kt)("inlineCode",{parentName:"a"},"StaffSubmission"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/status-distribution"},(0,d.kt)("inlineCode",{parentName:"a"},"StatusDistribution"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/studio"},(0,d.kt)("inlineCode",{parentName:"a"},"Studio"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/studio"},(0,d.kt)("inlineCode",{parentName:"a"},"Studio"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/studio-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"StudioEdge"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/studio-stats"},(0,d.kt)("inlineCode",{parentName:"a"},"StudioStats"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/tag-stats"},(0,d.kt)("inlineCode",{parentName:"a"},"TagStats"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/text-activity"},(0,d.kt)("inlineCode",{parentName:"a"},"TextActivity"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/thread"},(0,d.kt)("inlineCode",{parentName:"a"},"Thread"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/thread"},(0,d.kt)("inlineCode",{parentName:"a"},"Thread"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-category"},(0,d.kt)("inlineCode",{parentName:"a"},"ThreadCategory"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-comment"},(0,d.kt)("inlineCode",{parentName:"a"},"ThreadComment"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/thread-comment"},(0,d.kt)("inlineCode",{parentName:"a"},"ThreadComment"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-comment-like-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ThreadCommentLikeNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-comment-mention-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ThreadCommentMentionNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-comment-reply-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ThreadCommentReplyNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-comment-subscribed-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ThreadCommentSubscribedNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-like-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ThreadLikeNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/toggle-activity-pin"},(0,d.kt)("inlineCode",{parentName:"a"},"ToggleActivityPin"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/toggle-activity-subscription"},(0,d.kt)("inlineCode",{parentName:"a"},"ToggleActivitySubscription"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/toggle-favourite"},(0,d.kt)("inlineCode",{parentName:"a"},"ToggleFavourite"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/toggle-follow"},(0,d.kt)("inlineCode",{parentName:"a"},"ToggleFollow"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/toggle-like"},(0,d.kt)("inlineCode",{parentName:"a"},"ToggleLike"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/toggle-like-v2"},(0,d.kt)("inlineCode",{parentName:"a"},"ToggleLikeV2"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/toggle-thread-subscription"},(0,d.kt)("inlineCode",{parentName:"a"},"ToggleThreadSubscription"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/update-favourite-order"},(0,d.kt)("inlineCode",{parentName:"a"},"UpdateFavouriteOrder"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/update-media-list-entries"},(0,d.kt)("inlineCode",{parentName:"a"},"UpdateMediaListEntries"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/update-user"},(0,d.kt)("inlineCode",{parentName:"a"},"UpdateUser"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/user"},(0,d.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/user"},(0,d.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/user-activity-history"},(0,d.kt)("inlineCode",{parentName:"a"},"UserActivityHistory"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/user-country-statistic"},(0,d.kt)("inlineCode",{parentName:"a"},"UserCountryStatistic"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/user-format-statistic"},(0,d.kt)("inlineCode",{parentName:"a"},"UserFormatStatistic"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/user-genre-statistic"},(0,d.kt)("inlineCode",{parentName:"a"},"UserGenreStatistic"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/user-length-statistic"},(0,d.kt)("inlineCode",{parentName:"a"},"UserLengthStatistic"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/user-mod-data"},(0,d.kt)("inlineCode",{parentName:"a"},"UserModData"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/user-options"},(0,d.kt)("inlineCode",{parentName:"a"},"UserOptions"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/user-previous-name"},(0,d.kt)("inlineCode",{parentName:"a"},"UserPreviousName"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/user-release-year-statistic"},(0,d.kt)("inlineCode",{parentName:"a"},"UserReleaseYearStatistic"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/user-score-statistic"},(0,d.kt)("inlineCode",{parentName:"a"},"UserScoreStatistic"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/user-staff-statistic"},(0,d.kt)("inlineCode",{parentName:"a"},"UserStaffStatistic"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/user-start-year-statistic"},(0,d.kt)("inlineCode",{parentName:"a"},"UserStartYearStatistic"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/user-statistics"},(0,d.kt)("inlineCode",{parentName:"a"},"UserStatistics"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/user-stats"},(0,d.kt)("inlineCode",{parentName:"a"},"UserStats"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/user-status-statistic"},(0,d.kt)("inlineCode",{parentName:"a"},"UserStatusStatistic"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/user-studio-statistic"},(0,d.kt)("inlineCode",{parentName:"a"},"UserStudioStatistic"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/user-tag-statistic"},(0,d.kt)("inlineCode",{parentName:"a"},"UserTagStatistic"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/user-voice-actor-statistic"},(0,d.kt)("inlineCode",{parentName:"a"},"UserVoiceActorStatistic"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/year-stats"},(0,d.kt)("inlineCode",{parentName:"a"},"YearStats"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);