import { useRef, useContext, useState } from "react";
import InputText from "../CustomedComponents/FormElements/InputText";
import { CategoryContext } from "../Contexts/CategoryContext";
import TemporalNotification from "../CustomedComponents/TemporalNotification";
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
      <form onSubmit={submit} className="form-display-flex">
        <h2 className="txt-center" style={{margin:"5px"}}>Add a new category</h2>
        <InputText
          text="New category name"
          customText="The category must be unique and between 3 and 30 characters !"
          ref={inputRef}
          minLength={3}
          maxLength={30}
        />
        <ListCategories />
        <button type="submit" className="btn-green">
          Save
        </button>
      </form>
    </>
  );
}
