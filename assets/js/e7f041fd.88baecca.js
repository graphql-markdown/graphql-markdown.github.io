"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["7736"],{81761:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>a,assets:()=>c,toc:()=>d,contentTitle:()=>u});var a=JSON.parse('{"id":"schema","title":"Schema Documentation","description":"This documentation has been automatically generated using AniList APIv2 endpoint with following plugin configuration:","source":"@site/examples/default/anilist.md","sourceDirName":".","slug":"/","permalink":"/examples/default/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"schema","slug":"/","title":"Schema Documentation","sidebar_position":1,"hide_table_of_contents":true,"pagination_next":null,"pagination_prev":null,"sidebar_class_name":"navbar__toggle"},"sidebar":"defaultSidebar"}'),r=t("85893"),l=t("50065"),o=t("47902"),i=t("5525");let s={id:"schema",slug:"/",title:"Schema Documentation",sidebar_position:1,hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,sidebar_class_name:"navbar__toggle"},u=void 0,c={},d=[];function p(e){let n={a:"a",code:"code",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["This documentation has been automatically generated using ",(0,r.jsx)(n.a,{href:"https://anilist.gitbook.io/anilist-apiv2-docs/",children:"AniList APIv2"})," endpoint with following plugin configuration:"]}),"\n",(0,r.jsxs)(o.Z,{groupId:"config",children:[(0,r.jsx)(i.Z,{value:"docusaurus",label:"Docusaurus (JSON)",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "schema": "https://graphql.anilist.co/",\n  "linkRoot": "/examples/default",\n  "baseURL": ".",\n  "homepage": "data/anilist.md",\n  "loaders": {\n    "UrlLoader": {\n      "module": "@graphql-tools/url-loader",\n      "options": { "method": "POST" }\n    }\n  },\n  "docOptions": {\n    "frontMatter": {\n      "pagination_next": null,\n      "pagination_prev": null\n    }\n  },\n  "printTypeOptions": {\n    "deprecated": "group"\n  }\n}\n'})})}),(0,r.jsx)(i.Z,{value:"graphql-config",label:"GraphQL Config (YAML)",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'schema: https://graphql.anilist.co/\nextensions:\n  graphql-markdown:\n    linkRoot: "/examples/default"\n    baseURL: "."\n    homepage: data/anilist.md\n    loaders:\n      UrlLoader:\n        module: "@graphql-tools/url-loader"\n        options:\n          method: POST\n    docOptions:\n      frontMatter:\n        pagination_next: null\n        pagination_prev: null\n    printTypeOptions:\n      deprecated: group\n'})})}),(0,r.jsx)(i.Z,{value:"cli",label:"CLI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx docusaurus graphql-to-doc \\\n    --homepage data/anilist.md \\\n    --schema https://graphql.anilist.co/ \\\n    --base . \\\n    --link /examples/default \\\n    --deprecated group\n"})})})]}),"\n",(0,r.jsx)("small",{children:(0,r.jsx)("i",{children:"Generated on 3/28/2025, 3:19:33 PM."})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},5525:function(e,n,t){t.d(n,{Z:()=>l});var a=t("85893");t("67294");var r=t("67026");function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)("tabItem_Ymn6",l),hidden:t,children:n})}},47902:function(e,n,t){t.d(n,{Z:()=>v});var a=t("85893"),r=t("67294"),l=t("67026"),o=t("69599"),i=t("16550"),s=t("32000"),u=t("4520"),c=t("38341"),d=t("76009");function p(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var m=t("7227");function f(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:s}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{let n=e.currentTarget,t=s[u.indexOf(n)].value;t!==r&&(c(n),i(t))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{let t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1]}}n?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n),children:s.map(e=>{let{value:n,label:t,attributes:o}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{u.push(e)},onKeyDown:p,onClick:d,...o,className:(0,l.Z)("tabs__item","tabItem_LNqP",o?.className,{"tabs__item--active":r===n}),children:t??n},n)})})}function g(e){let{lazy:n,children:t,selectedValue:o}=e,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=i.find(e=>e.props.value===o);return e?(0,r.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:a}=e,l=function(e){let{values:n,children:t}=e;return(0,r.useMemo)(()=>{let e=n??p(t).map(e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[o,m]=(0,r.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let a=t.find(e=>e.default)??t[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:n,tabValues:l})),[f,g]=function(e){let{queryString:n=!1,groupId:t}=e,a=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(l),(0,r.useCallback)(e=>{if(!l)return;let n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})},[l,a])]}({queryString:t,groupId:a}),[b,v]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[a,l]=(0,d.Nk)(t);return[a,(0,r.useCallback)(e=>{t&&l.set(e)},[t,l])]}({groupId:a}),x=(()=>{let e=f??b;return h({value:e,tabValues:l})?e:null})();return(0,s.Z)(()=>{x&&m(x)},[x]),{selectedValue:o,selectValue:(0,r.useCallback)(e=>{if(!h({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);m(e),g(e),v(e)},[g,v,l]),tabValues:l}}(e);return(0,a.jsxs)("div",{className:(0,l.Z)("tabs-container","tabList__CuJ"),children:[(0,a.jsx)(f,{...n,...e}),(0,a.jsx)(g,{...n,...e})]})}function v(e){let n=(0,m.Z)();return(0,a.jsx)(b,{...e,children:p(e.children)},String(n))}},50065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var a=t(67294);let r={},l=a.createContext(r);function o(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);