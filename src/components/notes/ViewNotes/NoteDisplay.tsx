import PanelWithBackdrop from "../../CustomedComponents/PanelWithBackdrop";
import { NoteStructure } from "../../stylingStructures";
import React, { useRef } from "react";

interface IProps {
  closeNote: () => void;
  note: NoteStructure;
}

export default function NoteDisplay(props: IProps) {
  const { title, category, text } = props.note;
  const noteRef = useRef<HTMLDivElement>(null);

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
      plusClass="note-max-extended"
    >
      {category ?? category !== "" ? <label>{category}</label> : null}
      <h2 title={title}>{title}</h2>
      <div className="note-text">{textWithNewLines}</div>
    </PanelWithBackdrop>
  );
}
