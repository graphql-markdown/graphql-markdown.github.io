"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2653],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),c=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(m.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),l=c(a),k=r,y=l["".concat(m,".").concat(k)]||l[k]||o[k]||s;return a?n.createElement(y,i(i({ref:t},p),{},{components:a})):n.createElement(y,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=l;var d={};for(var m in t)hasOwnProperty.call(t,m)&&(d[m]=t[m]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}l.displayName="MDXCreateElement"},1320:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>k,Bullet:()=>o,SpecifiedBy:()=>l,assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>m,toc:()=>p});var n=a(7462),r=a(7294),s=a(3905);const i={id:"string",title:"String",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,m={unversionedId:"scalars/string",id:"scalars/string",title:"String",description:"The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",source:"@site/examples/schema/scalars/string.mdx",sourceDirName:"scalars",slug:"/scalars/string",permalink:"/schema/scalars/string",draft:!1,tags:[],version:"current",frontMatter:{id:"string",title:"String",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},p=[{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],o=()=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),l=e=>(0,s.kt)(r.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:p,Bullet:o,SpecifiedBy:l,Badge:k};function x(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"String")," scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar String\n")),(0,s.kt)("h3",{id:"returned-by"},"Returned by"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/schema/queries/genre-collection"},(0,s.kt)("inlineCode",{parentName:"a"},"GenreCollection"))," ",(0,s.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"})),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/schema/objects/activity-like-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"ActivityLikeNotification"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/activity-mention-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"ActivityMentionNotification"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/activity-message-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"ActivityMessageNotification"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/activity-reply"},(0,s.kt)("inlineCode",{parentName:"a"},"ActivityReply"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/activity-reply-like-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"ActivityReplyLikeNotification"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/activity-reply-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"ActivityReplyNotification"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/activity-reply-subscribed-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"ActivityReplySubscribedNotification"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/airing-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"AiringNotification"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/inputs/ani-chart-highlight-input"},(0,s.kt)("inlineCode",{parentName:"a"},"AniChartHighlightInput"))," ",(0,s.kt)(k,{class:"secondary",text:"input",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/character"},(0,s.kt)("inlineCode",{parentName:"a"},"Character"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/character"},(0,s.kt)("inlineCode",{parentName:"a"},"Character"))," ",(0,s.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/character-edge"},(0,s.kt)("inlineCode",{parentName:"a"},"CharacterEdge"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/character-image"},(0,s.kt)("inlineCode",{parentName:"a"},"CharacterImage"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/character-name"},(0,s.kt)("inlineCode",{parentName:"a"},"CharacterName"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/inputs/character-name-input"},(0,s.kt)("inlineCode",{parentName:"a"},"CharacterNameInput"))," ",(0,s.kt)(k,{class:"secondary",text:"input",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/character-submission"},(0,s.kt)("inlineCode",{parentName:"a"},"CharacterSubmission"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/delete-custom-list"},(0,s.kt)("inlineCode",{parentName:"a"},"DeleteCustomList"))," ",(0,s.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/directives/deprecated"},(0,s.kt)("inlineCode",{parentName:"a"},"deprecated"))," ",(0,s.kt)(k,{class:"secondary",text:"directive",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/following-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"FollowingNotification"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/genre-stats"},(0,s.kt)("inlineCode",{parentName:"a"},"GenreStats"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/list-activity"},(0,s.kt)("inlineCode",{parentName:"a"},"ListActivity"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/markdown"},(0,s.kt)("inlineCode",{parentName:"a"},"Markdown"))," ",(0,s.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media"},(0,s.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/media"},(0,s.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,s.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-character"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaCharacter"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-cover-image"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaCoverImage"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-data-change-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaDataChangeNotification"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-deletion-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaDeletionNotification"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-edge"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaEdge"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-external-link"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaExternalLink"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/inputs/media-external-link-input"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaExternalLinkInput"))," ",(0,s.kt)(k,{class:"secondary",text:"input",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-list"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaList"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/media-list"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaList"))," ",(0,s.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/media-list-collection"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaListCollection"))," ",(0,s.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-list-group"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaListGroup"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-list-options"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaListOptions"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/inputs/media-list-options-input"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaListOptionsInput"))," ",(0,s.kt)(k,{class:"secondary",text:"input",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-list-type-options"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaListTypeOptions"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-merge-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaMergeNotification"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-rank"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaRank"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-streaming-episode"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaStreamingEpisode"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-submission"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaSubmission"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-submission-edge"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaSubmissionEdge"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-tag"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaTag"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-title"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaTitle"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/inputs/media-title-input"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaTitleInput"))," ",(0,s.kt)(k,{class:"secondary",text:"input",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-trailer"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaTrailer"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/message-activity"},(0,s.kt)("inlineCode",{parentName:"a"},"MessageActivity"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/mod-action"},(0,s.kt)("inlineCode",{parentName:"a"},"ModAction"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/parsed-markdown"},(0,s.kt)("inlineCode",{parentName:"a"},"ParsedMarkdown"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/related-media-addition-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"RelatedMediaAdditionNotification"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/report"},(0,s.kt)("inlineCode",{parentName:"a"},"Report"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/review"},(0,s.kt)("inlineCode",{parentName:"a"},"Review"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/save-activity-reply"},(0,s.kt)("inlineCode",{parentName:"a"},"SaveActivityReply"))," ",(0,s.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/save-media-list-entry"},(0,s.kt)("inlineCode",{parentName:"a"},"SaveMediaListEntry"))," ",(0,s.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/save-message-activity"},(0,s.kt)("inlineCode",{parentName:"a"},"SaveMessageActivity"))," ",(0,s.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/save-review"},(0,s.kt)("inlineCode",{parentName:"a"},"SaveReview"))," ",(0,s.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/save-text-activity"},(0,s.kt)("inlineCode",{parentName:"a"},"SaveTextActivity"))," ",(0,s.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/save-thread"},(0,s.kt)("inlineCode",{parentName:"a"},"SaveThread"))," ",(0,s.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/save-thread-comment"},(0,s.kt)("inlineCode",{parentName:"a"},"SaveThreadComment"))," ",(0,s.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/staff"},(0,s.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/staff"},(0,s.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,s.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/staff-edge"},(0,s.kt)("inlineCode",{parentName:"a"},"StaffEdge"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/staff-image"},(0,s.kt)("inlineCode",{parentName:"a"},"StaffImage"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/staff-name"},(0,s.kt)("inlineCode",{parentName:"a"},"StaffName"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/inputs/staff-name-input"},(0,s.kt)("inlineCode",{parentName:"a"},"StaffNameInput"))," ",(0,s.kt)(k,{class:"secondary",text:"input",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/staff-role-type"},(0,s.kt)("inlineCode",{parentName:"a"},"StaffRoleType"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/staff-submission"},(0,s.kt)("inlineCode",{parentName:"a"},"StaffSubmission"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/studio"},(0,s.kt)("inlineCode",{parentName:"a"},"Studio"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/studio"},(0,s.kt)("inlineCode",{parentName:"a"},"Studio"))," ",(0,s.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/text-activity"},(0,s.kt)("inlineCode",{parentName:"a"},"TextActivity"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/thread"},(0,s.kt)("inlineCode",{parentName:"a"},"Thread"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/thread"},(0,s.kt)("inlineCode",{parentName:"a"},"Thread"))," ",(0,s.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/thread-category"},(0,s.kt)("inlineCode",{parentName:"a"},"ThreadCategory"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/thread-comment"},(0,s.kt)("inlineCode",{parentName:"a"},"ThreadComment"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/thread-comment-like-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"ThreadCommentLikeNotification"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/thread-comment-mention-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"ThreadCommentMentionNotification"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/thread-comment-reply-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"ThreadCommentReplyNotification"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/thread-comment-subscribed-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"ThreadCommentSubscribedNotification"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/thread-like-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"ThreadLikeNotification"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/update-ani-chart-settings"},(0,s.kt)("inlineCode",{parentName:"a"},"UpdateAniChartSettings"))," ",(0,s.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/update-media-list-entries"},(0,s.kt)("inlineCode",{parentName:"a"},"UpdateMediaListEntries"))," ",(0,s.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/update-user"},(0,s.kt)("inlineCode",{parentName:"a"},"UpdateUser"))," ",(0,s.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user"},(0,s.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/user"},(0,s.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,s.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-avatar"},(0,s.kt)("inlineCode",{parentName:"a"},"UserAvatar"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-genre-statistic"},(0,s.kt)("inlineCode",{parentName:"a"},"UserGenreStatistic"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-length-statistic"},(0,s.kt)("inlineCode",{parentName:"a"},"UserLengthStatistic"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-mod-data"},(0,s.kt)("inlineCode",{parentName:"a"},"UserModData"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-options"},(0,s.kt)("inlineCode",{parentName:"a"},"UserOptions"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-previous-name"},(0,s.kt)("inlineCode",{parentName:"a"},"UserPreviousName"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})))}x.isMDXComponent=!0}}]);