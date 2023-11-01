import { useContext, useReducer, useState } from "react";
import { NotesContext } from "../../Contexts/NotesContext";
import NoteEditCard from "./NoteEditCard";
import useSortNotes from "../../CustomedComponents/useSortNotes";
import { NoteStructure } from "../../stylingStructures";
import FormModifyNote from "../FormModifyNote";
import DeleteForm from "../DeleteForm/DeleteForm";
import InputText from "../../CustomedComponents/FormElements/InputText";

const enum StateHiddenPanel {
  hidden,
  modify,
  delete,
}

interface IAction {
  type: StateHiddenPanel;
  item?: NoteStructure;
  closeEditMode?: () => void;
}

const reducer = (state: JSX.Element | undefined, action: IAction) => {
  switch (action.type) {
    case StateHiddenPanel.hidden:
      return;
    case StateHiddenPanel.modify:
      return (
        action.item &&
        action.closeEditMode && (
          <FormModifyNote
            note={action.item}
            closeEditMode={action.closeEditMode}
          />
        )
      );

    case StateHiddenPanel.delete:
      return (
        action.item &&
        action.closeEditMode && (
          <DeleteForm
            closeDeleteForm={action.closeEditMode}
            id={action.item.id}
          />
        )
      );
  }
};

export default function EditNote() {
  const [panelContent, dispatch] = useReducer(reducer, undefined);
  const allNotes = useSortNotes(useContext(NotesContext).getNotes());
  const numOfNotes = allNotes.length;
  const [searchedNoteTitle, setSearchNotetitle] = useState("");
  const searchedNoteTitleLength = searchedNoteTitle.length;

  function modifyPanel(note: NoteStructure) {
    dispatch({
      type: StateHiddenPanel.modify,
      item: note,
      closeEditMode: closePanel,
    });
  }

  function deletePanel(note: NoteStructure) {
    dispatch({
      type: StateHiddenPanel.delete,
      item: note,
      closeEditMode: closePanel,
    });
  }

  function closePanel() {
    dispatch({ type: StateHiddenPanel.hidden });
  }

  const notesElements = allNotes
    .filter((item) => item.title.startsWith(searchedNoteTitle))
    .map((item, index) => (
      <NoteEditCard
        key={index}
        title={item.title}
        numOfFirstLetersToHighlight={searchedNoteTitleLength}
        category={item.category}
        text={item.text}
        modifyItem={() => {
          modifyPanel(item);
        }}
        deleteItem={() => {
          deletePanel(item);
        }}
      />
    ));

  return (
    <div className="edit-note-container">
      {panelContent}
      {numOfNotes === 0 && <h2>"You don't have any notes to edit!"</h2>}
      {numOfNotes > 3 && (
        <InputText
          required={false}
          text="Search the note by name"
          onChangeHandler={(str) => {
            setSearchNotetitle(str);
          }}
        />
      )}
      {notesElements.length > 0 && (
        <div className="notes-container">{notesElements}</div>
      )}
      {notesElements.length === 0 && searchedNoteTitleLength > 0 && (
        <h2>You don't have any note with this name!</h2>
      )}
    </div>
  );
}
