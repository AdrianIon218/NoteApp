import DropDownBtn from "../CustomedComponents/FormElements/DropDownBtn";
import { IDropDownMethods } from "../stylingStructures";
import { useRef, useLayoutEffect, useContext, useState } from "react";
import { categoryValues } from "../stylingStructures";
import InputText from "../CustomedComponents/FormElements/InputText";
import { CategoryContext } from "../Contexts/CategoryContext";
import { NotesContext } from "../Contexts/NotesContext";
import TemporalNotification from "../CustomedComponents/TemporalNotification";

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
      <h2 className="txt-center">Change the name of a category</h2>
      <form onSubmit={submit}>
        <DropDownBtn
          labelMessage="Select category"
          ref={categorySelected}
          isNeccessary={true}
        />
        <h3
          className="txt-red"
          style={{ marginLeft: "0px", marginBottom: "5px" }}
        >
          Rules :
        </h3>
        <ol className="small-margin medium-margin-bot">
          <li>You cannot modify the "none" or "important" category .</li>
          <li>There cannot be two categories with the same name .</li>
        </ol>
        <InputText
          text="Insert a name"
          customText="The category must be between 3 and 30 characters !"
          ref={inputRef}
          minLength={3}
          maxLength={30}
        />
        <button
          type="submit"
          className="btn-green"
          style={{ marginTop: "1rem" }}
        >
          Save
        </button>
      </form>
    </div>
  );
}
