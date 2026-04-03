import{A as e,Bt as t,Dt as n,Lt as r,O as i,P as a,X as o,at as s,bt as c,d as l,i as u,mn as d,ot as f,r as p,st as m,xt as h,yn as g}from"./mermaid-b92f6f74-BYDGgvZw.js";import{d as _}from"./graph-80608c14-CYpMYlNP.js";import{t as v}from"./channel-d3ce1aa3-BReaTn09.js";import{t as y}from"./index-0cdc3891-uSgdtnPf.js";function b(e){return typeof e==`string`?new d([document.querySelectorAll(e)],[document.documentElement]):new d([p(e)],r)}function x(e,t){return!!e.children(t).length}function S(e){return w(e.v)+`:`+w(e.w)+`:`+w(e.name)}var C=/:/g;function w(e){return e?String(e).replace(C,`\\:`):``}function T(e,t){t&&e.attr(`style`,t)}function E(e,t,n){t&&e.attr(`class`,t).attr(`class`,n+` `+e.attr(`class`))}function D(e,t){var n=t.graph();if(h(n)){var r=n.transition;if(m(r))return r(e)}return e}function O(e,t){var n=e.append(`foreignObject`).attr(`width`,`100000`),r=n.append(`xhtml:div`);r.attr(`xmlns`,`http://www.w3.org/1999/xhtml`);var i=t.label;switch(typeof i){case`function`:r.insert(i);break;case`object`:r.insert(function(){return i});break;default:r.html(i)}T(r,t.labelStyle),r.style(`display`,`inline-block`),r.style(`white-space`,`nowrap`);var a=r.node().getBoundingClientRect();return n.attr(`width`,a.width).attr(`height`,a.height),n}var k={},A=function(e){let t=Object.keys(e);for(let n of t)k[n]=e[n]},j=async function(e,t,n,r,o,u){let d=r.select(`[id="${n}"]`),f=Object.keys(e);for(let n of f){let r=e[n],f=`default`;r.classes.length>0&&(f=r.classes.join(` `)),f+=` flowchart-label`;let p=l(r.styles),m=r.text===void 0?r.id:r.text,h;if(i.info(`vertex`,r,r.labelType),r.labelType===`markdown`)i.info(`vertex`,r,r.labelType);else if(a(c().flowchart.htmlLabels))h=O(d,{label:m}).node(),h.parentNode.removeChild(h);else{let e=o.createElementNS(`http://www.w3.org/2000/svg`,`text`);e.setAttribute(`style`,p.labelStyle.replace(`color:`,`fill:`));let t=m.split(g.lineBreakRegex);for(let n of t){let t=o.createElementNS(`http://www.w3.org/2000/svg`,`tspan`);t.setAttributeNS(`http://www.w3.org/XML/1998/namespace`,`xml:space`,`preserve`),t.setAttribute(`dy`,`1em`),t.setAttribute(`x`,`1`),t.textContent=n,e.appendChild(t)}h=e}let _=0,v=``;switch(r.type){case`round`:_=5,v=`rect`;break;case`square`:v=`rect`;break;case`diamond`:v=`question`;break;case`hexagon`:v=`hexagon`;break;case`odd`:v=`rect_left_inv_arrow`;break;case`lean_right`:v=`lean_right`;break;case`lean_left`:v=`lean_left`;break;case`trapezoid`:v=`trapezoid`;break;case`inv_trapezoid`:v=`inv_trapezoid`;break;case`odd_right`:v=`rect_left_inv_arrow`;break;case`circle`:v=`circle`;break;case`ellipse`:v=`ellipse`;break;case`stadium`:v=`stadium`;break;case`subroutine`:v=`subroutine`;break;case`cylinder`:v=`cylinder`;break;case`group`:v=`rect`;break;case`doublecircle`:v=`doublecircle`;break;default:v=`rect`}let y=await s(m,c());t.setNode(r.id,{labelStyle:p.labelStyle,shape:v,labelText:y,labelType:r.labelType,rx:_,ry:_,class:f,style:p.style,id:r.id,link:r.link,linkTarget:r.linkTarget,tooltip:u.db.getTooltip(r.id)||``,domId:u.db.lookUpDomId(r.id),haveCallback:r.haveCallback,width:r.type===`group`?500:void 0,dir:r.dir,type:r.type,props:r.props,padding:c().flowchart.padding}),i.info(`setNode`,{labelStyle:p.labelStyle,labelType:r.labelType,shape:v,labelText:y,rx:_,ry:_,class:f,style:p.style,id:r.id,domId:u.db.lookUpDomId(r.id),width:r.type===`group`?500:void 0,type:r.type,dir:r.dir,props:r.props,padding:c().flowchart.padding})}},M=async function(e,t,n){i.info(`abc78 edges = `,e);let r=0,a={},o,d;if(e.defaultStyle!==void 0){let t=l(e.defaultStyle);o=t.style,d=t.labelStyle}for(let n of e){r++;let p=`L-`+n.start+`-`+n.end;a[p]===void 0?(a[p]=0,i.info(`abc78 new entry`,p,a[p])):(a[p]++,i.info(`abc78 new entry`,p,a[p]));let m=p+`-`+a[p];i.info(`abc78 new link id to be used is`,p,m,a[p]);let h=`LS-`+n.start,_=`LE-`+n.end,v={style:``,labelStyle:``};switch(v.minlen=n.length||1,n.type===`arrow_open`?v.arrowhead=`none`:v.arrowhead=`normal`,v.arrowTypeStart=`arrow_open`,v.arrowTypeEnd=`arrow_open`,n.type){case`double_arrow_cross`:v.arrowTypeStart=`arrow_cross`;case`arrow_cross`:v.arrowTypeEnd=`arrow_cross`;break;case`double_arrow_point`:v.arrowTypeStart=`arrow_point`;case`arrow_point`:v.arrowTypeEnd=`arrow_point`;break;case`double_arrow_circle`:v.arrowTypeStart=`arrow_circle`;case`arrow_circle`:v.arrowTypeEnd=`arrow_circle`;break}let y=``,b=``;switch(n.stroke){case`normal`:y=`fill:none;`,o!==void 0&&(y=o),d!==void 0&&(b=d),v.thickness=`normal`,v.pattern=`solid`;break;case`dotted`:v.thickness=`normal`,v.pattern=`dotted`,v.style=`fill:none;stroke-width:2px;stroke-dasharray:3;`;break;case`thick`:v.thickness=`thick`,v.pattern=`solid`,v.style=`stroke-width: 3.5px;fill:none;`;break;case`invisible`:v.thickness=`invisible`,v.pattern=`solid`,v.style=`stroke-width: 0;fill:none;`;break}if(n.style!==void 0){let e=l(n.style);y=e.style,b=e.labelStyle}v.style=v.style+=y,v.labelStyle=v.labelStyle+=b,n.interpolate===void 0?e.defaultInterpolate===void 0?v.curve=u(k.curve,f):v.curve=u(e.defaultInterpolate,f):v.curve=u(n.interpolate,f),n.text===void 0?n.style!==void 0&&(v.arrowheadStyle=`fill: #333`):(v.arrowheadStyle=`fill: #333`,v.labelpos=`c`),v.labelType=n.labelType,v.label=await s(n.text.replace(g.lineBreakRegex,`
`),c()),n.style===void 0&&(v.style=v.style||`stroke: #333; stroke-width: 1.5px;fill:none;`),v.labelStyle=v.labelStyle.replace(`color:`,`fill:`),v.id=m,v.classes=`flowchart-link `+h+` `+_,t.setEdge(n.start,n.end,v,r)}},N={setConf:A,addVertices:j,addEdges:M,getClasses:function(e,t){return t.db.getClasses()},draw:async function(n,r,a,s){i.info(`Drawing flowchart`);let l=s.db.getDirection();l===void 0&&(l=`TD`);let{securityLevel:u,flowchart:d}=c(),f=d.nodeSpacing||50,p=d.rankSpacing||50,m;u===`sandbox`&&(m=o(`#i`+r));let h=o(u===`sandbox`?m.nodes()[0].contentDocument.body:`body`),g=u===`sandbox`?m.nodes()[0].contentDocument:document,v=new _({multigraph:!0,compound:!0}).setGraph({rankdir:l,nodesep:f,ranksep:p,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),x,S=s.db.getSubGraphs();i.info(`Subgraphs - `,S);for(let e=S.length-1;e>=0;e--)x=S[e],i.info(`Subgraph - `,x),s.db.addVertex(x.id,{text:x.title,type:x.labelType},`group`,void 0,x.classes,x.dir);let C=s.db.getVertices(),w=s.db.getEdges();i.info(`Edges`,w);let T=0;for(T=S.length-1;T>=0;T--){x=S[T],b(`cluster`).append(`text`);for(let e=0;e<x.nodes.length;e++)i.info(`Setting up subgraphs`,x.nodes[e],x.id),v.setParent(x.nodes[e],x.id)}await j(C,v,r,h,g,s),await M(w,v);let E=h.select(`[id="${r}"]`);if(await y(h.select(`#`+r+` g`),v,[`point`,`circle`,`cross`],`flowchart`,r),t.insertTitle(E,`flowchartTitleText`,d.titleTopMargin,s.db.getDiagramTitle()),e(v,E,d.diagramPadding,d.useMaxWidth),s.db.indexNodes(`subGraph`+T),!d.htmlLabels){let e=g.querySelectorAll(`[id="`+r+`"] .edgeLabel .label`);for(let t of e){let e=t.getBBox(),n=g.createElementNS(`http://www.w3.org/2000/svg`,`rect`);n.setAttribute(`rx`,0),n.setAttribute(`ry`,0),n.setAttribute(`width`,e.width),n.setAttribute(`height`,e.height),t.insertBefore(n,t.firstChild)}}Object.keys(C).forEach(function(e){let t=C[e];if(t.link){let n=o(`#`+r+` [id="`+e+`"]`);if(n){let e=g.createElementNS(`http://www.w3.org/2000/svg`,`a`);e.setAttributeNS(`http://www.w3.org/2000/svg`,`class`,t.classes.join(` `)),e.setAttributeNS(`http://www.w3.org/2000/svg`,`href`,t.link),e.setAttributeNS(`http://www.w3.org/2000/svg`,`rel`,`noopener`),u===`sandbox`?e.setAttributeNS(`http://www.w3.org/2000/svg`,`target`,`_top`):t.linkTarget&&e.setAttributeNS(`http://www.w3.org/2000/svg`,`target`,t.linkTarget);let r=n.insert(function(){return e},`:first-child`),i=n.select(`.label-container`);i&&r.append(function(){return i.node()});let a=n.select(`.label`);a&&r.append(function(){return a.node()})}}})}},P=(e,t)=>{let r=v;return n(r(e,`r`),r(e,`g`),r(e,`b`),t)},F=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${P(e.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`;export{F as a,D as c,x as i,N as l,E as n,S as o,T as r,O as s,b as t};