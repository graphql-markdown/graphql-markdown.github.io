"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["6166"],{16491:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>c,toc:()=>p,contentTitle:()=>u});var r=JSON.parse('{"id":"schema","title":"Schema Documentation","description":"This is an example of documentation grouping with GraphQL directive using the groupByDirective option (see documentation):","source":"@site/examples/group-by/groups.md","sourceDirName":".","slug":"/","permalink":"/examples/group-by/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"schema","slug":"/","title":"Schema Documentation","sidebar_position":1,"hide_table_of_contents":true,"pagination_next":null,"pagination_prev":null,"sidebar_class_name":"navbar__toggle"},"sidebar":"defaultSidebar"}'),a=t("85893"),i=t("50065"),o=t("47902"),l=t("5525");let s={id:"schema",slug:"/",title:"Schema Documentation",sidebar_position:1,hide_table_of_contents:!0,pagination_next:null,pagination_prev:null,sidebar_class_name:"navbar__toggle"},u=void 0,c={},p=[];function d(e){let n={a:"a",code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["This is an example of documentation grouping with GraphQL directive using the ",(0,a.jsx)(n.code,{children:"groupByDirective"})," option (see ",(0,a.jsx)(n.a,{href:"/docs/advanced/group-by-directive",children:"documentation"}),"):"]}),"\n",(0,a.jsxs)(o.Z,{groupId:"config",children:[(0,a.jsx)(l.Z,{value:"docusaurus",label:"Docusaurus (JS/TS)",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  schema: "data/schema_with_grouping.graphql",\n  baseURL: ".",\n  linkRoot: "/examples/group-by",\n  homepage: "data/groups.md",\n  loaders: {\n    GraphQLFileLoader: "@graphql-tools/graphql-file-loader",\n  },\n  groupByDirective: {\n    directive: "doc",\n    field: "category",\n    fallback: "Common"\n  },\n  docOptions: {\n    index: true,\n  },\n  printTypeOptions: {\n    deprecated: "group",\n    exampleSection: true,\n    parentTypePrefix: false,\n    relatedTypeSection: false,\n    typeBadges: true,\n    hierarchy: "entity",\n  },\n  skipDocDirective: ["@noDoc"],\n  customDirective: {\n    auth: {\n      descriptor: (directive, type) =>\n        directiveDescriptor(\n          directive,\n          type,\n          "This requires the current user to be in `${requires}` role.",\n        ),\n    },\n    beta: {\n      tag: (directive) => ({\n        text: directive?.name?.toUpperCase(),\n        classname: "badge--danger",\n      }),\n    },\n    complexity: {\n      descriptor: (directive, type) => {\n        const { value, multipliers } = getTypeDirectiveValues(directive, type);\n        const multiplierDescription = multipliers\n          ? ` per ${multipliers.map((v) => `\\`${v}\\``).join(", ")}`\n          : "";\n        return `This has an additional cost of \\`${value}\\` points${multiplierDescription}.`;\n      },\n    },\n  },\n}\n'})})}),(0,a.jsx)(l.Z,{value:"graphql-config",label:"GraphQL Config (JS/TS)",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  schema: "data/schema_with_grouping.graphql",\n  extensions: {\n    "graphql-markdown": {\n      baseURL: ".",\n      linkRoot: "/examples/group-by",\n      homepage: "data/groups.md",\n      loaders: {\n        GraphQLFileLoader: "@graphql-tools/graphql-file-loader",\n      },\n      groupByDirective: {\n        directive: "doc",\n        field: "category",\n        fallback: "Common"\n      },\n      docOptions: {\n        index: true,\n      },\n      printTypeOptions: {\n        deprecated: "group",\n        exampleSection: true,\n        parentTypePrefix: false,\n        relatedTypeSection: false,\n        typeBadges: true,\n        hierarchy: "entity",\n      },\n      skipDocDirective: ["@noDoc"],\n      customDirective: {\n        auth: {\n          descriptor: (directive, type) =>\n            directiveDescriptor(\n              directive,\n              type,\n              "This requires the current user to be in `${requires}` role.",\n            ),\n        },\n        beta: {\n          tag: (directive) => ({\n            text: directive?.name?.toUpperCase(),\n            classname: "badge--danger",\n          }),\n        },\n        complexity: {\n          descriptor: (directive, type) => {\n            const { value, multipliers } = getTypeDirectiveValues(directive, type);\n            const multiplierDescription = multipliers\n              ? ` per ${multipliers.map((v) => `\\`${v}\\``).join(", ")}`\n              : "";\n            return `This has an additional cost of \\`${value}\\` points${multiplierDescription}.`;\n          },\n        },\n      },\n    },\n  },\n}\n'})})}),(0,a.jsx)(l.Z,{value:"cli",label:"CLI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx docusaurus graphql-to-doc \\\n    --homepage data/groups.md \\\n    --schema data/schema_with_grouping.graphql \\\n    --groupByDirective @doc(category|=Common) \\\n    --base . \\\n    --link /examples/group-by \\\n    --skip @noDoc \\\n    --index \\\n    --noParentType \\\n    --noRelatedType \\\n    --deprecated group \\\n    --hierarchy entity\n"})})})]}),"\n",(0,a.jsx)("small",{children:(0,a.jsx)("i",{children:"Generated on 3/16/2025, 5:27:18 PM."})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},5525:function(e,n,t){t.d(n,{Z:()=>i});var r=t("85893");t("67294");var a=t("67026");function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_Ymn6",i),hidden:t,children:n})}},47902:function(e,n,t){t.d(n,{Z:()=>b});var r=t("85893"),a=t("67294"),i=t("67026"),o=t("69599"),l=t("16550"),s=t("32000"),u=t("4520"),c=t("38341"),p=t("76009");function d(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var m=t("7227");function f(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:s}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),p=e=>{let n=e.currentTarget,t=s[u.indexOf(n)].value;t!==a&&(c(n),l(t))},d=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{let t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{let t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:s.map(e=>{let{value:n,label:t,attributes:o}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{u.push(e)},onKeyDown:d,onClick:p,...o,className:(0,i.Z)("tabs__item","tabItem_LNqP",o?.className,{"tabs__item--active":a===n}),children:t??n},n)})})}function g(e){let{lazy:n,children:t,selectedValue:o}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===o);return e?(0,a.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,i=function(e){let{values:n,children:t}=e;return(0,a.useMemo)(()=>{let e=n??d(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[o,m]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:i})),[f,g]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(i),(0,a.useCallback)(e=>{if(!i)return;let n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})},[i,r])]}({queryString:t,groupId:r}),[v,b]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[r,i]=(0,p.Nk)(t);return[r,(0,a.useCallback)(e=>{t&&i.set(e)},[t,i])]}({groupId:r}),y=(()=>{let e=f??v;return h({value:e,tabValues:i})?e:null})();return(0,s.Z)(()=>{y&&m(y)},[y]),{selectedValue:o,selectValue:(0,a.useCallback)(e=>{if(!h({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);m(e),g(e),b(e)},[g,b,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(f,{...n,...e}),(0,r.jsx)(g,{...n,...e})]})}function b(e){let n=(0,m.Z)();return(0,r.jsx)(v,{...e,children:d(e.children)},String(n))}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var r=t(67294);let a={},i=r.createContext(a);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);