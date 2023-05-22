"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[5890],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var r=l.createContext({}),d=function(e){var t=l.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return l.createElement(r.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),y=d(a),p=n,m=y["".concat(r,".").concat(p)]||y[p]||u[p]||o;return a?l.createElement(m,i(i({ref:t},s),{},{components:a})):l.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var r in t)hasOwnProperty.call(t,r)&&(c[r]=t[r]);c.originalType=e,c[y]="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=a[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2691:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>y,assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var l=a(7462),n=a(7294),o=a(3905);const i={id:"text-activity",title:"TextActivity",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},c=void 0,r={unversionedId:"objects/text-activity",id:"objects/text-activity",title:"TextActivity",description:"User text activity",source:"@site/examples/default/objects/text-activity.mdx",sourceDirName:"objects",slug:"/objects/text-activity",permalink:"/examples/default/objects/text-activity",draft:!1,tags:[],version:"current",frontMatter:{id:"text-activity",title:"TextActivity",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},d={},s=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),y=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-textactivitybidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>userId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-textactivitybuseridbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>type</b></code><Bullet /><code>ActivityType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-textactivitybtypebcodeactivitytype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>replyCount</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-textactivitybreplycountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>text</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-textactivitybtextbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>siteUrl</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-textactivitybsiteurlbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>isLocked</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-textactivitybislockedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>isSubscribed</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-textactivitybissubscribedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>likeCount</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-textactivityblikecountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>isLiked</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-textactivitybislikedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>isPinned</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-textactivitybispinnedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>createdAt</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-textactivitybcreatedatbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>user</b></code><Bullet /><code>User</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-textactivitybuserbcodeuser-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>replies</b></code><Bullet /><code>[ActivityReply]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-textactivitybrepliesbcodeactivityreply--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TextActivity.<b>likes</b></code><Bullet /><code>[User]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-textactivityblikesbcodeuser--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Implemented by",id:"implemented-by",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:c=!1}=e;const[r,d]=(0,n.useState)(c);return(0,o.kt)("details",(0,l.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},r?t:a),r&&i)},k={Bullet:s,SpecifiedBy:y,Badge:u,toc:p,Details:m};function b(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,l.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"User text activity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type TextActivity {\n  id: Int!\n  userId: Int\n  type: ActivityType\n  replyCount: Int!\n  text(asHtml: Boolean): String\n  siteUrl: String\n  isLocked: Boolean\n  isSubscribed: Boolean\n  likeCount: Int!\n  isLiked: Boolean\n  isPinned: Boolean\n  createdAt: Int!\n  user: User\n  replies: [ActivityReply]\n  likes: [User]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivitybidbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"id"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The id of the activity")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivitybuseridbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"userId"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The user id of the activity's creator")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivitybtypebcodeactivitytype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"type"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/enums/activity-type"},(0,o.kt)("inlineCode",{parentName:"a"},"ActivityType"))," ",(0,o.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The type of activity")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivitybreplycountbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"replyCount"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The number of activity replies")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivitybtextbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"text"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The status text (Markdown)"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-textactivitytextbashtmlbcodeboolean-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.text.",(0,o.kt)("b",null,"asHtml"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/examples/default/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("p",{parentName:"blockquote"},"Return the string in pre-parsed html instead of markdown")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivitybsiteurlbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"siteUrl"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The url for the activity page on the AniList website")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivitybislockedbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"isLocked"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the activity is locked and can receive replies")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivitybissubscribedbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"isSubscribed"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the currently authenticated user is subscribed to the activity")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivityblikecountbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"likeCount"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The amount of likes the activity has")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivitybislikedbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"isLiked"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the currently authenticated user liked the activity")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivitybispinnedbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"isPinned"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the activity is pinned to the top of the users activity feed")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivitybcreatedatbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The time the activity was created at")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivitybuserbcodeuser-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"user"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The user who created the activity")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivitybrepliesbcodeactivityreply--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"replies"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/objects/activity-reply"},(0,o.kt)("inlineCode",{parentName:"a"},"[ActivityReply]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The written replies to the activity")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-textactivityblikesbcodeuser--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TextActivity.",(0,o.kt)("b",null,"likes"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"[User]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The users who liked the activity")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-text-activity"},(0,o.kt)("inlineCode",{parentName:"a"},"SaveTextActivity"))," ",(0,o.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/examples/default/unions/activity-union"},(0,o.kt)("inlineCode",{parentName:"a"},"ActivityUnion"))," ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/examples/default/unions/likeable-union"},(0,o.kt)("inlineCode",{parentName:"a"},"LikeableUnion"))," ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);