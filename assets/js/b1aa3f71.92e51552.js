"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[7981],{5734:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=t(5893),a=t(1151),i=t(3992),o=t(6257);const s={id:"schema",slug:"/",title:"Schema Documentation",sidebar_position:1,hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,sidebar_class_name:"navbar__toggle"},l=void 0,u={id:"schema",title:"Schema Documentation",description:"This is an example of documentation grouping with GraphQL directive using the groupByDirective option (see documentation):",source:"@site/examples/group-by/groups.md",sourceDirName:".",slug:"/",permalink:"/examples/group-by/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"schema",slug:"/",title:"Schema Documentation",sidebar_position:1,hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,sidebar_class_name:"navbar__toggle"},sidebar:"schemaSidebar"},c={},p=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["This is an example of documentation grouping with GraphQL directive using the ",(0,r.jsx)(n.code,{children:"groupByDirective"})," option (see ",(0,r.jsx)(n.a,{href:"/docs/advanced/group-by-directive",children:"documentation"}),"):"]}),"\n",(0,r.jsxs)(i.Z,{groupId:"config",children:[(0,r.jsx)(o.Z,{value:"docusaurus",label:"Docusaurus (JS/TS)",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'{\n  schema: "data/schema_with_grouping.graphql",\n  baseURL: ".",\n  linkRoot: "/examples/group-by",\n  homepage: "data/groups.md",\n  groupByDirective: {\n    directive: "doc",\n    field: "category",\n    fallback: "Common"\n  },\n  docOptions: {\n    index: true,\n  },\n  printTypeOptions: {\n    parentTypePrefix: false,\n    relatedTypeSection: false,\n    typeBadges: true,\n    deprecated: "group"\n  },\n  skipDocDirective: ["@noDoc"],\n  customDirective: {\n    auth: {\n      descriptor: (directive, type) =>\n        directiveDescriptor(\n          directive,\n          type,\n          "This requires the current user to be in `${requires}` role.",\n        ),\n    },\n    complexity: {\n      descriptor: (directive, type) => {\n        const { value, multipliers } = getTypeDirectiveValues(directive, type);\n        const multiplierDescription = multipliers\n          ? ` per ${multipliers.map((v) => `\\`${v}\\``).join(", ")}`\n          : "";\n        return `This has an additional cost of \\`${value}\\` points${multiplierDescription}.`;\n      },\n    },\n  },\n}\n'})})}),(0,r.jsx)(o.Z,{value:"graphql-config",label:"GraphQL Config (JS/TS)",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'{\n  schema: "data/schema_with_grouping.graphql",\n  extensions: {\n    "graphql-markdown": {\n      baseURL: ".",\n      linkRoot: "/examples/group-by",\n      homepage: "data/groups.md",\n      groupByDirective: {\n        directive: "doc",\n        field: "category",\n        fallback: "Common"\n      },\n      docOptions: {\n        index: true,\n      },\n      printTypeOptions: {\n        parentTypePrefix: false,\n        relatedTypeSection: false,\n        typeBadges: true,\n        deprecated: "group"\n      },\n      skipDocDirective: ["@noDoc"],\n      customDirective: {\n        auth: {\n          descriptor: (directive, type) =>\n            directiveDescriptor(\n              directive,\n              type,\n              "This requires the current user to be in `${requires}` role.",\n            ),\n        },\n        complexity: {\n          descriptor: (directive, type) => {\n            const { value, multipliers } = getTypeDirectiveValues(directive, type);\n            const multiplierDescription = multipliers\n              ? ` per ${multipliers.map((v) => `\\`${v}\\``).join(", ")}`\n              : "";\n            return `This has an additional cost of \\`${value}\\` points${multiplierDescription}.`;\n          },\n        },\n      },\n    },\n  },\n}\n'})})}),(0,r.jsx)(o.Z,{value:"cli",label:"CLI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx docusaurus graphql-to-doc \\\n    --homepage data/groups.md \\\n    --schema data/schema_with_grouping.graphql \\\n    --groupByDirective @doc(category|=Common) \\\n    --base . \\\n    --link /examples/group-by \\\n    --skip @noDoc \\\n    --index \\\n    --noParentType \\\n    --noRelatedType \\\n    --deprecated group\n"})})})]}),"\n",(0,r.jsx)("small",{children:(0,r.jsx)("i",{children:"Generated on 1/4/2024, 7:37:11 PM."})})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},6257:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var r=t(6905);const a={tabItem:"tabItem_Ymn6"};var i=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:t,children:n})}},3992:(e,n,t)=>{t.d(n,{Z:()=>D});var r=t(7294),a=t(6905),i=t(2957),o=t(6550),s=t(1270),l=t(5238),u=t(3609),c=t(2560);function p(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=d(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[u,p]=h({queryString:t,groupId:a}),[g,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),f=(()=>{const e=u??g;return m({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),b(e)}),[p,b,i]),tabValues:i}}var b=t(1048);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(5893);function y(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),a=s[t].value;a!==r&&(u(n),o(a))},p=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:p,onClick:c,...i,className:(0,a.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function _(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(y,{...e,...n}),(0,v.jsx)(x,{...e,...n})]})}function D(e){const n=(0,b.Z)();return(0,v.jsx)(_,{...e,children:p(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var r=t(7294);const a={},i=r.createContext(a);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);