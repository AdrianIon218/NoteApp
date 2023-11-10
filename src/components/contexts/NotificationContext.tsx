import { createContext, useContext, useState } from "react";
import TemporalNotification from "../CustomedComponents/TemporalNotification";

export const NotificationCtx = createContext<{
  showNotification: (str: string, type?: string) => void;
}>({
  showNotification: (str: string, type?: string) => {},
});

export function useNotification() {
  const context = useContext(NotificationCtx);
  if (context === undefined) {
    throw new Error(
      "NotificationContext was used outside of the NotificationProvider",
    );
  }
  return context;
}

interface IProps {
  children: any;
}

function NotificationProvider(props: IProps) {
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

export default NotificationProvider;
