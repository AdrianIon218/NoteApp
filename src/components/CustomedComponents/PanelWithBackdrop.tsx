import { useRef, useImperativeHandle, forwardRef } from "react";

interface IProps {
  closePanel: () => void;
  children: React.ReactNode;
  plusClass?: string;
}

export interface PanelMethodes {
  closeBackdrop: () => void;
}

function PanelWithBackdrop(props: IProps, ref?: any) {
  const backdropPanel = useRef<HTMLDivElement>(null);
  const formPanel = useRef<HTMLDivElement>(null);

  function exitForm() {
    formPanel.current?.classList.add("anim-line-down");
    setTimeout(() => {
      props.closePanel();
    }, 600);
  }

  useImperativeHandle(ref, () => ({
    closeBackdrop: exitForm,
  }));

  return (
    <div className="backdrop" ref={backdropPanel} onClick={exitForm}>
      <div className="panel-grid" ref={formPanel}>
        <div
          className={` ${props.plusClass} panel-container`}
          onClick={(event) => event.stopPropagation()}
        >
          {props.children}
        </div>
        <div className="close-btn-x" onClick={exitForm} />
      </div>
    </div>
  );
}

export default forwardRef(PanelWithBackdrop);
