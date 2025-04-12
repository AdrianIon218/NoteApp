import { useId } from "react";
import { Link } from "react-router-dom";
import { NotePagesAvailable } from "../../CommonInterfaces";

export const enum ButtonSelected {
  viewNotes,
  createNote,
  editNote,
}

const sideBarElements = [
  { path: NotePagesAvailable.VIEW_NOTES, navTitle: "My Notes" },
  { path: NotePagesAvailable.CREATE_NOTE, navTitle: "New Note" },
  { path: NotePagesAvailable.EDIT_NOTES, navTitle: "Edit Notes" },
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
