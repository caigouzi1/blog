import{Pt as e,T as t,Ut as n,X as r,Xt as i,_n as a,a as o,cn as s,f as c,it as l,p as u,r as d,rt as f,st as p,vt as m,w as h,wt as g}from"./mermaid-500b880f-DqnyLOIa.js";import{d as _}from"./graph-76cbc52e-DYDu6o-F.js";import{t as v}from"./channel-ce12445b-Bk4WoTnj.js";import{t as y}from"./index-2c3f9202-B8VPMk9r.js";function b(e){return typeof e==`string`?new r([document.querySelectorAll(e)],[document.documentElement]):new r([u(e)],a)}function x(e,t){return!!e.children(t).length}function S(e){return w(e.v)+`:`+w(e.w)+`:`+w(e.name)}var C=/:/g;function w(e){return e?String(e).replace(C,`\\:`):``}function T(e,t){t&&e.attr(`style`,t)}function E(e,t,n){t&&e.attr(`class`,t).attr(`class`,n+` `+e.attr(`class`))}function D(e,n){var r=n.graph();if(t(r)){var i=r.transition;if(h(i))return i(e)}return e}function O(e,t){var n=e.append(`foreignObject`).attr(`width`,`100000`),r=n.append(`xhtml:div`);r.attr(`xmlns`,`http://www.w3.org/1999/xhtml`);var i=t.label;switch(typeof i){case`function`:r.insert(i);break;case`object`:r.insert(function(){return i});break;default:r.html(i)}T(r,t.labelStyle),r.style(`display`,`inline-block`),r.style(`white-space`,`nowrap`);var a=r.node().getBoundingClientRect();return n.attr(`width`,a.width).attr(`height`,a.height),n}var k={},A=function(e){let t=Object.keys(e);for(let n of t)k[n]=e[n]},j=async function(e,t,n,r,a,o){let s=r.select(`[id="${n}"]`),c=Object.keys(e);for(let n of c){let r=e[n],c=`default`;r.classes.length>0&&(c=r.classes.join(` `)),c+=` flowchart-label`;let u=p(r.styles),h=r.text===void 0?r.id:r.text,g;if(d.info(`vertex`,r,r.labelType),r.labelType===`markdown`)d.info(`vertex`,r,r.labelType);else if(f(m().flowchart.htmlLabels))g=O(s,{label:h}).node(),g.parentNode.removeChild(g);else{let e=a.createElementNS(`http://www.w3.org/2000/svg`,`text`);e.setAttribute(`style`,u.labelStyle.replace(`color:`,`fill:`));let t=h.split(l.lineBreakRegex);for(let n of t){let t=a.createElementNS(`http://www.w3.org/2000/svg`,`tspan`);t.setAttributeNS(`http://www.w3.org/XML/1998/namespace`,`xml:space`,`preserve`),t.setAttribute(`dy`,`1em`),t.setAttribute(`x`,`1`),t.textContent=n,e.appendChild(t)}g=e}let _=0,v=``;switch(r.type){case`round`:_=5,v=`rect`;break;case`square`:v=`rect`;break;case`diamond`:v=`question`;break;case`hexagon`:v=`hexagon`;break;case`odd`:v=`rect_left_inv_arrow`;break;case`lean_right`:v=`lean_right`;break;case`lean_left`:v=`lean_left`;break;case`trapezoid`:v=`trapezoid`;break;case`inv_trapezoid`:v=`inv_trapezoid`;break;case`odd_right`:v=`rect_left_inv_arrow`;break;case`circle`:v=`circle`;break;case`ellipse`:v=`ellipse`;break;case`stadium`:v=`stadium`;break;case`subroutine`:v=`subroutine`;break;case`cylinder`:v=`cylinder`;break;case`group`:v=`rect`;break;case`doublecircle`:v=`doublecircle`;break;default:v=`rect`}let y=await i(h,m());t.setNode(r.id,{labelStyle:u.labelStyle,shape:v,labelText:y,labelType:r.labelType,rx:_,ry:_,class:c,style:u.style,id:r.id,link:r.link,linkTarget:r.linkTarget,tooltip:o.db.getTooltip(r.id)||``,domId:o.db.lookUpDomId(r.id),haveCallback:r.haveCallback,width:r.type===`group`?500:void 0,dir:r.dir,type:r.type,props:r.props,padding:m().flowchart.padding}),d.info(`setNode`,{labelStyle:u.labelStyle,labelType:r.labelType,shape:v,labelText:y,rx:_,ry:_,class:c,style:u.style,id:r.id,domId:o.db.lookUpDomId(r.id),width:r.type===`group`?500:void 0,type:r.type,dir:r.dir,props:r.props,padding:m().flowchart.padding})}},M=async function(t,n,r){d.info(`abc78 edges = `,t);let a=0,o={},s,c;if(t.defaultStyle!==void 0){let e=p(t.defaultStyle);s=e.style,c=e.labelStyle}for(let r of t){a++;let u=`L-`+r.start+`-`+r.end;o[u]===void 0?(o[u]=0,d.info(`abc78 new entry`,u,o[u])):(o[u]++,d.info(`abc78 new entry`,u,o[u]));let f=u+`-`+o[u];d.info(`abc78 new link id to be used is`,u,f,o[u]);let h=`LS-`+r.start,_=`LE-`+r.end,v={style:``,labelStyle:``};switch(v.minlen=r.length||1,r.type===`arrow_open`?v.arrowhead=`none`:v.arrowhead=`normal`,v.arrowTypeStart=`arrow_open`,v.arrowTypeEnd=`arrow_open`,r.type){case`double_arrow_cross`:v.arrowTypeStart=`arrow_cross`;case`arrow_cross`:v.arrowTypeEnd=`arrow_cross`;break;case`double_arrow_point`:v.arrowTypeStart=`arrow_point`;case`arrow_point`:v.arrowTypeEnd=`arrow_point`;break;case`double_arrow_circle`:v.arrowTypeStart=`arrow_circle`;case`arrow_circle`:v.arrowTypeEnd=`arrow_circle`;break}let y=``,b=``;switch(r.stroke){case`normal`:y=`fill:none;`,s!==void 0&&(y=s),c!==void 0&&(b=c),v.thickness=`normal`,v.pattern=`solid`;break;case`dotted`:v.thickness=`normal`,v.pattern=`dotted`,v.style=`fill:none;stroke-width:2px;stroke-dasharray:3;`;break;case`thick`:v.thickness=`thick`,v.pattern=`solid`,v.style=`stroke-width: 3.5px;fill:none;`;break;case`invisible`:v.thickness=`invisible`,v.pattern=`solid`,v.style=`stroke-width: 0;fill:none;`;break}if(r.style!==void 0){let e=p(r.style);y=e.style,b=e.labelStyle}v.style=v.style+=y,v.labelStyle=v.labelStyle+=b,r.interpolate===void 0?t.defaultInterpolate===void 0?v.curve=e(k.curve,g):v.curve=e(t.defaultInterpolate,g):v.curve=e(r.interpolate,g),r.text===void 0?r.style!==void 0&&(v.arrowheadStyle=`fill: #333`):(v.arrowheadStyle=`fill: #333`,v.labelpos=`c`),v.labelType=r.labelType,v.label=await i(r.text.replace(l.lineBreakRegex,`
`),m()),r.style===void 0&&(v.style=v.style||`stroke: #333; stroke-width: 1.5px;fill:none;`),v.labelStyle=v.labelStyle.replace(`color:`,`fill:`),v.id=f,v.classes=`flowchart-link `+h+` `+_,n.setEdge(r.start,r.end,v,a)}},N={setConf:A,addVertices:j,addEdges:M,getClasses:function(e,t){return t.db.getClasses()},draw:async function(e,t,n,r){d.info(`Drawing flowchart`);let i=r.db.getDirection();i===void 0&&(i=`TD`);let{securityLevel:a,flowchart:l}=m(),u=l.nodeSpacing||50,f=l.rankSpacing||50,p;a===`sandbox`&&(p=o(`#i`+t));let h=o(a===`sandbox`?p.nodes()[0].contentDocument.body:`body`),g=a===`sandbox`?p.nodes()[0].contentDocument:document,v=new _({multigraph:!0,compound:!0}).setGraph({rankdir:i,nodesep:u,ranksep:f,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),x,S=r.db.getSubGraphs();d.info(`Subgraphs - `,S);for(let e=S.length-1;e>=0;e--)x=S[e],d.info(`Subgraph - `,x),r.db.addVertex(x.id,{text:x.title,type:x.labelType},`group`,void 0,x.classes,x.dir);let C=r.db.getVertices(),w=r.db.getEdges();d.info(`Edges`,w);let T=0;for(T=S.length-1;T>=0;T--){x=S[T],b(`cluster`).append(`text`);for(let e=0;e<x.nodes.length;e++)d.info(`Setting up subgraphs`,x.nodes[e],x.id),v.setParent(x.nodes[e],x.id)}await j(C,v,t,h,g,r),await M(w,v);let E=h.select(`[id="${t}"]`);if(await y(h.select(`#`+t+` g`),v,[`point`,`circle`,`cross`],`flowchart`,t),s.insertTitle(E,`flowchartTitleText`,l.titleTopMargin,r.db.getDiagramTitle()),c(v,E,l.diagramPadding,l.useMaxWidth),r.db.indexNodes(`subGraph`+T),!l.htmlLabels){let e=g.querySelectorAll(`[id="`+t+`"] .edgeLabel .label`);for(let t of e){let e=t.getBBox(),n=g.createElementNS(`http://www.w3.org/2000/svg`,`rect`);n.setAttribute(`rx`,0),n.setAttribute(`ry`,0),n.setAttribute(`width`,e.width),n.setAttribute(`height`,e.height),t.insertBefore(n,t.firstChild)}}Object.keys(C).forEach(function(e){let n=C[e];if(n.link){let r=o(`#`+t+` [id="`+e+`"]`);if(r){let e=g.createElementNS(`http://www.w3.org/2000/svg`,`a`);e.setAttributeNS(`http://www.w3.org/2000/svg`,`class`,n.classes.join(` `)),e.setAttributeNS(`http://www.w3.org/2000/svg`,`href`,n.link),e.setAttributeNS(`http://www.w3.org/2000/svg`,`rel`,`noopener`),a===`sandbox`?e.setAttributeNS(`http://www.w3.org/2000/svg`,`target`,`_top`):n.linkTarget&&e.setAttributeNS(`http://www.w3.org/2000/svg`,`target`,n.linkTarget);let t=r.insert(function(){return e},`:first-child`),i=r.select(`.label-container`);i&&t.append(function(){return i.node()});let o=r.select(`.label`);o&&t.append(function(){return o.node()})}}})}},P=(e,t)=>{let r=v;return n(r(e,`r`),r(e,`g`),r(e,`b`),t)},F=e=>`.label {
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