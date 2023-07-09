import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import CarouselIndex from "../components/Carousel";
import Categories from "../components/Categories";
import Feedback from "../components/Feedback";
import Special from "../components/Special";
import Footer from "../components/Footer";
import NavMobile from "../components/NavMobile";

export default function Index() {
  return (
    <>
      <Header></Header>
      <Navigation></Navigation>
      <NavMobile />
      <CarouselIndex />
      <Categories />
      <Feedback />
      <Special />
      <Footer />
    </>
  );
}
