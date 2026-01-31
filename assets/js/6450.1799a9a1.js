"use strict";(globalThis.webpackChunk_graphql_markdown_website=globalThis.webpackChunk_graphql_markdown_website||[]).push([["6450"],{17802:function(e,t,a){function i(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}a.d(t,{A:function(){return i}}),(0,a(4171).eW)(i,"populateCommonDb")},93595:function(e,t,a){a.d(t,{diagram:function(){return D}});var i=a(17802),l=a(72216),r=a(33417),n=a(4171),s=a(3194),o=a(75910),c=n.vZ.pie,p={sections:new Map,showData:!1,config:c},d=p.sections,u=p.showData,g=structuredClone(c),h=(0,n.eW)(()=>structuredClone(g),"getConfig"),f=(0,n.eW)(()=>{d=new Map,u=p.showData,(0,n.ZH)()},"clear"),w=(0,n.eW)(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);d.has(e)||(d.set(e,t),n.cM.debug(`added new section: ${e}, with value: ${t}`))},"addSection"),m=(0,n.eW)(()=>d,"getSections"),x=(0,n.eW)(e=>{u=e},"setShowData"),T=(0,n.eW)(()=>u,"getShowData"),$={getConfig:h,clear:f,setDiagramTitle:n.g2,getDiagramTitle:n.Kr,setAccTitle:n.GN,getAccTitle:n.eu,setAccDescription:n.U$,getAccDescription:n.Mx,addSection:w,getSections:m,setShowData:x,getShowData:T},b=(0,n.eW)((e,t)=>{(0,i.A)(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},"populateDb"),S={parse:(0,n.eW)(async e=>{let t=await (0,s.Qc)("pie",e);n.cM.debug(t),b(t,$)},"parse")},v=(0,n.eW)(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),y=(0,n.eW)(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),a=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1).sort((e,t)=>t.value-e.value);return(0,o.ve8)().value(e=>e.value)(a)},"createPieArcs"),D={parser:S,db:$,renderer:{draw:(0,n.eW)((e,t,a,i)=>{n.cM.debug("rendering pie chart\n"+e);let s=i.db,c=(0,n.nV)(),p=(0,l.Rb)(s.getConfig(),c.pie),d=(0,r.P)(t),u=d.append("g");u.attr("transform","translate(225,225)");let{themeVariables:g}=c,[h]=(0,l.VG)(g.pieOuterStrokeWidth);h??=2;let f=p.textPosition,w=(0,o.Nb1)().innerRadius(0).outerRadius(185),m=(0,o.Nb1)().innerRadius(185*f).outerRadius(185*f);u.append("circle").attr("cx",0).attr("cy",0).attr("r",185+h/2).attr("class","pieOuterCircle");let x=s.getSections(),T=y(x),$=[g.pie1,g.pie2,g.pie3,g.pie4,g.pie5,g.pie6,g.pie7,g.pie8,g.pie9,g.pie10,g.pie11,g.pie12],b=0;x.forEach(e=>{b+=e});let S=T.filter(e=>"0"!==(e.data.value/b*100).toFixed(0)),v=(0,o.PKp)($);u.selectAll("mySlices").data(S).enter().append("path").attr("d",w).attr("fill",e=>v(e.data.label)).attr("class","pieCircle"),u.selectAll("mySlices").data(S).enter().append("text").text(e=>(e.data.value/b*100).toFixed(0)+"%").attr("transform",e=>"translate("+m.centroid(e)+")").style("text-anchor","middle").attr("class","slice"),u.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");let D=[...x.entries()].map(([e,t])=>({label:e,value:t})),C=u.selectAll(".legend").data(D).enter().append("g").attr("class","legend").attr("transform",(e,t)=>"translate(216,"+(22*t-22*D.length/2)+")");C.append("rect").attr("width",18).attr("height",18).style("fill",e=>v(e.label)).style("stroke",e=>v(e.label)),C.append("text").attr("x",22).attr("y",14).text(e=>s.getShowData()?`${e.label} [${e.value}]`:e.label);let k=512+Math.max(...C.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0));d.attr("viewBox",`0 0 ${k} 450`),(0,n.v2)(d,450,k,p.useMaxWidth)},"draw")},styles:v}}}]);