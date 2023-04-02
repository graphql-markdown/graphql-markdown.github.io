"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[5151],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),y=s(a),u=r,m=y["".concat(c,".").concat(u)]||y[u]||p[u]||l;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[y]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7368:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>y,assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=a(7462),r=a(7294),l=a(3905);const o={id:"save-activity-reply",title:"SaveActivityReply",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,c={unversionedId:"mutations/save-activity-reply",id:"mutations/save-activity-reply",title:"SaveActivityReply",description:"Create or update an activity reply",source:"@site/examples/schema/mutations/save-activity-reply.mdx",sourceDirName:"mutations",slug:"/mutations/save-activity-reply",permalink:"/schema/mutations/save-activity-reply",draft:!1,tags:[],version:"current",frontMatter:{id:"save-activity-reply",title:"SaveActivityReply",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},s={},d=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),y=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SaveActivityReply.<b>id</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-saveactivityreplybidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveActivityReply.<b>activityId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-saveactivityreplybactivityidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveActivityReply.<b>text</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-saveactivityreplybtextbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveActivityReply.<b>asMod</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-saveactivityreplybasmodbcodeboolean-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ActivityReply</code> <Badge class="secondary" text="object"/>',id:"activityreply-",level:4}],m=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:i=!1}=e;const[c,s]=(0,r.useState)(i);return(0,l.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&o)},v={Bullet:d,SpecifiedBy:y,Badge:p,toc:u,Details:m};function f(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Create or update an activity reply"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"SaveActivityReply(\n  id: Int\n  activityId: Int\n  text: String\n  asMod: Boolean\n): ActivityReply\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-saveactivityreplybidbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SaveActivityReply.",(0,l.kt)("b",null,"id"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The activity reply id, required for updating")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-saveactivityreplybactivityidbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SaveActivityReply.",(0,l.kt)("b",null,"activityId"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The id of the parent activity being replied to")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-saveactivityreplybtextbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SaveActivityReply.",(0,l.kt)("b",null,"text"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The reply text")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-saveactivityreplybasmodbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SaveActivityReply.",(0,l.kt)("b",null,"asMod"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the reply should be sent from the Moderator account (Mod Only)")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"activityreply-"},(0,l.kt)("a",{parentName:"h4",href:"/schema/objects/activity-reply"},(0,l.kt)("inlineCode",{parentName:"a"},"ActivityReply"))," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Replay to an activity item")))}f.isMDXComponent=!0}}]);