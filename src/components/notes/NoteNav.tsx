import React, { useId, useState } from "react";

export const enum ButtonSelected {
  viewNotes,
  createNote,
  editNote,
}

const sideBarElements = [
  { btnValue: ButtonSelected.viewNotes, navTitle: "My Notes" },
  { btnValue: ButtonSelected.createNote, navTitle: "New Note" },
  { btnValue: ButtonSelected.editNote, navTitle: "Edit Note" },
];

interface IProps {
  initialNavState: ButtonSelected;
  setNavNotesState: (state: ButtonSelected) => void;
}

function NoteNav(props: IProps) {
  const [btnSelected, setBtnSelected] = useState(() => props.initialNavState);
  const listID = useId();

  function onChange(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const { currentTarget: target } = event;
    const btnSel: ButtonSelected = +target.name;
    if (btnSelected !== btnSel) {
      props.setNavNotesState(btnSel);
      setBtnSelected(btnSel);
    }
  }

  const sideBar = sideBarElements.map((item, index) => (
    <button
      className={btnSelected === item.btnValue ? "note-nav__selected" : ""}
      name={item.btnValue.toString()}
      onClick={onChange}
      key={`${listID}-${index}`}
    >
      {item.navTitle}
    </button>
  ));

  return <section className="note-nav">{sideBar}</section>;
}

export default NoteNav;
