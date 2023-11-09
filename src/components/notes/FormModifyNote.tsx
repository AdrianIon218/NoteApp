import { ISelectOptionMethods, NoteStructure } from "../CommonStructures";
import { useRef, useContext, useState } from "react";
import PanelWithBackdrop from "../CustomedComponents/PanelWithBackdrop";
import SelectOption from "../CustomedComponents/SelectOption";
import InputText from "../CustomedComponents/FormElements/InputText";
import TextArea from "../CustomedComponents/FormElements/TextArea";
import { CategoryContext } from "../Contexts/CategoryContext";
import { useNotes } from "../Contexts/NotesContext";
import { NotificationCtx } from "../Contexts/NotificationContext";

interface IProps {
  note: NoteStructure;
  closeEditMode: () => void;
}

export default function FormModifyNote({ note, closeEditMode }: IProps) {
  const notificationCtx = useContext(NotificationCtx);
  const notesCtx = useNotes();
  const categories = useContext(CategoryContext).getCategories();

  const categoryBtnRef = useRef<ISelectOptionMethods>(null);
  const [categorySelected, setCategory] = useState(note.category);

  const titleNote = useRef<HTMLInputElement>(null);
  const [titleTxt, setTitleTxt] = useState(note.title);

  const textNote = useRef<HTMLTextAreaElement>(null);
  const [currentText, setCurrentText] = useState(note.text);

  const readyToSaveOrDiscard =
    titleTxt !== note.title ||
    categorySelected !== note.category ||
    currentText !== note.text;

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const modifiedNote: NoteStructure = {
      title: titleNote.current!.value,
      category: categorySelected,
      text: textNote.current!.value,
      id: note.id,
    };

    if (
      modifiedNote.title !== note.title ||
      modifiedNote.category !== note.category ||
      modifiedNote.text !== note.text
    ) {
      notesCtx.modifyNote(modifiedNote);
      notificationCtx.showNotification("Note changed !");
    }
  }

  function resetNote() {
    titleNote.current!.value = note.title;
    setTitleTxt(note.title);

    textNote.current!.value = note.text;
    setCurrentText(note.text);

    categoryBtnRef.current?.resetSelectValue();
    setCategory(note.category);
  }

  return (
    <PanelWithBackdrop
      closePanel={closeEditMode}
      plusClass="panel-max-extended"
    >
      <h2>Edit note </h2>
      <form onSubmit={submit}>
        <InputText
          ref={titleNote}
          text="Title"
          customText="The title must be between 3 and 30 characters !"
          minLength={3}
          maxLength={30}
          value={note.title}
          onChangeHandler={setTitleTxt}
        />
        <div className="field">
          Change the category
          <SelectOption
            options={categories}
            defaultOption={note.category}
            onSelection={(str: string) => {
              setCategory(str);
            }}
            ref={categoryBtnRef}
          />
        </div>
        <TextArea
          name="textNote"
          ref={textNote}
          value={note.text}
          onChangeHandler={setCurrentText}
        />
        <div className="field-group-btns">
          <button className="btn-blue" disabled={!readyToSaveOrDiscard}>
            Save
          </button>
          <button
            type="button"
            onClick={resetNote}
            className="btn-blue red"
            title="Reset to the last saved content"
            disabled={!readyToSaveOrDiscard}
          >
            Discard changes
          </button>
        </div>
      </form>
    </PanelWithBackdrop>
  );
}
