import { useState } from "react";
import NoteNav, { ButtonSelected } from "./NoteNav";
import NoteBox from "./NoteBox";

export default function NoteComp() {
  const [notesCtx, setNotesCtx] = useState({
    navNotesState: ButtonSelected.viewNotes,
  });

  function setNavNotesState(newNavNotesState: ButtonSelected) {
    setNotesCtx({
      navNotesState: newNavNotesState,
    });
  }

  return (
    <section className="note-container">
      <NoteNav
        initialNavState={notesCtx.navNotesState}
        setNavNotesState={setNavNotesState}
      />
      <NoteBox currentStatus={notesCtx.navNotesState} />
    </section>
  );
}
