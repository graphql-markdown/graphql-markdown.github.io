"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[7320],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),i=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(a),g=r,p=m["".concat(u,".").concat(g)]||m[g]||f[g]||o;return a?n.createElement(p,l(l({ref:t},c),{},{components:a})):n.createElement(p,l({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},86:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>f,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=a(7462),r=a(7294),o=a(3905);const l={id:"user-staff-name-language",title:"UserStaffNameLanguage",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,u={unversionedId:"schema/enums/user-staff-name-language",id:"schema/enums/user-staff-name-language",title:"UserStaffNameLanguage",description:"The language the user wants to see staff and character names in",source:"@site/docs/schema/enums/user-staff-name-language.mdx",sourceDirName:"schema/enums",slug:"/schema/enums/user-staff-name-language",permalink:"/schema/enums/user-staff-name-language",draft:!1,tags:[],version:"current",frontMatter:{id:"user-staff-name-language",title:"UserStaffNameLanguage",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},i={},c=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>UserStaffNameLanguage.<b>ROMAJI_WESTERN</b></code>",id:"code-style-fontweight-normal-userstaffnamelanguagebromaji_westernbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>UserStaffNameLanguage.<b>ROMAJI</b></code>",id:"code-style-fontweight-normal-userstaffnamelanguagebromajibcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>UserStaffNameLanguage.<b>NATIVE</b></code>",id:"code-style-fontweight-normal-userstaffnamelanguagebnativebcode",level:4},{value:"Member of",id:"member-of",level:3}],f=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),p={toc:c,Bullet:f,SpecifiedBy:m,Badge:g};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The language the user wants to see staff and character names in"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum UserStaffNameLanguage {\n  ROMAJI_WESTERN\n  ROMAJI\n  NATIVE\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userstaffnamelanguagebromaji_westernbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStaffNameLanguage.",(0,o.kt)("b",null,"ROMAJI_WESTERN")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The romanization of the staff or character's native name, with western name ordering")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userstaffnamelanguagebromajibcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStaffNameLanguage.",(0,o.kt)("b",null,"ROMAJI")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The romanization of the staff or character's native name")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userstaffnamelanguagebnativebcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserStaffNameLanguage.",(0,o.kt)("b",null,"NATIVE")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The staff or character's name in their native language")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/schema/mutations/update-user"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateUser"))," ",(0,o.kt)(g,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/schema/objects/user-options"},(0,o.kt)("inlineCode",{parentName:"a"},"UserOptions"))," ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})))}d.isMDXComponent=!0}}]);