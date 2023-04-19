"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6889],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=c(a),p=o,u=m["".concat(i,".").concat(p)]||m[p]||y[p]||s;return a?n.createElement(u,l(l({ref:t},d),{},{components:a})):n.createElement(u,l({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,l=new Array(s);l[0]=p;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[m]="string"==typeof e?e:o,l[1]=r;for(var c=2;c<s;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1800:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>r,default:()=>v,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),o=a(7294),s=a(3905);const l={id:"save-message-activity",title:"SaveMessageActivity",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},r=void 0,i={unversionedId:"mutations/save-message-activity",id:"mutations/save-message-activity",title:"SaveMessageActivity",description:"Create or update message activity for the currently authenticated user",source:"@site/examples/schema/mutations/save-message-activity.mdx",sourceDirName:"mutations",slug:"/mutations/save-message-activity",permalink:"/schema/mutations/save-message-activity",draft:!1,tags:[],version:"current",frontMatter:{id:"save-message-activity",title:"SaveMessageActivity",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},d=()=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,s.kt)(o.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SaveMessageActivity.<b>id</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-savemessageactivitybidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveMessageActivity.<b>message</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-savemessageactivitybmessagebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveMessageActivity.<b>recipientId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-savemessageactivitybrecipientidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveMessageActivity.<b>private</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-savemessageactivitybprivatebcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveMessageActivity.<b>locked</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-savemessageactivityblockedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SaveMessageActivity.<b>asMod</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-savemessageactivitybasmodbcodeboolean-",level:4},{value:"Type",id:"type",level:3},{value:'<code>MessageActivity</code> <Badge class="secondary" text="object"/>',id:"messageactivity-",level:4}],u=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:r=!1}=e;const[i,c]=(0,o.useState)(r);return(0,s.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&l)},g={Bullet:d,SpecifiedBy:m,Badge:y,toc:p,Details:u};function v(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Create or update message activity for the currently authenticated user"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"SaveMessageActivity(\n  id: Int\n  message: String\n  recipientId: Int\n  private: Boolean\n  locked: Boolean\n  asMod: Boolean\n): MessageActivity\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-savemessageactivitybidbcodeint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"SaveMessageActivity.",(0,s.kt)("b",null,"id"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The activity id, required for updating")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-savemessageactivitybmessagebcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"SaveMessageActivity.",(0,s.kt)("b",null,"message"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The activity message text")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-savemessageactivitybrecipientidbcodeint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"SaveMessageActivity.",(0,s.kt)("b",null,"recipientId"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The id of the user the message is being sent to")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-savemessageactivitybprivatebcodeboolean-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"SaveMessageActivity.",(0,s.kt)("b",null,"private"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,s.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"If the activity should be private")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-savemessageactivityblockedbcodeboolean-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"SaveMessageActivity.",(0,s.kt)("b",null,"locked"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,s.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"If the activity should be locked. (Mod Only)")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-savemessageactivitybasmodbcodeboolean-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"SaveMessageActivity.",(0,s.kt)("b",null,"asMod"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,s.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"If the message should be sent from the Moderator account (Mod Only)")),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"messageactivity-"},(0,s.kt)("a",{parentName:"h4",href:"/schema/objects/message-activity"},(0,s.kt)("inlineCode",{parentName:"a"},"MessageActivity"))," ",(0,s.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"User message activity")))}v.isMDXComponent=!0}}]);