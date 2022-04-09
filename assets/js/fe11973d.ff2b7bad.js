"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[9325],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),m=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=m(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=m(t),p=a,f=s["".concat(d,".").concat(p)]||s[p]||u[p]||i;return t?r.createElement(f,o(o({ref:n},l),{},{components:t})):r.createElement(f,o({ref:n},l))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var m=2;m<i;m++)o[m]=t[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},446:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return u}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],c={id:"recommendation",title:"Recommendation"},d=void 0,m={unversionedId:"schema/objects/recommendation",id:"schema/objects/recommendation",title:"Recommendation",description:"Media recommendation",source:"@site/docs/schema/objects/recommendation.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/recommendation",permalink:"/schema/objects/recommendation",tags:[],version:"current",frontMatter:{id:"recommendation",title:"Recommendation"},sidebar:"basic",previous:{title:"RecommendationEdge",permalink:"/schema/objects/recommendation-edge"},next:{title:"RelatedMediaAdditionNotification",permalink:"/schema/objects/related-media-addition-notification"}},l={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>rating</code> (<code>Int</code>)",id:"rating-int",level:4},{value:"<code>userRating</code> (<code>RecommendationRating</code>)",id:"userrating-recommendationrating",level:4},{value:"<code>media</code> (<code>Media</code>)",id:"media-media",level:4},{value:"<code>mediaRecommendation</code> (<code>Media</code>)",id:"mediarecommendation-media",level:4},{value:"<code>user</code> (<code>User</code>)",id:"user-user",level:4}],s={toc:u};function p(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Media recommendation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Recommendation {\n  id: Int!\n  rating: Int\n  userRating: RecommendationRating\n  media: Media\n  mediaRecommendation: Media\n  user: User\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The id of the recommendation"),(0,i.kt)("h4",{id:"rating-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"rating")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Users rating of the recommendation"),(0,i.kt)("h4",{id:"userrating-recommendationrating"},(0,i.kt)("inlineCode",{parentName:"h4"},"userRating")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/recommendation-rating"},(0,i.kt)("inlineCode",{parentName:"a"},"RecommendationRating")),")"),(0,i.kt)("p",null,"The rating of the recommendation by currently authenticated user"),(0,i.kt)("h4",{id:"media-media"},(0,i.kt)("inlineCode",{parentName:"h4"},"media")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,i.kt)("inlineCode",{parentName:"a"},"Media")),")"),(0,i.kt)("p",null,"The media the recommendation is from"),(0,i.kt)("h4",{id:"mediarecommendation-media"},(0,i.kt)("inlineCode",{parentName:"h4"},"mediaRecommendation")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,i.kt)("inlineCode",{parentName:"a"},"Media")),")"),(0,i.kt)("p",null,"The recommended media"),(0,i.kt)("h4",{id:"user-user"},(0,i.kt)("inlineCode",{parentName:"h4"},"user")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,i.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,i.kt)("p",null,"The user that first created the recommendation"))}p.isMDXComponent=!0}}]);