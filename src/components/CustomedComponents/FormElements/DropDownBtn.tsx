import { CategoryContext } from "../../Contexts/CategoryContext";
import {
  useMemo,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  useId,
  useContext,
} from "react";
import { categoryValues } from "../../CommonStructures";

interface IProps {
  labelMessage: string;
  valueDefault?: string;
  isNeccessary?: boolean;
}

function DropDownBtn(
  { labelMessage, valueDefault, isNeccessary }: IProps,
  ref: any,
) {
  const categories = useContext(CategoryContext);
  const [updateCat, setUpdateCat] = useState(true);
  const [blockedCategories, setBlockedCategories] = useState<string[]>([]);

  const listCategoriesBtn = useRef<HTMLButtonElement>(null);
  const [showDropDown, setShowDropDown] = useState("no-display");
  const toggleCategories = () => {
    switch (showDropDown) {
      case "no-display":
        setShowDropDown("animation-go-down");
        break;
      case "animation-go-down":
        setShowDropDown("animation-go-up");
        break;
      case "animation-go-up":
        setShowDropDown("animation-go-down");
        break;
    }
  };

  const selectCategoryValue = (value: string) => {
    listCategoriesBtn.current!.innerText = value;
    listCategoriesBtn.current!.name = value;
  };

  let categoriesElements = useMemo(() => {
    return (
      <>
        {categories.getCategories().map((item, index) => {
          const isCurrCatBlocked = blockedCategories.includes(item.trim());
          return (
            <button
              type="button"
              key={index}
              className={isCurrCatBlocked ? "btn-blocked" : undefined}
              onClick={
                isCurrCatBlocked ? undefined : () => selectCategoryValue(item)
              }
            >
              {" "}
              {item}{" "}
            </button>
          );
        })}
      </>
    );
  }, [updateCat, blockedCategories]);

  useImperativeHandle(
    ref,
    () => ({
      getSelectValue() {
        return (listCategoriesBtn.current as HTMLButtonElement).name;
      },
      resetSelectValue() {
        selectCategoryValue("");
      },
      setValue(value: string) {
        if (categories.getCategories().indexOf(value) !== -1) {
          selectCategoryValue(value === "none" ? "" : value);
        }
      },
      updateCategory() {
        setUpdateCat((oldState) => !oldState);
      },
      blockCategories(arr: string[]) {
        setBlockedCategories([...arr]);
      },
    }),
    [],
  );

  const noFocus = () => {
    if (showDropDown === "animation-go-down") {
      setShowDropDown("animation-go-up");
    }
  };

  const btnId = useId();

  return (
    <div className="field">
      <label htmlFor={btnId} className="label-dropdown">
        {labelMessage}
        {isNeccessary ? <span style={{ color: "red" }}>*</span> : ""}
      </label>
      <div className="btnWithDropDown" onBlur={() => noFocus()}>
        <button
          type="button"
          id={btnId}
          ref={listCategoriesBtn}
          name={valueDefault || categoryValues[0]}
          className={`btn-category ${
            showDropDown === "animation-go-down" ? "btn-category-active" : ""
          }`}
          onClick={toggleCategories}
        >
          {valueDefault}
        </button>
        <div className={`dropdown ${showDropDown}`}>{categoriesElements}</div>
      </div>
    </div>
  );
}

export default forwardRef(DropDownBtn);
