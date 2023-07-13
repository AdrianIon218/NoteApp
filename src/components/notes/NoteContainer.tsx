import { ButtonSelected } from "./NoteNav";
import classes from "./Note.module.css";
import CreateNote from "./CreateNote";
import ViewNote from "./ViewNotes/ViewNotes";
import EditNote from "./EditNotes/EditNote";

interface IProps {
  currentStatus: ButtonSelected;
}

const compsToShow = [
  { noteState: ButtonSelected.viewNotes, component: <ViewNote /> },
  { noteState: ButtonSelected.createNote, component: <CreateNote /> },
  { noteState: ButtonSelected.editNote, component: <EditNote /> },
];

export default function NoteContainer({ currentStatus }: IProps) {
  const compSelected = compsToShow.filter(
    (item) => item.noteState === currentStatus,
  )[0];

  return (
    <section className={classes.noteContainer}>
      {compSelected.component}
    </section>
  );
}
