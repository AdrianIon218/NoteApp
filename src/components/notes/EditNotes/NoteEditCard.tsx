import { NoteStructure, categoryValues } from "../../stylingStructures";

interface IProps extends Partial<NoteStructure> {
  modifyItem: () => void;
  deleteItem: () => void;
  numOfFirstLetersToHighlight?: number
}

export default function NoteEditCard(props: IProps) {
  return (
    <div className="note-item-edit">
        {!props.numOfFirstLetersToHighlight ? 
         <h2 title={props.title}> 
          {props.title} 
         </h2> :
         <h2 title={props.title}>
          <span className="text-highlighted">
           {props.title?.slice(0, props.numOfFirstLetersToHighlight)}
          </span>{props.title?.slice(props.numOfFirstLetersToHighlight)}
         </h2>
         }
      
      {props.category !== categoryValues[0] && <label>{props.category}</label>}
      <div className="edit-btn" onClick={() => props.modifyItem()}>
        <button>edit</button>
      </div>
      <div className="edit-btn" onClick={() => props.deleteItem()}>
        <button className="delete">delete</button>
      </div>
    </div>
  );
}
