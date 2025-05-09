import { createContext } from "react";
import useLocalStorage from "../CustomedComponents/useLocalStorage";
import { ICategoryContext, NoteCategoryTypes } from "../../CommonInterfaces";

export const CategoryContext = createContext<ICategoryContext>({
  getCategories: () => [],
  addCategory: () => false,
  deleteCategory: () => false,
  replaceCategory: () => false,
});

interface IProps {
  children: React.ReactNode;
}

export default function CategoryProvider(props: IProps) {
  const categories = useLocalStorage(
    "categories",
    Object.values(NoteCategoryTypes)
  ) as {
    value: string[];
    setValue: (categories: string[]) => void;
  };

  function addNewCategory(newcategory: string) {
    if (categories.value.indexOf(newcategory) !== -1) {
      return false;
    }
    categories.setValue([...categories.value, newcategory]);
    return true;
  }

  function deleteCategory(categoryName: string) {
    const index = categories.value.indexOf(categoryName);
    if (index !== -1) {
      categories.value = categories.value.filter(
        (item, indexToDeleted) => indexToDeleted !== index
      );
      categories.setValue([...categories.value]);
      return true;
    }
    return false;
  }

  function replaceCategory(categoryName: string, newCategoryName: string) {
    const index = categories.value.indexOf(categoryName);
    const isNewCategoryInList = categories.value.indexOf(newCategoryName);
    if (
      index === -1 ||
      categoryName === newCategoryName ||
      isNewCategoryInList !== -1
    ) {
      return false;
    }
    categories.value = categories.value.map((item) => {
      return item !== categoryName ? item : newCategoryName;
    });
    categories.setValue([...categories.value]);
    return true;
  }

  const currentContext: ICategoryContext = {
    getCategories: () => categories.value,
    addCategory: addNewCategory,
    deleteCategory: deleteCategory,
    replaceCategory: replaceCategory,
  };

  return (
    <CategoryContext.Provider value={currentContext}>
      {props.children}
    </CategoryContext.Provider>
  );
}
