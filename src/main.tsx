import ReactDOM from "react-dom/client";
import NotesProvider from "./components/Contexts/NotesContext";
import CategoryProvider from "./components/Contexts/CategoryContext";
import NotificationProvider from "./components/Contexts/NotificationContext";
import { StrictMode } from "react";
import "@fontsource/roboto";
import App from "./App";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <NotesProvider>
      <CategoryProvider>
        <NotificationProvider>
          <App />
        </NotificationProvider>
      </CategoryProvider>
    </NotesProvider>
  </StrictMode>
);
