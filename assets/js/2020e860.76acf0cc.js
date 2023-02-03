"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7009],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>y});var n=a(7294);function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){m(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,m=function(e,t){if(null==e)return{};var a,n,m={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(m[a]=e[a]);return m}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},o=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,m=e.mdxType,s=e.originalType,d=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=c(a),k=m,y=p["".concat(d,".").concat(k)]||p[k]||l[k]||s;return a?n.createElement(y,r(r({ref:t},o),{},{components:a})):n.createElement(y,r({ref:t},o))}));function y(e,t){var a=arguments,m=t&&t.mdxType;if("string"==typeof e||m){var s=a.length,r=new Array(s);r[0]=k;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:m,r[1]=i;for(var c=2;c<s;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3697:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>k,Bullet:()=>p,SpecifiedBy:()=>l,assets:()=>c,contentTitle:()=>i,default:()=>N,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var n=a(7462),m=a(7294),s=a(3905);const r={id:"int",title:"Int",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,d={unversionedId:"scalars/int",id:"scalars/int",title:"Int",description:"The Int scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",source:"@site/examples/schema/scalars/int.mdx",sourceDirName:"scalars",slug:"/scalars/int",permalink:"/schema/scalars/int",draft:!1,tags:[],version:"current",frontMatter:{id:"int",title:"Int",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},o=[{value:"Member of",id:"member-of",level:3}],p=()=>(0,s.kt)(m.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),l=e=>(0,s.kt)(m.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,s.kt)(m.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:o,Bullet:p,SpecifiedBy:l,Badge:k};function N(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Int")," scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar Int\n")),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/schema/queries/activity"},(0,s.kt)("inlineCode",{parentName:"a"},"Activity"))," ",(0,s.kt)(k,{className:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/activity-like-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"ActivityLikeNotification"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/activity-mention-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"ActivityMentionNotification"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/activity-message-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"ActivityMessageNotification"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/activity-reply"},(0,s.kt)("inlineCode",{parentName:"a"},"ActivityReply"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/activity-reply"},(0,s.kt)("inlineCode",{parentName:"a"},"ActivityReply"))," ",(0,s.kt)(k,{className:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/activity-reply-like-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"ActivityReplyLikeNotification"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/activity-reply-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"ActivityReplyNotification"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/activity-reply-subscribed-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"ActivityReplySubscribedNotification"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/airing-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"AiringNotification"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/airing-progression"},(0,s.kt)("inlineCode",{parentName:"a"},"AiringProgression"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/airing-schedule"},(0,s.kt)("inlineCode",{parentName:"a"},"AiringSchedule"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/airing-schedule"},(0,s.kt)("inlineCode",{parentName:"a"},"AiringSchedule"))," ",(0,s.kt)(k,{className:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/airing-schedule-edge"},(0,s.kt)("inlineCode",{parentName:"a"},"AiringScheduleEdge"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/inputs/airing-schedule-input"},(0,s.kt)("inlineCode",{parentName:"a"},"AiringScheduleInput"))," ",(0,s.kt)(k,{className:"secondary",text:"input",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/inputs/ani-chart-highlight-input"},(0,s.kt)("inlineCode",{parentName:"a"},"AniChartHighlightInput"))," ",(0,s.kt)(k,{className:"secondary",text:"input",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/character"},(0,s.kt)("inlineCode",{parentName:"a"},"Character"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/character"},(0,s.kt)("inlineCode",{parentName:"a"},"Character"))," ",(0,s.kt)(k,{className:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/character-edge"},(0,s.kt)("inlineCode",{parentName:"a"},"CharacterEdge"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/character-submission"},(0,s.kt)("inlineCode",{parentName:"a"},"CharacterSubmission"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/delete-activity"},(0,s.kt)("inlineCode",{parentName:"a"},"DeleteActivity"))," ",(0,s.kt)(k,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/delete-activity-reply"},(0,s.kt)("inlineCode",{parentName:"a"},"DeleteActivityReply"))," ",(0,s.kt)(k,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/delete-media-list-entry"},(0,s.kt)("inlineCode",{parentName:"a"},"DeleteMediaListEntry"))," ",(0,s.kt)(k,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/delete-review"},(0,s.kt)("inlineCode",{parentName:"a"},"DeleteReview"))," ",(0,s.kt)(k,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/delete-thread"},(0,s.kt)("inlineCode",{parentName:"a"},"DeleteThread"))," ",(0,s.kt)(k,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/delete-thread-comment"},(0,s.kt)("inlineCode",{parentName:"a"},"DeleteThreadComment"))," ",(0,s.kt)(k,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/external-link-source-collection"},(0,s.kt)("inlineCode",{parentName:"a"},"ExternalLinkSourceCollection"))," ",(0,s.kt)(k,{className:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/follower"},(0,s.kt)("inlineCode",{parentName:"a"},"Follower"))," ",(0,s.kt)(k,{className:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/following"},(0,s.kt)("inlineCode",{parentName:"a"},"Following"))," ",(0,s.kt)(k,{className:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/following-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"FollowingNotification"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/format-stats"},(0,s.kt)("inlineCode",{parentName:"a"},"FormatStats"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/fuzzy-date"},(0,s.kt)("inlineCode",{parentName:"a"},"FuzzyDate"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/inputs/fuzzy-date-input"},(0,s.kt)("inlineCode",{parentName:"a"},"FuzzyDateInput"))," ",(0,s.kt)(k,{className:"secondary",text:"input",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/genre-stats"},(0,s.kt)("inlineCode",{parentName:"a"},"GenreStats"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/like"},(0,s.kt)("inlineCode",{parentName:"a"},"Like"))," ",(0,s.kt)(k,{className:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/list-activity"},(0,s.kt)("inlineCode",{parentName:"a"},"ListActivity"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/list-score-stats"},(0,s.kt)("inlineCode",{parentName:"a"},"ListScoreStats"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media"},(0,s.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/media"},(0,s.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,s.kt)(k,{className:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-character"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaCharacter"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-data-change-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaDataChangeNotification"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-deletion-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaDeletionNotification"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-edge"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaEdge"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-external-link"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaExternalLink"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/inputs/media-external-link-input"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaExternalLinkInput"))," ",(0,s.kt)(k,{className:"secondary",text:"input",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-list"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaList"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/media-list"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaList"))," ",(0,s.kt)(k,{className:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/media-list-collection"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaListCollection"))," ",(0,s.kt)(k,{className:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-merge-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaMergeNotification"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-rank"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaRank"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-submission"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaSubmission"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-submission-edge"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaSubmissionEdge"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-tag"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaTag"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/media-tag-collection"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaTagCollection"))," ",(0,s.kt)(k,{className:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-trend"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaTrend"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/media-trend"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaTrend"))," ",(0,s.kt)(k,{className:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/message-activity"},(0,s.kt)("inlineCode",{parentName:"a"},"MessageActivity"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/mod-action"},(0,s.kt)("inlineCode",{parentName:"a"},"ModAction"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/page"},(0,s.kt)("inlineCode",{parentName:"a"},"Page"))," ",(0,s.kt)(k,{className:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/page-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PageInfo"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/rate-review"},(0,s.kt)("inlineCode",{parentName:"a"},"RateReview"))," ",(0,s.kt)(k,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/recommendation"},(0,s.kt)("inlineCode",{parentName:"a"},"Recommendation"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/recommendation"},(0,s.kt)("inlineCode",{parentName:"a"},"Recommendation"))," ",(0,s.kt)(k,{className:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/related-media-addition-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"RelatedMediaAdditionNotification"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/report"},(0,s.kt)("inlineCode",{parentName:"a"},"Report"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/review"},(0,s.kt)("inlineCode",{parentName:"a"},"Review"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/review"},(0,s.kt)("inlineCode",{parentName:"a"},"Review"))," ",(0,s.kt)(k,{className:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/revision-history"},(0,s.kt)("inlineCode",{parentName:"a"},"RevisionHistory"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/save-activity-reply"},(0,s.kt)("inlineCode",{parentName:"a"},"SaveActivityReply"))," ",(0,s.kt)(k,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/save-list-activity"},(0,s.kt)("inlineCode",{parentName:"a"},"SaveListActivity"))," ",(0,s.kt)(k,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/save-media-list-entry"},(0,s.kt)("inlineCode",{parentName:"a"},"SaveMediaListEntry"))," ",(0,s.kt)(k,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/save-message-activity"},(0,s.kt)("inlineCode",{parentName:"a"},"SaveMessageActivity"))," ",(0,s.kt)(k,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/save-recommendation"},(0,s.kt)("inlineCode",{parentName:"a"},"SaveRecommendation"))," ",(0,s.kt)(k,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/save-review"},(0,s.kt)("inlineCode",{parentName:"a"},"SaveReview"))," ",(0,s.kt)(k,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/save-text-activity"},(0,s.kt)("inlineCode",{parentName:"a"},"SaveTextActivity"))," ",(0,s.kt)(k,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/save-thread"},(0,s.kt)("inlineCode",{parentName:"a"},"SaveThread"))," ",(0,s.kt)(k,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/save-thread-comment"},(0,s.kt)("inlineCode",{parentName:"a"},"SaveThreadComment"))," ",(0,s.kt)(k,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/score-distribution"},(0,s.kt)("inlineCode",{parentName:"a"},"ScoreDistribution"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/site-trend"},(0,s.kt)("inlineCode",{parentName:"a"},"SiteTrend"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/staff"},(0,s.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/staff"},(0,s.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,s.kt)(k,{className:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/staff-edge"},(0,s.kt)("inlineCode",{parentName:"a"},"StaffEdge"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/staff-stats"},(0,s.kt)("inlineCode",{parentName:"a"},"StaffStats"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/staff-submission"},(0,s.kt)("inlineCode",{parentName:"a"},"StaffSubmission"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/status-distribution"},(0,s.kt)("inlineCode",{parentName:"a"},"StatusDistribution"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/studio"},(0,s.kt)("inlineCode",{parentName:"a"},"Studio"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/studio"},(0,s.kt)("inlineCode",{parentName:"a"},"Studio"))," ",(0,s.kt)(k,{className:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/studio-edge"},(0,s.kt)("inlineCode",{parentName:"a"},"StudioEdge"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/studio-stats"},(0,s.kt)("inlineCode",{parentName:"a"},"StudioStats"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/tag-stats"},(0,s.kt)("inlineCode",{parentName:"a"},"TagStats"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/text-activity"},(0,s.kt)("inlineCode",{parentName:"a"},"TextActivity"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/thread"},(0,s.kt)("inlineCode",{parentName:"a"},"Thread"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/thread"},(0,s.kt)("inlineCode",{parentName:"a"},"Thread"))," ",(0,s.kt)(k,{className:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/thread-category"},(0,s.kt)("inlineCode",{parentName:"a"},"ThreadCategory"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/thread-comment"},(0,s.kt)("inlineCode",{parentName:"a"},"ThreadComment"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/thread-comment"},(0,s.kt)("inlineCode",{parentName:"a"},"ThreadComment"))," ",(0,s.kt)(k,{className:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/thread-comment-like-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"ThreadCommentLikeNotification"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/thread-comment-mention-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"ThreadCommentMentionNotification"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/thread-comment-reply-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"ThreadCommentReplyNotification"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/thread-comment-subscribed-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"ThreadCommentSubscribedNotification"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/thread-like-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"ThreadLikeNotification"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/toggle-activity-pin"},(0,s.kt)("inlineCode",{parentName:"a"},"ToggleActivityPin"))," ",(0,s.kt)(k,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/toggle-activity-subscription"},(0,s.kt)("inlineCode",{parentName:"a"},"ToggleActivitySubscription"))," ",(0,s.kt)(k,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/toggle-favourite"},(0,s.kt)("inlineCode",{parentName:"a"},"ToggleFavourite"))," ",(0,s.kt)(k,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/toggle-follow"},(0,s.kt)("inlineCode",{parentName:"a"},"ToggleFollow"))," ",(0,s.kt)(k,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/toggle-like"},(0,s.kt)("inlineCode",{parentName:"a"},"ToggleLike"))," ",(0,s.kt)(k,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/toggle-like-v2"},(0,s.kt)("inlineCode",{parentName:"a"},"ToggleLikeV2"))," ",(0,s.kt)(k,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/toggle-thread-subscription"},(0,s.kt)("inlineCode",{parentName:"a"},"ToggleThreadSubscription"))," ",(0,s.kt)(k,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/update-favourite-order"},(0,s.kt)("inlineCode",{parentName:"a"},"UpdateFavouriteOrder"))," ",(0,s.kt)(k,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/update-media-list-entries"},(0,s.kt)("inlineCode",{parentName:"a"},"UpdateMediaListEntries"))," ",(0,s.kt)(k,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/update-user"},(0,s.kt)("inlineCode",{parentName:"a"},"UpdateUser"))," ",(0,s.kt)(k,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user"},(0,s.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/user"},(0,s.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,s.kt)(k,{className:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-activity-history"},(0,s.kt)("inlineCode",{parentName:"a"},"UserActivityHistory"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-country-statistic"},(0,s.kt)("inlineCode",{parentName:"a"},"UserCountryStatistic"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-format-statistic"},(0,s.kt)("inlineCode",{parentName:"a"},"UserFormatStatistic"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-genre-statistic"},(0,s.kt)("inlineCode",{parentName:"a"},"UserGenreStatistic"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-length-statistic"},(0,s.kt)("inlineCode",{parentName:"a"},"UserLengthStatistic"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-mod-data"},(0,s.kt)("inlineCode",{parentName:"a"},"UserModData"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-options"},(0,s.kt)("inlineCode",{parentName:"a"},"UserOptions"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-previous-name"},(0,s.kt)("inlineCode",{parentName:"a"},"UserPreviousName"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-release-year-statistic"},(0,s.kt)("inlineCode",{parentName:"a"},"UserReleaseYearStatistic"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-score-statistic"},(0,s.kt)("inlineCode",{parentName:"a"},"UserScoreStatistic"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-staff-statistic"},(0,s.kt)("inlineCode",{parentName:"a"},"UserStaffStatistic"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-start-year-statistic"},(0,s.kt)("inlineCode",{parentName:"a"},"UserStartYearStatistic"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-statistics"},(0,s.kt)("inlineCode",{parentName:"a"},"UserStatistics"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-stats"},(0,s.kt)("inlineCode",{parentName:"a"},"UserStats"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-status-statistic"},(0,s.kt)("inlineCode",{parentName:"a"},"UserStatusStatistic"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-studio-statistic"},(0,s.kt)("inlineCode",{parentName:"a"},"UserStudioStatistic"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-tag-statistic"},(0,s.kt)("inlineCode",{parentName:"a"},"UserTagStatistic"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-voice-actor-statistic"},(0,s.kt)("inlineCode",{parentName:"a"},"UserVoiceActorStatistic"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/year-stats"},(0,s.kt)("inlineCode",{parentName:"a"},"YearStats"))," ",(0,s.kt)(k,{className:"secondary",text:"object",mdxType:"Badge"})))}N.isMDXComponent=!0}}]);