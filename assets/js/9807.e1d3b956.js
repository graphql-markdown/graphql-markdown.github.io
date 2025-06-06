"use strict";(self.webpackChunk_graphql_markdown_website=self.webpackChunk_graphql_markdown_website||[]).push([["9807"],{57684:function(t,e,a){function r(t,e){t.accDescr&&e.setAccDescription?.(t.accDescr),t.accTitle&&e.setAccTitle?.(t.accTitle),t.title&&e.setDiagramTitle?.(t.title)}a.d(e,{A:function(){return r}}),(0,a(85587).eW)(r,"populateCommonDb")},32689:function(t,e,a){a.d(e,{diagram:function(){return C}});var r=a(57684),l=a(42901),o=a(51559),i=a(85587),c=a(3194),n={packet:[]},s=structuredClone(n),d=i.vZ.packet,k=(0,i.eW)(()=>{let t=(0,l.Rb)({...d,...(0,i.iE)().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),p=(0,i.eW)(()=>s.packet,"getPacket"),b={pushWord:(0,i.eW)(t=>{t.length>0&&s.packet.push(t)},"pushWord"),getPacket:p,getConfig:k,clear:(0,i.eW)(()=>{(0,i.ZH)(),s=structuredClone(n)},"clear"),setAccTitle:i.GN,getAccTitle:i.eu,setDiagramTitle:i.g2,getDiagramTitle:i.Kr,getAccDescription:i.Mx,setAccDescription:i.U$},g=(0,i.eW)(t=>{(0,r.A)(t,b);let e=-1,a=[],l=1,{bitsPerRow:o}=b.getConfig();for(let{start:r,end:c,label:n}of t.blocks){if(c&&c<r)throw Error(`Packet block ${r} - ${c} is invalid. End must be greater than start.`);if(r!==e+1)throw Error(`Packet block ${r} - ${c??r} is not contiguous. It should start from ${e+1}.`);for(e=c??r,i.cM.debug(`Packet block ${r} - ${e} with label ${n}`);a.length<=o+1&&b.getPacket().length<1e4;){let[t,e]=u({start:r,end:c,label:n},l,o);if(a.push(t),t.end+1===l*o&&(b.pushWord(a),a=[],l++),!e)break;({start:r,end:c,label:n}=e)}}b.pushWord(a)},"populate"),u=(0,i.eW)((t,e,a)=>{if(void 0===t.end&&(t.end=t.start),t.start>t.end)throw Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*a?[t,void 0]:[{start:t.start,end:e*a-1,label:t.label},{start:e*a,end:t.end,label:t.label}]},"getNextFittingBlock"),f={parse:(0,i.eW)(async t=>{let e=await (0,c.Qc)("packet",t);i.cM.debug(e),g(e)},"parse")},h=(0,i.eW)((t,e,a,r)=>{let l=r.db,c=l.getConfig(),{rowHeight:n,paddingY:s,bitWidth:d,bitsPerRow:k}=c,p=l.getPacket(),b=l.getDiagramTitle(),g=n+s,u=g*(p.length+1)-(b?0:n),f=d*k+2,h=(0,o.P)(e);for(let[t,e]of(h.attr("viewbox",`0 0 ${f} ${u}`),(0,i.v2)(h,u,f,c.useMaxWidth),p.entries()))x(h,e,t,c);h.append("text").text(b).attr("x",f/2).attr("y",u-g/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),x=(0,i.eW)((t,e,a,{rowHeight:r,paddingX:l,paddingY:o,bitWidth:i,bitsPerRow:c,showBits:n})=>{let s=t.append("g"),d=a*(r+o)+o;for(let t of e){let e=t.start%c*i+1,a=(t.end-t.start+1)*i-l;if(s.append("rect").attr("x",e).attr("y",d).attr("width",a).attr("height",r).attr("class","packetBlock"),s.append("text").attr("x",e+a/2).attr("y",d+r/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(t.label),!n)continue;let o=t.end===t.start,k=d-2;s.append("text").attr("x",e+(o?a/2:0)).attr("y",k).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",o?"middle":"start").text(t.start),o||s.append("text").attr("x",e+a).attr("y",k).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(t.end)}},"drawWord"),$={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},C={parser:f,db:b,renderer:{draw:h},styles:(0,i.eW)(({packet:t}={})=>{let e=(0,l.Rb)($,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles")}}}]);