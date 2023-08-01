import { useRef } from "react";

interface IProps {
  closePanel: () => void;
  children: React.ReactNode;
}

export default function FormWithBackdrop(props: IProps) {
  const backdropPanel = useRef<HTMLDivElement>(null);
  const formPanel = useRef<HTMLDivElement>(null);

  function exitForm() {
    formPanel.current?.classList.add("anim-line-down");
    setTimeout(() => {
      props.closePanel();
    }, 600);
  }

  return (
    <div className="backdrop" ref={backdropPanel} onClick={exitForm}>
      <div
        className="form-container"
        ref={formPanel}
        onClick={(event) => event.stopPropagation()}
      >
        {props.children}
        <button className="close-btn" onClick={exitForm}>
          &times;
        </button>
      </div>
    </div>
  );
}
