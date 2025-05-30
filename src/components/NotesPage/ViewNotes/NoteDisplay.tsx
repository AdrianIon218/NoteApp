import React from "react";
import PanelWithBackdrop from "../../CustomedComponents/PanelWithBackdrop";
import { NoteStructure } from "../../../CommonInterfaces";

interface IProps {
  closeNote: () => void;
  note: NoteStructure;
}

export default function NoteDisplay(props: IProps) {
  const { title, category, text } = props.note;

  const textWithNewLines = text.split("\n").map((item, index) => {
    return (
      <React.Fragment key={index}>
        {item}
        <br />
      </React.Fragment>
    );
  });

  return (
    <PanelWithBackdrop
      closePanel={props.closeNote}
      plusClass="panel-max-extended"
    >
      {(category ?? category !== "") ? (
        <label className="category-label">{category}</label>
      ) : null}
      <h2 title={title}>{title}</h2>
      <div className="note-text">{textWithNewLines}</div>
    </PanelWithBackdrop>
  );
}
