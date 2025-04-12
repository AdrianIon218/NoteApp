import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";
import "@fontsource/roboto";
import "./styles/index.scss";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster
        toastOptions={{
          duration: 3000,
          style: {
            border: ".2rem double currentColor",
            padding: ".5rem",
          },
          success: {
            style: {
              color: "green",
            },
          },
          error: {
            style: {
              color: "red",
            },
          },
        }}
      />
      <App />
    </Provider>
  </StrictMode>
);
