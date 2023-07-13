import NoteNav from "./NoteNav";
import classes from "./Note.module.css";
import { ButtonSelected } from "./NoteNav";
import { useState } from "react";
import NoteContainer from "./NoteContainer";

export default function NoteComp() {
  const [notesCtx, setNotesCtx] = useState({
    navNotesState: ButtonSelected.none,
  });

  function setNavNotesState(newNavNotesState: ButtonSelected) {
    setNotesCtx((prevNotesCtx) => ({
      ...prevNotesCtx,
      ["navNotesState"]: newNavNotesState,
    }));
  }

  return (
    <article className={classes.noteComp}>
      <NoteNav setNavNotesState={setNavNotesState} />
      {notesCtx.navNotesState !== ButtonSelected.none && (
        <NoteContainer currentStatus={notesCtx.navNotesState} />
      )}
    </article>
  );
}
