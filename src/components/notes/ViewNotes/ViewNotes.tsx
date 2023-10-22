import NoteItem from "./NoteItem";
import useSortNotes from "../../CustomedComponents/useSortNotes";
import { useContext } from "react";
import { NotesContext } from "../../Contexts/NotesContext";

export default function ViewNotes() {
  const allNotes = useSortNotes(useContext(NotesContext).getNotes());

  const notesElements = allNotes.map((item, index) => {
    return (
      <NoteItem
        key={index}
        title={item.title}
        text={item.text}
        categorySelected={item.categorySelected}
        id={item.id}
      />
    );
  });

  return (
    <div className="view-notes">
      <h1>
        {allNotes.length === 0
          ? "You don't have any notes"
          : allNotes.length === 1
          ? "You have only 1 note"
          : `You have ${allNotes.length} notes`}
      </h1>
      {allNotes.length > 0 && (
        <div className="view-notes__container">{notesElements}</div>
      )}
    </div>
  );
}
