"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[192],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>b});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=c(a),p=o,b=m["".concat(d,".").concat(p)]||m[p]||u[p]||r;return a?n.createElement(b,l(l({ref:t},i),{},{components:a})):n.createElement(b,l({ref:t},i))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[m]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1654:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>m,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var n=a(7462),o=a(7294),r=a(3905);const l={id:"user-mod-data",title:"UserModData",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,d={unversionedId:"objects/user-mod-data",id:"objects/user-mod-data",title:"UserModData",description:"User data for moderators",source:"@site/examples/schema/objects/user-mod-data.mdx",sourceDirName:"objects",slug:"/objects/user-mod-data",permalink:"/schema/objects/user-mod-data",draft:!1,tags:[],version:"current",frontMatter:{id:"user-mod-data",title:"UserModData",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UserModData.<b>alts</b></code><Bullet /><code>[User]</code> <Badge className="secondary" text="list"/> <Badge className="secondary" text="object"/>',id:"code-style-fontweight-normal-usermoddatabaltsbcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserModData.<b>bans</b></code><Bullet /><code>Json</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-usermoddatabbansbcodejson-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserModData.<b>ip</b></code><Bullet /><code>Json</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-usermoddatabipbcodejson-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserModData.<b>counts</b></code><Bullet /><code>Json</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-usermoddatabcountsbcodejson-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserModData.<b>privacy</b></code><Bullet /><code>Int</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-usermoddatabprivacybcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserModData.<b>email</b></code><Bullet /><code>String</code> <Badge className="secondary" text="scalar"/>',id:"code-style-fontweight-normal-usermoddatabemailbcodestring-",level:4}],m=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:i,Bullet:m,SpecifiedBy:u,Badge:p};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"User data for moderators"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserModData {\n  alts: [User]\n  bans: Json\n  ip: Json\n  counts: Json\n  privacy: Int\n  email: String\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-usermoddatabaltsbcodeuser--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserModData.",(0,r.kt)("b",null,"alts"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,r.kt)("inlineCode",{parentName:"a"},"[User]"))," ",(0,r.kt)(p,{className:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(p,{className:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-usermoddatabbansbcodejson-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserModData.",(0,r.kt)("b",null,"bans"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/json"},(0,r.kt)("inlineCode",{parentName:"a"},"Json"))," ",(0,r.kt)(p,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-usermoddatabipbcodejson-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserModData.",(0,r.kt)("b",null,"ip"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/json"},(0,r.kt)("inlineCode",{parentName:"a"},"Json"))," ",(0,r.kt)(p,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-usermoddatabcountsbcodejson-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserModData.",(0,r.kt)("b",null,"counts"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/json"},(0,r.kt)("inlineCode",{parentName:"a"},"Json"))," ",(0,r.kt)(p,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-usermoddatabprivacybcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserModData.",(0,r.kt)("b",null,"privacy"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(p,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-usermoddatabemailbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UserModData.",(0,r.kt)("b",null,"email"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(p,{className:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null))}f.isMDXComponent=!0}}]);