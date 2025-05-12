import { useId, useState } from "react";
import PanelWithBackdrop from "../CustomedComponents/PanelWithBackdrop";
import FormAddCategory from "../CategoryForms/FormAddCategory";
import FormDeleteCategory from "../CategoryForms/FormDeleteCategory";
import FormModifyCategory from "../CategoryForms/FormModifyCategory";
import { GridPanelCustom } from "../CustomedComponents/styledComponentsMUI";
import { Typography } from "@mui/material";

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
      <PanelWithBackdrop closePanel={closeForm}>
        {btn === CategoryBtnState.Add && <FormAddCategory />}
        {btn === CategoryBtnState.Delete && <FormDeleteCategory />}
        {btn === CategoryBtnState.Modify && <FormModifyCategory />}
      </PanelWithBackdrop>
    );
  }

  return (
    <>
      {form}
      <GridPanelCustom>
        <Typography
          variant="h5"
          textAlign="center"
          fontWeight={800}
          mb={3}
          sx={{
            textDecoration: "underline dotted",
            textUnderlinePosition: "under",
            textUnderlineOffset: 2,
          }}
        >
          Categories settings
        </Typography>
        {CategoryBtns.map((item, index) => (
          <button
            className="btn-to-form"
            onClick={() => showCorespondingCategoryPanel(item.categoryState)}
            key={`${btnRootKey}-${index}`}
          >
            {item.btnText}
          </button>
        ))}
      </GridPanelCustom>
    </>
  );
}
