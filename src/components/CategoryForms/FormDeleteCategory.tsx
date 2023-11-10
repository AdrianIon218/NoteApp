import { useRef, useState } from "react";
import { useCategory } from "../Contexts/CategoryContext";
import { useNotes } from "../Contexts/NotesContext";
import { useNotification } from "../Contexts/NotificationContext";
import SelectOption from "../CustomedComponents/SelectOption";

const initialSelectCategoryText = "choose";

export default function FormDeleteCategory() {
  const categoryContext = useCategory();
  const categoriesToModify = categoryContext
    .getCategories()
    .filter((category) => category !== "none" && category !== "important");
  const notificationCtx = useNotification();
  const notesContext = useNotes();
  const [categorySelected, setCategorySelected] = useState("");
  const selectRef = useRef<any>(null);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    notesContext
      .getNotes()
      .filter((note) => note.category === categorySelected)
      .forEach((note) => {
        notesContext.modifyNote({ ...note, ["category"]: "none" });
      });
    categoryContext.deleteCategory(categorySelected);
    notificationCtx.showNotification("Category deleted !", "warning");
    setCategorySelected("");
    selectRef.current?.resetSelectValue();
  }

  return (
    <div className="flex-col-ctn setting-form">
      {categoriesToModify.length !== 0 ? (
        <form onSubmit={submit}>
          <div className="flex-center">
            <h2 className="txt-center">Select a category to delete</h2>
            <SelectOption
              options={categoriesToModify}
              onSelection={setCategorySelected}
              defaultOption={initialSelectCategoryText}
              ref={selectRef}
            />
            <button
              type="submit"
              className="btn btn-red"
              disabled={categorySelected === ""}
            >
              Delete category
            </button>
          </div>
        </form>
      ) : (
        <h2 className="txt-center">You don't have any category to delete!</h2>
      )}
      <div className="rules-ctn">
        <h3 className="txt-red">Rules :</h3>
        <ol>
          <li>You cannot delete the "none" or "important" category.</li>
          <li>
            Category "none" will be associated for cards whose category is
            deleted.
          </li>
        </ol>
      </div>
    </div>
  );
}
