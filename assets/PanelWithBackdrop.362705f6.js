import{r as c,j as n,a as o}from"./index.f17b39f8.js";function t(a){const i=c.exports.useRef(null),s=c.exports.useRef(null);function l(){var e;(e=s.current)==null||e.classList.add("anim-line-down"),setTimeout(()=>{a.closePanel()},600)}return n("div",{className:"backdrop",ref:i,onClick:l,children:o("div",{className:"panel-grid",ref:s,children:[n("div",{className:` ${a.plusClass} panel-container`,onClick:e=>e.stopPropagation(),children:a.children}),n("div",{className:"close-btn-x",onClick:l})]})})}export{t as P};
