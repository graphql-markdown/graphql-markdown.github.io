"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[5641],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(a),g=r,p=f["".concat(i,".").concat(g)]||f[g]||m[g]||o;return a?n.createElement(p,l(l({ref:t},c),{},{components:a})):n.createElement(p,l({ref:t},c))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[f]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},7449:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>c,Details:()=>p,SpecifiedBy:()=>f,assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var n=a(7462),r=a(7294),o=a(3905);const l={id:"user-staff-name-language",title:"UserStaffNameLanguage",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},s=void 0,i={unversionedId:"enums/user-staff-name-language",id:"enums/user-staff-name-language",title:"UserStaffNameLanguage",description:"The language the user wants to see staff and character names in",source:"@site/examples/schema/enums/user-staff-name-language.mdx",sourceDirName:"enums",slug:"/enums/user-staff-name-language",permalink:"/schema/enums/user-staff-name-language",draft:!1,tags:[],version:"current",frontMatter:{id:"user-staff-name-language",title:"UserStaffNameLanguage",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},u={},c=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),g=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>UserStaffNameLanguage.<b>ROMAJI_WESTERN</b></code>",id:"code-style-fontweight-normal-userstaffnamelanguagebromaji_westernbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>UserStaffNameLanguage.<b>ROMAJI</b></code>",id:"code-style-fontweight-normal-userstaffnamelanguagebromajibcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>UserStaffNameLanguage.<b>NATIVE</b></code>",id:"code-style-fontweight-normal-userstaffnamelanguagebnativebcode",level:4},{value:"Member of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:s=!1}=e;const[i,u]=(0,r.useState)(s);return(0,o.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&l)},d={Bullet:c,SpecifiedBy:f,Badge:m,toc:g,Details:p};function b(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The language the user wants to see staff and character names in"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum UserStaffNameLanguage {\n  ROMAJI_WESTERN\n  ROMAJI\n  NATIVE\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userstaffnamelanguagebromaji_westernbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStaffNameLanguage.",(0,o.kt)("b",null,"ROMAJI_WESTERN")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The romanization of the staff or character's native name, with western name ordering")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userstaffnamelanguagebromajibcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStaffNameLanguage.",(0,o.kt)("b",null,"ROMAJI")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The romanization of the staff or character's native name")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userstaffnamelanguagebnativebcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStaffNameLanguage.",(0,o.kt)("b",null,"NATIVE")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The staff or character's name in their native language")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/schema/mutations/update-user"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateUser"))," ",(0,o.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/objects/user-options"},(0,o.kt)("inlineCode",{parentName:"a"},"UserOptions"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);