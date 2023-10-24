import { useContext } from "react";
import NoteItem from "./NoteItem";
import useSortNotes from "../../CustomedComponents/useSortNotes";
import { NotesContext } from "../../Contexts/NotesContext";
import SelectOption from "../../CustomedComponents/SelectOption";

export default function ViewNotes() {
  const allNotes = useSortNotes(useContext(NotesContext).getNotes());

  const notesElements = allNotes.map((item) => {
    return (
      <NoteItem
        key={item.id}
        id={item.id}
        title={item.title}
        text={item.text}
        categorySelected={item.categorySelected}
      />
    );
  });

  return (
    <div className="view-notes">
      <h3>
        Select a category&nbsp;
        <SelectOption
          options={["all", "tare", "rau"]}
          onSelection={(option:string) => {console.log(option)}}
        />
      </h3>
      <h1>
        {allNotes.length === 0
          ? "You don't have any notes!"
          : allNotes.length === 1
          ? "You have only 1 note!"
          : `You have ${allNotes.length} notes!`}
      </h1>
      {allNotes.length > 0 && (
        <div className="view-notes__container">{notesElements}</div>
      )}
    </div>
  );
}
