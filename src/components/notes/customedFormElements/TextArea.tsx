import generalcls from './GeneralFormElements.module.css'
import textareacls from './textArea.module.css'
import {forwardRef} from 'react'

interface IProps{
  name:string;
  value?:string
}

function TextArea(props:IProps, ref:any){
  return (<div className={generalcls.field}>
    <textarea className={textareacls.textArea} placeholder='Write here ...' autoComplete="off" name={props.name} ref={ref} defaultValue={props.value} />
  </div>);
}

export default forwardRef(TextArea);