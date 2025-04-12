import { useRef, useState } from "react";
import { nanoid } from "nanoid";
import TextArea from "../CustomedComponents/FormElements/TextArea";
import InputText from "../CustomedComponents/FormElements/InputText";
import SelectOption from "../CustomedComponents/SelectOption";
import {
  ISelectOptionMethods,
  NoteCategoryTypes,
} from "../../CommonInterfaces";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../store/notesSlice";
import { RootState } from "../../store/store";
import toast from "react-hot-toast";

function CreateNote() {
  const dispatch = useDispatch();

  const allCategories = useSelector<RootState>(
    (store) => store.category.categories
  ) as string[];
  const categoryBtnRef = useRef<ISelectOptionMethods>(null);
  const [categorySelected, setCategory] = useState<NoteCategoryTypes | string>(
    NoteCategoryTypes.NONE
  );

  const titleNoteRef = useRef<HTMLInputElement>(null);
  const [titleText, setTitleText] = useState("");

  const textNoteRef = useRef<HTMLTextAreaElement>(null);
  const [textNote, setTextNote] = useState("");

  function resetInputs() {
    setTitleText("");
    titleNoteRef.current!.value = "";
    setTextNote("");
    (textNoteRef.current as HTMLTextAreaElement).value = "";
    setCategory(NoteCategoryTypes.NONE);
    categoryBtnRef.current?.resetSelectValue();
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const noteObj = {
      title: titleText,
      category: categorySelected,
      text: textNote,
      id: nanoid(),
    };

    toast.dismiss(); // in case there was another toast displayed before
    toast.success("Note added !");
    dispatch(addNote(noteObj));
    resetInputs();
  }

  return (
    <div className="create-note-container">
      <h1>Create a note</h1>
      <form onSubmit={submit}>
        <InputText
          ref={titleNoteRef}
          text="Title"
          customText="Insert a title between 3 and 30 characters"
          minLength={3}
          maxLength={30}
          onChangeHandler={setTitleText}
        />
        <div className="field">
          Choose a category{" "}
          <SelectOption
            options={allCategories}
            onSelection={(str: string) => {
              setCategory(str);
            }}
            ref={categoryBtnRef}
          />
        </div>
        <TextArea
          name="textNote"
          ref={textNoteRef}
          onChangeHandler={setTextNote}
        />
        <div className="field-group-btns">
          <button
            type="submit"
            className="btn-blue"
            disabled={titleText.length < 3}
          >
            Save
          </button>
          <button
            type="button"
            className="btn-blue red"
            onClick={resetInputs}
            disabled={
              titleText.length === 0 &&
              categorySelected === NoteCategoryTypes.NONE &&
              textNote === ""
            }
          >
            Discard
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateNote;
