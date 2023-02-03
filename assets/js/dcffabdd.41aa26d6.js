"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[3501],{3905:(e,t,a)=>{a.d(t,{Zo:()=>f,kt:()=>u});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},f=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=i(a),m=o,u=p["".concat(s,".").concat(m)]||p[m]||d[m]||n;return a?r.createElement(u,l(l({ref:t},f),{},{components:a})):r.createElement(u,l({ref:t},f))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var i=2;i<n;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5005:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>d,assets:()=>i,contentTitle:()=>c,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>f});var r=a(7462),o=a(7294),n=a(3905);const l={id:"staff-role-type",title:"StaffRoleType",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},c=void 0,s={unversionedId:"objects/staff-role-type",id:"objects/staff-role-type",title:"StaffRoleType",description:"Voice actor role for a character",source:"@site/examples/schema/objects/staff-role-type.mdx",sourceDirName:"objects",slug:"/objects/staff-role-type",permalink:"/schema/objects/staff-role-type",draft:!1,tags:[],version:"current",frontMatter:{id:"staff-role-type",title:"StaffRoleType",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},i={},f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>StaffRoleType.<b>voiceActor</b></code><Bullet /><code>Staff</code> <Badge className="secondary" text="object"/>',id:"code-style-fontweight-normal-staffroletypebvoiceactorbcodestaff-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffRoleType.<b>roleNotes</b></code><Bullet /><code>String</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffroletypebrolenotesbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffRoleType.<b>dubGroup</b></code><Bullet /><code>String</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffroletypebdubgroupbcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:f,Bullet:p,SpecifiedBy:d,Badge:m};function y(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Voice actor role for a character"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type StaffRoleType {\n  voiceActor: Staff\n  roleNotes: String\n  dubGroup: String\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-staffroletypebvoiceactorbcodestaff-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"StaffRoleType.",(0,n.kt)("b",null,"voiceActor"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,n.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,n.kt)(m,{className:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The voice actors of the character")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-staffroletypebrolenotesbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"StaffRoleType.",(0,n.kt)("b",null,"roleNotes"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(m,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Notes regarding the VA's role for the character")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-staffroletypebdubgroupbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"StaffRoleType.",(0,n.kt)("b",null,"dubGroup"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(m,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant.")),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/schema/objects/character-edge"},(0,n.kt)("inlineCode",{parentName:"a"},"CharacterEdge"))," ",(0,n.kt)(m,{className:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/schema/objects/media-edge"},(0,n.kt)("inlineCode",{parentName:"a"},"MediaEdge"))," ",(0,n.kt)(m,{className:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);