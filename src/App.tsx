import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout/Layout";
import LoadingSpinner from "./components/CustomedComponents/LoadingSpinner";

const NoteComp = lazy(() => import("./components/notes/NoteComp"));
const ContactForm = lazy(() => import("./components/Pages/ContactForm"));
const Settings = lazy(() => import("./components/Pages/Settings"));
const NoPage = lazy(() => import("./components/Pages/NoPage"));

function App() {
  type route = { path: string; component: JSX.Element };

  const paths: route[] = [
    { path: "/", component: <NoteComp /> },
    { path: "/notes", component: <NoteComp /> },
    { path: "/settings", component: <Settings></Settings> },
    { path: "/support", component: <ContactForm></ContactForm> },
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
