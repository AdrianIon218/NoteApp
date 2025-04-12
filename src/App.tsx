import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingSpinner from "./components/CustomedComponents/LoadingSpinner";
import NavComp from "./components/Layout/NavComp";
import Footer from "./components/Layout/Footer";
import { Grid2, ThemeProvider } from "@mui/material";
import AppTheme from "./AppTheme";

const NoteComp = lazy(() => import("./components/NotesPage/NoteComp"));
const ContactForm = lazy(() => import("./components/OtherPages/ContactForm"));
const Settings = lazy(() => import("./components/OtherPages/Settings"));
const NoPage = lazy(() => import("./components/OtherPages/NoPage"));

type RouteItem = { path: string; component: JSX.Element };

const paths: RouteItem[] = [
  { path: "/", component: <Navigate replace to="/notes/view-notes" /> },
  { path: "/notes", component: <Navigate replace to="/notes/view-notes" /> },
  { path: "/notes/:option", component: <NoteComp /> },
  { path: "/settings", component: <Settings /> },
  { path: "/contact", component: <ContactForm /> },
  { path: "*", component: <NoPage /> },
];

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <HashRouter>
        <Grid2
          m={0}
          p={1}
          color="customBlue.dark"
          sx={(style) => ({
            minHeight: "135vh",
            pt: 15,
            pb: 20,
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            border: "2px solid currentColor",
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            rowGap: "3rem",
            backgroundColor: "white",
            background:
              "radial-gradient( circle, rgba(255, 255, 255, 1) 0%, rgba(148, 187, 233, 1) 100%)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
            overflow: "hidden",

            [style.breakpoints.down("sm")]: {
              borderRadius: 0,
              pt: 37,
            },
          })}
        >
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
        </Grid2>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
