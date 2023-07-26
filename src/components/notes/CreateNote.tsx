import classes from "./CreateNote/CreateNote.module.css";
import { useRef, useContext, useState } from "react";
import DropDownBtn from "./customedFormElements/DropDownBtn";
import TextArea from "./customedFormElements/TextArea";
import InputText from "./customedFormElements/InputText";
import { NotesContext } from "../contexts/NotesContext";
import { IDropDownMethods } from "../stylingStructures";
import TemporalNotification from "../notifications/TemporalNotification";
import { nanoid } from "nanoid";

function CreateNote() {
  const [showMessage, setShowMessage] = useState(false);
  const notesCtx = useContext(NotesContext);

  const titleNote = useRef<HTMLInputElement>(null);
  const btnSelectRef = useRef<IDropDownMethods>();
  const textNote = useRef<HTMLTextAreaElement>(null);

  function resetInputs() {
    titleNote.current!.value = "";
    (textNote.current as HTMLTextAreaElement).value = "";
    btnSelectRef.current!.resetSelectValue();
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    if (!showMessage) {
      event.preventDefault();
      const titleNoteVal = titleNote.current!.value;
      const btnSelectedVal = btnSelectRef.current!.getSelectValue();
      const textNoteVal = (textNote.current as HTMLTextAreaElement).value;

      const noteObj = {
        title: titleNoteVal,
        categorySelected: btnSelectedVal,
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
    <div className={classes["create-note-container"]}>
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

        <DropDownBtn labelMessage="Choose a category : " ref={btnSelectRef} />

        <TextArea name="textNote" ref={textNote} />

        <div className="field">
          <button type="submit" className="btn-blue">
            {" "}
            Save{" "}
          </button>
          <button type="button" className="btn-blue" onClick={resetInputs}>
            {" "}
            Discard{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateNote;
