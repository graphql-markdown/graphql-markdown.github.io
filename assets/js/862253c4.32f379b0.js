"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2638],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>p});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),r=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=r(e.components);return n.createElement(d.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),y=r(a),k=i,p=y["".concat(d,".").concat(k)]||y[k]||m[k]||l;return a?n.createElement(p,o(o({ref:t},s),{},{components:a})):n.createElement(p,o({ref:t},s))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=k;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[y]="string"==typeof e?e:i,o[1]=c;for(var r=2;r<l;r++)o[r]=a[r];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5925:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>k,Bullet:()=>y,SpecifiedBy:()=>m,assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var n=a(7462),i=a(7294),l=a(3905);const o={id:"activity",title:"Activity",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},c=void 0,d={unversionedId:"queries/activity",id:"queries/activity",title:"Activity",description:"Activity query",source:"@site/examples/schema/queries/activity.mdx",sourceDirName:"queries",slug:"/queries/activity",permalink:"/schema/queries/activity",draft:!1,tags:[],version:"current",frontMatter:{id:"activity",title:"Activity",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},r={},s=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>id</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitybidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>userId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitybuseridbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>messengerId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitybmessengeridbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>mediaId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitybmediaidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>type</b></code><Bullet /><code>ActivityType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-activitybtypebcodeactivitytype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>isFollowing</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitybisfollowingbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>hasReplies</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitybhasrepliesbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>hasRepliesOrTypeText</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitybhasrepliesortypetextbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>createdAt</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitybcreatedatbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>id_not</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitybid_notbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>id_in</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitybid_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>id_not_in</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitybid_not_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>userId_not</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitybuserid_notbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>userId_in</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitybuserid_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>userId_not_in</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitybuserid_not_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>messengerId_not</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitybmessengerid_notbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>messengerId_in</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitybmessengerid_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>messengerId_not_in</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitybmessengerid_not_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>mediaId_not</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitybmediaid_notbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>mediaId_in</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitybmediaid_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>mediaId_not_in</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitybmediaid_not_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>type_not</b></code><Bullet /><code>ActivityType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-activitybtype_notbcodeactivitytype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>type_in</b></code><Bullet /><code>[ActivityType]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-activitybtype_inbcodeactivitytype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>type_not_in</b></code><Bullet /><code>[ActivityType]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-activitybtype_not_inbcodeactivitytype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>createdAt_greater</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitybcreatedat_greaterbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>createdAt_lesser</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activitybcreatedat_lesserbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Activity.<b>sort</b></code><Bullet /><code>[ActivitySort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-activitybsortbcodeactivitysort--",level:4},{value:"Type",id:"type",level:3},{value:'<code>ActivityUnion</code> <Badge class="secondary" text="union"/>',id:"activityunion-",level:4}],y=()=>(0,l.kt)(i.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(i.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,l.kt)(i.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),p={toc:s,Bullet:y,SpecifiedBy:m,Badge:k};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Activity query"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"Activity(\n  id: Int\n  userId: Int\n  messengerId: Int\n  mediaId: Int\n  type: ActivityType\n  isFollowing: Boolean\n  hasReplies: Boolean\n  hasRepliesOrTypeText: Boolean\n  createdAt: Int\n  id_not: Int\n  id_in: [Int]\n  id_not_in: [Int]\n  userId_not: Int\n  userId_in: [Int]\n  userId_not_in: [Int]\n  messengerId_not: Int\n  messengerId_in: [Int]\n  messengerId_not_in: [Int]\n  mediaId_not: Int\n  mediaId_in: [Int]\n  mediaId_not_in: [Int]\n  type_not: ActivityType\n  type_in: [ActivityType]\n  type_not_in: [ActivityType]\n  createdAt_greater: Int\n  createdAt_lesser: Int\n  sort: [ActivitySort]\n): ActivityUnion\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybidbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"id"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by the activity id")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybuseridbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"userId"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by the owner user id")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybmessengeridbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"messengerId"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by the id of the user who sent a message")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybmediaidbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"mediaId"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by the associated media id of the activity")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybtypebcodeactivitytype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"type"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/enums/activity-type"},(0,l.kt)("inlineCode",{parentName:"a"},"ActivityType"))," ",(0,l.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by the type of activity")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybisfollowingbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"isFollowing"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter activity to users who are being followed by the authenticated user")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybhasrepliesbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"hasReplies"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter activity to only activity with replies")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybhasrepliesortypetextbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"hasRepliesOrTypeText"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter activity to only activity with replies or is of type text")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybcreatedatbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"createdAt"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by the time the activity was created")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybid_notbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"id_not"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by the activity id")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybid_inbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"id_in"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,l.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by the activity id")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybid_not_inbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"id_not_in"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,l.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by the activity id")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybuserid_notbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"userId_not"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by the owner user id")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybuserid_inbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"userId_in"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,l.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by the owner user id")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybuserid_not_inbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"userId_not_in"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,l.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by the owner user id")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybmessengerid_notbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"messengerId_not"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by the id of the user who sent a message")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybmessengerid_inbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"messengerId_in"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,l.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by the id of the user who sent a message")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybmessengerid_not_inbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"messengerId_not_in"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,l.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by the id of the user who sent a message")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybmediaid_notbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"mediaId_not"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by the associated media id of the activity")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybmediaid_inbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"mediaId_in"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,l.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by the associated media id of the activity")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybmediaid_not_inbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"mediaId_not_in"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,l.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by the associated media id of the activity")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybtype_notbcodeactivitytype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"type_not"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/enums/activity-type"},(0,l.kt)("inlineCode",{parentName:"a"},"ActivityType"))," ",(0,l.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by the type of activity")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybtype_inbcodeactivitytype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"type_in"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/enums/activity-type"},(0,l.kt)("inlineCode",{parentName:"a"},"[ActivityType]"))," ",(0,l.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by the type of activity")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybtype_not_inbcodeactivitytype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"type_not_in"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/enums/activity-type"},(0,l.kt)("inlineCode",{parentName:"a"},"[ActivityType]"))," ",(0,l.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by the type of activity")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybcreatedat_greaterbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"createdAt_greater"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by the time the activity was created")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybcreatedat_lesserbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"createdAt_lesser"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by the time the activity was created")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-activitybsortbcodeactivitysort--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Activity.",(0,l.kt)("b",null,"sort"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/enums/activity-sort"},(0,l.kt)("inlineCode",{parentName:"a"},"[ActivitySort]"))," ",(0,l.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The order the results will be returned in")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"activityunion-"},(0,l.kt)("a",{parentName:"h4",href:"/schema/unions/activity-union"},(0,l.kt)("inlineCode",{parentName:"a"},"ActivityUnion"))," ",(0,l.kt)(k,{class:"secondary",text:"union",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Activity union type")))}h.isMDXComponent=!0}}]);