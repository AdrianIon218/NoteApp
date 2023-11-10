import { useId } from "react";
import { Link } from "react-router-dom";

export const enum ButtonSelected {
  viewNotes,
  createNote,
  editNote,
}

const sideBarElements = [
  { path: "view-notes", navTitle: "My Notes" },
  { path: "create-note", navTitle: "New Note" },
  { path: "edit-notes", navTitle: "Edit Notes" },
];

function NoteNav({ option }: { option: string }) {
  const listID = useId();

  const sideBar = sideBarElements.map((item, index) => (
    <Link
      className={option === item.path ? "note-nav__selected" : ""}
      to={"/notes/" + item.path}
      key={`${listID}-${index}`}
    >
      {item.navTitle}
    </Link>
  ));

  return <section className="note-nav">{sideBar}</section>;
}

export default NoteNav;
