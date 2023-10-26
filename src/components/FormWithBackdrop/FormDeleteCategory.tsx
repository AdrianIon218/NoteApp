import DropDownBtn from "../CustomedComponents/FormElements/DropDownBtn";
import {
  useRef,
  useContext,
  useState,
  useLayoutEffect,
  useEffect,
} from "react";
import { CategoryContext } from "../Contexts/CategoryContext";
import { IDropDownMethods, categoryValues } from "../stylingStructures";
import { NotesContext } from "../Contexts/NotesContext";
import TemporalNotification from "../CustomedComponents/TemporalNotification";
import ListCategories from "./ListCategories";

export default function FormDeleteCategory() {
  const category = useRef<IDropDownMethods>();
  const categoryContext = useContext(CategoryContext);
  const notesContext = useContext(NotesContext);
  const [showNotification, setShowMessage] = useState<
    JSX.Element | undefined
  >();

  useLayoutEffect(() => {
    category.current!.blockCategories(categoryValues);
  }, []);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const selectedCategory = category.current!.getSelectValue();
    if (
      categoryValues.indexOf(selectedCategory) === -1 &&
      categoryContext.getCategories().includes(selectedCategory)
    ) {
      categoryContext.deleteCategory(selectedCategory);
      notesContext
        .getNotes()
        .filter((note) => note.category === selectedCategory)
        .forEach((note) => {
          notesContext.modifyNote({ ...note, ["category"]: "none" });
        });
      category.current!.setValue("none");
      category.current!.updateCategory();
      setShowMessage(
        <TemporalNotification
          hideMessage={() => setShowMessage(undefined)}
          durationSeconds={1.5}
        >
          Category deleted !
        </TemporalNotification>,
      );
    }
  }

  return (
    <>
      {showNotification}
      <div className="div-scroll-Y">
        <div className="form-display-flex">
          <h2 className="txt-center">Select a category to delete</h2>
          <form onSubmit={submit}>
            <DropDownBtn
              labelMessage="Select category"
              ref={category}
              isNeccessary={true}
            />
            <h3 style={{ marginBottom: "5px" }} className="txt-red">
              Rules :
            </h3>
            <ol className="small-margin">
              <li>You cannot delete the "none" or "important" category.</li>
              <li>
                Category "none" will be associated for cards whose category is
                deleted.
              </li>
            </ol>
            <button
              type="submit"
              className="btn-red"
              disabled={categoryValues.includes(
                category.current?.getSelectValue()!,
              )}
            >
              Delete category
            </button>
            <ListCategories />
          </form>
        </div>
      </div>
    </>
  );
}
