"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["3672"],{82040:function(t,e,a){a.d(e,{diagram:function(){return T}});var n,i=a(92581);a(13674),a(70803),a(71088),a(52101),a(91105),a(41029),a(17897),a(97832);var r=a(42901),d=a(85587),s=a(27818),o=a(49235),g=a(50043),l={},p=(0,d.eW)((t,e)=>{l[t]=e},"set"),h=(t=>l[t],(0,d.eW)(()=>Object.keys(l),"keys")),c=(()=>h().length,(0,d.eW)(t=>t.append("circle").attr("class","start-state").attr("r",(0,d.nV)().state.sizeUnit).attr("cx",(0,d.nV)().state.padding+(0,d.nV)().state.sizeUnit).attr("cy",(0,d.nV)().state.padding+(0,d.nV)().state.sizeUnit),"drawStartState")),x=(0,d.eW)(t=>t.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",(0,d.nV)().state.textHeight).attr("class","divider").attr("x2",2*(0,d.nV)().state.textHeight).attr("y1",0).attr("y2",0),"drawDivider"),V=(0,d.eW)((t,e)=>{let a=t.append("text").attr("x",2*(0,d.nV)().state.padding).attr("y",(0,d.nV)().state.textHeight+2*(0,d.nV)().state.padding).attr("font-size",(0,d.nV)().state.fontSize).attr("class","state-title").text(e.id),n=a.node().getBBox();return t.insert("rect",":first-child").attr("x",(0,d.nV)().state.padding).attr("y",(0,d.nV)().state.padding).attr("width",n.width+2*(0,d.nV)().state.padding).attr("height",n.height+2*(0,d.nV)().state.padding).attr("rx",(0,d.nV)().state.radius),a},"drawSimpleState"),u=(0,d.eW)((t,e)=>{let a=(0,d.eW)(function(t,e,a){let n=t.append("tspan").attr("x",2*(0,d.nV)().state.padding).text(e);a||n.attr("dy",(0,d.nV)().state.textHeight)},"addTspan"),n=t.append("text").attr("x",2*(0,d.nV)().state.padding).attr("y",(0,d.nV)().state.textHeight+1.3*(0,d.nV)().state.padding).attr("font-size",(0,d.nV)().state.fontSize).attr("class","state-title").text(e.descriptions[0]).node().getBBox(),i=n.height,r=t.append("text").attr("x",(0,d.nV)().state.padding).attr("y",i+.4*(0,d.nV)().state.padding+(0,d.nV)().state.dividerMargin+(0,d.nV)().state.textHeight).attr("class","state-description"),s=!0,o=!0;e.descriptions.forEach(function(t){s||(a(r,t,o),o=!1),s=!1});let g=t.append("line").attr("x1",(0,d.nV)().state.padding).attr("y1",(0,d.nV)().state.padding+i+(0,d.nV)().state.dividerMargin/2).attr("y2",(0,d.nV)().state.padding+i+(0,d.nV)().state.dividerMargin/2).attr("class","descr-divider"),l=r.node().getBBox(),p=Math.max(l.width,n.width);return g.attr("x2",p+3*(0,d.nV)().state.padding),t.insert("rect",":first-child").attr("x",(0,d.nV)().state.padding).attr("y",(0,d.nV)().state.padding).attr("width",p+2*(0,d.nV)().state.padding).attr("height",l.height+i+2*(0,d.nV)().state.padding).attr("rx",(0,d.nV)().state.radius),t},"drawDescrState"),f=(0,d.eW)((t,e,a)=>{let n;let i=(0,d.nV)().state.padding,r=2*(0,d.nV)().state.padding,s=t.node().getBBox(),o=s.width,g=s.x,l=t.append("text").attr("x",0).attr("y",(0,d.nV)().state.titleShift).attr("font-size",(0,d.nV)().state.fontSize).attr("class","state-title").text(e.id),p=l.node().getBBox().width+r,h=Math.max(p,o);h===o&&(h+=r);let c=t.node().getBBox();e.doc,n=g-i,p>o&&(n=(o-h)/2+i),Math.abs(g-c.x)<i&&p>o&&(n=g-(p-o)/2);let x=1-(0,d.nV)().state.textHeight;return t.insert("rect",":first-child").attr("x",n).attr("y",x).attr("class",a?"alt-composit":"composit").attr("width",h).attr("height",c.height+(0,d.nV)().state.textHeight+(0,d.nV)().state.titleShift+1).attr("rx","0"),l.attr("x",n+i),p<=o&&l.attr("x",g+(h-r)/2-p/2+i),t.insert("rect",":first-child").attr("x",n).attr("y",(0,d.nV)().state.titleShift-(0,d.nV)().state.textHeight-(0,d.nV)().state.padding).attr("width",h).attr("height",3*(0,d.nV)().state.textHeight).attr("rx",(0,d.nV)().state.radius),t.insert("rect",":first-child").attr("x",n).attr("y",(0,d.nV)().state.titleShift-(0,d.nV)().state.textHeight-(0,d.nV)().state.padding).attr("width",h).attr("height",c.height+3+2*(0,d.nV)().state.textHeight).attr("rx",(0,d.nV)().state.radius),t},"addTitleAndBox"),y=(0,d.eW)(t=>(t.append("circle").attr("class","end-state-outer").attr("r",(0,d.nV)().state.sizeUnit+(0,d.nV)().state.miniPadding).attr("cx",(0,d.nV)().state.padding+(0,d.nV)().state.sizeUnit+(0,d.nV)().state.miniPadding).attr("cy",(0,d.nV)().state.padding+(0,d.nV)().state.sizeUnit+(0,d.nV)().state.miniPadding),t.append("circle").attr("class","end-state-inner").attr("r",(0,d.nV)().state.sizeUnit).attr("cx",(0,d.nV)().state.padding+(0,d.nV)().state.sizeUnit+2).attr("cy",(0,d.nV)().state.padding+(0,d.nV)().state.sizeUnit+2)),"drawEndState"),w=(0,d.eW)((t,e)=>{let a=(0,d.nV)().state.forkWidth,n=(0,d.nV)().state.forkHeight;if(e.parentId){let t=a;a=n,n=t}return t.append("rect").style("stroke","black").style("fill","black").attr("width",a).attr("height",n).attr("x",(0,d.nV)().state.padding).attr("y",(0,d.nV)().state.padding)},"drawForkJoinState"),b=(0,d.eW)((t,e,a,n)=>{let i=0,r=n.append("text");r.style("text-anchor","start"),r.attr("class","noteText");let s=t.replace(/\r\n/g,"<br/>"),o=(s=s.replace(/\n/g,"<br/>")).split(d.SY.lineBreakRegex),g=1.25*(0,d.nV)().state.noteMargin;for(let t of o){let n=t.trim();if(n.length>0){let t=r.append("tspan");t.text(n),0===g&&(g+=t.node().getBBox().height),i+=g,t.attr("x",e+(0,d.nV)().state.noteMargin),t.attr("y",a+i+1.25*(0,d.nV)().state.noteMargin)}}return{textWidth:r.node().getBBox().width,textHeight:i}},"_drawLongText"),m=(0,d.eW)((t,e)=>{e.attr("class","state-note");let a=e.append("rect").attr("x",0).attr("y",(0,d.nV)().state.padding),{textWidth:n,textHeight:i}=b(t,0,0,e.append("g"));return a.attr("height",i+2*(0,d.nV)().state.noteMargin),a.attr("width",n+2*(0,d.nV)().state.noteMargin),a},"drawNote"),B=(0,d.eW)(function(t,e){let a=e.id,n={id:a,label:e.id,width:0,height:0},i=t.append("g").attr("id",a).attr("class","stateGroup");"start"===e.type&&c(i),"end"===e.type&&y(i),("fork"===e.type||"join"===e.type)&&w(i,e),"note"===e.type&&m(e.note.text,i),"divider"===e.type&&x(i),"default"===e.type&&0===e.descriptions.length&&V(i,e),"default"===e.type&&e.descriptions.length>0&&u(i,e);let r=i.node().getBBox();return n.width=r.width+2*(0,d.nV)().state.padding,n.height=r.height+2*(0,d.nV)().state.padding,p(a,n),n},"drawState"),k=0,M=(0,d.eW)(function(t,e,a){let n=(0,d.eW)(function(t){switch(t){case i.oI.relationType.AGGREGATION:return"aggregation";case i.oI.relationType.EXTENSION:return"extension";case i.oI.relationType.COMPOSITION:return"composition";case i.oI.relationType.DEPENDENCY:return"dependency"}},"getRelationType");e.points=e.points.filter(t=>!Number.isNaN(t.y));let o=e.points,g=(0,s.jvg)().x(function(t){return t.x}).y(function(t){return t.y}).curve(s.$0Z),l=t.append("path").attr("d",g(o)).attr("id","edge"+k).attr("class","transition"),p="";if((0,d.nV)().state.arrowMarkerAbsolute&&(p=(p=(p=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),l.attr("marker-end","url("+p+"#"+n(i.oI.relationType.DEPENDENCY)+"End)"),void 0!==a.title){let n=t.append("g").attr("class","stateLabel"),{x:i,y:s}=r.w8.calcLabelPosition(e.points),o=d.SY.getRows(a.title),g=0,l=[],p=0,h=0;for(let t=0;t<=o.length;t++){let e=n.append("text").attr("text-anchor","middle").text(o[t]).attr("x",i).attr("y",s+g),a=e.node().getBBox();p=Math.max(p,a.width),h=Math.min(h,a.x),d.cM.info(a.x,i,s+g),0===g&&(g=e.node().getBBox().height,d.cM.info("Title height",g,s)),l.push(e)}let c=g*o.length;if(o.length>1){let t=(o.length-1)*g*.5;l.forEach((e,a)=>e.attr("y",s+a*g-t)),c=g*o.length}let x=n.node().getBBox();n.insert("rect",":first-child").attr("class","box").attr("x",i-p/2-(0,d.nV)().state.padding/2).attr("y",s-c/2-(0,d.nV)().state.padding/2-3.5).attr("width",p+(0,d.nV)().state.padding).attr("height",c+(0,d.nV)().state.padding),d.cM.info(x)}k++},"drawEdge"),S={},E=(0,d.eW)(function(){},"setConf"),N=(0,d.eW)(function(t){t.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},"insertMarkers"),W=(0,d.eW)(function(t,e,a,i){let r;n=(0,d.nV)().state;let o=(0,d.nV)().securityLevel;"sandbox"===o&&(r=(0,s.Ys)("#i"+e));let g="sandbox"===o?(0,s.Ys)(r.nodes()[0].contentDocument.body):(0,s.Ys)("body"),l="sandbox"===o?r.nodes()[0].contentDocument:document;d.cM.debug("Rendering diagram "+t);let p=g.select(`[id='${e}']`);N(p),z(i.db.getRootDoc(),p,void 0,!1,g,l,i);let h=n.padding,c=p.node().getBBox(),x=c.width+2*h,V=c.height+2*h;(0,d.v2)(p,V,1.75*x,n.useMaxWidth),p.attr("viewBox",`${c.x-n.padding}  ${c.y-n.padding} `+x+" "+V)},"draw"),v=(0,d.eW)(t=>t?t.length*n.fontSizeFactor:1,"getLabelWidth"),z=(0,d.eW)((t,e,a,i,r,s,l)=>{let p;let h=new g.k({compound:!0,multigraph:!0}),c=!0;for(p=0;p<t.length;p++)if("relation"===t[p].stmt){c=!1;break}a?h.setGraph({rankdir:"LR",multigraph:!0,compound:!0,ranker:"tight-tree",ranksep:c?1:n.edgeLengthFactor,nodeSep:c?1:50,isMultiGraph:!0}):h.setGraph({rankdir:"TB",multigraph:!0,compound:!0,ranksep:c?1:n.edgeLengthFactor,nodeSep:c?1:50,ranker:"tight-tree",isMultiGraph:!0}),h.setDefaultEdgeLabel(function(){return{}});let x=l.db.getStates(),V=l.db.getRelations();for(let t of Object.keys(x)){let d;let o=x[t];if(a&&(o.parentId=a),o.doc){let t=e.append("g").attr("id",o.id).attr("class","stateGroup");d=z(o.doc,t,o.id,!i,r,s,l);{let e=(t=f(t,o,i)).node().getBBox();d.width=e.width,d.height=e.height+n.padding/2,S[o.id]={y:n.compositTitleSize}}}else d=B(e,o,h);if(o.note){let t=B(e,{descriptions:[],id:o.id+"-note",note:o.note,type:"note"},h);"left of"===o.note.position?(h.setNode(d.id+"-note",t),h.setNode(d.id,d)):(h.setNode(d.id,d),h.setNode(d.id+"-note",t)),h.setParent(d.id,d.id+"-group"),h.setParent(d.id+"-note",d.id+"-group")}else h.setNode(d.id,d)}d.cM.debug("Count=",h.nodeCount(),h);let u=0;V.forEach(function(t){u++,d.cM.debug("Setting edge",t),h.setEdge(t.id1,t.id2,{relation:t,width:v(t.title),height:n.labelHeight*d.SY.getRows(t.title).length,labelpos:"c"},"id"+u)}),(0,o.bK)(h),d.cM.debug("Graph after layout",h.nodes());let y=e.node();h.nodes().forEach(function(t){void 0!==t&&void 0!==h.node(t)?(d.cM.warn("Node "+t+": "+JSON.stringify(h.node(t))),r.select("#"+y.id+" #"+t).attr("transform","translate("+(h.node(t).x-h.node(t).width/2)+","+(h.node(t).y+(S[t]?S[t].y:0)-h.node(t).height/2)+" )"),r.select("#"+y.id+" #"+t).attr("data-x-shift",h.node(t).x-h.node(t).width/2),s.querySelectorAll("#"+y.id+" #"+t+" .divider").forEach(t=>{let e=t.parentElement,a=0,n=0;e&&(e.parentElement&&(a=e.parentElement.getBBox().width),Number.isNaN(n=parseInt(e.getAttribute("data-x-shift"),10))&&(n=0)),t.setAttribute("x1",0-n+8),t.setAttribute("x2",a-n-8)})):d.cM.debug("No Node "+t+": "+JSON.stringify(h.node(t)))});let w=y.getBBox();h.edges().forEach(function(t){void 0!==t&&void 0!==h.edge(t)&&(d.cM.debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(h.edge(t))),M(e,h.edge(t),h.edge(t).relation))}),w=y.getBBox();let b={id:a||"root",label:a||"root",width:0,height:0};return b.width=w.width+2*n.padding,b.height=w.height+2*n.padding,d.cM.debug("Doc rendered",b,h),b},"renderDoc"),T={parser:i.J8,get db(){return new i.oI(1)},renderer:{setConf:E,draw:W},styles:i.Ee,init:(0,d.eW)(t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute},"init")}}}]);