import { useRef, useState } from "react";
import InputText from "../CustomedComponents/FormElements/InputText";
import { useCategory } from "../Contexts/CategoryContext";
import ListCategories from "./ListCategories";
import { useNotification } from "../Contexts/NotificationContext";

export default function FormAddCategory() {
  const categoryContext = useCategory();
  const notificationCtx = useNotification();
  const [newCategoryName, setNewCategoryName] = useState("");
  const inputRef = useRef<HTMLInputElement>();

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (categoryContext.addCategory(newCategoryName)) {
      inputRef.current!.value = "";
      setNewCategoryName("");
      notificationCtx.showNotification("Category added !");
    } else {
      notificationCtx.showNotification("Invalid name !", "warning");
    }
  }

  return (
    <div className="flex-col-ctn setting-form">
      <form onSubmit={submit}>
        <div className="flex-center">
          <h2 className="txt-center">Add a new category</h2>
          <InputText
            text="New category name"
            ref={inputRef}
            minLength={3}
            maxLength={31}
            onChangeHandler={(value: string) => {
              setNewCategoryName(value.trim());
            }}
          />
          <button
            type="submit"
            className="btn btn-green btn-styled"
            disabled={!(newCategoryName.length >= 3)}
          >
            Add new category
          </button>
        </div>
      </form>
      <div className="rules-ctn">
        <h3 className="txt-red">Rules :</h3>
        <ol>
          <li>The new category must be unique.</li>
          <li>The new category must be between 3 and 30 characters.</li>
        </ol>
      </div>
      <ListCategories />
    </div>
  );
}
