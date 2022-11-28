"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[5156],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var r=n.createContext({}),s=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(r.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,r=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(a),k=l,u=m["".concat(r,".").concat(k)]||m[k]||y[k]||o;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var r in t)hasOwnProperty.call(t,r)&&(c[r]=t[r]);c.originalType=e,c.mdxType="string"==typeof e?e:l,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7551:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>k,Bullet:()=>y,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=a(7462),l=a(7294),o=a(3905);const i={id:"text-activity",title:"TextActivity",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},c=void 0,r={unversionedId:"schema/objects/text-activity",id:"schema/objects/text-activity",title:"TextActivity",description:"User text activity",source:"@site/docs/schema/objects/text-activity.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/text-activity",permalink:"/schema/objects/text-activity",draft:!1,tags:[],version:"current",frontMatter:{id:"text-activity",title:"TextActivity",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-textactivitybidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>userId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-textactivitybuseridbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>type</b></code><Bullet /><code>ActivityType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-textactivitybtypebcodeactivitytype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>replyCount</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-textactivitybreplycountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>text</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-textactivitybtextbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>siteUrl</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-textactivitybsiteurlbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>isLocked</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-textactivitybislockedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>isSubscribed</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-textactivitybissubscribedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>likeCount</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-textactivityblikecountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>isLiked</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-textactivitybislikedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>isPinned</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-textactivitybispinnedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>createdAt</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-textactivitybcreatedatbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>user</b></code><Bullet /><code>User</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-textactivitybuserbcodeuser-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>replies</b></code><Bullet /><code>[ActivityReply]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-textactivitybrepliesbcodeactivityreply--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>likes</b></code><Bullet /><code>[User]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-textactivityblikesbcodeuser--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Implemented by",id:"implemented-by",level:3}],y=()=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(l.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),u={toc:d,Bullet:y,SpecifiedBy:m,Badge:k};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"User text activity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type TextActivity {\n  id: Int!\n  userId: Int\n  type: ActivityType\n  replyCount: Int!\n  text(asHtml: Boolean): String\n  siteUrl: String\n  isLocked: Boolean\n  isSubscribed: Boolean\n  likeCount: Int!\n  isLiked: Boolean\n  isPinned: Boolean\n  createdAt: Int!\n  user: User\n  replies: [ActivityReply]\n  likes: [User]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivitybidbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"id"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The id of the activity")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivitybuseridbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"userId"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The user id of the activity's creator")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivitybtypebcodeactivitytype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"type"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/activity-type"},(0,o.kt)("inlineCode",{parentName:"a"},"ActivityType"))," ",(0,o.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The type of activity")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivitybreplycountbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"replyCount"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The number of activity replies")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivitybtextbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"text"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The status text (Markdown)"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-textactivitytextbashtmlbcodeboolean-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.text.",(0,o.kt)("b",null,"asHtml"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("p",{parentName:"blockquote"},"Return the string in pre-parsed html instead of markdown")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivitybsiteurlbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"siteUrl"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The url for the activity page on the AniList website")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivitybislockedbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"isLocked"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the activity is locked and can receive replies")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivitybissubscribedbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"isSubscribed"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the currently authenticated user is subscribed to the activity")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivityblikecountbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"likeCount"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The amount of likes the activity has")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivitybislikedbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"isLiked"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the currently authenticated user liked the activity")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivitybispinnedbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"isPinned"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the activity is pinned to the top of the users activity feed")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivitybcreatedatbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The time the activity was created at")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivitybuserbcodeuser-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"user"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The user who created the activity")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivitybrepliesbcodeactivityreply--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"replies"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/activity-reply"},(0,o.kt)("inlineCode",{parentName:"a"},"[ActivityReply]"))," ",(0,o.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The written replies to the activity")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivityblikesbcodeuser--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"likes"))),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"[User]"))," ",(0,o.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The users who liked the activity")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/schema/mutations/save-text-activity"},(0,o.kt)("inlineCode",{parentName:"a"},"SaveTextActivity"))," ",(0,o.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/schema/unions/activity-union"},(0,o.kt)("inlineCode",{parentName:"a"},"ActivityUnion"))," ",(0,o.kt)(k,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(y,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/unions/likeable-union"},(0,o.kt)("inlineCode",{parentName:"a"},"LikeableUnion"))," ",(0,o.kt)(k,{class:"secondary",text:"union",mdxType:"Badge"})))}p.isMDXComponent=!0}}]);