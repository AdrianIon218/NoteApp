import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NoteComp from "./components/notes/NoteComp";
import ContactForm from "./components/Pages/ContactForm";
import Settings from "./components/Pages/Settings";
import NoPage from "./components/Pages/NoPage";

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
      <Routes>
        {paths.map((path, index) => (
          <Route path={path.path} element={path.component} key={index} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
