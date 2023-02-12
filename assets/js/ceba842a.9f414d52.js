"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[2769],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,y=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(y,o(o({ref:t},d),{},{components:a})):n.createElement(y,o({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7202:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=a(7462),r=a(7294),i=a(3905);const o={id:"likeable-union",title:"LikeableUnion",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,c={unversionedId:"unions/likeable-union",id:"unions/likeable-union",title:"LikeableUnion",description:"Likeable union type",source:"@site/examples/schema/unions/likeable-union.mdx",sourceDirName:"unions",slug:"/unions/likeable-union",permalink:"/schema/unions/likeable-union",draft:!1,tags:[],version:"current",frontMatter:{id:"likeable-union",title:"LikeableUnion",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},s={},d=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>ListActivity</code> <Badge class="secondary" text="object"/>',id:"listactivity-",level:4},{value:'<code>TextActivity</code> <Badge class="secondary" text="object"/>',id:"textactivity-",level:4},{value:'<code>MessageActivity</code> <Badge class="secondary" text="object"/>',id:"messageactivity-",level:4},{value:'<code>ActivityReply</code> <Badge class="secondary" text="object"/>',id:"activityreply-",level:4},{value:'<code>Thread</code> <Badge class="secondary" text="object"/>',id:"thread-",level:4},{value:'<code>ThreadComment</code> <Badge class="secondary" text="object"/>',id:"threadcomment-",level:4},{value:"Returned by",id:"returned-by",level:3}],p=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:p,SpecifiedBy:u,Badge:m};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Likeable union type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"union LikeableUnion =\n    ListActivity\n  | TextActivity\n  | MessageActivity\n  | ActivityReply\n  | Thread\n  | ThreadComment\n")),(0,i.kt)("h3",{id:"possible-types"},"Possible types"),(0,i.kt)("h4",{id:"listactivity-"},(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/list-activity"},(0,i.kt)("inlineCode",{parentName:"a"},"ListActivity"))," ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"User list activity (anime & manga updates)")),(0,i.kt)("h4",{id:"textactivity-"},(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/text-activity"},(0,i.kt)("inlineCode",{parentName:"a"},"TextActivity"))," ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"User text activity")),(0,i.kt)("h4",{id:"messageactivity-"},(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/message-activity"},(0,i.kt)("inlineCode",{parentName:"a"},"MessageActivity"))," ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"User message activity")),(0,i.kt)("h4",{id:"activityreply-"},(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/activity-reply"},(0,i.kt)("inlineCode",{parentName:"a"},"ActivityReply"))," ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Replay to an activity item")),(0,i.kt)("h4",{id:"thread-"},(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/thread"},(0,i.kt)("inlineCode",{parentName:"a"},"Thread"))," ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Forum Thread")),(0,i.kt)("h4",{id:"threadcomment-"},(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/thread-comment"},(0,i.kt)("inlineCode",{parentName:"a"},"ThreadComment"))," ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Forum Thread Comment")),(0,i.kt)("h3",{id:"returned-by"},"Returned by"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/schema/mutations/toggle-like-v2"},(0,i.kt)("inlineCode",{parentName:"a"},"ToggleLikeV2"))," ",(0,i.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);