import { useRef, useContext } from "react";
import { NotesContext } from "../../Contexts/NotesContext";

interface Iprops {
  closeDeleteForm: () => void;
  id: string;
}

export default function DeleteForm(props: Iprops) {
  const deleteForm = useRef<HTMLDivElement>(null);
  const notesContext = useContext(NotesContext);

  function closeForm() {
    deleteForm.current!.classList.add("anim-line-down-del");
    setTimeout(props.closeDeleteForm, 350);
  }

  function deleteItem() {
    notesContext.deleteNoteById(props.id);
    deleteForm.current!.classList.add("anim-line-down-del");
    setTimeout(props.closeDeleteForm, 350);
  }

  return (
    <div className="backdrop" onClick={closeForm}>
      <div
        className="delete-form"
        ref={deleteForm}
        onClick={(event) => event.stopPropagation()}
      >
        <button className="close-btn" onClick={closeForm}>
          &times;
        </button>
        <h2>Do you really want to delete this note ?</h2>
        <div>
          <button className="del-btn" onClick={deleteItem}>
            Yes
          </button>
          <button className="del-btn btn-no" onClick={closeForm}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}
