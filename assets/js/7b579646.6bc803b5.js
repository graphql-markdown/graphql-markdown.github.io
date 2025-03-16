"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["7049"],{44893:function(e,l,t){t.r(l),t.d(l,{Bullet:()=>c,SpecifiedBy:()=>h,Badge:()=>g,default:()=>m,frontMatter:()=>d,metadata:()=>a,Details:()=>x,assets:()=>o,toc:()=>b,contentTitle:()=>r});var a=JSON.parse('{"id":"types/objects/media-title","title":"MediaTitle","description":"The official titles of the media in various languages","source":"@site/examples/default/types/objects/media-title.mdx","sourceDirName":"types/objects","slug":"/types/objects/media-title","permalink":"/examples/default/types/objects/media-title","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"media-title","title":"MediaTitle"},"sidebar":"defaultSidebar","previous":{"title":"MediaTag","permalink":"/examples/default/types/objects/media-tag"},"next":{"title":"MediaTrailer","permalink":"/examples/default/types/objects/media-trailer"}}'),i=t("85893"),s=t("50065"),n=t("67294");let d={id:"media-title",title:"MediaTitle"},r=void 0,o={},c=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25CF\xa0"})}),h=e=>(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),g=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:e.class,children:e.text})}),x=({dataOpen:e,dataClose:l,children:t,startOpen:a=!1})=>{let[s,d]=(0,n.useState)(a);return(0,i.jsxs)("details",{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)("summary",{onClick:e=>{e.preventDefault(),d(e=>!e)},style:{listStyle:"none"},children:s?e:l}),s&&t]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>MediaTitle.<b>romaji</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary"></Badge>',id:"mediatitleromajistring-",level:4},{value:'<code>MediaTitle.romaji.<b>stylised</b></code><Bullet></Bullet><code><b>Boolean</b></code> <Badge class="badge badge--secondary"></Badge>',id:"mediatitleromajistylisedboolean-",level:5},{value:'<code>MediaTitle.<b>english</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary"></Badge>',id:"mediatitleenglishstring-",level:4},{value:'<code>MediaTitle.english.<b>stylised</b></code><Bullet></Bullet><code><b>Boolean</b></code> <Badge class="badge badge--secondary"></Badge>',id:"mediatitleenglishstylisedboolean-",level:5},{value:'<code>MediaTitle.<b>native</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary"></Badge>',id:"mediatitlenativestring-",level:4},{value:'<code>MediaTitle.native.<b>stylised</b></code><Bullet></Bullet><code><b>Boolean</b></code> <Badge class="badge badge--secondary"></Badge>',id:"mediatitlenativestylisedboolean-",level:5},{value:'<code>MediaTitle.<b>userPreferred</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary"></Badge>',id:"mediatitleuserpreferredstring-",level:4},{value:"Member Of",id:"member-of",level:3}];function j(e){let l={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Head:t}=l;return t||function(e,l){throw Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t,{children:[(0,i.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,i.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,i.jsx)(l.p,{children:"The official titles of the media in various languages"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-graphql",children:"type MediaTitle {\n  romaji(stylised: Boolean): String\n  english(stylised: Boolean): String\n  native(stylised: Boolean): String\n  userPreferred: String\n}\n"})}),"\n",(0,i.jsx)(l.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(l.h4,{id:"mediatitleromajistring-",children:[(0,i.jsx)(l.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTitle.",(0,i.jsx)("b",{children:"romaji"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(l.a,{href:"/examples/default/types/scalars/string",children:(0,i.jsx)("code",{style:{fontWeight:"normal"},children:(0,i.jsx)("b",{children:"String"})})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(l.p,{children:"The romanization of the native language title"}),"\n",(0,i.jsxs)(l.h5,{id:"mediatitleromajistylisedboolean-",children:[(0,i.jsx)(l.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTitle.romaji.",(0,i.jsx)("b",{children:"stylised"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(l.a,{href:"/examples/default/types/scalars/boolean",children:(0,i.jsx)("code",{style:{fontWeight:"normal"},children:(0,i.jsx)("b",{children:"Boolean"})})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(l.h4,{id:"mediatitleenglishstring-",children:[(0,i.jsx)(l.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTitle.",(0,i.jsx)("b",{children:"english"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(l.a,{href:"/examples/default/types/scalars/string",children:(0,i.jsx)("code",{style:{fontWeight:"normal"},children:(0,i.jsx)("b",{children:"String"})})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(l.p,{children:"The official english title"}),"\n",(0,i.jsxs)(l.h5,{id:"mediatitleenglishstylisedboolean-",children:[(0,i.jsx)(l.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTitle.english.",(0,i.jsx)("b",{children:"stylised"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(l.a,{href:"/examples/default/types/scalars/boolean",children:(0,i.jsx)("code",{style:{fontWeight:"normal"},children:(0,i.jsx)("b",{children:"Boolean"})})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(l.h4,{id:"mediatitlenativestring-",children:[(0,i.jsx)(l.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTitle.",(0,i.jsx)("b",{children:"native"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(l.a,{href:"/examples/default/types/scalars/string",children:(0,i.jsx)("code",{style:{fontWeight:"normal"},children:(0,i.jsx)("b",{children:"String"})})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(l.p,{children:"Official title in it's native language"}),"\n",(0,i.jsxs)(l.h5,{id:"mediatitlenativestylisedboolean-",children:[(0,i.jsx)(l.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTitle.native.",(0,i.jsx)("b",{children:"stylised"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(l.a,{href:"/examples/default/types/scalars/boolean",children:(0,i.jsx)("code",{style:{fontWeight:"normal"},children:(0,i.jsx)("b",{children:"Boolean"})})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(l.h4,{id:"mediatitleuserpreferredstring-",children:[(0,i.jsx)(l.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaTitle.",(0,i.jsx)("b",{children:"userPreferred"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(l.a,{href:"/examples/default/types/scalars/string",children:(0,i.jsx)("code",{style:{fontWeight:"normal"},children:(0,i.jsx)("b",{children:"String"})})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(l.p,{children:"The currently authenticated users preferred title language. Default romaji for non-authenticated"}),"\n",(0,i.jsx)(l.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(l.p,{children:[(0,i.jsx)(l.a,{href:"/examples/default/types/objects/media",children:(0,i.jsx)(l.code,{children:"Media"})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function m(e={}){let{wrapper:l}={...(0,s.a)(),...e.components};return l?(0,i.jsx)(l,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},50065:function(e,l,t){t.d(l,{Z:function(){return d},a:function(){return n}});var a=t(67294);let i={},s=a.createContext(i);function n(e){let l=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(l):{...l,...e}},[l,e])}function d(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),a.createElement(s.Provider,{value:l},e.children)}}}]);