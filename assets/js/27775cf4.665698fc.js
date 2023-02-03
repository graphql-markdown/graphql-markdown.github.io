"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[8780],{3905:(e,o,t)=>{t.d(o,{Zo:()=>i,kt:()=>k});var l=t(7294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);o&&(l=l.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function d(e,o){if(null==e)return{};var t,l,n=function(e,o){if(null==e)return{};var t,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=l.createContext({}),c=function(e){var o=l.useContext(m),t=o;return e&&(t="function"==typeof e?e(o):r(r({},o),e)),t},i=function(e){var o=c(e.components);return l.createElement(m.Provider,{value:o},e.children)},b="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return l.createElement(l.Fragment,{},o)}},s=l.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,m=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),b=c(t),s=n,k=b["".concat(m,".").concat(s)]||b[s]||u[s]||a;return t?l.createElement(k,r(r({ref:o},i),{},{components:t})):l.createElement(k,r({ref:o},i))}));function k(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,r=new Array(a);r[0]=s;var d={};for(var m in o)hasOwnProperty.call(o,m)&&(d[m]=o[m]);d.originalType=e,d[b]="string"==typeof e?e:n,r[1]=d;for(var c=2;c<a;c++)r[c]=t[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}s.displayName="MDXCreateElement"},5692:(e,o,t)=>{t.r(o),t.d(o,{Badge:()=>s,Bullet:()=>b,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>r,metadata:()=>m,toc:()=>i});var l=t(7462),n=t(7294),a=t(3905);const r={id:"mod-role",title:"ModRole",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,m={unversionedId:"enums/mod-role",id:"enums/mod-role",title:"ModRole",description:"Mod role enums",source:"@site/examples/schema/enums/mod-role.mdx",sourceDirName:"enums",slug:"/enums/mod-role",permalink:"/schema/enums/mod-role",draft:!1,tags:[],version:"current",frontMatter:{id:"mod-role",title:"ModRole",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},i=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>ModRole.<b>ADMIN</b></code>",id:"code-style-fontweight-normal-modrolebadminbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ModRole.<b>LEAD_DEVELOPER</b></code>",id:"code-style-fontweight-normal-modroleblead_developerbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ModRole.<b>DEVELOPER</b></code>",id:"code-style-fontweight-normal-modrolebdeveloperbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ModRole.<b>LEAD_COMMUNITY</b></code>",id:"code-style-fontweight-normal-modroleblead_communitybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ModRole.<b>COMMUNITY</b></code>",id:"code-style-fontweight-normal-modrolebcommunitybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ModRole.<b>DISCORD_COMMUNITY</b></code>",id:"code-style-fontweight-normal-modrolebdiscord_communitybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ModRole.<b>LEAD_ANIME_DATA</b></code>",id:"code-style-fontweight-normal-modroleblead_anime_databcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ModRole.<b>ANIME_DATA</b></code>",id:"code-style-fontweight-normal-modrolebanime_databcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ModRole.<b>LEAD_MANGA_DATA</b></code>",id:"code-style-fontweight-normal-modroleblead_manga_databcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ModRole.<b>MANGA_DATA</b></code>",id:"code-style-fontweight-normal-modrolebmanga_databcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ModRole.<b>LEAD_SOCIAL_MEDIA</b></code>",id:"code-style-fontweight-normal-modroleblead_social_mediabcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ModRole.<b>SOCIAL_MEDIA</b></code>",id:"code-style-fontweight-normal-modrolebsocial_mediabcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ModRole.<b>RETIRED</b></code>",id:"code-style-fontweight-normal-modrolebretiredbcode",level:4},{value:"Member of",id:"member-of",level:3}],b=()=>(0,a.kt)(n.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(n.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,a.kt)(n.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),k={toc:i,Bullet:b,SpecifiedBy:u,Badge:s};function f(e){let{components:o,...t}=e;return(0,a.kt)("wrapper",(0,l.Z)({},k,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Mod role enums"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ModRole {\n  ADMIN\n  LEAD_DEVELOPER\n  DEVELOPER\n  LEAD_COMMUNITY\n  COMMUNITY\n  DISCORD_COMMUNITY\n  LEAD_ANIME_DATA\n  ANIME_DATA\n  LEAD_MANGA_DATA\n  MANGA_DATA\n  LEAD_SOCIAL_MEDIA\n  SOCIAL_MEDIA\n  RETIRED\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-modrolebadminbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ModRole.",(0,a.kt)("b",null,"ADMIN")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"An AniList administrator")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-modroleblead_developerbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ModRole.",(0,a.kt)("b",null,"LEAD_DEVELOPER")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A head developer of AniList")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-modrolebdeveloperbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ModRole.",(0,a.kt)("b",null,"DEVELOPER")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"An AniList developer")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-modroleblead_communitybcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ModRole.",(0,a.kt)("b",null,"LEAD_COMMUNITY")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A lead community moderator")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-modrolebcommunitybcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ModRole.",(0,a.kt)("b",null,"COMMUNITY")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A community moderator")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-modrolebdiscord_communitybcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ModRole.",(0,a.kt)("b",null,"DISCORD_COMMUNITY")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A discord community moderator")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-modroleblead_anime_databcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ModRole.",(0,a.kt)("b",null,"LEAD_ANIME_DATA")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A lead anime data moderator")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-modrolebanime_databcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ModRole.",(0,a.kt)("b",null,"ANIME_DATA")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"An anime data moderator")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-modroleblead_manga_databcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ModRole.",(0,a.kt)("b",null,"LEAD_MANGA_DATA")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A lead manga data moderator")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-modrolebmanga_databcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ModRole.",(0,a.kt)("b",null,"MANGA_DATA")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A manga data moderator")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-modroleblead_social_mediabcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ModRole.",(0,a.kt)("b",null,"LEAD_SOCIAL_MEDIA")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A lead social media moderator")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-modrolebsocial_mediabcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ModRole.",(0,a.kt)("b",null,"SOCIAL_MEDIA")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A social media moderator")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-modrolebretiredbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ModRole.",(0,a.kt)("b",null,"RETIRED")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A retired moderator")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/schema/objects/user"},(0,a.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,a.kt)(s,{className:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);