"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[9577],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>y});var i=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=i.createContext({}),p=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=p(t.components);return i.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(y,r(r({ref:e},c),{},{components:n})):i.createElement(y,r({ref:e},c))}));function y(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5343:(t,e,n)=>{n.r(e),n.d(e,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(7462),a=n(7294),o=n(3905);const r={id:"list-activity-option-input",title:"ListActivityOptionInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,s={unversionedId:"inputs/list-activity-option-input",id:"inputs/list-activity-option-input",title:"ListActivityOptionInput",description:"No description",source:"@site/examples/schema/inputs/list-activity-option-input.mdx",sourceDirName:"inputs",slug:"/inputs/list-activity-option-input",permalink:"/schema/inputs/list-activity-option-input",draft:!1,tags:[],version:"current",frontMatter:{id:"list-activity-option-input",title:"ListActivityOptionInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},p={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ListActivityOptionInput.<b>disabled</b></code><Bullet /><code>Boolean</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-listactivityoptioninputbdisabledbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ListActivityOptionInput.<b>type</b></code><Bullet /><code>MediaListStatus</code> <Badge className="secondary" text="enum"/>',id:"code-style-fontweight-normal-listactivityoptioninputbtypebcodemedialiststatus-",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=t=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),m=t=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+t.className},t.text)),y={toc:c,Bullet:u,SpecifiedBy:d,Badge:m};function f(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,i.Z)({},y,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input ListActivityOptionInput {\n  disabled: Boolean\n  type: MediaListStatus\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-listactivityoptioninputbdisabledbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ListActivityOptionInput.",(0,o.kt)("b",null,"disabled"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(m,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-listactivityoptioninputbtypebcodemedialiststatus-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ListActivityOptionInput.",(0,o.kt)("b",null,"type"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-status"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaListStatus"))," ",(0,o.kt)(m,{className:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/schema/mutations/update-user"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateUser"))," ",(0,o.kt)(m,{className:"secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);