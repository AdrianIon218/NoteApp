import CreateNote from "../notes/CreateNote";
import ViewNotes from "../notes/ViewNotes/ViewNotes";
import EditNote from "../notes/EditNotes/EditNote";

const compsToShow = [
  { path: "view-notes", component: <ViewNotes /> },
  { path: "create-note", component: <CreateNote /> },
  { path: "edit-notes", component: <EditNote /> },
];

export default function NoteBox({ option }: { option: string | undefined }) {
  const compSelected = compsToShow.filter((item) => item.path === option)[0];

  return <section className="note-box">{compSelected.component}</section>;
}
