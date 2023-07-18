import { forwardRef } from "react";

interface IProps {
  name: string;
  value?: string;
}

function TextArea(props: IProps, ref: any) {
  return (
    <div className="field">
      <textarea
        className="textArea"
        placeholder="Write here ..."
        autoComplete="off"
        name={props.name}
        ref={ref}
        defaultValue={props.value}
      />
    </div>
  );
}

export default forwardRef(TextArea);
