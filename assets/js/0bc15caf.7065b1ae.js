"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2799],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>p});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),m=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},i="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),i=m(a),k=o,p=i["".concat(c,".").concat(k)]||i[k]||h[k]||l;return a?n.createElement(p,r(r({ref:t},s),{},{components:a})):n.createElement(p,r({ref:t},s))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=k;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[i]="string"==typeof e?e:o,r[1]=d;for(var m=2;m<l;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8446:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>h,Bullet:()=>s,Details:()=>p,SpecifiedBy:()=>i,assets:()=>m,contentTitle:()=>d,default:()=>b,frontMatter:()=>r,metadata:()=>c,toc:()=>k});var n=a(7462),o=a(7294),l=a(3905);const r={id:"thread-comment",title:"ThreadComment",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},d=void 0,c={unversionedId:"objects/thread-comment",id:"objects/thread-comment",title:"ThreadComment",description:"Forum Thread Comment",source:"@site/examples/schema/objects/thread-comment.mdx",sourceDirName:"objects",slug:"/objects/thread-comment",permalink:"/schema/objects/thread-comment",draft:!1,tags:[],version:"current",frontMatter:{id:"thread-comment",title:"ThreadComment",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},m={},s=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),i=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),k=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>userId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentbuseridbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>threadId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentbthreadidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>comment</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentbcommentbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>likeCount</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentblikecountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>isLiked</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentbislikedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>siteUrl</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentbsiteurlbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>createdAt</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentbcreatedatbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>updatedAt</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentbupdatedatbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>thread</b></code><Bullet /><code>Thread</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-threadcommentbthreadbcodethread-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>user</b></code><Bullet /><code>User</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-threadcommentbuserbcodeuser-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>likes</b></code><Bullet /><code>[User]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-threadcommentblikesbcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>childComments</b></code><Bullet /><code>Json</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentbchildcommentsbcodejson-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>isLocked</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentbislockedbcodeboolean-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],p=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:d=!1}=e;const[c,m]=(0,o.useState)(d);return(0,l.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),m((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&r)},u={Bullet:s,SpecifiedBy:i,Badge:h,toc:k,Details:p};function b(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Forum Thread Comment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type ThreadComment {\n  id: Int!\n  userId: Int\n  threadId: Int\n  comment(asHtml: Boolean): String\n  likeCount: Int!\n  isLiked: Boolean\n  siteUrl: String\n  createdAt: Int!\n  updatedAt: Int!\n  thread: Thread\n  user: User\n  likes: [User]\n  childComments: Json\n  isLocked: Boolean\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-threadcommentbidbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,l.kt)("b",null,"id"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The id of the comment")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-threadcommentbuseridbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,l.kt)("b",null,"userId"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The user id of the comment's owner")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-threadcommentbthreadidbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,l.kt)("b",null,"threadId"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The id of thread the comment belongs to")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-threadcommentbcommentbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,l.kt)("b",null,"comment"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The text content of the comment (Markdown)"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-threadcommentcommentbashtmlbcodeboolean-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.comment.",(0,l.kt)("b",null,"asHtml"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("p",{parentName:"blockquote"},"Return the string in pre-parsed html instead of markdown")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-threadcommentblikecountbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,l.kt)("b",null,"likeCount"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The amount of likes the comment has")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-threadcommentbislikedbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,l.kt)("b",null,"isLiked"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the currently authenticated user liked the comment")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-threadcommentbsiteurlbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,l.kt)("b",null,"siteUrl"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The url for the comment page on the AniList website")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-threadcommentbcreatedatbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,l.kt)("b",null,"createdAt"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The time of the comments creation")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-threadcommentbupdatedatbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,l.kt)("b",null,"updatedAt"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The time of the comments last update")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-threadcommentbthreadbcodethread-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,l.kt)("b",null,"thread"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/objects/thread"},(0,l.kt)("inlineCode",{parentName:"a"},"Thread"))," ",(0,l.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The thread the comment belongs to")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-threadcommentbuserbcodeuser-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,l.kt)("b",null,"user"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,l.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The user who created the comment")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-threadcommentblikesbcodeuser--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,l.kt)("b",null,"likes"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,l.kt)("inlineCode",{parentName:"a"},"[User]"))," ",(0,l.kt)(h,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The users who liked the comment")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-threadcommentbchildcommentsbcodejson-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,l.kt)("b",null,"childComments"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/json"},(0,l.kt)("inlineCode",{parentName:"a"},"Json"))," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The comment's child reply comments")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-threadcommentbislockedbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,l.kt)("b",null,"isLocked"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the comment tree is locked and may not receive replies or edits")),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/schema/mutations/save-thread-comment"},(0,l.kt)("inlineCode",{parentName:"a"},"SaveThreadComment"))," ",(0,l.kt)(h,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/queries/thread-comment"},(0,l.kt)("inlineCode",{parentName:"a"},"ThreadComment"))," ",(0,l.kt)(h,{class:"secondary",text:"query",mdxType:"Badge"})),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/schema/objects/internal-page"},(0,l.kt)("inlineCode",{parentName:"a"},"InternalPage"))," ",(0,l.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/page"},(0,l.kt)("inlineCode",{parentName:"a"},"Page"))," ",(0,l.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/thread-comment-like-notification"},(0,l.kt)("inlineCode",{parentName:"a"},"ThreadCommentLikeNotification"))," ",(0,l.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/thread-comment-mention-notification"},(0,l.kt)("inlineCode",{parentName:"a"},"ThreadCommentMentionNotification"))," ",(0,l.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/thread-comment-reply-notification"},(0,l.kt)("inlineCode",{parentName:"a"},"ThreadCommentReplyNotification"))," ",(0,l.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/thread-comment-subscribed-notification"},(0,l.kt)("inlineCode",{parentName:"a"},"ThreadCommentSubscribedNotification"))," ",(0,l.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/objects/thread-like-notification"},(0,l.kt)("inlineCode",{parentName:"a"},"ThreadLikeNotification"))," ",(0,l.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/schema/unions/likeable-union"},(0,l.kt)("inlineCode",{parentName:"a"},"LikeableUnion"))," ",(0,l.kt)(h,{class:"secondary",text:"union",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);