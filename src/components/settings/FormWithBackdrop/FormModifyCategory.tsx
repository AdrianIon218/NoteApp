import DropDownBtn from "../../notes/customedFormElements/DropDownBtn";
import { IDropDownMethods } from "../../stylingStructures";
import classes from "./FormWithBackdrop.module.css";
import { useRef, useLayoutEffect, useContext, useState } from "react";
import { categoryValues } from "../../stylingStructures";
import InputText from "../../notes/customedFormElements/InputText";
import { CategoryContext } from "../../contexts/CategoryContext";
import { NotesContext } from "../../contexts/NotesContext";
import TemporalNotification from "../../notifications/TemporalNotification";

export default function FormModifyCategory() {
  const categorySelected = useRef<IDropDownMethods>();
  const inputRef = useRef<HTMLInputElement>();
  const categoryCtx = useContext(CategoryContext);
  const notesCtx = useContext(NotesContext);
  const [showNotification, setShowMessage] = useState<
    JSX.Element | undefined
  >();

  useLayoutEffect(() => {
    categorySelected.current!.blockCategories(categoryValues);
  }, []);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const oldCategoryName = categorySelected.current!.getSelectValue();
    const newCategoryName = inputRef.current!.value.trim();
    if (
      oldCategoryName != "none" &&
      categoryCtx.replaceCategory(oldCategoryName, newCategoryName)
    ) {
      notesCtx
        .getNotes()
        .filter((item) => item.categorySelected === oldCategoryName)
        .forEach((item) => {
          notesCtx.modifyNote({
            ...item,
            ["categorySelected"]: newCategoryName,
          });
        });
      categorySelected.current!.setValue("none");
      categorySelected.current!.updateCategory();
      inputRef.current!.value = "";
      setShowMessage(
        <TemporalNotification
          hideMessage={() => setShowMessage(undefined)}
          durationSeconds={1.5}
        >
          Category changed !
        </TemporalNotification>,
      );
    }
  }

  return (
    <div className="form-display-flex">
      {showNotification}
      <h2 className="txt-center">Select a category to modify</h2>
      <form onSubmit={submit}>
        <h3 className="small-margin">Rules :</h3>
        <ol>
          <li>You cannot modify the "none" or "important" category .</li>
          <li>There cannot be two categories with the same name .</li>
        </ol>
        <DropDownBtn labelMessage="Select category" ref={categorySelected} isNeccessary={true}/>
        <InputText
          text="Insert a name"
          customText="The category must be between 3 and 30 characters !"
          ref={inputRef}
          minLength={3}
          maxLength={30}
        />
        <button type="submit" className="btn-green">
          Save
        </button>
      </form>
    </div>
  );
}
