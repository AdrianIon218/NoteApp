import classes from "./Note.module.css";
import { useState } from "react";
import React from "react";

export const enum ButtonSelected {
  none,
  viewNotes,
  createNote,
  editNote,
}

const sideBarElements = [
  { btnValue: ButtonSelected.viewNotes, navTitle: "My Notes" },
  { btnValue: ButtonSelected.createNote, navTitle: "New Note" },
  { btnValue: ButtonSelected.editNote, navTitle: "Edit Note" },
];

function NoteNav(props: any) {
  const [btnSelected, setBtnSelected] = useState(() => ButtonSelected.none);

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
      className={
        btnSelected === item.btnValue
          ? classes.selected
          : classes["not-selected"]
      }
      name={item.btnValue.toString()}
      onClick={onChange}
      key={index}
    >
      {item.navTitle}
    </button>
  ));

  return <section className={classes.nav}>{sideBar}</section>;
}

export default NoteNav;
