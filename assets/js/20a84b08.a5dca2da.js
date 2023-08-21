"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[1514],{4137:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>k});var d=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);t&&(d=d.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,d)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,d,l=function(e,t){if(null==e)return{};var a,d,l={},o=Object.keys(e);for(d=0;d<o.length;d++)a=o[d],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(d=0;d<o.length;d++)a=o[d],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=d.createContext({}),c=function(e){var t=d.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},i=function(e){var t=c(e.components);return d.createElement(s.Provider,{value:t},e.children)},b="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return d.createElement(d.Fragment,{},t)}},h=d.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,i=r(e,["components","mdxType","originalType","parentName"]),b=c(a),h=l,k=b["".concat(s,".").concat(h)]||b[h]||m[h]||o;return a?d.createElement(k,n(n({ref:t},i),{},{components:a})):d.createElement(k,n({ref:t},i))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,n=new Array(o);n[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[b]="string"==typeof e?e:l,n[1]=r;for(var c=2;c<o;c++)n[c]=a[c];return d.createElement.apply(null,n)}return d.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5857:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>i,Details:()=>k,SpecifiedBy:()=>b,assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>n,metadata:()=>s,toc:()=>h});var d=a(7462),l=a(7294),o=a(4137);const n={id:"thread",title:"Thread",hide_table_of_contents:!1},r=void 0,s={unversionedId:"objects/thread",id:"objects/thread",title:"Thread",description:"Forum Thread",source:"@site/examples/default/objects/thread.mdx",sourceDirName:"objects",slug:"/objects/thread",permalink:"/examples/default/objects/thread",draft:!1,tags:[],version:"current",frontMatter:{id:"thread",title:"Thread",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ThreadLikeNotification",permalink:"/examples/default/objects/thread-like-notification"},next:{title:"UserActivityHistory",permalink:"/examples/default/objects/user-activity-history"}},c={},i=()=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,o.kt)(l.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),h=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Thread.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadbidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Thread.<b>title</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadbtitlebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Thread.<b>body</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadbbodybcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Thread.<b>userId</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadbuseridbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Thread.<b>replyUserId</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadbreplyuseridbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Thread.<b>replyCommentId</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadbreplycommentidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Thread.<b>replyCount</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadbreplycountbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Thread.<b>viewCount</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadbviewcountbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Thread.<b>isLocked</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadbislockedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Thread.<b>isSticky</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadbisstickybcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Thread.<b>isSubscribed</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadbissubscribedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Thread.<b>likeCount</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadblikecountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Thread.<b>isLiked</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadbislikedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Thread.<b>repliedAt</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadbrepliedatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Thread.<b>createdAt</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadbcreatedatbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Thread.<b>updatedAt</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadbupdatedatbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Thread.<b>user</b></code><Bullet /><code>User</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-threadbuserbcodeuser-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Thread.<b>replyUser</b></code><Bullet /><code>User</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-threadbreplyuserbcodeuser-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Thread.<b>likes</b></code><Bullet /><code>[User]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-threadblikesbcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Thread.<b>siteUrl</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threadbsiteurlbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Thread.<b>categories</b></code><Bullet /><code>[ThreadCategory]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-threadbcategoriesbcodethreadcategory--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Thread.<b>mediaCategories</b></code><Bullet /><code>[Media]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-threadbmediacategoriesbcodemedia--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],k=e=>{let{dataOpen:t,dataClose:a,children:n,startOpen:r=!1}=e;const[s,c]=(0,l.useState)(r);return(0,o.kt)("details",(0,d.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&n)},p={Bullet:i,SpecifiedBy:b,Badge:m,toc:h,Details:k};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,d.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Forum Thread"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Thread {\n  id: Int!\n  title: String\n  body(asHtml: Boolean): String\n  userId: Int!\n  replyUserId: Int\n  replyCommentId: Int\n  replyCount: Int\n  viewCount: Int\n  isLocked: Boolean\n  isSticky: Boolean\n  isSubscribed: Boolean\n  likeCount: Int!\n  isLiked: Boolean\n  repliedAt: Int\n  createdAt: Int!\n  updatedAt: Int!\n  user: User\n  replyUser: User\n  likes: [User]\n  siteUrl: String\n  categories: [ThreadCategory]\n  mediaCategories: [Media]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threadbidbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Thread.",(0,o.kt)("b",null,"id"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The id of the thread")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threadbtitlebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Thread.",(0,o.kt)("b",null,"title"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The title of the thread")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threadbbodybcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Thread.",(0,o.kt)("b",null,"body"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The text body of the thread (Markdown)"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-threadbodybashtmlbcodeboolean-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Thread.body.",(0,o.kt)("b",null,"asHtml"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/examples/default/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("p",{parentName:"blockquote"},"Return the string in pre-parsed html instead of markdown")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threadbuseridbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Thread.",(0,o.kt)("b",null,"userId"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The id of the thread owner user")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threadbreplyuseridbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Thread.",(0,o.kt)("b",null,"replyUserId"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The id of the user who most recently commented on the thread")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threadbreplycommentidbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Thread.",(0,o.kt)("b",null,"replyCommentId"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The id of the most recent comment on the thread")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threadbreplycountbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Thread.",(0,o.kt)("b",null,"replyCount"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The number of comments on the thread")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threadbviewcountbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Thread.",(0,o.kt)("b",null,"viewCount"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The number of times users have viewed the thread")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threadbislockedbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Thread.",(0,o.kt)("b",null,"isLocked"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the thread is locked and can receive comments")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threadbisstickybcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Thread.",(0,o.kt)("b",null,"isSticky"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the thread is stickied and should be displayed at the top of the page")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threadbissubscribedbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Thread.",(0,o.kt)("b",null,"isSubscribed"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the currently authenticated user is subscribed to the thread")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threadblikecountbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Thread.",(0,o.kt)("b",null,"likeCount"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The amount of likes the thread has")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threadbislikedbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Thread.",(0,o.kt)("b",null,"isLiked"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the currently authenticated user liked the thread")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threadbrepliedatbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Thread.",(0,o.kt)("b",null,"repliedAt"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The time of the last reply")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threadbcreatedatbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Thread.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The time of the thread creation")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threadbupdatedatbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Thread.",(0,o.kt)("b",null,"updatedAt"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The time of the thread last update")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threadbuserbcodeuser-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Thread.",(0,o.kt)("b",null,"user"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The owner of the thread")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threadbreplyuserbcodeuser-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Thread.",(0,o.kt)("b",null,"replyUser"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The user to last reply to the thread")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threadblikesbcodeuser--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Thread.",(0,o.kt)("b",null,"likes"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"[User]"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The users who liked the thread")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threadbsiteurlbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Thread.",(0,o.kt)("b",null,"siteUrl"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The url for the thread page on the AniList website")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threadbcategoriesbcodethreadcategory--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Thread.",(0,o.kt)("b",null,"categories"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/objects/thread-category"},(0,o.kt)("inlineCode",{parentName:"a"},"[ThreadCategory]"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The categories of the thread")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threadbmediacategoriesbcodemedia--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Thread.",(0,o.kt)("b",null,"mediaCategories"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/objects/media"},(0,o.kt)("inlineCode",{parentName:"a"},"[Media]"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The media categories of the thread")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/examples/default/mutations/save-thread"},(0,o.kt)("inlineCode",{parentName:"a"},"SaveThread"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/examples/default/queries/thread"},(0,o.kt)("inlineCode",{parentName:"a"},"Thread"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"query",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/examples/default/mutations/toggle-thread-subscription"},(0,o.kt)("inlineCode",{parentName:"a"},"ToggleThreadSubscription"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/examples/default/objects/internal-page"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalPage"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/examples/default/objects/page"},(0,o.kt)("inlineCode",{parentName:"a"},"Page"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-comment"},(0,o.kt)("inlineCode",{parentName:"a"},"ThreadComment"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-comment-like-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"ThreadCommentLikeNotification"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-comment-mention-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"ThreadCommentMentionNotification"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-comment-reply-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"ThreadCommentReplyNotification"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-comment-subscribed-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"ThreadCommentSubscribedNotification"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/examples/default/objects/thread-like-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"ThreadLikeNotification"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/examples/default/unions/likeable-union"},(0,o.kt)("inlineCode",{parentName:"a"},"LikeableUnion"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);