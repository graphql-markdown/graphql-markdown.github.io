"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["4619"],{61366:function(e,a,r){r.r(a),r.d(a,{Bullet:()=>c,SpecifiedBy:()=>g,Badge:()=>m,default:()=>f,frontMatter:()=>d,metadata:()=>t,Details:()=>h,assets:()=>o,toc:()=>x,contentTitle:()=>l});var t=JSON.parse('{"id":"types/objects/media-cover-image","title":"MediaCoverImage","description":"No description","source":"@site/examples/default/types/objects/media-cover-image.mdx","sourceDirName":"types/objects","slug":"/types/objects/media-cover-image","permalink":"/examples/default/types/objects/media-cover-image","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"media-cover-image","title":"MediaCoverImage"},"sidebar":"defaultSidebar","previous":{"title":"MediaConnection","permalink":"/examples/default/types/objects/media-connection"},"next":{"title":"MediaDataChangeNotification","permalink":"/examples/default/types/objects/media-data-change-notification"}}'),i=r("85893"),n=r("50065"),s=r("67294");let d={id:"media-cover-image",title:"MediaCoverImage"},l=void 0,o={},c=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25CF\xa0"})}),g=e=>(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),m=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:a,children:r,startOpen:t=!1})=>{let[n,d]=(0,s.useState)(t);return(0,i.jsxs)("details",{...n?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)("summary",{onClick:e=>{e.preventDefault(),d(e=>!e)},style:{listStyle:"none"},children:n?e:a}),n&&r]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>MediaCoverImage.<b>extraLarge</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary "></Badge>',id:"mediacoverimageextralargestring-",level:4},{value:'<code>MediaCoverImage.<b>large</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary "></Badge>',id:"mediacoverimagelargestring-",level:4},{value:'<code>MediaCoverImage.<b>medium</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary "></Badge>',id:"mediacoverimagemediumstring-",level:4},{value:'<code>MediaCoverImage.<b>color</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary "></Badge>',id:"mediacoverimagecolorstring-",level:4},{value:"Member Of",id:"member-of",level:3}];function u(e){let a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Head:r}=a;return r||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r,{children:[(0,i.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,i.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,i.jsx)(a.p,{children:"No description"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-graphql",children:"type MediaCoverImage {\n  extraLarge: String\n  large: String\n  medium: String\n  color: String\n}\n"})}),"\n",(0,i.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(a.h4,{id:"mediacoverimageextralargestring-",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaCoverImage.",(0,i.jsx)("b",{children:"extraLarge"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(a.a,{href:"/examples/default/types/scalars/string",children:(0,i.jsx)("code",{style:{fontWeight:"normal"},children:(0,i.jsx)("b",{children:"String"})})})," ",(0,i.jsx)(m,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,i.jsx)(a.p,{children:"The cover image url of the media at its largest size. If this size isn't available, large will be provided instead."}),"\n",(0,i.jsxs)(a.h4,{id:"mediacoverimagelargestring-",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaCoverImage.",(0,i.jsx)("b",{children:"large"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(a.a,{href:"/examples/default/types/scalars/string",children:(0,i.jsx)("code",{style:{fontWeight:"normal"},children:(0,i.jsx)("b",{children:"String"})})})," ",(0,i.jsx)(m,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,i.jsx)(a.p,{children:"The cover image url of the media at a large size"}),"\n",(0,i.jsxs)(a.h4,{id:"mediacoverimagemediumstring-",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaCoverImage.",(0,i.jsx)("b",{children:"medium"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(a.a,{href:"/examples/default/types/scalars/string",children:(0,i.jsx)("code",{style:{fontWeight:"normal"},children:(0,i.jsx)("b",{children:"String"})})})," ",(0,i.jsx)(m,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,i.jsx)(a.p,{children:"The cover image url of the media at medium size"}),"\n",(0,i.jsxs)(a.h4,{id:"mediacoverimagecolorstring-",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaCoverImage.",(0,i.jsx)("b",{children:"color"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(a.a,{href:"/examples/default/types/scalars/string",children:(0,i.jsx)("code",{style:{fontWeight:"normal"},children:(0,i.jsx)("b",{children:"String"})})})," ",(0,i.jsx)(m,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,i.jsx)(a.p,{children:"Average #hex color of cover image"}),"\n",(0,i.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:"/examples/default/types/objects/media",children:(0,i.jsx)(a.code,{children:"Media"})})," ",(0,i.jsx)(m,{class:"badge badge--secondary badge--relation",text:"object"})]})]})}function f(e={}){let{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},50065:function(e,a,r){r.d(a,{Z:function(){return d},a:function(){return s}});var t=r(67294);let i={},n=t.createContext(i);function s(e){let a=t.useContext(n);return t.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(n.Provider,{value:a},e.children)}}}]);