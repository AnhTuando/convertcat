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
  const customerFromLocalStorage =
    JSON.parse(localStorage.getItem("Customer")) || [];
  const [data, setData] = useState(dataFromLocalStorage || []);
  const [customerData, setCustomerData] = useState(
    customerFromLocalStorage || []
  );

  useEffect(() => {
    localStorage.setItem("myArray", JSON.stringify(data));
  }, [data]);
  useEffect(() => {
    localStorage.setItem("Customer", JSON.stringify(customerData));
  }, [customerData]);
  return (
    <DataContext.Provider
      value={{ data, setData, customerData, setCustomerData }}
    >
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
