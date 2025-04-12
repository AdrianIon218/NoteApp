import { useRef, useState } from "react";
import SelectOption from "../CustomedComponents/SelectOption";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory } from "../../store/categorySlice";
import { NoteCategoryTypes } from "../../CommonInterfaces";
import { replaceAllNotesCategory } from "../../store/notesSlice";
import { RootState } from "../../store/store";
import toast from "react-hot-toast";

const initialSelectCategoryText = "choose";

export default function FormDeleteCategory() {
  const categoriesToModify = useSelector<RootState>((store) =>
    store.category.categories.filter(
      (category) =>
        category !== NoteCategoryTypes.NONE &&
        category !== NoteCategoryTypes.IMPORTANT
    )
  ) as string[];
  const [categorySelected, setCategorySelected] = useState("");
  const selectRef = useRef<any>(null);
  const dispatch = useDispatch();

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(deleteCategory(categorySelected));
    dispatch(replaceAllNotesCategory(categorySelected, NoteCategoryTypes.NONE));
    toast.dismiss(); // in case there was another toast displayed before
    toast.success("Category deleted !");
    setCategorySelected("");
    selectRef.current?.resetSelectValue();
  }

  return (
    <div className="flex-col-ctn setting-form">
      {categoriesToModify.length !== 0 ? (
        <form onSubmit={submit}>
          <div className="flex-center">
            <h2 className="txt-center">Select a category to delete</h2>
            <SelectOption
              options={categoriesToModify}
              onSelection={setCategorySelected}
              defaultOption={initialSelectCategoryText}
              ref={selectRef}
            />
            <button
              type="submit"
              className="btn btn-red"
              disabled={categorySelected === ""}
            >
              Delete category
            </button>
          </div>
        </form>
      ) : (
        <h2 className="txt-center">You don't have any category to delete!</h2>
      )}
      <div className="rules-ctn">
        <h3 className="txt-red">Rules :</h3>
        <ol>
          <li>You cannot delete the "none" or "important" category.</li>
          <li>
            Category "none" will be associated for cards whose category is
            deleted.
          </li>
        </ol>
      </div>
    </div>
  );
}
