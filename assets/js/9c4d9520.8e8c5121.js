"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["5141"],{38202:function(e,n,t){t.r(n),t.d(n,{Bullet:()=>c,SpecifiedBy:()=>u,Badge:()=>x,default:()=>b,frontMatter:()=>d,metadata:()=>a,Details:()=>p,assets:()=>o,toc:()=>h,contentTitle:()=>r});var a=JSON.parse('{"id":"types/inputs/media-external-link-input","title":"MediaExternalLinkInput","description":"An external link to another site related to the media","source":"@site/examples/default/types/inputs/media-external-link-input.mdx","sourceDirName":"types/inputs","slug":"/types/inputs/media-external-link-input","permalink":"/examples/default/types/inputs/media-external-link-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"media-external-link-input","title":"MediaExternalLinkInput"},"sidebar":"defaultSidebar","previous":{"title":"ListActivityOptionInput","permalink":"/examples/default/types/inputs/list-activity-option-input"},"next":{"title":"MediaListOptionsInput","permalink":"/examples/default/types/inputs/media-list-options-input"}}'),l=t("85893"),i=t("50065"),s=t("67294");let d={id:"media-external-link-input",title:"MediaExternalLinkInput"},r=void 0,o={},c=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25CF\xa0"})}),u=e=>(0,l.jsxs)(l.Fragment,{children:["Specification",(0,l.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),x=e=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("span",{className:e.class,children:e.text})}),p=({dataOpen:e,dataClose:n,children:t,startOpen:a=!1})=>{let[i,d]=(0,s.useState)(a);return(0,l.jsxs)("details",{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,l.jsx)("summary",{onClick:e=>{e.preventDefault(),d(e=>!e)},style:{listStyle:"none"},children:i?e:n}),i&&t]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>MediaExternalLinkInput.<b>id</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary badge--non_null"></Badge> <Badge class="badge badge--secondary "></Badge>',id:"mediaexternallinkinputidint--",level:4},{value:'<code>MediaExternalLinkInput.<b>url</b></code><Bullet></Bullet><code><b>String!</b></code> <Badge class="badge badge--secondary badge--non_null"></Badge> <Badge class="badge badge--secondary "></Badge>',id:"mediaexternallinkinputurlstring--",level:4},{value:'<code>MediaExternalLinkInput.<b>site</b></code><Bullet></Bullet><code><b>String!</b></code> <Badge class="badge badge--secondary badge--non_null"></Badge> <Badge class="badge badge--secondary "></Badge>',id:"mediaexternallinkinputsitestring--",level:4}];function g(e){let n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Head:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t,{children:[(0,l.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,l.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,l.jsx)(n.p,{children:"An external link to another site related to the media"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-graphql",children:"input MediaExternalLinkInput {\n  id: Int!\n  url: String!\n  site: String!\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,l.jsxs)(n.h4,{id:"mediaexternallinkinputidint--",children:[(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaExternalLinkInput.",(0,l.jsx)("b",{children:"id"})]})}),(0,l.jsx)(c,{}),(0,l.jsx)(n.a,{href:"/examples/default/types/scalars/int",children:(0,l.jsx)("code",{style:{fontWeight:"normal"},children:(0,l.jsx)("b",{children:"Int!"})})})," ",(0,l.jsx)(x,{class:"badge badge--secondary badge--non_null",text:"non-null"})," ",(0,l.jsx)(x,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,l.jsx)(n.p,{children:"The id of the external link"}),"\n",(0,l.jsxs)(n.h4,{id:"mediaexternallinkinputurlstring--",children:[(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaExternalLinkInput.",(0,l.jsx)("b",{children:"url"})]})}),(0,l.jsx)(c,{}),(0,l.jsx)(n.a,{href:"/examples/default/types/scalars/string",children:(0,l.jsx)("code",{style:{fontWeight:"normal"},children:(0,l.jsx)("b",{children:"String!"})})})," ",(0,l.jsx)(x,{class:"badge badge--secondary badge--non_null",text:"non-null"})," ",(0,l.jsx)(x,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,l.jsx)(n.p,{children:"The url of the external link"}),"\n",(0,l.jsxs)(n.h4,{id:"mediaexternallinkinputsitestring--",children:[(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaExternalLinkInput.",(0,l.jsx)("b",{children:"site"})]})}),(0,l.jsx)(c,{}),(0,l.jsx)(n.a,{href:"/examples/default/types/scalars/string",children:(0,l.jsx)("code",{style:{fontWeight:"normal"},children:(0,l.jsx)("b",{children:"String!"})})})," ",(0,l.jsx)(x,{class:"badge badge--secondary badge--non_null",text:"non-null"})," ",(0,l.jsx)(x,{class:"badge badge--secondary ",text:"scalar"})]}),"\n",(0,l.jsx)(n.p,{children:"The site location of the external link"})]})}function b(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(g,{...e})}):g(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return s}});var a=t(67294);let l={},i=a.createContext(l);function s(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);