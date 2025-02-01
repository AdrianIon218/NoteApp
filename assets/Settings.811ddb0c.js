import{b as y,c as t,j as e,a as x,r as l,N,u as C,F as v}from"./index.c0fa6797.js";import{S as b,P as T}from"./PanelWithBackdrop.d1f379da.js";import{I as S}from"./InputText.41173a7a.js";function R(i){var r;const a=y();return t("fieldset",{className:"categories-group",children:[e("legend",{children:(r=i.title)!=null?r:"Current categories"}),e("div",{className:"categories-flex",children:a.getCategories().map((c,n)=>e("div",{children:c},n))})]})}function F(){const i=y(),a=x(),[r,c]=l.exports.useState(""),n=l.exports.useRef();function o(s){s.preventDefault(),i.addCategory(r)?(n.current.value="",c(""),a.showNotification("Category added !")):a.showNotification("Invalid name !","warning")}return t("div",{className:"flex-col-ctn setting-form",children:[e("form",{onSubmit:o,children:t("div",{className:"flex-center",children:[e("h2",{className:"txt-center",children:"Add a new category"}),e(S,{text:"New category name",ref:n,minLength:3,maxLength:31,onChangeHandler:s=>{c(s.trim())}}),e("button",{type:"submit",className:"btn btn-green btn-styled",disabled:!(r.length>=3),children:"Add new category"})]})}),t("div",{className:"rules-ctn",children:[e("h3",{className:"txt-red",children:"Rules :"}),t("ol",{children:[e("li",{children:"The new category must be unique."}),e("li",{children:"The new category must be between 3 and 30 characters."})]})]}),e(R,{})]})}const I="choose";function D(){const i=y(),a=i.getCategories().filter(g=>g!==N.NONE&&g!=="important"),r=x(),c=C(),[n,o]=l.exports.useState(""),s=l.exports.useRef(null);function f(g){var h;g.preventDefault(),c.getNotes().filter(m=>m.category===n).forEach(m=>{c.modifyNote({...m,category:N.NONE})}),i.deleteCategory(n),r.showNotification("Category deleted !","warning"),o(""),(h=s.current)==null||h.resetSelectValue()}return t("div",{className:"flex-col-ctn setting-form",children:[a.length!==0?e("form",{onSubmit:f,children:t("div",{className:"flex-center",children:[e("h2",{className:"txt-center",children:"Select a category to delete"}),e(b,{options:a,onSelection:o,defaultOption:I,ref:s}),e("button",{type:"submit",className:"btn btn-red",disabled:n==="",children:"Delete category"})]})}):e("h2",{className:"txt-center",children:"You don't have any category to delete!"}),t("div",{className:"rules-ctn",children:[e("h3",{className:"txt-red",children:"Rules :"}),t("ol",{children:[e("li",{children:'You cannot delete the "none" or "important" category.'}),e("li",{children:'Category "none" will be associated for cards whose category is deleted.'})]})]})]})}function O(){const i=C(),a=y(),r=x(),c=a.getCategories().filter(d=>d!==N.NONE&&d!=="important"),[n,o]=l.exports.useState(""),[s,f]=l.exports.useState(""),[g,h]=l.exports.useState(!1),m=l.exports.useRef(null),p=l.exports.useRef();function w(d){d.preventDefault(),a.replaceCategory(n,s)?(i.getNotes().filter(u=>u.category===n).forEach(u=>{i.modifyNote({...u,category:s})}),p.current.value="",m.current.resetSelectValue(),o(""),f(""),h(!1),r.showNotification("Category changed !")):r.showNotification("Invalid name !","warning")}return t("div",{className:"flex-col-ctn setting-form",children:[c.length===0?e("h2",{className:"txt-center",children:"You don't have any category to modify!"}):e("form",{onSubmit:w,children:t("div",{className:"flex-center",children:[e("h2",{className:"txt-center",children:"Modify a category"}),t("div",{className:"field",style:{fontWeight:900},children:["Choose a category",e(b,{options:c,onSelection:d=>{o(d),h(s.length>=3)},defaultOption:"select",ref:m})]}),e(S,{text:"Rename to",customText:"The category must be between 3 and 30 characters!",ref:p,minLength:3,maxLength:31,required:!1,onChangeHandler:d=>{const u=d.trim();f(u),h(u.length>=3&&n!=="")}}),e("button",{type:"submit",className:"btn btn-green btn-styled",disabled:!g,children:"Save"})]})}),t("div",{className:"rules-ctn",children:[e("h3",{className:"txt-red",children:"Rules :"}),t("ol",{children:[e("li",{children:'You cannot modify the "none" or "important" category.'}),e("li",{children:"There cannot be two categories with the same name."})]})]})]})}const E=[{btnText:"Add a new category",categoryState:0},{btnText:"Delete a category",categoryState:1},{btnText:"Modify a category",categoryState:2}];function P(){const[i,a]=l.exports.useState(),r=l.exports.useId(),c=()=>a(void 0);function n(o){a(t(T,{closePanel:c,children:[o===0&&e(F,{}),o===1&&e(D,{}),o===2&&e(O,{})]}))}return t(v,{children:[i,e("div",{className:"panel-big",children:t("div",{className:"forms-panel",children:[e("h2",{children:"Categories settings"}),E.map((o,s)=>e("button",{className:"btn-to-form",onClick:()=>n(o.categoryState),children:o.btnText},`${r}-${s}`))]})})]})}export{P as default};
