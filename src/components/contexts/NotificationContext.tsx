import { createContext, useState } from "react";
import TemporalNotification from "../CustomedComponents/TemporalNotification";

export const NotificationCtx = createContext<{
  showNotification: (str: string) => void;
}>({
  showNotification: (str: string) => {},
});

interface IProps {
  children: any;
}

function NotificationContextProvider(props: IProps) {
  const [showMessage, setShowMessage] = useState(false);
  const [notificationText, setNotificationText] = useState("");

  const currentContext = {
    showNotification: (str: string) => {
      setShowMessage(true);
      setNotificationText(str);
    },
  };

  return (
    <NotificationCtx.Provider value={currentContext}>
      {showMessage && (
        <TemporalNotification hideMessage={() => setShowMessage(false)}>
          {notificationText}
        </TemporalNotification>
      )}
      {props.children}
    </NotificationCtx.Provider>
  );
}

export default NotificationContextProvider;
