import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Special from "../components/Special";
import OtherDetailContext from "../components/OtherDetailContent";
export default function OthersProducts({ category }) {
  return (
    <>
      <Header></Header>
      <Navigation></Navigation>
      <OtherDetailContext category={category} />
      <Special></Special>
      <Footer></Footer>
    </>
  );
}
