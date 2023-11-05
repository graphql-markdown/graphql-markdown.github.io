"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6857],{8798:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=t(5893),r=t(1151),l=t(3992),o=t(6257);const s={id:"schema",slug:"/",title:"Schema Documentation",sidebar_position:1,hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,sidebar_class_name:"navbar__toggle"},i=void 0,u={id:"schema",title:"Schema Documentation",description:"This documentation has been automatically generated using AniList APIv2 endpoint with following plugin configuration:",source:"@site/examples/default/anilist.md",sourceDirName:".",slug:"/",permalink:"/examples/default/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"schema",slug:"/",title:"Schema Documentation",sidebar_position:1,hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,sidebar_class_name:"navbar__toggle"},sidebar:"schemaSidebar"},c={},d=[];function p(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["This documentation has been automatically generated using ",(0,a.jsx)(n.a,{href:"https://anilist.gitbook.io/anilist-apiv2-docs/",children:"AniList APIv2"})," endpoint with following plugin configuration:"]}),"\n",(0,a.jsxs)(l.Z,{groupId:"config",children:[(0,a.jsx)(o.Z,{value:"docusaurus",label:"Docusaurus (JSON)",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "schema": "https://graphql.anilist.co/",\n  "linkRoot": "/examples/default",\n  "baseURL": ".",\n  "homepage": "data/anilist.md",\n  "loaders": {\n    "UrlLoader": {\n      "module": "@graphql-tools/url-loader",\n      "options": { "method": "POST" }\n    }\n  },\n  "printTypeOptions": {\n    "deprecated": "group"\n  },\n  "docOptions": {\n    "pagination": false,\n    "toc": false\n  }\n}\n'})})}),(0,a.jsx)(o.Z,{value:"graphql-config",label:"GraphQL Config (YAML)",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'schema: https://graphql.anilist.co/\nextensions:\n  graphql-markdown:\n    linkRoot: "/examples/default"\n    baseURL: "."\n    homepage: data/anilist.md\n    loaders:\n      UrlLoader:\n        module: "@graphql-tools/url-loader"\n        options:\n          method: POST\n    printTypeOptions:\n      deprecated: group\n    docOptions:\n      pagination: false\n      toc: false\n'})})}),(0,a.jsx)(o.Z,{value:"cli",label:"CLI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx docusaurus graphql-to-doc \\\n    --homepage data/anilist.md \\\n    --schema https://graphql.anilist.co/ \\\n    --base . \\\n    --link /examples/default \\\n    --noPagination \\\n    --deprecated group\n"})})})]}),"\n",(0,a.jsx)("small",{children:(0,a.jsx)("i",{children:"Generated on 11/5/2023, 4:02:25 PM."})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},6257:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var a=t(6010);const r={tabItem:"tabItem_Ymn6"};var l=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:t,children:n})}},3992:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(7294),r=t(6010),l=t(2957),o=t(6550),s=t(1270),i=t(5238),u=t(3609),c=t(2560);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=p(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[u,d]=m({queryString:t,groupId:r}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),g=(()=>{const e=u??f;return h({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=t(1048);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(5893);function x(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),r=s[t].value;r!==a&&(u(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...l,className:(0,r.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function _(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(_,{...e,...n})]})}function y(e){const n=(0,b.Z)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var a=t(7294);const r={},l=a.createContext(r);function o(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);