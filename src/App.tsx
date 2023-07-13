import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NoteComp from "./components/notes/NoteComp";
import ContactForm from "./components/Contact/ContactForm";
import Settings from "./components/settings/Settings";

function App() {
  type route = { path: string; component: JSX.Element };

  const paths: route[] = [
    { path: "/", component: <NoteComp /> },
    { path: "/notes", component: <NoteComp /> },
    { path: "/settings", component: <Settings></Settings> },
    { path: "/support", component: <ContactForm></ContactForm> },
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
