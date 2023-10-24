import { useId, useState } from "react";

interface IProps {
  options: string[];
  onSelection?: (str: string) => void;
}

function SelectOption(props: IProps) {
  const [currentOption, setCurrentOption] = useState(props.options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const listKey = useId();

  function toggleBtn() {
    setIsOpen((curr) => !curr);
  }

  function optionClick(e:any) {
    const optionSelected = e.target.value;
    if(optionSelected !== currentOption){
      setCurrentOption(optionSelected);
      props.onSelection?.(optionSelected);
    }
    setIsOpen(false);
  }

  return (
    <div className="select-interactive">
      <div
        className={`select-interactive__ctn ${
          isOpen && "select-interactive__ctn--open"
        }`}
        onClick={toggleBtn}
        title={currentOption}
        role="button"
        tabIndex={0}
        onBlur={()=>setIsOpen(false)}
      >
        {currentOption}
      </div>
      <div className={`select-interactive__options ${isOpen && "select-interactive__options--open"}`} 
        >
        {props.options.map((option, index) => (
          <button key={`${listKey}-${index}`} value={option} onClick={e=>optionClick(e)} title={option}>{option}</button>
        ))}
      </div>
    </div>
  );
}

export default SelectOption;
