import { useRef, useContext, useState } from "react";
import TextArea from "../CustomedComponents/FormElements/TextArea";
import InputText from "../CustomedComponents/FormElements/InputText";
import { NotesContext } from "../Contexts/NotesContext";
import { CategoryContext } from "../Contexts/CategoryContext";
import TemporalNotification from "../CustomedComponents/TemporalNotification";
import { nanoid } from "nanoid";
import SelectOption from "../CustomedComponents/SelectOption";
import { ISelectOptionMethods } from "../stylingStructures";

function CreateNote() {
  const [showMessage, setShowMessage] = useState(false);
  const notesCtx = useContext(NotesContext);
  const categories = useContext(CategoryContext).getCategories();

  const titleNote = useRef<HTMLInputElement>(null);
  const [categorySelected, setCategory] = useState("none");
  const textNote = useRef<HTMLTextAreaElement>(null);
  const categoryBtnRef = useRef<ISelectOptionMethods>(null);

  function resetInputs() {
    titleNote.current!.value = "";
    (textNote.current as HTMLTextAreaElement).value = "";
    setCategory("none");
    categoryBtnRef.current?.resetSelectValue();
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    if (!showMessage) {
      event.preventDefault();
      const titleNoteVal = titleNote.current!.value;
      const textNoteVal = (textNote.current as HTMLTextAreaElement).value;

      const noteObj = {
        title: titleNoteVal,
        category: categorySelected,
        text: textNoteVal,
        id: nanoid(),
      };

      notesCtx.addNote(noteObj);
      resetInputs();
      setShowMessage(true);
    }
  }

  function hideMessage() {
    setShowMessage(false);
  }

  return (
    <div className="create-note-container">
      {showMessage && (
        <TemporalNotification hideMessage={hideMessage}>
          Note added !
        </TemporalNotification>
      )}
      <h1>Create a note </h1>
      <form onSubmit={submit}>
        <InputText
          ref={titleNote}
          text="Title"
          customText="Insert a title between 3 and 30 characters"
          minLength={3}
          maxLength={30}
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

        <TextArea name="textNote" ref={textNote} />

        <div className="field-group-btns">
          <button type="submit" className="btn-blue">
            {" "}
            Save{" "}
          </button>
          <button type="button" className="btn-blue red" onClick={resetInputs}>
            {" "}
            Discard{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateNote;
