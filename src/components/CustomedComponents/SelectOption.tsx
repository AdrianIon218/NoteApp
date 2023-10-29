import { forwardRef, useId, useState } from "react";
import { useImperativeHandle } from "react";

interface IProps {
  options: string[];
  onSelection: (str: string) => void;
  defaultOption?: String;
}

function SelectOption(props: IProps, ref?: any) {
  const [currentOption, setCurrentOption] = useState(
    props.defaultOption ?? props.options[0],
  );
  const [isOpen, setIsOpen] = useState(false);
  const listKey = useId();

  useImperativeHandle(ref, () => ({
    resetSelectValue() {
      setCurrentOption(props.defaultOption ?? props.options[0]);
    },
  }));

  function toggleBtn() {
    setIsOpen((curr) => !curr);
  }

  function optionClick(e: any) {
    const optionSelected = e.target.value;
    if (optionSelected !== currentOption) {
      setCurrentOption(optionSelected);
      props.onSelection(optionSelected);
    }
    setIsOpen(false);
  }

  return (
    <div className="select-interactive">
      <div
        className={`select-interactive__ctn ${
          isOpen ? "select-interactive__ctn--open" : ""
        }`}
        onClick={toggleBtn}
        title={currentOption.toString()}
        role="button"
        tabIndex={0}
        onBlur={() => setIsOpen(false)}
      >
        {currentOption}
      </div>
      <div
        className={`select-interactive__options ${
          isOpen ? "select-interactive__options--open" : ""
        }`}
      >
        {props.options.map((option, index) => (
          <button
            type="button"
            key={`${listKey}-${index}`}
            value={option}
            onClick={optionClick}
            title={option}
            className={option === currentOption ? "selected" : ""}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default forwardRef(SelectOption);
