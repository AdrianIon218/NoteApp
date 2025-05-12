import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingSpinner from "./components/CustomedComponents/LoadingSpinner";
import NavComp from "./components/Layout/NavComp";
import Footer from "./components/Layout/Footer";
import { ThemeProvider } from "@mui/material";
import AppTheme from "./AppTheme";
import { LayoutGridCustom } from "./components/CustomedComponents/styledComponentsMUI";

const NotePage = lazy(() => import("./components/NotesPage/NotePage"));
const ContactForm = lazy(() => import("./components/OtherPages/ContactForm"));
const Settings = lazy(() => import("./components/OtherPages/Settings"));
const NoPage = lazy(() => import("./components/OtherPages/NoPage"));

type RouteItem = { path: string; component: JSX.Element };

const paths: RouteItem[] = [
  { path: "/", component: <Navigate replace to="/notes/view-notes" /> },
  { path: "/notes", component: <Navigate replace to="/notes/view-notes" /> },
  { path: "/notes/:option", component: <NotePage /> },
  { path: "/settings", component: <Settings /> },
  { path: "/contact", component: <ContactForm /> },
  { path: "*", component: <NoPage /> },
];

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <HashRouter>
        <LayoutGridCustom>
          <NavComp />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {paths.map((item) => (
                <Route
                  path={item.path}
                  element={item.component}
                  key={item.path}
                />
              ))}
            </Routes>
          </Suspense>
          <Footer />
        </LayoutGridCustom>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
