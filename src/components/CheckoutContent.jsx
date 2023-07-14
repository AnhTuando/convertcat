import "../checkout.css";
import CheckoutCarts from "./CheckoutCarts";
import CheckoutPayment from "./CheckoutPayment";
import Title from "./Title";

export default function CheckoutContent() {
  return (
    <section className="content mb-4 content-soft-bg">
      <div className="container">
        <div className="row">
          <Title children={"Giỏ Hàng"} />
          <CheckoutCarts></CheckoutCarts>
          <CheckoutPayment></CheckoutPayment>
        </div>
      </div>
    </section>
  );
}
