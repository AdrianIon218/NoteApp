import { forwardRef, useId } from "react";
declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    custom?: string;
  }
}

interface IProps {
  text: string;
  customText?: string;
  minLength?: number;
  maxLength?: number;
  value?: string;
  placeholder?: string;
  onChangeHandler?: (e:string)=>void;
}

function InputText(props: IProps, ref: any) {
  const titleId = `${useId()}-idNoteTitle`;
  return (
    <div className="field inputDiv">
      <label htmlFor={titleId} className="txt-bold">
        {props.text}
      </label>
      <input
        type="text"
        id={titleId}
        name="noteTitle"
        autoComplete="off"
        ref={ref}
        minLength={props.minLength || 0}
        maxLength={props.maxLength || 100}
        title=""
        required
        defaultValue={props.value}
        placeholder={props.placeholder && `ex: ${props.placeholder}`}
        onChange={(e)=>{
          const txt = e.target.value;
          props.onChangeHandler?.(txt);
        }}
      />
      {props.customText && (
        <label htmlFor={titleId} custom={props.customText}></label>
      )}
    </div>
  );
}

export default forwardRef(InputText);
