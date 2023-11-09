import { useRef, useContext, useState } from "react";
import { nanoid } from "nanoid";
import TextArea from "../CustomedComponents/FormElements/TextArea";
import InputText from "../CustomedComponents/FormElements/InputText";
import { useNotes } from "../Contexts/NotesContext";
import { CategoryContext } from "../Contexts/CategoryContext";
import SelectOption from "../CustomedComponents/SelectOption";
import { ISelectOptionMethods } from "../CommonStructures";
import { NotificationCtx } from "../Contexts/NotificationContext";

function CreateNote() {
  const notesCtx = useNotes();
  const notificationCtx = useContext(NotificationCtx);

  const categories = useContext(CategoryContext).getCategories();
  const categoryBtnRef = useRef<ISelectOptionMethods>(null);
  const [categorySelected, setCategory] = useState("none");

  const titleNoteRef = useRef<HTMLInputElement>(null);
  const [titleText, setTitleText] = useState("");

  const textNoteRef = useRef<HTMLTextAreaElement>(null);
  const [textNote, setTextNote] = useState("");

  function resetInputs() {
    setTitleText("");
    titleNoteRef.current!.value = "";
    setTextNote("");
    (textNoteRef.current as HTMLTextAreaElement).value = "";
    setCategory("none");
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

    notificationCtx.showNotification("Note added !");
    notesCtx.addNote(noteObj);
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
            options={categories}
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
              categorySelected === "none" &&
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
