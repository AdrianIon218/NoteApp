import { useState } from "react";
import NoteNav, { ButtonSelected } from "./NoteNav";
import NoteContainer from "./NoteContainer";

export default function NoteComp() {
  const [notesCtx, setNotesCtx] = useState({
    navNotesState: ButtonSelected.viewNotes,
  });

  function setNavNotesState(newNavNotesState: ButtonSelected) {
    setNotesCtx((prevNotesCtx) => ({
      ...prevNotesCtx,
      ["navNotesState"]: newNavNotesState,
    }));
  }

  return (
    <section className="note-container">
      <NoteNav
        initialNavState={notesCtx.navNotesState}
        setNavNotesState={setNavNotesState}
      />
      {notesCtx.navNotesState !== ButtonSelected.none && (
        <NoteContainer currentStatus={notesCtx.navNotesState} />
      )}
    </section>
  );
}
