import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import NotesProvider from "./components/Contexts/NotesContext";
import CategoryContextProvider from "./components/Contexts/CategoryContext";
import { StrictMode } from "react";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <NotesProvider>
    <CategoryContextProvider>
      <StrictMode>
        <HashRouter>
          <App />
        </HashRouter>
      </StrictMode>
    </CategoryContextProvider>
  </NotesProvider>,
);
