"use strict";(self.webpackChunkgraphql_markdown_website=self.webpackChunkgraphql_markdown_website||[]).push([[8426],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=l.createContext({}),s=function(e){var t=l.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return l.createElement(c.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,k=p["".concat(c,".").concat(m)]||p[m]||y[m]||r;return a?l.createElement(k,o(o({ref:t},d),{},{components:a})):l.createElement(k,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<r;s++)o[s]=a[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3828:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>y,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var l=a(7462),n=a(7294),r=a(3905);const o={id:"activity-reply",title:"ActivityReply",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,c={unversionedId:"objects/activity-reply",id:"objects/activity-reply",title:"ActivityReply",description:"Replay to an activity item",source:"@site/examples/schema/objects/activity-reply.mdx",sourceDirName:"objects",slug:"/objects/activity-reply",permalink:"/schema/objects/activity-reply",draft:!1,tags:[],version:"current",frontMatter:{id:"activity-reply",title:"ActivityReply",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReply.<b>id</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplybidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReply.<b>userId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplybuseridbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReply.<b>activityId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplybactivityidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReply.<b>text</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplybtextbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReply.<b>likeCount</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplyblikecountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReply.<b>isLiked</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplybislikedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReply.<b>createdAt</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplybcreatedatbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReply.<b>user</b></code><Bullet /><code>User</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-activityreplybuserbcodeuser-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReply.<b>likes</b></code><Bullet /><code>[User]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-activityreplyblikesbcodeuser--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],y=()=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(n.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),k={toc:d,Bullet:y,SpecifiedBy:p,Badge:m};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Replay to an activity item"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type ActivityReply {\n  id: Int!\n  userId: Int\n  activityId: Int\n  text(asHtml: Boolean): String\n  likeCount: Int!\n  isLiked: Boolean\n  createdAt: Int!\n  user: User\n  likes: [User]\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-activityreplybidbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ActivityReply.",(0,r.kt)("b",null,"id"))),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The id of the reply")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-activityreplybuseridbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ActivityReply.",(0,r.kt)("b",null,"userId"))),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The id of the replies creator")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-activityreplybactivityidbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ActivityReply.",(0,r.kt)("b",null,"activityId"))),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The id of the parent activity")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-activityreplybtextbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ActivityReply.",(0,r.kt)("b",null,"text"))),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The reply text"),(0,r.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-activityreplytextbashtmlbcodeboolean-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ActivityReply.text.",(0,r.kt)("b",null,"asHtml"))),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("p",{parentName:"blockquote"},"Return the string in pre-parsed html instead of markdown")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-activityreplyblikecountbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ActivityReply.",(0,r.kt)("b",null,"likeCount"))),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The amount of likes the reply has")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-activityreplybislikedbcodeboolean-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ActivityReply.",(0,r.kt)("b",null,"isLiked"))),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the currently authenticated user liked the reply")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-activityreplybcreatedatbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ActivityReply.",(0,r.kt)("b",null,"createdAt"))),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The time the reply was created at")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-activityreplybuserbcodeuser-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ActivityReply.",(0,r.kt)("b",null,"user"))),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,r.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The user who created reply")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-activityreplyblikesbcodeuser--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ActivityReply.",(0,r.kt)("b",null,"likes"))),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,r.kt)("inlineCode",{parentName:"a"},"[User]"))," ",(0,r.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The users who liked the reply")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/schema/queries/activity-reply"},(0,r.kt)("inlineCode",{parentName:"a"},"ActivityReply"))," ",(0,r.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/mutations/save-activity-reply"},(0,r.kt)("inlineCode",{parentName:"a"},"SaveActivityReply"))," ",(0,r.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/schema/objects/internal-page"},(0,r.kt)("inlineCode",{parentName:"a"},"InternalPage"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/list-activity"},(0,r.kt)("inlineCode",{parentName:"a"},"ListActivity"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/message-activity"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageActivity"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/page"},(0,r.kt)("inlineCode",{parentName:"a"},"Page"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/schema/objects/text-activity"},(0,r.kt)("inlineCode",{parentName:"a"},"TextActivity"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/schema/unions/likeable-union"},(0,r.kt)("inlineCode",{parentName:"a"},"LikeableUnion"))," ",(0,r.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);