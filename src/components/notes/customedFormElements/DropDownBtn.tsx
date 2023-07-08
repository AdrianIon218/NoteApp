import dropdowncls from './dropDownBtn.module.css'
import { CategoryContext } from '../../contexts/CategoryContext';
import {useMemo, useRef, useState, forwardRef, useImperativeHandle, useId, useContext} from 'react'
import { categoryValues } from '../../stylingStructures'

interface IProps{
  labelMessage: string;
  valueDefault?: string;
}

function DropDownBtn({labelMessage, valueDefault}:IProps, ref:any){
  const categories = useContext(CategoryContext);
  const [updateCat, setUpdateCat] = useState(true);
  const [blockedCategories, setBlockedCategories] = useState<string[]>([]);

  const listCategoriesBtn = useRef<HTMLButtonElement>(null);
  const [showDropDown, setShowDropDown] = useState('no-display');
  const toggleCategories = () =>{
    switch(showDropDown){
      case 'no-display':
        setShowDropDown('animation-go-down');
        break;
      case 'animation-go-down':
        setShowDropDown('animation-go-up');
        break;
      case 'animation-go-up':
        setShowDropDown('animation-go-down');
        break;
    }
  }

  const selectCategoryValue = (value:string)=>{
    listCategoriesBtn.current!.innerText = value;
    listCategoriesBtn.current!.name = value;
  }

  let categoriesElements = useMemo(() => {
    return <>
      {categories.getCategories().map( (item,index) => {
        return !blockedCategories.includes(item.trim())? 
        (<button type='button' key={index} onClick={()=>selectCategoryValue(item)}> {item} </button>):
        (<button type='button' key={index} className={dropdowncls['btn-blocked']}> {item} </button>);
        }  )
      } </>}, [updateCat, blockedCategories]);
  
  useImperativeHandle(ref, ()=>({
    getSelectValue(){
      return (listCategoriesBtn.current as HTMLButtonElement).name;
    },
    resetSelectValue(){
      selectCategoryValue('');
    },
    setValue(value:string){
      if(categories.getCategories().indexOf(value) !== -1){
        selectCategoryValue(value === 'none'? '':value);
      }
    },
    updateCategory(){
      setUpdateCat(oldState => !oldState);
    },
    blockCategories(arr:string[]){
      setBlockedCategories([...arr]);
    }
  }),[]);

  const noFocus = ()=>{
    if (showDropDown === 'animation-go-down') {
      setShowDropDown('animation-go-up');
    }
  }

  const btnId = useId();

  return (<div className={dropdowncls.field}>
    <label htmlFor={btnId} className={dropdowncls['label-dropdown']}>
      {labelMessage}
    </label>
    <div className={dropdowncls.btnWithDropDown} onBlur={() => noFocus()}>
      <button type='button' id={btnId} 
        ref={listCategoriesBtn} name={valueDefault || categoryValues[0]}
        className={`${dropdowncls['btn-category']} ${showDropDown === 'animation-go-down' ? dropdowncls['btn-category-active']:'' }`} 
        onClick={()=>toggleCategories()}>{valueDefault}</button>
      
      <div className={`${dropdowncls.dropdown} ${dropdowncls[showDropDown]}`}>
        {categoriesElements}
      </div>
    </div>
  </div>);
}

export default forwardRef(DropDownBtn);