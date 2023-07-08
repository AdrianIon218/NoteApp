import Content from "../content/Content";
import Navcomp from "../navcomp/NavComp";
import Footer from "../footer/Footer";

export default function Layout(props:any){
  return (<> <Navcomp />
  <Content> {props.children} </Content>
  <Footer />
  </>);
}