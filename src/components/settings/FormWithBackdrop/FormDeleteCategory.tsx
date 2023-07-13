import DropDownBtn from "../../notes/customedFormElements/DropDownBtn";
import classes from "./FormWithBackdrop.module.css";
import { useRef, useContext, useState, useLayoutEffect } from "react";
import { CategoryContext } from "../../contexts/CategoryContext";
import { IDropDownMethods, categoryValues } from "../../stylingStructures";
import { NotesContext } from "../../contexts/NotesContext";
import TemporalNotification from "../../notifications/TemporalNotification";
import ListCategories from "./ListCategories";

export default function FormDeleteCategory() {
  const categorySelected = useRef<IDropDownMethods>();
  const categoryContext = useContext(CategoryContext);
  const notesContext = useContext(NotesContext);
  const [showNotification, setShowMessage] = useState<
    JSX.Element | undefined
  >();

  useLayoutEffect(() => {
    categorySelected.current!.blockCategories(categoryValues);
  }, []);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const selectedCategory = categorySelected.current!.getSelectValue();
    if (
      categoryValues.indexOf(selectedCategory) === -1 &&
      categoryContext.getCategories().includes(selectedCategory)
    ) {
      categoryContext.deleteCategory(selectedCategory);
      notesContext
        .getNotes()
        .filter((note) => note.categorySelected === selectedCategory)
        .forEach((note) => {
          notesContext.modifyNote({ ...note, ["categorySelected"]: "none" });
        });
      categorySelected.current!.setValue("none");
      categorySelected.current!.updateCategory();
      setShowMessage(
        <TemporalNotification
          hideMessage={() => setShowMessage(undefined)}
          durationSeconds={1.5}
        >
          Category deleted !
        </TemporalNotification>,
      );
    }
  }

  return (
    <>
      {showNotification}
      <div className={classes["form-display-flex"]}>
        <h2>Select a category to be deleted</h2>
        <form onSubmit={submit}>
          <DropDownBtn labelMessage="Select category" ref={categorySelected} />
          <h3>Rules :</h3>
          <ol>
            <li>You cannot delete the "none" or "important" category .</li>
            <li>
              Category "none" will be associated for cards whose category is
              deleted .
            </li>
          </ol>
          <button type="submit" className={classes["btn-red"]}>
            Delete category
          </button>
        </form>
        <ListCategories />
      </div>
    </>
  );
}
