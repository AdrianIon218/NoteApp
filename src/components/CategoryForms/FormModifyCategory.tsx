import { useRef, useState } from "react";
import InputText from "../CustomedComponents/FormElements/InputText";
import SelectOption from "../CustomedComponents/SelectOption";
import { useDispatch, useSelector } from "react-redux";
import {
  AppDispatch,
  replaceCategoryInNotes,
  RootState,
} from "../../store/store";
import { NoteCategoryTypes, NoteStructure } from "../../CommonInterfaces";
import toast from "react-hot-toast";

export default function FormModifyCategory() {
  const allNotes = useSelector<RootState>(
    (store) => store.notes.notes
  ) as NoteStructure[];
  const dispatch = useDispatch<AppDispatch>();

  const categoriesToModify = useSelector<RootState>((store) =>
    store.category.categories.filter(
      (category) =>
        category !== NoteCategoryTypes.NONE &&
        category !== NoteCategoryTypes.IMPORTANT
    )
  ) as string[];

  const [categorySelected, setCategorySelected] = useState("");
  const [newCategoryName, setNewCategoryName] = useState("");
  const [isInputValid, setIsValid] = useState(false);

  const categoryBtnRef = useRef<any>(null);
  const inputRef = useRef<HTMLInputElement>();

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    toast.dismiss(); // in case there was another toast displayed before

    if (!categoriesToModify.includes(newCategoryName)) {
      dispatch(replaceCategoryInNotes(categorySelected, newCategoryName));
      inputRef.current!.value = "";
      categoryBtnRef.current!.resetSelectValue();
      setCategorySelected("");
      setNewCategoryName("");
      setIsValid(false);
      toast.success("Category changed !");
    } else {
      toast.error("Invalid name !");
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
            <button type="submit" className="btn btn-green btn-styled">
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
