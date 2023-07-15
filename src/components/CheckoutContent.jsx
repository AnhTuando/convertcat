import "../checkout.css";
import CheckoutCarts from "./CheckoutCarts";
import CheckoutPayment from "./CheckoutPayment";
import Ordered from "./Ordered";
import Title from "./Title";
import { useState, useEffect, createContext } from "react";
export const DataContext = createContext([]);
export default function CheckoutContent() {
  const dataFromLocalStorage =
    JSON.parse(localStorage.getItem("myArray")) || [];
  const [data, setData] = useState(dataFromLocalStorage || []);

  useEffect(() => {
    localStorage.setItem("myArray", JSON.stringify(data));
  }, [data]);
  return (
    <DataContext.Provider value={{ data, setData }}>
      <section className="content mb-4 content-soft-bg">
        <div className="container">
          <div className="row">
            <Title children={"Giỏ Hàng"} />
            <CheckoutCarts></CheckoutCarts>
            <CheckoutPayment></CheckoutPayment>
            <Title children={"Đơn Mua"} />
            <Ordered />
          </div>
        </div>
      </section>
    </DataContext.Provider>
  );
}
