"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[1667],{4137:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>k});var d=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);t&&(d=d.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,d)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,d,n=function(e,t){if(null==e)return{};var a,d,n={},l=Object.keys(e);for(d=0;d<l.length;d++)a=l[d],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(d=0;d<l.length;d++)a=l[d],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=d.createContext({}),i=function(e){var t=d.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},o=function(e){var t=i(e.components);return d.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return d.createElement(d.Fragment,{},t)}},u=d.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=i(a),u=n,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return a?d.createElement(k,r(r({ref:t},o),{},{components:a})):d.createElement(k,r({ref:t},o))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:n,r[1]=p;for(var i=2;i<l;i++)r[i]=a[i];return d.createElement.apply(null,r)}return d.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1997:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>c,Bullet:()=>o,Details:()=>k,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>p,default:()=>x,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var d=a(7462),n=a(7294),l=a(4137);const r={id:"boolean",title:"Boolean",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},p=void 0,s={unversionedId:"scalars/boolean",id:"scalars/boolean",title:"Boolean",description:"The Boolean scalar type represents true or false.",source:"@site/examples/default/scalars/boolean.mdx",sourceDirName:"scalars",slug:"/scalars/boolean",permalink:"/examples/default/scalars/boolean",draft:!1,tags:[],version:"current",frontMatter:{id:"boolean",title:"Boolean",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},i={},o=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),u=[{value:"Member of",id:"member-of",level:3}],k=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:p=!1}=e;const[s,i]=(0,n.useState)(p);return(0,l.kt)("details",(0,d.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&r)},y={Bullet:o,SpecifiedBy:m,Badge:c,toc:u,Details:k};function x(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,d.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Boolean")," scalar type represents ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar Boolean\n")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/examples/default/queries/activity"},(0,l.kt)("inlineCode",{parentName:"a"},"Activity"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/activity-reply"},(0,l.kt)("inlineCode",{parentName:"a"},"ActivityReply"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/queries/airing-schedule"},(0,l.kt)("inlineCode",{parentName:"a"},"AiringSchedule"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/character"},(0,l.kt)("inlineCode",{parentName:"a"},"Character"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/queries/character"},(0,l.kt)("inlineCode",{parentName:"a"},"Character"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/character-submission"},(0,l.kt)("inlineCode",{parentName:"a"},"CharacterSubmission"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/deleted"},(0,l.kt)("inlineCode",{parentName:"a"},"Deleted"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/directives/include"},(0,l.kt)("inlineCode",{parentName:"a"},"include"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"directive",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/list-activity"},(0,l.kt)("inlineCode",{parentName:"a"},"ListActivity"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/list-activity-option"},(0,l.kt)("inlineCode",{parentName:"a"},"ListActivityOption"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/inputs/list-activity-option-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ListActivityOptionInput"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/media"},(0,l.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/queries/media"},(0,l.kt)("inlineCode",{parentName:"a"},"Media"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/media-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaEdge"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/media-external-link"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaExternalLink"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/media-list"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaList"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/queries/media-list"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaList"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/media-list-collection"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaListCollection"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/queries/media-list-collection"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaListCollection"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/media-list-group"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaListGroup"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/media-list-options"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaListOptions"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/inputs/media-list-options-input"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaListOptionsInput"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/media-list-type-options"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaListTypeOptions"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/media-rank"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaRank"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/media-submission"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaSubmission"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/media-submission-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaSubmissionEdge"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/media-tag"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaTag"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/media-trend"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaTrend"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/queries/media-trend"},(0,l.kt)("inlineCode",{parentName:"a"},"MediaTrend"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/message-activity"},(0,l.kt)("inlineCode",{parentName:"a"},"MessageActivity"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/queries/notification"},(0,l.kt)("inlineCode",{parentName:"a"},"Notification"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/notification-option"},(0,l.kt)("inlineCode",{parentName:"a"},"NotificationOption"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/inputs/notification-option-input"},(0,l.kt)("inlineCode",{parentName:"a"},"NotificationOptionInput"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/page-info"},(0,l.kt)("inlineCode",{parentName:"a"},"PageInfo"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/queries/recommendation"},(0,l.kt)("inlineCode",{parentName:"a"},"Recommendation"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/report"},(0,l.kt)("inlineCode",{parentName:"a"},"Report"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/review"},(0,l.kt)("inlineCode",{parentName:"a"},"Review"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-activity-reply"},(0,l.kt)("inlineCode",{parentName:"a"},"SaveActivityReply"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-list-activity"},(0,l.kt)("inlineCode",{parentName:"a"},"SaveListActivity"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-media-list-entry"},(0,l.kt)("inlineCode",{parentName:"a"},"SaveMediaListEntry"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-message-activity"},(0,l.kt)("inlineCode",{parentName:"a"},"SaveMessageActivity"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-review"},(0,l.kt)("inlineCode",{parentName:"a"},"SaveReview"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-text-activity"},(0,l.kt)("inlineCode",{parentName:"a"},"SaveTextActivity"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-thread"},(0,l.kt)("inlineCode",{parentName:"a"},"SaveThread"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-thread-comment"},(0,l.kt)("inlineCode",{parentName:"a"},"SaveThreadComment"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/directives/skip"},(0,l.kt)("inlineCode",{parentName:"a"},"skip"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"directive",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/staff"},(0,l.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/queries/staff"},(0,l.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/staff-submission"},(0,l.kt)("inlineCode",{parentName:"a"},"StaffSubmission"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/studio"},(0,l.kt)("inlineCode",{parentName:"a"},"Studio"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/studio-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"StudioEdge"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/text-activity"},(0,l.kt)("inlineCode",{parentName:"a"},"TextActivity"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/thread"},(0,l.kt)("inlineCode",{parentName:"a"},"Thread"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/queries/thread"},(0,l.kt)("inlineCode",{parentName:"a"},"Thread"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-comment"},(0,l.kt)("inlineCode",{parentName:"a"},"ThreadComment"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/mutations/toggle-activity-pin"},(0,l.kt)("inlineCode",{parentName:"a"},"ToggleActivityPin"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/mutations/toggle-activity-subscription"},(0,l.kt)("inlineCode",{parentName:"a"},"ToggleActivitySubscription"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/mutations/toggle-thread-subscription"},(0,l.kt)("inlineCode",{parentName:"a"},"ToggleThreadSubscription"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/mutations/update-media-list-entries"},(0,l.kt)("inlineCode",{parentName:"a"},"UpdateMediaListEntries"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/mutations/update-user"},(0,l.kt)("inlineCode",{parentName:"a"},"UpdateUser"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/queries/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/examples/default/objects/user-options"},(0,l.kt)("inlineCode",{parentName:"a"},"UserOptions"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}x.isMDXComponent=!0}}]);