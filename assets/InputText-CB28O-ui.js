import{r as n,j as t}from"./index-Ci2UunfB.js";function d(e,i){const l=`${n.useId()}-idNoteTitle`;return t.jsxs("div",{className:"field inputDiv",children:[t.jsx("label",{htmlFor:l,className:"txt-bold",children:e.text}),t.jsx("input",{type:"text",id:l,name:"noteTitle",autoComplete:"off",ref:i,minLength:e.minLength||0,maxLength:e.maxLength||100,title:"",required:e.required??!0,defaultValue:e.value,placeholder:e.placeholder&&`ex: ${e.placeholder}`,onChange:u=>{var a;const x=u.target.value;(a=e.onChangeHandler)==null||a.call(e,x)}}),e.customText&&t.jsx("label",{htmlFor:l,custom:e.customText})]})}const c=n.forwardRef(d);export{c as I};
