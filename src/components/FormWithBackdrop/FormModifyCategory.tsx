import { useRef, useState } from "react";
import InputText from "../CustomedComponents/FormElements/InputText";
import { useCategory } from "../Contexts/CategoryContext";
import { useNotes } from "../Contexts/NotesContext";
import { useNotification } from "../Contexts/NotificationContext";
import SelectOption from "../CustomedComponents/SelectOption";

export default function FormModifyCategory() {
  const notesCtx = useNotes();
  const categoryCtx = useCategory();
  const notificationCtx = useNotification();

  const categoriesToModify = categoryCtx
    .getCategories()
    .filter((category) => category !== "none" && category !== "important");

  const [categorySelected, setCategorySelected] = useState("");
  const [newCategoryName, setNewCategoryName] = useState("");
  const [isInputValid, setIsValid] = useState(false);

  const categoryBtnRef = useRef<any>(null);
  const inputRef = useRef<HTMLInputElement>();

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (categoryCtx.replaceCategory(categorySelected, newCategoryName)) {
      notesCtx
        .getNotes()
        .filter((item) => item.category === categorySelected)
        .forEach((item) => {
          notesCtx.modifyNote({
            ...item,
            ["category"]: newCategoryName,
          });
        });

      inputRef.current!.value = "";
      categoryBtnRef.current!.resetSelectValue();
      setCategorySelected("");
      setNewCategoryName("");
      setIsValid(false);
      notificationCtx.showNotification("Category changed !");
    } else {
      notificationCtx.showNotification("Invalid name !", "warning");
    }
  }

  return (
    <div className="flex-col-ctn setting-form">
      {categoriesToModify.length === 0 ? (
        <h2 className="txt-center">You don't have any category to modify!</h2>
      ) : (
        <form onSubmit={submit}>
          <div className="flex-center">
            <h2 className="txt-center">Modify a category</h2>
            <div className="field" style={{ fontWeight: 900 }}>
              Choose a category
              <SelectOption
                options={categoriesToModify}
                onSelection={(str: string) => {
                  setCategorySelected(str);
                  setIsValid(newCategoryName.length >= 3);
                }}
                defaultOption={"select"}
                ref={categoryBtnRef}
              />
            </div>

            <InputText
              text="Rename to"
              customText="The category must be between 3 and 30 characters!"
              ref={inputRef}
              minLength={3}
              maxLength={31}
              required={false}
              onChangeHandler={(str: string) => {
                const name = str.trim();
                setNewCategoryName(name);
                setIsValid(name.length >= 3 && categorySelected !== "");
              }}
            />
            <button
              type="submit"
              className="btn btn-green btn-styled"
              disabled={!isInputValid}
            >
              Save
            </button>
          </div>
        </form>
      )}
      <div className="rules-ctn">
        <h3 className="txt-red">Rules :</h3>
        <ol>
          <li>You cannot modify the "none" or "important" category.</li>
          <li>There cannot be two categories with the same name.</li>
        </ol>
      </div>
    </div>
  );
}
