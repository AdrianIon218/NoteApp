import Navcomp from "./NavComp";
import Footer from "./Footer";

export default function Layout(props: any) {
  return (
    <>
      {" "}
      <Navcomp />
      <main> {props.children} </main>
      <Footer />
    </>
  );
}
