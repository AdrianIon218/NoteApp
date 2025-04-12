import { useRef } from "react";
import PanelWithBackdrop, {
  PanelMethodes,
} from "../../CustomedComponents/PanelWithBackdrop";
import { useDispatch } from "react-redux";
import { deleteNoteById } from "../../../store/notesSlice";

interface Iprops {
  closeDeleteForm: () => void;
  id: string;
}

export default function DeleteForm(props: Iprops) {
  const panelRef = useRef<PanelMethodes>(null);
  const dispatch = useDispatch();

  function closeForm() {
    panelRef.current?.closeBackdrop();
  }

  function deleteItem() {
    dispatch(deleteNoteById(props.id));
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
