import { NoteStructure, IDropDownMethods } from "../stylingStructures";
import { useRef, useContext, useState } from "react";
import InputText from "../CustomedComponents/FormElements/InputText";
import DropDownBtn from "../CustomedComponents/FormElements/DropDownBtn";
import TextArea from "../CustomedComponents/FormElements/TextArea";
import { NotesContext } from "../Contexts/NotesContext";
import TemporalNotification from "../CustomedComponents/TemporalNotification";

import PanelWithBackdrop from "../CustomedComponents/PanelWithBackdrop";

interface IProps {
  note: NoteStructure;
  closeEditMode: () => void;
}

export default function FormModifyNote({ note, closeEditMode }: IProps) {
  const [showMessage, setShowMessage] = useState(false);
  const notesCtx = useContext(NotesContext);
  const titleNote = useRef<HTMLInputElement>(null);
  const btnSelectRef = useRef<IDropDownMethods>(null);
  const textNote = useRef<HTMLTextAreaElement>(null);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const modifiedNote: NoteStructure = {
      title: titleNote.current!.value,
      category: btnSelectRef.current!.getSelectValue(),
      text: textNote.current!.value,
      id: note.id,
    };

    if (
      modifiedNote.title !== note.title ||
      modifiedNote.category !== note.category ||
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
    btnSelectRef.current!.setValue(note.category);
  }

  return (
    <PanelWithBackdrop
      closePanel={closeEditMode}
      plusClass="panel-max-extended"
    >
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
          customText="The title must be between 3 and 30 characters !"
          minLength={3}
          maxLength={30}
          value={note.title}
        />
        <DropDownBtn
          labelMessage="Change the category"
          ref={btnSelectRef}
          valueDefault={note.category}
        />
        <TextArea name="textNote" ref={textNote} value={note.text} />
        <div className="modify-buttons">
          <button>Save</button>
          <button
            type="button"
            onClick={resetNote}
            className="red"
            title="Reset to the last saved content"
          >
            Discard changes
          </button>
        </div>
      </form>
    </PanelWithBackdrop>
  );
}
