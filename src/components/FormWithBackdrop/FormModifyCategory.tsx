import DropDownBtn from "../CustomedComponents/FormElements/DropDownBtn";
import { IDropDownMethods } from "../CommonStructures";
import { useRef, useLayoutEffect, useContext, useState } from "react";
import { categoryValues } from "../CommonStructures";
import InputText from "../CustomedComponents/FormElements/InputText";
import { CategoryContext } from "../Contexts/CategoryContext";
import { NotesContext } from "../Contexts/NotesContext";
import TemporalNotification from "../CustomedComponents/TemporalNotification";

export default function FormModifyCategory() {
  const category = useRef<IDropDownMethods>();
  const inputRef = useRef<HTMLInputElement>();
  const categoryCtx = useContext(CategoryContext);
  const notesCtx = useContext(NotesContext);
  const [showNotification, setShowMessage] = useState<
    JSX.Element | undefined
  >();
  const [isInputValid, setInputValid] = useState(false);

  useLayoutEffect(() => {
    category.current!.blockCategories(categoryValues);
  }, []);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const oldCategoryName = category.current!.getSelectValue();
    const newCategoryName = inputRef.current!.value.trim();
    if (
      oldCategoryName != "none" &&
      categoryCtx.replaceCategory(oldCategoryName, newCategoryName)
    ) {
      notesCtx
        .getNotes()
        .filter((item) => item.category === oldCategoryName)
        .forEach((item) => {
          notesCtx.modifyNote({
            ...item,
            ["category"]: newCategoryName,
          });
        });
      category.current!.setValue("none");
      category.current!.updateCategory();
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
    <div className="flex-col-ctn">
      {showNotification}
      <h2 className="txt-center">Change the name of a category</h2>
      <form onSubmit={submit}>
        <DropDownBtn
          labelMessage="Select category"
          ref={category}
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
          maxLength={31}
          onChangeHandler={(value: string) => {
            setInputValid(value.length >= 3);
          }}
        />
        <button
          type="submit"
          className="btn-green"
          disabled={!isInputValid}
          style={{ marginTop: "1rem" }}
        >
          Save
        </button>
      </form>
    </div>
  );
}
