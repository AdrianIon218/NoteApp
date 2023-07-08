import classes from './DeleteForm.module.css'
import {useRef, useContext} from 'react'
import { NotesContext } from '../../contexts/NotesContext'

interface Iprops{
  closeDeleteForm:()=>void,
  id:string
}

export default function DeleteForm(props:Iprops){
  const deleteForm = useRef<HTMLDivElement>(null);
  const notesContext = useContext(NotesContext);

  function closeForm(){
    deleteForm.current!.classList.add(classes['anim-line-down']);
    setTimeout(props.closeDeleteForm,550);
  }

  function deleteItem(){
    notesContext.deleteNoteById(props.id);
    deleteForm.current!.classList.add(classes['anim-line-down']);
    setTimeout(props.closeDeleteForm,550);
  }

  return (<div className={classes['delete-form']} ref={deleteForm}>
  <button className={classes['close-btn']} onClick={closeForm}>&times;</button>
  <h2>Are you sure ?</h2>
  <div>
    <button className={classes.btn} onClick={deleteItem}>Yes</button>
    <button className={`${classes.btn} ${classes['btn-no']}`} onClick={closeForm}>No</button>
  </div>
  </div>);
}