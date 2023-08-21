"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3794],{4137:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),s=c(n),u=r,f=s["".concat(i,".").concat(u)]||s[u]||p[u]||l;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[s]="string"==typeof e?e:r,o[1]=d;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2852:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>m,Details:()=>f,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>d,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=n(7294),l=n(4137);const o={id:"delete-thread-comment",title:"DeleteThreadComment",hide_table_of_contents:!1},d=void 0,i={unversionedId:"mutations/delete-thread-comment",id:"mutations/delete-thread-comment",title:"DeleteThreadComment",description:"Delete a thread comment",source:"@site/examples/default/mutations/delete-thread-comment.mdx",sourceDirName:"mutations",slug:"/mutations/delete-thread-comment",permalink:"/examples/default/mutations/delete-thread-comment",draft:!1,tags:[],version:"current",frontMatter:{id:"delete-thread-comment",title:"DeleteThreadComment",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DeleteReview",permalink:"/examples/default/mutations/delete-review"},next:{title:"DeleteThread",permalink:"/examples/default/mutations/delete-thread"}},c={},m=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteThreadComment.<b>id</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-deletethreadcommentbidbcodeint-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Deleted</code> <Badge class="badge badge--secondary" text="object"/>',id:"deleted-",level:4}],f=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:d=!1}=e;const[i,c]=(0,r.useState)(d);return(0,l.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&o)},y={Bullet:m,SpecifiedBy:s,Badge:p,toc:u,Details:f};function b(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Delete a thread comment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"DeleteThreadComment(\n  id: Int\n): Deleted\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-deletethreadcommentbidbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DeleteThreadComment.",(0,l.kt)("b",null,"id"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The id of the thread comment to delete")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"deleted-"},(0,l.kt)("a",{parentName:"h4",href:"/examples/default/objects/deleted"},(0,l.kt)("inlineCode",{parentName:"a"},"Deleted"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Deleted data type")))}b.isMDXComponent=!0}}]);