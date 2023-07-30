import classes from "./TemporalNotification.module.css";
import { useEffect } from "react";

interface IProps {
  hideMessage: () => void;
  children: React.ReactNode;
  durationSeconds?: number;
}

function TemporalNotification(props: IProps) {
  useEffect(() => {
    let timeInMS = 2750; // the notfication is for 2s(fade in+) + 0.75s animation to fade out
    if (props.durationSeconds) {
      timeInMS = props.durationSeconds * 1000 + 750;
    }
    const timer = setTimeout(() => {
      props.hideMessage();
    }, timeInMS);
    return () => clearTimeout(timer);
  }, []);

  function divStyleDuration(duration: number) {
    const divStyle = {
      ["--display-time"]: duration.toString() + "s",
    } as React.CSSProperties;
    return divStyle;
  }

  return props.durationSeconds ? (
    <div
      className="notification"
      style={divStyleDuration(props.durationSeconds)}
    >
      {props.children}
    </div>
  ) : (
    <div className="notification">{props.children}</div>
  );
}

export default TemporalNotification;
