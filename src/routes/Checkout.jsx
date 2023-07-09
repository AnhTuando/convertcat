import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Special from "../components/Special";
import Footer from "../components/Footer";
import CheckoutContent from "../components/CheckoutContent";
export default function Checkout() {
  return (
    <>
      <Header></Header>
      <Navigation></Navigation>
      <CheckoutContent />
      <Special />
      <Footer />
    </>
  );
}
