import { useRef, useState } from "react";
import ListCategories from "../CustomedComponents/ListCategories";
import InputText from "../CustomedComponents/FormElements/InputText";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../store/categorySlice";
import { AppDispatch, RootState } from "../../store/store";
import toast from "react-hot-toast";

export default function FormAddCategory() {
  const allCategories = useSelector<RootState>(
    (store) => store.category.categories
  ) as string[];
  const [newCategoryName, setNewCategoryName] = useState("");
  const inputRef = useRef<HTMLInputElement>();
  const dispatch = useDispatch<AppDispatch>();

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    toast.dismiss(); // in case there was another toast displayed before

    if (!allCategories.includes(newCategoryName)) {
      inputRef.current!.value = "";
      setNewCategoryName("");
      dispatch(addCategory(newCategoryName));

      toast.success("Category added !");
    } else {
      toast.error("Invalid name !");
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
