import classes from './FormWithBackdrop.module.css'
import {useRef} from 'react'

interface IProps{
  closePanel:()=>void;
  children: React.ReactNode;
}

export default function FormWithBackdrop(props:IProps){
  const backdropPanel= useRef<HTMLDivElement>(null);
  const formPanel = useRef<HTMLDivElement>(null);

  function exitForm(){
    formPanel.current?.classList.add(classes['anim-line-down']);
    setTimeout(()=>{props.closePanel();},600)
  }

  return (
    <div className={classes.backdrop} ref={backdropPanel}>
      <div className={classes['form-container']} ref={formPanel}>
      {props.children}
      <button className={classes['close-btn']} onClick={exitForm}>&times;</button>
      </div>
    </div>
  );
}