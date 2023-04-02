"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2999],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),r=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=r(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=r(a),k=l,p=m["".concat(c,".").concat(k)]||m[k]||y[k]||s;return a?n.createElement(p,o(o({ref:t},d),{},{components:a})):n.createElement(p,o({ref:t},d))}));function p(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=a.length,o=new Array(s);o[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:l,o[1]=i;for(var r=2;r<s;r++)o[r]=a[r];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2272:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>d,Details:()=>p,SpecifiedBy:()=>m,assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>k});var n=a(7462),l=a(7294),s=a(3905);const o={id:"message-activity",title:"MessageActivity",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,c={unversionedId:"objects/message-activity",id:"objects/message-activity",title:"MessageActivity",description:"User message activity",source:"@site/examples/schema/objects/message-activity.mdx",sourceDirName:"objects",slug:"/objects/message-activity",permalink:"/schema/objects/message-activity",draft:!1,tags:[],version:"current",frontMatter:{id:"message-activity",title:"MessageActivity",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},r={},d=()=>(0,s.kt)(l.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,s.kt)(l.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,s.kt)(l.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),k=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MessageActivity.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-messageactivitybidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MessageActivity.<b>recipientId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-messageactivitybrecipientidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MessageActivity.<b>messengerId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-messageactivitybmessengeridbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MessageActivity.<b>type</b></code><Bullet /><code>ActivityType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-messageactivitybtypebcodeactivitytype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MessageActivity.<b>replyCount</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-messageactivitybreplycountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MessageActivity.<b>message</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-messageactivitybmessagebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MessageActivity.<b>isLocked</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-messageactivitybislockedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MessageActivity.<b>isSubscribed</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-messageactivitybissubscribedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MessageActivity.<b>likeCount</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-messageactivityblikecountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MessageActivity.<b>isLiked</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-messageactivitybislikedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MessageActivity.<b>isPrivate</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-messageactivitybisprivatebcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MessageActivity.<b>siteUrl</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-messageactivitybsiteurlbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MessageActivity.<b>createdAt</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-messageactivitybcreatedatbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MessageActivity.<b>recipient</b></code><Bullet /><code>User</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-messageactivitybrecipientbcodeuser-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MessageActivity.<b>messenger</b></code><Bullet /><code>User</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-messageactivitybmessengerbcodeuser-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MessageActivity.<b>replies</b></code><Bullet /><code>[ActivityReply]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-messageactivitybrepliesbcodeactivityreply--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MessageActivity.<b>likes</b></code><Bullet /><code>[User]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-messageactivityblikesbcodeuser--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],p=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:i=!1}=e;const[c,r]=(0,l.useState)(i);return(0,s.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&o)},g={Bullet:d,SpecifiedBy:m,Badge:y,toc:k,Details:p};function u(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"User message activity"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type MessageActivity {\n  id: Int!\n  recipientId: Int\n  messengerId: Int\n  type: ActivityType\n  replyCount: Int!\n  message(asHtml: Boolean): String\n  isLocked: Boolean\n  isSubscribed: Boolean\n  likeCount: Int!\n  isLiked: Boolean\n  isPrivate: Boolean\n  siteUrl: String\n  createdAt: Int!\n  recipient: User\n  messenger: User\n  replies: [ActivityReply]\n  likes: [User]\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-messageactivitybidbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MessageActivity.",(0,s.kt)("b",null,"id"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,s.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The id of the activity")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-messageactivitybrecipientidbcodeint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MessageActivity.",(0,s.kt)("b",null,"recipientId"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The user id of the activity's recipient")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-messageactivitybmessengeridbcodeint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MessageActivity.",(0,s.kt)("b",null,"messengerId"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The user id of the activity's sender")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-messageactivitybtypebcodeactivitytype-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MessageActivity.",(0,s.kt)("b",null,"type"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/enums/activity-type"},(0,s.kt)("inlineCode",{parentName:"a"},"ActivityType"))," ",(0,s.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The type of the activity")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-messageactivitybreplycountbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MessageActivity.",(0,s.kt)("b",null,"replyCount"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,s.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The number of activity replies")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-messageactivitybmessagebcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MessageActivity.",(0,s.kt)("b",null,"message"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The message text (Markdown)"),(0,s.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-messageactivitymessagebashtmlbcodeboolean-"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MessageActivity.message.",(0,s.kt)("b",null,"asHtml"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,s.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("p",{parentName:"blockquote"},"Return the string in pre-parsed html instead of markdown")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-messageactivitybislockedbcodeboolean-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MessageActivity.",(0,s.kt)("b",null,"isLocked"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,s.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"If the activity is locked and can receive replies")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-messageactivitybissubscribedbcodeboolean-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MessageActivity.",(0,s.kt)("b",null,"isSubscribed"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,s.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"If the currently authenticated user is subscribed to the activity")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-messageactivityblikecountbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MessageActivity.",(0,s.kt)("b",null,"likeCount"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,s.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The amount of likes the activity has")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-messageactivitybislikedbcodeboolean-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MessageActivity.",(0,s.kt)("b",null,"isLiked"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,s.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"If the currently authenticated user liked the activity")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-messageactivitybisprivatebcodeboolean-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MessageActivity.",(0,s.kt)("b",null,"isPrivate"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,s.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"If the message is private and only viewable to the sender and recipients")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-messageactivitybsiteurlbcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MessageActivity.",(0,s.kt)("b",null,"siteUrl"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The url for the activity page on the AniList website")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-messageactivitybcreatedatbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MessageActivity.",(0,s.kt)("b",null,"createdAt"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,s.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The time the activity was created at")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-messageactivitybrecipientbcodeuser-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MessageActivity.",(0,s.kt)("b",null,"recipient"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,s.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,s.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The user who the activity message was sent to")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-messageactivitybmessengerbcodeuser-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MessageActivity.",(0,s.kt)("b",null,"messenger"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,s.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,s.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The user who sent the activity message")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-messageactivitybrepliesbcodeactivityreply--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MessageActivity.",(0,s.kt)("b",null,"replies"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/activity-reply"},(0,s.kt)("inlineCode",{parentName:"a"},"[ActivityReply]"))," ",(0,s.kt)(y,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The written replies to the activity")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-messageactivityblikesbcodeuser--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MessageActivity.",(0,s.kt)("b",null,"likes"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,s.kt)("inlineCode",{parentName:"a"},"[User]"))," ",(0,s.kt)(y,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The users who liked the activity")),(0,s.kt)("h3",{id:"returned-by"},"Returned by"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/schema/mutations/save-message-activity"},(0,s.kt)("inlineCode",{parentName:"a"},"SaveMessageActivity"))," ",(0,s.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/schema/objects/activity-message-notification"},(0,s.kt)("inlineCode",{parentName:"a"},"ActivityMessageNotification"))," ",(0,s.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/schema/unions/activity-union"},(0,s.kt)("inlineCode",{parentName:"a"},"ActivityUnion"))," ",(0,s.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"}),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/schema/unions/likeable-union"},(0,s.kt)("inlineCode",{parentName:"a"},"LikeableUnion"))," ",(0,s.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);