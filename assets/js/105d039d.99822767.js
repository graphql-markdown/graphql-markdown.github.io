"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[1490],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>f});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},i=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||n;return a?r.createElement(f,d(d({ref:t},i),{},{components:a})):r.createElement(f,d({ref:t},i))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,d=new Array(n);d[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,d[1]=l;for(var c=2;c<n;c++)d[c]=a[c];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3155:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>i,Details:()=>f,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>d,metadata:()=>s,toc:()=>m});var r=a(7462),o=a(7294),n=a(3905);const d={id:"update-favourite-order",title:"UpdateFavouriteOrder",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,s={unversionedId:"mutations/update-favourite-order",id:"mutations/update-favourite-order",title:"UpdateFavouriteOrder",description:"Update the order favourites are displayed in",source:"@site/examples/schema/mutations/update-favourite-order.mdx",sourceDirName:"mutations",slug:"/mutations/update-favourite-order",permalink:"/schema/mutations/update-favourite-order",draft:!1,tags:[],version:"current",frontMatter:{id:"update-favourite-order",title:"UpdateFavouriteOrder",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"schemaSidebar"},c={},i=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateFavouriteOrder.<b>animeIds</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatefavouriteorderbanimeidsbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateFavouriteOrder.<b>mangaIds</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatefavouriteorderbmangaidsbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateFavouriteOrder.<b>characterIds</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatefavouriteorderbcharacteridsbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateFavouriteOrder.<b>staffIds</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatefavouriteorderbstaffidsbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateFavouriteOrder.<b>studioIds</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatefavouriteorderbstudioidsbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateFavouriteOrder.<b>animeOrder</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatefavouriteorderbanimeorderbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateFavouriteOrder.<b>mangaOrder</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatefavouriteorderbmangaorderbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateFavouriteOrder.<b>characterOrder</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatefavouriteorderbcharacterorderbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateFavouriteOrder.<b>staffOrder</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatefavouriteorderbstafforderbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateFavouriteOrder.<b>studioOrder</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatefavouriteorderbstudioorderbcodeint--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Favourites</code> <Badge class="secondary" text="object"/>',id:"favourites-",level:4}],f=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:l=!1}=e;const[s,c]=(0,o.useState)(l);return(0,n.kt)("details",(0,r.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&d)},h={Bullet:i,SpecifiedBy:u,Badge:p,toc:m,Details:f};function y(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Update the order favourites are displayed in"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"UpdateFavouriteOrder(\n  animeIds: [Int]\n  mangaIds: [Int]\n  characterIds: [Int]\n  staffIds: [Int]\n  studioIds: [Int]\n  animeOrder: [Int]\n  mangaOrder: [Int]\n  characterOrder: [Int]\n  staffOrder: [Int]\n  studioOrder: [Int]\n): Favourites\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-updatefavouriteorderbanimeidsbcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"UpdateFavouriteOrder.",(0,n.kt)("b",null,"animeIds"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,n.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The id of the anime to un/favourite")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-updatefavouriteorderbmangaidsbcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"UpdateFavouriteOrder.",(0,n.kt)("b",null,"mangaIds"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,n.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The id of the manga to un/favourite")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-updatefavouriteorderbcharacteridsbcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"UpdateFavouriteOrder.",(0,n.kt)("b",null,"characterIds"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,n.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The id of the character to un/favourite")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-updatefavouriteorderbstaffidsbcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"UpdateFavouriteOrder.",(0,n.kt)("b",null,"staffIds"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,n.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The id of the staff to un/favourite")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-updatefavouriteorderbstudioidsbcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"UpdateFavouriteOrder.",(0,n.kt)("b",null,"studioIds"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,n.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The id of the studio to un/favourite")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-updatefavouriteorderbanimeorderbcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"UpdateFavouriteOrder.",(0,n.kt)("b",null,"animeOrder"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,n.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"List of integers which the anime should be ordered by (Asc)")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-updatefavouriteorderbmangaorderbcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"UpdateFavouriteOrder.",(0,n.kt)("b",null,"mangaOrder"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,n.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"List of integers which the manga should be ordered by (Asc)")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-updatefavouriteorderbcharacterorderbcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"UpdateFavouriteOrder.",(0,n.kt)("b",null,"characterOrder"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,n.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"List of integers which the character should be ordered by (Asc)")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-updatefavouriteorderbstafforderbcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"UpdateFavouriteOrder.",(0,n.kt)("b",null,"staffOrder"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,n.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"List of integers which the staff should be ordered by (Asc)")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-updatefavouriteorderbstudioorderbcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"UpdateFavouriteOrder.",(0,n.kt)("b",null,"studioOrder"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,n.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"List of integers which the studio should be ordered by (Asc)")),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"favourites-"},(0,n.kt)("a",{parentName:"h4",href:"/schema/objects/favourites"},(0,n.kt)("inlineCode",{parentName:"a"},"Favourites"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"User's favourite anime, manga, characters, staff & studios")))}y.isMDXComponent=!0}}]);