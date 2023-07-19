"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[8217],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=d(n),m=a,f=l["".concat(p,".").concat(m)]||l[m]||u[m]||o;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:a,c[1]=i;for(var d=2;d<o;d++)c[d]=n[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(7462),a=(n(7294),n(4137));const o={pagination_prev:null,pagination_next:null},c="Customize deprecated sections",i={unversionedId:"advanced/custom-deprecated-section",id:"advanced/custom-deprecated-section",title:"Customize deprecated sections",description:"When using the option printTypeOptions.deprecated set to group, the rendering can be customized using the CSS class .deprecated.",source:"@site/docs/advanced/custom-deprecated-section.md",sourceDirName:"advanced",slug:"/advanced/custom-deprecated-section",permalink:"/docs/advanced/custom-deprecated-section",draft:!1,editUrl:"https://github.com/graphql-markdown/graphql-markdown/tree/main/docs/advanced/custom-deprecated-section.md",tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null},sidebar:"defaultSidebar"},p={},d=[],s={toc:d};function l(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"customize-deprecated-sections"},"Customize deprecated sections"),(0,a.kt)("p",null,"When using the option ",(0,a.kt)("a",{parentName:"p",href:"/docs/settings#printtypeoptions"},(0,a.kt)("inlineCode",{parentName:"a"},"printTypeOptions.deprecated"))," set to ",(0,a.kt)("inlineCode",{parentName:"p"},"group"),", the rendering can be customized using the CSS class ",(0,a.kt)("inlineCode",{parentName:"p"},".deprecated"),"."),(0,a.kt)("p",null,"Adding a ",(0,a.kt)("inlineCode",{parentName:"p"},"warning")," emoji \u26a0\ufe0f is done with a quick tweak of ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/styling-layout"},"Docusaurus CSS"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".deprecated a::after, span.deprecated::after {\n  content: '\u26a0\ufe0f';\n  padding-left: 4px !important;\n  transform: none !important;\n}\n\n.deprecated {\n  padding-top: 1rem;\n}\n")),(0,a.kt)("p",null,"The above CSS will render the deprecated sections as following"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"custom-deprecated-section",src:n(9609).Z,width:"1708",height:"1464"})))}l.isMDXComponent=!0},9609:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/custom-deprecated-section-5b7fd7a5deebdcddb64e68c8958f355a.png"}}]);