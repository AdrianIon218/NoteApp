import{r as d,j as t,L as D,u as v,a as R,b,c as a,R as F,F as k,d as O,N as B}from"./index.b15c07c9.js";import{T as L}from"./TextArea.9d3177f8.js";import{I as S}from"./InputText.36743630.js";import{S as T,P as w}from"./PanelWithBackdrop.a13cf23c.js";const H=[{path:"view-notes",navTitle:"My Notes"},{path:"create-note",navTitle:"New Note"},{path:"edit-notes",navTitle:"Edit Notes"}];function M({option:e}){const n=d.exports.useId(),o=H.map((s,i)=>t(D,{className:e===s.path?"note-nav__selected":"",to:"/notes/"+s.path,children:s.navTitle},`${n}-${i}`));return t("section",{className:"note-nav",children:o})}let P=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((n,o)=>(o&=63,o<36?n+=o.toString(36):o<62?n+=(o-26).toString(36).toUpperCase():o>62?n+="-":n+="_",n),"");function Y(){const e=v(),n=R(),o=b().getCategories(),s=d.exports.useRef(null),[i,c]=d.exports.useState("none"),l=d.exports.useRef(null),[m,f]=d.exports.useState(""),g=d.exports.useRef(null),[N,u]=d.exports.useState("");function r(){var h;f(""),l.current.value="",u(""),g.current.value="",c("none"),(h=s.current)==null||h.resetSelectValue()}function x(h){h.preventDefault();const C={title:m,category:i,text:N,id:P()};n.showNotification("Note added !"),e.addNote(C),r()}return a("div",{className:"create-note-container",children:[t("h1",{children:"Create a note"}),a("form",{onSubmit:x,children:[t(S,{ref:l,text:"Title",customText:"Insert a title between 3 and 30 characters",minLength:3,maxLength:30,onChangeHandler:f}),a("div",{className:"field",children:["Choose a category"," ",t(T,{options:o,onSelection:h=>{c(h)},ref:s})]}),t(L,{name:"textNote",ref:g,onChangeHandler:u}),a("div",{className:"field-group-btns",children:[t("button",{type:"submit",className:"btn-blue",disabled:m.length<3,children:"Save"}),t("button",{type:"button",className:"btn-blue red",onClick:r,disabled:m.length===0&&i==="none"&&N==="",children:"Discard"})]})]})]})}function A(e){const{title:n,category:o,text:s}=e.note,i=s.split(`
`).map((c,l)=>a(F.Fragment,{children:[c,t("br",{})]},l));return a(w,{closePanel:e.closeNote,plusClass:"panel-max-extended",children:[(o!=null?o:o!=="")?t("label",{className:"category-label",children:o}):null,t("h2",{title:n,children:n}),t("div",{className:"note-text",children:i})]})}function _(e){const[n,o]=d.exports.useState(!1);function s(){o(!0)}function i(){o(!1)}return a(k,{children:[n&&t(A,{note:e,closeNote:i}),a("div",{className:"note-item",onClick:s,children:[t("h2",{title:e.title,children:e.title}),e.category!=="none"&&e.category.length>0&&t("label",{children:e.category}),t("div",{children:e.text.split(`
`)[0]})]})]})}function j(e,n){const o=e.category==="none"?"":e.category,s=n.category==="none"?"":n.category;return o>s?1:o<s?-1:e.title>n.title?1:e.title<n.title?-1:0}function E(e){return e.sort(j)}function V(){const e=E(v().getNotes()),n=b().getCategories(),[o,s]=d.exports.useState("all"),i=e.filter(l=>o==="all"||l.category===o).map(l=>t(_,{id:l.id,title:l.title,text:l.text,category:l.category},l.id)),c=i.length;return a("div",{className:"view-notes",children:[e.length>0&&a("h3",{children:[t("span",{children:"Select a category\xA0"}),t(T,{options:["all",...n],onSelection:l=>{s(l)}})]}),t("h1",{children:c===0?o==="all"?"You don't have any notes!":"You don't have any notes of this category!":c===1?"You have only 1 note!":`You have ${c} notes!`}),c>0&&t("div",{className:"view-notes__container",children:i})]})}function W(e){var n,o;return a("div",{className:"note-item-edit",children:[e.numOfFirstLetersToHighlight?a("h2",{title:e.title,children:[t("span",{className:"text-highlighted",children:(n=e.title)==null?void 0:n.slice(0,e.numOfFirstLetersToHighlight)}),(o=e.title)==null?void 0:o.slice(e.numOfFirstLetersToHighlight)]}):t("h2",{title:e.title,children:e.title}),e.category!=="none"&&t("label",{children:e.category}),t("div",{className:"edit-btn",onClick:()=>e.modifyItem(),children:t("button",{children:"edit"})}),t("div",{className:"edit-btn",onClick:()=>e.deleteItem(),children:t("button",{className:"delete",children:"delete"})})]})}function $({note:e,closeEditMode:n}){const o=R(),s=v(),i=b().getCategories(),c=d.exports.useRef(null),[l,m]=d.exports.useState(e.category),f=d.exports.useRef(null),[g,N]=d.exports.useState(e.title),u=d.exports.useRef(null),[r,x]=d.exports.useState(e.text),h=g!==e.title||l!==e.category||r!==e.text;function C(y){y.preventDefault();const p={title:f.current.value,category:l,text:u.current.value,id:e.id};(p.title!==e.title||p.category!==e.category||p.text!==e.text)&&(s.modifyNote(p),o.showNotification("Note changed !"))}function I(){var y;f.current.value=e.title,N(e.title),u.current.value=e.text,x(e.text),(y=c.current)==null||y.resetSelectValue(),m(e.category)}return a(w,{closePanel:n,plusClass:"panel-max-extended",children:[t("h2",{children:"Edit note "}),a("form",{onSubmit:C,children:[t(S,{ref:f,text:"Title",customText:"The title must be between 3 and 30 characters !",minLength:3,maxLength:30,value:e.title,onChangeHandler:N}),a("div",{className:"field",children:["Change the category",t(T,{options:i,defaultOption:e.category,onSelection:y=>{m(y)},ref:c})]}),t(L,{name:"textNote",ref:u,value:e.text,onChangeHandler:x}),a("div",{className:"field-group-btns",children:[t("button",{className:"btn-blue",disabled:!h,children:"Save"}),t("button",{type:"button",onClick:I,className:"btn-blue red",title:"Reset to the last saved content",disabled:!h,children:"Discard changes"})]})]})]})}function U(e){const n=v(),o=d.exports.useRef(null);function s(){var c;(c=o.current)==null||c.closeBackdrop()}function i(){n.deleteNoteById(e.id),s()}return a(w,{closePanel:e.closeDeleteForm,plusClass:"panel-mind-extended",ref:o,children:[t("h1",{children:"Do you really want to delete this note?"}),a("div",{children:[t("button",{className:"confirmation-btn",onClick:i,children:"Yes"}),t("button",{className:"confirmation-btn btn-no",onClick:s,children:"No"})]})]})}const q=(e,n)=>{switch(n.type){case 0:return;case 1:return n.item&&n.closeEditMode&&t($,{note:n.item,closeEditMode:n.closeEditMode});case 2:return n.item&&n.closeEditMode&&t(U,{closeDeleteForm:n.closeEditMode,id:n.item.id})}};function z(){const[e,n]=d.exports.useReducer(q,void 0),[o,s]=d.exports.useState(""),i=E(v().getNotes()),c=i.length,l=o.length;function m(r){n({type:1,item:r,closeEditMode:g})}function f(r){n({type:2,item:r,closeEditMode:g})}function g(){n({type:0})}const N=o.toLowerCase(),u=i.filter(r=>r.title.toLowerCase().startsWith(N)).map((r,x)=>t(W,{title:r.title,numOfFirstLetersToHighlight:l,category:r.category,text:r.text,modifyItem:()=>{m(r)},deleteItem:()=>{f(r)}},x));return a("div",{className:"edit-note-container",children:[e,c===0&&t("h2",{children:"You don't have any notes to edit!"}),c>3&&t(S,{required:!1,text:"Search the note by name",onChangeHandler:r=>{s(r)}}),u.length>0&&t("div",{className:"notes-container",children:u}),u.length===0&&l>0&&t("h2",{children:"You don't have any note with this name!"})]})}const G=[{path:"view-notes",component:t(V,{})},{path:"create-note",component:t(Y,{})},{path:"edit-notes",component:t(z,{})}];function J({option:e}){const n=G.filter(o=>o.path===e)[0];return t("section",{className:"note-box",children:n.component})}const K=["view-notes","create-note","edit-notes"];function te(){const{option:e}=O();return e===void 0||!K.includes(e)?t(B,{replace:!0,to:"/page-not-found"}):a("section",{className:"note-container",children:[t(M,{option:e}),t(J,{option:e})]})}export{te as default};