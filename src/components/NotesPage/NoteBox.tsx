import CreateNote from "./CreateNote";
import ViewNotes from "./ViewNotes/ViewNotes";
import EditNote from "./EditNotes/EditNote";

const compsToShow = [
  { path: "view-notes", component: <ViewNotes /> },
  { path: "create-note", component: <CreateNote /> },
  { path: "edit-notes", component: <EditNote /> },
];

export default function NoteBox({ option }: { option: string }) {
  const compSelected = compsToShow.filter((item) => item.path === option)[0];

  return <section className="note-box">{compSelected.component}</section>;
}
