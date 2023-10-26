import{r as o,C as h,a,j as e,F as x,N as b,c as m}from"./index.a64a8b1d.js";import{D as N,P as w}from"./PanelWithBackdrop.da4e90da.js";import{I as S,T as p}from"./TemporalNotification.ac06afcd.js";function v(t){var s;const r=o.exports.useContext(h);return a("fieldset",{className:"categories-group",children:[e("legend",{children:(s=t.title)!=null?s:"Current categories"}),e("div",{className:"categories-flex",children:r.getCategories().map((c,i)=>e("div",{children:c},i))})]})}function T(){const t=o.exports.useRef(),r=o.exports.useContext(h),[s,c]=o.exports.useState(),[i,n]=o.exports.useState(!1);function d(u){u.preventDefault();const l=t.current.value.trim();l.length>0&&r.addCategory(l)&&(t.current.value="",c(a(p,{hideMessage:()=>c(void 0),durationSeconds:1,children:["Category added"," "]})))}return a(x,{children:[s,a("form",{onSubmit:d,className:"form-display-flex",children:[e("h2",{className:"txt-center",style:{margin:"5px"},children:"Add a new category"}),e(S,{text:"New category name",customText:"The category must be unique and between 3 and 30 characters !",ref:t,minLength:3,maxLength:31,onChangeHandler:u=>{n(u.length>=3)}}),e(v,{}),e("button",{type:"submit",className:"btn-green",disabled:!i,children:"Save"})]})]})}function M(){var d;const t=o.exports.useRef(),r=o.exports.useContext(h),s=o.exports.useContext(b),[c,i]=o.exports.useState();o.exports.useLayoutEffect(()=>{t.current.blockCategories(m)},[]);function n(u){u.preventDefault();const l=t.current.getSelectValue();m.indexOf(l)===-1&&r.getCategories().includes(l)&&(r.deleteCategory(l),s.getNotes().filter(g=>g.category===l).forEach(g=>{s.modifyNote({...g,category:"none"})}),t.current.setValue("none"),t.current.updateCategory(),i(e(p,{hideMessage:()=>i(void 0),durationSeconds:1.5,children:"Category deleted !"})))}return a(x,{children:[c,e("div",{className:"div-scroll-Y",children:a("div",{className:"form-display-flex",children:[e("h2",{className:"txt-center",children:"Select a category to delete"}),a("form",{onSubmit:n,children:[e(N,{labelMessage:"Select category",ref:t,isNeccessary:!0}),e("h3",{style:{marginBottom:"5px"},className:"txt-red",children:"Rules :"}),a("ol",{className:"small-margin",children:[e("li",{children:'You cannot delete the "none" or "important" category.'}),e("li",{children:'Category "none" will be associated for cards whose category is deleted.'})]}),e("button",{type:"submit",className:"btn-red",disabled:m.includes((d=t.current)==null?void 0:d.getSelectValue()),children:"Delete category"}),e(v,{})]})]})})]})}function D(){const t=o.exports.useRef(),r=o.exports.useRef(),s=o.exports.useContext(h),c=o.exports.useContext(b),[i,n]=o.exports.useState(),[d,u]=o.exports.useState(!1);o.exports.useLayoutEffect(()=>{t.current.blockCategories(m)},[]);function l(g){g.preventDefault();const y=t.current.getSelectValue(),C=r.current.value.trim();y!="none"&&s.replaceCategory(y,C)&&(c.getNotes().filter(f=>f.category===y).forEach(f=>{c.modifyNote({...f,category:C})}),t.current.setValue("none"),t.current.updateCategory(),r.current.value="",n(e(p,{hideMessage:()=>n(void 0),durationSeconds:1.5,children:"Category changed !"})))}return a("div",{className:"form-display-flex",children:[i,e("h2",{className:"txt-center",children:"Change the name of a category"}),a("form",{onSubmit:l,children:[e(N,{labelMessage:"Select category",ref:t,isNeccessary:!0}),e("h3",{className:"txt-red",style:{marginLeft:"0px",marginBottom:"5px"},children:"Rules :"}),a("ol",{className:"small-margin medium-margin-bot",children:[e("li",{children:'You cannot modify the "none" or "important" category .'}),e("li",{children:"There cannot be two categories with the same name ."})]}),e(S,{text:"Insert a name",customText:"The category must be between 3 and 30 characters !",ref:r,minLength:3,maxLength:31,onChangeHandler:g=>{u(g.length>=3)}}),e("button",{type:"submit",className:"btn-green",disabled:!d,style:{marginTop:"1rem"},children:"Save"})]})]})}const R=[{btnText:"Add a new category",categoryState:0},{btnText:"Delete a category",categoryState:1},{btnText:"Modify a category",categoryState:2}];function I(){const[t,r]=o.exports.useState(),s=o.exports.useId(),c=()=>r(void 0);function i(n){r(a(w,{closePanel:c,children:[n===0&&e(T,{}),n===1&&e(M,{}),n===2&&e(D,{})]}))}return a(x,{children:[t,e("div",{className:"settings-panel",children:a("div",{className:"forms-panel",children:[e("h2",{children:"Categories settings"}),R.map((n,d)=>e("button",{className:"btn-to-form",onClick:()=>i(n.categoryState),children:n.btnText},`${s}-${d}`))]})})]})}export{I as default};
