import{r as c,j as t,N as v,a as u,R as D,F as b,c as y,C as M}from"./index.2f82a951.js";import{D as p}from"./DropDownBtn.85be512a.js";import{T as C}from"./TextArea.0598c3c3.js";import{T as w,I as k}from"./TemporalNotification.83a413b2.js";var f=(e=>(e[e.viewNotes=0]="viewNotes",e[e.createNote=1]="createNote",e[e.editNote=2]="editNote",e))(f||{});const R=[{btnValue:0,navTitle:"My Notes"},{btnValue:1,navTitle:"New Note"},{btnValue:2,navTitle:"Edit Note"}];function I(e){const[n,o]=c.exports.useState(()=>e.initialNavState),l=c.exports.useId();function i(s){const{currentTarget:a}=s,d=+a.name;n!==d&&(e.setNavNotesState(d),o(d))}const r=R.map((s,a)=>t("button",{className:n===s.btnValue?"note-nav__selected":"",name:s.btnValue.toString(),onClick:i,children:s.navTitle},`${l}-${a}`));return t("section",{className:"note-nav",children:r})}let V=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((n,o)=>(o&=63,o<36?n+=o.toString(36):o<62?n+=(o-26).toString(36).toUpperCase():o>62?n+="-":n+="_",n),"");function E(){const[e,n]=c.exports.useState(!1),o=c.exports.useContext(v),l=c.exports.useRef(null),i=c.exports.useRef(),r=c.exports.useRef(null);function s(){l.current.value="",r.current.value="",i.current.resetSelectValue()}function a(h){if(!e){h.preventDefault();const m=l.current.value,S=i.current.getSelectValue(),x=r.current.value,N={title:m,categorySelected:S,text:x,id:V()};o.addNote(N),s(),n(!0)}}function d(){n(!1)}return u("div",{className:"create-note-container",children:[e&&t(w,{hideMessage:d,children:"Note added !"}),t("h1",{children:"Create a note "}),u("form",{onSubmit:a,children:[t(k,{ref:l,text:"Title",customText:"Insert a title between 3 and 30 characters",minLength:3,maxLength:30}),t(p,{labelMessage:"Choose a category",ref:i}),t(C,{name:"textNote",ref:r}),u("div",{className:"field",children:[u("button",{type:"submit",className:"btn-blue",children:[" ","Save"," "]}),u("button",{type:"button",className:"btn-blue red",onClick:s,children:[" ","Discard"," "]})]})]})]})}function _(e){const{title:n,categorySelected:o,text:l}=e.note,i=c.exports.useRef(null),r=l.split(`
`).map((a,d)=>u(D.Fragment,{children:[a,t("br",{})]},d));function s(){i.current.classList.add("anim-line-down"),setTimeout(e.closeNote,700)}return t("div",{className:"backdrop",onClick:s,children:u("div",{className:"note-centered",ref:i,onClick:a=>a.stopPropagation(),children:[o?t("label",{children:o}):t(b,{}),t("button",{className:"close-btn",onClick:s,children:"\xD7"}),t("h2",{title:n,children:n}),t("div",{className:"note-text",children:r})]})})}function F(e){const[n,o]=c.exports.useState(!1);function l(){o(!0)}function i(){o(!1)}return u(b,{children:[n&&t(_,{note:e,closeNote:i}),u("div",{className:"note-item",onClick:l,children:[t("h2",{title:e.title,children:e.title}),e.categorySelected!==y[0]&&t("label",{children:e.categorySelected}),t("div",{children:e.text.split(`
`)[0]})]})]})}function T(e){function n(o,l){return o.categorySelected>l.categorySelected?1:o.categorySelected<l.categorySelected?-1:o.title>l.title?1:o.title<l.title?-1:0}return e.sort(n)}function L(e){const[n,o]=c.exports.useState(e.options[0]),[l,i]=c.exports.useState(!1),r=c.exports.useId();function s(){i(d=>!d)}function a(d){var m;const h=d.target.value;h!==n&&(o(h),(m=e.onSelection)==null||m.call(e,h)),i(!1)}return u("div",{className:"select-interactive",children:[t("div",{className:`select-interactive__ctn ${l?"select-interactive__ctn--open":""}`,onClick:s,title:n,role:"button",tabIndex:0,onBlur:()=>i(!1),children:n}),t("div",{className:`select-interactive__options ${l?"select-interactive__options--open":""}`,children:e.options.map((d,h)=>t("button",{value:d,onClick:a,title:d,children:d},`${r}-${h}`))})]})}function Y(){const e=T(c.exports.useContext(v).getNotes()),n=c.exports.useContext(M).getCategories(),[o,l]=c.exports.useState("all"),i=e.filter(s=>o==="all"||s.categorySelected===o).map(s=>t(F,{id:s.id,title:s.title,text:s.text,categorySelected:s.categorySelected},s.id)),r=i.length;return u("div",{className:"view-notes",children:[u("h3",{children:["Select a category\xA0",t(L,{options:["all",...n],onSelection:s=>{l(s)}})]}),t("h1",{children:r===0?o==="all"?"You don't have any notes!":"You don't have any notes of this category!":r===1?"You have only 1 note!":`You have ${r} notes!`}),r>0&&t("div",{className:"view-notes__container",children:i})]})}function O(e){return u("div",{className:"note-item-edit",children:[t("h2",{title:e.title,children:e.title}),e.categorySelected!==y[0]&&t("label",{children:e.categorySelected}),t("div",{className:"edit-btn",onClick:()=>e.modifyItem(),children:t("button",{children:"edit"})}),t("div",{className:"edit-btn",onClick:()=>e.deleteItem(),children:t("button",{className:"delete",children:"delete"})})]})}function P({note:e,closeEditMode:n}){const[o,l]=c.exports.useState(!1),i=c.exports.useContext(v),r=c.exports.useRef(null),s=c.exports.useRef(null),a=c.exports.useRef(null),d=c.exports.useRef(null);function h(N){N.preventDefault();const g={title:s.current.value,categorySelected:a.current.getSelectValue(),text:d.current.value,id:e.id};(g.title!==e.title||g.categorySelected!==e.categorySelected||g.text!==e.text)&&(i.modifyNote(g),l(!0))}function m(){l(!1)}function S(){s.current.value=e.title,d.current.value=e.text,a.current.setValue(e.categorySelected)}function x(){r.current.classList.add("anim-line-down-modify"),setTimeout(()=>n(),600)}return t("div",{className:"backdrop",onClick:x,children:u("div",{className:"note-modify",ref:r,onClick:N=>N.stopPropagation(),children:[o&&t(w,{hideMessage:m,durationSeconds:2.2,children:"Note changed !"}),t("h2",{children:"Edit note "}),u("form",{onSubmit:h,children:[t(k,{ref:s,text:"Title",customText:"The title must be between 3 and 30 characters !",minLength:3,maxLength:30,value:e.title}),t(p,{labelMessage:"Change the category",ref:a,valueDefault:e.categorySelected}),t(C,{name:"textNote",ref:d,value:e.text}),u("div",{className:"modify-buttons",children:[t("button",{children:"Save"}),t("button",{type:"button",onClick:S,className:"red",title:"Reset to the last saved content",children:"Discard changes"})]})]}),t("button",{className:"close-btn",onClick:x,children:"\xD7"})]})})}function $(e){const n=c.exports.useRef(null),o=c.exports.useContext(v);function l(){n.current.classList.add("anim-line-down-del"),setTimeout(e.closeDeleteForm,350)}function i(){o.deleteNoteById(e.id),n.current.classList.add("anim-line-down-del"),setTimeout(e.closeDeleteForm,350)}return t("div",{className:"backdrop",onClick:l,children:u("div",{className:"delete-form",ref:n,onClick:r=>r.stopPropagation(),children:[t("button",{className:"close-btn",onClick:l,children:"\xD7"}),t("h2",{children:"Do you really want to delete this note ?"}),u("div",{children:[t("button",{className:"del-btn",onClick:i,children:"Yes"}),t("button",{className:"del-btn btn-no",onClick:l,children:"No"})]})]})})}const j=(e,n)=>{switch(n.type){case 0:return;case 1:return n.item&&n.closeEditMode&&t(P,{note:n.item,closeEditMode:n.closeEditMode});case 2:return n.item&&n.closeEditMode&&t($,{closeDeleteForm:n.closeEditMode,id:n.item.id})}};function A(){const[e,n]=c.exports.useReducer(j,void 0),o=T(c.exports.useContext(v).getNotes());function l(a){n({type:1,item:a,closeEditMode:r})}function i(a){n({type:2,item:a,closeEditMode:r})}function r(){n({type:0})}const s=o.map((a,d)=>t(O,{title:a.title,categorySelected:a.categorySelected,text:a.text,modifyItem:()=>{l(a)},deleteItem:()=>{i(a)}},d));return u("div",{className:"edit-note-container",children:[e,t("h2",{children:o.length===0?"You have no notes to edit .":o.length===1?"You have only 1 note .":"You have "+o.length.toString()+" notes that can be modified ."}),o.length>0&&t("div",{className:"notes-container",children:s})]})}const B=[{noteState:f.viewNotes,component:t(Y,{})},{noteState:f.createNote,component:t(E,{})},{noteState:f.editNote,component:t(A,{})}];function U({currentStatus:e}){const n=B.filter(o=>o.noteState===e)[0];return t("section",{className:"note-box",children:n.component})}function G(){const[e,n]=c.exports.useState({navNotesState:f.viewNotes});function o(l){n({navNotesState:l})}return u("section",{className:"note-container",children:[t(I,{initialNavState:e.navNotesState,setNavNotesState:o}),t(U,{currentStatus:e.navNotesState})]})}export{G as default};
