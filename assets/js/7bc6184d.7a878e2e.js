"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([[6848],{91813:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>x,Bullet:()=>o,Details:()=>g,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>j});var d=s(74848),n=s(28453),r=s(96540);const l={pagination_next:null,pagination_prev:null,id:"review",title:"Review"},t=void 0,i={id:"types/objects/review",title:"Review",description:"A Review that features in an anime or manga",source:"@site/examples/default/types/objects/review.mdx",sourceDirName:"types/objects",slug:"/types/objects/review",permalink:"/examples/default/types/objects/review",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,id:"review",title:"Review"},sidebar:"schemaSidebar"},c={},o=()=>{const e={span:"span",...(0,n.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const a={a:"a",...(0,n.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const a={span:"span",...(0,n.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:a,children:s,startOpen:l=!1})=>{const t={details:"details",summary:"summary",...(0,n.R)()},[i,c]=(0,r.useState)(l);return(0,d.jsxs)(t.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(t.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:a}),i&&s]})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>Review.<b>id</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reviewidint--",level:4},{value:'<code>Review.<b>userId</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reviewuseridint--",level:4},{value:'<code>Review.<b>mediaId</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reviewmediaidint--",level:4},{value:'<code>Review.<b>mediaType</b></code><Bullet></Bullet><code>MediaType</code> <Badge class="badge badge--secondary"></Badge>',id:"reviewmediatypemediatype-",level:4},{value:'<code>Review.<b>summary</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"reviewsummarystring-",level:4},{value:'<code>Review.<b>body</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"reviewbodystring-",level:4},{value:'<code>Review.body.<b>asHtml</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"reviewbodyashtmlboolean-",level:5},{value:'<code>Review.<b>rating</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"reviewratingint-",level:4},{value:'<code>Review.<b>ratingAmount</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"reviewratingamountint-",level:4},{value:'<code>Review.<b>userRating</b></code><Bullet></Bullet><code>ReviewRating</code> <Badge class="badge badge--secondary"></Badge>',id:"reviewuserratingreviewrating-",level:4},{value:'<code>Review.<b>score</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"reviewscoreint-",level:4},{value:'<code>Review.<b>private</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"reviewprivateboolean-",level:4},{value:'<code>Review.<b>siteUrl</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"reviewsiteurlstring-",level:4},{value:'<code>Review.<b>createdAt</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reviewcreatedatint--",level:4},{value:'<code>Review.<b>updatedAt</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reviewupdatedatint--",level:4},{value:'<code>Review.<b>user</b></code><Bullet></Bullet><code>User</code> <Badge class="badge badge--secondary"></Badge>',id:"reviewuseruser-",level:4},{value:'<code>Review.<b>media</b></code><Bullet></Bullet><code>Media</code> <Badge class="badge badge--secondary"></Badge>',id:"reviewmediamedia-",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}];function b(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Head:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s,{children:[(0,d.jsx)("meta",{name:"googlebot",content:"noindex"}),(0,d.jsx)("meta",{charset:"utf-8"})]}),"\n","\n","\n","\n","\n","\n",(0,d.jsx)(a.p,{children:"A Review that features in an anime or manga"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-graphql",children:"type Review {\n  id: Int!\n  userId: Int!\n  mediaId: Int!\n  mediaType: MediaType\n  summary: String\n  body(asHtml: Boolean): String\n  rating: Int\n  ratingAmount: Int\n  userRating: ReviewRating\n  score: Int\n  private: Boolean\n  siteUrl: String\n  createdAt: Int!\n  updatedAt: Int!\n  user: User\n  media: Media\n}\n"})}),"\n",(0,d.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(a.h4,{id:"reviewidint--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"id"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(a.code,{children:"Int!"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"The id of the review"}),"\n",(0,d.jsxs)(a.h4,{id:"reviewuseridint--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"userId"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(a.code,{children:"Int!"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"The id of the review's creator"}),"\n",(0,d.jsxs)(a.h4,{id:"reviewmediaidint--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"mediaId"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(a.code,{children:"Int!"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"The id of the review's media"}),"\n",(0,d.jsxs)(a.h4,{id:"reviewmediatypemediatype-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"mediaType"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/examples/default/types/enums/media-type",children:(0,d.jsx)(a.code,{children:"MediaType"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsx)(a.p,{children:"For which type of media the review is for"}),"\n",(0,d.jsxs)(a.h4,{id:"reviewsummarystring-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"summary"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/examples/default/types/scalars/string",children:(0,d.jsx)(a.code,{children:"String"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"A short summary of the review"}),"\n",(0,d.jsxs)(a.h4,{id:"reviewbodystring-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"body"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/examples/default/types/scalars/string",children:(0,d.jsx)(a.code,{children:"String"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"The main review body text"}),"\n",(0,d.jsxs)(a.h5,{id:"reviewbodyashtmlboolean-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.body.",(0,d.jsx)("b",{children:"asHtml"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/examples/default/types/scalars/boolean",children:(0,d.jsx)(a.code,{children:"Boolean"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"Return the string in pre-parsed html instead of markdown"}),"\n",(0,d.jsxs)(a.h4,{id:"reviewratingint-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"rating"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(a.code,{children:"Int"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"The total user rating of the review"}),"\n",(0,d.jsxs)(a.h4,{id:"reviewratingamountint-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"ratingAmount"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(a.code,{children:"Int"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"The amount of user ratings of the review"}),"\n",(0,d.jsxs)(a.h4,{id:"reviewuserratingreviewrating-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"userRating"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/examples/default/types/enums/review-rating",children:(0,d.jsx)(a.code,{children:"ReviewRating"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsx)(a.p,{children:"The rating of the review by currently authenticated user"}),"\n",(0,d.jsxs)(a.h4,{id:"reviewscoreint-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"score"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(a.code,{children:"Int"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"The review score of the media"}),"\n",(0,d.jsxs)(a.h4,{id:"reviewprivateboolean-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"private"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/examples/default/types/scalars/boolean",children:(0,d.jsx)(a.code,{children:"Boolean"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"If the review is not yet publicly published and is only viewable by creator"}),"\n",(0,d.jsxs)(a.h4,{id:"reviewsiteurlstring-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"siteUrl"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/examples/default/types/scalars/string",children:(0,d.jsx)(a.code,{children:"String"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"The url for the review page on the AniList website"}),"\n",(0,d.jsxs)(a.h4,{id:"reviewcreatedatint--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"createdAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(a.code,{children:"Int!"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"The time of the thread creation"}),"\n",(0,d.jsxs)(a.h4,{id:"reviewupdatedatint--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"updatedAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/examples/default/types/scalars/int",children:(0,d.jsx)(a.code,{children:"Int!"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"The time of the thread last update"}),"\n",(0,d.jsxs)(a.h4,{id:"reviewuseruser-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"user"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/examples/default/types/objects/user",children:(0,d.jsx)(a.code,{children:"User"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(a.p,{children:"The creator of the review"}),"\n",(0,d.jsxs)(a.h4,{id:"reviewmediamedia-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"media"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/examples/default/types/objects/media",children:(0,d.jsx)(a.code,{children:"Media"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(a.p,{children:"The media the review is of"}),"\n",(0,d.jsx)(a.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/examples/default/api/mutations/rate-review",children:(0,d.jsx)(a.code,{children:"RateReview"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"mutation"}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/examples/default/api/queries/review",children:(0,d.jsx)(a.code,{children:"Review"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"query"}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/examples/default/api/mutations/save-review",children:(0,d.jsx)(a.code,{children:"SaveReview"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"mutation"})]}),"\n",(0,d.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/examples/default/types/objects/internal-page",children:(0,d.jsx)(a.code,{children:"InternalPage"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/examples/default/types/objects/page",children:(0,d.jsx)(a.code,{children:"Page"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/examples/default/types/objects/review-connection",children:(0,d.jsx)(a.code,{children:"ReviewConnection"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/examples/default/types/objects/review-edge",children:(0,d.jsx)(a.code,{children:"ReviewEdge"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(b,{...e})}):b(e)}},28453:(e,a,s)=>{s.d(a,{R:()=>l,x:()=>t});var d=s(96540);const n={},r=d.createContext(n);function l(e){const a=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),d.createElement(r.Provider,{value:a},e.children)}}}]);