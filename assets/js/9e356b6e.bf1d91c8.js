"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[1419],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,d=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),l=m(a),k=r,y=l["".concat(d,".").concat(k)]||l[k]||c[k]||s;return a?n.createElement(y,i(i({ref:t},o),{},{components:a})):n.createElement(y,i({ref:t},o))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=k;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[l]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<s;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7695:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>k,Bullet:()=>l,SpecifiedBy:()=>c,assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var n=a(7462),r=a(7294),s=a(3905);const i={id:"boolean",title:"Boolean",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},p=void 0,d={unversionedId:"scalars/boolean",id:"scalars/boolean",title:"Boolean",description:"The Boolean scalar type represents true or false.",source:"@site/examples/schema/scalars/boolean.mdx",sourceDirName:"scalars",slug:"/scalars/boolean",permalink:"/schema/scalars/boolean",draft:!1,tags:[],version:"current",frontMatter:{id:"boolean",title:"Boolean",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},m={},o=[{value:"Member of",id:"member-of",level:3}],l=()=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,s.kt)(r.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:o,Bullet:l,SpecifiedBy:c,Badge:k};function u(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Boolean")," scalar type represents ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar Boolean\n")),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/schema/queries/activity"},(0,s.kt)("inlineCode",{parentName:"a"},"Activity"))," ",(0,s.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/activity-reply"},(0,s.kt)("inlineCode",{parentName:"a"},"ActivityReply"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/airing-schedule"},(0,s.kt)("inlineCode",{parentName:"a"},"AiringSchedule"))," ",(0,s.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/character"},(0,s.kt)("inlineCode",{parentName:"a"},"Character"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/character"},(0,s.kt)("inlineCode",{parentName:"a"},"Character"))," ",(0,s.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/character-submission"},(0,s.kt)("inlineCode",{parentName:"a"},"CharacterSubmission"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/deleted"},(0,s.kt)("inlineCode",{parentName:"a"},"Deleted"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/directives/include"},(0,s.kt)("inlineCode",{parentName:"a"},"include"))," ",(0,s.kt)(k,{class:"secondary",text:"directive",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/list-activity"},(0,s.kt)("inlineCode",{parentName:"a"},"ListActivity"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/list-activity-option"},(0,s.kt)("inlineCode",{parentName:"a"},"ListActivityOption"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/inputs/list-activity-option-input"},(0,s.kt)("inlineCode",{parentName:"a"},"ListActivityOptionInput"))," ",(0,s.kt)(k,{class:"secondary",text:"input",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media"},(0,s.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/media"},(0,s.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,s.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-edge"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaEdge"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-external-link"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaExternalLink"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-list"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaList"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/media-list"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaList"))," ",(0,s.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-list-collection"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaListCollection"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/media-list-collection"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaListCollection"))," ",(0,s.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-list-group"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaListGroup"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-list-options"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaListOptions"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/inputs/media-list-options-input"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaListOptionsInput"))," ",(0,s.kt)(k,{class:"secondary",text:"input",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-list-type-options"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaListTypeOptions"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-rank"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaRank"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-submission"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaSubmission"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-submission-edge"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaSubmissionEdge"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-tag"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaTag"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/media-trend"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaTrend"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/media-trend"},(0,s.kt)("inlineCode",{parentName:"a"},"MediaTrend"))," ",(0,s.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/message-activity"},(0,s.kt)("inlineCode",{parentName:"a"},"MessageActivity"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/notification"},(0,s.kt)("inlineCode",{parentName:"a"},"Notification"))," ",(0,s.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/notification-option"},(0,s.kt)("inlineCode",{parentName:"a"},"NotificationOption"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/inputs/notification-option-input"},(0,s.kt)("inlineCode",{parentName:"a"},"NotificationOptionInput"))," ",(0,s.kt)(k,{class:"secondary",text:"input",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/page-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PageInfo"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/recommendation"},(0,s.kt)("inlineCode",{parentName:"a"},"Recommendation"))," ",(0,s.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/report"},(0,s.kt)("inlineCode",{parentName:"a"},"Report"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/review"},(0,s.kt)("inlineCode",{parentName:"a"},"Review"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/save-activity-reply"},(0,s.kt)("inlineCode",{parentName:"a"},"SaveActivityReply"))," ",(0,s.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/save-list-activity"},(0,s.kt)("inlineCode",{parentName:"a"},"SaveListActivity"))," ",(0,s.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/save-media-list-entry"},(0,s.kt)("inlineCode",{parentName:"a"},"SaveMediaListEntry"))," ",(0,s.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/save-message-activity"},(0,s.kt)("inlineCode",{parentName:"a"},"SaveMessageActivity"))," ",(0,s.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/save-review"},(0,s.kt)("inlineCode",{parentName:"a"},"SaveReview"))," ",(0,s.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/save-text-activity"},(0,s.kt)("inlineCode",{parentName:"a"},"SaveTextActivity"))," ",(0,s.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/save-thread"},(0,s.kt)("inlineCode",{parentName:"a"},"SaveThread"))," ",(0,s.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/save-thread-comment"},(0,s.kt)("inlineCode",{parentName:"a"},"SaveThreadComment"))," ",(0,s.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/directives/skip"},(0,s.kt)("inlineCode",{parentName:"a"},"skip"))," ",(0,s.kt)(k,{class:"secondary",text:"directive",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/staff"},(0,s.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/staff"},(0,s.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,s.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/staff-submission"},(0,s.kt)("inlineCode",{parentName:"a"},"StaffSubmission"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/studio"},(0,s.kt)("inlineCode",{parentName:"a"},"Studio"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/studio-edge"},(0,s.kt)("inlineCode",{parentName:"a"},"StudioEdge"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/text-activity"},(0,s.kt)("inlineCode",{parentName:"a"},"TextActivity"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/thread"},(0,s.kt)("inlineCode",{parentName:"a"},"Thread"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/thread"},(0,s.kt)("inlineCode",{parentName:"a"},"Thread"))," ",(0,s.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/thread-comment"},(0,s.kt)("inlineCode",{parentName:"a"},"ThreadComment"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/toggle-activity-pin"},(0,s.kt)("inlineCode",{parentName:"a"},"ToggleActivityPin"))," ",(0,s.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/toggle-activity-subscription"},(0,s.kt)("inlineCode",{parentName:"a"},"ToggleActivitySubscription"))," ",(0,s.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/toggle-thread-subscription"},(0,s.kt)("inlineCode",{parentName:"a"},"ToggleThreadSubscription"))," ",(0,s.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/update-media-list-entries"},(0,s.kt)("inlineCode",{parentName:"a"},"UpdateMediaListEntries"))," ",(0,s.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/update-user"},(0,s.kt)("inlineCode",{parentName:"a"},"UpdateUser"))," ",(0,s.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user"},(0,s.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/queries/user"},(0,s.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,s.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/objects/user-options"},(0,s.kt)("inlineCode",{parentName:"a"},"UserOptions"))," ",(0,s.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);