import { useContext, useState } from "react";
import NoteItem from "./NoteItem";
import useSortNotes from "../../CustomedComponents/useSortNotes";
import { NotesContext } from "../../Contexts/NotesContext";
import { CategoryContext } from "../../Contexts/CategoryContext";
import SelectOption from "../../CustomedComponents/SelectOption";

export default function ViewNotes() {
  const allNotes = useSortNotes(useContext(NotesContext).getNotes());
  const categories = useContext(CategoryContext).getCategories();
  const [searchCategory, setSearchCategory] = useState("all");

  const noteElements = allNotes
    .filter((item) => {
      return searchCategory === "all" || item.category === searchCategory;
    })
    .map((item) => {
      return (
        <NoteItem
          key={item.id}
          id={item.id}
          title={item.title}
          text={item.text}
          category={item.category}
        />
      );
    });
  const numOfNotesToDisplay = noteElements.length;

  return (
    <div className="view-notes">
      <h3>
        <span>Select a category&nbsp;</span>
        <SelectOption
          options={["all", ...categories]}
          onSelection={(option: string) => {
            setSearchCategory(option);
          }}
        />
      </h3>
      <h1>
        {numOfNotesToDisplay === 0
          ? searchCategory === "all"
            ? "You don't have any notes!"
            : "You don't have any notes of this category!"
          : numOfNotesToDisplay === 1
          ? "You have only 1 note!"
          : `You have ${numOfNotesToDisplay} notes!`}
      </h1>
      {numOfNotesToDisplay > 0 && (
        <div className="view-notes__container">{noteElements}</div>
      )}
    </div>
  );
}
