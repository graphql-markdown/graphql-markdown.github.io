"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["1674"],{91874:function(e,n,l){l.r(n),l.d(n,{Bullet:()=>o,SpecifiedBy:()=>x,Badge:()=>h,default:()=>u,frontMatter:()=>i,metadata:()=>a,Details:()=>g,assets:()=>c,toc:()=>b,contentTitle:()=>r});var a=JSON.parse('{"id":"types/objects/media-external-link","title":"MediaExternalLink","description":"An external link to another site related to the media or staff member","source":"@site/examples/default/types/objects/media-external-link.mdx","sourceDirName":"types/objects","slug":"/types/objects/media-external-link","permalink":"/examples/default/types/objects/media-external-link","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"media-external-link","title":"MediaExternalLink"},"sidebar":"defaultSidebar","previous":{"title":"MediaEdge","permalink":"/examples/default/types/objects/media-edge"},"next":{"title":"MediaListCollection","permalink":"/examples/default/types/objects/media-list-collection"}}'),s=l("85893"),t=l("50065"),d=l("67294");let i={id:"media-external-link",title:"MediaExternalLink"},r=void 0,c={},o=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25CF\xa0"})}),x=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),g=({dataOpen:e,dataClose:n,children:l,startOpen:a=!1})=>{let[t,i]=(0,d.useState)(a);return(0,s.jsxs)("details",{...t?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),i(e=>!e)},style:{listStyle:"none"},children:t?e:n}),t&&l]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>MediaExternalLink.<b>id</b></code><Bullet></Bullet><code><b>Int!</b></code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"mediaexternallinkidint--",level:4},{value:'<code>MediaExternalLink.<b>url</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary"></Badge>',id:"mediaexternallinkurlstring-",level:4},{value:'<code>MediaExternalLink.<b>site</b></code><Bullet></Bullet><code><b>String!</b></code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"mediaexternallinksitestring--",level:4},{value:'<code>MediaExternalLink.<b>siteId</b></code><Bullet></Bullet><code><b>Int</b></code> <Badge class="badge badge--secondary"></Badge>',id:"mediaexternallinksiteidint-",level:4},{value:'<code>MediaExternalLink.<b>type</b></code><Bullet></Bullet><code><b>ExternalLinkType</b></code> <Badge class="badge badge--secondary"></Badge>',id:"mediaexternallinktypeexternallinktype-",level:4},{value:'<code>MediaExternalLink.<b>language</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary"></Badge>',id:"mediaexternallinklanguagestring-",level:4},{value:'<code>MediaExternalLink.<b>color</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary"></Badge>',id:"mediaexternallinkcolorstring-",level:4},{value:'<code>MediaExternalLink.<b>icon</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary"></Badge>',id:"mediaexternallinkiconstring-",level:4},{value:'<code>MediaExternalLink.<b>notes</b></code><Bullet></Bullet><code><b>String</b></code> <Badge class="badge badge--secondary"></Badge>',id:"mediaexternallinknotesstring-",level:4},{value:'<code>MediaExternalLink.<b>isDisabled</b></code><Bullet></Bullet><code><b>Boolean</b></code> <Badge class="badge badge--secondary"></Badge>',id:"mediaexternallinkisdisabledboolean-",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}];function j(e){let n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Head:l}=n;return l||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l,{children:[(0,s.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,s.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,s.jsx)(n.p,{children:"An external link to another site related to the media or staff member"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type MediaExternalLink {\n  id: Int!\n  url: String\n  site: String!\n  siteId: Int\n  type: ExternalLinkType\n  language: String\n  color: String\n  icon: String\n  notes: String\n  isDisabled: Boolean\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"mediaexternallinkidint--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaExternalLink.",(0,s.jsx)("b",{children:"id"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/examples/default/types/scalars/int",children:(0,s.jsx)("code",{style:{fontWeight:"normal"},children:(0,s.jsx)("b",{children:"Int!"})})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.p,{children:"The id of the external link"}),"\n",(0,s.jsxs)(n.h4,{id:"mediaexternallinkurlstring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaExternalLink.",(0,s.jsx)("b",{children:"url"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/examples/default/types/scalars/string",children:(0,s.jsx)("code",{style:{fontWeight:"normal"},children:(0,s.jsx)("b",{children:"String"})})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.p,{children:"The url of the external link or base url of link source"}),"\n",(0,s.jsxs)(n.h4,{id:"mediaexternallinksitestring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaExternalLink.",(0,s.jsx)("b",{children:"site"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/examples/default/types/scalars/string",children:(0,s.jsx)("code",{style:{fontWeight:"normal"},children:(0,s.jsx)("b",{children:"String!"})})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.p,{children:"The links website site name"}),"\n",(0,s.jsxs)(n.h4,{id:"mediaexternallinksiteidint-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaExternalLink.",(0,s.jsx)("b",{children:"siteId"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/examples/default/types/scalars/int",children:(0,s.jsx)("code",{style:{fontWeight:"normal"},children:(0,s.jsx)("b",{children:"Int"})})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.p,{children:"The links website site id"}),"\n",(0,s.jsxs)(n.h4,{id:"mediaexternallinktypeexternallinktype-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaExternalLink.",(0,s.jsx)("b",{children:"type"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/examples/default/types/enums/external-link-type",children:(0,s.jsx)("code",{style:{fontWeight:"normal"},children:(0,s.jsx)("b",{children:"ExternalLinkType"})})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(n.h4,{id:"mediaexternallinklanguagestring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaExternalLink.",(0,s.jsx)("b",{children:"language"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/examples/default/types/scalars/string",children:(0,s.jsx)("code",{style:{fontWeight:"normal"},children:(0,s.jsx)("b",{children:"String"})})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.p,{children:"Language the site content is in. See Staff language field for values."}),"\n",(0,s.jsxs)(n.h4,{id:"mediaexternallinkcolorstring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaExternalLink.",(0,s.jsx)("b",{children:"color"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/examples/default/types/scalars/string",children:(0,s.jsx)("code",{style:{fontWeight:"normal"},children:(0,s.jsx)("b",{children:"String"})})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.h4,{id:"mediaexternallinkiconstring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaExternalLink.",(0,s.jsx)("b",{children:"icon"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/examples/default/types/scalars/string",children:(0,s.jsx)("code",{style:{fontWeight:"normal"},children:(0,s.jsx)("b",{children:"String"})})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.p,{children:"The icon image url of the site. Not available for all links. Transparent PNG 64x64"}),"\n",(0,s.jsxs)(n.h4,{id:"mediaexternallinknotesstring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaExternalLink.",(0,s.jsx)("b",{children:"notes"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/examples/default/types/scalars/string",children:(0,s.jsx)("code",{style:{fontWeight:"normal"},children:(0,s.jsx)("b",{children:"String"})})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.h4,{id:"mediaexternallinkisdisabledboolean-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaExternalLink.",(0,s.jsx)("b",{children:"isDisabled"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/examples/default/types/scalars/boolean",children:(0,s.jsx)("code",{style:{fontWeight:"normal"},children:(0,s.jsx)("b",{children:"Boolean"})})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/examples/default/operations/queries/external-link-source-collection",children:(0,s.jsx)(n.code,{children:"ExternalLinkSourceCollection"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"query"})]}),"\n",(0,s.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/examples/default/types/objects/media",children:(0,s.jsx)(n.code,{children:"Media"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/examples/default/types/objects/media-submission-comparison",children:(0,s.jsx)(n.code,{children:"MediaSubmissionComparison"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/examples/default/types/objects/media-submission-edge",children:(0,s.jsx)(n.code,{children:"MediaSubmissionEdge"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/examples/default/types/objects/revision-history",children:(0,s.jsx)(n.code,{children:"RevisionHistory"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},50065:function(e,n,l){l.d(n,{Z:function(){return i},a:function(){return d}});var a=l(67294);let s={},t=a.createContext(s);function d(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);