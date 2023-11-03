import { createContext, useState } from "react";
import TemporalNotification from "../CustomedComponents/TemporalNotification";

export const NotificationCtx = createContext<{
  showNotification: (str: string, type?: string) => void;
}>({
  showNotification: (str: string, type?: string) => {},
});

interface IProps {
  children: any;
}

function NotificationContextProvider(props: IProps) {
  const [showMessage, setShowMessage] = useState(false);
  const [notificationText, setNotificationText] = useState("");
  const [notificationType, setNotificationType] = useState("");

  const currentContext = {
    showNotification: (str: string, type?: string) => {
      setShowMessage(true);
      setNotificationText(str);
      setNotificationType(type ?? "");
    },
  };

  return (
    <NotificationCtx.Provider value={currentContext}>
      {showMessage && (
        <TemporalNotification
          hideMessage={() => setShowMessage(false)}
          type={notificationType}
        >
          {notificationText}
        </TemporalNotification>
      )}
      {props.children}
    </NotificationCtx.Provider>
  );
}

export default NotificationContextProvider;
