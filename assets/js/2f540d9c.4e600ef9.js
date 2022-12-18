"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[693],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(y,r(r({ref:t},p),{},{components:n})):i.createElement(y,r({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3972:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var i=n(7462),o=n(7294),a=n(3905);const r={id:"list-activity-option",title:"ListActivityOption",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,c={unversionedId:"objects/list-activity-option",id:"objects/list-activity-option",title:"ListActivityOption",description:"No description",source:"@site/examples/schema/objects/list-activity-option.mdx",sourceDirName:"objects",slug:"/objects/list-activity-option",permalink:"/schema/objects/list-activity-option",draft:!1,tags:[],version:"current",frontMatter:{id:"list-activity-option",title:"ListActivityOption",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},s={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ListActivityOption.<b>disabled</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-listactivityoptionbdisabledbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ListActivityOption.<b>type</b></code><Bullet /><code>MediaListStatus</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-listactivityoptionbtypebcodemedialiststatus-",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:p,Bullet:d,SpecifiedBy:u,Badge:m};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type ListActivityOption {\n  disabled: Boolean\n  type: MediaListStatus\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-listactivityoptionbdisabledbcodeboolean-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ListActivityOption.",(0,a.kt)("b",null,"disabled"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-listactivityoptionbtypebcodemedialiststatus-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ListActivityOption.",(0,a.kt)("b",null,"type"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-status"},(0,a.kt)("inlineCode",{parentName:"a"},"MediaListStatus"))," ",(0,a.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/schema/objects/user-options"},(0,a.kt)("inlineCode",{parentName:"a"},"UserOptions"))," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);