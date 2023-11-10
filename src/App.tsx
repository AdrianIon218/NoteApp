import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout/Layout";
import LoadingSpinner from "./components/CustomedComponents/LoadingSpinner";

const NoteComp = lazy(() => import("./components/NotesPage/NoteComp"));
const ContactForm = lazy(() => import("./components/OtherPages/ContactForm"));
const Settings = lazy(() => import("./components/OtherPages/Settings"));
const NoPage = lazy(() => import("./components/OtherPages/NoPage"));

function App() {
  type route = { path: string; component: JSX.Element };

  const paths: route[] = [
    { path: "/", component: <Navigate replace to="/notes/view-notes" /> },
    { path: "/notes", component: <Navigate replace to="/notes/view-notes" /> },
    { path: "/notes/:option", component: <NoteComp /> },
    { path: "/settings", component: <Settings /> },
    { path: "/contact", component: <ContactForm /> },
    { path: "*", component: <NoPage /> },
  ];

  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {paths.map((path, index) => (
            <Route path={path.path} element={path.component} key={index} />
          ))}
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
