import classes from "./FormModifyNote.module.css";
import { NoteStructure, IDropDownMethods } from "../../stylingStructures";
import { useRef, useContext, useState } from "react";
import InputText from "../customedFormElements/InputText";
import DropDownBtn from "../customedFormElements/DropDownBtn";
import TextArea from "../customedFormElements/TextArea";
import { NotesContext } from "../../contexts/NotesContext";
import TemporalNotification from "../../notifications/TemporalNotification";

interface IProps {
  note: NoteStructure;
  closeEditMode?: () => void;
}

export default function FormModifyNote({ note, closeEditMode }: IProps) {
  const [showMessage, setShowMessage] = useState(false);
  const notesCtx = useContext(NotesContext);
  const panel = useRef<HTMLDivElement>(null);
  const titleNote = useRef<HTMLInputElement>(null);
  const btnSelectRef = useRef<IDropDownMethods>(null);
  const textNote = useRef<HTMLTextAreaElement>(null);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const modifiedNote: NoteStructure = {
      title: titleNote.current!.value,
      categorySelected: btnSelectRef.current!.getSelectValue(),
      text: textNote.current!.value,
      id: note.id,
    };

    if (
      modifiedNote.title !== note.title ||
      modifiedNote.categorySelected !== note.categorySelected ||
      modifiedNote.text !== note.text
    ) {
      notesCtx.modifyNote(modifiedNote);
      setShowMessage(true);
    }
  }

  function hideMessage() {
    setShowMessage(false);
  }

  function resetNote() {
    titleNote.current!.value = note.title;
    textNote.current!.value = note.text;
    btnSelectRef.current!.setValue(note.categorySelected);
  }

  function closePanel() {
    panel.current!.classList.add(classes["anim-line-down"]);
    setTimeout(() => closeEditMode!(), 600);
  }

  return (
    <div className={classes["form-centered"]} ref={panel}>
      {showMessage && (
        <TemporalNotification hideMessage={hideMessage} durationSeconds={2.2}>
          Note changed !
        </TemporalNotification>
      )}
      <h2>Edit note </h2>
      <form onSubmit={submit}>
        <InputText
          ref={titleNote}
          text="Title"
          customText="The title must be between 3 and 30 characters"
          minLength={3}
          maxLength={30}
          value={note.title}
        />
        <DropDownBtn
          labelMessage="Choose a category : "
          ref={btnSelectRef}
          valueDefault={note.categorySelected}
        />
        <TextArea name="textNote" ref={textNote} value={note.text} />
        <div className={classes["buttons"]}>
          <button>Save</button>
          <button
            type="button"
            onClick={resetNote}
            title="Reset to the last saved content"
          >
            Discard changes
          </button>
        </div>
      </form>
      <button className={classes["close-btn"]} onClick={closePanel}>
        &times;
      </button>
    </div>
  );
}
