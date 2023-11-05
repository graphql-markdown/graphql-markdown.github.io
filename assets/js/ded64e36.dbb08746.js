"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[4352],{4137:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),m=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},i="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,d=e.originalType,c=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),i=m(a),h=o,k=i["".concat(c,".").concat(h)]||i[h]||b[h]||d;return a?n.createElement(k,l(l({ref:t},s),{},{components:a})):n.createElement(k,l({ref:t},s))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var d=a.length,l=new Array(d);l[0]=h;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[i]="string"==typeof e?e:o,l[1]=r;for(var m=2;m<d;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},86:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>s,Details:()=>k,SpecifiedBy:()=>i,assets:()=>m,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var n=a(7462),o=a(7294),d=a(4137);const l={id:"thread-comment",title:"ThreadComment",hide_table_of_contents:!1},r=void 0,c={unversionedId:"objects/thread-comment",id:"objects/thread-comment",title:"ThreadComment",description:"Forum Thread Comment",source:"@site/examples/default/objects/thread-comment.mdx",sourceDirName:"objects",slug:"/objects/thread-comment",permalink:"/examples/default/objects/thread-comment",draft:!1,tags:[],version:"current",frontMatter:{id:"thread-comment",title:"ThreadComment",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ThreadCommentSubscribedNotification",permalink:"/examples/default/objects/thread-comment-subscribed-notification"},next:{title:"ThreadLikeNotification",permalink:"/examples/default/objects/thread-like-notification"}},m={},s=()=>(0,d.kt)(o.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),i=e=>(0,d.kt)(o.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,d.kt)(o.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),h=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>userId</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentbuseridbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>threadId</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentbthreadidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>comment</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentbcommentbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>likeCount</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentblikecountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>isLiked</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentbislikedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>siteUrl</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentbsiteurlbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>createdAt</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentbcreatedatbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>updatedAt</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentbupdatedatbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>thread</b></code><Bullet /><code>Thread</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-threadcommentbthreadbcodethread-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>user</b></code><Bullet /><code>User</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-threadcommentbuserbcodeuser-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>likes</b></code><Bullet /><code>[User]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-threadcommentblikesbcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>childComments</b></code><Bullet /><code>Json</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentbchildcommentsbcodejson-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreadComment.<b>isLocked</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadcommentbislockedbcodeboolean-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}],k=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:r=!1}=e;const[c,m]=(0,o.useState)(r);return(0,d.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),m((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&l)},p={Bullet:s,SpecifiedBy:i,Badge:b,toc:h,Details:k};function u(e){let{components:t,...a}=e;return(0,d.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("head",null,(0,d.kt)("meta",{name:"googlebot",content:"noindex"}),(0,d.kt)("meta",{charset:"utf-8"})),(0,d.kt)("p",null,"Forum Thread Comment"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type ThreadComment {\n  id: Int!\n  userId: Int\n  threadId: Int\n  comment(asHtml: Boolean): String\n  likeCount: Int!\n  isLiked: Boolean\n  siteUrl: String\n  createdAt: Int!\n  updatedAt: Int!\n  thread: Thread\n  user: User\n  likes: [User]\n  childComments: Json\n  isLocked: Boolean\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-threadcommentbidbcodeint--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,d.kt)("b",null,"id"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The id of the comment")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-threadcommentbuseridbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,d.kt)("b",null,"userId"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The user id of the comment's owner")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-threadcommentbthreadidbcodeint-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,d.kt)("b",null,"threadId"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The id of thread the comment belongs to")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-threadcommentbcommentbcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,d.kt)("b",null,"comment"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The text content of the comment (Markdown)"),(0,d.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-threadcommentcommentbashtmlbcodeboolean-"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.comment.",(0,d.kt)("b",null,"asHtml"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/examples/default/scalars/boolean"},(0,d.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("p",{parentName:"blockquote"},"Return the string in pre-parsed html instead of markdown")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-threadcommentblikecountbcodeint--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,d.kt)("b",null,"likeCount"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The amount of likes the comment has")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-threadcommentbislikedbcodeboolean-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,d.kt)("b",null,"isLiked"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,d.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"If the currently authenticated user liked the comment")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-threadcommentbsiteurlbcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,d.kt)("b",null,"siteUrl"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The url for the comment page on the AniList website")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-threadcommentbcreatedatbcodeint--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,d.kt)("b",null,"createdAt"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The time of the comments creation")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-threadcommentbupdatedatbcodeint--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,d.kt)("b",null,"updatedAt"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The time of the comments last update")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-threadcommentbthreadbcodethread-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,d.kt)("b",null,"thread"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/objects/thread"},(0,d.kt)("inlineCode",{parentName:"a"},"Thread"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The thread the comment belongs to")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-threadcommentbuserbcodeuser-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,d.kt)("b",null,"user"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/objects/user"},(0,d.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The user who created the comment")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-threadcommentblikesbcodeuser--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,d.kt)("b",null,"likes"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/objects/user"},(0,d.kt)("inlineCode",{parentName:"a"},"[User]"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The users who liked the comment")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-threadcommentbchildcommentsbcodejson-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,d.kt)("b",null,"childComments"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/json"},(0,d.kt)("inlineCode",{parentName:"a"},"Json"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The comment's child reply comments")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-threadcommentbislockedbcodeboolean-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"ThreadComment.",(0,d.kt)("b",null,"isLocked"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,d.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"If the comment tree is locked and may not receive replies or edits")),(0,d.kt)("h3",{id:"returned-by"},"Returned by"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-thread-comment"},(0,d.kt)("inlineCode",{parentName:"a"},"SaveThreadComment"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/queries/thread-comment"},(0,d.kt)("inlineCode",{parentName:"a"},"ThreadComment"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"query",mdxType:"Badge"})),(0,d.kt)("h3",{id:"member-of"},"Member Of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/internal-page"},(0,d.kt)("inlineCode",{parentName:"a"},"InternalPage"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/page"},(0,d.kt)("inlineCode",{parentName:"a"},"Page"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-comment-like-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ThreadCommentLikeNotification"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-comment-mention-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ThreadCommentMentionNotification"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-comment-reply-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ThreadCommentReplyNotification"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-comment-subscribed-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ThreadCommentSubscribedNotification"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-like-notification"},(0,d.kt)("inlineCode",{parentName:"a"},"ThreadLikeNotification"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("h3",{id:"implemented-by"},"Implemented By"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/examples/default/unions/likeable-union"},(0,d.kt)("inlineCode",{parentName:"a"},"LikeableUnion"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);