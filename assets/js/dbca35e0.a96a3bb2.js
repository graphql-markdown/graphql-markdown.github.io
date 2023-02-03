"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9376],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,y=p["".concat(i,".").concat(u)]||p[u]||m[u]||l;return a?n.createElement(y,o(o({ref:t},s),{},{components:a})):n.createElement(y,o({ref:t},s))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[p]="string"==typeof e?e:r,o[1]=d;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},886:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),r=a(7294),l=a(3905);const o={id:"deleted",title:"Deleted",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,i={unversionedId:"objects/deleted",id:"objects/deleted",title:"Deleted",description:"Deleted data type",source:"@site/examples/schema/objects/deleted.mdx",sourceDirName:"objects",slug:"/objects/deleted",permalink:"/schema/objects/deleted",draft:!1,tags:[],version:"current",frontMatter:{id:"deleted",title:"Deleted",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Deleted.<b>deleted</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-deletedbdeletedbcodeboolean-",level:4},{value:"Returned by",id:"returned-by",level:3}],p=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:p,SpecifiedBy:m,Badge:u};function f(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Deleted data type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Deleted {\n  deleted: Boolean\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-deletedbdeletedbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Deleted.",(0,l.kt)("b",null,"deleted"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If an item has been successfully deleted")),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/schema/mutations/delete-activity"},(0,l.kt)("inlineCode",{parentName:"a"},"DeleteActivity"))," ",(0,l.kt)(u,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/mutations/delete-activity-reply"},(0,l.kt)("inlineCode",{parentName:"a"},"DeleteActivityReply"))," ",(0,l.kt)(u,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/mutations/delete-custom-list"},(0,l.kt)("inlineCode",{parentName:"a"},"DeleteCustomList"))," ",(0,l.kt)(u,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/mutations/delete-media-list-entry"},(0,l.kt)("inlineCode",{parentName:"a"},"DeleteMediaListEntry"))," ",(0,l.kt)(u,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/mutations/delete-review"},(0,l.kt)("inlineCode",{parentName:"a"},"DeleteReview"))," ",(0,l.kt)(u,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/mutations/delete-thread"},(0,l.kt)("inlineCode",{parentName:"a"},"DeleteThread"))," ",(0,l.kt)(u,{className:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/schema/mutations/delete-thread-comment"},(0,l.kt)("inlineCode",{parentName:"a"},"DeleteThreadComment"))," ",(0,l.kt)(u,{className:"secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);