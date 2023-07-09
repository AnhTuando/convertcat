import Navigation from "../components/Navigation";
import Header from "../components/Header";
import OthersContent from "../components/OthersContent";
import Special from "../components/Special";
import Footer from "../components/Footer";
import Title from "../components/Title";
import NavMobile from "../components/NavMobile";
import "../others.css";
export default function Others({ category }) {
  return (
    <>
      <Header></Header>
      <Navigation></Navigation>
      <NavMobile />
      <section className="product my-3">
        <div className="container">
          <Title children={"Sản Phẩm"} />
          <OthersContent category={category} />
        </div>
      </section>
      <Special />
      <Footer />
    </>
  );
}
