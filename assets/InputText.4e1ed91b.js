import{r as i,a as c,j as a}from"./index.7aa0ffc2.js";function m(e,u){var l;const t=`${i.exports.useId()}-idNoteTitle`;return c("div",{className:"field inputDiv",children:[a("label",{htmlFor:t,className:"txt-bold",children:e.text}),a("input",{type:"text",id:t,name:"noteTitle",autoComplete:"off",ref:u,minLength:e.minLength||0,maxLength:e.maxLength||100,title:"",required:(l=e.required)!=null?l:!0,defaultValue:e.value,placeholder:e.placeholder&&`ex: ${e.placeholder}`,onChange:d=>{var n;const x=d.target.value;(n=e.onChangeHandler)==null||n.call(e,x)}}),e.customText&&a("label",{htmlFor:t,custom:e.customText})]})}const o=i.exports.forwardRef(m);export{o as I};
