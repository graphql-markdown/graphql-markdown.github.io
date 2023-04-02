"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6034],{3905:(e,t,n)=>{n.d(t,{Zo:()=>y,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},y=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,m=s["".concat(c,".").concat(u)]||s[u]||d[u]||i;return n?r.createElement(m,l(l({ref:t},y),{},{components:n})):r.createElement(m,l({ref:t},y))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1472:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>y,Details:()=>m,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>o,default:()=>v,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(7462),a=n(7294),i=n(3905);const l={id:"activity-reply",title:"ActivityReply",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,c={unversionedId:"queries/activity-reply",id:"queries/activity-reply",title:"ActivityReply",description:"Activity reply query",source:"@site/examples/schema/queries/activity-reply.mdx",sourceDirName:"queries",slug:"/queries/activity-reply",permalink:"/schema/queries/activity-reply",draft:!1,tags:[],version:"current",frontMatter:{id:"activity-reply",title:"ActivityReply",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},p={},y=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReply.<b>id</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplybidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivityReply.<b>activityId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activityreplybactivityidbcodeint-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ActivityReply</code> <Badge class="secondary" text="object"/>',id:"activityreply-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:o=!1}=e;const[c,p]=(0,a.useState)(o);return(0,i.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&l)},f={Bullet:y,SpecifiedBy:s,Badge:d,toc:u,Details:m};function v(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Activity reply query"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"ActivityReply(\n  id: Int\n  activityId: Int\n): ActivityReply\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-activityreplybidbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ActivityReply.",(0,i.kt)("b",null,"id"))),(0,i.kt)(y,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(d,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter by the reply id")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-activityreplybactivityidbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ActivityReply.",(0,i.kt)("b",null,"activityId"))),(0,i.kt)(y,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(d,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter by the parent id")),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"activityreply-"},(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/activity-reply"},(0,i.kt)("inlineCode",{parentName:"a"},"ActivityReply"))," ",(0,i.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Replay to an activity item")))}v.isMDXComponent=!0}}]);