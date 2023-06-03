"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[1451],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>x});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},o="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,d=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),o=i(a),k=r,x=o["".concat(s,".").concat(k)]||o[k]||c[k]||d;return a?n.createElement(x,l(l({ref:t},m),{},{components:a})):n.createElement(x,l({ref:t},m))}));function x(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=a.length,l=new Array(d);l[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[o]="string"==typeof e?e:r,l[1]=p;for(var i=2;i<d;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7422:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>c,Bullet:()=>m,Details:()=>x,SpecifiedBy:()=>o,assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>k});var n=a(7462),r=a(7294),d=a(3905);const l={id:"string",title:"String",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},p=void 0,s={unversionedId:"scalars/string",id:"scalars/string",title:"String",description:"The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",source:"@site/examples/default/scalars/string.mdx",sourceDirName:"scalars",slug:"/scalars/string",permalink:"/examples/default/scalars/string",draft:!1,tags:[],version:"current",frontMatter:{id:"string",title:"String",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},i={},m=()=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),o=e=>(0,d.kt)(r.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),k=[{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],x=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:p=!1}=e;const[s,i]=(0,r.useState)(p);return(0,d.kt)("details",(0,n.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&l)},y={Bullet:m,SpecifiedBy:o,Badge:c,toc:k,Details:x};function u(e){let{components:t,...a}=e;return(0,d.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"The ",(0,d.kt)("inlineCode",{parentName:"p"},"String")," scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar String\n")),(0,d.kt)("h3",{id:"returned-by"},"Returned by"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/genre-collection"},(0,d.kt)("inlineCode",{parentName:"a"},"GenreCollection"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"})),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-like-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ActivityLikeNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-mention-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ActivityMentionNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-message-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ActivityMessageNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-reply"},(0,d.kt)("inlineCode",{parentName:"a"},"ActivityReply"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-reply-like-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ActivityReplyLikeNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-reply-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ActivityReplyNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-reply-subscribed-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ActivityReplySubscribedNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/airing-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"AiringNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/inputs/ani-chart-highlight-input"},(0,d.kt)("inlineCode",{parentName:"a"},"AniChartHighlightInput"))," ",(0,d.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/character"},(0,d.kt)("inlineCode",{parentName:"a"},"Character"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/character"},(0,d.kt)("inlineCode",{parentName:"a"},"Character"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/character-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"CharacterEdge"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/character-image"},(0,d.kt)("inlineCode",{parentName:"a"},"CharacterImage"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/character-name"},(0,d.kt)("inlineCode",{parentName:"a"},"CharacterName"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/inputs/character-name-input"},(0,d.kt)("inlineCode",{parentName:"a"},"CharacterNameInput"))," ",(0,d.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/character-submission"},(0,d.kt)("inlineCode",{parentName:"a"},"CharacterSubmission"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/delete-custom-list"},(0,d.kt)("inlineCode",{parentName:"a"},"DeleteCustomList"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/directives/deprecated"},(0,d.kt)("inlineCode",{parentName:"a"},"deprecated"))," ",(0,d.kt)(c,{class:"secondary",text:"directive",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/following-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"FollowingNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/genre-stats"},(0,d.kt)("inlineCode",{parentName:"a"},"GenreStats"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/list-activity"},(0,d.kt)("inlineCode",{parentName:"a"},"ListActivity"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/markdown"},(0,d.kt)("inlineCode",{parentName:"a"},"Markdown"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media"},(0,d.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/media"},(0,d.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-character"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaCharacter"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-cover-image"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaCoverImage"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-data-change-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaDataChangeNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-deletion-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaDeletionNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaEdge"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-external-link"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaExternalLink"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/inputs/media-external-link-input"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaExternalLinkInput"))," ",(0,d.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-list"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaList"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/media-list"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaList"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/media-list-collection"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaListCollection"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-list-group"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaListGroup"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-list-options"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaListOptions"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/inputs/media-list-options-input"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaListOptionsInput"))," ",(0,d.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-list-type-options"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaListTypeOptions"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-merge-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaMergeNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-rank"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaRank"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-streaming-episode"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaStreamingEpisode"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-submission"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaSubmission"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-submission-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaSubmissionEdge"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-tag"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaTag"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-title"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaTitle"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/inputs/media-title-input"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaTitleInput"))," ",(0,d.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/media-trailer"},(0,d.kt)("inlineCode",{parentName:"a"},"MediaTrailer"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/message-activity"},(0,d.kt)("inlineCode",{parentName:"a"},"MessageActivity"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/mod-action"},(0,d.kt)("inlineCode",{parentName:"a"},"ModAction"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/parsed-markdown"},(0,d.kt)("inlineCode",{parentName:"a"},"ParsedMarkdown"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/related-media-addition-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"RelatedMediaAdditionNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/report"},(0,d.kt)("inlineCode",{parentName:"a"},"Report"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/review"},(0,d.kt)("inlineCode",{parentName:"a"},"Review"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-activity-reply"},(0,d.kt)("inlineCode",{parentName:"a"},"SaveActivityReply"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-media-list-entry"},(0,d.kt)("inlineCode",{parentName:"a"},"SaveMediaListEntry"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-message-activity"},(0,d.kt)("inlineCode",{parentName:"a"},"SaveMessageActivity"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-review"},(0,d.kt)("inlineCode",{parentName:"a"},"SaveReview"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-text-activity"},(0,d.kt)("inlineCode",{parentName:"a"},"SaveTextActivity"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-thread"},(0,d.kt)("inlineCode",{parentName:"a"},"SaveThread"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-thread-comment"},(0,d.kt)("inlineCode",{parentName:"a"},"SaveThreadComment"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/staff"},(0,d.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/staff"},(0,d.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/staff-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"StaffEdge"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/staff-image"},(0,d.kt)("inlineCode",{parentName:"a"},"StaffImage"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/staff-name"},(0,d.kt)("inlineCode",{parentName:"a"},"StaffName"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/inputs/staff-name-input"},(0,d.kt)("inlineCode",{parentName:"a"},"StaffNameInput"))," ",(0,d.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/staff-role-type"},(0,d.kt)("inlineCode",{parentName:"a"},"StaffRoleType"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/staff-submission"},(0,d.kt)("inlineCode",{parentName:"a"},"StaffSubmission"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/studio"},(0,d.kt)("inlineCode",{parentName:"a"},"Studio"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/studio"},(0,d.kt)("inlineCode",{parentName:"a"},"Studio"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/text-activity"},(0,d.kt)("inlineCode",{parentName:"a"},"TextActivity"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/thread"},(0,d.kt)("inlineCode",{parentName:"a"},"Thread"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/thread"},(0,d.kt)("inlineCode",{parentName:"a"},"Thread"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-category"},(0,d.kt)("inlineCode",{parentName:"a"},"ThreadCategory"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-comment"},(0,d.kt)("inlineCode",{parentName:"a"},"ThreadComment"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-comment-like-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ThreadCommentLikeNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-comment-mention-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ThreadCommentMentionNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-comment-reply-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ThreadCommentReplyNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-comment-subscribed-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ThreadCommentSubscribedNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-like-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ThreadLikeNotification"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/update-ani-chart-settings"},(0,d.kt)("inlineCode",{parentName:"a"},"UpdateAniChartSettings"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/update-media-list-entries"},(0,d.kt)("inlineCode",{parentName:"a"},"UpdateMediaListEntries"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/update-user"},(0,d.kt)("inlineCode",{parentName:"a"},"UpdateUser"))," ",(0,d.kt)(c,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/user"},(0,d.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/user"},(0,d.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,d.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/user-avatar"},(0,d.kt)("inlineCode",{parentName:"a"},"UserAvatar"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/user-genre-statistic"},(0,d.kt)("inlineCode",{parentName:"a"},"UserGenreStatistic"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/user-length-statistic"},(0,d.kt)("inlineCode",{parentName:"a"},"UserLengthStatistic"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/user-mod-data"},(0,d.kt)("inlineCode",{parentName:"a"},"UserModData"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/user-options"},(0,d.kt)("inlineCode",{parentName:"a"},"UserOptions"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/user-previous-name"},(0,d.kt)("inlineCode",{parentName:"a"},"UserPreviousName"))," ",(0,d.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);