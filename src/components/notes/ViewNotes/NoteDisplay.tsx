import classes from "./ViewNotes.module.css";
import { NoteStructure } from "../../stylingStructures";
import React, { useRef } from "react";

interface IProps {
  closeNote: () => void;
  note: NoteStructure;
}

export default function NoteDisplay(props: IProps) {
  const { title, categorySelected, text } = props.note;
  const noteRef = useRef<HTMLDivElement>(null);

  const textWithNewLines = text.split("\n").map((item, index) => {
    return (
      <React.Fragment key={index}>
        {item}
        <br />
      </React.Fragment>
    );
  });

  function closeNote() {
    noteRef.current!.classList.add(classes["anim-line-down"]);
    setTimeout(props.closeNote, 700);
  }

  return (
    <div className={classes.backdrop}>
      <div className={classes["note-centered"]} ref={noteRef}>
        <label>{categorySelected}</label>
        <button className={classes["close-btn"]} onClick={closeNote}>
          &times;
        </button>
        <h2 title={title}>{title}</h2>
        <div className={classes["note-text"]}>{textWithNewLines}</div>
      </div>
    </div>
  );
}
