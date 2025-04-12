import { useState } from "react";
import NoteItem from "./NoteItem";
import sortNotes from "../../CustomedComponents/sortNotes";
import SelectOption from "../../CustomedComponents/SelectOption";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { NoteStructure } from "../../../CommonInterfaces";

export default function ViewNotes() {
  const allNotes = useSelector<RootState>((store) =>
    sortNotes(store.notes.notes)
  ) as NoteStructure[];
  const allCategories = useSelector<RootState>(
    (store) => store.category.categories
  ) as string[];
  const [searchCategory, setSearchCategory] = useState("all");

  const noteElements = allNotes
    .filter((item) => {
      return searchCategory === "all" || item.category === searchCategory;
    })
    .map((item) => {
      return <NoteItem {...item} key={item.id} />;
    });

  const numOfNotesToDisplay = noteElements.length;

  return (
    <div className="view-notes">
      {allNotes.length > 0 && (
        <h3>
          <span>Select a category&nbsp;</span>
          <SelectOption
            options={["all", ...allCategories]}
            onSelection={(option: string) => {
              setSearchCategory(option);
            }}
          />
        </h3>
      )}
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
