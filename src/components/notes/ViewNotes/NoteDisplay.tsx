import FormWithBackdrop from "../../FormWithBackdrop/FormWithBackdrop";
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

  return (
    <FormWithBackdrop
      closePanel={props.closeNote}
      plusClass="note-max-extended"
    >
      {categorySelected ? <label>{categorySelected}</label> : null}
      <h2 title={title}>{title}</h2>
      <div className="note-text">{textWithNewLines}</div>
    </FormWithBackdrop>
  );
}
