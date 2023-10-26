import { useContext, useReducer } from "react";
import { NotesContext } from "../../Contexts/NotesContext";
import NoteEditCard from "./NoteEditCard";
import useSortNotes from "../../CustomedComponents/useSortNotes";
import { NoteStructure } from "../../stylingStructures";
import FormModifyNote from "../cacat/FormModifyNote";
import DeleteForm from "../DeleteForm/DeleteForm";

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

  const notesElements = allNotes.map((item, index) => (
    <NoteEditCard
      key={index}
      title={item.title}
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
      <h2>
        {allNotes.length === 0
          ? "You have no notes to edit ."
          : allNotes.length === 1
          ? "You have only 1 note ."
          : "You have " +
            allNotes.length.toString() +
            " notes that can be modified ."}
      </h2>
      {allNotes.length > 0 && (
        <div className="notes-container">{notesElements}</div>
      )}
    </div>
  );
}
