import classes from './Settings.module.css'
import {useState} from 'react'
import FormWithBackdrop from './FormWithBackdrop/FormWithBackdrop';
import FormAddCategory from './FormWithBackdrop/FormAddCategory';
import FormDeleteCategory from './FormWithBackdrop/FormDeleteCategory';
import FormModifyCategory from './FormWithBackdrop/FormModifyCategory';

enum CategoryBtnState{
  none, Add, Delete, Modify
}

export default function Settings(){
  const [form, setFormShown] = useState<undefined | JSX.Element>();

  const closeForm = ()=>setFormShown(undefined);

  function showCorespondingPanel(btn:CategoryBtnState){
    switch(btn){
      case CategoryBtnState.none:
        setFormShown(undefined);
        break;
      case CategoryBtnState.Add:
        setFormShown(<FormWithBackdrop closePanel={closeForm}><FormAddCategory /></FormWithBackdrop>);
        break;
      case CategoryBtnState.Delete:
        setFormShown(<FormWithBackdrop closePanel={closeForm}><FormDeleteCategory /></FormWithBackdrop>);
        break;
      case CategoryBtnState.Modify:
        setFormShown(<FormWithBackdrop closePanel={closeForm}><FormModifyCategory /></FormWithBackdrop>);
        break;
    }
  }

  return (<>
  {form}
  <div className={classes['settings-panel']}>
    <div className={classes['forms-panel']}>
      <h2>Categories settings</h2>
      <button className={classes['btn-to-form']} onClick={()=>showCorespondingPanel(CategoryBtnState.Add)}>Add a new category</button>
      <button className={classes['btn-to-form']} onClick={()=>showCorespondingPanel(CategoryBtnState.Delete)}>Delete a category</button>
      <button className={classes['btn-to-form']} onClick={()=>showCorespondingPanel(CategoryBtnState.Modify)}>Modify a category</button>
    </div>
  </div></>);
}