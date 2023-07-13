import classes from "./FormWithBackdrop.module.css";
import { useRef, useContext, useState } from "react";
import InputText from "../../notes/customedFormElements/InputText";
import { CategoryContext } from "../../contexts/CategoryContext";
import TemporalNotification from "../../notifications/TemporalNotification";
import ListCategories from "./ListCategories";

export default function FormAddCategory() {
  const inputRef = useRef<HTMLInputElement>();
  const categoryContext = useContext(CategoryContext);
  const [showNotification, setShowMessage] = useState<
    JSX.Element | undefined
  >();

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const inputText = inputRef.current!.value.trim();
    if (inputText.length > 0 && categoryContext.addCategory(inputText)) {
      inputRef.current!.value = "";
      setShowMessage(
        <TemporalNotification
          hideMessage={() => setShowMessage(undefined)}
          durationSeconds={1}
        >
          Category added{" "}
        </TemporalNotification>,
      );
    }
  }

  return (
    <>
      {showNotification}
      <form onSubmit={submit} className={classes["form-display-flex"]}>
        <h2>Add a new category</h2>
        <InputText
          text="Insert a new category"
          customText="The category must be unique, between 3 and 30 characters"
          ref={inputRef}
          minLength={3}
          maxLength={30}
        />
        <ListCategories />
        <button type="submit" className={classes["btn-green"]}>
          Add category
        </button>
      </form>
    </>
  );
}
