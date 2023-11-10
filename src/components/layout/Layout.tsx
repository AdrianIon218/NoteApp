import Navcomp from "./NavComp";
import Footer from "./Footer";
import NotificationProvider from "../Contexts/NotificationContext";

export default function Layout(props: any) {
  return (
    <NotificationProvider>
      <Navcomp />
      <main> {props.children} </main>
      <Footer />
    </NotificationProvider>
  );
}
