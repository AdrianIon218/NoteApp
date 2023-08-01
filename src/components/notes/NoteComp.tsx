import NoteNav from "./NoteNav";
import { ButtonSelected } from "./NoteNav";
import { useState } from "react";
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
    <article className="noteComp">
      <NoteNav
        initialNavState={notesCtx.navNotesState}
        setNavNotesState={setNavNotesState}
      />
      {notesCtx.navNotesState !== ButtonSelected.none && (
        <NoteContainer currentStatus={notesCtx.navNotesState} />
      )}
    </article>
  );
}
