import { useState, useContext } from "react";
import CheckoutItems from "./CheckoutItems";
import { DataContext } from "./CheckoutContent";
export default function CheckoutCarts() {
  const { data, setData } = useContext(DataContext);
  const handleDeleleProduct = (id) => {
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
  };
  const handleIncrease = (id) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1, // Tăng giá trị quantity lên 1
        };
      }
      return item;
    });
    setData(updatedData);
  };
  const handleDecrease = (id) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        if (item.quantity > 1) {
          return {
            ...item,

            quantity: item.quantity - 1, // Tăng giá trị quantity lên 1
          };
        }
      }
      return item;
    });
    setData(updatedData);
  };

  return (
    <div className="col-12 col-lg-6 check-cart bg-light p-4 rounded-2 mb-2">
      <div className="row">
        <div className="wrap-update-title d-flex justify-content-between">
          <div className="title text-gr fw-medium">SẢN PHẨM</div>
        </div>
        <div className="wrap-cart-items my-2">
          {data.map((item) => (
            <CheckoutItems
              name={item.name}
              img={item.img}
              price={item.price}
              attachProduct={item.attachProduct}
              key={item.id}
              quantity={item.quantity}
              handleDelete={() => handleDeleleProduct(item.id)}
              handleIncrease={() => handleIncrease(item.id)}
              handleDecrease={() => handleDecrease(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
