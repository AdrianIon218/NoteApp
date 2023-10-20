import { useId, useState } from "react";
import FormWithBackdrop from "../FormWithBackdrop/FormWithBackdrop";
import FormAddCategory from "../FormWithBackdrop/FormAddCategory";
import FormDeleteCategory from "../FormWithBackdrop/FormDeleteCategory";
import FormModifyCategory from "../FormWithBackdrop/FormModifyCategory";

enum CategoryBtnState {
  Add,
  Delete,
  Modify,
}

const CategoryBtns = [
  {
    btnText: "Add a new category",
    categoryState: CategoryBtnState.Add,
  },
  {
    btnText: "Delete a category",
    categoryState: CategoryBtnState.Delete,
  },
  {
    btnText: "Modify a category",
    categoryState: CategoryBtnState.Modify,
  },
];

export default function Settings() {
  const [form, setFormShown] = useState<undefined | JSX.Element>();
  const btnRootKey = useId();
  const closeForm = () => setFormShown(undefined);

  function showCorespondingCategoryPanel(btn: CategoryBtnState) {
    setFormShown(
      <FormWithBackdrop closePanel={closeForm}>
        {btn === CategoryBtnState.Add && <FormAddCategory />}
        {btn === CategoryBtnState.Delete && <FormDeleteCategory />}
        {btn === CategoryBtnState.Modify && <FormModifyCategory />}
      </FormWithBackdrop>,
    );
  }

  return (
    <>
      {form}
      <div className="settings-panel">
        <div className="forms-panel">
          <h2>Categories settings</h2>
          {CategoryBtns.map((item, index) => (
            <button
              className="btn-to-form"
              onClick={() => showCorespondingCategoryPanel(item.categoryState)}
              key={`${btnRootKey}-${index}`}
            >
              {item.btnText}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
