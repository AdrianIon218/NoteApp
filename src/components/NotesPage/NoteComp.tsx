import { Navigate, useParams } from "react-router-dom";
import NoteNav from "./NoteNav";
import NoteBox from "./NoteBox";

const optionsAvailable = ["view-notes", "create-note", "edit-notes"];

export default function NoteComp() {
  const { option } = useParams();

  if (option === undefined || !optionsAvailable.includes(option)) {
    return <Navigate replace to={"/page-not-found"} />;
  }

  return (
    <section className="note-container">
      <NoteNav option={option} />
      <NoteBox option={option} />
    </section>
  );
}
