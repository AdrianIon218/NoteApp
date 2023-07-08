import classes from './ViewNotes.module.css'
import { useState } from 'react'
import { NoteStructure, categoryValues } from '../../stylingStructures'
import NoteDisplay from './NoteDisplay'

export default function NoteItem(props:NoteStructure){
  const [isNoteShown, setNoteShown] = useState(false);
  
  function showNote(){
    setNoteShown(true);
  }

  function hideNote(){
    setNoteShown(false);
  }
  
  return (<>
  {isNoteShown && <NoteDisplay note={props} closeNote={hideNote}/>}
  <div className={classes['note-item']} onClick={showNote}>
    <h2 title={props.title}>{props.title}</h2>
    {props.categorySelected !== categoryValues[0] && <label>{props.categorySelected}</label>}
    <div>{props.text.split('\n')[0]}</div>
  </div>
  </>);
}