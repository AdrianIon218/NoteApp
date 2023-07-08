import generalcls from './GeneralFormElements.module.css'
import inputcls from './inputText.module.css'
import {forwardRef, useId} from 'react'
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    custom?: string;
  }
}

interface IProps{
  text:string;
  customText?:string;
  minLength?:number;
  maxLength?:number;
  value?:string;
}

function InputText(props:IProps, ref:any){
  const titleId = `${useId()}-idNoteTitle`;
  return (<div className={`${generalcls.field} ${inputcls.inputDiv}`}>
    <label htmlFor={titleId}>{props.text}</label>
    <input type='text' id={titleId} name='noteTitle' autoComplete="off" ref={ref}
      minLength={props.minLength||0} maxLength={props.maxLength||100} title="" required 
      defaultValue={props.value} />
    {props.customText && <label htmlFor={titleId} custom={props.customText}></label>}
  </div>);
}

export default forwardRef(InputText);
