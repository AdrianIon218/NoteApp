import { forwardRef } from "react";

interface IProps {
  name: string;
  value?: string;
  onChangeHandler?: (str:string)=>void
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
        onChange={(e)=>{
          const txt = e.currentTarget.value;
          props.onChangeHandler?.(txt);
        }}
      />
    </div>
  );
}

export default forwardRef(TextArea);
