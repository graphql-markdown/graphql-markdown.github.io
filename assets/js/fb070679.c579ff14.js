"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[7631],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=i(a),m=o,p=u["".concat(c,".").concat(m)]||u[m]||f[m]||r;return a?n.createElement(p,l(l({ref:t},d),{},{components:a})):n.createElement(p,l({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var i=2;i<r;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6591:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>f,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(7462),o=a(7294),r=a(3905);const l={id:"staff",title:"Staff",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,c={unversionedId:"schema/queries/staff",id:"schema/queries/staff",title:"Staff",description:"Staff query",source:"@site/docs/schema/queries/staff.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/staff",permalink:"/schema/queries/staff",draft:!1,tags:[],version:"current",frontMatter:{id:"staff",title:"Staff",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"basic"},i={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>id</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffbidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>isBirthday</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffbisbirthdaybcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>search</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffbsearchbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>id_not</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffbid_notbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>id_in</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffbid_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>id_not_in</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffbid_not_inbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Staff.<b>sort</b></code><Bullet /><code>[StaffSort]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-staffbsortbcodestaffsort--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Staff</code> <Badge class="secondary" text="object"/>',id:"staff-",level:4}],f=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),p={toc:d,Bullet:f,SpecifiedBy:u,Badge:m};function y(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Staff query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"Staff(\n  id: Int\n  isBirthday: Boolean\n  search: String\n  id_not: Int\n  id_in: [Int]\n  id_not_in: [Int]\n  sort: [StaffSort]\n): Staff\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-staffbidbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,r.kt)("b",null,"id"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Filter by the staff id")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-staffbisbirthdaybcodeboolean-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,r.kt)("b",null,"isBirthday"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Filter by staff by if its their birthday today")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-staffbsearchbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,r.kt)("b",null,"search"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Filter by search query")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-staffbid_notbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,r.kt)("b",null,"id_not"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Filter by the staff id")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-staffbid_inbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,r.kt)("b",null,"id_in"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,r.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Filter by the staff id")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-staffbid_not_inbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,r.kt)("b",null,"id_not_in"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,r.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Filter by the staff id")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-staffbsortbcodestaffsort--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Staff.",(0,r.kt)("b",null,"sort"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/staff-sort"},(0,r.kt)("inlineCode",{parentName:"a"},"[StaffSort]"))," ",(0,r.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The order the results will be returned in")),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"staff-"},(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,r.kt)("inlineCode",{parentName:"a"},"Staff"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Voice actors or production staff")))}y.isMDXComponent=!0}}]);