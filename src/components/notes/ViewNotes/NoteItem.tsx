import { useState } from "react";
import { NoteStructure } from "../../stylingStructures";
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
        {props.category !== "none" && props.category !== "" && (
          <label>{props.category}</label>
        )}
        <div>{props.text.split("\n")[0]}</div>
      </div>
    </>
  );
}
