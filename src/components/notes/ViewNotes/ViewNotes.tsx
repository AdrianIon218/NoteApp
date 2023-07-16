import NoteItem from "./NoteItem";
import useSortNotes from "../../CustomedComponents/useSortNotes";
import { useContext } from "react";
import { NotesContext } from "../../contexts/NotesContext";

export default function ViewNote() {
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
    <div className="viewNote">
      <h2>
        {allNotes.length === 0
          ? "You don't have any notes"
          : allNotes.length === 1
          ? "You have only 1 note"
          : "You have " + allNotes.length.toString() + " notes"}
      </h2>
      {
        allNotes.length > 0 && <div className="viewNote__container">{notesElements}</div>
      }
    </div>
  );
}
