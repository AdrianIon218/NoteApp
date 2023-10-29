import Navcomp from "./NavComp";
import Footer from "./Footer";
import NotificationContextProvider from "../Contexts/NotificationContext";

export default function Layout(props: any) {
  return (
    <NotificationContextProvider>
      <Navcomp />
      <main> {props.children} </main>
      <Footer />
    </NotificationContextProvider>
  );
}
