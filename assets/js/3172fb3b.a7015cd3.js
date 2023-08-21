"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9524],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),g=i,y=p["".concat(c,".").concat(g)]||p[g]||u[g]||o;return n?a.createElement(y,r(r({ref:t},s),{},{components:n})):a.createElement(y,r({ref:t},s))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},211:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>y,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>g});var a=n(7462),i=n(7294),o=n(4137);const r={id:"toggle-activity-pin",title:"ToggleActivityPin",hide_table_of_contents:!1},l=void 0,c={unversionedId:"mutations/toggle-activity-pin",id:"mutations/toggle-activity-pin",title:"ToggleActivityPin",description:"Toggle activity to be pinned to the top of the user's activity feed",source:"@site/examples/default/mutations/toggle-activity-pin.mdx",sourceDirName:"mutations",slug:"/mutations/toggle-activity-pin",permalink:"/examples/default/mutations/toggle-activity-pin",draft:!1,tags:[],version:"current",frontMatter:{id:"toggle-activity-pin",title:"ToggleActivityPin",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SaveThread",permalink:"/examples/default/mutations/save-thread"},next:{title:"ToggleActivitySubscription",permalink:"/examples/default/mutations/toggle-activity-subscription"}},d={},s=()=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(i.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),g=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ToggleActivityPin.<b>id</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-toggleactivitypinbidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ToggleActivityPin.<b>pinned</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-toggleactivitypinbpinnedbcodeboolean-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ActivityUnion</code> <Badge class="badge badge--secondary" text="union"/>',id:"activityunion-",level:4}],y=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:l=!1}=e;const[c,d]=(0,i.useState)(l);return(0,o.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&r)},m={Bullet:s,SpecifiedBy:p,Badge:u,toc:g,Details:y};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Toggle activity to be pinned to the top of the user's activity feed"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"ToggleActivityPin(\n  id: Int\n  pinned: Boolean\n): ActivityUnion\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-toggleactivitypinbidbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ToggleActivityPin.",(0,o.kt)("b",null,"id"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Toggle activity id to be pinned")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-toggleactivitypinbpinnedbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ToggleActivityPin.",(0,o.kt)("b",null,"pinned"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/examples/default/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the activity should be pinned or unpinned")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"activityunion-"},(0,o.kt)("a",{parentName:"h4",href:"/examples/default/unions/activity-union"},(0,o.kt)("inlineCode",{parentName:"a"},"ActivityUnion"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Activity union type")))}f.isMDXComponent=!0}}]);