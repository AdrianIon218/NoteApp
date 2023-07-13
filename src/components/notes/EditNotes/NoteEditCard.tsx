import classes from "./EditNote.module.css";
import { NoteStructure, categoryValues } from "../../stylingStructures";

interface IProps extends Partial<NoteStructure> {
  modifyItem: () => void;
  deleteItem: () => void;
}

export default function NoteEditCard(props: IProps) {
  return (
    <div className={classes["note-item-edit"]}>
      <h2 title={props.title}>{props.title}</h2>
      {props.categorySelected !== categoryValues[0] && (
        <label>{props.categorySelected}</label>
      )}
      <div className={classes["edit-btn"]} onClick={() => props.modifyItem()}>
        <button>edit</button>
      </div>
      <div className={classes["edit-btn"]} onClick={() => props.deleteItem()}>
        <button className={classes.delete}>delete</button>
      </div>
    </div>
  );
}
