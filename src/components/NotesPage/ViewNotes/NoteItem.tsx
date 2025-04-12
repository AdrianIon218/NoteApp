import { useState } from "react";
import { NoteCategoryTypes, NoteStructure } from "../../../CommonInterfaces";
import NoteDisplay from "./NoteDisplay";

export default function NoteItem(props: NoteStructure) {
  const [isNoteShown, setNoteShown] = useState(false);

  function showNote() {
    setNoteShown(true);
  }

  function hideNote() {
    setNoteShown(false);
  }

  return (
    <>
      {isNoteShown && <NoteDisplay note={props} closeNote={hideNote} />}
      <div className="note-item" onClick={showNote}>
        <h2 title={props.title}>{props.title}</h2>
        {props.category !== NoteCategoryTypes.NONE &&
          props.category.length > 0 && <label>{props.category}</label>}
        <div>{props.text.split("\n")[0]}</div>
      </div>
    </>
  );
}
