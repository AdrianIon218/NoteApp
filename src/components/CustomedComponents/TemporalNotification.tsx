import { useEffect } from "react";

interface IProps {
  hideMessage: () => void;
  children: React.ReactNode;
  type?: string;
}

function TemporalNotification({ hideMessage, children, type }: IProps) {
  useEffect(() => {
    const timeInMS = 2750; // the notfication is for 2s(fade in+) + 0.75s animation to fade out

    const timer = setTimeout(() => {
      hideMessage();
    }, timeInMS);
    return () => clearTimeout(timer);
  }, [hideMessage]);

  return (
    <div
      className={`notification ${
        type === "warning" ? "notification--warning" : ""
      }`}
    >
      {children}
    </div>
  );
}

export default TemporalNotification;
