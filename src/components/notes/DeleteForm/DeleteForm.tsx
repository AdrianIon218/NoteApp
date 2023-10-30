import { useRef, useContext } from "react";
import { NotesContext } from "../../Contexts/NotesContext";
import PanelWithBackdrop, {
  PanelMethodes,
} from "../../CustomedComponents/PanelWithBackdrop";

interface Iprops {
  closeDeleteForm: () => void;
  id: string;
}

export default function DeleteForm(props: Iprops) {
  const notesContext = useContext(NotesContext);
  const panelRef = useRef<PanelMethodes>(null);

  function closeForm() {
    panelRef.current?.closeBackdrop();
  }

  function deleteItem() {
    notesContext.deleteNoteById(props.id);
    closeForm();
  }

  return (
    <PanelWithBackdrop
      closePanel={props.closeDeleteForm}
      plusClass="panel-mind-extended"
      ref={panelRef}
    >
      <h1>Do you really want to delete this note?</h1>
      <div>
        <button className="confirmation-btn" onClick={deleteItem}>
          Yes
        </button>
        <button className="confirmation-btn btn-no" onClick={closeForm}>
          No
        </button>
      </div>
    </PanelWithBackdrop>
  );
}
