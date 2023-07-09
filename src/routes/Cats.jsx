import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Feedback from "../components/Feedback";
import Special from "../components/Special";
import CatsContent from "../components/CatsContent";
import NavMobile from "../components/NavMobile";
export default function Cats() {
  return (
    <>
      <Header></Header>
      <Navigation></Navigation>
      <NavMobile />
      <CatsContent></CatsContent>
      <Feedback />
      <Special />
      <Footer />
    </>
  );
}
