import{r as t,C as x,b as o,j as e,a as y,N as p,F as w}from"./index.526bc863.js";import{S as N,P as v}from"./PanelWithBackdrop.63c6ee35.js";import{I as b}from"./InputText.bfeb6d85.js";function R(l){var s;const r=t.exports.useContext(x);return o("fieldset",{className:"categories-group",children:[e("legend",{children:(s=l.title)!=null?s:"Current categories"}),e("div",{className:"categories-flex",children:r.getCategories().map((c,n)=>e("div",{children:c},n))})]})}function T(){const l=t.exports.useContext(x),r=t.exports.useContext(y),[s,c]=t.exports.useState(""),n=t.exports.useRef();function a(i){i.preventDefault(),l.addCategory(s)?(n.current.value="",c(""),r.showNotification("Category added !")):r.showNotification("Invalid name !","warning")}return o("div",{className:"flex-col-ctn setting-form",children:[e("form",{onSubmit:a,children:o("div",{className:"flex-center",children:[e("h2",{className:"txt-center",children:"Add a new category"}),e(b,{text:"New category name",ref:n,minLength:3,maxLength:31,onChangeHandler:i=>{c(i.trim())}}),e("button",{type:"submit",className:"btn btn-green btn-styled",disabled:!(s.length>=3),children:"Add new category"})]})}),o("div",{className:"rules-ctn",children:[e("h3",{className:"txt-red",children:"Rules :"}),o("ol",{children:[e("li",{children:"The new category must be unique."}),e("li",{children:"The new category must be between 3 and 30 characters."})]})]}),e(R,{})]})}const F="choose";function I(){const l=t.exports.useContext(x),r=l.getCategories().filter(g=>g!=="none"&&g!=="important"),s=t.exports.useContext(y),c=t.exports.useContext(p),[n,a]=t.exports.useState(""),i=t.exports.useRef(null);function f(g){var h;g.preventDefault(),c.getNotes().filter(m=>m.category===n).forEach(m=>{c.modifyNote({...m,category:"none"})}),l.deleteCategory(n),s.showNotification("Category deleted !","warning"),a(""),(h=i.current)==null||h.resetSelectValue()}return o("div",{className:"flex-col-ctn setting-form",children:[r.length!==0?e("form",{onSubmit:f,children:o("div",{className:"flex-center",children:[e("h2",{className:"txt-center",children:"Select a category to delete"}),e(N,{options:r,onSelection:a,defaultOption:F,ref:i}),e("button",{type:"submit",className:"btn btn-red",disabled:n==="",children:"Delete category"})]})}):e("h2",{className:"txt-center",children:"You don't have any category to delete!"}),o("div",{className:"rules-ctn",children:[e("h3",{className:"txt-red",children:"Rules :"}),o("ol",{children:[e("li",{children:'You cannot delete the "none" or "important" category.'}),e("li",{children:'Category "none" will be associated for cards whose category is deleted.'})]})]})]})}function D(){const l=t.exports.useContext(p),r=t.exports.useContext(x),s=t.exports.useContext(y),c=r.getCategories().filter(d=>d!=="none"&&d!=="important"),[n,a]=t.exports.useState(""),[i,f]=t.exports.useState(""),[g,h]=t.exports.useState(!1),m=t.exports.useRef(null),C=t.exports.useRef();function S(d){d.preventDefault(),r.replaceCategory(n,i)?(l.getNotes().filter(u=>u.category===n).forEach(u=>{l.modifyNote({...u,category:i})}),C.current.value="",m.current.resetSelectValue(),a(""),f(""),h(!1),s.showNotification("Category changed !")):s.showNotification("Invalid name !","warning")}return o("div",{className:"flex-col-ctn setting-form",children:[c.length===0?e("h2",{className:"txt-center",children:"You don't have any category to modify!"}):e("form",{onSubmit:S,children:o("div",{className:"flex-center",children:[e("h2",{className:"txt-center",children:"Modify a category"}),o("div",{className:"field",style:{fontWeight:900},children:["Choose a category",e(N,{options:c,onSelection:d=>{a(d),h(i.length>=3)},defaultOption:"select",ref:m})]}),e(b,{text:"Rename to",customText:"The category must be between 3 and 30 characters!",ref:C,minLength:3,maxLength:31,required:!1,onChangeHandler:d=>{const u=d.trim();f(u),h(u.length>=3&&n!=="")}}),e("button",{type:"submit",className:"btn btn-green btn-styled",disabled:!g,children:"Save"})]})}),o("div",{className:"rules-ctn",children:[e("h3",{className:"txt-red",children:"Rules :"}),o("ol",{children:[e("li",{children:'You cannot modify the "none" or "important" category.'}),e("li",{children:"There cannot be two categories with the same name."})]})]})]})}const L=[{btnText:"Add a new category",categoryState:0},{btnText:"Delete a category",categoryState:1},{btnText:"Modify a category",categoryState:2}];function V(){const[l,r]=t.exports.useState(),s=t.exports.useId(),c=()=>r(void 0);function n(a){r(o(v,{closePanel:c,children:[a===0&&e(T,{}),a===1&&e(I,{}),a===2&&e(D,{})]}))}return o(w,{children:[l,e("div",{className:"panel-big",children:o("div",{className:"forms-panel",children:[e("h2",{children:"Categories settings"}),L.map((a,i)=>e("button",{className:"btn-to-form",onClick:()=>n(a.categoryState),children:a.btnText},`${s}-${i}`))]})})]})}export{V as default};